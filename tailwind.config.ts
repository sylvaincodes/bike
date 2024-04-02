import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0rem',
        sm: '0rem',
        md: '0rem',
        lg: '0rem',
        xl: '4rem',
        '2xl': '4rem',
      },
      screens: {
        'xs': '320px', // => @media (min-width: 320px){ ... }
        'sm': '575px', // => @media (min-width: 575px){ ... }
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        "2xl": "1440px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        
        "loading": {
          '0%': { opacity: "0" },
          '10%': { height: "0.1" },
          '20%': { height: "0.2" },
          '50%': { height: "0.5" },
          '70%': { height: "0.7" },
          '100%': { height: "1" },
        },
        
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "loading-transition": "loading 1s ease-in-out",
      },
    },
    colors:{
      primary_color: '#00B9D4',
      white:'#FFFFFF',
      black: '#000000',
      btn: '#009EB5',
      bg_hero: '#314D50',
      bg_body:'#243034',
      icon_color:'#51777C',
      icon_border_color:'#068FA4'
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config