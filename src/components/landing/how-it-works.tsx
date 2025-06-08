"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Link2, Edit, Send } from "lucide-react"

const steps = [
  {
    icon: Link2,
    title: "Connect Your Accounts",
    description:
      "Securely link your social media accounts with one-click OAuth integration. We support Twitter, LinkedIn, Reddit, Dev.to, Medium, and more.",
    number: "01",
  },
  {
    icon: Edit,
    title: "Create Your Content",
    description:
      "Use our powerful editor to craft your message. Add images, format text, and let our AI optimize content for each platform automatically.",
    number: "02",
  },
  {
    icon: Send,
    title: "Publish Everywhere",
    description:
      "Hit publish and watch your content go live across all connected platforms simultaneously. Track performance in real-time.",
    number: "03",
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-background/50 to-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">How it works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes with our simple three-step process
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-12`}
              >
                <div className="flex-1">
                  <Card className="glass-card shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                        >
                          <step.icon className="w-8 h-8 text-primary-foreground" />
                        </motion.div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
                          <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-primary-foreground font-bold text-lg">{step.number}</span>
                </motion.div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
