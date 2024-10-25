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
          DEFAULT: '#FF69B4', // Primary pink color
          light: '#FFC0CB',
          dark: '#C71585',
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
