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
        primaryRed: "#ED1E79",
        hoverRed: "#C20C5C",
        secondaryGray: "#54595F",
        textGray: "#7A7A7A",
      },
    },
  },
  plugins: [],
};
export default config;
