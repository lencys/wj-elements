---
title: WebJET Elements
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>

{' '}

<title>UI Components | Application building blocks</title>
<meta
  name="description"
  content=" WebJET Elements obsahuje širokú škálu komponentov, ktoré sú optimalizované pre webové rozhrania. Tieto komponenty pokrývajú rôzne funkcie a sú navrhnuté tak, aby sa dali ľahko integrovať do akejkoľvek webovej aplikácie."
/>
<style>{ `
    :root {
      --doc-item-container-width: 60rem;
    };
    wje-icon {
      padding: 12px;
      --wje-icon-size: 32px;
    };
    docs-cards > a {
      display: flex;
        color: var(--wje-color-primary-9)!important;
    };
`}</style>

{' '}

<script type="module" src="/wje-set-base-path.js"></script>
<script type="module" src="/wje-elementy/wje-master.js"></script>

<link rel="stylesheet" href="/wje-elementy/light.css" />
<link rel="stylesheet" href="/wje-elementy/dark.css" />
<link rel="stylesheet" href="/wje-elementy/styles.css" />

</head>

WebJET Elements includes a wide range of components that are optimized for web interfaces. These components cover a variety of functions and are designed to be easily integrated into any web application.

<intro-end />

<!-- Todo: Linky -->

<DocsCards>
<a href="../api/accordion">
    <wje-card className="Card-without-image" href="../api/accordion">
        <wje-card-header>
            <wje-icon name="triangle-inverted" size="large"></wje-icon>
            <wje-card-title>Accordion</wje-card-title>
        </wje-card-header>
        <wje-card-content>
          <p>Easy integration of animations into web applications.</p>
        </wje-card-content>
    </wje-card>
  </a>
  <a href="../api/animation">
    <wje-card className="Card-without-image" href="../api/animation">
        <wje-card-header>
            <wje-icon name="bounce-right" size="large"></wje-icon>
            <wje-card-title>Animation</wje-card-title>
        </wje-card-header>
        <wje-card-content>
          <p>Easy integration of animations into web applications.</p>
        </wje-card-content>
    </wje-card>
  </a>
  <a href="../api/avatar">
    <wje-card className="Card-without-image" href="../api/avatar">
        <wje-card-header>
            <wje-icon name="user" size="large"></wje-icon>
            <wje-card-title>Avatar</wje-card-title>
        </wje-card-header>
        <wje-card-content>
          <p>The avatar element is used to visually represent a user or entity.</p>
        </wje-card-content>
    </wje-card>
  </a>

<a href="../api/badge">
  <wje-card href="../api/badge">
    <wje-card-header>
      <wje-icon name="badge" size="large"></wje-icon>
      <wje-card-title>Badge</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Badge serves as a notification that there are other elements associated with an element and informs the user of their number.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/breadcrumbs">
  <wje-card href="../api/breadcrumbs">
    <wje-card-header>
      <wje-icon name="badges" size="large" style={{ transform: 'rotate(270deg)' }}></wje-icon>
      <wje-card-title>Breadcrumbs</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Breadcrumbs is a component that displays the path a user has taken within an application or site.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/button">
  <wje-card href="../api/button">
    <wje-card-header>
      <wje-icon name="click" size="large"></wje-icon>
      <wje-card-title>Button</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>A Button is a clickable element for invoking actions that allows you to display text, an icon, or
        both.{' '}</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/card">
  <wje-card href="../api/card">
    <wje-card-header>
      <wje-icon name="credit-card" size="large"></wje-icon>
      <wje-card-title>Card</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Card is a flexible and expandable card-format container that allows you to display a wide range of content.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/checkbox">
  <wje-card href="../api/checkbox">
    <wje-card-header>
      <wje-icon name="checkbox" size="large"></wje-icon>
      <wje-card-title>Checkbox</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Checkbox allows users to select one or more options from a set.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/chip">
  <wje-card href="../api/chip">
    <wje-card-header>
      <wje-icon name="capsule-horizontal" size="large"></wje-icon>
      <wje-card-title>Chip</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>A chip is a versatile element that is a small visual block containing various other elements such as
        as avatars, text and icons.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/color-picker">
  <wje-card href="../api/color-picker">
    <wje-card-header>
      <wje-icon name="color-picker" size="large"></wje-icon>
      <wje-card-title>Color picker</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>The color picker is an element that displays a color palette and allows users to select one of its colors.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/copy-button">
  <wje-card href="../api/copy-button">
    <wje-card-header>
      <wje-icon name="copy" size="large"></wje-icon>
      <wje-card-title>Copy button</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Copy button allows you to copy the desired content to the clipboard with one click.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/dialog">
  <wje-card href="../api/dialog">
    <wje-card-header>
      <wje-icon name="window-maximize" size="large"></wje-icon>
      <wje-card-title>Dialogue</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Dialog displays a dialog box located above the application content.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/dropdown">
  <wje-card href="../api/dropdown">
    <wje-card-header>
      <wje-icon name="menu-deep" size="large" style={{ transform: 'rotate(180deg)' }}></wje-icon>
      <wje-card-title>Dropdown</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Dropdown element is used to display the context menu when a button is clicked.</p>
    </wje-card-content>
  </wje-card>
</a>
<a href="../api/file-upload">
  <wje-card className="Card-without-image" href="../api/file-upload">
    <wje-card-header>
      <wje-icon name="file-upload" size="large"></wje-icon>
      <wje-card-title>File Upload</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Easy integration of animations into web applications.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/icon">
  <wje-card href="../api/icon">
    <wje-card-header>
      <wje-icon name="icons" size="large"></wje-icon>
      <wje-card-title>Icon</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Icon provides an easy way to display icons from a built-in set of SVG images.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/icon-picker">
  <wje-card href="../api/icon-picker">
    <wje-card-header>
      <wje-icon name="icons" size="large"></wje-icon>
      <wje-card-title>Icon Picker</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Icon picker allows the user to find and select an icon from a set of available icons.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/img-comparer">
  <wje-card href="../api/image-comparer">
    <wje-card-header>
      <wje-icon name="photo-scan" size="large"></wje-icon>
      <wje-card-title>Image comparer</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Image Comparer is used to compare two images using the built-in slider.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/grid">
  <wje-card href="../api/grid">
    <wje-card-header>
      <wje-icon name="grid-4x4" size="large"></wje-icon>
      <wje-card-title>Grid</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>The Grid system is a flexible way to create responsive layouts by dividing the screen into a grid.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/infinite-scroll">
  <wje-card href="../api/infinite-scroll">
    <wje-card-header>
      <wje-icon name="infinity" size="large"></wje-icon>
      <wje-card-title>Infinite Scroll</wje-card-title>
    </wje-card-header>
    <wje-card-content>
        <p>Infinite Scroll allows you to implement dynamic data loading as users scroll through more content.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/input">
  <wje-card href="../api/input">
    <wje-card-header>
      <wje-icon name="input-check" size="large"></wje-icon>
      <wje-card-title>Input</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>The Input element extends the capabilities of the standard HTML input with advanced features and customization options.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/item">
  <wje-card href="../api/item">
    <wje-card-header>
      <wje-icon name="list" size="large"></wje-icon>
      <wje-card-title>Item</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Item components are blocks that can contain different types of content including text, icons, avatars, images, and much more.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/level-indicator">
  <wje-card href="../api/level-indicator">
    <wje-card-header>
      <wje-icon name="menu-deep" size="large"></wje-icon>
      <wje-card-title>Level indicator</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>The Level indicator component displays the level or progress of a process.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/list">
  <wje-card href="../api/list">
    <wje-card-header>
      <wje-icon name="list" size="large"></wje-icon>
      <wje-card-title>List</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>The List component consists of multiple Item elements and can contain text, buttons, icons, image thumbnails, and much more.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/masonry">
  <wje-card href="../api/masonry">
    <wje-card-header>
      <wje-icon name="layout-dashboard" size="large"></wje-icon>
      <wje-card-title>Masonry</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>The menu element is used to display the navigation. It is hidden by default and is called up, for example, by clicking a button.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/menu">
  <wje-card href="../api/menu">
    <wje-card-header>
      <wje-icon name="menu-2" size="large"></wje-icon>
      <wje-card-title>Menu</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>The menu element is used to display the navigation. It is hidden by default and is called up, for example, by clicking a button.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/progress-bar">
  <wje-card href="../api/progress-bar">
    <wje-card-header>
      <wje-icon name="progress" size="large"></wje-icon>
      <wje-card-title>Progress Bar</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>The Progress Bar element is a component designed to visualize progress.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/radio">
  <wje-card href="../api/menu">
    <wje-card-header>
      <wje-icon name="circle-dot" size="large"></wje-icon>
      <wje-card-title>Radio</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>The Radio element is an extended version of the standard HTML radio element.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/select">
  <wje-card href="../api/menu">
    <wje-card-header>
      <wje-icon name="select" size="large"></wje-icon>
      <wje-card-title>Select</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>The select element extends the capabilities of the standard HTML select element.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/slider">
  <wje-card href="../api/menu">
    <wje-card-header>
      <wje-icon name="adjustments-horizontal" size="large"></wje-icon>
      <wje-card-title>Slider</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>The Slider element is a convenient way to select a value from a range of values.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/split-view">
  <wje-card href="../api/menu">
    <wje-card-header>
      <wje-icon name="layout-columns" size="large"></wje-icon>
      <wje-card-title>SplitView</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Split view is a component that allows you to create a split view with two or more sections and scroll to adjust their size.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/tab-group">
  <wje-card href="../api/menu">
    <wje-card-header>
      <wje-icon name="rectangle-rounded-bottom" size="large"></wje-icon>
      <wje-card-title>Tab Group</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Tab Group displays a tabbed navigation that allows you to view different parts of the application without having to navigate to another page.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/toast">
  <wje-card href="../api/menu">
    <wje-card-header>
      <wje-icon name="message-2-up" size="large"></wje-icon>
      <wje-card-title>Toast</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>The toast component provides an unobtrusive way of displaying short notifications to the user.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/toggle">
  <wje-card href="../api/menu">
    <wje-card-header>
      <wje-icon name="toggle-left" size="large"></wje-icon>
      <wje-card-title>Toggle</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>Toggle elements are small interactive controls that allow you to switch between two states.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/tooltip">
  <wje-card href="../api/menu">
    <wje-card-header>
      <wje-icon name="tooltip" size="large"></wje-icon>
      <wje-card-title>Tooltip</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>The Tooltip element is used to display a pop-up tooltip when the mouse is hovered over.</p>
    </wje-card-content>
  </wje-card>
</a>

<a href="../api/toolbar">
  <wje-card href="../api/menu">
    <wje-card-header>
      <wje-icon name="box-align-top" size="large"></wje-icon>
      <wje-card-title>Toolbar</wje-card-title>
    </wje-card-header>
    <wje-card-content>
      <p>A toolbar is designed to display various content in an organized manner, and is usually used at the top of a page.</p>
    </wje-card-content>
  </wje-card>
</a>

</DocsCards>
