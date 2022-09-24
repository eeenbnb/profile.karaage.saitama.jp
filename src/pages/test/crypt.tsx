import type { NextPage, GetServerSideProps } from "next";
import CryptoJs from "crypto-js";

const Home: NextPage = () => <div>crypy</div>;

export const getServerSideProps: GetServerSideProps = async () => {
  const enc = CryptoJs.AES.encrypt("hoge", "test.test.test");
  console.log(enc.toString());
  console.log(CryptoJs.AES.decrypt(enc, "test.test.test").toString(CryptoJs.enc.Utf8));
  return {
    props: {},
  };
};
export default Home;
