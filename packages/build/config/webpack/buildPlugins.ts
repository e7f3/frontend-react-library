import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import DotenvWebpack from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { SharedPathPlugin } from './plugins/sharedPathPlugin.js';
import { BuildOptions } from './types/config.js';


export function buildPlugins({
    paths,
    isDev,
    project,
    apiUrl,
    rootPath,
    analyze,
}: BuildOptions & { analyze?: boolean }): webpack.WebpackPluginInstance[] {
    const plugins = [
        // HTML document generation
        new HtmlWebpackPlugin({ template: paths.html }),
        // CSS files generation
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        // Progress bar in the terminal
        new webpack.ProgressPlugin(),
        // Environment variables
        new DotenvWebpack({
            path: path.join(rootPath, '.env.local'),
            safe: path.join(rootPath, 'env.example'),
            systemvars: true,
            allowEmptyValues: true,
            silent: true,
            defaults: true,
        }),
        // Global variables
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __PROJECT__: JSON.stringify(project),
            __API_URL__: JSON.stringify(apiUrl),
        }),
        // Plugin to correctly resolve absolute paths in the project
        SharedPathPlugin,
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    // Production optimizations
    if (!isDev) {
        plugins.push(
            new CompressionPlugin({
                algorithm: 'gzip',
                test: /\.(js|css|html|svg)$/,
                threshold: 10240,
                minRatio: 0.8,
            })
        );
    }

    // Bundle analyzer (optional)
    if (analyze) {
        plugins.push(
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: true,
                reportFilename: 'bundle-report.html',
            })
        );
    }

    return plugins;
}
