/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        notebookBg: "#F9F6EF",
        paper: "#FCFAF5",
        notebookLine: "#D6E3F5",
        inkPrimary: "#203A74",
        inkSecondary: "#355CA8",
        btnPrimary: "#2F4D9E",
        btnHover: "#3F63C7",
        notebookBorder: "#B8C8E4",
      },
      fontFamily: {
        hand: ['"Patrick Hand"', '"Caveat"', 'cursive', 'sans-serif'],
        caveat: ['"Caveat"', '"Patrick Hand"', 'cursive'],
        body: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        paper: "0 4px 15px -2px rgba(32, 58, 116, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        paperLg: "0 10px 25px -3px rgba(32, 58, 116, 0.12), 0 4px 8px -2px rgba(0, 0, 0, 0.06)",
        tape: "0 1px 3px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
}
