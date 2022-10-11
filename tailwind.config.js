/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-background': "url('./images/pattern-background-mobile.svg')",
        'desktop-background' : "url('./images/pattern-background-desktop.svg')"
      },
      colors: {
        'paleBlue': 'hsl(225, 100%, 94%)',
        'brightBlue': 'hsl(245, 75%, 52%)',

        'veryPaleBlue': 'hsl(225, 100%, 98%)',
        'desaturatedBlue': 'hsl(224, 23%, 55%)',
        'darkBlue': 'hsl(223, 47%, 23%)'
      },
      fontFamily: {
        redhat: "'Red Hat Display', sans-serif",
        
      }
    },
  },
  plugins: [],
}
