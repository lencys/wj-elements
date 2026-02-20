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

{' '}

<title>Route | API Route Component for WebJET Elements</title>
<meta
    name="description"
    content="The Route component renders the selected component when the value in its url property matches the URL in the browser."
  />

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

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


## When to use

Use `wje-route` when users need to understand location, move between views, or traverse hierarchy.

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
