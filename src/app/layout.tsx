import type { Metadata } from "next";
import "./globals.css";
import { Fira_Sans } from "next/font/google";
import HeaderSection from "@/components/home/header";

const font = Fira_Sans({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500'] });

export const metadata: Metadata = {
  title: "Paulo Felipe - Desenvolvedor Full Stack",
  description: "Paulo Felipe Torres Araujo, desenvolvedor full stack especializado em JavaScript, HTML, CSS e mais. Explore meus projetos e entre em contato.",
  keywords: "Paulo Felipe Torres Araujo, desenvolvedor full stack, JavaScript, HTML, CSS, Visual Basic, C#, desenvolvimento web, desenvolvimento de software",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Paulo Felipe Torres Araujo - Desenvolvedor Full Stack",
    description: "Conheça os projetos e habilidades de Paulo Felipe Torres Araujo, um desenvolvedor full stack experiente em diversas tecnologias.",
    url: "https://lipedevservices.com",
    type: "website",
    images: [
      {
        url: "https://lipedevservices.com/logo_blue.png",
        width: 800,
        height: 600,
        alt: "Imagem de Destaque",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@seutwitter",
    creator: "@seutwitter",
    title: "Paulo Felipe Torres Araujo - Desenvolvedor Full Stack",
    description: "Conheça os projetos e habilidades de Paulo Felipe Torres Araujo, um desenvolvedor full stack experiente em diversas tecnologias.",
   },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Portuguese"/>
        <meta name="geo.region" content="BR-SP"/>
        <meta name="geo.placename" content="Timon"/>
        <meta name="geo.position" content="-23.55052;-46.633308"/>
        <meta name="ICBM" content="-23.55052, -46.633308"/>
        <meta name="author" content="Paulo Felipe"/>
        <meta name="copyright" content="© 2024 Felipe Services. Todos os direitos reservados."/>
        <link rel="canonical" href="https://lipedevservices.com" />    
         <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@urovida"/>
        <meta name="twitter:creator" content="@urovida"/>
        <meta name="twitter:title" content="Felipe Services - Desenvolvedor Full Stack"/>
        <meta name="twitter:description" content="Explore meu portfólio para ver projetos inovadores e soluções criativas em desenvolvimento de software. Com experiência em React, Next.js e animações com Framer Motion, estou pronto para transformar ideias em realidade. Vamos criar algo incrível juntos!" />

      </head>
      <body className={font.className}>
        <HeaderSection />
        {children}
      </body>
    </html>
  );
}
