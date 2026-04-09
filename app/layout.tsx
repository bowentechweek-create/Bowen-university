import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SplashWrapper from "@/components/SplashWrapper";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bowen Tech Week 3.0",
  description: "The Intersection Advantage — Bowen University Tech Week 2026",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <SplashWrapper>{children}</SplashWrapper>
      </body>
    </html>
  );
}
