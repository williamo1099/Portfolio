/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6595CE",
        secondary: "#343A75",
        accent: "#CA3333",
        error: "#E94F37",
        warning: "#F5A623",
        success: "#28A745",
        background: "#FCFDFE",
        foreground: "#000000",
      },
    },
  },
  plugins: [],
};
