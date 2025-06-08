"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Content Creator",
    company: "TechBlog",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "SarvaSync has completely transformed my content workflow. What used to take me hours of manual posting across platforms now takes just minutes. The AI optimization for each platform is incredible!",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Marketing Director",
    company: "StartupCo",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "As a marketing team, we needed something that could handle our complex posting schedule across multiple brands. SarvaSync's team features and analytics have been game-changing for our ROI.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Social Media Manager",
    company: "Agency Pro",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "Managing 20+ client accounts was a nightmare before SarvaSync. Now I can schedule, publish, and track everything from one dashboard. My clients love the consistent posting and engagement growth.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Developer Advocate",
    company: "DevTools Inc",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "The platform-specific optimization is what sold me. My technical content performs better on each platform because SarvaSync understands the nuances of LinkedIn vs Twitter vs Dev.to.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Entrepreneur",
    company: "Thompson Ventures",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "I was skeptical about another social media tool, but SarvaSync's simplicity and power convinced me. The time I save on content distribution I can now spend on creating better content.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Loved by creators worldwide</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of content creators who have transformed their social media workflow
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${currentIndex}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full glass-card hover:border-primary/20 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-8">
                    {/* Enhanced rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 cursor-pointer" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Content */}
                    <motion.blockquote
                      className="text-muted-foreground mb-6 leading-relaxed"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      "{testimonial.content}"
                    </motion.blockquote>

                    {/* Enhanced author */}
                    <motion.div
                      className="flex items-center gap-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold cursor-pointer"
                      >
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </motion.div>
                      <div>
                        <motion.div
                          className="font-semibold text-foreground"
                          whileHover={{ scale: 1.05, color: "var(--primary)" }}
                        >
                          {testimonial.name}
                        </motion.div>
                        <motion.div className="text-sm text-muted-foreground" whileHover={{ scale: 1.05 }}>
                          {testimonial.role} at {testimonial.company}
                        </motion.div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            <motion.div whileHover={{ scale: 1.1, x: -2 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="glass border-border hover:bg-muted relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-primary/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <ChevronLeft className="w-4 h-4 relative z-10 group-hover:text-primary transition-colors" />
              </Button>
            </motion.div>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index >= currentIndex && index < currentIndex + 3 ? "bg-primary" : "bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.1, x: 2 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="glass border-border hover:bg-muted relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-primary/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <ChevronRight className="w-4 h-4 relative z-10 group-hover:text-primary transition-colors" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
