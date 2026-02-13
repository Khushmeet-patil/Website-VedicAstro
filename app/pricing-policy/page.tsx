import { getPolicy } from '@/lib/api';

export default async function PricingPolicy() {
    const policy = await getPolicy('pricing-policy');

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
            <h1 className="text-3xl font-bold text-center mb-4">Pricing Policy</h1>
            <h2 className="text-xl font-semibold text-center mb-8">Vedic.Astro | Vedic.Store</h2>

            <p className="text-sm text-gray-500 mb-8 text-center">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6">
                <p className="font-medium">
                    Our pricing is transparent and based on the services or products you choose.
                </p>

                <section>
                    <h3 className="text-xl font-bold mb-3">1. Price Range</h3>
                    <p className="mb-2">Our typical price ranges are:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li><strong>Astrology Consultations:</strong> ₹10 – ₹500 per minute (depending on expert experience).</li>
                        <li><strong>Reports:</strong> ₹50 – ₹2500 per report.</li>
                        <li><strong>Products (Gemstones/Rudraksha):</strong> ₹500 – ₹5,00,000+ (depending on quality, weight, and certification).</li>
                        <li><strong>Puja Services:</strong> ₹1100 – ₹51,000.</li>
                    </ul>
                    <p className="text-sm text-gray-600">Prices are subject to change without prior notice.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">2. Schedule of Payment</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li><strong>Consultations:</strong> Prepaid (Wallet Recharge). Money is deducted per minute.</li>
                        <li><strong>Products:</strong> 100% Advance Payment required for dispatch.</li>
                        <li><strong>Custom Orders:</strong> 50% Advance (Non-refundable) + 50% before shipping.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">3. Price Matching</h3>
                    <p className="mb-4">
                        We do not offer price matching. Our prices reflect the authenticity and quality of our service/products.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">4. Taxes (GST)</h3>
                    <p className="mb-4">
                        All prices listed are inclusive of applicable GST unless specified otherwise.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">5. Sale & Promotions</h3>
                    <p className="mb-4">
                        Any discount or promotional price is valid only for the specified period. We reserve the right to end offers at any time.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">6. Refunds</h3>
                    <p className="mb-4">
                        Please refer to our <strong>Return & Refund Policy</strong> for details regarding cancellations and refunds.
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">7. Contact Us</h3>
                    <p className="mb-2">For pricing related queries:</p>
                    <ul className="list-none space-y-2">
                        <li>📧 <a href="mailto:support@vedic.store" className="text-blue-600 hover:underline">support@vedic.store</a></li>
                    </ul>
                </section>
            </div>
        </main>
    )
}
