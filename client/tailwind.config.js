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
          light: "#f4f4f4",
          main: "#fbfafa",
          spacer: "#f2eeee",
          block: "#ecf5ff",
        },
        button: {
          blue: "#1d597d",
          light: "#33698a",
        },
      },
    },
  },
  plugins: [],
};
