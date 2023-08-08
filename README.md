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
- Split off the `typescript-estree` package using `git-filter-repo` ([Splitting a subfolder out into a new repository](https://docs.github.com/en/get-started/using-git/splitting-a-subfolder-out-into-a-new-repository))

  ```sh
  git clone https://github.com/typescript-eslint/typescript-eslint tstree
  cd tstree
  git filter-repo --path packages/typescript-estree
  ```

- Make it run in browser: Remove use of `fs`, `is-glob`, `globby`; Shim use of `path`

- Copy shared TypeScript config files

- Make it build: Migrate to `esbuild` to bundle for web, CommonJS, and ES Module

- Publish NPM module `@expreva/tstree`

