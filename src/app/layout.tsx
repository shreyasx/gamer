import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import "@/styles/globals.css";

import { siteConfig } from "@/constant/config";

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
      <body>
        <div className="flex h-screen bg-black text-white ">
          <main className="w-4/5 mb-auto overflow-y-auto max-h-full">
            {children}
          </main>
          <aside className="absolute h-full min-w-[300px] bg-black text-white border-l-4 flex flex-col justify-center w-1/5 right-0">
            <div className="flex flex-col justify-center items-center absolute top-0 w-full border-b-4 !h-80">
              <Image
                src="/images/rohan.png"
                alt="Rohan"
                width={250}
                height={200}
                className="h-full w-auto pt-4 object-contain"
              />
              <span>Rohan</span>
            </div>
            <Link
              href={`/`}
              className="text-2xl my-6 text-center"
            >{`Games`}</Link>
            <Link
              href={`/about`}
              className="text-2xl my-6 text-center"
            >{`About`}</Link>
            <div className="absolute bottom-0 w-full text-center py-6 border-t-4">
              <p className="text-sm py-0.5">
                <Link href="mailto:rohangwrl@gmail.com">
                  {`rohangwrl@gmail.com`}
                </Link>
              </p>
              <p className="text-sm py-0.5">{`+91 9920054070`}</p>
            </div>
          </aside>
        </div>
      </body>
    </html>
  );
}
