// const enc = CryptoJs.AES.encrypt("hoge", "test.test.test");
//   console.log(enc.toString());
//   console.log(CryptoJs.AES.decrypt(enc, "test.test.test").toString(CryptoJs.enc.Utf8));

import * as admin from "firebase-admin";
import CryptoJs from "crypto-js";

const getFirebaseDecodeToken = async (encToken: string) => {
  const storage = admin.storage();
  const keyDL = await storage.bucket().file("admin/key.txt").download();
  const key = keyDL[0].toString("utf-8");

  return CryptoJs.AES.decrypt(encToken, key).toString(CryptoJs.enc.Utf8);
};

export default getFirebaseDecodeToken;
