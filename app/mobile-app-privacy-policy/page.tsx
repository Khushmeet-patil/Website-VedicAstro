import { getPolicy } from '@/lib/api';

export default async function MobileAppPrivacyPolicy() {
    const policy = await getPolicy('mobile-app-privacy-policy');

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
            <h1 className="text-3xl font-bold text-center mb-4">Privacy Policy</h1>
            <h2 className="text-xl font-semibold text-center mb-8">Vedic.Astro Mobile Application</h2>

            <p className="text-sm text-gray-500 mb-8 text-center">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6">
                <section>
                    <p className="mb-4">
                        This Privacy Policy governs your use of the "Vedic.Astro" mobile application.
                    </p>
                    <p className="font-bold mb-2">We value your trust and are committed to protecting your personal information.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">1. Information We Collect</h3>
                    <p className="mb-2">We may collect the following types of information:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li><strong>Personal Information:</strong> Name, phone number, email address, date of birth, place of birth, and time of birth.</li>
                        <li><strong>Usage Data:</strong> Information about how you use the app, such as features accessed and time spent.</li>
                        <li><strong>Device Information:</strong> Device model, operating system, and unique device identifiers.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">2. How We Use Your Information</h3>
                    <p className="mb-2">We use the collected information for:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Providing astrological services and reports.</li>
                        <li>Connecting you with astrologers.</li>
                        <li>Improving app functionality and user experience.</li>
                        <li>Sending service-related updates and notifications.</li>
                        <li>Customer support and dispute resolution.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">3. Data Sharing and Disclosure</h3>
                    <p className="mb-2">We do NOT sell your personal information. We may share data with:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li><strong>Astrologers:</strong> To provide consultation services (only necessary details).</li>
                        <li><strong>Service Providers:</strong> Third-party vendors for payment processing, hosting, and analytics.</li>
                        <li><strong>Legal Requirements:</strong> If required by law or to protect our rights.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">4. Data Security</h3>
                    <p className="mb-4">
                        We implement reasonable security measures to protect your data. However, no method of transmission over the internet is 100% secure.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">5. User Rights</h3>
                    <p className="mb-2">You have the right to:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Access your personal data.</li>
                        <li>Request correction of inaccurate data.</li>
                        <li>Request deletion of your account and data.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">6. Changes to this Policy</h3>
                    <p className="mb-4">
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">7. Contact Us</h3>
                    <p className="mb-2">If you have any questions about this Privacy Policy, please contact us:</p>
                    <ul className="list-none space-y-2">
                        <li>📧 <a href="mailto:support@vedic.store" className="text-blue-600 hover:underline">support@vedic.store</a></li>
                    </ul>
                </section>
            </div>
        </main>
    )
}
