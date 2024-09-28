import { Metadata } from "next";
import { Poppins } from "next/font/google";
import * as React from "react";

import "@/styles/globals.css";

import Sidebar from "@/components/sidebar";

import { siteConfig } from "@/constant/config";

// Load Poppins font
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
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
    <html lang="en" className={poppins.className}>
      <body>
        <div className="flex h-screen bg-navy text-white">
          <div className="md:hidden flex items-center justify-center w-full h-full">
            <p className="text-center text-lg">Please view on your laptop</p>
          </div>
          <div className="hidden md:flex w-full">
            <main className="mb-auto overflow-y-auto max-h-full w-full md:mr-60">
              {children}
            </main>
            <Sidebar />
          </div>
        </div>
      </body>
    </html>
  );
}
