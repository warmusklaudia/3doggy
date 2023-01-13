/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        alpha: '#0FA3B1',
        'alpha-dark': '#0B737D',
        beta: '#0D1B1E',
      },
    },
  },
  plugins: [],
}
