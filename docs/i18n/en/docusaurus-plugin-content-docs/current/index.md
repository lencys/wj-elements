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
  content="WebJET Elementy sú modernou sadou nástrojov používateľského rozhrania založená na web komponentoch, ktorá je určená na zjednodušenie vývoja webových aplikácií."
/>
<link rel="canonical" href="https://elements.webjet.sk/" />
<link rel="alternate" href="https://elements.webjet.sk/" hreflang="x-default" />
<link rel="alternate" href="https://elements.webjet.sk/" hreflang="en" />
<meta property="og:url" content="https://elements.webjet.sk/" />
<style>{`
    docs-cards > a{
      display: flex;
    }
`}</style>
<script
  type="module"
  src="https://cdn.jsdelivr.net/gh/lencys/wj-elements@dddb1c19734498c5b2a17f2e6ed605d0cd40d02e/wj-master.js"
></script>

</head>

WebJET Elements is a modern set of user interface tools harnessing the power of web components designed to simplify web application development. It provides a collection of encapsulated and reusable elements that can greatly increase the efficiency and maintainability of web development projects.
They offer easy integration with React and Vue.

Start creating your application [by installing WebJET elements](intro/install.md).

<br />
<intro-end />

<DocsCards>

{' '}
<a href="intro/install">
  <wj-card>
    <wj-card-header>
      <wj-icon name="world-download" size="large"></wj-icon>
      <wj-card-title>Installation guide</wj-card-title>
    </wj-card-header>
    <wj-card-content>
      <p>Detailed installation guide for WebJET elements.</p>
    </wj-card-content>
  </wj-card>
</a>

{' '}
<a href="components">
  <wj-card>
    <wj-card-header>
      <wj-icon name="layout-dashboard" size="large"></wj-icon>
      <wj-card-title href="intro/cli">Elements</wj-card-title>
    </wj-card-header>
    <wj-card-content>
      <p>Take a look at the library of available WebJET elements.</p>
    </wj-card-content>
  </wj-card>
</a>

{' '}
<a href="api/layout">
  <wj-card>
    <wj-card-header>
      <wj-icon name="layout" size="large"></wj-icon>
      <wj-card-title>Layout</wj-card-title>
    </wj-card-header>
    <wj-card-content>
      <p>Find out how to create a page layout to suit your needs.</p>
    </wj-card-content>
  </wj-card>
</a>

{' '}
<a href="theming/basics">
  <wj-card>
    <wj-card-header>
      <wj-icon name="brush" size="large"></wj-icon>
      <wj-card-title>Editing styles</wj-card-title>
    </wj-card-header>
    <wj-card-content>
      <p>Learn how to easily customize your Elements visual.</p>
    </wj-card-content>
  </wj-card>
</a>

</DocsCards>

## Overview

WebJET Elements is an advanced platform for creating and deploying modern web applications and micro-frontend solutions. This framework is based on web component technology and uses the capabilities of web components and the Shadow DOM to offer a universal set of elements. These elements are designed to improve and streamline the development process, allowing you to create and implement compelling applications with greater efficiency.

Key features of the WebJET Elements Framework:

### Comprehensive set of user interface tools

WebJET Elements includes a wide range of controls and user interface components that are optimized for web interfaces. These components cover a variety of functions and are designed to be easily integrated into any web application.

### Integration with popular frameworks

The framework supports seamless integration with modern web technologies React and Vue, ensuring compatibility and flexibility in development.

### Stable and independent

WebJET Elements is built on reliable W3C standardized web technologies and uses modern web APIs such as Custom Elements and Shadow DOM. As a result, components have a stable API and are not dependent on the whim of the platform vendor or third-party libraries.

### Using Shadow DOM

WebJET Elements leverages the Shadow DOM and provides encapsulation of the style and behavior of its components, supporting a cleaner and more maintainable codebase.

### Customisation and flexibility

The framework offers extensive customization options through custom CSS properties, slots, and shadow parts, allowing developers to tailor components to specific needs.

### Optimised for performance

Optimized for performance, the framework ensures that components are not only functional but also efficient, contributing to a smoother user experience.

**In the WebJET Elements documentation you will find detailed examples to help you create exceptional web applications quickly and efficiently.**

## License

Elements is a free and open source project, released under the MIT permissive license. This means that it can be used for free in personal or commercial projects. MIT is the same license used by such popular projects as jQuery and Ruby on Rails.

This documentation content (located in the <a href="https://github.com/lencys/wj-elements" target="_blank">WJ Elements</a> repository) is licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.</a> license.
