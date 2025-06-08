/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Edit3, FolderSyncIcon as Sync, BarChart3, Zap, Shield, Users } from "lucide-react"

const features = [
  {
    icon: Edit3,
    title: "Unified Composer",
    description:
      "Write your content once in our intuitive editor with rich formatting, media support, and platform-specific optimizations.",
    delay: 0,
  },
  {
    icon: Sync,
    title: "Platform Sync",
    description:
      "Seamlessly publish to Twitter, LinkedIn, Reddit, Dev.to, Medium, and more with intelligent content adaptation.",
    delay: 0.1,
  },
  {
    icon: BarChart3,
    title: "Analytics in Realtime",
    description:
      "Track engagement, reach, and performance across all platforms with comprehensive analytics and insights.",
    delay: 0.2,
  },
  {
    icon: Zap,
    title: "Smart Scheduling",
    description: "AI-powered optimal posting times for maximum engagement across different platforms and time zones.",
    delay: 0.3,
  },
  {
    icon: Shield,
    title: "Content Safety",
    description: "Built-in content moderation and compliance checks to ensure your posts meet platform guidelines.",
    delay: 0.4,
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Collaborate with your team, assign roles, review content, and maintain brand consistency across all channels.",
    delay: 0.5,
  },
]

export function FeatureCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Everything you need to dominate social media
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto tracking-wide">
            Powerful features designed to streamline your workflow and amplify your reach across all platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, _index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: feature.delay,
                ease: "easeOut",
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full glass-card hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  >
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors tracking-wide">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed tracking-wide">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
