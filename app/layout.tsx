import type { Metadata } from "next";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './footer/page';
import { Analytics } from '@vercel/analytics/react';
import React from "react";
import GoogleAnalyticsClient from './components/GoogleAnalyticsClient';

export const metadata: Metadata = {
  title: "Pamoja Twaweza - Refugee-led Organization in Kitengela",
  description: "Pamoja Twaweza is a refugee-led organization in Kitengela, empowering communities through sustainable development, education, and mental health support.",
  keywords: [
    "Refugee-led organization in Kitengela",
    "Pamoja Twaweza refugee empowerment",
    "Community-based organization Kitengela",
    "Refugee support services Kenya",
    "Refugee livelihoods and self-reliance",
    "Sustainable development for refugees",
    "Refugee education and skills training",
    "Mental health support for refugees",
    "Digital skills training for refugees",
    "Refugee advocacy and rights",
  ],
  openGraph: {
    title: "Pamoja Twaweza - Empowering Refugees in Kitengela",
    description: "Empowering communities through sustainable development and education.",
    url: "https://www.pamojatwaweza.org",
    siteName: "Pamoja Twaweza",
    images: [
      {
        url: "/images/pamoj1.jpeg",
        width: 1200,
        height: 630,
        alt: "Pamoja Twaweza - Empowering Refugees in Kitengela",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pamoja Twaweza - Empowering Refugees in Kitengela",
    description: "Empowering communities through sustainable development and education.",
    images: ["/images/pamoj1.jpeg"],
  },
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