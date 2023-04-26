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
      borderColor: {
        primary: colors.primary,
        contrast: colors.contrast,
      },
      textColor: {
        primary: colors.primary,
        secondary: colors.secondary,
      },
      backgroundColor: {
        primary: colors.secondary,
        secondary: colors.primary,
        contrast: colors.contrast,
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
  plugins: [],
};
