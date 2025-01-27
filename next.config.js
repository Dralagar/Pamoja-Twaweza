/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true, // Enables styled-components support
  },
  reactStrictMode: true, // Ensures React best practices
  images: {
    domains: ['example.com'], // Add domains for optimized images
  },
};

module.exports = nextConfig;
