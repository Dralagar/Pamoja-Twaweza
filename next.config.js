// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
          pathname: '/images/**',
        },
      ],
      // Optional: Adjust image quality and formats
      formats: ['image/webp', 'image/avif'],
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    // Other Next.js config options can go here
    experimental: {
      appDir: true,
    },
  };
  
  module.exports = nextConfig;