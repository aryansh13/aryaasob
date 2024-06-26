import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "green-light": "#64ffda",
        "light" : "#ccd6f6",
        "dark" : "#0a192f",
        "light-gray" : "#8892b0",
        "dark-gray" : "#1d2e4b",
        "gray-dark" : "#112240",
      },
      space: {
        128: "32rem",
        144: "36rem",
        160: "38rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      margin: {
        "mt-1/2": "-36px",
      },
      listStyleType: {
        triangle: "▹",
      },  
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.38rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "86px",
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
