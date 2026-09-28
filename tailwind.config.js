/** @type {import('tailwindcss').Config} */

// Every colour below points at a CSS variable defined in src/index.css.
// To re-theme the whole site, edit the :root block in index.css only —
// no component files need to change.
const withAlpha = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        page: { DEFAULT: withAlpha("page"), alt: withAlpha("page-alt") },
        surface: withAlpha("surface"),
        line: withAlpha("line"),
        heading: withAlpha("heading"),
        body: withAlpha("body"),
        muted: withAlpha("muted"),
        brand: {
          DEFAULT: withAlpha("brand"),
          hover: withAlpha("brand-hover"),
          soft: withAlpha("brand-soft"),
        },
        azure: withAlpha("azure"),
        accent: {
          DEFAULT: withAlpha("accent"),
          soft: withAlpha("accent-soft"),
          strong: withAlpha("accent-strong"),
        },
        ok: { DEFAULT: withAlpha("ok"), soft: withAlpha("ok-soft") },
      },
      boxShadow: {
        soft: "0 2px 12px rgb(var(--c-heading) / 0.07)",
        card: "0 10px 30px rgb(var(--c-heading) / 0.10)",
        lift: "0 18px 40px rgb(var(--c-heading) / 0.16)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fill-bar": {
          "0%": { width: "0%" },
          "100%": { width: "75%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(28px,-22px,0) scale(1.1)" },
        },
        "drift-alt": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1.05)" },
          "50%": { transform: "translate3d(-30px,20px,0) scale(0.95)" },
        },
        "word-in": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "translateX(16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "100%": { transform: "scale(1.9)", opacity: "0" },
        },
        "fade-scale": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "fill-bar": "fill-bar 1.6s ease-out 1.4s both",
        marquee: "marquee 34s linear infinite",
        drift: "drift 14s ease-in-out infinite",
        "drift-alt": "drift-alt 18s ease-in-out infinite",
        "word-in": "word-in 0.5s cubic-bezier(0.22,1,0.36,1) both",
        "gradient-x": "gradient-x 6s ease infinite",
        "pop-in": "pop-in 0.5s ease-out both",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        "fade-scale": "fade-scale 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};
