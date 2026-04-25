import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import { BUSINESS_NAME, SITE_URL } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS_NAME} | 24/7 Emergency Auto Locksmith Heywood OL10`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    "Heywood Auto Locksmith — your local 24/7 mobile auto locksmith covering all of Heywood OL10. Car lockouts, lost keys, key programming, ignition repair. 30-minute response. Call now.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: BUSINESS_NAME,
    locale: "en_GB",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon", type: "image/png", sizes: "192x192" },
      { url: "/icon2", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
