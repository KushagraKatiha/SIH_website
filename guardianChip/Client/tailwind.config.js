/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./src/components/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    fontFamily:{
      display:[
          'Share Tech Mono', 'monospace'
    ]},
    extend: {},
  },
  plugins: [],
}