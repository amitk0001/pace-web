'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-brand-500/20 selection:text-brand-600">
            <Header />

            <main className="flex-grow container-tight py-24 sm:py-32">
                <div className="max-w-3xl mx-auto prose dark:prose-invert prose-stone">
                    <h1 className="text-4xl font-bold tracking-tight mb-2">Terms of Use</h1>
                    <div className="text-stone-500 dark:text-stone-400 mb-12">
                        <p className="m-0">Effective Date: January 17, 2026</p>
                        <p className="m-0">Last Updated: January 17, 2026</p>
                    </div>

                    <p className="lead text-xl text-stone-600 dark:text-stone-400">
                        Welcome to Pace. These Terms of Use ("Terms") govern your use of the Pace mobile application (the "App"). By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree, please do not use the App.
                    </p>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">1. Description of Service</h2>
                        <p>Pace is a personal habit-tracking tool designed to help you organize and monitor your daily routines.</p>
                        <ul>
                            <li><strong>Local-First Architecture:</strong> The App functions entirely on your device. We do not provide cloud synchronization, online accounts, or remote storage for your habit data.</li>
                            <li><strong>Privacy-by-Design:</strong> Because there are no accounts, we do not monitor your identity or the specific habits you track.</li>
                        </ul>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">2. No Professional Advice Disclaimer</h2>
                        <p>The App is provided for informational and motivational purposes only.</p>
                        <ul>
                            <li><strong>Not Medical Advice:</strong> Pace does not provide medical, psychological, or health advice. The App is not a substitute for professional medical consultation, diagnosis, or treatment.</li>
                            <li><strong>Use at Your Own Risk:</strong> Always seek the advice of a physician or other qualified health provider with any questions regarding a medical condition or lifestyle change. Never disregard professional advice because of something you have tracked or read in this App.</li>
                        </ul>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">3. User Responsibilities</h2>
                        <p>By using Pace, you agree to the following:</p>
                        <ul>
                            <li><strong>Device Security:</strong> You are solely responsible for the security of your mobile device and the data stored on it. Since your data is not stored on our servers, we cannot recover your habit history if your device is lost, stolen, or damaged.</li>
                            <li><strong>Acceptable Use:</strong> You agree not to attempt to reverse-engineer, decompile, or disrupt Pace’s functionality.</li>
                            <li><strong>Lawful Use:</strong> You will use the App in compliance with all applicable local, state, and international laws.</li>
                        </ul>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">4. Data Ownership & Privacy</h2>
                        <ul>
                            <li><strong>Your Data:</strong> You own all the habit data you enter into Pace. We do not have access to it, nor do we claim any ownership over it.</li>
                            <li><strong>Privacy Policy:</strong> Your use of Pace is also governed by our Privacy Policy, which explains how we use anonymized technical data (via Firebase) to maintain the App’s performance.</li>
                        </ul>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">5. Intellectual Property</h2>
                        <p>The App, including its code, design, graphics, and original content, is the intellectual property of Amit Nagar and is protected by copyright and trademark laws. We grant you a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes.</p>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">6. Third-Party Services</h2>
                        <p>The App utilizes Firebase (a Google service) for:</p>
                        <ol>
                            <li>Crash Reporting: To identify and fix technical bugs.</li>
                            <li>Analytics: To understand high-level app performance (e.g., how many users are active).</li>
                        </ol>
                        <p>By using the App, you acknowledge that these third-party services operate under their own terms and privacy policies. No personal habit data is shared with these services.</p>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">7. No Warranties (The "As-Is" Clause)</h2>
                        <p>The App is provided on an "AS IS" and "AS AVAILABLE" basis. To the maximum extent permitted by law, we disclaim all warranties, whether express or implied, including but not limited to:</p>
                        <ul>
                            <li>The App will be error-free or uninterrupted.</li>
                            <li>The App will meet your specific requirements or expectations.</li>
                            <li>The accuracy or reliability of any insights generated by the App.</li>
                        </ul>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">8. Limitation of Liability</h2>
                        <p>To the maximum extent permitted by law, Amit Nagar shall not be liable for any indirect, incidental, special, or consequential damages, including but not limited to:</p>
                        <ul>
                            <li>Loss of data (due to device failure or app deletion).</li>
                            <li>Personal injury or health issues resulting from the use of Pace.</li>
                            <li>Interruption of business or any other intangible losses.</li>
                        </ul>
                        <p>In no event shall our total liability to you exceed the amount (if any) paid by you to download the App.</p>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">9. Termination</h2>
                        <p>You may terminate this agreement at any time by deleting Pace and all associated data from your device. We reserve the right to discontinue the App or update its features at any time without prior notice.</p>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">10. Governing Law</h2>
                        <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal action or proceeding related to the App shall be brought exclusively in the courts located in Delhi, India.</p>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">11. Changes to These Terms</h2>
                        <p>We may update these Terms from time to time. When we do, we will update the "Last Updated" date at the top of this page. Your continued use of the App after changes are posted constitutes your acceptance of the new Terms.</p>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">12. Contact Information</h2>
                        <p>If you have any questions or concerns regarding these Terms, please contact us at:</p>
                        <p className="m-0"><strong>Email:</strong> devbyamit@gmail.com</p>
                        <p className="m-0"><strong>Website:</strong> yourpace.site</p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
