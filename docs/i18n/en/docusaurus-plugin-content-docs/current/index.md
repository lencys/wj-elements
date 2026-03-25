---
title: Introduction to WebJET Elements
sidebar_label: Home
slug: /
hide_table_of_contents: true
---

import DocsCards from '@components/global/DocsCards';

<head>

{' '}

<title>A modern set of user interface tools based on web components</title>
<meta
  name="description"
  content="WebJET Elements is a modern set of web component UI tools designed to simplify web application development."
/>

<link rel="canonical" href="https://elements.webjet.sk/" />
<link rel="alternate" href="https://elements.webjet.sk/" hreflang="x-default" />
<link rel="alternate" href="https://elements.webjet.sk/" hreflang="en" />
<meta property="og:url" content="https://elements.webjet.sk/" />

<script data-base-path="/wje-elementy/"></script>
<script type="module" src="/wje-elementy/wje-master.js"></script>

<link rel="stylesheet" href="/wje-elementy/light.css" />
<link rel="stylesheet" href="/wje-elementy/dark.css" />
<link rel="stylesheet" href="/wje-elementy/styles.css" />

</head>

WebJET Elements is a modern UI component library built on web components. It provides encapsulated, reusable elements that work in plain HTML/JavaScript as well as in applications built with React or Vue.

Once the library is loaded, the components are registered as custom elements, so you can use them directly in markup such as `<wje-button>`, `<wje-card>`, or `<wje-dialog>`.

Start creating your application [by installing WebJET elements](intro/install.md).

<intro-end />

<DocsCards>

{' '}
<a href="intro/install">
  <wje-card>
    <wje-card-header>
      <wje-icon name="world-download" size="large"></wje-icon>
      <wje-card-title>Installation Guide</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Detailed installation walkthrough for WebJET Elements.</p>
    </wje-card-content>
  </wje-card>
</a>

{' '}
<a href="components">
  <wje-card>
    <wje-card-header>
      <wje-icon name="layout-dashboard" size="large"></wje-icon>
      <wje-card-title>Components</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Browse the full catalog of available WebJET components.</p>
    </wje-card-content>
  </wje-card>
</a>

{' '}
<a href="api/layout">
  <wje-card>
    <wje-card-header>
      <wje-icon name="layout" size="large"></wje-icon>
      <wje-card-title>Layout</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Learn how to build responsive page layout with WebJET Elements.</p>
    </wje-card-content>
  </wje-card>
</a>

{' '}
<a href="theming/basics">
  <wje-card>
    <wje-card-header>
      <wje-icon name="brush" size="large"></wje-icon>
      <wje-card-title>Styling</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Customize component visuals using design tokens and CSS variables.</p>
    </wje-card-content>
  </wje-card>
</a>

</DocsCards>

## Overview

WebJET Elements is a component library for modern web applications and micro-frontend solutions. It is built on web platform standards, which means it is not tied to a single framework or rendering runtime.

Key features of WebJET Elements:

### Comprehensive set of user interface tools

WebJET Elements includes a wide range of controls and user interface components that are optimized for web interfaces. These components cover a variety of functions and are designed to be easily integrated into any web application.

### Integration with frameworks and framework-free apps

The components can be used on their own or integrated into React and Vue applications, which makes adoption easier in both greenfield and existing projects.

### Stable and framework-independent foundation

WebJET Elements relies on standards such as Custom Elements, Shadow DOM, and ES modules. As a result, components have a stable API and can remain useful even outside of one specific framework ecosystem.

### Using Shadow DOM

WebJET Elements leverages the Shadow DOM and provides encapsulation of the style and behavior of its components, supporting a cleaner and more maintainable codebase.

### Customization and flexibility

Component appearance is customized primarily through CSS variables, bundled light/dark themes, and CSS Shadow Parts where appropriate.

### Optimized for performance and reuse

The components are designed to be reusable, self-contained, and practical even in larger applications.

**In the WebJET Elements documentation you will find detailed examples to help you create exceptional web applications quickly and efficiently.**

## License

Elements is a free and open source project, released under the MIT permissive license. This means that it can be used for free in personal or commercial projects. MIT is the same license used by such popular projects as jQuery and Ruby on Rails.

This documentation content (located in the <a href="https://github.com/lencys/wj-elements" target="_blank">WJ Elements</a> repository) is licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.</a> license.
