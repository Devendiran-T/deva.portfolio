/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050d1a",
        secondary: "#8da5c4",
        tertiary: "#0a1628",
        accent: "#4f9eff",
        purple: "#9b6bff",
        "black-100": "#071020",
        "black-200": "#040c18",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #0a1f3d",
        glow: "0 0 20px #4f9eff55",
        "glow-purple": "0 0 20px #9b6bff55",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://ik.imagekit.io/bqzlidc77g/my%20portfolio/herobg.png?updatedAt=1749961111628&tr=f-auto')",
      },
    },
  },
  plugins: [],
};
