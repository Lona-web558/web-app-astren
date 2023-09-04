/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "starting-screen": "url('/backgrounds/bg-screen-1.png')",
      },
    },
  },
  plugins: [],
};
