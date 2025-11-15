// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'; 
import Navbar from "./components/Navbar";
import Footer from "./footer/page";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import GoogleAnalyticsClient from "./components/GoogleAnalyticsClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pamojatwaweza.org"),
  title: {
    default: "Pamoja Twaweza - Refugee-led Organization in Kitengela, Kenya",
    template: "%s | Pamoja Twaweza",
  },
  description:
    "Pamoja Twaweza is a refugee-led organization in Kitengela, Kenya, empowering communities through sustainable development, education, and mental health support. Join us in making a difference.",
  keywords: [
    "Pamoja Twaweza",
    "Refugee-led organization",
    "Kitengela Kenya",
    "Refugee support",
    "Youth empowerment Kenya",
    "Sustainable development Kenya",
    "Digital skills for refugees",
    "Mental health support",
    "Education for refugees",
    "Community development",
    "Refugee education programs",
    "Women empowerment",
    "Refugee innovation",
    "Social impact Kenya",
    "Refugee resilience",
  ],
  authors: [
    {
      name: "Pamoja Twaweza",
      url: "https://www.pamojatwaweza.org",
    },
  ],
  openGraph: {
    title: "Pamoja Twaweza - Refugee-led Solutions in Kenya",
    description:
      "Discover how Pamoja Twaweza, a refugee-led organization in Kitengela, is transforming lives through education, innovation, and community support.",
    url: "https://www.pamojatwaweza.org",
    siteName: "Pamoja Twaweza",
    images: [
      {
        url: "https://www.pamojatwaweza.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pamoja Twaweza Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pamoja Twaweza",
    description:
      "A refugee-led organization empowering communities in Kitengela, Kenya.",
    creator: "@pamojatwaweza",
    images: ["https://www.pamojatwaweza.org/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#153448",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <GoogleAnalyticsClient />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          defer
        ></script>
      </body>
    </html>
  );
}