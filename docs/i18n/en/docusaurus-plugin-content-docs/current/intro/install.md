---
title: Installing WebJET Elements
sidebar_label: Installation
---

<head>
  <title>How to get WebJET Elements for your project</title>
  <meta name="description" content="Zahrňte WebJET Elements do svojho projektu pomocou CDN alebo ho nainštalujte pomocou npm." />
</head>

Include WebJET Elements in your project using **CDN** or install it using **npm**.

## Installing with npm

Using the npm package manager, you can insert Elements source files into almost any project.

Make sure you have Node.js installed on your computer before proceeding. To set up the environment for Elements, see [these instructions](environment.md).

Install WebJet Elements using npm:

```shell
$ npm install wj-elements
```

If there was a previous installation of the Ionic CLI, it will need to be uninstalled due to a package name change.

```shell
$ npm uninstall wj-elements
```

## Installation with CDN

Use CDN and include compiled CSS and JS files of WebJET Elements in your project.

```html
<script type="module" src="https://cdn.jsdelivr.net/gh/lencys/wj-elements@dddb1c19734498c5b2a17f2e6ed605d0cd40d02e/wj-master.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lencys/wj-elements@e5cdd8566b4acaad5c11040bfbb4e09e170074c9/style.css" />
```
