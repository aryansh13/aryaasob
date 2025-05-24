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
        "primary": "#4f46e5", // Indigo
        "primary-light": "#818cf8",
        "secondary": "#10b981", // Emerald
        "dark": "#0f172a", // Slate-900
        "dark-light": "#1e293b", // Slate-800
        "light": "#f8fafc", // Slate-50
        "light-gray": "#94a3b8", // Slate-400
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
      animation: {
        "gradient": "gradient 8s linear infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
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
