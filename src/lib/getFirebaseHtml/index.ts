import * as admin from "firebase-admin";
import MarkdownIt from "markdown-it";

const getFirebaseHtml = async () => {
  // if (process.env.PUBLIC_NEXT_IS_FIREBASE) {
  const storage = admin.storage();
  const downloadText = await storage.bucket().file("admin/profile.md").download();
  const htmlString = new MarkdownIt({
    html: true,
    linkify: true,
    breaks: true,
    typographer: true,
  }).render(downloadText[0].toString("utf-8"));
  return htmlString;
  // }

  return "<p>text</p>";
};

export default getFirebaseHtml;
