import { Metadata } from "next";
import { VT323 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import "@/styles/globals.css";

import UnstyledLink from "@/components/links/UnstyledLink";

import { siteConfig } from "@/constant/config";

const vt323 = VT323({ weight: ["400"], subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/rohan.png`],
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={vt323.className}>
        <div className="flex h-screen bg-black text-white ">
          <main className="w-4/5 mb-auto overflow-y-auto max-h-full">
            {children}
          </main>
          <aside className="absolute h-full min-w-[300px] bg-black text-white border-l-4 flex flex-col justify-center w-1/5 right-0">
            <div className="flex flex-col justify-center space-y-1 py-2 items-center absolute top-0 w-full border-b-4 !h-80">
              <Image
                src="/images/rohan.png"
                alt="Rohan"
                width={250}
                height={200}
                className="h-full w-auto object-contain rounded-lg"
              />
              <span className="text-5xl">{`Rohan`}</span>
            </div>
            <UnstyledLink
              href={`/`}
              className="text-6xl my-4 text-center underline underline-offset-8 decoration-2 hover:text-blue"
            >{`Games`}</UnstyledLink>
            <UnstyledLink
              href={`/about`}
              className="text-6xl my-4 text-center underline underline-offset-8 decoration-2 hover:text-blue"
            >{`About`}</UnstyledLink>
            <div className="absolute bottom-0 w-full text-center py-6 border-t-4">
              <p className="py-0.5">
                <Link href="mailto:rohangwrl@gmail.com">
                  {`rohangwrl@gmail.com`}
                </Link>
              </p>
              <p className="py-0.5">{`+91 99200 54070`}</p>
            </div>
          </aside>
        </div>
      </body>
    </html>
  );
}
