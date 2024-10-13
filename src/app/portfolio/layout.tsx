import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | The Adaire Solutions",
  openGraph: {
    title: "Portfolio | The Adaire Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}