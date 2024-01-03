/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary
        SoftredRed: 'hsl(7, 99%, 70%)',
        // graphic design text
        DarkDesaturatedCyan: 'hsl(167, 40%, 24%)',
        // photography text
        DarkBlue: 'hsl(198, 62%, 26%)',
        // footer
        DarkModerateCyan: 'hsl(168, 34%, 41%)',
        // nuetral
        VeryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
        VeryDarkGrayishBlue:' hsl(213, 9%, 39%)',
        DarkGrayishBlue: 'hsl(232, 10%, 55%)',
        GrayLishBlue: 'hsl(210, 4%, 67%)',
        fatedWhite: 'hsla(0, 0%, 100%, 0.3)'
      },
      fontFamily: {
        Barlow: ['Barlow', 'sans-serif'],
        Fraunces: ['Frauses', 'serif']
      },
      spacing: {
        desktop: '45rem'
      }
    },
  },
  plugins: [],
}

