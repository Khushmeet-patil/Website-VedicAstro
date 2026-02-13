import { Separator } from "@/components/ui/separator"

export default function PricingPolicy() {
    return (
        <main className="container mx-auto px-4 py-24 max-w-4xl">
            <h1 className="text-4xl font-serif font-bold mb-2">Pricing Policy</h1>
            <h2 className="text-xl text-primary font-medium mb-6">Vedic.Astro / Vedic.Store</h2>

            <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20 mb-8">
                <p className="font-medium text-secondary">
                    All services are prepaid. Prices vary based on consultation type and expert experience.
                </p>
            </div>

            <div className="prose prose-slate max-w-none dark:prose-invert space-y-8">
                <section>
                    <p>
                        This Pricing Policy explains how pricing, payments, billing, and related terms work for services and products offered on Vedic.Astro and Vedic.Store (“Platform”).
                    </p>
                    <p className="mt-4">
                        By using our services, you agree to this Pricing Policy.
                    </p>
                </section>

                <Separator />

                <section>
                    <h3 className="text-2xl font-semibold mb-4">1. Price Range</h3>
                    <p>At Vedic.Astro / Vedic.Store, we offer customized pricing depending on the type of service or product selected.</p>
                    <p className="mt-2">Prices are determined based on:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Astrologer’s experience & expertise</li>
                        <li>Consultation duration</li>
                        <li>Type of service (Chat/Call/Video/Report)</li>
                        <li>Product value (bracelets, gemstones, yantras, etc.)</li>
                        <li>Effort and time required</li>
                    </ul>

                    <div className="mt-4 bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Typical Price Range</h4>
                        <div className="space-y-2">
                            <div>
                                <span className="font-medium">Astrology Consultations:</span>
                                <p className="text-sm">₹199 – ₹2500 per session (depending on expert & duration)</p>
                            </div>
                            <div>
                                <span className="font-medium">Reports / Kundli Services:</span>
                                <p className="text-sm">₹299 – ₹1999 per report</p>
                            </div>
                            <div>
                                <span className="font-medium">Spiritual Products (Store):</span>
                                <p className="text-sm">₹199 – ₹10,000+ (depending on product type)</p>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">Final pricing is clearly displayed before purchase.</p>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">2. Schedule of Payment</h3>
                    <p>Certain services are time-based or subscription-based. These may include:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Fixed minute consultations</li>
                        <li>Monthly subscriptions</li>
                        <li>Premium memberships</li>
                        <li>Reports or packages</li>
                        <li>Store purchases</li>
                    </ul>

                    <p className="mt-4">Usage duration may vary from:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Single session</li>
                        <li>1 day</li>
                        <li>1 month</li>
                        <li>3 months</li>
                        <li>6 months</li>
                    </ul>

                    <p className="mt-4 text-sm">Details are clearly mentioned in the service description.</p>
                    <p className="font-medium">Payment must be made in advance to confirm booking.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">3. Advance Payment Policy</h3>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>All consultations require prepaid wallet recharge or direct payment</li>
                        <li>Sessions start only after payment confirmation</li>
                        <li>Store products are shipped only after successful payment</li>
                    </ul>
                    <p className="mt-2 text-sm text-muted-foreground">We do not provide Cash on Delivery (unless specifically mentioned).</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">4. Price Matching</h3>
                    <p>At Vedic.Astro, we aim to offer fair and competitive pricing.</p>
                    <p className="mt-2">If you find:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Same service</li>
                        <li>Same features</li>
                        <li>Same quality</li>
                        <li>From a verified competitor</li>
                    </ul>
                    <p className="mt-2">at a lower price, you may contact us.</p>
                    <p className="mt-2">We may review and match the price at our sole discretion. However, price matching is not guaranteed.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">5. Stable Pricing Policy</h3>
                    <p>Our pricing:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>✅ Is transparent</li>
                        <li>✅ Does not fluctuate unfairly</li>
                        <li>✅ Is not influenced by temporary market pressure</li>
                    </ul>
                    <p className="mt-2">Prices are based on service value and expert experience.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">6. Sale Adjustment</h3>
                    <p>Once a service or product is purchased:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-destructive">
                        <li>❌ Price reductions cannot be adjusted</li>
                        <li>❌ No refund for price differences</li>
                        <li>❌ No retroactive discounts</li>
                    </ul>
                    <p className="mt-2">If a price drops after your purchase, the new price will not apply to previous bookings.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">7. Booking & Rescheduling</h3>
                    <p>For scheduled consultations:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Time slots are reserved exclusively for you</li>
                        <li>Missed sessions may not be refunded</li>
                        <li>Rescheduling depends on astrologer availability</li>
                    </ul>
                    <p className="mt-2 font-medium text-destructive">Failure to attend may lead to cancellation without refund.</p>
                    <p className="mt-2 text-sm">Please refer to our <a href="/return-refund-policy" className="text-primary hover:underline">Cancellation/Refund Policy</a> for more details.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">8. Pricing Errors</h3>
                    <p>We work hard to maintain accurate pricing. However, if an error occurs:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>If actual price &gt; displayed price → booking may be cancelled</li>
                        <li>User will be notified</li>
                        <li>Full refund will be processed</li>
                    </ul>
                    <p className="mt-2">We reserve the right to correct any pricing mistakes.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">9. Taxes & Charges</h3>
                    <p>All prices may include or exclude:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>GST</li>
                        <li>Payment gateway charges</li>
                        <li>Platform fees</li>
                    </ul>
                    <p className="mt-2">Final payable amount is shown at checkout.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">10. Payments Methods Accepted</h3>
                    <p>We support:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>UPI</li>
                        <li>Debit/Credit Cards</li>
                        <li>Net Banking</li>
                        <li>Wallets</li>
                        <li>App Wallet Balance</li>
                    </ul>
                    <p className="mt-2">All payments are securely processed via encrypted gateways. We do not store card or bank details.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">11. Commercial Use Restriction</h3>
                    <p>Services and products are intended only for <strong>Personal use</strong>.</p>
                    <p className="mt-2">We reserve the right to:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Cancel suspicious orders</li>
                        <li>Refuse bulk/commercial misuse</li>
                        <li>Block fraudulent users</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">12. Refund & Cancellation</h3>
                    <p>Refunds (if applicable) are governed by our 👉 <a href="/return-refund-policy" className="text-primary hover:underline">Refund & Cancellation Policy</a>.</p>
                    <p className="mt-1 text-sm text-muted-foreground">Please review that page separately.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">13. Policy Changes</h3>
                    <p>We may update pricing or this policy anytime.</p>
                    <p>Updated policies will be posted on the app/website.</p>
                    <p>Continued usage means acceptance of changes.</p>
                </section>

                <section className="bg-muted p-6 rounded-lg mt-8">
                    <h3 className="text-xl font-semibold mb-4">14. Contact Us</h3>
                    <div className="space-y-3">
                        <p>For pricing or billing queries:</p>
                        <p><strong>Company Name:</strong> Vedic.Astro / Vedic.Store</p>
                        <div className="flex items-center gap-2">
                            <span>📧</span>
                            <a href="mailto:support@vedic.store" className="text-primary hover:underline">support@vedic.store</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>🌐</span>
                            <a href="https://www.vedic.store" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.vedic.store</a>
                        </div>
                        <p><strong>Address:</strong> New Delhi, India</p>
                        <p className="text-sm text-green-600 dark:text-green-400 font-medium">✅ Google policy friendly 👍</p>
                    </div>
                </section>

            </div>
        </main>
    )
}
