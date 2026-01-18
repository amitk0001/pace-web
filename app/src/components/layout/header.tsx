'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import logoMark from '@/../public/logo-mark.svg';

export function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsScrolled(latest > 20);
        });
        return () => unsubscribe();
    }, [scrollY]);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
                ? 'bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-md border-stone-200 dark:border-stone-800 py-3'
                : 'bg-transparent border-transparent py-5'
                }`}
        >
            <div className="container-tight flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/20">
                        <Image
                            src={logoMark}
                            alt="Pace Logo"
                            width={32}
                            height={32}
                            priority
                            className="w-full h-full p-1"
                        />
                    </div>
                    <span className="font-bold text-lg tracking-tight text-stone-900 dark:text-stone-50">
                        Pace
                    </span>
                </div>


                <div>
                    <Button size="sm" className="rounded-full px-5 shadow-lg shadow-stone-900/5 transition-all hover:-translate-y-0.5">
                        Get the app
                    </Button>
                </div>
            </div>
        </motion.header>
    );
}
