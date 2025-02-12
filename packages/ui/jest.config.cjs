const baseConfig = require('@library/build/config/jest/jest.config');
const path = require('path');

/** @type {import('jest').Config} */
module.exports = {
    ...baseConfig,
    rootDir: __dirname,
    moduleNameMapper: {
        ...baseConfig.moduleNameMapper,
       
        '^shared/(.*)$': path.resolve(__dirname, './shared/$1')
    }
}; 
