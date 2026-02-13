import { Separator } from "@/components/ui/separator"

export default function Disclaimer() {
    return (
        <main className="container mx-auto px-4 py-24 max-w-4xl">
            <h1 className="text-4xl font-serif font-bold mb-2">Disclaimer</h1>
            <h2 className="text-xl text-primary font-medium mb-6">Vedic.Astro</h2>

            <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20 mb-8">
                <p className="font-medium text-secondary">
                    Astrology services are provided for entertainment purposes only. Results are not guaranteed.
                </p>
            </div>

            <div className="prose prose-slate max-w-none dark:prose-invert space-y-8">
                <section>
                    <p>
                        Welcome to Vedic.Astro.
                    </p>
                    <p className="mt-4">
                        By accessing or using our website, mobile application, or any services offered by Vedic.Astro (“Platform”), you acknowledge and agree to the following disclaimers.
                    </p>
                </section>

                <Separator />

                <section>
                    <h3 className="text-2xl font-semibold mb-4">1. Entertainment & Guidance Purpose Only</h3>
                    <p>All astrology services, consultations, predictions, horoscopes, numerology, tarot readings, vastu advice, kundli analysis, and other content provided on the Platform are:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>✅ For guidance purposes only</li>
                        <li>✅ For spiritual insight</li>
                        <li>✅ For entertainment purposes only</li>
                    </ul>

                    <h4 className="font-semibold mt-4 mb-2 text-destructive">They must NOT be treated as:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-destructive">
                        <li>❌ Medical advice</li>
                        <li>❌ Legal advice</li>
                        <li>❌ Financial advice</li>
                        <li>❌ Psychological therapy</li>
                        <li>❌ Professional consultation</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">2. No Professional Substitute</h3>
                    <p>Any prediction, suggestion, or remedy provided by astrologers on Vedic.Astro:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Is based on traditional astrological principles</li>
                        <li>May vary from person to person</li>
                        <li>Is subjective in nature</li>
                    </ul>

                    <div className="mt-4 bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">It is NOT a substitute for professional advice from:</h4>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            <li>• Doctors</li>
                            <li>• Lawyers</li>
                            <li>• Chartered Accountants</li>
                            <li>• Financial Advisors</li>
                            <li>• Psychiatrists</li>
                            <li>• Therapists</li>
                            <li>• Any licensed professional</li>
                        </ul>
                        <p className="mt-4 text-sm font-medium">Users should always seek professional guidance before making important life decisions.</p>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">3. No Guarantees or Warranties</h3>
                    <p>Vedic.Astro makes:</p>
                    <div className="grid grid-cols-3 gap-2 my-2 text-destructive font-bold text-center">
                        <span className="bg-destructive/10 p-2 rounded">❌ No guarantees</span>
                        <span className="bg-destructive/10 p-2 rounded">❌ No warranties</span>
                        <span className="bg-destructive/10 p-2 rounded">❌ No assurances</span>
                    </div>
                    <p className="mt-4">regarding:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Accuracy of predictions</li>
                        <li>Outcomes of remedies</li>
                        <li>Success of solutions</li>
                        <li>Future events</li>
                    </ul>
                    <p className="mt-2 text-sm italic">Astrology is interpretative and results may differ for every individual.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">4. User Responsibility</h3>
                    <p>By using our services, you agree that:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>You are using services voluntarily</li>
                        <li>You understand predictions are opinions</li>
                        <li>Decisions taken are solely your responsibility</li>
                    </ul>
                    <p className="mt-4">Vedic.Astro shall not be liable for:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Financial losses</li>
                        <li>Business losses</li>
                        <li>Relationship issues</li>
                        <li>Health consequences</li>
                        <li>Legal problems</li>
                        <li>Emotional distress</li>
                        <li>Any direct or indirect damages</li>
                    </ul>
                    <p className="mt-2 text-sm">arising from reliance on our services.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">5. Astrologer Opinions</h3>
                    <p>All consultations are provided by independent astrologers.</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Views expressed are personal opinions of astrologers</li>
                        <li>Company does not endorse or guarantee their statements</li>
                        <li>Results may vary</li>
                    </ul>
                    <p className="mt-2 font-medium">Vedic.Astro is only a technology platform connecting users with astrologers.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">6. Remedies & Products Disclaimer</h3>
                    <p>Any remedies, gemstones, bracelets, yantras, or spiritual products suggested:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Are based on traditional beliefs</li>
                        <li>Have no scientific or medical proof</li>
                        <li>Results may vary</li>
                    </ul>
                    <p className="mt-2 font-bold">We do not guarantee effectiveness.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">7. Health & Medical Disclaimer</h3>
                    <p className="font-medium text-destructive mb-2">We strictly advise:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-destructive">
                        <li>❌ Do NOT replace medical treatment with astrology</li>
                        <li>❌ Do NOT delay consulting a doctor</li>
                    </ul>
                    <p className="mt-2 font-bold">Always seek licensed medical professionals for health-related issues.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">8. Financial & Investment Disclaimer</h3>
                    <p>Financial or career predictions:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Are speculative</li>
                        <li>Should not be treated as investment advice</li>
                    </ul>
                    <p className="mt-4">We are not responsible for:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Trading losses</li>
                        <li>Investments</li>
                        <li>Business decisions</li>
                    </ul>
                    <p className="mt-2 font-bold">Always consult certified financial advisors.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">9. Legal Disclaimer</h3>
                    <p>We do not provide:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Legal consultation</li>
                        <li>Court advice</li>
                        <li>Case strategies</li>
                    </ul>
                    <p className="mt-2 font-bold">Please consult licensed lawyers for legal matters.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">10. Service Availability</h3>
                    <p>We do not guarantee:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Continuous availability</li>
                        <li>Error-free service</li>
                        <li>Uninterrupted access</li>
                    </ul>
                    <p className="mt-2 text-sm text-muted-foreground">Technical issues may occur.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h3>
                    <p>To the maximum extent permitted by law, Vedic.Astro shall not be liable for:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Direct damages</li>
                        <li>Indirect damages</li>
                        <li>Incidental damages</li>
                        <li>Consequential losses</li>
                        <li>Loss of profits or data</li>
                    </ul>
                    <p className="mt-2 text-sm">arising out of use of the Platform.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">12. Age Restriction</h3>
                    <p>Services are intended only for:</p>
                    <p className="font-bold text-lg my-2 text-green-600 dark:text-green-400">✅ Users aged 18 years or above</p>
                    <p>Minors should use the platform only under parental guidance.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">13. Company Status Declaration</h3>
                    <p>Vedic.Astro is a technology platform providing astrology-based services.</p>
                    <p className="mt-2">It is:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Not a medical institution</li>
                        <li>Not a legal firm</li>
                        <li>Not a financial advisory firm</li>
                    </ul>
                    <p className="mt-2 text-sm">All transactions and data are processed through Vedic.Astro platform only.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">14. Acceptance of Disclaimer</h3>
                    <p>By continuing to use our Platform, you:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>✅ Accept this Disclaimer</li>
                        <li>✅ Agree to our <a href="/terms-and-conditions-astrologer" className="text-primary hover:underline">Terms</a> & <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a></li>
                        <li>✅ Take full responsibility for your actions</li>
                    </ul>
                    <p className="mt-4 font-bold text-destructive">If you do not agree, please discontinue use immediately.</p>
                </section>

                <section className="bg-muted p-6 rounded-lg mt-8">
                    <h3 className="text-xl font-semibold mb-4">15. Contact Information</h3>
                    <div className="space-y-3">
                        <p>For any concerns:</p>
                        <p><strong>Company Name:</strong> Vedic.Astro</p>
                        <div className="flex items-center gap-2">
                            <span>📧</span>
                            <a href="mailto:support@vedic.store" className="text-primary hover:underline">support@vedic.store</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>🌐</span>
                            <a href="https://www.vedic.store" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.vedic.store</a>
                        </div>
                        <p><strong>Address:</strong> New Delhi, India</p>
                        <p className="text-sm text-green-600 dark:text-green-400 font-medium">✅ Play Store Safe 👍</p>
                    </div>
                </section>

            </div>
        </main>
    )
}
