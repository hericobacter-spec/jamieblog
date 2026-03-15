/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // When exporting a static site, disable Next.js image optimization to avoid build-time image processing errors
  images: {
    unoptimized: true
  }
};
module.exports = nextConfig;
