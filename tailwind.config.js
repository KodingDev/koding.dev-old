// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
    mode: "jit",
    purge: ["./src/pages/**/*.{js,ts,jsx,tsx}"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: {
                light: colors.black.light,
                DEFAULT: "#212121",
                dark: "#1B1B1B",
            },
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            theme: {
                primary: "#A563A6",
                secondary: "#65498C",
            },
            text: {
                primary: "#FFFFFF",
                secondary: "#C4C4C4"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};