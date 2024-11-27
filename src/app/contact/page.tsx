import { Fragment } from "react";
import Head from "next/head";

export default function Contact() {
  return (
    <Fragment>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="follow" />
        <link
          rel="canonical"
          href="https://adairesolutions.com/contact"
          key="canonical"
        />
      </Head>
    </Fragment>
  );
}