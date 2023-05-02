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
        'primary-dark': colors.primaryDark
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
      },
      backgroundColor: {
        primary: colors.secondary,
        secondary: colors.primary,
        ternary: colors.ternary,
        contrast: colors.contrast,
      },
      backgroundImage: {
        connectWallet: 'url(../../public/images/connect-wallet-bg.png)',
        connectWalletList:
          'url(../../public/images/connect-wallet-list-bg.png)',
        faq: 'url(../../public/images/faq-page-bg.png)',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        albert: ['var(--font-albert-text)'],
      },
      boxShadow: {
        sidebar: '-20px 0px 80px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
