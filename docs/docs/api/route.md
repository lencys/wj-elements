---
title: Route
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v1-sk/route/props.md';
import Events from '@ionic-internal/component-api/v1-sk/route/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/route/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/route/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/route/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/route/slots.md';

{' '}
<title>Route | API Route Komponent pre WebJET Elements</title>
<meta
    name="description"
    content="Komponenta Route vykreslí zvolený komponent keď sa hodnota v jeho vlastnosti url zhoduje s URL v prehliadači."
  />

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponenta Route vykreslí zvolený komponent keď sa hodnota v jeho vlastnosti `url` zhoduje s URL v prehliadači.

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


## Kedy použiť

Použite `wje-route`, keď používateľ potrebuje orientáciu v aplikácii alebo prechod medzi stavmi/obrazovkami.

## Kedy nepoužiť

Nepoužívajte viac paralelných navigačných vzorov, ktoré si navzájom konkurujú.

## Prístupnosť

Zabezpečte jasné active/selected stavy, predvídateľné poradie tabulátora a pomenovanie ovládacích prvkov.

## Odporúčané postupy

- Držte URL a UI stav v synchronizácii, aby bola navigácia reprodukovateľná.
- Používajte konzistentné názvoslovie položiek naprieč menu, breadcrumbom a tabmi.
- Pri hlbokých štruktúrach pridajte pomocný kontext (breadcrumb, nadpis, ikony).

## Atribúty a vlastnosti

<Props />

## Udalosti

<Events />

## Metódy

<Methods />

## CSS tieňové časti

<Parts />

## CSS vlastné premenné

<CustomProps />

## Sloty

<Slots />
