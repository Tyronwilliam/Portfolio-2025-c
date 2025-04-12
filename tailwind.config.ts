/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'], // supporte class et data-theme
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ...require("tailwindcss/colors"),
        blue: {
          50: "#ebf2fd",
          100: "#d0e0fb",
          200: "#a6c3f7",
          300: "#7ba5f3",
          400: "#5388ee",
          500: "#3672E9", // ton bleu principal ici
          600: "#2f65d2",
          700: "#2754b2",
          800: "#204391",
          900: "#193571",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
