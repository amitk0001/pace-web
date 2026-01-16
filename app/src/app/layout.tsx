import type { Metadata } from "next";
import { Archivo, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/shared/analytics";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pace - Build Better Habits, One Day at a Time",
  description: "Track your habits, visualize your progress, and achieve your goals with Pace. Beautiful, privacy-first habit tracking.",
  keywords: ["habit tracker", "productivity", "goal tracking", "routine builder", "habit formation"],
  authors: [{ name: "Pace Team" }],
  openGraph: {
    title: "Pace - Habit Tracker",
    description: "Build better habits with visual progress tracking and smart reminders.",
    images: ["/Pace-Web/images/og/home.png"],
    type: "website",
    url: "https://yourusername.github.io/Pace-Web/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pace - Habit Tracker",
    description: "Build better habits with visual progress tracking.",
    images: ["/Pace-Web/images/og/twitter.png"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://yourusername.github.io/Pace-Web/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${archivo.variable} ${interTight.variable}`}>
      <head>
        {/* Inline script to prevent FOUC (Flash of Unstyled Content) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 
                              (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
