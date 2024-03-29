/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './node_modules/flowbite/**/*.js',
        './node_modules/tw-elements/dist/js/**/*.js',
    ],
    theme: {
        extend: {},
    },
    plugins: [require('flowbite/plugin'), require('tw-elements/dist/plugin')],
};
