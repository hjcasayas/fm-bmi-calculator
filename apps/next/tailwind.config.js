/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      'blue': '#345FF6',
      'gunmetal': '#253347',
      'dark-electric-blue': '#5E6E85',
      'border': '#D8E2E7',
    },
    extend: {
      fontFamily: {
        sans: ['var(--inter-font)']
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    theme: []
  }
}

