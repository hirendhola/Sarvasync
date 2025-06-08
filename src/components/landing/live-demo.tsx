"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Twitter,
  Linkedin,
  MessageSquare,
  FileText,
  Hash,
  Send,
  Sparkles,
  TrendingUp,
  Users,
  Heart,
} from "lucide-react";

export function InteractiveDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);

  const platforms = [
    {
      icon: Twitter,
      name: "Twitter",
      color: "text-blue-500",
      connected: true,
      engagement: "2.4K",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      color: "text-blue-600",
      connected: true,
      engagement: "1.8K",
    },
    {
      icon: MessageSquare,
      name: "Reddit",
      color: "text-orange-500",
      connected: true,
      engagement: "956",
    },
    {
      icon: FileText,
      name: "Medium",
      color: "text-green-600",
      connected: false,
      engagement: "0",
    },
    {
      icon: Hash,
      name: "Dev.to",
      color: "text-purple-600",
      connected: true,
      engagement: "1.2K",
    },
  ];

  const demoSteps = [
    "Write your content",
    "AI optimization",
    "Platform preview",
    "Publish everywhere",
  ];

  const samplePost =
    "🚀 Just discovered an amazing new way to streamline social media management! The AI-powered optimization is incredible. #SocialMedia #AI #Productivity";

  useEffect(() => {
    if (activeStep === 0 && isInView) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        let i = 0;
        const typeInterval = setInterval(() => {
          if (i < samplePost.length) {
            setPostContent(samplePost.slice(0, i + 1));
            i++;
          } else {
            clearInterval(typeInterval);
            setIsTyping(false);
            setTimeout(() => setActiveStep(1), 1000);
          }
        }, 50);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [activeStep, isInView]);

  useEffect(() => {
    if (activeStep === 1) {
      setTimeout(() => setActiveStep(2), 2000);
    } else if (activeStep === 2) {
      setTimeout(() => setActiveStep(3), 3000);
    }
  }, [activeStep]);

  const handlePublish = () => {
    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(false);
      setActiveStep(0);
      setPostContent("");
    }, 3000);
  };

  return (
    <section
      ref={ref}
      id="demo"
      className="py-32 px-6 relative overflow-hidden"
    >
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
            <span className="gradient-text">See Magic in Action</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Watch how SarvaSync transforms your content creation workflow with
            intelligent automation
          </motion.p>
        </motion.div>

        {/* Demo Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center gap-4 bg-card/50 backdrop-blur-xl rounded-full p-2 border border-border/50">
            {demoSteps.map((step, index) => (
              <motion.div
                key={step}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  index <= activeStep
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground"
                }`}
                animate={{
                  scale: index === activeStep ? 1.05 : 1,
                }}
                whileHover={index <= activeStep ? { scale: 1.1 } : {}}
              >
                {step}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-2xl border-border/50 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              {/* Demo Header */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-b border-border/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      {["#FF5F56", "#FFBD2E", "#27CA3F"].map((color, i) => (
                        <motion.div
                          key={color}
                          className="w-3 h-3 rounded-full cursor-pointer"
                          style={{ backgroundColor: color }}
                          whileHover={{ scale: 1.3 }}
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      SarvaSync Studio
                    </span>
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full mr-2"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                    Live Demo
                  </Badge>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Compose Area */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary" />
                        AI-Powered Composer
                      </h3>

                      <motion.div
                        className={`relative bg-muted/50 rounded-xl p-6 border transition-all duration-500 ${
                          activeStep === 0
                            ? "border-primary shadow-lg shadow-primary/20"
                            : "border-border/50"
                        }`}
                        animate={{
                          scale: activeStep === 0 ? 1.02 : 1,
                        }}
                        whileHover={{ borderColor: "var(--primary)" }}
                      >
                        <textarea
                          className="w-full bg-transparent text-foreground resize-none outline-none min-h-[120px]"
                          placeholder="What's on your mind? Let AI help you craft the perfect message..."
                          value={postContent}
                          onChange={(e) => setPostContent(e.target.value)}
                          readOnly={activeStep > 0}
                        />

                        {isTyping && (
                          <motion.div
                            className="absolute bottom-4 right-4"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                              duration: 1,
                              repeat: Number.POSITIVE_INFINITY,
                            }}
                          >
                            <div className="flex gap-1">
                              {[0, 1, 2].map((i) => (
                                <motion.div
                                  key={i}
                                  className="w-2 h-2 bg-primary rounded-full"
                                  animate={{
                                    scale: [1, 1.5, 1],
                                  }}
                                  transition={{
                                    duration: 0.6,
                                    delay: i * 0.2,
                                    repeat: Number.POSITIVE_INFINITY,
                                  }}
                                />
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {/* AI Suggestions */}
                        <AnimatePresence>
                          {activeStep === 1 && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              className="mt-4 p-4 bg-primary/10 rounded-xl border border-primary/30"
                            >
                              <div className="flex items-center gap-2 mb-3">
                                <Sparkles className="w-5 h-5 text-primary" />
                                <span className="text-sm font-semibold text-primary">
                                  AI Optimization Complete
                                </span>
                              </div>
                              <div className="text-sm text-foreground space-y-1">
                                <div>
                                  ✨ Added trending hashtags for better reach
                                </div>
                                <div>
                                  📈 Optimized content length for each platform
                                </div>
                                <div>
                                  🎯 Enhanced engagement potential by 34%
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>

                    {/* Platform Previews */}
                    <AnimatePresence>
                      {activeStep >= 2 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <h4 className="text-md font-medium mb-4 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            Platform Previews
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {platforms.slice(0, 4).map((platform, index) => (
                              <motion.div
                                key={platform.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{
                                  scale: 1.03,
                                  y: -3,
                                  borderColor: "var(--primary)",
                                }}
                                className="bg-card/50 rounded-lg p-4 border border-border/50 hover:border-primary/30 transition-all duration-300"
                              >
                                <div className="flex items-center gap-2 mb-2">
                                  <platform.icon
                                    className={`w-4 h-4 ${platform.color}`}
                                  />
                                  <span className="text-sm font-medium">
                                    {platform.name}
                                  </span>
                                  <Badge
                                    variant="secondary"
                                    className="ml-auto text-xs"
                                  >
                                    Optimized
                                  </Badge>
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  Engagement prediction: +
                                  {Math.floor(Math.random() * 30 + 15)}%
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Platform Status */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Connected Platforms
                      </h3>
                      <div className="space-y-3">
                        {platforms.map((platform, index) => (
                          <motion.div
                            key={platform.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 1.2 + index * 0.1 }}
                            whileHover={{
                              scale: 1.02,
                              x: 5,
                              borderColor: "var(--primary)",
                              boxShadow:
                                "0 5px 15px -5px rgba(99, 9, 208, 0.2)",
                            }}
                            className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                          >
                            <div className="flex items-center gap-3">
                              <motion.div
                                whileHover={{ rotate: 360, scale: 1.2 }}
                                transition={{ duration: 0.5 }}
                              >
                                <platform.icon
                                  className={`w-5 h-5 ${platform.color}`}
                                />
                              </motion.div>
                              <div>
                                <span className="font-medium text-foreground">
                                  {platform.name}
                                </span>
                                <div className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Heart className="w-3 h-3" />
                                  {platform.engagement} avg. engagement
                                </div>
                              </div>
                            </div>
                            <motion.div
                              className={`w-4 h-4 rounded-full ${
                                platform.connected
                                  ? "bg-primary shadow-lg shadow-primary/50"
                                  : "bg-gray-400"
                              }`}
                              animate={
                                platform.connected
                                  ? {
                                      boxShadow: [
                                        "0 0 0 0 rgba(99, 9, 208, 0.7)",
                                        "0 0 0 8px rgba(99, 9, 208, 0)",
                                      ],
                                    }
                                  : {}
                              }
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                              }}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Publish Button */}
                    <motion.div
                      animate={{
                        scale: activeStep === 3 ? 1.05 : 1,
                      }}
                    >
                      <Button
                        onClick={handlePublish}
                        disabled={isPublishing || activeStep < 3}
                        className="w-full bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden group disabled:opacity-50"
                      >
                        <AnimatePresence mode="wait">
                          {isPublishing ? (
                            <motion.div
                              key="publishing"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center"
                            >
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "linear",
                                }}
                                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"
                              />
                              Publishing...
                            </motion.div>
                          ) : (
                            <motion.div
                              key="publish"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center"
                            >
                              <Send className="mr-2 w-4 h-4" />
                              Publish to All Platforms
                            </motion.div>
                          )}
                        </AnimatePresence>

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
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <motion.p
            key="note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center font-primary"
          >
            *not an actual ui for ref only 
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
