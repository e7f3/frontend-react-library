import path from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import webpack from 'webpack';

import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return {
        plugins: [ new TsconfigPathsPlugin() ],
        extensions: [
            '.tsx',
            '.ts',
            '.js', 
        ],
        preferAbsolute: true,
        modules: [ options.paths.src, 'node_modules' ],
        mainFiles: [ 'index' ],
        alias: {
            '@': path.resolve(options.rootPath, './src'),
            '@library/build': path.resolve(options.rootPath, 'frontend-react-library/packages/build'),
            '@library/ui': path.resolve(options.rootPath, 'frontend-react-library/packages/ui'),
            '@library/core': path.resolve(options.rootPath, 'frontend-react-library/packages/core'),
        },
    };
}
