'use client';

import { useEffect } from 'react';

export function Analytics() {
    useEffect(() => {
        if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
            return;
        }

        // Plausible Analytics (privacy-friendly, no cookies)
        const script = document.createElement('script');
        script.defer = true;
        script.src = 'https://plausible.io/js/script.js';
        script.setAttribute('data-domain', 'yourusername.github.io'); // Replace with your domain
        document.head.appendChild(script);
    }, []);

    return null;
}
