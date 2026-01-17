'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

// Static imports are the most reliable way to handle images with basePath and custom domains
import heroLight from '@/../public/images/landing/hero-light.png';
import heroDark from '@/../public/images/landing/hero-dark.png';

export function HeroSection() {
    return (
        <section className="relative pt-24 lg:pt-32 overflow-hidden">
            {/* Soft Warm Background Gradient */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-brand-100/40 dark:bg-brand-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-stone-100 dark:bg-stone-800/20 rounded-full blur-[100px]" />
            </div>

            <div className="container-tight relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

                    {/* Left Column: Text Content */}
                    <div className="flex-grow lg:w-3/5 text-center lg:text-left z-20 pb-20 lg:pb-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-stone-200 shadow-sm backdrop-blur-sm dark:bg-stone-900/60 dark:border-stone-800 mb-8 hover:border-brand-200 transition-colors cursor-default">
                                <span className="flex relative items-center justify-center">
                                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-brand-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-500"></span>
                                </span>
                                <span className="text-sm font-medium text-stone-600 dark:text-stone-300">
                                    Pace is live. 100% free.
                                </span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-[110px] font-bold tracking-tighter text-stone-900 dark:text-stone-50 mb-8 text-balance leading-[0.9] lg:ml-[-2px]">
                                Build habits, <br />
                                <span className="text-stone-400 dark:text-stone-600 font-medium italic tracking-normal">
                                    not stress.
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl lg:text-2xl text-stone-600 dark:text-stone-400 leading-relaxed text-balance max-w-xl mx-auto lg:mx-0 mb-10 font-normal opacity-90">
                                A simple, distraction-free tracker for the things that matter. No ads, just your progress.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                                <Button size="lg" className="rounded-full h-14 lg:h-16 px-10 text-base lg:text-xl shadow-2xl shadow-brand-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                                    Get Pace Free
                                </Button>
                                <Button variant="ghost" size="lg" className="rounded-full h-14 lg:h-16 px-8 text-base lg:text-xl">
                                    See how it works
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Centered Mockup with Perfect Mask Fade */}
                    <div className="flex-grow lg:w-2/5 relative flex items-center justify-center lg:justify-start pb-20 lg:pb-32">
                        <motion.div
                            initial={{ opacity: 0, x: 40, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative lg:pl-12 w-full flex justify-center lg:justify-start group"
                            style={{
                                WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 25%)',
                                maskImage: 'linear-gradient(to top, transparent 0%, black 25%)'
                            }}
                        >
                            {/* The 'Big' Mockup Container - Corrected corner radius and removed offset to fix cutoff */}
                            <div className="relative p-[8px] pb-0 bg-stone-200 dark:bg-stone-800 rounded-t-[1.5rem] w-[360px] h-[360px] sm:w-[500px] sm:h-[450px] lg:w-[680px] lg:h-[600px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] ring-1 ring-black/5 dark:ring-white/10 overflow-hidden border-b-0">

                                {/* Inner Screen - Radius Reduced */}
                                <div className="w-full h-full relative rounded-t-[1rem] overflow-hidden bg-white dark:bg-stone-950 border border-stone-300 dark:border-stone-800 border-b-0">
                                    <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent dark:from-white/5" />

                                    {/* Light Mode Screenshot */}
                                    <Image
                                        src={heroLight}
                                        alt="Pace App Light Mode"
                                        className="w-full h-full object-cover object-top dark:hidden"
                                        priority
                                    />
                                    {/* Dark Mode Screenshot */}
                                    <Image
                                        src={heroDark}
                                        alt="Pace App Dark Mode"
                                        className="w-full h-full object-cover object-top hidden dark:block"
                                        priority
                                    />
                                </div>

                                {/* Mockup Side Details */}
                                <div className="absolute top-1/4 -right-[4px] w-[5px] h-32 bg-stone-300 dark:bg-stone-700 rounded-l-full" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
