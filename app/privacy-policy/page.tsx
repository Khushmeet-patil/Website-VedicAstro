import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicy() {
    return (
        <main className="container mx-auto px-4 py-24 max-w-4xl">
            <h1 className="text-4xl font-serif font-bold mb-2">PRIVACY POLICY</h1>
            <h2 className="text-xl text-primary font-medium mb-6">Vedic.Astro | Vedic.Panel | Vedic.Store</h2>

            <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20 mb-8">
                <p className="font-medium text-secondary">
                    Vedic.Astro respects your privacy. We do not sell or share your personal data with third parties.
                </p>
            </div>

            <div className="prose prose-slate max-w-none dark:prose-invert space-y-8">
                <section>
                    <p>
                        Vedic.Astro (“Company”, “We”, “Us”, “Our”, “Platform”) values and respects the privacy of all users, astrologers, visitors, and customers.
                        This Privacy Policy explains:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>What information we collect</li>
                        <li>How we use it</li>
                        <li>How we store it</li>
                        <li>When we share it</li>
                        <li>Your rights regarding your data</li>
                    </ul>

                    <h4 className="font-semibold mt-4 mb-2">This policy applies to:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>✅ Vedic.Astro mobile app</li>
                        <li>✅ Vedic.Panel (Astrologer app)</li>
                        <li>✅ www.vedic.store website</li>
                        <li>✅ All related services</li>
                    </ul>

                    <p className="mt-4">
                        By accessing or using our platform, you agree to this Privacy Policy.
                        If you do not agree, please do not use our services.
                    </p>
                </section>

                <Separator />

                <section>
                    <h3 className="text-2xl font-semibold mb-4">1. WHO WE ARE</h3>
                    <p>Vedic.Astro is a digital astrology platform that connects users with:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Astrologers</li>
                        <li>Tarot Readers</li>
                        <li>Numerologists</li>
                        <li>Vastu Experts</li>
                        <li>Spiritual Consultants</li>
                    </ul>
                    <p className="mt-4">We provide:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Chat consultations</li>
                        <li>Call consultations</li>
                        <li>Video sessions</li>
                        <li>Kundli reports</li>
                        <li>Pujas</li>
                        <li>Astrology products</li>
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground">We act only as a technology facilitator/marketplace.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">2. LEGAL COMPLIANCE</h3>
                    <p>This Privacy Policy is created in accordance with:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Information Technology Act, 2000</li>
                        <li>IT Rules, 2011</li>
                        <li>Digital Personal Data Protection Act (DPDP), 2023</li>
                        <li>Play Store & App Store Policies</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">3. INFORMATION WE COLLECT</h3>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-lg mb-2">A. Personal Information (PII)</h4>
                            <p>We may collect:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Name</li>
                                <li>Phone number</li>
                                <li>Email address</li>
                                <li>Date of birth</li>
                                <li>Time & place of birth</li>
                                <li>Gender</li>
                                <li>Marital status</li>
                                <li>Profile photo</li>
                                <li>Address (for product delivery)</li>
                                <li>KYC details (for astrologers)</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-2">B. Consultation Information</h4>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Chat messages</li>
                                <li>Call logs</li>
                                <li>Session details</li>
                                <li>Questions shared with astrologers</li>
                            </ul>
                            <p className="text-sm text-muted-foreground mt-1">(Note: We do NOT sell this information.)</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-2">C. Payment Information</h4>
                            <p>Payments are processed via secure third-party gateways: Razorpay, Stripe, Paytm, CCAvenue</p>
                            <p className="mt-2 font-medium">We do NOT store:</p>
                            <ul className="list-disc pl-6 mt-1 space-y-1 text-destructive">
                                <li>❌ Card numbers</li>
                                <li>❌ CVV</li>
                                <li>❌ Banking credentials</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-2">D. Device & Technical Data</h4>
                            <p>We automatically collect:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>IP address</li>
                                <li>Device type</li>
                                <li>OS version</li>
                                <li>App version</li>
                                <li>Browser</li>
                                <li>Network information</li>
                                <li>Usage behavior</li>
                                <li>Crash logs</li>
                            </ul>
                            <p className="text-sm text-muted-foreground mt-1">Used only for improving app performance.</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-2">E. Permissions We Require</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-muted p-4 rounded-lg">
                                    <h5 className="font-medium mb-2">Android:</h5>
                                    <ul className="list-disc pl-6 space-y-1 text-sm">
                                        <li>Internet access</li>
                                        <li>Network state</li>
                                        <li>Storage (download reports/images)</li>
                                        <li>Camera (profile photo/video call)</li>
                                        <li>Microphone (audio call/chat voice notes)</li>
                                        <li>Notifications</li>
                                    </ul>
                                </div>
                                <div className="bg-muted p-4 rounded-lg">
                                    <h5 className="font-medium mb-2">iOS:</h5>
                                    <ul className="list-disc pl-6 space-y-1 text-sm">
                                        <li>Internet</li>
                                        <li>Storage</li>
                                        <li>Camera</li>
                                        <li>Microphone</li>
                                        <li>Notifications</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">Permissions are only used for app functionality.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">4. HOW WE USE YOUR INFORMATION</h3>
                    <p>We use your information to:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Create accounts</li>
                        <li>Provide consultations</li>
                        <li>Generate Kundli & reports</li>
                        <li>Process payments</li>
                        <li>Customer support</li>
                        <li>Improve services</li>
                        <li>Prevent fraud</li>
                        <li>Send notifications & offers</li>
                        <li>Legal compliance</li>
                    </ul>
                    <p className="mt-4 font-bold">We NEVER sell your data.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">5. CHAT, CALL & VIDEO POLICY</h3>
                    <p>When you interact with astrologers:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Calls may be routed through secure telecom partners</li>
                        <li>Logs may be stored for quality & dispute resolution</li>
                        <li>Conversations are confidential</li>
                    </ul>
                    <div className="mt-4 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 p-3 rounded-md border border-yellow-500/20">
                        <strong>⚠️ Recommendation:</strong> Do not share sensitive financial/medical details unnecessarily.
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">6. COOKIES & ANALYTICS</h3>
                    <p>We use Cookies, Firebase Analytics, and Google Analytics for:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Performance improvement</li>
                        <li>Feature usage tracking</li>
                        <li>Crash analysis</li>
                    </ul>
                    <p className="mt-2 text-sm text-muted-foreground">Data collected is anonymized. You may disable cookies via browser settings.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">7. THIRD PARTY SERVICES</h3>
                    <p>We may use payment gateways, SMS/OTP providers, call routing services, analytics providers, and cloud hosting services.</p>
                    <p className="mt-2">These partners follow strict security standards. We are not responsible for third-party privacy practices.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">8. DATA STORAGE & SECURITY</h3>
                    <p>We protect your data using:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>✅ SSL Encryption</li>
                        <li>✅ Secure servers</li>
                        <li>✅ Firewalls</li>
                        <li>✅ Access control</li>
                        <li>✅ Industry-standard security practices</li>
                    </ul>
                    <p className="mt-2 text-sm text-muted-foreground">However, no internet system is 100% secure.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">9. DATA RETENTION</h3>
                    <p>We retain data:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>As long as account is active</li>
                        <li>For legal compliance</li>
                        <li>For dispute resolution</li>
                        <li>Or as required by law</li>
                    </ul>
                    <p className="mt-2">After deletion request → data removed within reasonable time.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">10. YOUR RIGHTS</h3>
                    <ul className="grid grid-cols-2 gap-2">
                        <li className="flex items-center gap-2">✅ Access your data</li>
                        <li className="flex items-center gap-2">✅ Correct your data</li>
                        <li className="flex items-center gap-2">✅ Update information</li>
                        <li className="flex items-center gap-2">✅ Withdraw consent</li>
                        <li className="flex items-center gap-2">✅ Delete account</li>
                        <li className="flex items-center gap-2">✅ Request data copy</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">11. ACCOUNT DELETION</h3>
                    <p className="mb-4">You can delete account anytime:</p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-card border p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">App:</h4>
                            <p>Settings → Delete Account</p>
                        </div>
                        <div className="bg-card border p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">Website:</h4>
                            <p>My Account → Delete Profile</p>
                        </div>
                    </div>

                    <p className="mt-4">OR email: <a href="mailto:support@vedic.store" className="text-primary hover:underline">support@vedic.store</a></p>
                    <p className="text-sm text-muted-foreground mt-1">All personal data will be removed as per law.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">12. CHILDREN PRIVACY</h3>
                    <p>Our services are only for <strong>18 years and above</strong>.</p>
                    <p>We do not knowingly collect children’s data. If discovered → data deleted immediately.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">13. MARKETING COMMUNICATION</h3>
                    <p>You may receive offers, updates, notifications, SMS, or emails.</p>
                    <p className="mt-2">You may opt-out anytime.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">14. DISCLAIMER</h3>
                    <p>Astrology services are for <strong>Guidance & entertainment only</strong>.</p>
                    <p className="mt-2">We do NOT guarantee:</p>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li>Predictions accuracy</li>
                        <li>Outcomes</li>
                        <li>Financial/medical/legal results</li>
                    </ul>
                    <p className="mt-2">Users must use their own judgment.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">15. LIMITATION OF LIABILITY</h3>
                    <p>Vedic.Astro is not responsible for:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Advice outcomes</li>
                        <li>Financial losses</li>
                        <li>Personal decisions</li>
                        <li>Third-party services</li>
                        <li>Network issues</li>
                    </ul>
                    <p className="mt-2">Use platform at your own risk.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">16. POLICY UPDATES</h3>
                    <p>We may update this policy anytime.</p>
                    <p>Continued usage means acceptance of updated terms.</p>
                </section>

                <section className="bg-muted p-6 rounded-lg mt-8">
                    <h3 className="text-xl font-semibold mb-4">17. CONTACT DETAILS</h3>
                    <div className="space-y-3">
                        <p><strong>Company:</strong> Vedic.Astro / Vedic.Store</p>
                        <div className="flex items-center gap-2">
                            <span>📧</span>
                            <a href="mailto:support@vedic.store" className="text-primary hover:underline">support@vedic.store</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>🌐</span>
                            <a href="https://www.vedic.store" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.vedic.store</a>
                        </div>
                        <p className="text-sm text-green-600 dark:text-green-400 font-medium">✅ Play Store Friendly Line (recommended)</p>
                    </div>
                </section>

            </div>
        </main>
    )
}
