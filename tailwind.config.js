module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        xl: "5rem",
        "2xl": "10rem",
      },
    },
    extend: {
      height: {
        128: "32rem",
      },
      colors: {
        brand: {
          DEFAULT: "#17688D",
          light: "#1d8cbf",
        },
        secondary: {
          DEFAULT: "#011B32",
          dark: "#001528",
          light: "#1F384E",
        },
      },
      transitionProperty: {
        height: "height",
        background: "background",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
