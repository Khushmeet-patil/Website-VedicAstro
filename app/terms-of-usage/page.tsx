import { getPolicy } from '@/lib/api';

export default async function TermsOfUsage() {
    const policy = await getPolicy('terms-of-usage');

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
            <h1 className="text-3xl font-bold text-center mb-4">TERMS AND CONDITIONS OF USAGE</h1>
            <h2 className="text-xl font-semibold text-center mb-8">Vedic.Astro | Vedic.Panel | Vedic.Store</h2>

            <p className="text-sm text-gray-500 mb-8 text-center">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6">
                <p className="font-medium">
                    Welcome to Vedic.Astro. These Terms of Usage ("Terms") govern your use of our website, mobile application, and services.
                </p>

                <section>
                    <h3 className="text-xl font-bold mb-3">1. USER CONSENT</h3>
                    <p className="mb-2">By accessing regarding our services, you:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Confirm that you have read these Terms.</li>
                        <li>Agree to be bound by them.</li>
                        <li>Are at least 18 years of age.</li>
                    </ul>
                    <p className="font-bold text-red-600">If you do not agree, please do not use our services.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">2. SERVICE DESCRIPTION</h3>
                    <p className="mb-2">We provide:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Astrological consultations (Chat/Call/Video).</li>
                        <li>Horoscope & Kundli generation.</li>
                        <li>E-commerce products (Gemstones, etc.).</li>
                    </ul>
                    <p className="text-sm text-gray-600">We do not guarantee the accuracy of predictions, as astrology is a belief-based subject.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">3. ACCOUNT SECURITY</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>You are responsible for maintaining the confidentiality of your account.</li>
                        <li>You agree to notify us immediately of any unauthorized use.</li>
                        <li>We are not liable for any loss due to compromised accounts.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">4. USER CONDUCT</h3>
                    <p className="mb-2">You agree NOT to:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Use abusive language with astrologers.</li>
                        <li>Harass or threaten anyone.</li>
                        <li>Attempt to hack or disrupt the service.</li>
                        <li>Post unrelated or promotional content.</li>
                    </ul>
                    <p className="font-bold">Violation will result in account suspension.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">5. PAYMENTS & REFUNDS</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>All payments are processed securely.</li>
                        <li>Consultation fees are deducted from your wallet.</li>
                        <li>Refunds are governed by our Refund Policy.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">6. INTELLECTUAL PROPERTY</h3>
                    <p className="mb-4">
                        All content, logos, and data on this platform are owned by Vedic.Astro. You may not copy or use them without permission.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">7. DISCLAIMER OF WARRANTIES</h3>
                    <p className="mb-4">
                        Services are provided "as is". We make no warranties regarding the reliability or accuracy of astrological predictions.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">8. LIMITATION OF LIABILITY</h3>
                    <p className="mb-4">
                        We shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">9. GOVERNING LAW</h3>
                    <p className="mb-2">These Terms are governed by the laws of India.</p>
                    <p className="mb-2">Jurisdiction: <strong>Jaipur, Rajasthan</strong>.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">10. CONTACT INFORMATION</h3>
                    <p className="mb-2">For any queries regarding these Terms:</p>
                    <ul className="list-none space-y-2">
                        <li>📧 <a href="mailto:support@vedic.store" className="text-blue-600 hover:underline">support@vedic.store</a></li>
                    </ul>
                </section>
            </div>
        </main>
    )
}
