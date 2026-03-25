---
title: Installing WebJET Elements
sidebar_label: Installation
---

<head>
  <title>How to get WebJET Elements for your project</title>
  <meta
    name="description"
    content="Install WebJET Elements with npm or load it from a CDN, including the recommended CSS bundles and base-path setup for static assets."
  />
</head>

You can use WebJET Elements in two main ways:

- **via npm** – recommended for apps that use a bundler such as Vite, webpack, or Rollup,
- **via CDN** – useful for prototypes, simple integrations, or static pages.

## Installing with npm

Install the package with npm:

Make sure you have Node.js installed on your computer before proceeding. To set up the environment for Elements, see [these instructions](environment.md).

```shell
$ npm install wj-elements
```

Then import the component bundle and styles into your app:

```js
import 'wj-elements';
import 'wj-elements/style.css';
import 'wj-elements/light.css';

// Optional: include the built-in dark theme
import 'wj-elements/dark.css';
```

### Minimal usage example

```html
<wje-button>Confirm</wje-button>
```

### Assets and base path

Some parts of the library resolve bundled assets relative to the package base path. If your application copies the `dist/` folder to a custom location, set the base path explicitly:

```js
import { setBasePath } from 'wj-elements';

setBasePath('/vendor/wj-elements/dist');
```

This is especially useful when working with icons or components that load files from `dist/assets`.

## Installation with CDN

If you do not want to use a bundler, you can load the prebuilt distribution directly from a CDN.

The recommended setup includes:

- the main module `wje-master.js`,
- the base stylesheet `styles.css`,
- the light theme `light.css`,
- and optionally `dark.css` if you want dark-mode switching.

```html
<script data-base-path="https://cdn.jsdelivr.net/npm/wj-elements@0.3.8/dist/"></script>
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/wj-elements@0.3.8/dist/wje-master.js"
></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/wj-elements@0.3.8/dist/styles.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/wj-elements@0.3.8/dist/light.css"
/>
```

The `data-base-path` attribute helps the library resolve bundled assets correctly in the CDN build.

