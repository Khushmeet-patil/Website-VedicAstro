import { getPolicy } from '@/lib/api';
import { Mail, MapPin, Phone } from 'lucide-react';

export default async function ContactUs() {
    const policy = await getPolicy('contact-us');

    return (
        <main className="max-w-4xl mx-auto px-4 pt-32 pb-12 font-sans text-gray-800">
            <h1 className="text-3xl font-bold text-center mb-8">{policy?.title || 'Contact Us'}</h1>

            {policy ? (
                <div>
                    <p className="text-sm text-gray-500 mb-8 text-center">Last Updated: {new Date(policy.lastUpdated).toLocaleDateString()}</p>
                    <div
                        className="space-y-4 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mb-2 [&>h3]:text-lg [&>h3]:font-bold [&>h3]:mb-2 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-4"
                        dangerouslySetInnerHTML={{ __html: policy.content }}
                    />
                </div>
            ) : (
                <div className="text-center space-y-8">
                    <p className="text-xl text-gray-600">We'd love to hear from you. Here's how you can reach us.</p>

                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Email Us</h3>
                            <a href="mailto:support@vedicastro.com" className="text-blue-600 hover:underline">support@vedicastro.com</a>
                            <p className="text-sm text-gray-500 mt-2">For general inquiries and support</p>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                <Phone className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Call Us</h3>
                            <a href="tel:+917574970100" className="text-blue-600 hover:underline">+91 75749 70100</a>
                            <p className="text-sm text-gray-500 mt-2">Mon-Sat, 9am - 6pm IST</p>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Visit Us</h3>
                            <p className="text-center">Gujarat, India</p>
                            <p className="text-sm text-gray-500 mt-2 text-center">Headquarters</p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
