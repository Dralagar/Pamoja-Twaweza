import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './footer/page';

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
