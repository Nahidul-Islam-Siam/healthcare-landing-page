/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-custom': 'radial-gradient(circle, #020043 100%, #0200434D 30%)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

