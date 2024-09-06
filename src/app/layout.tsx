import { Metadata } from "next";
import { VT323 } from "next/font/google";
import * as React from "react";

import "@/styles/globals.css";

import Sidebar from "@/components/sidebar";

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
        <div className="flex h-screen bg-navy text-white ">
          <main className="mb-auto overflow-y-auto max-h-full w-full md:mr-60">
            {children}
          </main>
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
