import type { Options } from 'tsup';

export default <Options>{
    entry: [
        'config/webpack/buildWebpackConfig.ts',
        'config/webpack/buildDevServer.ts',
        'config/webpack/buildLoaders.ts',
        'config/webpack/buildPlugins.ts',
        'config/webpack/buildResolvers.ts',
    ],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    sourcemap: true,
    outDir: 'dist',
    bundle: false,
    skipNodeModulesBundle: true,
};
