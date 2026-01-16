import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'pace-web';

// When using a custom domain, the base path should be empty ('').
// We can control this via an environment variable in the GitHub Action.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined
  ? process.env.NEXT_PUBLIC_BASE_PATH
  : (isProd ? `/${repoName}` : '');

const nextConfig: NextConfig = {
  // Enable static HTML export
  output: 'export',

  // GitHub Pages uses /<repo-name>/ as base path, 
  // but custom domains use the root (/).
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : '',

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
