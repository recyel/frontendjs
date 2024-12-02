import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const boldFont = localFont({
  src: "./fonts/bold.woff",
  variable: "--font-bold",
  weight: "800",
});
const regularFont = localFont({
  src: "./fonts/regular.woff",
  variable: "--font-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Best Crypto Wallet for Web3, NFTs and DeFi | Trust",
  description: "Secure and easy-to-use crypto wallet for Web3, NFTs, and DeFi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${boldFont.variable} ${regularFont.variable} antialiased`}
        style={{ background: "#1B1B1C" }}
      >
        {children}
      </body>
    </html>
  );
}

