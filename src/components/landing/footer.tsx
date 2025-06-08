"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Product: ["Features", "Pricing", "API", "Integrations", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Documentation", "Help Center", "Community", "Status", "Contact"],
  Legal: ["Privacy", "Terms", "Security", "Cookies", "GDPR"],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
    color: "hover:text-blue-600",
  },
  { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-400" },
  { icon: Mail, href: "#", label: "Email", color: "hover:text-red-600" },
];

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl border-t border-border/50"
    >
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <motion.div
                  className="flex items-center gap-3 mb-6"
                >
                  <motion.a
                    href="#"
                    className="flex items-center gap-3 cursor-pointer"
                    whileHover={{ scale: 1.000001 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.img
                      src="/hero-icon.png"
                      alt="Hero Icon"
                      width={170} // Set appropriate dimensions
                      height={100}
                    />
                  </motion.a>{" "}
                </motion.div>

                <motion.p
                  className="text-muted-foreground leading-relaxed mb-8 text-lg"
                  whileHover={{ scale: 1.01 }}
                >
                  Transform your social media strategy with AI-powered
                  cross-platform publishing. Create once, optimize
                  automatically, reach everywhere.
                </motion.p>

                {/* Social links */}
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 bg-muted/50 backdrop-blur-xl rounded-xl flex items-center justify-center transition-all duration-300 group border border-border/50 hover:border-primary/30 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-current transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links sections */}
            {Object.entries(footerLinks).map(
              ([category, links], categoryIndex) => (
                <div key={category}>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                    className="font-bold text-foreground mb-6 text-lg"
                  >
                    {category}
                  </motion.h3>
                  <ul className="space-y-4">
                    {links.map((link, linkIndex) => (
                      <motion.li
                        key={link}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          delay: categoryIndex * 0.1 + linkIndex * 0.05,
                          duration: 0.4,
                        }}
                      >
                        <motion.a
                          href="#"
                          whileHover={{ x: 5, scale: 1.05 }}
                          className="text-muted-foreground hover:text-foreground transition-all duration-300 block"
                        >
                          {link}
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="border-t border-border/50 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <motion.p
              className="text-muted-foreground"
              whileHover={{ scale: 1.05 }}
            >
              © 2024 SarvaSync. All rights reserved. Made with ❤️ for creators
              worldwide.
            </motion.p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (item) => (
                    <motion.a
                      key={item}
                      href="#"
                      whileHover={{ scale: 1.05, color: "var(--foreground)" }}
                      className="hover:text-foreground transition-colors"
                    >
                      {item}
                    </motion.a>
                  )
                )}
              </div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollToTop}
                  className="backdrop-blur-xl border-border/50 hover:border-primary/30 hover:bg-primary/5"
                >
                  <ArrowUp className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
