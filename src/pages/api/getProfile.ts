// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { JSDOM } from "jsdom";
import * as admin from "firebase-admin";
import MarkdownIt from "markdown-it";

type Res = {
  __html: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Res>) {
  const storage = admin.storage();
  const downloadText = await storage.bucket().file("admin/profile.md").download();
  const htmlString = new MarkdownIt({
    html: true,
    linkify: true,
    breaks: true,
    typographer: true,
  }).render(downloadText[0].toString("utf-8"));
  // const htmlString = "<p>text</p>";
  const tokenListDL = await storage.bucket().file("admin/token.json").download();
  const tokenList = JSON.parse(tokenListDL[0].toString("utf-8"));

  const dom = new JSDOM(htmlString);
  const level = String(req.query.token) in tokenList ? tokenList[String(req.query.token)] : 0;
  const levels = Array(10 - level)
    .fill(0)
    .map((_, i) => level + 1 + i);

  levels.forEach((l) => {
    const item = Array.from(dom.window.document.body.querySelectorAll(`.level${l}`));
    item.forEach((v) => {
      if (v.textContent) {
        v.textContent = "■".repeat(v.textContent.length);
        console.log(v.textContent);
      }
    });
  });

  res.status(200).json({ __html: dom.window.document.body.innerHTML });
}
