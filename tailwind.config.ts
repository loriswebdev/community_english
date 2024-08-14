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
        "card-gradient": "linear-gradient(116.14deg, #0786B6 41.28%, #357086 97.95%)",
        "dark-blue-gradient":'linear-gradient(94.61deg, #0786B6 11.31%, #033B50 99.11%)'
        },
    },
  },
  plugins: [],
};
export default config;
