import type { Metadata } from "next";
import { GeistSans } from 'geist/font';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import Navbar from '@/app/components/Navbar';

export const metadata: Metadata = {
  title: "Pamoja Twaweza",
  description: "Pa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="footer">
          <p>© 2023 Pamoja Twaweza. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
