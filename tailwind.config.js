module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}", // Adjust paths based on your project structure
    ],
    theme: {
        extend: {
            colors: {
                primary: '#303135',
                primaryDark: '#2A2A2E',
                primaryDarkOne: '#313236',
                primaryDarkTwo: '#212126',
                secondary: '#919394',
                tertiary: '#D4D5D8',
                accent: '#0ECD89',

            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                "IBM-Plex-Mono": ['IBM Plex Mono', 'monospace'],
            },
        },
    },
    plugins: [],
};