/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        architech: ["Architects Daughter"],
        macondo: ["Macondo"],
        robotoX: ["Roboto"],
        singleDay: ["Single Day"],
        whisper: ["Whisper"],
      },
    },
    plugins: [],
  },
};
