import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jenny-makki-ui.vercel.app"),
  title: "Jenny Makki – UI System",
  description:
    "A reusable UI system built with React, TypeScript, and Tailwind CSS. Explore component-driven patterns including buttons, inputs, cards, and modals designed for scalability and consistency.",
  openGraph: {
    title: "Jenny Makki – UI System",
    description:
      "Component-driven UI system built with React, TypeScript, and Tailwind CSS.",
    url: "/",
    siteName: "Jenny Makki UI System",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}