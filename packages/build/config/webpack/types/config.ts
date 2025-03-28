export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    entry: string
    build: string
    html: string
    src: string
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    port: number
    open: boolean
    project: 'frontend' | 'jest',
    rootPath: string
    apiUrl?: string
}

export interface BuildEnv {
    mode: BuildMode
    port: number
    apiUrl?: string
}
