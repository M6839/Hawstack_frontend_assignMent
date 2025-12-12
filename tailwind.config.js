/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        bounceX: {
      '0%, 100%': { transform: 'translateX(0)' },
      '50%': { transform: 'translateX(20px)' },
    }
      },
      animation: {
        bounceY: "bounceY 4s ease-in-out infinite",
         bounceX: 'bounceX 4s infinite',
      },

    },
  },
  plugins: [],
}
