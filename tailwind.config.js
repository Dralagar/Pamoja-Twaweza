/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '3rem',
      },
    },
    extend: {
      colors: {
        primary: {
          blue: '#0089C7',
          yellow: '#FFE66D',
          orange: '#F26522',
        },
        custom: {
          black: '#000000',
          gray: {
            light: '#f9fafb',
            DEFAULT: '#6b7280',
          },
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("@tailwindcss/nesting"),
    // Add other plugins if needed
  ],
};