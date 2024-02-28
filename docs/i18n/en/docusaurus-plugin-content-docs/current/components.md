---
title: WebJET Elements
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>

  <title>UI Components | Application building blocks</title>
  <meta
    name="description"
    content=" WebJET Elements obsahuje širokú škálu komponentov, ktoré sú optimalizované pre webové rozhrania. Tieto komponenty pokrývajú rôzne funkcie a sú navrhnuté tak, aby sa dali ľahko integrovať do akejkoľvek webovej aplikácie."
  />
  <style>{ `
    :root {
      --doc-item-container-width: 60rem;
    }
    wj-icon {
      padding: 12px;
      --wj-icon-size: 32px;
    }
    docs-cards > a {
      display: flex;
    }
`}</style>

  <script type="module" src="https://cdn.jsdelivr.net/gh/lencys/wj-elements@dddb1c19734498c5b2a17f2e6ed605d0cd40d02e/wj-master.js"></script>

</head>

WebJET Elements contains a wide range of components that are optimized for web interfaces. These components cover a variety of functions and are designed to be easily integrated into any web application.

<intro-end />

<!-- Todo: Linky -->

<DocsCards>
  <a href="../api/animation">
    <wj-card className="Card-without-image" href="../api/animation">
        <wj-card-header>
            <wj-icon name="bounce-right" size="large"></wj-icon>
            <wj-card-title>Animation</wj-card-title>
        </wj-card-header>
        <wj-card-content>
          <p>Easily integrate animations into web applications.</p>
        </wj-card-content>
    </wj-card>
  </a>
  <a href="../api/avatar">
    <wj-card className="Card-without-image" href="../api/avatar">
        <wj-card-header>
            <wj-icon name="user" size="large"></wj-icon>
            <wj-card-title>Avatar</wj-card-title>
        </wj-card-header>
        <wj-card-content>
          <p>The avatar element is used to visually represent a user or entity.</p>
        </wj-card-content>
    </wj-card>
  </a>

<a href="../api/badge">
<wj-card href="../api/badge">
  <wj-card-header>
      <wj-icon name="badge" size="large"></wj-icon>
      <wj-card-title>Badge</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    <p>Badge serves as a notification that there are other elements associated with an element and informs the user of their number.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/breadcrumbs">
<wj-card  href="../api/breadcrumbs">
  <wj-card-header>
      <wj-icon name="badges" size="large" style={{transform: "rotate(270deg)"}} ></wj-icon>
      <wj-card-title>Breadcrumbs</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    <p>Breadcrumbs is a component that displays the path a user has taken within an application or site.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/button">
<wj-card href="../api/button">
  <wj-card-header>
      <wj-icon name="click" size="large"></wj-icon>
      <wj-card-title>Button</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    <p>Button is a clickable element for invoking actions that allows you to display text, an icon, or both. </p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/card">
<wj-card href="../api/card">
  <wj-card-header>
      <wj-icon name="credit-card" size="large"></wj-icon>
      <wj-card-title>Card</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    <p>Card is a flexible and expandable card-format container that allows you to display a wide range of content.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/checkbox">
<wj-card href="../api/checkbox">
  <wj-card-header>
      <wj-icon name="checkbox" size="large"></wj-icon>
      <wj-card-title>Checkbox</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    <p>Checkbox allows users to select one or more options from a set.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/chip">
<wj-card href="../api/chip">
  <wj-card-header>
      <wj-icon name="capsule-horizontal" size="large"></wj-icon>
      <wj-card-title>Chip</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    <p>Chip is a universal element that is a small visual block containing various other elements such as avatars, text and icons.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/color-picker">
<wj-card href="../api/color-picker">
  <wj-card-header>
      <wj-icon name="color-picker" size="large"></wj-icon>
      <wj-card-title>Color picker</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    <p>Color picker is an element that displays a color palette and allows users to select one of its colors.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/copy-button">
<wj-card href="../api/copy-button">
  <wj-card-header>
      <wj-icon name="copy" size="large"></wj-icon>
      <wj-card-title>Copy button</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    <p>Copy button allows you to copy the desired content to the clipboard with one click.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/dialog">
<wj-card href="../api/dialog">
  <wj-card-header>
      <wj-icon name="window-maximize" size="large"></wj-icon>
      <wj-card-title>Dialog</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Dialog displays a dialog box located above the application content.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/dropdown">
<wj-card href="../api/dropdown">
  <wj-card-header>
      <wj-icon name="menu-deep" size="large" style={{transform: "rotate(180deg)"}}></wj-icon>
      <wj-card-title>Dropdown</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    <p>Dropdown element is used to display the context menu after clicking a button.</p>
  </wj-card-content>
</wj-card>
</a>
  <a href="../api/file-upload">
    <wj-card className="Card-without-image" href="../api/file-upload">
        <wj-card-header>
            <wj-icon name="file-upload" size="large"></wj-icon>
            <wj-card-title>File Upload</wj-card-title>
        </wj-card-header>
        <wj-card-content>
          <p>Easy to integrate animations into web applications.</p>
        </wj-card-content>
    </wj-card>
  </a>

<a href="../api/icon">
<wj-card href="../api/icon">
  <wj-card-header>
      <wj-icon name="icons" size="large"></wj-icon>
      <wj-card-title>Icon</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Icon provides an easy way to display icons from a built-in set of SVG images. </p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/icon-picker">
<wj-card href="../api/icon-picker">
  <wj-card-header>
      <wj-icon name="icons" size="large"></wj-icon>
      <wj-card-title>Icon Picker</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Icon picker allows the user to find and select an icon from a set of available icons.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/img-comparer">
<wj-card href="../api/image-comparer">
  <wj-card-header>
      <wj-icon name="photo-scan" size="large"></wj-icon>
      <wj-card-title>Image comparer</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Image Comparer is used to compare two images using the built-in slider.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/grid">
<wj-card href="../api/grid">
  <wj-card-header>
      <wj-icon name="grid-4x4" size="large"></wj-icon>
      <wj-card-title>Grid</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>The Grid system is a flexible way to create responsive layouts by dividing the screen into a grid.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/infinite-scroll">
<wj-card href="../api/infinite-scroll">
  <wj-card-header>
      <wj-icon name="infinity" size="large"></wj-icon>
      <wj-card-title>Infinite Scroll</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Infinite Scroll allows you to implement dynamic data loading as users scroll through more content.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/input">
<wj-card href="../api/input">
  <wj-card-header>
      <wj-icon name="input-check" size="large"></wj-icon>
      <wj-card-title>Input</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>The Input element extends the capabilities of standard HTML input with advanced features and customization options.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/item">
<wj-card href="../api/item">
  <wj-card-header>
      <wj-icon name="list" size="large"></wj-icon>
      <wj-card-title>Item</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Item components are blocks that can contain various types of content including text, icons, avatars, images, and more.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/list">
<wj-card href="../api/list">
  <wj-card-header>
      <wj-icon name="list" size="large"></wj-icon>
      <wj-card-title>List</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>The List component consists of multiple Item elements and can contain text, buttons, icons, image thumbnails, and much more.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/masonry">
<wj-card href="../api/masonry">
  <wj-card-header>
      <wj-icon name="layout-dashboard" size="large"></wj-icon>
      <wj-card-title>Masonry</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>The menu element is used to display the navigation. It is hidden by default and is called up, for example, by clicking a button.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/menu">
<wj-card href="../api/menu">
  <wj-card-header>
      <wj-icon name="menu-2" size="large"></wj-icon>
      <wj-card-title>Menu</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>The menu element is used to display the navigation. It is hidden by default and is called up, for example, by clicking a button.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/progress-bar">
<wj-card href="../api/progress-bar">
  <wj-card-header>
      <wj-icon name="progress" size="large"></wj-icon>
      <wj-card-title>Progress Bar</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Progress Bar element is a component designed to visualize progress.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/radio">
<wj-card href="../api/menu">
  <wj-card-header>
      <wj-icon name="circle-dot" size="large"></wj-icon>
      <wj-card-title>Radio</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Radio element is an extended version of the standard HTML radio element.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/select">
<wj-card href="../api/menu">
  <wj-card-header>
      <wj-icon name="select" size="large"></wj-icon>
      <wj-card-title>Select</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Select element extends the capabilities of the standard HTML select element. </p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/slider">
<wj-card href="../api/menu">
  <wj-card-header>
      <wj-icon name="adjustments-horizontal" size="large"></wj-icon>
      <wj-card-title>Slider</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>The Slider element is a convenient way to select a value from a range of values.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/split-view">
<wj-card href="../api/menu">
  <wj-card-header>
      <wj-icon name="layout-columns" size="large"></wj-icon>
      <wj-card-title>SplitView</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Split view is a component that allows you to create a split view with two or more sections and adjust their size by scrolling.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/tab-group">
<wj-card href="../api/menu">
  <wj-card-header>
      <wj-icon name="rectangle-rounded-bottom" size="large"></wj-icon>
      <wj-card-title>Tab Group</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Tab Group displays a tabbed navigation that allows you to view different parts of the application without having to navigate to another page.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/toast">
<wj-card href="../api/menu">
  <wj-card-header>
      <wj-icon name="message-2-up" size="large"></wj-icon>
      <wj-card-title>Toast</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>The toast component provides an unobtrusive way of displaying short notifications to the user.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/toggle">
<wj-card href="../api/menu">
  <wj-card-header>
      <wj-icon name="toggle-left" size="large"></wj-icon>
      <wj-card-title>Toggle</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>Toggle elements are small interactive controls that allow you to switch between two states.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/tooltip">
<wj-card href="../api/menu">
  <wj-card-header>
      <wj-icon name="tooltip" size="large"></wj-icon>
      <wj-card-title>Tooltip</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>The Tooltip element is used to display a popup tooltip when the mouse is hovered over.</p>
  </wj-card-content>
</wj-card>
</a>

<a href="../api/toolbar">
<wj-card href="../api/menu">
  <wj-card-header>
      <wj-icon name="box-align-top" size="large"></wj-icon>
      <wj-card-title>Toolbar</wj-card-title>
  </wj-card-header>
  <wj-card-content>
  <p>A toolbar is designed to display various content in an organized manner, and is usually used at the top of a page.</p>
  </wj-card-content>
</wj-card>
</a>

</DocsCards>
