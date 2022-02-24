<p align="center">
  <a href="https://www.npmjs.com/package/@frsource/autoresize-textarea">
    <img src="https://img.shields.io/npm/v/@frsource/autoresize-textarea" alt="NPM version badge">
  </a>
  <a href="https://bundlephobia.com/result?p=@frsource/autoresize-textarea" title="Visit bundlephobia for more details!">
    <img src="https://img.shields.io/bundlephobia/minzip/@frsource/autoresize-textarea" alt="Core bundle size badge. Data from bundlephobia.com">
  </a>
  <a href="https://github.com/semantic-release/semantic-release">
    <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="semantic-relase badge">
  </a>
  <a href="https://bundlephobia.com/result?p=@frsource/autoresize-textarea">
    <img src="https://badgen.net/bundlephobia/tree-shaking/@frsource/autoresize-textarea" alt="Tree shaking supported">
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
  .
  <a href="#contribution">Contribution</a>
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
    <br>Performant & small bundle size.
    <br>Published as separate bundles for JS ES5 or modern browsers thanks to <a href="https://www.npmjs.com/package/microbundle">microbundle</a>.
    <br>Written completely in <a href="https://www.typescriptlang.org">typescript</a>.</i>
    <br>Published under [MIT](https://opensource.org/licenses/MIT) license.</i>
  <br>
  <br>
</p>

## Quick start

### ES/Typescript

```ts
import { attach } from "@frsource/autoresize-textarea";
const textarea = document.querySelector("textarea");
attach(textarea);
```

### UMD

```js
const textarea = document.querySelector("textarea");
  window.autoresizeTextarea.attach(textarea);
```

For working example, check out [our demo](https://www.frsource.org/autoresize-textarea).

## Questions

Don’t hesitate to ask a question directly on the [discussions board](https://github.com/FRSOURCE/autoresize-textarea/discussions)!

## Changelog

Changes for every release are documented in the [release notes](https://github.com/FRSOURCE/autoresize-textarea/releases) and [CHANGELOG file](https://github.com/FRSOURCE/autoresize-textarea/tree/master/CHANGELOG.md).

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022-present, Jakub FRS Freisler, FRSOURCE
