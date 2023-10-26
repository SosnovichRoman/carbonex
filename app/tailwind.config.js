/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        'play': 'Play',
      },
      transitionTimingFunction: {
        'ease': 'ease',
      },
      colors:{
        dark: '#323232',
        lightBlue: '#007FA7',
        darkBlue: '#006F92'
      }
    },
  },
  plugins: [],
}