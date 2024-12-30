/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        nightSky: '#0d1b2a',
        deepBlue: '#1b263b',
        moonlitBlue: '#415a77',
        starryGlow: '#778da9',
        starlight: '#e0e1dd',
        goldenStar: '#ffd700',
      },
    },
  },
  plugins: [],
};
