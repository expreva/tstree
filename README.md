# TSTree

> A parser that produces an ESTree-compatible AST for TypeScript code.

Fork of [`@typescript-eslint/typescript-estree`](https://typescript-eslint.io/packages/typescript-estree) to run on the web.

## Install

Install from NPM module.

```sh
npm install --save @expreva/tstree
```

It's installed in `node_modules/@expreva/tstree`.

The module is built for these targets.

### ES Module

By using `import '@expreva/tstree'`, it loads from `build/esm`.

### CommonJS

By using `require('@expreva/tstree')`, it loads from `build/cjs`.

### Web

A minified bundle is provided in `build/web`.

- Copy `tstree.js`, load script in HTML, and use global `tstree`
- Copy `tstree.js.map` for source map

For example, an NPM script in `package.json` could copy to your project's `public` folder.

```json
{
  "scripts": {
    "copy": "cp node_modules/@expreva/tstree/build/web/tstree.* ./public"
  }
}
```

## Usage

```ts
import tstree from '@expreva/tstree'

tstree.parse(`

const message: string = 'Hello';

console.log(message)

`) // Syntax tree
```

## Changes

- Forked from `typescript-eslint` at version `6.1.0`
- Split off the `typescript-estree` package

  ```sh
  git clone https://github.com/typescript-eslint/typescript-eslint tstree
  cd tstree
  git filter-branch --prune-empty --subdirectory-filter packages/typescript-estree  main
  git remote set-url origin https://github.com/expreva/tstree.git
  git push -u origin main
  ```

- Remove use of `fs`, `is-glob`, `globby`
- Shim use of `path`

- Copy shared TypeScript config files

  ```
  cp ../typescript-eslint/tsconfig.base.json
  cp ../typescript-eslint/packages/types/tsconfig.build.json tsconfig-types.build.json
  cp ../typescript-eslint/packages/visitor-keys/tsconfig.build.json tsconfig-visitor-keys.build.json
  ```

- Make it build
- Make it run

- Migrate to `esbuild` to bundle for web, CommonJS, and ES Module

- Publish NPM module `@expreva/tstree`
