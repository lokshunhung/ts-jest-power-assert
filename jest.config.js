/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    preset: 'ts-jest',
    globals: {
        'ts-jest': {
            babelConfig: {
                presets: [
                    ['power-assert'], // power-assert ast transforms
                ],
            },
        },
    },
};

module.exports = config;
