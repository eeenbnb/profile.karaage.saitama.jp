import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Index = dynamic(() => import("~/components/Page/Index"), {
  ssr: false,
});

const Home: NextPage = () => <Index />;
export default Home;
