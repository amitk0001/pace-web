import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'pace-web'; // GitHub repository name

const nextConfig: NextConfig = {
  // Enable static HTML export
  output: 'export',

  // GitHub Pages uses /<repo-name>/ as base path
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',

  // Required for static export (no image optimization server)
  images: {
    unoptimized: true,
  },

  // React Compiler (moved from experimental in Next.js 16)
  reactCompiler: true,

  // GitHub Pages works better with trailing slashes
  trailingSlash: true,
};

export default nextConfig;
