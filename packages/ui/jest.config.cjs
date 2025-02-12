// eslint-disable-next-line @typescript-eslint/no-require-imports
const baseConfig = require('@library/build/config/jest/jest.config');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

/** @type {import('jest').Config} */
module.exports = {
    ...baseConfig,
    rootDir: __dirname,
    moduleNameMapper: {
        ...baseConfig.moduleNameMapper,
       
        '^shared/(.*)$': path.resolve(__dirname, './shared/$1'),
    },
}; 
