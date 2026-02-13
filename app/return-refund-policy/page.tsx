import { Separator } from "@/components/ui/separator"

export default function ReturnRefundPolicy() {
    return (
        <main className="container mx-auto px-4 py-24 max-w-4xl">
            <h1 className="text-4xl font-serif font-bold mb-2">Return & Refund Policy</h1>
            <h2 className="text-xl text-primary font-medium mb-6">Vedic.Store | Vedic.Astro</h2>

            <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20 mb-8">
                <p className="font-medium text-secondary">
                    Refunds are processed as per product type. Customized and spiritual items may not be eligible for return.
                </p>
            </div>

            <div className="prose prose-slate max-w-none dark:prose-invert space-y-8">
                <section>
                    <p>Thank you for shopping with Vedic.Store.</p>
                    <p>
                        We are committed to providing authentic astrology products including Gemstones, Rudraksha, Bracelets, Jewelry, Spiritual Items, and Customized Products.
                        To ensure fairness and transparency, the following Return & Refund Policy applies to all purchases made through:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Vedic.Store Website</li>
                        <li>Vedic.Astro App</li>
                        <li>Vedic.Panel Store</li>
                    </ul>
                    <p className="mt-4">By placing an order, you agree to the terms below.</p>
                </section>

                <Separator />

                <section>
                    <h3 className="text-2xl font-semibold mb-4">1. ELIGIBILITY FOR RETURN</h3>
                    <p className="mb-2">To qualify for a return, products must:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Be unused</li>
                        <li>Be undamaged</li>
                        <li>Be in original condition</li>
                        <li>Include all original packaging</li>
                        <li>Not show signs of wear or alteration</li>
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground">All returns are subject to inspection and approval by our Quality Team.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">2. MANDATORY DOCUMENTS REQUIRED</h3>
                    <p className="mb-2">Returns will ONLY be accepted if accompanied by:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Original Product Certificate</li>
                        <li>Invoice/Bill copy</li>
                        <li>Original packaging & tags</li>
                        <li>Lab/Authenticity certificates (if applicable)</li>
                        <li>Proper unboxing video proof</li>
                    </ul>
                    <div className="mt-4 bg-destructive/10 text-destructive p-3 rounded-md">
                        <strong>❌ Missing any item → Return request will be rejected.</strong>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">3. RETURN POLICY – LOOSE PRODUCTS</h3>
                    <p className="text-sm text-muted-foreground mb-4">(Gemstones / Rudraksha / Beads / Bracelets)</p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-card border p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">Customers may return eligible products:</h4>
                            <ul className="list-disc pl-6 space-y-1 text-sm">
                                <li>Within 7–10 days of delivery</li>
                                <li>With valid reason</li>
                            </ul>
                        </div>
                        <div className="bg-card border p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">Refund Amount:</h4>
                            <ul className="list-disc pl-6 space-y-1 text-sm">
                                <li>80% of product value</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h4 className="font-semibold mb-2">Non-refundable:</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                            <li>Shipping charges</li>
                            <li>Taxes/VAT</li>
                            <li>Duties</li>
                            <li>Payment gateway charges (5%)</li>
                            <li>Certification cost (if already done)</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">4. RETURN TIME LIMIT</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Product must reach us within 15 days of delivery</li>
                        <li>Late returns will NOT be accepted</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">5. UNBOXING VIDEO (COMPULSORY)</h3>
                    <p className="mb-2">For every return, a clear unboxing video is mandatory showing:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Sealed package</li>
                        <li>Product condition</li>
                        <li>Labels</li>
                    </ul>
                    <div className="mt-4 bg-destructive/10 text-destructive p-3 rounded-md">
                        <strong>Without video proof → claim will not be processed.</strong>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">6. CUSTOMIZED / MADE-TO-ORDER JEWELRY</h3>
                    <p className="mb-2">The following are strictly <strong>NON-RETURNABLE</strong>:</p>
                    <ul className="grid grid-cols-2 gap-2 text-sm">
                        <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Rings</li>
                        <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Pendants</li>
                        <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Bracelets</li>
                        <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Customized gemstones</li>
                        <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Personalized jewelry</li>
                        <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Energized or consecrated products</li>
                    </ul>
                    <p className="mt-4 text-sm text-muted-foreground">These items are specially made and cannot be resold.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">7. EXCHANGE POLICY</h3>
                    <p className="mb-2">Customers may request an exchange:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>Within 48 hours of delivery</li>
                        <li>For another product</li>
                    </ul>

                    <h4 className="font-semibold mb-2">Conditions:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>New product value = up to 70% of original invoice</li>
                        <li>Valid for 3 months</li>
                        <li>Making charges deducted</li>
                    </ul>
                    <p className="mt-2 text-sm text-muted-foreground">Exchange subject to stock availability.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">8. REFUND PROCESS</h3>
                    <p className="mb-2">After we receive and inspect the return:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Processing time: 7–10 business days</li>
                        <li>Refund to original payment method</li>
                        <li>Bank may take extra 5–7 days</li>
                    </ul>
                    <p className="mt-2">You will receive confirmation via email/SMS.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">9. CANCELLATION POLICY</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold">Before shipping:</h4>
                            <p className="text-sm">Full refund (excluding gateway fees)</p>
                        </div>
                        <div>
                            <h4 className="font-semibold">After shipping:</h4>
                            <p className="text-sm">Shipping & handling charges deducted</p>
                        </div>
                        <div>
                            <h4 className="font-semibold">After certification:</h4>
                            <p className="text-sm">Certification charges deducted</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">10. RETURN SHIPPING</h3>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Customer bears return courier cost</li>
                        <li>Secure packaging required</li>
                        <li>Company not responsible for transit damage</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">11. DAMAGED / WRONG PRODUCT</h3>
                    <p className="mb-2">If you receive: Wrong item, Damaged item, or Missing item.</p>
                    <p>Report within 24–48 hours with:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Photos</li>
                        <li>Unboxing video</li>
                        <li>Order details</li>
                    </ul>
                    <p className="mt-4">We will replace or refund after verification.</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">12. NON-REFUNDABLE CASES</h3>
                    <p className="mb-2">Refund will NOT be provided if:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Used products</li>
                        <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Damaged by customer</li>
                        <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Missing certificates</li>
                        <li className="flex items-center gap-2"><span className="text-destructive">❌</span> No unboxing video</li>
                        <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Customized items</li>
                        <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Returned after deadline</li>
                        <li className="flex items-center gap-2"><span className="text-destructive">❌</span> Change of mind (after dispatch)</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-4">13. COMPANY RIGHTS</h3>
                    <p className="mb-2">Vedic.Store reserves the right to:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Reject suspicious returns</li>
                        <li>Deduct applicable costs</li>
                        <li>Modify policy anytime</li>
                        <li>Cancel orders in case of fraud/misuse</li>
                    </ul>
                    <p className="mt-4 font-medium">Decision of the Company shall be final.</p>
                </section>

                <Separator />

                <div className="grid md:grid-cols-2 gap-8">
                    <section>
                        <h3 className="text-xl font-semibold mb-4">14. DISCLAIMER</h3>
                        <p>All gemstones & spiritual products are sold for <strong>Faith & belief purposes only</strong>.</p>
                        <p className="text-sm text-muted-foreground mt-2">Results may vary person to person. No guaranteed outcomes.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-4">15. DISPUTE RESOLUTION</h3>
                        <p>This policy is governed by <strong>Indian Laws</strong>.</p>
                        <p className="mt-2">Jurisdiction: <strong>Jaipur Courts, Rajasthan</strong></p>
                        <p className="text-sm text-muted-foreground mt-2">Any disputes shall be subject exclusively to Jaipur jurisdiction.</p>
                    </section>
                </div>

                <section className="bg-muted p-6 rounded-lg mt-8">
                    <h3 className="text-xl font-semibold mb-4">16. CONTACT US</h3>
                    <div className="space-y-3">
                        <p>For returns or help:</p>
                        <div className="flex items-center gap-2">
                            <span>📧</span>
                            <a href="mailto:support@vedic.store" className="text-primary hover:underline">support@vedic.store</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>🌐</span>
                            <a href="https://www.vedic.store" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.vedic.store</a>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}
