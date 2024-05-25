import type { Metadata } from "next";
import { NTR } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = NTR({ subsets: ["telugu"], weight: "400" });

export const metadata: Metadata = {
  title: "Arya",
  description: "Arya is a Front-End Web Developer with the 1 years of experience.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
