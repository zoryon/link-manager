import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FloatingOrbs from "@/components/global/FloatingOrbs";
import "./globals.css";
import "@/assets/font-awesome-pro/css/all.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Link Manager",
  description: "Manage your links in a centralized way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-stone-900 antialiased dark`}
      >
        <aside>
          {/* Gradient + Grid Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 via-black to-blue-900 opacity-60 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#6b21a8_1px,transparent_1px)] [background-size:25px_25px] opacity-10 pointer-events-none" />

          <FloatingOrbs />
        </aside>

        <main className="backdrop-blur-sm">
          {children}
        </main>
      </body>
    </html>
  );
}