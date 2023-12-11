// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  purge: {
    enabled: true,
    content: [
      './src/**/*.{html,ts}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
