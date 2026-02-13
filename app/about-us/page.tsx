import { Separator } from "@/components/ui/separator"
import { Check, Star, Shield, Smartphone, Heart, Lightbulb } from "lucide-react"

export default function AboutUs() {
    return (
        <main className="container mx-auto px-4 py-24 max-w-4xl">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Us</h1>
                <h2 className="text-2xl text-primary font-medium">Vedic.Astro</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    A modern digital astrology platform dedicated to bringing the timeless wisdom of Vedic sciences to your fingertips.
                </p>
            </div>

            <div className="prose prose-slate max-w-none dark:prose-invert space-y-12">

                {/* WHO WE ARE */}
                <section>
                    <h3 className="text-2xl font-serif font-semibold mb-4 flex items-center gap-2">
                        🌟 WHO WE ARE
                    </h3>
                    <p className="text-lg leading-relaxed">
                        We connect users with experienced and verified Vedic Astrologers, Tarot Readers, Numerologists, Vastu Experts, Palmists, and Spiritual Guides through secure chat, call, and live consultation services, helping people find clarity, confidence, and direction in life.
                    </p>
                    <div className="mt-6 bg-secondary/10 p-6 rounded-lg border border-secondary/20 text-center">
                        <h4 className="text-lg font-semibold text-secondary mb-2">Our Mission is Simple</h4>
                        <p className="font-medium text-lg">👉 Make authentic astrology accessible, affordable, and trustworthy for everyone.</p>
                    </div>
                </section>

                <Separator />

                {/* What We Do */}
                <section>
                    <h3 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
                        🌙 What We Do
                    </h3>
                    <p className="mb-6">At Vedic.Astro, we provide a wide range of astrology and spiritual services including:</p>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "Live Chat & Call with Astrologers",
                            "Personal Horoscope Predictions",
                            "Kundli Generation & Analysis",
                            "Kundli Matching (Marriage Compatibility)",
                            "Love & Relationship Guidance",
                            "Career & Finance Predictions",
                            "Health & Life Path Insights",
                            "Tarot & Numerology Readings",
                            "Vastu Consultation",
                            "Daily Rashifal & Panchang",
                            "Spiritual Remedies & Products"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3 bg-card border p-3 rounded-lg">
                                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="text-sm font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-muted-foreground italic">
                        We combine ancient Vedic knowledge with modern technology to deliver fast, accurate, and personalized predictions.
                    </p>
                </section>

                {/* Our Experts */}
                <section>
                    <h3 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
                        🔮 Our Experts
                    </h3>
                    <p className="mb-4">Our platform features a growing network of:</p>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6 text-sm font-medium">
                        <li className="flex items-center gap-2">• Certified Vedic Astrologers</li>
                        <li className="flex items-center gap-2">• Tarot Card Readers</li>
                        <li className="flex items-center gap-2">• Numerologists</li>
                        <li className="flex items-center gap-2">• Vastu Consultants</li>
                        <li className="flex items-center gap-2">• Spiritual Healers</li>
                        <li className="flex items-center gap-2">• Palm Readers</li>
                    </ul>

                    <div className="bg-muted p-6 rounded-lg">
                        <h4 className="font-semibold mb-4">Each expert goes through a verification and screening process to ensure:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                                <div className="bg-primary/10 p-2 rounded-full"><Check className="w-4 h-4 text-primary" /></div>
                                <span>Authentic knowledge</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-primary/10 p-2 rounded-full"><Check className="w-4 h-4 text-primary" /></div>
                                <span>Practical experience</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-primary/10 p-2 rounded-full"><Check className="w-4 h-4 text-primary" /></div>
                                <span>Ethical consultation</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-primary/10 p-2 rounded-full"><Check className="w-4 h-4 text-primary" /></div>
                                <span>Quality guidance</span>
                            </div>
                        </div>
                        <p className="mt-4 font-semibold text-center text-primary">So you can consult with confidence.</p>
                    </div>
                </section>

                <Separator />

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Vision & Mission */}
                    <section className="bg-card border p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-serif font-semibold mb-4 flex items-center gap-2">
                            🎯 Our Vision
                        </h3>
                        <p>
                            To become India’s most trusted and reliable online astrology platform, empowering millions of people with spiritual wisdom and life guidance.
                        </p>
                    </section>

                    <section className="bg-card border p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-serif font-semibold mb-4 flex items-center gap-2">
                            ❤️ Our Mission
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">• Make astrology easy & accessible</li>
                            <li className="flex items-start gap-2">• Provide affordable consultations</li>
                            <li className="flex items-start gap-2">• Offer genuine guidance</li>
                            <li className="flex items-start gap-2">• Support users in life decisions</li>
                            <li className="flex items-start gap-2">• Deliver a secure & private platform</li>
                        </ul>
                        <p className="mt-4 font-medium text-primary">We believe astrology should guide, not mislead.</p>
                    </section>
                </div>

                {/* Why Choose Us */}
                <section>
                    <h3 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
                        💡 Why Choose Vedic.Astro?
                    </h3>
                    <p className="mb-6">Here’s why thousands of users trust us:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { text: "Verified astrologers", icon: Star },
                            { text: "Instant chat & call", icon: Smartphone },
                            { text: "Accurate Kundli reports", icon: Check },
                            { text: "Secure payments", icon: Shield },
                            { text: "100% privacy protection", icon: Shield },
                            { text: "User-friendly app", icon: Smartphone },
                            { text: "Affordable pricing", icon: Heart },
                            { text: "24/7 availability", icon: Check },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center justify-center p-4 bg-background border rounded-lg text-center gap-3 hover:border-primary/50 transition-colors">
                                <div className="bg-primary/5 p-3 rounded-full">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <span className="font-medium text-sm">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Trust & Tech */}
                <div className="grid md:grid-cols-2 gap-8">
                    <section>
                        <h3 className="text-xl font-serif font-semibold mb-4 flex items-center gap-2">
                            🔐 Trust & Privacy
                        </h3>
                        <p className="mb-4">Your privacy matters to us.</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-green-500" /> Secure servers</li>
                            <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-green-500" /> Encrypted transactions</li>
                            <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-green-500" /> Strict data protection policies</li>
                        </ul>
                        <p className="mt-4 text-sm text-muted-foreground">All personal information and consultations remain confidential.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-serif font-semibold mb-4 flex items-center gap-2">
                            📱 Technology Meets Tradition
                        </h3>
                        <div className="flex flex-col items-center justify-center text-center p-4 bg-muted rounded-lg">
                            <span className="font-serif text-lg font-bold text-primary">🕉 Ancient Vedic Astrology</span>
                            <span className="text-2xl my-2">+</span>
                            <span className="font-sans text-lg font-bold text-primary">📲 Modern Digital Technology</span>
                        </div>
                        <p className="mt-4 text-sm text-center">
                            Create a seamless experience where you can receive guidance anytime, anywhere.
                        </p>
                    </section>
                </div>

                {/* Belief */}
                <section className="bg-yellow-500/5 border border-yellow-500/20 p-8 rounded-2xl text-center">
                    <h3 className="text-2xl font-serif font-semibold mb-4 flex items-center justify-center gap-2 text-yellow-700 dark:text-yellow-400">
                        ⚠️ Our Belief
                    </h3>
                    <p className="mb-6 font-medium">We believe astrology is a tool for:</p>
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        <span className="px-4 py-2 bg-background rounded-full border shadow-sm">Self-awareness</span>
                        <span className="px-4 py-2 bg-background rounded-full border shadow-sm">Personal growth</span>
                        <span className="px-4 py-2 bg-background rounded-full border shadow-sm">Better decision making</span>
                    </div>
                    <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                        While our predictions provide guidance, we encourage users to apply their own judgment and wisdom.
                    </p>
                </section>

                {/* Contact */}
                <section className="text-center pt-8">
                    <h3 className="text-2xl font-serif font-semibold mb-6">📞 Get in Touch</h3>
                    <p className="mb-6 text-muted-foreground">We’re always happy to help you.</p>

                    <div className="inline-block text-left space-y-3 bg-muted p-8 rounded-xl min-w-[300px]">
                        <div className="flex flex-col gap-1">
                            <span className="text-sm text-muted-foreground">Company Name</span>
                            <span className="font-semibold">Vedic.Astro</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-sm text-muted-foreground">Email</span>
                            <a href="mailto:support@vedic.store" className="font-semibold hover:text-primary transition-colors">support@vedic.store</a>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-sm text-muted-foreground">Website</span>
                            <a href="https://www.vedic.store" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary transition-colors">www.vedic.store</a>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}
