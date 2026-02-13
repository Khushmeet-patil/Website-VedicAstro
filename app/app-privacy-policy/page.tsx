import { Separator } from "@/components/ui/separator"

export default function AppPrivacyPolicy() {
    return (
        <main className="container mx-auto px-4 py-24 max-w-4xl">
            <h1 className="text-4xl font-serif font-bold mb-2">Privacy Policy</h1>
            <h2 className="text-xl text-primary font-medium mb-6">Vedic.Astro Application</h2>

            <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20 mb-8">
                <p className="font-medium text-secondary">
                    We collect and process your data to provide astrology services. We do NOT sell your personal data.
                </p>
            </div>

            <div className="prose prose-slate max-w-none dark:prose-invert space-y-8">
                <section>
                    <p>
                        This Privacy Policy describes how Vedic.Astro (“Company”, “We”, “Our”, “Us”) collects, uses, stores, processes, shares, and protects your information when you use our mobile application Vedic.Astro and related services (collectively referred to as the “Platform”).
                    </p>
                    <p className="mt-4">
                        By accessing or using our Platform, you agree to this Privacy Policy. If you do not agree, please discontinue use of the Platform.
                    </p>
                    <p className="mt-4 font-semibold">This policy is prepared in accordance with:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Information Technology Act, 2000</li>
                        <li>IT (Reasonable Security Practices and Procedures and Sensitive Personal Data) Rules, 2011</li>
                        <li>Digital Personal Data Protection Act, 2023 (DPDP Act)</li>
                        <li>Google Play Store User Data Policy</li>
                    </ul>
                </section>

                <Separator />

                <section>
                    <h3 className="text-2xl font-semibold mb-4">1. Definitions</h3>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li><strong>User / You:</strong> Any person using the application</li>
                        <li><strong>We / Company:</strong> Vedic.Astro</li>
                        <li><strong>Services:</strong> Astrology, Kundli, Horoscope, Chat, Call, Video consultation, Reports, Products, and related services</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">2. User Consent</h3>
                    <p>By registering or using the Platform, you expressly:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>✅ Consent to collection of your data</li>
                        <li>✅ Allow processing of your personal information</li>
                        <li>✅ Agree to use of cookies & analytics</li>
                        <li>✅ Accept this Privacy Policy</li>
                    </ul>
                    <p className="mt-4 font-bold text-destructive">If you do not agree, please do not use the application.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">3. Information We Collect</h3>

                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-lg mb-2">A. Personal Information (Provided by You)</h4>
                            <p>When you register or use services, we may collect:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Name</li>
                                <li>Mobile number (OTP verification)</li>
                                <li>Email ID</li>
                                <li>Date of Birth / Time / Place of Birth</li>
                                <li>Gender</li>
                                <li>Address</li>
                                <li>Profile photo</li>
                                <li>Chat messages</li>
                                <li>Voice recordings</li>
                                <li>Kundli details</li>
                                <li>Feedback/reviews</li>
                                <li>Payment information</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-2">B. Sensitive Personal Data</h4>
                            <p>As per Indian IT Rules:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Birth details (DOB, Time, Place)</li>
                                <li>Financial information (Card/UPI/Bank details – processed via gateway only)</li>
                                <li>Voice recordings</li>
                                <li>Astrological consultation history</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-lg mb-2">C. Automatically Collected Data</h4>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li>Device ID</li>
                                <li>IP Address</li>
                                <li>Location (approximate)</li>
                                <li>Browser type</li>
                                <li>OS version</li>
                                <li>App usage logs</li>
                                <li>Cookies</li>
                                <li>Crash reports</li>
                                <li>Analytics</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">4. How We Use Your Information</h3>
                    <p>We use your data to:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>✅ Create your account</li>
                        <li>✅ Generate Kundli / Horoscope / Reports</li>
                        <li>✅ Connect you with Astrologers</li>
                        <li>✅ Provide chat/call/video consultations</li>
                        <li>✅ Process payments</li>
                        <li>✅ Improve services</li>
                        <li>✅ Send updates & offers</li>
                        <li>✅ Customer support</li>
                        <li>✅ Fraud prevention</li>
                        <li>✅ Legal compliance</li>
                    </ul>
                    <p className="mt-4 font-bold">We DO NOT sell your personal data.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">5. Communication Consent</h3>
                    <p>By registering, you agree to receive:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>SMS</li>
                        <li>WhatsApp messages</li>
                        <li>Emails</li>
                        <li>Push notifications</li>
                        <li>Calls from astrologers (via masked number system)</li>
                    </ul>
                    <p className="mt-2 text-sm text-muted-foreground">You may opt-out anytime.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">6. Call / Chat / Voice Recording / Microphone Access</h3>
                    <p>For better consultation:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Microphone permission is used for voice messages</li>
                        <li>Calls may be recorded for quality & safety</li>
                        <li>Chats may be stored for support</li>
                    </ul>
                    <p className="mt-2 text-sm">Recordings are securely stored and deleted after reasonable time unless legally required.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">7. Payments & Financial Security</h3>
                    <p>Payments are processed through secure third-party gateways.</p>
                    <p className="mt-2 text-destructive font-bold">We:</p>
                    <ul className="list-disc pl-6 mt-1 space-y-1 text-destructive">
                        <li>❌ Do NOT store card details</li>
                        <li>❌ Do NOT access bank passwords</li>
                    </ul>
                    <p className="mt-2 text-sm text-muted-foreground">All transactions are SSL encrypted.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">8. Cookies & Tracking Technologies</h3>
                    <p>We use cookies and SDKs for:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Login sessions</li>
                        <li>Personalization</li>
                        <li>Analytics</li>
                        <li>Crash tracking</li>
                        <li>Ads optimization</li>
                    </ul>
                    <p className="mt-2 text-sm text-muted-foreground">You may disable cookies in device settings (some features may stop working).</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">9. Sharing of Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                            <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400">Allowed:</h4>
                            <ul className="list-disc pl-6 space-y-1 text-sm">
                                <li>Verified Astrologers (only required details)</li>
                                <li>Payment gateways</li>
                                <li>Analytics providers</li>
                                <li>Cloud hosting services</li>
                                <li>Legal authorities if required</li>
                            </ul>
                        </div>
                        <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
                            <h4 className="font-semibold mb-2 text-destructive">Not Allowed:</h4>
                            <ul className="list-disc pl-6 space-y-1 text-sm text-destructive">
                                <li>❌ Selling user data</li>
                                <li>❌ Sharing for unauthorized marketing</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">10. Data Retention</h3>
                    <p>We retain your data:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>While your account is active</li>
                        <li>For legal compliance</li>
                        <li>For dispute resolution</li>
                    </ul>
                    <p className="mt-2 text-sm">After deletion request → Data is removed within reasonable time.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">11. Profile Deletion</h3>
                    <p>You can:</p>
                    <div className="bg-muted p-4 rounded-lg my-2 font-mono text-sm">App → Settings → Delete Account</div>
                    <p className="mb-2">OR email us.</p>
                    <p className="mt-4 font-medium">After deletion:</p>
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li>Profile removed</li>
                        <li>Wallet disabled</li>
                        <li>Data deleted (except legal records)</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">12. Your Rights (DPDP Act 2023)</h3>
                    <p>You have rights to:</p>
                    <ul className="grid grid-cols-2 gap-2 mt-2">
                        <li className="flex items-center gap-2">✅ Access your data</li>
                        <li className="flex items-center gap-2">✅ Correct errors</li>
                        <li className="flex items-center gap-2">✅ Delete data</li>
                        <li className="flex items-center gap-2">✅ Withdraw consent</li>
                        <li className="flex items-center gap-2">✅ Data portability</li>
                        <li className="flex items-center gap-2">✅ File complaint</li>
                    </ul>
                    <p className="mt-4 text-sm font-medium">Contact us to exercise these rights.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">13. Security Measures</h3>
                    <p>We implement:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>SSL Encryption</li>
                        <li>Secure servers</li>
                        <li>Firewall protection</li>
                        <li>Limited employee access</li>
                        <li>Regular audits</li>
                        <li>Secure cloud storage</li>
                    </ul>
                    <p className="mt-2 text-sm text-muted-foreground">However, no online transmission is 100% secure.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">14. Children Policy</h3>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Services intended for 18+ users</li>
                        <li>No intentional collection from children under 13</li>
                        <li>If detected → data deleted immediately</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">15. Third Party Links</h3>
                    <p>We are not responsible for:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Third-party websites</li>
                        <li>External links</li>
                        <li>Their privacy policies</li>
                    </ul>
                    <p className="mt-2 text-sm">Please read their policies separately.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">16. Disclaimer</h3>
                    <p>Astrology services are:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>For guidance & entertainment only</li>
                        <li>No guaranteed results</li>
                        <li>Not medical/legal advice</li>
                    </ul>
                    <p className="mt-2 font-medium">Users must exercise discretion.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">17. Policy Updates</h3>
                    <p>We may update this Privacy Policy anytime.</p>
                    <p>Updated version will be posted in the app/website.</p>
                    <p>Continued use = acceptance.</p>
                </section>

                <section className="bg-muted p-6 rounded-lg mt-8">
                    <h3 className="text-xl font-semibold mb-4">18. Grievance Officer / Contact Details</h3>
                    <div className="space-y-4">
                        <div>
                            <p className="font-medium text-sm text-muted-foreground">Company Details</p>
                            <p><strong>Company Name:</strong> Vedic.Astro</p>
                            <div className="flex items-center gap-2">
                                <span>📧</span>
                                <a href="mailto:support@vedic.store" className="text-primary hover:underline">support@vedic.store</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>🌐</span>
                                <a href="https://www.vedic.store" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.vedic.store</a>
                            </div>
                            <p><strong>Address:</strong> [Your Company Address]</p>
                        </div>

                        <Separator className="bg-background/20" />

                        <div>
                            <p className="font-medium text-sm text-muted-foreground">Grievance Officer</p>
                            <p><strong>Name:</strong> [Officer Name]</p>
                            <div className="flex items-center gap-2">
                                <span>📧</span>
                                <a href="mailto:grievance@vedic.store" className="text-primary hover:underline">grievance@vedic.store</a>
                            </div>
                            <p className="text-sm mt-2">Complaints will be resolved within 7–15 working days.</p>
                        </div>

                        <p className="text-sm text-green-600 dark:text-green-400 font-medium pt-2">✅ Play Store Compliance Checked</p>
                    </div>
                </section>

            </div>
        </main>
    )
}
