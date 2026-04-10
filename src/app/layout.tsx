import type { Metadata } from "next";
import { Jost, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FULQRO — Indispensable",
  description: "Structural intelligence on what really matters.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon-512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#141425] text-[#E8E4DE]">
        {children}
      </body>
    </html>
  );
}
