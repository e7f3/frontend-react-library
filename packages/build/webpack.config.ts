import * as path from 'path'
import webpack from 'webpack'

import { buildWebpackConfig } from './config/webpack/buildWebpackConfig'
import { BuildEnv } from './config/webpack/types/config'

export default (env: BuildEnv, rootPath = __dirname) => {
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

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        open,
        project,
    })

    return config
}
