---
title: 'Router'
---

import Props from '@ionic-internal/component-api/v1/router/props.md';
import Events from '@ionic-internal/component-api/v1/router/events.md';
import Methods from '@ionic-internal/component-api/v1/router/methods.md';
import Parts from '@ionic-internal/component-api/v1/router/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/router/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/router/slots.md';

<head>
  <title>Router | Router The navigation component within web applications</title>
  <meta
    name="description"
    content="The Router component is a tool for navigating within web applications. This component supports complex navigation scenarios and lazy-load, enhancing application performance and user."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Router component is a tool for navigating within web applications. This component supports complex navigation scenarios and lazy-load, enhancing application performance and user experience. It uses the other components [Router Link](router-link.md), [Router Outlet](router-outlet.md), and [Route](route.md) to do this.

In addition, it integrates seamlessly with WebJET Elements components, making it easy to implement navigation in your project.

The `wje-router` component is tasked with managing all interactions with the browser history and grouping updates through the event system, and should only be found once in the application structure.

`wje-router` is just a URL coordinator for the navigation outlets of ionic: `wj-nav`, `wj-tabs`, and `wje-router-outlet`.

That means the `wje-router` never touches the DOM, it does NOT show the components or emit any kind of lifecycle events, it just tells `wj-nav`, `wj-tabs`, and `wje-router-outlet` what and when to "show" based on the browser's URL.

In order to configure this relationship between components (to load/select) and URLs, `wje-router` uses a declarative syntax using JSX/HTML to define a tree of routes.

## Basic usage

import BasicExample from '@site/static/usage/v1/router/basic/index.md';

<BasicExample />

## Interfaces

### RouterEventDetail

```typescript
interface RouterEventDetail {
  from: string | null;
  redirectedFrom: string | null;
  to: string;
}
```

### RouterCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with WebJET events emitted from this component.

```typescript
interface RouterCustomEvent extends CustomEvent {
  detail: RouterEventDetail;
  target: HTMLElement;
}
```

## Use

```html
<wje-router>
  <wje-route component="page-tabs">
    <wje-route url="/schedule" component="tab-schedule">
      <wje-route component="page-schedule"></wje-route>
      <wje-route url="/session/:sessionId" component="page-session"></wje-route>
    </wje-route>

    <wje-route url="/speakers" component="tab-speaker">
      <wje-route component="page-speaker-list"></wje-route>
      <wje-route url="/session/:sessionId" component="page-session"></wje-route>
      <wje-route url="/:speakerId" component="page-speaker-detail"></wje-route>
    </wje-route>

    <wje-route url="/map" component="page-map"></wje-route>
    <wje-route url="/about" component="page-about"></wje-route>
  </wje-route>

  <wje-route url="/tutorial" component="page-tutorial"></wje-route>
  <wje-route url="/login" component="page-login"></wje-route>
  <wje-route url="/account" component="page-account"></wje-route>
  <wje-route url="/signup" component="page-signup"></wje-route>
  <wje-route url="/support" component="page-support"></wje-route>
</wje-router>

```


## When to use

Use `wje-router` when users need to understand location, move between views, or traverse hierarchy.

## When not to use

Do not combine multiple competing navigation patterns for the same user flow.

## Accessibility

Ensure visible active/selected states, predictable tab order, and clear control naming.

## Best Practices

- Keep URL state and UI navigation state synchronized.
- Use consistent labels across menu, breadcrumbs, and tabs.
- Add context for deep structures (breadcrumbs, headings, icon cues).

## Attributes and Properties

<Props />

## Events

<Events />

## Methods

<Methods />

## CSS Shadow Parts

<Parts />

## CSS Custom Properties

<CustomProps />

## Slots

<Slots />
