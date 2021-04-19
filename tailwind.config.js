module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'gray-dark-blue': '#33323D',
        'dark-blue': '#203A4C',
        'desaturated-cyan': '#5FB4A2',
        'very-light-gray': '#FAFAFA',
        'light-gray': '#EAEAEB',
        'bright-red': '#F43030',
      },
      fontSize: {
        sectionTitleLarge: [
          '50px',
          { letterSpacing: '-0.45px', lineHeight: '50px' },
        ],
        sectionTitleMedium: [
          '40px',
          { letterSpacing: '-0.36px', lineHeight: '42px' },
        ],
        sectionTitle: [
          '32px',
          { letterSpacing: '-0.36px', lineHeight: '42px' },
        ],
        sectionBody: ['15px', { lineHeight: '30px' }],
        sectionTag: ['13px', { lineHeight: '30px' }],
        sectionTagLarge: ['16px', { lineHeight: '30px' }],
        btnLabel: ['12px', { letterSpacing: '2px', lineHeight: '14px' }],
        inputWarning: ['10px', { lineHeight: '12px' }],
      },
      fontFamily: {
        title: ['"Ibarra Real Nova"', 'serif'],
        body: ['"Public Sans"', 'sans-serif'],
      },
      width: {
        '3/8': '37.5%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
