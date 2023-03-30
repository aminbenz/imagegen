import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "./header";
import Footer from "./footer";
import { Analytics } from "@components/analytics";
import { Metadata } from "next";
import META_DATA from "./meta";

export const metadata: Metadata = META_DATA;

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="relative min-h-screen bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30">
        {process.env.ENABLE_VERCEL_ANALYTICS ? <Analytics /> : null}
        <Header />
        <main className="min-h-[80vh] ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
