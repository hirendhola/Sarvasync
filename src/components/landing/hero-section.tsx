"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useRef, useEffect } from "react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [10, -10]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-10, 10]),
    springConfig
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.section
      ref={containerRef}
      style={{ y, opacity, scale }}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-6 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(99, 9, 208, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(70, 55, 175, 0.06) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(99, 9, 208, 0.07) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.6, 0.05, 0.01, 0.9],
          }}
          className="mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-8 py-4 glass rounded-full cursor-pointer group border border-primary/20"
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 10px 25px -5px rgba(99, 9, 208, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-3 h-3 bg-primary rounded-full shadow-lg"
              animate={{
                scale: [1, 1.3, 1],
                boxShadow: [
                  "0 0 0 0 rgba(99, 9, 208, 0.7)",
                  "0 0 0 8px rgba(99, 9, 208, 0)",
                  "0 0 0 0 rgba(99, 9, 208, 0.7)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
              <Sparkles className="inline-block w-4 h-4 mr-1 text-primary" />{" "}
              Now supporting 10+ platforms with AI optimization
            </span>
            <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </motion.div>

        {/* Main Heading with 3D Effect */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-12 leading-[0.9] tracking-tight">
            <motion.div
              className="block text-foreground mb-4"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.6,
                ease: [0.6, 0.05, 0.01, 0.9],
              }}
            >
              Connect once
            </motion.div>
            <motion.div
              className="block mb-4"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.8,
                ease: [0.6, 0.05, 0.01, 0.9],
              }}
            >
              <span className="gradient-text">Post everywhere.</span>
            </motion.div>
            {/* <motion.div
              className="block text-foreground"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: [0.6, 0.05, 0.01, 0.9],
              }}
            >
              Conquer
            </motion.div> */}
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0.6, 0.05, 0.01, 0.9],
          }}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-5xl mx-auto mb-16 leading-relaxed font-medium"
        >
          AI-powered{" "}
          <span className="text-primary font-semibold">cross-platform</span>{" "}
          social media publishing at scale
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.4,
            ease: [0.6, 0.05, 0.01, 0.9],
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="relative bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group rounded-2xl"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <motion.div
                className="flex items-center relative z-10"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span>Start Creating Magic</span>
                <ArrowRight className="ml-3 w-6 h-6" />
              </motion.div>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-6 text-xl font-semibold glass border-primary/30 hover:bg-primary/10 transition-all duration-300 group rounded-2xl"
            >
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Play className="mr-3 w-6 h-6 text-primary" />
                <motion.a href="/#demo" className="text-foreground">Watch Demo</motion.a>
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.6,
            ease: [0.6, 0.05, 0.01, 0.9],
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto"
        >
          {[
            { number: "0+", label: "Posts Published" },
            { number: "0+", label: "Active Users" },
            { number: "0+", label: "Hours of Content" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 1.8 + index * 0.1,
                ease: "backOut",
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 15px 30px -10px rgba(99, 9, 208, 0.2)",
              }}
              className="text-center group cursor-pointer"
            >
              <motion.div className="glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-primary mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-muted-foreground text-lg font-medium group-hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
