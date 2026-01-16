'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function TestimonialsSection() {
    return (
        <section className="py-32 bg-stone-100 dark:bg-stone-900/30">
            <div className="container-tight">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-50 tracking-tight">
                        Simple. Effective. <br /><span className="text-stone-400">Honest.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { q: "Finally, a tracker that doesn't try to gamify my life. It just works.", a: "Marcus R.", r: "Product Designer" },
                        { q: "I love that my data stays on my phone. It feels private and personal.", a: "Elena K.", r: "Developer" },
                        { q: "The design is so calming. I actually look forward to checking my habits.", a: "David L.", r: "Writer" }
                    ].map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-2xl bg-white dark:bg-stone-900 shadow-sm border border-brand-100/50 dark:border-stone-800"
                        >
                            <p className="text-base text-stone-700 dark:text-stone-300 mb-6 leading-relaxed font-medium">
                                "{t.q}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xs">
                                    {t.a.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-sm text-stone-900 dark:text-stone-50">{t.a}</div>
                                    <div className="text-xs text-stone-500">{t.r}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function CTASection() {
    return (
        <section className="py-32 relative overflow-hidden bg-white dark:bg-stone-950">
            <div className="container-tight relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-brand-900 dark:bg-brand-950 text-white rounded-[2.5rem] p-12 sm:p-20 text-center relative overflow-hidden shadow-2xl shadow-brand-900/20"
                >
                    {/* Background decoration */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute -top-[50%] -right-[10%] w-[70%] h-[70%] bg-white/10 rounded-full blur-[100px]" />
                        <div className="absolute -bottom-[50%] -left-[10%] w-[70%] h-[70%] bg-brand-400/20 rounded-full blur-[100px]" />
                    </div>

                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                            Ready to start?
                        </h2>
                        <p className="text-xl text-brand-100 font-medium">
                            Join the community building consistency with Pace.
                        </p>
                        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-brand-900 hover:bg-brand-50 border-0 font-bold h-12 px-8 rounded-full shadow-lg">
                                Get Pace Free
                            </Button>
                        </div>
                        <p className="text-xs text-brand-200/80 mt-8">
                            No credit card. No accounts. Just 100% free & local.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
