'use client';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-stone-50 dark:bg-stone-950/50 border-t border-stone-200 dark:border-stone-800 py-12">
            <div className="container-tight flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-stone-900 dark:text-stone-100 font-bold text-sm">
                            P
                        </div>
                        <span className="font-bold text-stone-900 dark:text-stone-50">
                            Pace
                        </span>
                    </div>
                    <p className="text-sm text-stone-500 dark:text-stone-400">
                        © {currentYear} — An app by Amit Nagar
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="/privacy" className="text-sm font-medium text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200 transition-colors">
                        Privacy
                    </a>
                    <a href="/terms" className="text-sm font-medium text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200 transition-colors">
                        Terms
                    </a>
                    <a href="/help" className="text-sm font-medium text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200 transition-colors">
                        Help
                    </a>
                    <div className="h-4 w-px bg-stone-300 dark:bg-stone-700 mx-2 hidden md:block"></div>
                    <div className="flex gap-4">
                        {['Twitter', 'GitHub', 'Discord'].map((social) => (
                            <a key={social} href="#" className="text-sm font-medium text-stone-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
