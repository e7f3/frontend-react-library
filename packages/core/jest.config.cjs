// eslint-disable-next-line @typescript-eslint/no-require-imports
const baseConfig = require('@library/build/config/jest/jest.config');

/** @type {import('jest').Config} */
module.exports = {
    ...baseConfig,
    rootDir: __dirname,
}; 
