import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center h-full justify-center">
      <Image
        priority
        width="0"
        height="0"
        className="adairesolutions-logo"
        alt="The Adaire Solutions Logo"
        src="/images/adairesolutions-logo.webp"
      />
    </main>
  );
}
