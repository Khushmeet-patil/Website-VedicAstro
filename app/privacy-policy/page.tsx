import { getPolicy } from '@/lib/api';

export default async function PrivacyPolicy() {
    const policy = await getPolicy('privacy-policy');

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
            <h1 className="text-3xl font-bold text-center mb-4">PRIVACY POLICY</h1>
            <h2 className="text-xl font-semibold text-center mb-8">Vedic.Astro | Vedic.Panel | Vedic.Store</h2>

            <p className="text-sm text-gray-500 mb-8 text-center">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6">
                <p className="font-medium">
                    Vedic.Astro respects your privacy. We do not sell or share your personal data with third parties.
                </p>

                <section>
                    <p className="mb-4">
                        Vedic.Astro (“Company”, “We”, “Us”, “Our”, “Platform”) values and respects the privacy of all users, astrologers, visitors, and customers.
                        This Privacy Policy explains:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>What information we collect</li>
                        <li>How we use it</li>
                        <li>How we store it</li>
                        <li>When we share it</li>
                        <li>Your rights regarding your data</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">1. WHO WE ARE</h3>
                    <p className="mb-2">Vedic.Astro is a digital astrology platform that connects users with:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Astrologers, Tarot Readers, Numerologists, Vastu Experts, Spiritual Consultants.</li>
                    </ul>
                    <p className="text-sm text-gray-600">We act only as a technology facilitator/marketplace.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">2. LEGAL COMPLIANCE</h3>
                    <p className="mb-2">This Privacy Policy is created in accordance with:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Information Technology Act, 2000</li>
                        <li>IT Rules, 2011</li>
                        <li>Digital Personal Data Protection Act (DPDP), 2023</li>
                        <li>Play Store & App Store Policies</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">3. INFORMATION WE COLLECT</h3>

                    <h4 className="font-bold mt-4 mb-2">A. Personal Information (PII)</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Name, Phone number, Email address</li>
                        <li>Date, Time & place of birth</li>
                        <li>Gender, Marital status</li>
                        <li>Profile photo</li>
                        <li>Address (for product delivery)</li>
                        <li>KYC details (for astrologers)</li>
                    </ul>

                    <h4 className="font-bold mt-4 mb-2">B. Consultation Information</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Chat messages, Call logs, Session details</li>
                    </ul>

                    <h4 className="font-bold mt-4 mb-2">C. Payment Information</h4>
                    <p className="mb-2">We do NOT store Card numbers, CVV, or Banking credentials.</p>

                    <h4 className="font-bold mt-4 mb-2">D. Device & Technical Data</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>IP address, Device type, OS version, App version</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">4. HOW WE USE YOUR INFORMATION</h3>
                    <p className="mb-2">We use your information to:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Create accounts & Provide consultations</li>
                        <li>Generate Kundli & reports</li>
                        <li>Process payments & prevent fraud</li>
                        <li>Improve services & Send notifications</li>
                    </ul>
                    <p className="font-bold">We NEVER sell your data.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">5. DATA STORAGE & SECURITY</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>SSL Encryption</li>
                        <li>Secure servers & Firewalls</li>
                        <li>Access control</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">6. YOUR RIGHTS</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Access, Correct, or Update your data</li>
                        <li>Withdraw consent or Delete account</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">7. CONTACT DETAILS</h3>
                    <p className="mb-2">For any privacy related queries:</p>
                    <ul className="list-none space-y-2">
                        <li>📧 <a href="mailto:support@vedic.store" className="text-blue-600 hover:underline">support@vedic.store</a></li>
                    </ul>
                </section>
            </div>
        </main>
    )
}
