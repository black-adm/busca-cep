/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bege': '#F7C88A',
        'acid': '#C4E456',
        'dark': '#080808',
        'link-blue': '#1DA1F2',
        'primary-red': '#C00',
        'primary-green': '#4C9A2A',
        'silver': '#656461'
      }
    },
  },
  plugins: [],
}

