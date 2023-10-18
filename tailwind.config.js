/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.css",
  ],
  theme: {
    extend: {
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
        'black': '#000000',
        'button-color': '#f70c9d',
        'head-color': '#242565',
        'gradient-color1': '#7b46ed',
        'gradient-color2' : '#22ccc2',
        'account-blue' : '#6176BA',
      },
  },
  plugins: [],
}
}
