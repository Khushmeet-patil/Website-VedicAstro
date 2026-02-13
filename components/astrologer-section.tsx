"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TrendingUp, Clock, Globe } from "lucide-react"
import { ApplyAstrologerModal } from "@/components/apply-astrologer-modal"

export function AstrologerSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const benefits = [
    {
      icon: TrendingUp,
      title: "High Earnings",
      description: "Earn competitive rates with transparent payment structures and bonus incentives.",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Work on your own terms with complete control over your availability and pricing.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to clients from around the world seeking authentic Vedic guidance.",
    },
  ]

  return (
    <section id="astrologers" className="py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Join a Global Community of Experts
              </h2>
              <p className="text-lg text-foreground/70">
                Grow your Vedic practice with VedicPannel - the complete astrologer dashboard designed for professionals.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-secondary/20">
                        <Icon className="h-5 w-5 text-secondary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-foreground/70">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-foreground rounded-full font-semibold w-fit"
              onClick={() => setIsModalOpen(true)}
            >
              Apply as Astrologer
            </Button>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <Card className="bg-card border-border/50 p-8 rounded-2xl shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    VedicPannel Features
                  </h3>
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Manage Schedules", value: "24/7 Control" },
                    { label: "Track Earnings", value: "Real-time Analytics" },
                    { label: "Easy Intake Forms", value: "Streamlined Client Data" },
                    { label: "Chat & Video Support", value: "Multiple Communication Channels" },
                  ].map((feature, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-background rounded-lg border border-border/30">
                      <span className="text-foreground/80">{feature.label}</span>
                      <span className="text-sm font-semibold text-secondary">{feature.value}</span>
                    </div>
                  ))}
                </div>


              </div>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      <ApplyAstrologerModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  )
}
