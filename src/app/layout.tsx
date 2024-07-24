import { Metadata } from "next";
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
    images: [`${siteConfig.url}/images/og.jpg`],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen bg-black text-white">
          <main className="w-4/5 mb-auto">{children}</main>
          <aside className="relative max-w-[350px] min-w-[300px] bg-black text-white border-l-4 flex flex-col justify-center mt-80 w-1/5">
            <Link
              href={`/games`}
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
