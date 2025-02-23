import type { Metadata } from "next";
// Removed unused imports
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './footer/page';
import PrivacyPolicy from './privacy/privacy';
import { Analytics } from '@vercel/analytics/react';
import React from "react";
import GoogleAnalyticsClient from './components/GoogleAnalyticsClient';

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
