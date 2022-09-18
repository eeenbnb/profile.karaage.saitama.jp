import type { NextPage, GetServerSideProps } from "next";
import { JSDOM } from "jsdom";
import * as admin from "firebase-admin";
import MarkdownIt from "markdown-it";

const Home: NextPage<{ __html: string }> = ({ __html }) => <div dangerouslySetInnerHTML={{ __html }} />;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const storage = admin.storage();
  const downloadText = await storage.bucket().file("admin/profile.md").download();
  const htmlString = new MarkdownIt({
    html: true,
    linkify: true,
    breaks: true,
    typographer: true,
  }).render(downloadText[0].toString("utf-8"));
  const dom = new JSDOM(htmlString);
  const level = 0;
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

  return {
    props: { __html: dom.window.document.body.innerHTML },
  };
};
export default Home;
