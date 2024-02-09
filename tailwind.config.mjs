/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        Green: "rgb(166,211,102)", //"rgb(0,131,138)",
        darkBlue: "hsl(228,39%,23%)",
        lightDark: "rgb(20,27,28)",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
