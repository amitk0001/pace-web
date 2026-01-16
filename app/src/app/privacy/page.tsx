'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-brand-500/20 selection:text-brand-600">
            <Header />

            <main className="flex-grow container-tight py-24 sm:py-32">
                <div className="max-w-3xl mx-auto prose dark:prose-invert prose-stone">
                    <h1 className="text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
                    <div className="text-stone-500 dark:text-stone-400 mb-12">
                        <p className="m-0">Effective Date: January 17, 2026</p>
                        <p className="m-0">Last Updated: January 17, 2026</p>
                    </div>

                    <p className="lead text-xl text-stone-600 dark:text-stone-400">
                        At Pace, we believe that your habits are personal. Our privacy philosophy is simple: what you do in this app stays on your device. This policy explains how we handle the minimal information required to keep the app running smoothly.
                    </p>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">1. Our "Private-by-Default" Philosophy</h2>
                        <p>Unlike most apps, we do not use central servers to store your habit data.</p>
                        <ul>
                            <li><strong>No Accounts:</strong> You do not need to create an account, provide an email, or log in to use Pace.</li>
                            <li><strong>Local Storage:</strong> All your habits, schedules, and progress logs are stored directly on your smartphone’s internal storage.</li>
                            <li><strong>No Cloud Sync:</strong> We do not upload your habit data to any cloud service.</li>
                        </ul>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">2. Information We Collect (and What We Don’t)</h2>
                        <h3 className="text-xl font-medium mb-3 text-stone-800 dark:text-stone-200">Data We NEVER Collect</h3>
                        <ul>
                            <li><strong>Habit Content:</strong> We never see what habits you are tracking (e.g., "Meditation" or "Read 10 pages").</li>
                            <li><strong>Personal Identity:</strong> We do not collect your name, phone number, email address, or physical location.</li>
                            <li><strong>Contacts/Media:</strong> We do not access your contacts, photos, or files.</li>
                        </ul>

                        <h3 className="text-xl font-medium mb-3 mt-8 text-stone-800 dark:text-stone-200">Data We Collect for Technical Improvements</h3>
                        <p>To ensure Pace is stable and easy to use, we collect limited, anonymized technical data through Google Firebase. This data cannot be traced back to you as an individual.</p>
                        <ul>
                            <li><strong>Usage Insights (Firebase Analytics):</strong> We see aggregate data such as which screens are popular or how many people use a specific feature. This helps us decide what to improve next.</li>
                            <li><strong>Stability Monitoring (Firebase Crashlytics):</strong> If the app crashes, we receive a technical report containing the device model, operating system version, and the line of code that caused the error. This is used solely for bug fixing.</li>
                        </ul>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">3. Third-Party Services</h2>
                        <p>We use a strictly limited set of third-party tools to help maintain Pace’s performance. These service providers are prohibited from using your data for any purpose other than providing these technical services.</p>

                        <div className="overflow-x-auto mt-6">
                            <table className="min-w-full border-collapse border border-stone-200 dark:border-stone-800">
                                <thead>
                                    <tr className="bg-stone-50 dark:bg-stone-900/50">
                                        <th className="border border-stone-200 dark:border-stone-800 px-4 py-2 text-left text-sm font-semibold">Service</th>
                                        <th className="border border-stone-200 dark:border-stone-800 px-4 py-2 text-left text-sm font-semibold">Purpose</th>
                                        <th className="border border-stone-200 dark:border-stone-800 px-4 py-2 text-left text-sm font-semibold">Data Type</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr>
                                        <td className="border border-stone-200 dark:border-stone-800 px-4 py-2">Firebase Analytics</td>
                                        <td className="border border-stone-200 dark:border-stone-800 px-4 py-2">Product improvement</td>
                                        <td className="border border-stone-200 dark:border-stone-800 px-4 py-2">Anonymized usage statistics</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-stone-200 dark:border-stone-800 px-4 py-2">Firebase Crashlytics</td>
                                        <td className="border border-stone-200 dark:border-stone-800 px-4 py-2">Bug fixing & stability</td>
                                        <td className="border border-stone-200 dark:border-stone-800 px-4 py-2">Technical crash logs</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4 text-sm italic text-stone-500">Note: These services do not receive your habit data or any personally identifiable information.</p>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">4. Data Security & Storage</h2>
                        <p>Because your data is stored locally on your device, its security depends on your device’s security settings.</p>
                        <ul>
                            <li><strong>Encryption:</strong> We recommend using your phone’s built-in encryption, PIN, or biometric locks to protect your data.</li>
                            <li><strong>Backups:</strong> Your habit data is typically included in your standard phone backups (e.g., iCloud or Google Drive backups), which are managed by your mobile OS provider, not by us.</li>
                        </ul>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">5. Your Rights and Control</h2>
                        <p>Since we do not store your data on our servers, you have total control over it:</p>
                        <ul>
                            <li><strong>Access and Portability:</strong> All your data is on your device. You can view it at any time within Pace.</li>
                            <li><strong>Deletion:</strong> To delete all data associated with the app, simply uninstall Pace. This will permanently remove all local habit data from your device storage.</li>
                            <li><strong>Opt-out of Analytics:</strong> You can opt-out of anonymized analytics via the app’s Settings menu at any time.</li>
                        </ul>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">6. Children’s Privacy</h2>
                        <p>Pace is not designed to collect personal information from anyone, including children under the age of 13 (or 16 in the EU). Because we do not require accounts or collect personal identifiers, we do not knowingly track or store data from children.</p>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">7. Compliance with Privacy Laws (GDPR & CCPA)</h2>
                        <p>While we collect the absolute minimum data necessary, we respect global privacy standards:</p>
                        <ul>
                            <li><strong>GDPR (General Data Protection Regulation):</strong> For users in the EEA, we act as the "Data Controller" only for the anonymized technical data. Your habit data is managed solely by you on your device.</li>
                            <li><strong>CCPA (California Consumer Privacy Act):</strong> We do not "sell" or "share" your personal information, as we do not collect any personal information to begin with.</li>
                        </ul>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">8. Changes to This Policy</h2>
                        <p>We may update our Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top.</p>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-stone-900 dark:text-stone-100">9. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy or how your data is handled, please reach out to us:</p>
                        <p className="m-0"><strong>Email:</strong> devbyamit@gmail.com</p>
                        <p className="m-0"><strong>Website:</strong> yourpace.site</p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
