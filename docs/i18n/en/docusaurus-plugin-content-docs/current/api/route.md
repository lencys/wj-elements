---
title: Route
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v1/route/props.md';
import Events from '@ionic-internal/component-api/v1/route/events.md';
import Methods from '@ionic-internal/component-api/v1/route/methods.md';
import Parts from '@ionic-internal/component-api/v1/route/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/route/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/route/slots.md';

  <title>Route | API Route Komponent pre WebJET Elements</title>
  <meta name="description" content="Komponenta Route vykreslí zvolený komponent keď sa hodnota v jeho vlastnosti `url` zhoduje s URL v prehliadači." />

import EncapsulationPill from '@components/page/api/EncapsulationPill';

The Route component renders the selected component when the value in its `url` property matches the URL in the browser.

## Navigation Hooks

Navigation hooks can be used to perform tasks or act as navigation guards. Hooks are used by providing functions to the `beforeEnter` and `beforeLeave` properties on each `ion-route`. Returning `true` allows navigation to proceed, while returning `false` causes it to be cancelled. Returning an object of type `NavigationHookOptions` allows you to redirect navigation to another page.

## Interfaces

```typescript
interface NavigationHookOptions {
  /**
   * A valid path to redirect navigation to.
   */
  redirect: string;
}
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
