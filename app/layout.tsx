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
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
