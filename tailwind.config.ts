import type { Config } from "tailwindcss";

export default {
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
        primary: "#003365",
      },
    },
    screens: {
      xxs: "200px",
      xs: "390px",
      sm: "550px",
      md: "768px",
      lg: "1024px",
      xl: "1360px",
      "2xl": "1920px",
      "3xl": "2560px",
    },
  },
  plugins: [],
} satisfies Config;
