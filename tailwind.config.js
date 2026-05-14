import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "system-ui", "sans-serif"],
        display: ["Roboto", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        ink: "#201A1C",
        mutedInk: "#6F6267",
        brand: {
          DEFAULT: "#B23A48",
          soft: "#FFD9DE",
          border: "#F0E0E3",
          input: "#E9D8DC",
        },
        success: "#2F7D51",
        warning: "#9A6200",
        danger: "#BA1A1A",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      boxShadow: {
        glow: "0 24px 70px rgba(178, 58, 72, 0.22)",
        cyan: "0 18px 48px rgba(178, 58, 72, 0.18)",
        pink: "0 18px 54px rgba(255, 217, 222, 0.65)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(32,26,28,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(32,26,28,0.045) 1px, transparent 1px)",
        "luxury-radial":
          "radial-gradient(circle at 18% 18%, rgba(255, 217, 222, 0.82), transparent 30%), radial-gradient(circle at 82% 12%, rgba(178, 58, 72, 0.14), transparent 28%), radial-gradient(circle at 55% 86%, rgba(154, 98, 0, 0.12), transparent 30%)",
      },
      animation: {
        scan: "scan 3.8s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
        flow: "flow 12s linear infinite",
        pulseGlow: "pulseGlow 2.8s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        scan: {
          "0%, 100%": { transform: "translateY(-120%)", opacity: 0 },
          "15%, 75%": { opacity: 1 },
          "50%": { transform: "translateY(120%)", opacity: 0.85 },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -16px, 0)" },
        },
        flow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 22px rgba(34, 211, 238, .24)" },
          "50%": { boxShadow: "0 0 48px rgba(244, 114, 182, .34)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
    },
  },
  plugins: [animate],
};
