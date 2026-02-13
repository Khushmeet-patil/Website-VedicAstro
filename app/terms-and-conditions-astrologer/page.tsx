import { Separator } from "@/components/ui/separator"

export default function TermsAndConditionsAstrologer() {
    return (
        <main className="container mx-auto px-4 py-24 max-w-4xl">
            <h1 className="text-4xl font-serif font-bold mb-2">TERMS & CONDITIONS</h1>
            <h2 className="text-xl text-primary font-medium mb-2">For Astrologers / Service Providers</h2>
            <h3 className="text-lg text-muted-foreground mb-6">Vedic.Panel – Astrologer Partner Application</h3>

            <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20 mb-8">
                <p className="font-medium text-secondary">
                    Vedic.Panel is a marketplace connecting users with independent astrologers. We do not guarantee results or income.
                </p>
            </div>

            <div className="prose prose-slate max-w-none dark:prose-invert space-y-8">
                <section>
                    <p>
                        These Terms and Conditions (“Terms”) constitute a legally binding agreement between:
                    </p>
                    <p className="font-semibold mt-2">
                        Vedic.Astro / Vedic.Store / Vedic.Panel (“Company”, “We”, “Us”, “Platform”)
                    </p>
                    <p className="my-2 text-center font-bold">AND</p>
                    <p>
                        Any Astrologer, Tarot Reader, Numerologist, Vastu Expert, Spiritual Consultant, Coach, or Professional registering on the Platform (“Service Provider”, “Astrologer”, “You”).
                    </p>

                    <p className="mt-4">
                        By registering on Vedic.Panel, you agree to these Terms.
                    </p>
                </section>

                <Separator />

                <section>
                    <h3 className="text-2xl font-semibold mb-4">1. About the Platform</h3>
                    <p>Vedic.Panel is a digital platform that connects users with:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Astrologers</li>
                        <li>Tarot Readers</li>
                        <li>Numerologists</li>
                        <li>Vastu Experts</li>
                        <li>Spiritual Consultants</li>
                    </ul>
                    <p className="mt-4">through:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Chat</li>
                        <li>Call</li>
                        <li>Video</li>
                        <li>Reports</li>
                        <li>Live sessions</li>
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground">
                        The Company only acts as a technology facilitator/marketplace. We do not provide astrology services directly.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">2. Independent Contractor Relationship</h3>
                    <p>You acknowledge that:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>✅ You are an Independent Service Provider</li>
                        <li>❌ You are NOT an employee, agent, or partner of the Company</li>
                    </ul>
                    <p className="mt-4">You are responsible for:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Your taxes</li>
                        <li>Compliance</li>
                        <li>Equipment</li>
                        <li>Internet</li>
                        <li>Work schedule</li>
                    </ul>
                    <p className="mt-4 font-medium">Nothing in this Agreement creates employment.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">3. Eligibility</h3>
                    <p>You must:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Be 18+ years old</li>
                        <li>Provide true identity details</li>
                        <li>Submit valid KYC</li>
                        <li>Have relevant astrology knowledge/experience</li>
                        <li>Not be legally restricted from offering services</li>
                    </ul>
                    <p className="mt-2 text-destructive font-medium">False information may lead to permanent suspension.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">4. Services</h3>
                    <p>You may offer:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Astrology consultations</li>
                        <li>Tarot readings</li>
                        <li>Numerology</li>
                        <li>Vastu advice</li>
                        <li>Spiritual guidance</li>
                        <li>Life coaching</li>
                    </ul>

                    <h4 className="font-semibold mt-4 mb-2 text-destructive">Strictly Prohibited:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-destructive">
                        <li>❌ Medical diagnosis</li>
                        <li>❌ Legal advice</li>
                        <li>❌ Financial/investment advice</li>
                        <li>❌ Guaranteed outcomes</li>
                        <li>❌ Illegal activities</li>
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground">All predictions are for guidance & entertainment purposes only.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">5. Use of Platform</h3>
                    <p>You agree NOT to:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Share personal contact number/email with users</li>
                        <li>Take payments outside the app</li>
                        <li>Divert clients</li>
                        <li>Promote competitors</li>
                        <li>Create fake accounts/reviews</li>
                        <li>Manipulate ratings</li>
                        <li>Use abusive language</li>
                        <li>Harass users</li>
                    </ul>
                    <p className="mt-4 font-medium">Violation may result in:</p>
                    <ul className="list-disc pl-6 mt-1 space-y-1 text-destructive">
                        <li>Immediate suspension</li>
                        <li>Payment hold</li>
                        <li>Permanent ban</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">6. Working Guidelines</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-card border p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">Availability</h4>
                            <ul className="list-disc pl-6 space-y-1 text-sm">
                                <li>Maintain regular online hours</li>
                                <li>Accept calls/chats professionally</li>
                                <li>Respond politely</li>
                            </ul>
                        </div>

                        <div className="bg-card border p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">Conduct</h4>
                            <ul className="list-disc pl-6 space-y-1 text-sm">
                                <li>Be respectful</li>
                                <li>No discrimination</li>
                                <li>No misleading promises</li>
                                <li>No guarantees like “100% result”</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-4 bg-destructive/5 p-4 rounded-lg border border-destructive/20">
                        <h4 className="font-semibold mb-2 text-destructive">Prohibited Content</h4>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Adult content</li>
                            <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Hate speech</li>
                            <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Fraud</li>
                            <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Religious or political extremism</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">7. Payments & Revenue Share</h3>
                    <p>Your earnings depend on:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Consultation minutes</li>
                        <li>Pricing set</li>
                        <li>Offers/discounts</li>
                        <li>Platform commission</li>
                    </ul>

                    <div className="my-4 bg-muted p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Example Structure (modifiable by company):</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                            <li>Platform share: 50–70%</li>
                            <li>Astrologer share: 30–50%</li>
                        </ul>
                        <p className="text-xs text-muted-foreground mt-2">Actual rates are shown in your dashboard.</p>
                    </div>

                    <h4 className="font-semibold mt-4 mb-2">Payment Terms</h4>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Paid weekly/monthly</li>
                        <li>Wallet system</li>
                        <li>TDS/GST deductions as applicable</li>
                        <li>Gateway charges may apply</li>
                    </ul>
                    <p className="mt-2 text-sm text-destructive">Refunds/chargebacks → deducted from earnings.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">8. Pricing</h3>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Pricing is decided during onboarding</li>
                        <li>Changes subject to approval</li>
                        <li>Platform may run offers/discounts</li>
                        <li>Earnings adjust accordingly</li>
                    </ul>
                    <p className="mt-2 font-medium">Company reserves the right to modify pricing rules anytime.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">9. Refunds & Disputes</h3>
                    <p>If a user requests refund:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Company may refund fully/partially</li>
                        <li>Amount deducted from payout</li>
                        <li>Company decision final</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">10. Platform Rights</h3>
                    <p>Company may:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Suspend account</li>
                        <li>Modify features</li>
                        <li>Hold payouts</li>
                        <li>Remove profile</li>
                        <li>Audit chats/calls</li>
                        <li>Change policies</li>
                    </ul>
                    <p className="mt-2 text-sm text-muted-foreground">Without prior notice if misuse detected.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">11. No Client Poaching</h3>
                    <p>You agree NOT to:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Contact users outside platform</li>
                        <li>Share personal details</li>
                        <li>Move clients to WhatsApp/Instagram</li>
                        <li>Sell services privately</li>
                    </ul>
                    <p className="mt-2 font-bold text-destructive">Breach → permanent termination + payout hold.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">12. Account Security</h3>
                    <p>You must:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Keep login confidential</li>
                        <li>Not share credentials</li>
                        <li>Report unauthorized access</li>
                    </ul>
                    <p className="mt-2">You are fully responsible for your account activity.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">13. Content Ownership</h3>
                    <p>Any Video, Audio, Live stream, Training, or Promotional content created on Vedic platform:</p>
                    <div className="my-2 font-bold text-primary">👉 becomes Company property.</div>
                    <p>We may use it for:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Marketing</li>
                        <li>Social media</li>
                        <li>Advertising</li>
                        <li>Education</li>
                    </ul>
                    <p className="mt-2 text-sm">without extra payment.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">14. Disclaimers</h3>
                    <p>Platform is provided “As Is” and “As Available”.</p>
                    <p className="mt-2">Company does NOT guarantee:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Minimum earnings</li>
                        <li>Minimum calls</li>
                        <li>User availability</li>
                        <li>Income stability</li>
                    </ul>
                    <p className="mt-2 font-medium">You work at your own risk.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">15. Limitation of Liability</h3>
                    <p>Company is NOT responsible for:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Client disputes</li>
                        <li>Advice consequences</li>
                        <li>Loss of earnings</li>
                        <li>Technical issues</li>
                        <li>User behavior</li>
                    </ul>
                    <p className="mt-2 font-medium">Maximum liability limited to last 3 months payout.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">16. Confidentiality</h3>
                    <p>You must not disclose:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>User data</li>
                        <li>Business processes</li>
                        <li>Pricing models</li>
                        <li>Internal systems</li>
                    </ul>
                    <p className="mt-2 font-medium">Even after termination.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">17. Notice & Exit Policy</h3>
                    <p>If you wish to stop:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Provide 30 days written notice</li>
                    </ul>
                    <p className="mt-4">Company may:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Hold payouts</li>
                        <li>Process pending refunds</li>
                        <li>Audit account</li>
                    </ul>
                    <p className="mt-2 text-destructive">Premature exit may delay payments.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">18. Suspension & Termination</h3>
                    <p>Immediate termination if:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Fraud</li>
                        <li>Fake reviews</li>
                        <li>Misconduct</li>
                        <li>Taking payments outside</li>
                        <li>User complaints</li>
                        <li>Policy violations</li>
                    </ul>
                    <p className="mt-2 font-bold text-destructive">No compensation payable.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">19. Privacy</h3>
                    <p>Your data handled as per 👉 <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a></p>
                    <p className="mt-2">We may use:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Phone</li>
                        <li>Email</li>
                        <li>KYC</li>
                        <li>Call logs (for system purposes)</li>
                    </ul>
                    <p className="mt-2 text-sm">as required for platform functioning.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">20. Changes to Terms</h3>
                    <p>We may update Terms anytime.</p>
                    <p>Continued usage = acceptance.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">21. Governing Law</h3>
                    <p>These Terms are governed by: <strong>Laws of India</strong></p>
                    <p className="mt-2">Jurisdiction: <strong>Jaipur Courts, Rajasthan</strong></p>
                </section>

                <section className="bg-muted p-6 rounded-lg mt-8">
                    <h3 className="text-xl font-semibold mb-4">22. Contact</h3>
                    <div className="space-y-3">
                        <p><strong>Company:</strong> Vedic.Astro / Vedic.Panel</p>
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
