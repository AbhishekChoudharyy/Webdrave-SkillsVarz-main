/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spacebold: ['space-bold'],
        spacelight: ['space-light'],
        spaceregular: ['space-regular'],
      },
      colors: {
        purple: '#5B68E4',
        heading: '#A6A6A6',
      },
    },
  },
  plugins: [],
};
