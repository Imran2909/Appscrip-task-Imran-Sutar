import Head from "next/head";
import Header from "@/components/Header/Header";
import Heading from "@/components/Heading/Heading";
import Main from "@/components/Main/Main";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="SSR demo app with responsive header" />
      </Head>
      <Header />
      <Heading />
      <Main />
    </>
  );
}
