import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import { BUSINESS_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS_NAME} | 24/7 Auto Locksmith Greater Manchester`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    "QuickKey Auto Locksmiths — professional 24/7 car lockout, key replacement and key programming services across Greater Manchester. 30-minute response. Call now.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: BUSINESS_NAME,
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
