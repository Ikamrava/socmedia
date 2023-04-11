/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {

      backgroundImage: {
        'login-back': "url('/images/bg.jpg')",
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

