import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge for deduplication
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Get asset path with base path for GitHub Pages
 */
export function getAssetPath(path: string): string {
    const basePath = process.env.NODE_ENV === 'production' ? '/Pace-Web' : '';
    return `${basePath}${path}`;
}
