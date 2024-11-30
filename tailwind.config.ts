import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Jersey 10"', 'sans-serif'],
      },
      colors: {
        primary: "#C9FF17",
        dark: "#1E1E1E"
      }
    },
  },
  plugins: [],
} satisfies Config;
