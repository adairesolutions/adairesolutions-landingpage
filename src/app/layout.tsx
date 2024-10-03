import type { Metadata } from "next";
import '../services/firebase';
import { Inter } from "next/font/google";
import "./globals.css";
import "./responsives.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Adaire Solutions",
  description: "The Adaire Solutions",
  authors: [
    {
      name: "The Adaire Solutions",
      url: "https://adairesolutions.com"
    }
  ]
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
