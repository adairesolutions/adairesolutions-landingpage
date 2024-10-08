import type { Metadata } from "next";
import '../services/firebase';
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";
import "./responsives.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Red_Hat_Text({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elevate Your Business With Us | The Adaire Solutions",
  description: "The Adaire Solutions, a subsidiary of Burgeon Adaire, offers cloud-based web services that streamline and modernize traditional business processes.",
  authors: [
    {
      name: "The Adaire Solutions",
      url: "https://adairesolutions.com"
    }
  ],
  openGraph: {
    title: "Elevate Your Business With Us | The Adaire Solutions",
    description: "The Adaire Solutions, a subsidiary of Burgeon Adaire, offers cloud-based web services that streamline and modernize traditional business processes.",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
