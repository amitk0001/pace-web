'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function HelpPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-brand-500/20 selection:text-brand-600">
            <Header />

            <main className="flex-grow container-tight py-24 sm:py-32">
                <div className="prose dark:prose-invert max-w-none">
                    <h1>Help & Guide</h1>
                    <p className="lead text-xl text-stone-600 dark:text-stone-400">
                        Everything you need to know about using Pace to build better habits.
                    </p>

                    <div className="mt-12 space-y-12">
                        <section>
                            <h2>What is Pace?</h2>
                            <p>
                                Pace is a distraction-free habit tracker designed to help you focus on consistency, not optimization. We believe that building habits should not feel like a chore.
                            </p>
                        </section>

                        <section>
                            <h2>Tracking Habits</h2>
                            <p>
                                To track a habit, simply tap on the day you completed it. You can mark a habit as done, skipped, or failed.
                            </p>
                            <ul>
                                <li><strong>Done:</strong> You completed the habit successfully.</li>
                                <li><strong>Skipped:</strong> You intentionally skipped the habit (e.g., rest day). This generally won't break your streak.</li>
                                <li><strong>Missed:</strong> You forgot or failed to complete the habit. This will reset your streak.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>Streaks & Progress</h2>
                            <p>
                                Your streak is the number of consecutive days you have successfully completed a habit. Seeing your streak grow can be a powerful motivator!
                            </p>
                            <p>
                                However, don't let a broken streak discourage you. The goal is long-term consistency, not perfection. Pace provides stats to help you see the bigger picture beyond just the current streak.
                            </p>
                        </section>

                        <section>
                            <h2>Data & Privacy</h2>
                            <p>
                                Pace is designed to be privacy-first. <strong>Your data lives on your device.</strong> We do not sell your personal habit data to advertisers.
                            </p>
                            <p>
                                For more details, please read our <a href="/privacy" className="text-brand-600 dark:text-brand-400 hover:underline">Privacy Policy</a>.
                            </p>
                        </section>

                        <section>
                            <h2>Sync & Backup</h2>
                            <p>
                                Currently, Pace operates primarily offline. We are working on optional cloud sync features to let you back up your data and sync across devices securely. Stay tuned for updates!
                            </p>
                        </section>

                        <section>
                            <h2>Need more help?</h2>
                            <p>
                                If you ran into a bug or have a feature request, please feel free to open an issue on our <a href="https://github.com/amitk0001/pace" className="text-brand-600 dark:text-brand-400 hover:underline">GitHub repository</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
