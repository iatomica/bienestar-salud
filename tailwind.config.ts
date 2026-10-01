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
        background: "#fff9fb",
        surface: {
          DEFAULT: "#ffffff",
          subtle: "#fff1f6",
          muted: "#fce7f3",
        },
        charcoal: {
          DEFAULT: "#1e1b2e",
          secondary: "#47435a",
          muted: "#757088",
          light: "#a39eb8",
        },
        risus: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899", // Primary Risus Pink
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
          950: "#500724",
        },
        rainbow: {
          pink: "#f472b6",
          purple: "#c084fc",
          violet: "#a855f7",
          blue: "#38bdf8",
          teal: "#2dd4bf",
          green: "#34d399",
          yellow: "#fde047",
          orange: "#fb923c",
          coral: "#fb7185",
        },
      },
      borderRadius: {
        container: "24px",
        card: "20px",
        input: "14px",
        puff: "28px",
      },
      boxShadow: {
        soft: "0 2px 10px -2px rgba(236, 72, 153, 0.05), 0 1px 4px -1px rgba(30, 27, 46, 0.03)",
        elevated: "0 12px 30px -6px rgba(236, 72, 153, 0.12), 0 4px 12px -2px rgba(30, 27, 46, 0.04)",
        puff: "0 20px 45px -10px rgba(236, 72, 153, 0.18), 0 0 25px 0 rgba(168, 85, 247, 0.08)",
        modal: "0 25px 50px -12px rgba(236, 72, 153, 0.25), 0 0 30px 0 rgba(56, 189, 248, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
