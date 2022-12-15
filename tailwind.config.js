/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-pattern-mob": "url('/src/assets/bg-pattern-footer-mobile.svg')",
        "footer-pattern-desk":
          "url('/src/assets/bg-pattern-footer-desktop.svg')",
        "cta-pattern-mob":
          "url('/src/assets/bg-pattern-how-we-work-mobile.svg')",
        "cta-pattern-desk":
          "url('/src/assets/bg-pattern-how-we-work-desktop.svg')",
      },
      fontFamily: {
        heading: ["DM Serif Display"],
        body: ["Karla"],
      },
      colors: {
        primary: {
          100: "hsl(216, 30%, 68%)",
          200: "hsl(256, 26%, 20%)",
        },
        brandNeutral: {
          100: "hsl(0, 0%, 98%)",
          200: "hsl(273, 4%, 51%)",
          300: "hsl(270, 9%, 17%)",
        },
      },
    },
  },
  plugins: [],
};
