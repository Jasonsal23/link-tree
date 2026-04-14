import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Jason Salazar — Links",
  description: "Developer, AI builder, and educator based in Las Vegas.",
  openGraph: {
    title: "Jason Salazar — Links",
    description: "Developer, AI builder, and educator based in Las Vegas.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jason Salazar — Links",
    creator: "@zerotoagent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
