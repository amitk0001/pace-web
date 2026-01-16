'use client';

import { motion } from 'framer-motion';

const FEATURES = [
    {
        icon: '📊',
        title: 'Track your habits',
        desc: 'Fill the boxes daily. Simple, tile-based charts that show your progress at a glance.',
        bg: 'bg-brand-50 dark:bg-brand-900/20',
        text: 'text-brand-600 dark:text-brand-400'
    },
    {
        icon: '🎨',
        title: 'Customization',
        desc: 'Make it yours. Habit names, icons, and descriptions that fit your life.',
        bg: 'bg-stone-100 dark:bg-stone-800',
        text: 'text-stone-600 dark:text-stone-400'
    },
    {
        icon: '🔥',
        title: 'Streaks',
        desc: 'Stay motivated. See your streaks grow as you build consistency day by day.',
        bg: 'bg-accent-50 dark:bg-accent-900/10',
        text: 'text-accent-600 dark:text-accent-400'
    },
    {
        icon: '🔔',
        title: 'Reminders',
        desc: 'Never forget a habit. Set notifications for exactly when you need a nudge.',
        bg: 'bg-indigo-50 dark:bg-indigo-900/20',
        text: 'text-indigo-600 dark:text-indigo-400'
    },
    {
        icon: '🌗',
        title: 'Multiple themes',
        desc: 'Light mode, dark mode, or system default. Pace adapts to your style.',
        bg: 'bg-stone-100 dark:bg-stone-800',
        text: 'text-stone-600 dark:text-stone-400'
    },
    {
        icon: '📅',
        title: 'Calendar view',
        desc: 'Manage the past easily. Tap any day to add or remove a completion.',
        bg: 'bg-sky-50 dark:bg-sky-900/20',
        text: 'text-sky-600 dark:text-sky-400'
    },
    {
        icon: '📦',
        title: 'Archive habits',
        desc: 'Taking a break? Archive habits to declutter without losing your data.',
        bg: 'bg-amber-50 dark:bg-amber-900/20',
        text: 'text-amber-600 dark:text-amber-400'
    },
    {
        icon: '💾',
        title: 'Import / Export',
        desc: 'You own your data. Export it to a file or move it to a new device anytime.',
        bg: 'bg-emerald-50 dark:bg-emerald-900/20',
        text: 'text-emerald-600 dark:text-emerald-400'
    },
    {
        icon: '🔒',
        title: 'Privacy-first',
        desc: 'Your habits stay on your phone. No cloud tracking, no prying eyes.',
        bg: 'bg-stone-100 dark:bg-stone-800',
        text: 'text-stone-600 dark:text-stone-400'
    }
];

export function FeaturesSection() {
    return (
        <section className="py-32 bg-stone-50 dark:bg-stone-950">
            <div className="container-tight">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-stone-900 dark:text-stone-50">
                        Everything you need, <br />
                        <span className="text-stone-400 dark:text-stone-500">nothing you don't.</span>
                    </h2>
                    <p className="text-xl text-stone-500 dark:text-stone-400 text-balance leading-relaxed">
                        We built Pace to be the habit tracker we actually wanted to use.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FEATURES.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="group p-8 rounded-3xl bg-white dark:bg-stone-900/50 border border-stone-100 dark:border-stone-800 hover:border-brand-200 dark:hover:border-brand-800 transition-colors shadow-sm hover:shadow-md h-full"
                        >
                            <div className={`w-12 h-12 rounded-2xl ${feature.bg} flex items-center justify-center text-2xl mb-6 ${feature.text}`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-stone-900 dark:text-stone-50 tracking-tight">
                                {feature.title}
                            </h3>
                            <p className="text-base text-stone-500 dark:text-stone-400 leading-relaxed font-medium">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
