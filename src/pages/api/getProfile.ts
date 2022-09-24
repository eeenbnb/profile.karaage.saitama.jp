// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { JSDOM } from "jsdom";
import getFirebaseHtml from "~/lib/getFirebaseHtml";
import getFirebaseTokens from "~/lib/getFirebaseTokens";
import getFirebaseDecodeToken from "~/lib/getFirebaseDecodeToken";

type Res = {
  __html: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Res>) {
  const htmlString = await getFirebaseHtml();
  const tokenList: { [key: string]: number } = await getFirebaseTokens();
  const token = await getFirebaseDecodeToken(String(req.query.token));

  const dom = new JSDOM(htmlString);
  const level = token in tokenList ? tokenList[token] : 0;
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
