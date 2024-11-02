import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: "#FF69B4", 
          light: "#FFC0CB",
          dark: "#C71585",
        },
        textShadow: {
          default: "12px 22px 10px rgba(0, 0, 0, 0.5)",
          md: "13px 14px 10 rgba(0, 0, 0, 0.5)",
          lg: "14px 24px 10 rgba(0, 0, 0, 0.5)",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
