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
        "default": "url('/assets/bg/bg.svg')",
        "onboarding": "url('/assets/materials/onboarding_bg.jpeg')",
        "product": "url('/assets/materials/landing_item1.jpeg')"
      },
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      grey: '#D0D5DD',
      primary: '#4DEF8E',
      danger: '#FFEB3A',
      blur: '#F9FAFB',
    }
  },
  plugins: [],
};
export default config;
