import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#141425]">
      <Image
        src="/logo.svg"
        alt="FULQRO"
        width={400}
        height={267}
        priority
      />
    </main>
  );
}
