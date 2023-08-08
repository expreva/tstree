#!/usr/bin/env node

const esbuild = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');
const tsPaths = require('esbuild-ts-paths');
const { globPlugin } = require('esbuild-plugin-glob');
const { dtsPlugin } = require("esbuild-plugin-d.ts");

const plugins = [
  // dtsPlugin(),
  globPlugin(),
  // tsPaths('./tsconfig.build.json'),
  nodeExternalsPlugin()
]

const configCommon = {
  entryPoints: ['./src/**/*.ts', './src/**/*.tsx'],
  bundle: false,
  minify: true,
  platform: 'node',
  sourcemap: true,
  sourcesContent: false,
  jsx: 'automatic',
  plugins,
}

const args = process.argv.slice(2)
const configs = []

if (!args.length || args.includes('cjs')) {
  console.log('Building for CommonJS')
  configs.push({
    ...configCommon,
    format: 'cjs',
    outdir: 'build/cjs',
    target: 'node12',
  })
}

if (!args.length || args.includes('esm')) {
  console.log('Building for ES Module')
  configs.push({
    ...configCommon,
    format: 'esm',
    outdir: 'build/esm',
    target: 'node14',
  })
}

Promise.all(configs.map(esbuild.build)).catch((error) => {
  console.error(error);
  process.exit(1);
});
