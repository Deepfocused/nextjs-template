const { nextui } = require('@nextui-org/react');

/** @type {import("tailwindcss").Config} */
module.exports = {
    // 끄기
    corePlugins: {
        preflight: false,
    },
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    darkMode: 'class',
    plugins: [nextui()],
};
