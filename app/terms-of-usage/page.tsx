import { Separator } from "@/components/ui/separator"

export default function TermsOfUsage() {
    return (
        <main className="container mx-auto px-4 py-24 max-w-4xl">
            <h1 className="text-4xl font-serif font-bold mb-2">TERMS AND CONDITIONS OF USAGE</h1>
            <h2 className="text-xl text-primary font-medium mb-6">Vedic.Astro Mobile Application & Website</h2>

            <p className="text-sm text-muted-foreground mb-8">Effective Date: {new Date().toLocaleDateString()}</p>

            <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20 mb-8">
                <p className="font-medium text-secondary">
                    By accessing, registering, or using our services, you agree to be legally bound by these Terms of Usage.
                </p>
            </div>

            <div className="prose prose-slate max-w-none dark:prose-invert space-y-8">
                <section>
                    <p>
                        These Terms and Conditions of Usage (hereinafter referred to as “Terms of Usage”) describe and govern the User’s use of the content and services offered by Vedic.Astro Technologies Private Limited (hereinafter referred to as “Company”, “Vedic.Astro”, “we”, “us”, “our”, “Application”, “Platform”, or “Website”) through the Vedic.Astro mobile application and website.
                    </p>
                </section>

                <Separator />

                <section>
                    <h3 className="text-2xl font-semibold mb-4">UPDATION</h3>
                    <p>The Platform reserves the right to update, amend, or modify these Terms of Usage at any time without prior notice.</p>
                    <p className="mt-2">Users are responsible for reviewing the Terms periodically. Continued use of the Platform constitutes acceptance of any modifications.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">USER CONSENT</h3>
                    <p>By accessing or using the Website/Application, you (“User”, “Member”, “You”, “Your”):</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>✅ Confirm that you have read these Terms</li>
                        <li>✅ Understand them completely</li>
                        <li>✅ Agree to be legally bound</li>
                    </ul>
                    <p className="mt-4 font-bold text-destructive">If you do not agree, please discontinue use of the services immediately.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">GENERAL DESCRIPTION OF SERVICES</h3>
                    <p>Vedic.Astro is an internet-based astrology and spiritual guidance platform that provides:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Horoscope & Kundli</li>
                        <li>Astrology predictions</li>
                        <li>Tarot & Numerology</li>
                        <li>Reports & remedies</li>
                        <li>Chat/Call/Video consultations</li>
                        <li>Email consultations</li>
                        <li>Sale of spiritual/astrological products</li>
                        <li>Free & Paid Services</li>
                    </ul>
                    <p className="mt-4">Free services may be accessed without registration. Paid or personalized services require account registration and payment.</p>
                    <p className="mt-4">By registering, you agree:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>To provide current, complete, and accurate information</li>
                        <li>To update such information whenever required</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">REGISTRATION AND ELIGIBILITY</h3>
                    <p>You must:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Be 18 years or older</li>
                        <li>Be legally competent to form contracts under Indian Contract Act, 1872</li>
                    </ul>
                    <p className="mt-2 text-sm">Minors may only use the services under parental/guardian supervision.</p>

                    <h4 className="font-semibold mt-4 mb-2">During registration:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Provide true information</li>
                        <li>Maintain account confidentiality</li>
                        <li>Not create multiple accounts</li>
                    </ul>
                    <p className="mt-2 text-destructive">We may suspend or terminate accounts for false or misleading information.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">ACCOUNT SECURITY</h3>
                    <p>You are solely responsible for:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Maintaining password secrecy</li>
                        <li>All activities under your account</li>
                    </ul>
                    <p className="mt-2">Vedic.Astro shall not be liable for unauthorized use of your account.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">FEATURE “CALL WITH ASTROLOGER”</h3>
                    <p>By using call/chat consultation services:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Charges are calculated per minute</li>
                        <li>Calls may be recorded for quality and training purposes</li>
                        <li>You consent to receive calls/SMS even if your number is registered under DND</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">NATURE OF SERVICES (IMPORTANT DISCLAIMER)</h3>
                    <p>All services are provided for <strong>Spiritual, religious, entertainment, and guidance purposes only.</strong></p>
                    <p className="mt-4 text-destructive font-bold">We DO NOT guarantee:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-destructive">
                        <li>❌ Accuracy of predictions</li>
                        <li>❌ Financial or business gains</li>
                        <li>❌ Marriage success</li>
                        <li>❌ Health improvements</li>
                        <li>❌ Legal or medical outcomes</li>
                    </ul>
                    <p className="mt-4">Users take decisions at their own risk and discretion.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">WEBSITE CONTENT</h3>
                    <p>Users shall NOT:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Post unlawful/abusive/defamatory material</li>
                        <li>Harass astrologers or staff</li>
                        <li>Upload viruses or malicious code</li>
                        <li>Copy or misuse content</li>
                        <li>Attempt hacking or fraud</li>
                        <li>Record consultations without consent</li>
                    </ul>
                    <p className="mt-2 font-bold text-destructive">Violation may lead to permanent suspension.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">USER ACCOUNT ACCESS</h3>
                    <p>You authorize Vedic.Astro and its authorized personnel to access your account information solely for:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Customer support</li>
                        <li>Quality checks</li>
                        <li>Complaint resolution</li>
                        <li>Service improvement</li>
                    </ul>
                    <p className="mt-2 text-sm">Such access is governed by our <a href="/app-privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">PRIVACY POLICY</h3>
                    <p>Your use of services is also governed by our <a href="/app-privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.</p>
                    <p className="mt-2">By using the Platform, you consent to data collection and usage practices mentioned therein.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">PAYMENTS & BILLING</h3>
                    <p>Payments may be processed through: Google Play Billing, UPI / Debit Card / Credit Card / Wallets / Payment Gateways</p>
                    <h4 className="font-semibold mt-4 mb-2">Rules:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Advance payment required</li>
                        <li>Prices may change without notice</li>
                        <li>Taxes may apply</li>
                        <li>Wallet balance is non-transferable</li>
                    </ul>
                    <p className="mt-2 font-bold">We do not store card/bank details.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">DELIVERY, CANCELLATION & REFUND</h3>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>No refund after consultation/report processing begins</li>
                        <li>No refund for partially used minutes</li>
                        <li>Incorrect data provided by user → no refund</li>
                        <li>Duplicate/failed payments → refundable</li>
                        <li>Technical failures → may be eligible</li>
                        <li>Shipping/custom charges may be deducted</li>
                    </ul>
                    <p className="mt-2 font-medium">Final decision rests with Vedic.Astro.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">THIRD-PARTY SERVICES</h3>
                    <p>We may use payment gateways, analytics tools, ads networks, and cloud services.</p>
                    <p className="mt-2">We are not responsible for third-party policies or actions.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">INTELLECTUAL PROPERTY RIGHTS</h3>
                    <p>All content including Text, Reports, Designs, Software, Logos, and Graphics belongs exclusively to Vedic.Astro.</p>
                    <p className="mt-2 font-bold text-destructive">Users may not reproduce, distribute, copy, or resell without written permission.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">DISCLAIMER OF WARRANTIES</h3>
                    <p>Services are provided “AS IS” and “AS AVAILABLE”.</p>
                    <p className="mt-2">We do not warrant:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Uninterrupted access</li>
                        <li>Error-free operation</li>
                        <li>Accuracy of results</li>
                        <li>Guaranteed outcomes</li>
                    </ul>
                    <p className="mt-2 font-medium">Astrologers provide personal opinions only.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">LIMITATION OF LIABILITY</h3>
                    <p>To the maximum extent permitted by law, Vedic.Astro shall not be liable for:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Financial loss</li>
                        <li>Business loss</li>
                        <li>Emotional distress</li>
                        <li>Relationship disputes</li>
                        <li>Technical interruptions</li>
                        <li>Decisions based on predictions</li>
                    </ul>
                    <p className="mt-2">Our total liability shall not exceed the amount paid for the specific service.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">INDEMNIFICATION</h3>
                    <p>You agree to indemnify and hold harmless Vedic.Astro and its employees against any claims arising from:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Misuse of services</li>
                        <li>Violation of these Terms</li>
                        <li>Infringement of third-party rights</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">TERMINATION</h3>
                    <p>We may suspend or terminate your account if:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Terms are violated</li>
                        <li>Fraud detected</li>
                        <li>Abusive behavior</li>
                        <li>Illegal activities</li>
                    </ul>
                    <p className="mt-2">Users may delete accounts anytime.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">FORCE MAJEURE</h3>
                    <p>We are not liable for delays caused by internet/server failures, natural disasters, government actions, or technical issues beyond control.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">GOVERNING LAW & JURISDICTION</h3>
                    <p>These Terms shall be governed by the laws of India.</p>
                    <p className="mt-2">All disputes shall be subject to: <strong>Courts of [Your City, State, India]</strong></p>
                </section>

                <section className="bg-muted p-6 rounded-lg mt-8">
                    <h3 className="text-xl font-semibold mb-4">CONTACT DETAILS</h3>
                    <div className="space-y-3">
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

                <p className="text-sm text-center text-muted-foreground mt-8">
                    By continuing to use Vedic.Astro, you acknowledge that you have read, understood, and agreed to these Terms and Conditions of Usage.
                </p>

            </div>
        </main>
    )
}
