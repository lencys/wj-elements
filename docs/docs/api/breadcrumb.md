---
title: "Breadcrumb"
---
import Props from '@ionic-internal/component-api/v1/breadcrumb/props.md';
import Events from '@ionic-internal/component-api/v1/breadcrumb/events.md';
import Methods from '@ionic-internal/component-api/v1/breadcrumb/methods.md';
import Parts from '@ionic-internal/component-api/v1/breadcrumb/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/breadcrumb/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/breadcrumb/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Breadcrumb zobrazuje jeden segment navigačnej cesty v aplikácii a je potomkom elementu Breadcrumbs. Môže zobrazovať aj ikonu.

:::note Poznámka

Pre viac informácií o použítí Breadcrumbs sa presuňte do dokumentácie elementu [**Breadcrumbs**](./breadcrumbs).

:::

## Interfaces

### BreadcrumbCollapsedClickEventDetail

```typescript
interface BreadcrumbCollapsedClickEventDetail {
  collapsedBreadcrumbs?: HTMLIonBreadcrumbElement[];
}
```

### BreadcrumbCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing .

```typescript
interface BreadcrumbCustomEvent extends CustomEvent {
  detail: BreadcrumbCollapsedClickEventDetail;
  target: HTMLIonBreadcrumbElement;
}
```




## Properties
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
