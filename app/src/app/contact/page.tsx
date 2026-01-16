'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-brand-500/20 selection:text-brand-600">
            <Header />

            <main className="flex-grow container-tight py-24 sm:py-32">
                <div className="max-w-3xl mx-auto prose dark:prose-invert prose-stone">
                    <h1 className="text-4xl font-bold tracking-tight mb-8">Contact & Support</h1>

                    <p className="lead text-xl text-stone-600 dark:text-stone-400 mb-12">
                        We built Pace to be a private space for your personal growth. Because the app is "local-first," we don’t have accounts or automated systems watching how you use the app. This means we rely on your direct feedback to make the app better!
                    </p>

                    <p>
                        If you’re having trouble or just want to say hello, here is how you can reach us.
                    </p>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">How We Can Help</h2>
                        <p>We welcome your messages regarding:</p>
                        <ul>
                            <li><strong>Bug Reports:</strong> If something isn't working as expected, let us know so we can fix it.</li>
                            <li><strong>Feature Requests:</strong> Is there a feature that would make your habit tracking better? We’d love to hear it.</li>
                            <li><strong>Privacy Questions:</strong> If you have questions about our data practices or the technologies we use.</li>
                            <li><strong>General Feedback:</strong> Tell us what you like (or what you don't) about the app.</li>
                        </ul>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">Get in Touch</h2>
                        <p>
                            You can reach us directly via email. We do not use complex support tickets or chatbots—just a simple inbox managed by our team.
                        </p>
                        <div className="bg-stone-50 dark:bg-stone-900/50 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 mt-6">
                            <p className="m-0 font-medium">Email:</p>
                            <a href="mailto:devbyamit@gmail.com" className="text-xl font-semibold text-brand-600 dark:text-brand-400 hover:underline">
                                devbyamit@gmail.com
                            </a>
                        </div>

                        <h3 className="text-xl font-medium mb-3 mt-12 text-stone-800 dark:text-stone-200">Expected Response Time</h3>
                        <p>
                            We are a small, dedicated team. We typically respond to all inquiries within 2 to 3 business days. We appreciate your patience!
                        </p>
                    </section>

                    <hr className="my-16 border-stone-200 dark:border-stone-800" />

                    <section className="bg-brand-50/30 dark:bg-brand-900/10 p-8 rounded-3xl border border-brand-100/50 dark:border-brand-800/20">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">Your Privacy Matters</h2>
                        <p>When you contact us, please keep the following in mind:</p>
                        <ul className="space-y-4">
                            <li><strong>Minimum Info:</strong> We only receive your email address and whatever information you choose to include in your message.</li>
                            <li><strong>No Habit Data:</strong> Since your habits are stored only on your device, we cannot see them. Please do not send us screenshots containing sensitive personal habits unless it is absolutely necessary to demonstrate a technical bug.</li>
                            <li><strong>Purpose-Driven:</strong> We use your email only to provide support and answer your questions. We do not use support emails for marketing, and we never sell or share your contact information with third parties.</li>
                            <li><strong>No Tracking:</strong> We do not use tracking pixels or read-receipts in our support emails.</li>
                        </ul>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
