import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'sm': {'min': '350px', 'max': '500px'},
        'md': {'min': '501px', 'max': '850px'},
        'lg': {'min': '851px', 'max': '1250px'},
        'xl': {'min': '1251px', 'max': '1550px'},
        '2xl': {'min': '1551px', 'max': '2000px'},
        '3xl': {'min': '2001px', 'max': '3000px'}
      }
    },
  },
  plugins: [],
};
export default config;
