import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ededed",
        border: "#2a2a2a",
        card: "#141414",
        "card-hover": "#1a1a1a",
        "off-white": "#f5f5f5",
      },
    },
  },
  plugins: [],
};
export default config;

