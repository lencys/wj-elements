# WJ Elements
WebJET Elements is a modern set of user interface tools harnessing the power of web components designed to simplify web application development. It provides a collection of encapsulated and reusable elements that can greatly increase the efficiency and maintainability of web development projects. They offer easy integration with React and Vue.

Include WebJET Elements in your project using [CDN](#inštalácia-s-cdn) or install it using [npm](#inštalácia-s-npm).

Documentation: [elements.webjet](https://elements.webjet.sk/)

Source: [https://github.com/lencys/wj-elements](https://github.com/lencys/wj-elements)

Discord: [WJElements](https://discord.com/invite/b5DqKM997s)

## Inštalácia s npm

Using the npm package manager, you can insert Elements source files into almost any project.

Make sure you have Node.js installed on your computer before proceeding. To set up the environment for Elements, see these instructions.

Install WebJet Elements using npm:

```shell
$ npm install wj-elements
```

If there was a previous installation of the Ionic CLI, it will need to be uninstalled due to a package name change.

```shell
$ npm uninstall wj-elements
```

## Inštalácia s CDN

Use CDN and include compiled CSS and JS files of WebJET Elements in your project.

```html
<script type="module" src="https://cdn.jsdelivr.net/gh/lencys/wj-elements@dddb1c19734498c5b2a17f2e6ed605d0cd40d02e/wj-master.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lencys/wj-elements@e5cdd8566b4acaad5c11040bfbb4e09e170074c9/style.css" />
```

### Basic usage

```html
<wj-button>Button</wj-button>
```