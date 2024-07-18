import type { Metadata } from "next";
 import "./globals.css";

import { Playfair_Display } from "next/font/google";

const play = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${play.className}  bg-slate-950`} >{children}</body>
    </html>
  );
}
