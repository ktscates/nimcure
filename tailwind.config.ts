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
        dark: "#2a2a2a",
        grey: "#808080",
        blue: "#1F5AF4",
        gray: "#676767",
        dark_blue: "#0148FF",
        dark_grey: "#827F98",
        light_blue: "#276DF7",
        unpaid: "#F42C1F",
        background: "#CFCFCF",
        page: "#262626",
        completed: "#01A85A",
        paid: "#FF7A00",
      },
      fontFamily: {
        primary: ["Gilroy", "sans-serif"], // Add your custom font
      },
    },
  },
  plugins: [],
} satisfies Config;
