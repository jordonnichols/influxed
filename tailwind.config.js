/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        'blue-500': '#2276FC',
        'yellow-100': '#fef7da',
        // grey: '#111',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
        zero: 0.8,
      },
      fontSize: {
        // '5xl': '2.5rem',
        // '6xl': '2.75rem',
        // '7xl': '4.5rem',
        '8xl': '5.5rem',
        '9xl': '8rem',
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
        '13xl': '18rem',
        '14xl': '22rem',
      },
      borderRadius: {
        '4xl': '88px',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      screens: {
        sm: { min: '425px' },
        md: { min: '748px' },
        lg: { min: '1024px' },
        xl: { min: '1232px' },
        '2xl': { min: '1440px' },
        '3xl': { min: '1920px' },
      },
    },
  },
  plugins: [],
}
