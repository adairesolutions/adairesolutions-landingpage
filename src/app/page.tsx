import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center h-full justify-center">
      <Image
        width={256}
        height={500}
        alt="PT. The Adaire Solutions Logo"
        src="/images/adairesolutions-logo.webp"
      />
    </main>
  );
}
