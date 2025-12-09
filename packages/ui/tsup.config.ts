import type { Options } from 'tsup';

export default <Options>{
  entry: ['index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  outDir: 'dist',
  bundle: true,
  splitting: true,
  treeshake: true,
  skipNodeModulesBundle: true,
  external: [/\.scss$/],
};
