/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.css",
  ],
  theme: {
    extend: {
      height: {
        '90vh': '90vh',
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        'dm-serif-text': ['DM Serif Text', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'playfair': ['Playfair', 'serif'],
      },
      colors: {
        'text-color': '#fff',
        'main-blue': '#0A3DA6',
        'lighter-blue': '#3e60a7',
        'acc-blue': '#6176BA',
        'black': '#000000',
        'button-color': '#f70c9d',
        'head-color': '#242565',
        'gradient-color1': '#7b46ed',
        'gradient-color2': '#22ccc2',
        'payment-modal-color': '#d5dfe1',
        'checkout-btn': '#9C9494'
      },
      boxShadow: {
        'blue': '0 0 10px rgba(142, 219, 245, 0.966)',
      },
    },
  },
  plugins: [],
};

