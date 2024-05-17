/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        "ffs-red": "hsl(0, 78%, 62%)",
        "ffs-cyan": "hsl(180, 62%, 55%)",
        "ffs-orange": "hsl(34, 97%, 64%)",
        "ffs-blue": "hsl(212, 86%, 64%)",
        // Neutral
        "ffs-very-dark-blue": "hsl(234, 12%, 34%)",
        "ffs-grayish-blue": "hsl(229, 6%, 66%)",
        "ffs-very-light-blue": "hsl(0, 0%, 98%)",
      },
      fontSize: {
        body: "15px",
      },
      fontFamily: {
        "ffs-poppins": ["Poppins", "sans-serif"],
      },
      fontWeight: {
        normal: 200,
        semibold: 400,
        bold: 600,
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
