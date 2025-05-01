/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
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
        Poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        Montserrat: ["var(--font-montserrat)", "sans-serif"],
        RobotoCondensed: ["var(--font-robotoCondensed)", "sans-serif"],
        Roboto: ["var(--font-roboto)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
