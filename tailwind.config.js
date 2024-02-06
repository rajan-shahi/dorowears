/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef6fa",
          100: "#cde3f1",
          150: "#abd0e8",
          200: "#8abddf",
          250: "#68aad6",
          300: "#4797cd",
          350: "#3282b8",
          400: "#296a97",
          450: "#205375",
          500: "#173b54",
          550: "#0e2332",
          600: "#050c11",
        },
      },
    },
  },
  plugins: [],
};
