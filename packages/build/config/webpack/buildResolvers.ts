import path from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import webpack from 'webpack';

import { BuildOptions } from './types/config.js';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return {
        plugins: [new TsconfigPathsPlugin()],
        extensions: [
            '.tsx',
            '.ts',
            '.js',
        ],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            '@': path.resolve(options.rootPath, './src'),
            '@e7f3/build': path.resolve(options.rootPath, 'frontend-react-library/packages/build'),
            '@e7f3/ui': path.resolve(options.rootPath, 'frontend-react-library/packages/ui'),
            '@e7f3/core': path.resolve(options.rootPath, 'frontend-react-library/packages/core'),
        },
    };
}
