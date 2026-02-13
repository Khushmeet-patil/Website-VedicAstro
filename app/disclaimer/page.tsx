import { getPolicy } from '@/lib/api';

export default async function Disclaimer() {
    const policy = await getPolicy('disclaimer');

    if (policy) {
        return (
            <main className="max-w-4xl mx-auto px-4 pt-32 pb-12 text-justify font-sans text-gray-800">
                <h1 className="text-3xl font-bold text-center mb-4">{policy.title}</h1>
                <p className="text-sm text-gray-500 mb-8 text-center">
                    {policy.lastUpdated ? `Last Updated: ${new Date(policy.lastUpdated).toLocaleDateString()}` : ''}
                </p>
                <div
                    className="space-y-4 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mb-2 [&>h3]:text-lg [&>h3]:font-bold [&>h3]:mb-2 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-4"
                    dangerouslySetInnerHTML={{ __html: policy.content }}
                />
            </main>
        );
    }

    return (
        <main className="max-w-4xl mx-auto px-4 pt-32 pb-12 text-justify font-sans text-gray-800">
            <h1 className="text-3xl font-bold text-center mb-4">Disclaimer</h1>
            <h2 className="text-xl font-semibold text-center mb-8">Vedic.Astro | Vedic.Store</h2>

            <div className="space-y-6">
                <p className="font-medium text-center mb-8">
                    Please read this disclaimer carefully before using our services.
                </p>

                <section>
                    <h3 className="text-xl font-bold mb-3">1. ENTERTAINMENT & GUIDANCE PURPOSE ONLY</h3>
                    <p className="mb-4">
                        Astrology, Numerology, Tarot, and Vastu are ancient sciences based on belief systems. All predictions and advice provided by astrologers on Vedic.Astro are for entertainment and guidance purposes only.
                    </p>
                    <p className="mb-4 font-bold text-red-600">
                        They should NOT be considered as a substitute for professional advice.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">2. NOT A SUBSTITUTE FOR PROFESSIONAL ADVICE</h3>
                    <p className="mb-2">We strongly advise users NOT to use astrology for:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li><strong>Medical Issues:</strong> Consult a doctor for health concerns.</li>
                        <li><strong>Legal Matters:</strong> Consult a lawyer for legal disputes.</li>
                        <li><strong>Financial Investments:</strong> Consult a certified financial advisor.</li>
                        <li><strong>Mental Health:</strong> Seek help from a licensed therapist.</li>
                    </ul>
                    <p className="mb-4">
                        Vedic.Astro and its astrologers are not responsible for any actions you take based on predictions.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">3. ACCURACY OF PREDICTIONS</h3>
                    <p className="mb-4">
                        Astrology is interpretive. Predictions vary from astrologer to astrologer. We do not guarantee 100% accuracy of any prediction, report, or remedy suggested.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">4. USER RESPONSIBILITY</h3>
                    <p className="mb-4">
                        You agree that your use of the service is at your sole discretion and risk. Vedic.Astro does not assume liability for any emotional oddities, mental distress, or life decisions made by you based on the consultation.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">5. NO GUARANTEES</h3>
                    <p className="mb-4">
                        We do not guarantee specific results from any Gemstone, Puja, Mantra, or Remedy. Results are subjective and based on individual belief.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">6. REFUND POLICY</h3>
                    <p className="mb-4">
                        Refunds are subject to our <strong>Return & Refund Policy</strong>. In general, consultations once consumed are non-refundable.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">7. CONTACT US</h3>
                    <p className="mb-2">If you have concerns regarding our disclaimer:</p>
                    <ul className="list-none space-y-2">
                        <li>📧 <a href="mailto:support@vedic.store" className="text-blue-600 hover:underline">support@vedic.store</a></li>
                    </ul>
                </section>
            </div>
        </main>
    )
}
