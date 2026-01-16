import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'pace-web';

// Use the environment variable if set (for Custom Domains),
// otherwise default to the repo name for GitHub Pages.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? `/${repoName}` : '');

const nextConfig: NextConfig = {
  // Enable static HTML export
  output: 'export',

  // GitHub Pages uses /<repo-name>/ as base path,
  // but custom domains use the root (/).
  basePath: basePath,
  // assetPrefix is usually not needed when basePath is set for static exports
  // and can sometimes cause double-prefixing issues.


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
