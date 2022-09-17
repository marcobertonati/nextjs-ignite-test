import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout({
  children,
  title = "Default - Ignite Drink Store",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Challenge for candidate to frontend job"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
