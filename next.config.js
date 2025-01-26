/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true, // Enables styled-components support
  },
  experimental: {
    appDir: true, // Use this if you're working with the App Router in Next.js 13+
  },
  reactStrictMode: true, // Ensures React best practices
  swcMinify: true,       // Uses SWC for faster builds
  images: {
    domains: ['example.com'], // Add domains for optimized images
  },
};

module.exports = nextConfig;
