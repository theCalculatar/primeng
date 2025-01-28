/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins-font-family": "Poppins-Regular, sans-serif",
      },
      letterSpacing: {},
      borderRadius: {
        "boader-md": "15px",
        "boader-sm": "10px",
      },
      colors: {
        "off-white": "#f2f2f2",
        "text-color": "#2a2a2a",
        gold: "#fa812f",
        white: "#ffffff",
        "text-muted": "#6c757d",
      },
    },
  },
  plugins: [],
};
