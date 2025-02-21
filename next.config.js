/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
  compiler: {
    styledComponents: true, // Enables styled-components support
  },
  reactStrictMode: true, // Ensures React best practices
  images: {
    domains: ['cdn.sanity.io'], // Add domains for optimized images
  },
};

module.exports = nextConfig;
