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
          blue_light: "#eaf1f6",
          blue_dark: "#447593",
          task: "#f2f4f5",
          high: "#da6c6c",
          medium: "#dab659",
          low: "#85c26f",
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
