/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    testRegex: [String.raw`.*\.integration-test\.(js|ts)$`],
    preset: 'ts-jest',
};

module.exports = config;
