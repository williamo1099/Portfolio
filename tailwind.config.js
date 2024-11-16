/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2361EA",
        secondary: "#96BEF3",
        accent: "#84A928",
        error: "",
        warning: "",
        success: "",
        background: "#F5F5F5",
        foreground: "#3C4D16",
      },
    },
  },
  plugins: [],
};
