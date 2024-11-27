import { Fragment } from "react";
import Head from "next/head";

export default function About() {
  return (
    <Fragment>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="follow" />
        <link
          rel="canonical"
          href="https://adairesolutions.com/about"
          key="canonical"
        />
      </Head>
    </Fragment>
  );
}