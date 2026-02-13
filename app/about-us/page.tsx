import { getPolicy } from '@/lib/api';

export default async function AboutUs() {
    const policy = await getPolicy('about-us');

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
            <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
            <h2 className="text-xl font-semibold text-center mb-8">Vedic.Astro | Vedic.Store</h2>

            <div className="space-y-6">
                <section>
                    <h3 className="text-xl font-bold mb-3">WHO WE ARE</h3>
                    <p className="mb-4">
                        We connect users with experienced and verified Vedic Astrologers, Numerologists, Tarot Readers, and Vastu Experts. Our platform empowers users to seek guidance on life’s challenges, including relationships, career, finance, and health.
                    </p>
                    <p className="mb-4">
                        Vedic.Astro is designed to make ancient wisdom accessible in the modern digital age, providing clarity and direction through personalized consultations.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">OUR MISSION</h3>
                    <p className="mb-4">
                        To provide authentic, affordable, and accessible astrological guidance to everyone, everywhere. We aim to bridge the gap between traditional knowledge and modern technology.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">WHAT WE OFFER</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li><strong>Live Consultation:</strong> Chat, Call, or Video call with expert astrologers.</li>
                        <li><strong>Detailed Reports:</strong> Kundli, Horoscope, Numerology, and Compatibility reports.</li>
                        <li><strong>E-Store:</strong> Authentic Gemstones, Rudraksha, Yantras, and spiritual products.</li>
                        <li><strong>Daily Horoscopes:</strong> Free daily predictions for all zodiac signs.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">WHY CHOOSE US?</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li><strong>Verified Experts:</strong> Every astrologer goes through a rigorous selection process.</li>
                        <li><strong>Private & Confidential:</strong> Your data and conversations are 100% secure.</li>
                        <li><strong>Transparent Pricing:</strong> No hidden charges. You pay only for what you use.</li>
                        <li><strong>24/7 Availability:</strong> Get guidance whenever you need it.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">CONTACT US</h3>
                    <p className="mb-2">We are here to help you:</p>
                    <ul className="list-none space-y-2">
                        <li>📧 <a href="mailto:support@vedic.store" className="text-blue-600 hover:underline">support@vedic.store</a></li>
                    </ul>
                </section>
            </div>
        </main>
    )
}
