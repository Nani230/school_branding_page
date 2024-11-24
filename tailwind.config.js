// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "custom-gradient":
                    "linear-gradient(169.02deg, #B2EBF2 -58.33%, #4F5EA2 60.57%)",
            },
            colors: {
                primary: "#172B85",
                secondary: "#4F5EA2",
                cardtext: "#606F7B",
            },
            boxShadow: {
                custom: "0px 5px 15px rgba(0, 0, 0, 0.35)",
            },
            fontFamily: {
                sans: ["Open Sans", "sans-serif"],
                inter: ["Inter", "sans-serif"],
                mono: ["Roboto Mono", "monospace"],
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                ".no-scrollbar": {
                    /* Hide scrollbar for Chrome, Safari and Opera */
                    "-ms-overflow-style": "none" /* IE and Edge */,
                    "scrollbar-width": "none" /* Firefox */,
                },
                ".no-scrollbar::-webkit-scrollbar": {
                    display: "none" /* Chrome, Safari, and Opera */,
                },
            });
        },
    ],
};
