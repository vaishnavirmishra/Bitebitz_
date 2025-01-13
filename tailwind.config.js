/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'roboto-serif': ['Roboto Serif', 'serif']
      },
      spacing: {
        '62': '15.5rem',
        '68':'21rem',
        '128': '30rem',
        '88': '22rem',
        '100': '26rem'
      },
      boxShadow: {
        'right-heavy': '0px 3px 4px rgba(0, 0, 0, 0.1), 4px 0px 4px rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
}