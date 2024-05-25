/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('/assets/landing_bg.svg')",
      },
      colors: {
        background: "#F7F7F7",
        secondaryBackground: "#FFFFFF",
        primaryAccent: "#FF6F61",
        secondaryAccent: "#6B5B95",
        textPrimary: "#333333",
        textSecondary: "#555555",
        border: "#E0E0E0",
        error: "#E57373",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
