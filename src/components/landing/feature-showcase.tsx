/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Edit3,
  FolderSyncIcon as Sync,
  BarChart3,
  Brain,
  Clock,
  Target,
} from "lucide-react";

const features = [
  {
    icon: Edit3,
    title: "AI Content Creator",
    description:
      "Generate high-performing posts with real-time optimization for each platform.",
    delay: 0,
  },
  {
    icon: Brain,
    title: "Smart Post Adaptation",
    description:
      "Automatically reformats and tailors content for maximum engagement everywhere.",
    delay: 0.1,
  },
  {
    icon: Sync,
    title: "One-Click Multi-Platform Publishing",
    description:
      "Seamlessly publish to 4+ platforms with intelligent content adaptation and scheduling.",
    delay: 0.2,
  },
  {
    icon: BarChart3,
    title: "Predictive Performance Analytics",
    description:
      "Get actionable insights with engagement forecasting and ROI tracking.",
    delay: 0.3,
  },
  {
    icon: Clock,
    title: "Optimal Post Scheduling",
    description:
      "AI calculates the best times to post across all time zones.",
    delay: 0.4,
  },
  {
    icon: Target,
    title: "Laser-Focused Audience Targeting",
    description:
      "Precision tools based on demographics and behavioral patterns.",
    delay: 0.5,
  },
];

export function FeatureShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      id="features"
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="gradient-text">
              Revolutionary Social Media Management, Powered by AI
            </span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your social media workflow with{" "}
            <span className="text-primary font-semibold">
              intelligent automation
            </span>
            ,{" "}
            <span className="text-primary font-semibold">
              cross-platform publishing
            </span>
            , and{" "}
            <span className="text-primary font-semibold">
              data-driven optimization
            </span>{" "}
            — all in one intuitive platform.{" "}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, _index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: feature.delay,
                ease: [0.6, 0.05, 0.01, 0.9],
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group perspective-1000"
            >
              <Card className="h-full glass-card hover:border-primary/40 transition-all duration-500 overflow-hidden relative">
                {/* Subtle Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                <CardContent className="p-8 relative z-10">
                  <motion.div
                    className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mb-6 shadow-xl relative overflow-hidden"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
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
                    <feature.icon className="w-10 h-10 text-primary-foreground relative z-10" />
                  </motion.div>

                  <motion.h3
                    className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground transition-colors duration-300"
                    whileHover={{ scale: 1.01 }}
                  >
                    {feature.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
