import type { Metadata } from "next";
// Removed unused imports
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './footer/page';
import { Analytics } from '@vercel/analytics/react';
import React from "react";
import GoogleAnalyticsClient from './components/GoogleAnalyticsClient';

export const metadata: Metadata = {
  title: "Pamoja Twaweza - Refugee-led Organization in Kitengela",
  description: "Pamoja Twaweza is a refugee-led organization in Kitengela, empowering communities through sustainable development, education, and mental health support.",
  keywords: "Refugee-led organization in Kitengela, Pamoja Twaweza refugee empowerment, Community-based organization Kitengela, Refugee support services Kenya, Refugee livelihoods and self-reliance",
};

export default function RootLayout({  
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <GoogleAnalyticsClient />
      </body>
    </html>
  );
}
