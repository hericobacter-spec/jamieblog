/** @type {import('next').NextConfig} */
// NOTE: For GitHub Pages deployment under user.github.io/repo, set basePath and assetPrefix
// so that routing and static assets resolve correctly when served from /jamieblog
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/jamieblog';
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '/jamieblog/';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  assetPrefix,
  // When exporting a static site, disable Next.js image optimization to avoid build-time image processing errors
  images: {
    unoptimized: true
  }
};
module.exports = nextConfig;
