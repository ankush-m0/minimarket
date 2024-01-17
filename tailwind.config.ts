import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "btn-2": "rgba(0,0,0,1) 2px 2px 0px 1px",
        "btn-4": "rgba(0,0,0,1) 4px 4px 0px 1px",
        "btn-6": "rgba(0,0,0,1) 6px 6px 0px 1px",
      },
      colors: {
        primary: "#FF7051"
      }, 
      fontFamily: {
        mono: ['Roboto Mono', 'monospace'],
      },
      screens: {
        "xs": "400px",
        'xs-m': "480px"
      }, 
    },
      
  },
  plugins: [],
};
export default config;
