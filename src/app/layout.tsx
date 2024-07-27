import type { Metadata } from "next";
 import "./globals.css";

import { Fira_Sans  } from "next/font/google";
import HeaderSection from "@/components/home/header";

const font = Fira_Sans({ subsets: ["latin"],  weight:['100','200','300','400','500']});

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
      <body className={`${font.className}  `}>
        
        <HeaderSection/>
        {children}
        
        </body>
    </html>
  );
}
