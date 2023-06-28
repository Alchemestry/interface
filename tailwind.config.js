// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('./src/constants/theme/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        'primary-dark': colors.primaryDark,
      },
      borderColor: {
        primary: colors.primary,
        contrast: colors.contrast,
      },
      outlineColor: {
        primary: colors.primary,
        contrast: colors.contrast,
      },
      textColor: {
        primary: colors.primary,
        secondary: colors.secondary,
        ternary: colors.ternary,
      },
      backgroundSize: {
        100: '100% 100%',
        '100_5px': '100% 5px',
      },
      backgroundColor: {
        primary: colors.secondary,
        secondary: colors.primary,
        ternary: colors.ternary,
        contrast: colors.contrast,
      },
      backgroundPosition: {
        '0_0_0_100%': '0 0, 0 100%',
      },
      backgroundImage: {
        connectWallet: 'url(../../public/images/connect-wallet-bg.png)',
        connectWalletList:
          'url(../../public/images/connect-wallet-list-bg.png)',
        faq: 'url(../../public/images/faq-page-bg.png)',
        main: 'url(../../public/images/main-page-bg.png)',
        mainGradient:
          'linear-gradient(90deg, #F4E6B0, #DFB26F), linear-gradient(90deg, #F4E6B0, #DFB26F)',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        albert: ['var(--font-albert-text)'],
        arimo: ['var(--font-arimo-text)'],
      },
      fontSize: {
        '3.5xl': '2rem',
      },
      boxShadow: {
        sidebar: '-20px 0px 80px rgba(0, 0, 0, 0.7)',
        'level-mark': 'inset 2px 0px 5px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
