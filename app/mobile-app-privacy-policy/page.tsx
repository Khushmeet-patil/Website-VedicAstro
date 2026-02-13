import { Separator } from "@/components/ui/separator"

export default function MobileAppPrivacyPolicy() {
    return (
        <main className="container mx-auto px-4 py-24 max-w-4xl">
            <h1 className="text-4xl font-serif font-bold mb-2">Privacy Policy</h1>
            <h2 className="text-xl text-primary font-medium mb-6">Vedic.Astro Mobile Application</h2>

            <p className="text-sm text-muted-foreground mb-8">Effective Date: {new Date().toLocaleDateString()}</p>

            <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20 mb-8">
                <p className="font-medium text-secondary">
                    Vedic.Astro respects your privacy and is committed to protecting your personal information.
                </p>
            </div>

            <div className="prose prose-slate max-w-none dark:prose-invert space-y-8">
                <section>
                    <p>
                        Vedic.Astro (“Company”, “we”, “our”, “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, disclose, and safeguard your information when you use our mobile application Vedic.Astro and related services.
                    </p>
                    <p className="mt-4">
                        By downloading, installing, or using our application, you agree to the practices described in this Privacy Policy.
                    </p>
                </section>

                <Separator />

                <section>
                    <h3 className="text-2xl font-semibold mb-4">1. Information We Collect</h3>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold text-lg mb-2">1.1 Personal Information</h4>
                            <p>When you use our app, we may collect:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Full Name</li>
                                <li>Date of Birth</li>
                                <li>Time of Birth</li>
                                <li>Place of Birth</li>
                                <li>Gender</li>
                                <li>Phone Number</li>
                                <li>Email Address</li>
                                <li>Profile Photo (optional)</li>
                                <li>Payment details (for purchases)</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-2">1.2 Non-Personal Information</h4>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Device type & model</li>
                                <li>Operating system</li>
                                <li>App version</li>
                                <li>IP Address</li>
                                <li>Location (approximate GPS)</li>
                                <li>Usage behavior</li>
                                <li>Crash logs & analytics</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-2">1.3 Automatically Collected Data</h4>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Cookies</li>
                                <li>App usage statistics</li>
                                <li>Session information</li>
                                <li>Interaction with features</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h3>
                    <p>We use collected information to:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Generate horoscope, kundli, numerology & astrology predictions</li>
                        <li>Provide astrology consultation services</li>
                        <li>Enable chat/call with astrologers</li>
                        <li>Process payments</li>
                        <li>Send order confirmations</li>
                        <li>Provide customer support</li>
                        <li>Improve app performance</li>
                        <li>Personalize user experience</li>
                        <li>Send offers, promotions & notifications</li>
                        <li>Prevent fraud and misuse</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">3. Payments & Transactions</h3>
                    <p>For paid services, we use secure third-party payment gateways such as:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Google Play Billing</li>
                        <li>Razorpay / Stripe / Paytm (if applicable)</li>
                    </ul>
                    <p className="mt-2 font-bold text-destructive">We do not store your card or banking details on our servers.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">4. Data Sharing & Disclosure</h3>
                    <p className="font-bold">We DO NOT sell your personal information.</p>
                    <p className="mt-2">We may share data only with:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Verified astrologers (for consultation services only)</li>
                        <li>Payment processors</li>
                        <li>Analytics providers</li>
                        <li>Legal authorities (if required by law)</li>
                        <li>Cloud storage providers</li>
                    </ul>
                    <p className="mt-2 text-sm text-muted-foreground">All third parties are bound by confidentiality agreements.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">5. Data Storage & Security</h3>
                    <p>We use:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>SSL encryption</li>
                        <li>Secure cloud servers</li>
                        <li>Restricted database access</li>
                        <li>Regular monitoring</li>
                    </ul>
                    <p className="mt-2 text-sm">However, no method is 100% secure. We strive to protect your data with industry standards.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">6. Cookies & Tracking Technologies</h3>
                    <p>We may use cookies or SDKs for:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Login sessions</li>
                        <li>Analytics</li>
                        <li>Ads optimization</li>
                        <li>Performance improvement</li>
                    </ul>
                    <p className="mt-2 text-sm">You can disable cookies from device settings.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">7. User Rights</h3>
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Access your data</li>
                        <li>Update information</li>
                        <li>Delete your account</li>
                        <li>Withdraw consent</li>
                        <li>Opt-out of marketing notifications</li>
                    </ul>
                    <p className="mt-4">To request changes, contact us at: <a href="mailto:support@vedicastro.com" className="text-primary hover:underline">support@vedicastro.com</a></p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">8. Children’s Privacy</h3>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Our services are not intended for children under 18.</li>
                        <li>We do not knowingly collect information from minors.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">9. Third-Party Links</h3>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Our app may contain links to external websites.</li>
                        <li>We are not responsible for their privacy practices.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">10. Data Retention</h3>
                    <p>We retain your data:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>As long as account is active</li>
                        <li>For legal compliance</li>
                        <li>For improving services</li>
                    </ul>
                    <p className="mt-2 text-sm">You may request deletion anytime.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">11. Advertising & Analytics</h3>
                    <p>We may use Google Analytics, Firebase, and Google AdMob.</p>
                    <p className="mt-2 text-sm">These services may collect anonymized data to show relevant ads and improve experience.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">12. Refund & Cancellation</h3>
                    <p>All refunds and cancellations are governed by our separate <a href="/return-refund-policy" className="text-primary hover:underline">Refund Policy</a>, available inside the app or website.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">13. Changes to Privacy Policy</h3>
                    <p>We may update this policy periodically.</p>
                    <p>Changes will be posted inside the app.</p>
                    <p className="font-medium">Continued use means acceptance of updated policy.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">14. Consent</h3>
                    <p>By using Vedic.Astro, you consent to this Privacy Policy and data practices.</p>
                </section>

                <section className="bg-muted p-6 rounded-lg mt-8">
                    <h3 className="text-xl font-semibold mb-4">15. Contact Us</h3>
                    <div className="space-y-3">
                        <p>If you have any questions:</p>
                        <p><strong>Vedic.Astro Support Team</strong></p>
                        <div className="flex items-center gap-2">
                            <span>📧</span>
                            <a href="mailto:support@vedicastro.com" className="text-primary hover:underline">support@vedicastro.com</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>🌐</span>
                            <a href="https://www.vedicastro.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.vedicastro.com</a>
                        </div>
                        <p><strong>Address:</strong> [Your Company Address]</p>
                    </div>
                </section>

            </div>
        </main>
    )
}
