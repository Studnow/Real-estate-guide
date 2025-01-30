/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/partials/**/*.html",
    "src/sass/*.sass",
    "src/css/*.css",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fors", "sans-serif"],
      },
      backgroundImage: {
        "hero-clear": "url('/assets/img/hero-bg.png')",
        "hero-cards": "url('/assets/img/bg-hero-cards.png')",
        "house": "url('/assets/img/list-cards-bg/house.jpg')",
        "plan": "url('/assets/img/list-cards-bg/plan.jpg')",
        "woman": "url('/assets/img/list-cards-bg/woman.jpg')",
        "floors": "url('/assets/img/list-cards-bg/floors.jpg')",
      },
      colors: {
        "link-active": "oklch(var(--link-active) / <alpha-value>)",
      },
    },
  },
  daisyui: {
    themes: [
      "light",
      {
        mytheme: {
          ...require("daisyui/src/theming/themes")["mytheme"],
          primary: "oklch(0.72 0.07 71.14 / 1)",
          secondary: "oklch(0.62 0.07 70.92 / 1)",
          accent: "oklch(0.44 0.05 70.03 / 1)",
          "--link-active": "0.44 0.05 70.03",
          "accent-content": "#fff",
          neutral: "#23212C",
          "base-100": "#FFFFFF",
          "base-200": "#F0EAE3",
          info: "#A8E2F0",
          success: "#15847B",
          warning: "#E78B13",
          error: "#EE3F53",
          output: "#45515F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
