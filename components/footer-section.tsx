import { Separator } from "@/components/ui/separator"
import { Apple, Play, Mail, MapPin, Phone } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-serif font-bold">VedicAstro</div>
            <p className="text-sm text-background/80 leading-relaxed">
              Connecting ancient Vedic wisdom with modern technology to guide your life's journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">For Users</a></li>
              <li><a href="#" className="hover:text-background transition-colors">For Astrologers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Features</a></li>
            </ul>
          </div>

          {/* Legal Part 1 */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="/return-refund-policy" className="hover:text-background transition-colors">Return & Refund Policy</a></li>
              <li><a href="/app-privacy-policy" className="hover:text-background transition-colors">Privacy Policy (Application)</a></li>
              <li><a href="/mobile-app-privacy-policy" className="hover:text-background transition-colors">Privacy Policy (Mobile App)</a></li>
              <li><a href="/terms-and-conditions-astrologer" className="hover:text-background transition-colors">Terms & Conditions (Astrologer)</a></li>
            </ul>
          </div>

          {/* Legal Part 2 */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="/terms-of-usage" className="hover:text-background transition-colors">Terms of Usage</a></li>
              <li><a href="/pricing-policy" className="hover:text-background transition-colors">Pricing Policy — Vedic.Astro / Vedic.Store</a></li>
              <li><a href="/about-us" className="hover:text-background transition-colors">About Us — Vedic.Astro</a></li>
              <li><a href="/contact-us" className="hover:text-background transition-colors">Contact Us — Vedic.Astro</a></li>
              <li><a href="/disclaimer" className="hover:text-background transition-colors">Disclaimer — Vedic.Astro</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-background/20" />

        {/* App Downloads & Contact */}
        <div className="grid md:grid-cols-2 gap-8 py-12">
          {/* Download Apps */}
          <div>
            <h4 className="font-semibold mb-4">Download Our Apps</h4>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="flex items-center gap-3 bg-background text-foreground px-4 py-2 rounded-xl hover:bg-background/90 transition-colors border border-white/10">
                <img src="/playstore.png" alt="Play Store" className="w-8 h-8 object-contain" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] opacity-80">Get it on</span>
                  <span className="text-sm font-bold">VedicAstro App</span>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 bg-background text-foreground px-4 py-2 rounded-xl hover:bg-background/90 transition-colors border border-white/10">
                <img src="/playstore.png" alt="Play Store" className="w-8 h-8 object-contain" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] opacity-80">Get it on</span>
                  <span className="text-sm font-bold">VedicPanel App</span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@vedicastro.com" className="hover:text-background transition-colors">support@vedicastro.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+917574970100" className="hover:text-background transition-colors">+91 75749 70100</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Gujarat, India</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-background/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-sm text-background/70">
          <p>&copy; 2024 VedicAstro. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Youtube</a>
            <a href="#" className="hover:text-background transition-colors">Facebook</a>
            <a href="#" className="hover:text-background transition-colors">Instagram</a>
            <a href="#" className="hover:text-background transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
