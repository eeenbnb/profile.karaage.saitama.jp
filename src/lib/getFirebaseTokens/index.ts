import * as admin from "firebase-admin";

const getFirebaseTokens = async () => {
  // if (process.env.PUBLIC_NEXT_IS_FIREBASE) {
  const storage = admin.storage();
  const tokenListDL = await storage.bucket().file("admin/token.json").download();
  const tokenList = JSON.parse(tokenListDL[0].toString("utf-8"));
  return tokenList;
  // }

  return {
    token: 1,
  };
};

export default getFirebaseTokens;
