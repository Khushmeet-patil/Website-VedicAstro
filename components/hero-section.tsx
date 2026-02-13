import { Button } from "@/components/ui/button"
import { Star, BadgeCheck, Play } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted/30">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">


            <div className="space-y-6">
              <h1 className="font-serif text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                Navigate Your Destiny with <span className="text-secondary">Vedic Precision</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Instant access to verified astrologers, detailed Kundli matching, and daily horoscopes. Connect with ancient wisdom through modern technology.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                <Button size="lg" className="h-14 px-8 bg-secondary hover:bg-secondary/90 text-foreground rounded-full text-base font-bold shadow-lg shadow-secondary/20 transition-all hover:scale-105">
                  <img src="/playstore.png" alt="Play Store" className="w-6 h-6 mr-2 object-contain" />
                  Download User App
                </Button>

                <div className="inline-flex items-center gap-2 bg-background/60 backdrop-blur-sm border border-secondary/20 px-4 py-2 rounded-full shadow-sm">
                  <BadgeCheck className="w-5 h-5 text-secondary fill-secondary/10" />
                  <span className="text-sm font-medium text-foreground/90">
                    <span className="font-bold text-secondary">100%</span> Verified Experts
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:flex justify-center items-center">
            <Image
              src="/sadhu.svg"
              alt="Vedic Sadhu"
              width={500}
              height={500}
              className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
