import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          trustGreen: '#48FF91',
        },
        fontFamily: {
          bold: ['var(--font-bold)'],
          regular: ['var(--font-regular)'],
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
