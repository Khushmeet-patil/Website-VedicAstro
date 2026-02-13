import { getPolicy } from '@/lib/api';

export default async function ReturnRefundPolicy() {
    const policy = await getPolicy('return-refund-policy');

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
            <h1 className="text-3xl font-bold text-center mb-4">Return & Refund Policy</h1>
            <h2 className="text-xl font-semibold text-center mb-8">Vedic.Store | Vedic.Astro</h2>

            <p className="text-sm text-gray-500 mb-8 text-center">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6">
                <p className="font-medium">
                    Refunds are processed as per product type. Customized and spiritual items may not be eligible for return.
                </p>

                <section>
                    <p className="mb-4">Thank you for shopping with Vedic.Store.</p>
                    <p className="mb-4">
                        We are committed to providing authentic astrology products including Gemstones, Rudraksha, Bracelets, Jewelry, Spiritual Items, and Customized Products.
                        To ensure fairness and transparency, the following Return & Refund Policy applies to all purchases made through:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Vedic.Store Website</li>
                        <li>Vedic.Astro App</li>
                        <li>Vedic.Panel Store</li>
                    </ul>
                    <p>By placing an order, you agree to the terms below.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">1. ELIGIBILITY FOR RETURN</h3>
                    <p className="mb-2">To qualify for a return, products must:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Be unused</li>
                        <li>Be undamaged</li>
                        <li>Be in original condition</li>
                        <li>Include all original packaging</li>
                        <li>Not show signs of wear or alteration</li>
                    </ul>
                    <p className="text-sm text-gray-600">All returns are subject to inspection and approval by our Quality Team.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">2. MANDATORY DOCUMENTS REQUIRED</h3>
                    <p className="mb-2">Returns will ONLY be accepted if accompanied by:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Original Product Certificate</li>
                        <li>Invoice/Bill copy</li>
                        <li>Original packaging & tags</li>
                        <li>Lab/Authenticity certificates (if applicable)</li>
                        <li>Proper unboxing video proof</li>
                    </ul>
                    <p className="font-bold text-red-600">Missing any item → Return request will be rejected.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">3. RETURN POLICY – LOOSE PRODUCTS</h3>
                    <p className="text-sm text-gray-600 mb-4">(Gemstones / Rudraksha / Beads / Bracelets)</p>

                    <h4 className="font-bold mb-2">Customers may return eligible products:</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Within 7–10 days of delivery</li>
                        <li>With valid reason</li>
                    </ul>

                    <h4 className="font-bold mb-2">Refund Amount:</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>80% of product value</li>
                    </ul>

                    <h4 className="font-bold mb-2">Non-refundable:</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Shipping charges</li>
                        <li>Taxes/VAT</li>
                        <li>Duties</li>
                        <li>Payment gateway charges (5%)</li>
                        <li>Certification cost (if already done)</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">4. RETURN TIME LIMIT</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Product must reach us within 15 days of delivery</li>
                        <li>Late returns will NOT be accepted</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">5. UNBOXING VIDEO (COMPULSORY)</h3>
                    <p className="mb-2">For every return, a clear unboxing video is mandatory showing:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Sealed package</li>
                        <li>Product condition</li>
                        <li>Labels</li>
                    </ul>
                    <p className="font-bold text-red-600">Without video proof → claim will not be processed.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">6. CUSTOMIZED / MADE-TO-ORDER JEWELRY</h3>
                    <p className="mb-2">The following are strictly <strong>NON-RETURNABLE</strong>:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Rings</li>
                        <li>Pendants</li>
                        <li>Bracelets</li>
                        <li>Customized gemstones</li>
                        <li>Personalized jewelry</li>
                        <li>Energized or consecrated products</li>
                    </ul>
                    <p className="text-sm text-gray-600">These items are specially made and cannot be resold.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">7. EXCHANGE POLICY</h3>
                    <p className="mb-2">Customers may request an exchange:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Within 48 hours of delivery</li>
                        <li>For another product</li>
                    </ul>

                    <h4 className="font-bold mb-2">Conditions:</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>New product value = up to 70% of original invoice</li>
                        <li>Valid for 3 months</li>
                        <li>Making charges deducted</li>
                    </ul>
                    <p className="text-sm text-gray-600">Exchange subject to stock availability.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">8. REFUND PROCESS</h3>
                    <p className="mb-2">After we receive and inspect the return:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Processing time: 7–10 business days</li>
                        <li>Refund to original payment method</li>
                        <li>Bank may take extra 5–7 days</li>
                    </ul>
                    <p>You will receive confirmation via email/SMS.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">9. CANCELLATION POLICY</h3>
                    <h4 className="font-bold mt-4 mb-2">Before shipping:</h4>
                    <p className="mb-2">Full refund (excluding gateway fees)</p>

                    <h4 className="font-bold mt-4 mb-2">After shipping:</h4>
                    <p className="mb-2">Shipping & handling charges deducted</p>

                    <h4 className="font-bold mt-4 mb-2">After certification:</h4>
                    <p className="mb-2">Certification charges deducted</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">10. RETURN SHIPPING</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Customer bears return courier cost</li>
                        <li>Secure packaging required</li>
                        <li>Company not responsible for transit damage</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">11. DAMAGED / WRONG PRODUCT</h3>
                    <p className="mb-2">If you receive: Wrong item, Damaged item, or Missing item.</p>
                    <p className="mb-2">Report within 24–48 hours with:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Photos</li>
                        <li>Unboxing video</li>
                        <li>Order details</li>
                    </ul>
                    <p>We will replace or refund after verification.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">12. NON-REFUNDABLE CASES</h3>
                    <p className="mb-2">Refund will NOT be provided if:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Used products</li>
                        <li>Damaged by customer</li>
                        <li>Missing certificates</li>
                        <li>No unboxing video</li>
                        <li>Customized items</li>
                        <li>Returned after deadline</li>
                        <li>Change of mind (after dispatch)</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">13. COMPANY RIGHTS</h3>
                    <p className="mb-2">Vedic.Store reserves the right to:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Reject suspicious returns</li>
                        <li>Deduct applicable costs</li>
                        <li>Modify policy anytime</li>
                        <li>Cancel orders in case of fraud/misuse</li>
                    </ul>
                    <p className="font-bold">Decision of the Company shall be final.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">14. DISCLAIMER</h3>
                    <p className="mb-2">All gemstones & spiritual products are sold for <strong>Faith & belief purposes only</strong>.</p>
                    <p className="text-sm text-gray-600">Results may vary person to person. No guaranteed outcomes.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">15. DISPUTE RESOLUTION</h3>
                    <p className="mb-2">This policy is governed by <strong>Indian Laws</strong>.</p>
                    <p className="mb-2">Jurisdiction: <strong>Jaipur Courts, Rajasthan</strong></p>
                    <p className="text-sm text-gray-600">Any disputes shall be subject exclusively to Jaipur jurisdiction.</p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-3">16. CONTACT US</h3>
                    <p className="mb-2">For returns or help:</p>
                    <ul className="list-none space-y-2">
                        <li>📧 <a href="mailto:support@vedic.store" className="text-blue-600 hover:underline">support@vedic.store</a></li>
                        <li>🌐 <a href="https://www.vedic.store" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.vedic.store</a></li>
                    </ul>
                </section>
            </div>
        </main>
    )
}
