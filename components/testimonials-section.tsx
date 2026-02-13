import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Mumbai, India",
      content: "VedicAstro gave me clarity during the most confusing period of my life. The kundli analysis was incredibly accurate and the astrologers were deeply knowledgeable. Highly recommend!",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      role: "Delhi, India",
      content: "Finally found a platform that blends authentic Vedic wisdom with modern convenience. The daily horoscope readings have been spot-on, and the customer service is exceptional.",
      rating: 5,
    },
    {
      name: "Anjali Verma",
      role: "Bangalore, India",
      content: "As someone living abroad, it was hard to find trustworthy astrologers. VedicAstro connected me with verified experts who understood my challenges perfectly. Life-changing experience!",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real stories from users who found clarity and direction with VedicAstro
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col gap-4 hover:border-secondary/30"
            >


              {/* Testimonial Content */}
              <p className="text-foreground/80 leading-relaxed flex-grow">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="border-t border-border/30 pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-foreground/60">
                  {testimonial.role}
                </p>
              </div>
            </Card>
          ))}
        </div>


      </div>
    </section>
  )
}
