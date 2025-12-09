import webpack from 'webpack';

import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env'] },
        },
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [{ loader: 'file-loader' }],
    };

    const svgrLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    // Use esbuild-loader in development for 10x faster builds
    // Use ts-loader in production for full type checking
    const typescriptLoader = isDev
        ? {
            test: /\.tsx?$/,
            loader: 'esbuild-loader',
            options: {
                loader: 'tsx',
                target: 'es2020',
            },
            exclude: [
                /node_modules/,
                /\.stories\.tsx$/,
            ],
        }
        : {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: [
                /node_modules/,
                /\.stories\.tsx$/,
            ],
        };

    const cssLoader = buildCssLoader(true);

    return [
        fileLoader,
        svgrLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}
