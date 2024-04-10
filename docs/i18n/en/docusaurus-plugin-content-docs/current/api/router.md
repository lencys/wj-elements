---
title: Router
---

import Props from '@ionic-internal/component-api/v1/router/props.md';
import Events from '@ionic-internal/component-api/v1/router/events.md';
import Methods from '@ionic-internal/component-api/v1/router/methods.md';
import Parts from '@ionic-internal/component-api/v1/router/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/router/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/router/slots.md';


  <title>Router | Router The navigation component within web applications</title>
  <meta name="description" content="Komponent Router je nástroj určený na navigáciu v rámci webových aplikácií. Táto komponenta podporuje komplexné navigačné scenáre a lazy-load, čím zvyšuje výkon aplikácie a používateľský zážitok." />


import EncapsulationPill from '@components/page/api/EncapsulationPill';

The Router component is a tool for navigating within web applications. This component supports complex navigation scenarios and lazy-load, enhancing application performance and user experience. It uses the other components [Router Link](router-link.md), [Router Outlet](router-outlet.md), and [Route](route.md) to do this.

In addition, it integrates seamlessly with WebJET Elements components, allowing you to easily implement navigation in your project.

The `wj-router` component is tasked with managing all interactions with the browser history and grouping updates through the event system, and should only be found once in the application structure.

`wj-router` is just a URL coordinator for the navigation outlets of ionic: `wj-nav`, `wj-tabs`, and `wj-router-outlet`.

That means the `wj-router` never touches the DOM, it does NOT show the components or emit any kind of lifecycle events, it just tells `wj-nav`, `wj-tabs`, and `wj-router-outlet` what and when to "show" based on the browser's URL.

In order to configure this relationship between components (to load/select) and URLs, `wj-router` uses a declarative syntax using JSX/HTML to define a tree of routes.

## Basic use

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

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface RouterCustomEvent extends CustomEvent {
  detail: RouterEventDetail;
  target: HTMLIonRouterElement;
}
```

## Use

```html
<wj-router>
  <wj-route component="page-tabs">
    <wj-route url="/schedule" component="tab-schedule">
      <wj-route component="page-schedule"></wj-route>
      <wj-route url="/session/:sessionId" component="page-session"></wj-route>
    </wj-route>

    <wj-route url="/speakers" component="tab-speaker">
      <wj-route component="page-speaker-list"></wj-route>
      <wj-route url="/session/:sessionId" component="page-session"></wj-route>
      <wj-route url="/:speakerId" component="page-speaker-detail"></wj-route>
    </wj-route>

    <wj-route url="/map" component="page-map"></wj-route>
    <wj-route url="/about" component="page-about"></wj-route>
  </wj-route>

  <wj-route url="/tutorial" component="page-tutorial"></wj-route>
  <wj-route url="/login" component="page-login"></wj-route>
  <wj-route url="/account" component="page-account"></wj-route>
  <wj-route url="/signup" component="page-signup"></wj-route>
  <wj-route url="/support" component="page-support"></wj-route>
</ion-router>

```

## Attributes and Properties

<Props />

## Events

<Events />

## Methods

<Methods/>

## CSS Shadow Parts

<Parts />

## CSS Custom Properties

<CustomProps />

## Slots

<Slots />
