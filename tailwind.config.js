export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cabinet Grotesk'", "'DM Sans'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        bg: "#0d0d12",
        surface: "#13131a",
        surfaceHigh: "#1c1c26",
        border: "#1e1e2e",
        accent: "#7c6bff",
        accentGlow: "#a695ff",
        muted: "#4a4a6a",
        subtle: "#2a2a3d",
        light: "#e8e6f0",
        dim: "#9898b8",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(124,107,255,0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(124,107,255,0.35)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease forwards",
        fadeIn: "fadeIn 0.5s ease forwards",
        blink: "blink 1s step-end infinite",
        glow: "glow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
}
