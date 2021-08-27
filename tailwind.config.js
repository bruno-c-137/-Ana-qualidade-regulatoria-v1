module.exports = {
  purge: ['./src/*/.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '768px',
      'md': '960px',
      'lg': '1194px',
    },
    extend: {
      colors: {
        primary: 'rgba(var(--primary), var(--tw-bg-opacity, 1))',
        secondary: 'rgba(var(--secondary), var(--tw-bg-opacity, 1))',
        tertiary: 'rgba(var(--tertiary), var(--tw-bg-opacity, 1))',
        additional: 'rgba(var(--additional), var(--tw-bg-opacity, 1))',
        neutral: 'rgba(var(--neutral), var(--tw-bg-opacity, 1))',
        gray: {
          '1' : 'rgba(var(--gray-1), var(--tw-bg-opacity, 1))',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}