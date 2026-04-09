import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-[#141425]">
      <Image
        src="/logo.svg"
        alt="FULQRO"
        width={1200}
        height={800}
        priority
        className="h-auto w-full max-w-2xl"
      />
    </main>
  );
}
