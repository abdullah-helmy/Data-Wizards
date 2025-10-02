/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      filter: {
        none: 'none',
        invert: 'invert(1)',
      },
    },
  },
  plugins: [
    
  ],
}