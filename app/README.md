# Pace

A beautiful, modern landing page for Pace—a habit tracking application designed to help you build better habits and achieve your goals.

![Pace Landing Page](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js) ![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat-square&logo=tailwindcss)

## 🌐 Live Demo

Visit the live site: **[pace.github.io/pace](https://[username].github.io/pace)** *(Update with your GitHub username)*

---

## ✨ Features

- **Stunning Visual Design**: Modern, premium aesthetics with carefully curated color palettes and smooth animations
- **Dark Mode Support**: Seamless theme switching with system preference detection
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Performance Optimized**: Static site generation for lightning-fast load times
- **Accessibility First**: Semantic HTML and ARIA labels for inclusive user experience
- **Smooth Animations**: Powered by Framer Motion for delightful micro-interactions

---

## 🛠 Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Color System**: [Material Color Utilities](https://github.com/material-foundation/material-color-utilities)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** 10.x or higher

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/[your-username]/pace.git
cd pace/app
npm install
```

### Local Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page will automatically reload as you edit files in the `src` directory.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

This generates a static export in the `out` directory, ready for deployment.

### Preview Production Build

Test the production build locally:

```bash
npm run preview
```

This serves the static files from the `out` directory at [http://localhost:3000](http://localhost:3000).

---

## 📁 Project Structure

```
app/
├── public/              # Static assets (images, fonts, etc.)
├── scripts/             # Build-time scripts (image optimization)
├── src/
│   ├── app/            # Next.js App Router pages and layouts
│   ├── components/     # React components
│   │   ├── landing/    # Landing page sections
│   │   └── layout/     # Header, footer, shared layout
│   └── lib/            # Utility functions
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # TailwindCSS configuration
└── package.json        # Dependencies and scripts
```

---

## 🌍 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages on every push to the `main` branch.

**Setup Steps:**

1. **Enable GitHub Pages** in your repository settings:
   - Go to `Settings` → `Pages`
   - Source: `GitHub Actions`

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Wait for deployment**: The GitHub Action will automatically build and deploy your site. Check the `Actions` tab for progress.

Your site will be live at: `https://[your-username].github.io/pace`

### Manual Deployment (Alternative)

If you prefer manual deployment or need to deploy from a local build:

1. **Build the static site**:
   ```bash
   npm run build
   ```

2. **Deploy using gh-pages** (package already installed):
   ```bash
   npx gh-pages -d out
   ```

---

## ⚙️ Configuration

### Base Path for GitHub Pages

The project is pre-configured for GitHub Pages deployment. The base path is set in [`next.config.ts`](./app/next.config.ts):

```typescript
const repoName = 'pace'; // Must match your GitHub repository name
const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  // ...
};
```

**Important**: If you rename your repository, update the `repoName` constant accordingly.

### Environment Variables

- `NODE_ENV`: Set to `production` for GitHub Pages builds (automatic)

---

## 🎨 Customization

### Updating Content

- **Hero Section**: Edit [`src/components/landing/hero-section.tsx`](./app/src/components/landing/hero-section.tsx)
- **Features**: Edit [`src/components/landing/features-section.tsx`](./app/src/components/landing/features-section.tsx)
- **Testimonials**: Edit [`src/components/landing/testimonials-cta.tsx`](./app/src/components/landing/testimonials-cta.tsx)
- **Footer**: Edit [`src/components/layout/footer.tsx`](./app/src/components/layout/footer.tsx)

### Styling

The design system is centralized in [`src/app/globals.css`](./app/src/app/globals.css) using CSS custom properties. Modify the color palette, typography, and spacing there.

---

## 📄 License

This project is private and proprietary. All rights reserved.

---

## 👤 Author

**Amit Nagar**

---

## 🤝 Contributing

This is a personal project and not currently open for contributions.

---

**Built with ❤️ using Next.js and TailwindCSS**
