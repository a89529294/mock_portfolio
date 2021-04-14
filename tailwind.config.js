module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray-dark-blue': '#33323D',
        'dark-blue': '#203A4C',
        'desaturated-cyan': '#5FB4A2',
        'very-light-gray': '#FAFAFA',
        'light-gray': '#EAEAEB',
        'birght-red': '#F43030',
      },
      fontSize: {
        sectionTitle: [
          '32px',
          { letterSpacing: '-0.36px', lineHeight: '42px' },
        ],
        btnLabel: ['12px', { letterSpacing: '2px', lineHeight: '14px' }],
      },
      fontFamily: {
        title: ['"Ibarra Real Nova"', 'serif'],
        body: ['"Public Sans"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
