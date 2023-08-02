import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "node_modules/preline/dist/*.js"],
  plugins: [require("preline/plugin")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-vietn)"],
      },
      colors: {
        primary: "#000A1F",
        secondary: "#02C7FF",
        primaryaccent: "#02C7FF",
        textprimary: "#FAFAFA",
        textsecondary: "#8D8DA4",
        accentred: "#FF3B3A",
        accentgreen: "#39DA8A",
        accentblue: "#5A8DEE",
        accentorange: "#FDAC41",
        accentyellow: "#FEDD49",
        fungray: "#7b89a8",
        funpink: "#00c7ff",
      },
      spacing: {
        130: "27rem",
      },
    },
  },
} satisfies Config;
