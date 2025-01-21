import type { Metadata } from "next";
// Removed unused imports
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './footer/page';
import React from "react";

export const metadata: Metadata = {
  title: "Pamoja Twaweza",
  description: "Pamoja Twaweza is a platform for youth empowerment and educational programs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
