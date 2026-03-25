---
title: Environment configuration
---

<head>
  <title>Environment Configuration | Node & NPM Environment for WebJET App Setup</title>
  <meta
    name="description"
    content="To work with WebJET Elements, prepare a development environment with Node.js, npm, a code editor, and a modern browser with ES module support."
  />
</head>

To work with WebJET Elements you mainly need **Node.js** and **npm**. Because the library relies on **Custom Elements**, **Shadow DOM**, and **ES modules**, it is best to develop and test in a modern browser.

## What you need

- **Node.js 18 or newer** – for installing the package and building your project locally.
- **npm** – bundled with Node.js and used to manage dependencies.
- **A code editor** – for example [Visual Studio Code](https://code.visualstudio.com/) or [WebStorm](https://www.jetbrains.com/webstorm/).
- **A modern browser** – such as Chrome, Edge, Firefox, or Safari.

## Terminal

When working with WebJET Elements, you will use the terminal to install dependencies, run builds, and start local development servers. You do not need advanced shell knowledge, but basic command-line familiarity is very helpful.

On Windows, **Command Prompt**, **PowerShell**, or **Windows Terminal** work well. On macOS and Linux, the built-in terminal is sufficient.

## Node & npm

The recommended minimum Node.js version is **18+**. You can verify your installed versions with the commands below.

For installation details, see [nodejs.org](https://nodejs.org).

```shell
$ node --version
$ npm --version
```

If you work behind a company proxy, use a private registry, or develop in a monorepo, it is also worth checking your `.npmrc` setup before installation.

## Recommendations

- We recommend using [Git](https://git-scm.com/) for source control.
- If your project uses Vite, webpack, or another bundler, make sure ES module loading is enabled.
- If you plan to use bundled library assets such as icons, prepare a way to serve static files from the `wj-elements` package in your app.
