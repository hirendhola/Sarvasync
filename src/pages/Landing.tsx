"use client";
import { HeroSection } from "@/components/landing/hero-section";
import { InteractiveDemo } from "@/components/landing/live-demo";
import { Footer } from "@/components/landing/footer";
import { Navigation } from "@/components/landing/navigation";
import { motion, useAnimation } from "framer-motion";
import React from "react";
import { FeatureShowcase } from "@/components/landing/feature-showcase";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { PricingExperience } from "@/components/landing/pricing-section";
import { ScrollProgress } from "@/components/landing/scroll-progress";

export default function LandingPage() {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <motion.div
      className="min-h-screen bg-background overflow-x-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      <ScrollProgress />

      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <FeatureShowcase />
        <InteractiveDemo />
        <PricingExperience />
        <TestimonialsSection />
      </main>

      <Footer />
    </motion.div>
  );
}
