import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children, title, description, keywords }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-lime-500 to-emerald-600 spacer layer1">
        <Navbar />

        <main className="layout">{children}</main>

        <Footer />
      </div>
    </>
  );
}
