/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "oklch(0.9754 0.0084 325.6414)",
        foreground: "oklch(0.1 0 0)",
        border: "oklch(0.9 0.005 325)",
        input: "oklch(0.98 0.003 325)",
        ring: "oklch(0.4 0.02 325)",
        primary: {
          DEFAULT: "oklch(0.6 0.25 264)",
          foreground: "oklch(0.98 0.01 264)",
          50: "oklch(0.97 0.05 264)",
          100: "oklch(0.94 0.07 264)",
          200: "oklch(0.87 0.10 264)",
          300: "oklch(0.78 0.12 264)",
          400: "oklch(0.68 0.15 264)",
          500: "oklch(0.57 0.18 264)",
          600: "oklch(0.47 0.18 264)",
          700: "oklch(0.38 0.17 264)",
          800: "oklch(0.29 0.16 264)",
          900: "oklch(0.21 0.15 264)",
          950: "oklch(0.13 0.12 264)",
        },
        secondary: {
          DEFAULT: "oklch(0.65 0.2 180)",
          foreground: "oklch(0.1 0 0)",
          50: "oklch(0.98 0.04 180)",
          100: "oklch(0.95 0.05 180)",
          200: "oklch(0.89 0.07 180)",
          300: "oklch(0.81 0.08 180)",
          400: "oklch(0.71 0.10 180)",
          500: "oklch(0.61 0.12 180)",
          600: "oklch(0.51 0.12 180)",
          700: "oklch(0.42 0.11 180)",
          800: "oklch(0.33 0.10 180)",
          900: "oklch(0.25 0.09 180)",
          950: "oklch(0.16 0.07 180)",
        },
        accent: {
          DEFAULT: "oklch(0.65 0.2 45)",
          foreground: "oklch(0.1 0 0)",
          50: "oklch(0.97 0.05 45)",
          100: "oklch(0.94 0.07 45)",
          200: "oklch(0.87 0.10 45)",
          300: "oklch(0.78 0.12 45)",
          400: "oklch(0.68 0.15 45)",
          500: "oklch(0.57 0.18 45)",
          600: "oklch(0.47 0.18 45)",
          700: "oklch(0.38 0.17 45)",
          800: "oklch(0.29 0.16 45)",
          900: "oklch(0.21 0.15 45)",
          950: "oklch(0.13 0.12 45)",
        },
        destructive: {
          DEFAULT: "oklch(0.45 0.25 30)",
          foreground: "oklch(0.98 0.01 30)",
        },
        muted: {
          DEFAULT: "oklch(0.85 0.01 260)",
          foreground: "oklch(0.4 0.005 260)",
        },
        popover: {
          DEFAULT: "oklch(0.98 0.01 270)",
          foreground: "oklch(0.2 0.005 270)",
        },
        card: {
          DEFAULT: "oklch(0.96 0.008 250)",
          foreground: "oklch(0.15 0.005 250)",
        },
      },
      borderRadius: {
        lg: "1rem",
        md: "0.875rem",
        sm: "0.75rem",
      },
      fontFamily: {
        heading: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "SF Mono",
          "Monaco",
          "Inconsolata",
          "Roboto Mono",
          "Consolas",
          "Courier New",
          "monospace",
        ],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.025em" }],
        sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.025em" }],
        base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0.0125em" }],
        lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "0.0125em" }],
        xl: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "0.0125em" }],
        "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "0.0125em" }],
        "3xl": [
          "1.875rem",
          { lineHeight: "2.25rem", letterSpacing: "0.0125em" },
        ],
        "4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "0.0125em" }],
        "5xl": ["3rem", { lineHeight: "1", letterSpacing: "-0.025em" }],
        "6xl": ["3.75rem", { lineHeight: "1", letterSpacing: "-0.025em" }],
        "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.025em" }],
        "8xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.025em" }],
        "9xl": ["8rem", { lineHeight: "1", letterSpacing: "-0.025em" }],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "glass-inset": "inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
        smooth:
          "0 2px 16px -4px rgba(0, 0, 0, 0.12), 0 4px 24px -8px rgba(0, 0, 0, 0.08)",
        "smooth-lg":
          "0 4px 24px -4px rgba(0, 0, 0, 0.12), 0 8px 32px -8px rgba(0, 0, 0, 0.08)",
        "smooth-xl":
          "0 8px 40px -4px rgba(0, 0, 0, 0.12), 0 16px 64px -8px rgba(0, 0, 0, 0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
