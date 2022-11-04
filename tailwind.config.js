module.exports = {
    content: ['./**/*.tsx'],
    theme: {
        extend: {
            colors: {
                brownRed: '#6B184E',
                lightYellow: '#E4AB50',
                lightGray: '#FAFAFA',
                main: '#FFCB05',
            },
        },
    },
    plugins: [],
    corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};
