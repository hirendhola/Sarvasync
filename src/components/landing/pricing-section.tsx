"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, Crown, Users, Star, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$9",
    period: "/month",
    description: "Perfect for individuals getting started",
    icon: Zap,
    features: [
      "Connect up to 3 platforms",
      "10 posts per month",
      "Basic analytics",
      "Email support",
      "Content templates",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For serious content creators",
    icon: Crown,
    features: [
      "Connect unlimited platforms",
      "Unlimited posts",
      "Advanced analytics",
      "Priority support",
      "AI content optimization",
      "Team collaboration (3 members)",
      "Custom branding",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For large organizations",
    icon: Users,
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Advanced security",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "White-label solution",
    ],
    popular: false,
  },
]

export function PricingExperience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)

  return (
    <section ref={ref} id="pricing" className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="gradient-text">Choose Your Power</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Unlock the full potential of your social media strategy with plans designed to scale with your ambitions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 backdrop-blur-xl rounded-full border border-primary/20"
          >
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">14-day free trial • No credit card required</span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.1,
                ease: [0.6, 0.05, 0.01, 0.9],
              }}
              onHoverStart={() => setHoveredPlan(plan.name)}
              onHoverEnd={() => setHoveredPlan(null)}
              className="relative group"
            >
              {/* Popular Badge */}
              <AnimatePresence>
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <Badge className="bg-primary text-primary-foreground px-6 py-2 shadow-xl border-0">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </Badge>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 20px 40px -15px rgba(99, 9, 208, 0.25)",
                  transition: { duration: 0.3 },
                }}
                className="h-full"
              >
                <Card
                  className={`h-full relative overflow-hidden transition-all duration-500 ${
                    plan.popular
                      ? "bg-gradient-to-br from-card/90 to-card/60 border-primary/30 shadow-2xl"
                      : "bg-gradient-to-br from-card/80 to-card/40 border-border/50"
                  } backdrop-blur-xl hover:border-primary/40`}
                >
                  {/* Subtle Background Effect */}
                  <motion.div
                    className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  <CardHeader className="text-center pb-8 relative z-10">
                    <motion.div
                      className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl relative overflow-hidden"
                      whileHover={{
                        scale: 1.1,
                        rotate: 10,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0, 0.3, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                      <plan.icon className="w-10 h-10 text-primary-foreground relative z-10" />
                    </motion.div>

                    <motion.h3 className="text-3xl font-bold text-foreground mb-3" whileHover={{ scale: 1.02 }}>
                      {plan.name}
                    </motion.h3>
                    <p className="text-muted-foreground mb-6 text-base leading-relaxed">{plan.description}</p>

                    <motion.div className="flex items-baseline justify-center" whileHover={{ scale: 1.02 }}>
                      <motion.span
                        className="text-5xl font-bold text-primary"
                        animate={hoveredPlan === plan.name ? { scale: 1.05 } : { scale: 1 }}
                      >
                        {plan.price}
                      </motion.span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </motion.div>
                  </CardHeader>

                  <CardContent className="pt-0 relative z-10">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: 0.8 + index * 0.1 + featureIndex * 0.05,
                            duration: 0.4,
                          }}
                          whileHover={{ x: 5, scale: 1.01 }}
                          className="flex items-center gap-3 group/item cursor-pointer"
                        >
                          <motion.div
                            className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Check className="w-3 h-3 text-primary-foreground" />
                          </motion.div>
                          <span className="text-foreground group-hover/item:text-primary transition-colors font-medium">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        className={`w-full relative overflow-hidden group transition-all duration-300 ${
                          plan.popular
                            ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl"
                            : "bg-muted hover:bg-muted/80 text-foreground border border-border/50 hover:border-primary/30"
                        }`}
                        size="lg"
                      >
                        {/* Shimmer Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        />

                        <motion.div
                          className="flex items-center justify-center relative z-10"
                          whileHover={{ scale: 1.02 }}
                        >
                          <span className="mr-2">Get Started</span>
                          <motion.div
                            animate={{ x: hoveredPlan === plan.name ? 5 : 0 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </motion.div>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.p className="text-muted-foreground mb-6" whileHover={{ scale: 1.02 }}>
            All plans include our core features and 24/7 support
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" className="backdrop-blur-xl border-primary/20 hover:bg-primary/5">
              Compare All Features
            </Button>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  )
}
