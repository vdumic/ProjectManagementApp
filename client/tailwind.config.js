/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          dark: "#494444",
        },
        bckgrnd: {
          light: "#f0f8ff",
          main: "#fcfdff",
        },
        button: {
          blue: "#1d597d",
        },
      },
    },
  },
  plugins: [],
};
