import { getPolicy } from '@/lib/api';

export default async function TermsConditionsAstrologer() {
    const policy = await getPolicy('terms-and-conditions-astrologer');

    if (policy) {
        return (
            <main className="max-w-4xl mx-auto px-4 pt-32 pb-12 text-justify font-sans text-gray-800">
                <h1 className="text-3xl font-bold text-center mb-4">{policy.title}</h1>
                <p className="text-sm text-gray-500 mb-8 text-center">Last Updated: {new Date(policy.lastUpdated).toLocaleDateString()}</p>
                <div
                    className="space-y-4 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mb-2 [&>h3]:text-lg [&>h3]:font-bold [&>h3]:mb-2 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-4"
                    dangerouslySetInnerHTML={{ __html: policy.content }}
                />
            </main>
        );
    }

    return (
        <main className="max-w-4xl mx-auto px-4 pt-32 pb-12 text-justify font-sans text-gray-800">
            <h1 className="text-3xl font-bold text-center mb-4">TERMS & CONDITIONS</h1>
            <h2 className="text-xl font-semibold text-center mb-8">For Astrologers / Consultants</h2>

            <p className="text-sm text-gray-500 mb-8 text-center">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6">
                <p className="font-medium">
                    This Agreement is between Vedic.Astro (Service Provider) and the Astrologer/Consultant (Partner).
                </p>

                <section>
                    <h3 className="text-xl font-bold mb-3">1. Registration & Verification</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>You must provide accurate personal and professional details.</li>
                        <li>Verification is subject to document approval (Aadhar, PAN, Certificates).</li>
                        <li>Vedic.Astro reserves the right to accept or reject any application.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">2. Independent Contractor Relationship</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>You are an Independent Service Provider, NOT an employee of Vedic.Astro.</li>
                        <li>You are responsible for your own taxes and legal compliances.</li>
                        <li>No PF, ESI, or insurance benefits are applicable.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">3. Code of Conduct</h3>
                    <p className="mb-2">You agree to:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Provide honest and ethical guidance.</li>
                        <li>Respect user privacy and confidentiality.</li>
                        <li>Maintain professionalism in all interactions.</li>
                        <li>NOT share personal contact details with users.</li>
                        <li>NOT ask users to pay outside the platform.</li>
                    </ul>
                    <p className="font-bold text-red-600">Violation will lead to immediate account suspension.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">4. Payments & Payouts</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Earnings will be credited to your wallet after consultation completion.</li>
                        <li>Platform fees/commission will be deducted as agreed.</li>
                        <li>Payouts are processed weekly/monthly to your verified bank account.</li>
                        <li>TDS will be deducted as per government norms.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">5. Availability & Service Quality</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>You must maintain minimum online hours as per agreement.</li>
                        <li>Repeated call rejections or poor ratings may affect visibility.</li>
                        <li>Quality violations may lead to penalties.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">6. Intellectual Property</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Content provided by you (blogs, videos) gives Vedic.Astro usage rights.</li>
                        <li>You cannot use Vedic.Astro branding for personal promotion without permission.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">7. Termination</h3>
                    <p className="mb-2">We may terminate your account if:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>You violate terms.</li>
                        <li>Engage in fraudulent activities.</li>
                        <li>Receive consistent negative feedback.</li>
                    </ul>
                    <p className="text-sm text-gray-600">You may also terminate by giving prior notice.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">8. Disclaimer & Liability</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Vedic.Astro is a platform connecting users and astrologers.</li>
                        <li>We are not responsible for user behavior or technical disputes.</li>
                        <li>You are solely responsible for your advice and remedies.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">9. Governing Law</h3>
                    <p className="mb-2">Any disputes shall be settled in <strong>Jaipur Courts, Rajasthan</strong>.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">10. Contact Support</h3>
                    <p className="mb-2">For partner support:</p>
                    <ul className="list-none space-y-2">
                        <li>📧 <a href="mailto:partners@vedic.store" className="text-blue-600 hover:underline">partners@vedic.store</a></li>
                    </ul>
                </section>
            </div>
        </main>
    )
}
