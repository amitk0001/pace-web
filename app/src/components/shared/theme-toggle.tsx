'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
        setTheme(initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    if (!mounted) {
        return (
            <div className="h-10 w-10 rounded-full bg-surface-variant animate-pulse" />
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                'h-10 w-10 rounded-full flex items-center justify-center',
                'bg-surface-variant hover:bg-surface-variant/80',
                'transition-colors duration-200',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary'
            )}
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            <span className="text-xl" role="img" aria-hidden="true">
                {theme === 'light' ? '🌙' : '☀️'}
            </span>
        </button>
    );
}
