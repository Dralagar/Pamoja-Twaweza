import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar';
import Footer from './footer/page';
import { Analytics } from '@vercel/analytics/react';
import React from "react";
import GoogleAnalyticsClient from './components/GoogleAnalyticsClient';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pamojatwaweza.org'),
  title: {
    default: 'Pamoja Twaweza - Refugee-led Organization in Kitengela, Kenya',
    template: '%s | Pamoja Twaweza'
  },
  description: 'Pamoja Twaweza is a refugee-led organization in Kitengela, Kenya, empowering communities through sustainable development, education, and mental health support. Join us in making a difference.',
  keywords: [
    'Pamoja Twaweza',
    'Refugee organization Kenya',
    'Kitengela refugees',
    'Refugee empowerment',
    'Sustainable development Kenya',
    'Refugee education',
    'Mental health support refugees',
    'Digital skills training Kenya',
    'Refugee-led organization',
    'Community development Kitengela',
    'Refugee support services',
    'Youth empowerment Kenya',
    'Refugee education programs',
    'Mental health awareness Kenya',
    'Refugee livelihoods'
  ],
  authors: [{ name: 'Pamoja Twaweza' }],
  creator: 'Pamoja Twaweza',
  publisher: 'Pamoja Twaweza',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.pamojatwaweza.org',
    siteName: 'Pamoja Twaweza',
    title: 'Pamoja Twaweza - Empowering Refugees in Kitengela, Kenya',
    description: 'Empowering communities through sustainable development, education, and mental health support. Join us in making a difference.',
    images: [
      {
        url: '/images/pamoj1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Pamoja Twaweza Community Impact - Refugee-led organization in Kitengela',
      },
      {
        url: '/images/Pamoj5.jpeg',
        width: 800,
        height: 600,
        alt: 'Pamoja Twaweza Livelihoods Program - Digital skills training and entrepreneurship',
      },
      {
        url: '/images/Pamoj6.jpeg',
        width: 800,
        height: 600,
        alt: 'Pamoja Twaweza Mental Health Support - Community counseling and awareness programs',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pamoja Twaweza - Empowering Refugees in Kitengela, Kenya',
    description: 'Empowering communities through sustainable development, education, and mental health support. Join us in making a difference.',
    images: [
      '/images/pamoj1.jpeg',
      '/images/Pamoj5.jpeg',
      '/images/Pamoj6.jpeg'
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
  },
  alternates: {
    canonical: 'https://www.pamojatwaweza.org',
  },
  category: 'nonprofit',
  classification: 'refugee support',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light dark',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        <Analytics />
        <GoogleAnalyticsClient />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}