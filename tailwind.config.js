/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(206, 50% ,15%)",
        input: "hsl(206 ,100%, 50%)",
        ring: "hsl(206 ,100%, 50%)",
        gradient: {
          dark: "linear-gradient(to top left, #9400d3, #4b0082);",
          light: "linear-gradient(to top left, #9400d3, #4b0082);",
        },
        background: {
          DEFAULT: "hsl(206 ,65%, 4%)",
        },

        foreground: "hsl(206 ,10%, 97.5%)",
        primary: {
          DEFAULT: "hsl(206 100% 50%)",
          foreground: "hsl(206 ,10%, 5%)",
        },
        secondary: {
          DEFAULT: "hsl(206 ,50%, 15%)",
          foreground: "hsl( 206 ,10%, 97.5%)",
        },
        destructive: {
          DEFAULT: "hsl(0 62.8% 30.6%)",
          foreground: "hsl(0 62.8% 30.6%)",
        },
        muted: {
          DEFAULT: "hsl( 206 ,50%, 15%)",
          foreground: "hsl(206 ,10%, 55%)",
        },
        accent: {
          DEFAULT: "hsl(206 ,45%, 6.5%)",
          foreground: "hsl(206 ,10%, 97.5%)",
        },
        popover: {
          DEFAULT: "hsl(206 ,45%, 6.5%)",
          foreground: "hsl(206 ,10%, 97.5%)",
        },
        card: {
          DEFAULT: "hsl(206 ,45%, 6.5%)",
          foreground: "hsl(206 ,10%, 97.5%)",
        },
      },
    },
  },
  plugins: [],
};
