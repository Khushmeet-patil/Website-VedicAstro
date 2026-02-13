import { getPolicy } from '@/lib/api';

export default async function AppPrivacyPolicy() {
    const policy = await getPolicy('app-privacy-policy');

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
            <h2 className="text-xl font-semibold text-center mb-8">Vedic.Astro Application</h2>

            <p className="text-sm text-gray-500 mb-8 text-center">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6">
                <p className="font-medium">
                    We collect and process your data to provide astrology services. We do NOT sell your personal data.
                </p>

                <section>
                    <p className="mb-4">
                        This Privacy Policy describes how Vedic.Astro (“Company”, “We”, “Our”, “Us”) collects, uses, stores, processes, shares, and protects your information when you use our mobile application Vedic.Astro and related services (collectively referred to as the “Platform”).
                    </p>
                    <p className="mb-4">
                        By accessing or using our Platform, you agree to this Privacy Policy. If you do not agree, please discontinue use of the Platform.
                    </p>
                    <p className="font-bold mb-2">This policy is prepared in accordance with:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Information Technology Act, 2000</li>
                        <li>IT (Reasonable Security Practices and Procedures and Sensitive Personal Data) Rules, 2011</li>
                        <li>Digital Personal Data Protection Act, 2023 (DPDP Act)</li>
                        <li>Google Play Store User Data Policy</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">1. Definitions</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li><strong>User / You:</strong> Any person using the application</li>
                        <li><strong>We / Company:</strong> Vedic.Astro</li>
                        <li><strong>Services:</strong> Astrology, Kundli, Horoscope, Chat, Call, Video consultation, Reports, Products, and related services</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">2. User Consent</h3>
                    <p className="mb-2">By registering or using the Platform, you expressly:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Consent to collection of your data</li>
                        <li>Allow processing of your personal information</li>
                        <li>Agree to use of cookies & analytics</li>
                        <li>Accept this Privacy Policy</li>
                    </ul>
                    <p className="font-bold text-red-600">If you do not agree, please do not use the application.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">3. Information We Collect</h3>

                    <h4 className="font-bold mt-4 mb-2">A. Personal Information (Provided by You)</h4>
                    <p className="mb-2">When you register or use services, we may collect:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
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

                    <h4 className="font-bold mt-4 mb-2">B. Sensitive Personal Data</h4>
                    <p className="mb-2">As per Indian IT Rules:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Birth details (DOB, Time, Place)</li>
                        <li>Financial information (Card/UPI/Bank details – processed via gateway only)</li>
                        <li>Voice recordings</li>
                        <li>Astrological consultation history</li>
                    </ul>

                    <h4 className="font-bold mt-4 mb-2">C. Automatically Collected Data</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
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
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">4. How We Use Your Information</h3>
                    <p className="mb-2">We use your data to:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Create your account</li>
                        <li>Generate Kundli / Horoscope / Reports</li>
                        <li>Connect you with Astrologers</li>
                        <li>Provide chat/call/video consultations</li>
                        <li>Process payments</li>
                        <li>Improve services</li>
                        <li>Send updates & offers</li>
                        <li>Customer support</li>
                        <li>Fraud prevention</li>
                        <li>Legal compliance</li>
                    </ul>
                    <p className="font-bold">We DO NOT sell your personal data.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">5. Communication Consent</h3>
                    <p className="mb-2">By registering, you agree to receive:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>SMS</li>
                        <li>WhatsApp messages</li>
                        <li>Emails</li>
                        <li>Push notifications</li>
                        <li>Calls from astrologers (via masked number system)</li>
                    </ul>
                    <p className="text-sm text-gray-600">You may opt-out anytime.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">6. Call / Chat / Voice Recording / Microphone Access</h3>
                    <p className="mb-2">For better consultation:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Microphone permission is used for voice messages</li>
                        <li>Calls may be recorded for quality & safety</li>
                        <li>Chats may be stored for support</li>
                    </ul>
                    <p className="text-sm text-gray-600">Recordings are securely stored and deleted after reasonable time unless legally required.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">7. Payments & Financial Security</h3>
                    <p className="mb-2">Payments are processed through secure third-party gateways.</p>
                    <p className="font-bold mb-2">We:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Do NOT store card details</li>
                        <li>Do NOT access bank passwords</li>
                    </ul>
                    <p className="text-sm text-gray-600">All transactions are SSL encrypted.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">8. Cookies & Tracking Technologies</h3>
                    <p className="mb-2">We use cookies and SDKs for:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Login sessions</li>
                        <li>Personalization</li>
                        <li>Analytics</li>
                        <li>Crash tracking</li>
                        <li>Ads optimization</li>
                    </ul>
                    <p className="text-sm text-gray-600">You may disable cookies in device settings (some features may stop working).</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">9. Sharing of Information</h3>
                    <h4 className="font-bold mt-4 mb-2">Allowed:</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Verified Astrologers (only required details)</li>
                        <li>Payment gateways</li>
                        <li>Analytics providers</li>
                        <li>Cloud hosting services</li>
                        <li>Legal authorities if required</li>
                    </ul>
                    <h4 className="font-bold mt-4 mb-2 text-red-600">Not Allowed:</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-4 text-red-600">
                        <li>Selling user data</li>
                        <li>Sharing for unauthorized marketing</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">10. Data Retention</h3>
                    <p className="mb-2">We retain your data:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>While your account is active</li>
                        <li>For legal compliance</li>
                        <li>For dispute resolution</li>
                    </ul>
                    <p className="text-sm text-gray-600">After deletion request → Data is removed within reasonable time.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">11. Profile Deletion</h3>
                    <p className="mb-2">You can:</p>
                    <p className="mb-2 font-mono">App → Settings → Delete Account</p>
                    <p className="mb-4">OR email us.</p>
                    <p className="font-medium mb-2">After deletion:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Profile removed</li>
                        <li>Wallet disabled</li>
                        <li>Data deleted (except legal records)</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">12. Your Rights (DPDP Act 2023)</h3>
                    <p className="mb-2">You have rights to:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Access your data</li>
                        <li>Correct errors</li>
                        <li>Delete data</li>
                        <li>Withdraw consent</li>
                        <li>Data portability</li>
                        <li>File complaint</li>
                    </ul>
                    <p className="font-medium">Contact us to exercise these rights.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">13. Security Measures</h3>
                    <p className="mb-2">We implement:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>SSL Encryption</li>
                        <li>Secure servers</li>
                        <li>Firewall protection</li>
                        <li>Limited employee access</li>
                        <li>Regular audits</li>
                        <li>Secure cloud storage</li>
                    </ul>
                    <p className="text-sm text-gray-600">However, no online transmission is 100% secure.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">14. Children Policy</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Services intended for 18+ users</li>
                        <li>No intentional collection from children under 13</li>
                        <li>If detected → data deleted immediately</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">15. Third Party Links</h3>
                    <p className="mb-2">We are not responsible for:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Third-party websites</li>
                        <li>External links</li>
                        <li>Their privacy policies</li>
                    </ul>
                    <p className="text-sm text-gray-600">Please read their policies separately.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">16. Disclaimer</h3>
                    <p className="mb-2">Astrology services are:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>For guidance & entertainment only</li>
                        <li>No guaranteed results</li>
                        <li>Not medical/legal advice</li>
                    </ul>
                    <p className="font-medium">Users must exercise discretion.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">17. Policy Updates</h3>
                    <p className="mb-2">We may update this Privacy Policy anytime.</p>
                    <p className="mb-2">Updated version will be posted in the app/website.</p>
                    <p>Continued use = acceptance.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">18. Grievance Officer / Contact Details</h3>
                    <p className="mb-2 font-bold">Company Details</p>
                    <ul className="list-none space-y-2 mb-4">
                        <li><strong>Company Name:</strong> Vedic.Astro</li>
                        <li>📧 <a href="mailto:support@vedic.store" className="text-blue-600 hover:underline">support@vedic.store</a></li>
                        <li>🌐 <a href="https://www.vedic.store" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.vedic.store</a></li>
                        <li><strong>Address:</strong> [Your Company Address]</li>
                    </ul>

                    <p className="mb-2 font-bold">Grievance Officer</p>
                    <ul className="list-none space-y-2 mb-4">
                        <li><strong>Name:</strong> [Officer Name]</li>
                        <li>📧 <a href="mailto:grievance@vedic.store" className="text-blue-600 hover:underline">grievance@vedic.store</a></li>
                    </ul>
                    <p className="text-sm text-gray-600 mb-2">Complaints will be resolved within 7–15 working days.</p>
                    <p className="text-green-600 font-bold">Play Store Compliance Checked</p>
                </section>
            </div>
        </main>
    )
}
