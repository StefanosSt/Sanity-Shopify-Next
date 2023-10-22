import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../assets/globals.css";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SSN - Shopify Sanity Next",
  description:
    "This is a project created to demonstrate the connection between next.js - Sanity - Shopify to create beautiful headless storefronts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <Header />
        {children}
      </body>
    </html>
  );
}
