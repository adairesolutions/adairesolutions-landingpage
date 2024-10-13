import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | The Adaire Solutions",
  openGraph: {
    title: "About | The Adaire Solutions",
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