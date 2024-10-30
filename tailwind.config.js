// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '260px', // Small screens and up
      md: '768px', // Medium screens and up
      lg: '1024px', // Large screens and up
    
    },
    extend: {
      colors: {
        textcolor: "#4F5EA2",
        headingcolor: "#172B85",
        cardtext: "#606F7B"
      },
      boxShadow: {
        'custom': '0px 5px 15px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          /* Hide scrollbar for Chrome, Safari and Opera */
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none', /* Chrome, Safari, and Opera */
        },
      });
    },
  ],
}
