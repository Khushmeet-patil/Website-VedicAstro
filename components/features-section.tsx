import { MessageSquare, BarChart3, Calendar, Lock } from "lucide-react"
import { Card } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: MessageSquare,
      title: "Instant Chat",
      description: "Connect with verified astrologers through private and secure instant messaging.",
    },
    {
      icon: BarChart3,
      title: "Detailed Kundli",
      description: "Get comprehensive birth charts with accurate planetary positions and personalized insights.",
    },
    {
      icon: Calendar,
      title: "Daily Guidance",
      description: "Receive personalized horoscopes and Panchang readings updated daily for your zodiac sign.",
    },
    {
      icon: Lock,
      title: "Secure Wallet",
      description: "Easy payments with encrypted wallet system. Safe, fast, and transparent transactions.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose VedicAstro
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Experience the perfect blend of ancient Vedic wisdom and modern technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="group bg-card hover:shadow-lg transition-all duration-300 border-border/50 hover:border-secondary/30 p-6 rounded-2xl"
              >
                <div className="flex flex-col gap-4 h-full">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Additional Features Badge */}
        <div className="mt-16 grid md:grid-cols-3 gap-4">
          {[
            { label: "Kundli Matching", value: "Precise Compatibility Analysis" },
            { label: "Panchang Info", value: "Daily Vedic Almanac" },
            { label: "Expert Network", value: "Global Astrologers" },
          ].map((item, index) => (
            <div key={index} className="bg-card border border-border/50 rounded-xl p-4 text-center">
              <p className="text-sm text-foreground/60 mb-1">{item.label}</p>
              <p className="font-semibold text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
