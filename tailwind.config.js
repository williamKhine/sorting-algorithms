/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            'text': '#eefbda',
            'background': '#0c1301',
            'primary': '#bdf075',
            'secondary': '#119776',
            'accent': '#3ed3ea',
        },
        fontSize: {
            sm: '0.750rem',
            base: '1rem',
            xl: '1.333rem',
            '2xl': '1.777rem',
            '3xl': '2.369rem',
            '4xl': '3.158rem',
            '5xl': '4.210rem',
        },
        fontFamily: {
            heading: 'Ubuntu',
            body: 'Ubuntu Mono',
        },
        fontWeight: {
            normal: '400',
            bold: '700',
        },
        container: {
            center: true,
            padding: '1rem',
        },
    },
    plugins: [],
};
