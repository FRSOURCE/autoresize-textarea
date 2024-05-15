<p align="center">
  <a href="https://www.npmjs.com/package/@frsource/autoresize-textarea">
    <img src="https://img.shields.io/npm/v/@frsource/autoresize-textarea" alt="NPM version badge">
  </a>
  <a href="https://bundlejs.com/?q=%40frsource%2Fautoresize-textarea">
    <img src="https://deno.bundlejs.com/badge?q=@frsource/autoresize-textarea" alt="GZIP size calculated by bundlejs.com">
  </a>
  <a href="https://github.com/semantic-release/semantic-release">
    <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="semantic-release badge">
  </a>
  <a href="https://github.com/FRSOURCE/autoresize-textarea/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/FRSOURCE/autoresize-textarea" alt="license MIT badge">
  </a>
</p>

<h1 align="center">Autoresize Textarea - minimalistic plugin to autosize your textareas! 💪</h1>

<p align="center">
  <a href="#quick-start">Getting Started</a>
  ·
  <a href="https://www.frsource.org/autoresize-textarea" target="_blank">Demo</a>
  ·
  <a href="https://github.com/FRSOURCE/autoresize-textarea/issues">File an Issue</a>
  ·
  <a href="#questions">Have a question or an idea?</a>
  <br>
</p>

<p align="center">
  <br>
  <i>Tiny library which make your textareas fluid.
    <br>Mobile &amp; desktop-friendly
    <br>Performant & with small bundle size (less than 1.2kB!)
    <br>Published as separate bundles for JS ES5 or modern browsers thanks to <a href="https://www.npmjs.com/package/microbundle">microbundle</a>
    <br>Written completely in <a href="https://www.typescriptlang.org">typescript</a></i>
    <br>Published under <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a> license</i>
  <br>
  <br>
</p>

## Quick start

### Installation

```bash
npm install @frsource/autoresize-textarea

yarn add @frsource/autoresize-textarea

pnpm add @frsource/autoresize-textarea
```

### Modern JS/Typescript

```ts
import { attach } from "@frsource/autoresize-textarea";
const textarea = document.querySelector("textarea");
const { detach } = attach(textarea);

// detach plugin whenever you want (e.g. on component unmount)
// detach();
```

### UMD

```js
const textarea = document.querySelector("textarea");
const { detach } = window.autoresizeTextarea.attach(textarea);

// detach plugin whenever you want (e.g. on component unmount)
// detach();
```

For working example, check out [our demo](https://www.frsource.org/autoresize-textarea).

## Questions

Don’t hesitate to ask a question directly on the [discussions board](https://github.com/FRSOURCE/autoresize-textarea/discussions)!

## Changelog

Changes for every release are documented in the [release notes](https://github.com/FRSOURCE/autoresize-textarea/releases) and [CHANGELOG file](https://github.com/FRSOURCE/autoresize-textarea/tree/master/CHANGELOG.md).

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022-present, Jakub FRS Freisler, FRSOURCE
