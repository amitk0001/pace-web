'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

// Static imports are the most reliable way to handle images with basePath and custom domains
import heroLight from '@/../public/images/landing/hero-light.png';
import heroDark from '@/../public/images/landing/hero-dark.png';

export function HeroSection() {
    return (
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Soft Warm Background Gradient */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-brand-100/40 dark:bg-brand-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-stone-100 dark:bg-stone-800/20 rounded-full blur-[100px]" />
            </div>

            <div className="container-tight relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Column: Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm dark:bg-stone-900 dark:border-stone-800 mb-8 hover:border-brand-200 transition-colors cursor-default">
                                <span className="flex relative items-center justify-center">
                                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-brand-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-500"></span>
                                </span>
                                <span className="text-sm font-medium text-stone-600 dark:text-stone-300">
                                    Pace is live. 100% free.
                                </span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-6 text-balance leading-[1.05]">
                                Build habits, <br />
                                <span className="text-stone-400 dark:text-stone-600 font-medium italic tracking-normal">
                                    not stress.
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl text-stone-600 dark:text-stone-400 leading-relaxed text-balance max-w-xl mx-auto lg:mx-0 mb-8 font-normal">
                                A simple, distraction-free tracker for the things that matter. No ads, no paywalls, just your progress.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                                <Button size="lg" className="rounded-full h-12 sm:h-14 px-8 text-base sm:text-lg shadow-xl shadow-brand-500/10 transition-transform hover:-translate-y-0.5">
                                    Get Pace Free
                                </Button>
                                <Button variant="ghost" size="lg" className="rounded-full h-12 sm:h-14 px-8 text-base sm:text-lg">
                                    See how it works
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Google Pixel Mockup */}
                    <div className="flex-1 w-full max-w-[320px] sm:max-w-md lg:max-w-full relative flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Phone Mockup Frame - Thinner, refined metallic body */}
                            <div className="relative mx-auto p-[6px] bg-stone-200 dark:bg-stone-800 rounded-[1.25rem] w-[270px] h-[585px] sm:w-[315px] sm:h-[685px] shadow-xl shadow-stone-200/50 dark:shadow-black/40 ring-1 ring-stone-300 dark:ring-stone-700">
                                {/* Side Buttons - Minimal */}
                                <div className="h-[32px] w-[2px] bg-stone-400 dark:bg-stone-600 absolute -start-[2px] top-[64px] rounded-s-md z-30"></div>
                                <div className="h-[46px] w-[2px] bg-stone-400 dark:bg-stone-600 absolute -start-[2px] top-[114px] rounded-s-md z-30"></div>
                                <div className="h-[46px] w-[2px] bg-stone-400 dark:bg-stone-600 absolute -start-[2px] top-[168px] rounded-s-md z-30"></div>
                                <div className="h-[64px] w-[2px] bg-stone-400 dark:bg-stone-600 absolute -end-[2px] top-[132px] rounded-e-md z-30"></div>

                                {/* Inner Screen - Matches screenshot width, clips top/bottom naturally */}
                                <div className="w-full h-full relative rounded-[1rem] overflow-hidden bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-700">
                                    {/* Light Mode Screenshot */}
                                    <Image
                                        src={heroLight}
                                        alt="Pace App Light Mode"
                                        className="w-full h-full object-cover dark:hidden"
                                        priority
                                    />
                                    {/* Dark Mode Screenshot */}
                                    <Image
                                        src={heroDark}
                                        alt="Pace App Dark Mode"
                                        className="w-full h-full object-cover hidden dark:block"
                                        priority
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
