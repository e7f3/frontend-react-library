import * as path from 'path'
import { Configuration } from 'webpack'

import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import {
    BuildEnv, BuildOptions 
} from './types/config'


function createConfig(
    options: BuildOptions
): Configuration {
    const {
        mode, paths, isDev 
    } = options
    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        module: { rules: buildLoaders(options), },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}

export const buildWebpackConfig = (env: BuildEnv, rootPath = __dirname): Configuration => {
    const paths = {
        entry: path.resolve(rootPath, 'src', 'index.tsx'),
        html: path.resolve(rootPath, 'public', 'index.html'),
        build: path.resolve(rootPath, 'dist'),
        src: path.resolve(rootPath, 'src'),
    }

    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const PORT = env.port || 3000
    const open = true
    const project = 'frontend'

    const config: Configuration = createConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        open,
        project,
    })

    return config
}