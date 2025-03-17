import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";
import "./responsives.css";
import Script from "next/script";
import { WebSite, WithContext } from "schema-dts";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const inter = Red_Hat_Text({ subsets: ["latin"] });

const jsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The Adaire Solutions",
  alternateName: "TAS",
  url: "https://adairesolutions.com",
};

export const metadata: Metadata = {
  title: "Elevate Your Business With Us | The Adaire Solutions",
  description:
    "The Adaire Solutions, a subsidiary of Burgeon Adaire, offers cloud-based web services that streamline and modernize traditional business processes.",
  authors: [
    {
      name: "The Adaire Solutions",
      url: "https://adairesolutions.com",
    },
  ],
  openGraph: {
    title: "Elevate Your Business With Us | The Adaire Solutions",
    description:
      "The Adaire Solutions, a subsidiary of Burgeon Adaire, offers cloud-based web services that streamline and modernize traditional business processes.",
    locale: "en_US",
    alternateLocale: "id_ID",
    type: "website",
    url: "https://adairesolutions.com",
    siteName: "The Adaire Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PKWVHW9B"
            height="0"
            width="0"
            className="gtm-hidden"
          ></iframe>
        </noscript>
      </body>
      <Script
        id="gtg-script-1"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WVVRFRWWCY"
      ></Script>
      <Script id="gtg-script-1-detail">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WVVRFRWWCY');
        `}
      </Script>
      <Script id="gtm-script-1-detail">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PKWVHW9B');
        `}
      </Script>
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      ></Script>
    </html>
  );
}
