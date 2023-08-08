#!/usr/bin/env node

const esbuild = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');
const tsPaths = require('esbuild-ts-paths');
const { globPlugin } = require('esbuild-plugin-glob');
const { dtsPlugin } = require("esbuild-plugin-d.ts");

Promise.all([
  esbuild.build({
    entryPoints: ['./src/**/*.ts', './src/**/*.tsx'],
    outdir: 'dist',
    bundle: false,
    minify: true,
    format: 'cjs',
    platform: 'node',
    sourcemap: true,
    sourcesContent: false,
    jsx: 'automatic',
    target: 'node12',
    plugins: [
        // dtsPlugin(),
        globPlugin(),
        // tsPaths('./tsconfig.build.json'),
        nodeExternalsPlugin()
    ],
  }),
  // esbuild.build({
  //   entryPoints: ['./src/**/*.ts', './src/**/*.tsx'],
  //   outdir: 'dist/es',
  //   bundle: false,
  //   minify: true,
  //   format: 'esm',
  //   platform: 'node',
  //   jsx: 'automatic',
  //   sourcemap: true,
  //   sourcesContent: false,
  //   target: 'node14',
  //   plugins: [dtsPlugin(), globPlugin(), tsPaths('./tsconfig.json'), nodeExternalsPlugin()],
  // }),
]).catch((error) => {
  console.error(error);
  process.exit(1);
});
