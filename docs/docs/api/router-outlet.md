---
title: 'Router Outlet'
---

import Props from '@ionic-internal/component-api/v1-sk/router-outlet/props.md';
import Events from '@ionic-internal/component-api/v1-sk/router-outlet/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/router-outlet/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/router-outlet/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/router-outlet/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/router-outlet/slots.md';

<head>
  <title>Router | Router Komponent navigácie v rámci webových aplikácií</title>
  <meta
    name="description"
    content="Komponenta Router Outlet riadi vkladanie a odoberanie rôznych komponentov stránky na základe aktuálneho stavu routovania aplikácie."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponenta Router Outlet riadi vkladanie a odoberanie rôznych komponentov stránky na základe aktuálneho stavu routovania aplikácie. Zároveň kontroluje animácie a prechody pri prepínaní medzi stránkami (alebo pohľadmi), čo zvyšuje používateľský zážitok vďaka plynulým vizuálnym zmenám. V podstate funguje ako kontajner dynamického obsahu, ktorý automaticky aktualizuje zobrazený obsah podľa podľa interakcií používateľa.

## Life Cycle Hooks

Routes rendered in a Router Outlet have access to specific WebJET events that are wired up to animations

| Event Name         | Trigger                                                            |
| ------------------ | ------------------------------------------------------------------ |
| `ionViewWillEnter` | Fired when the component routing to is about to animate into view. |
| `ionViewDidEnter`  | Fired when the component routing to has finished animating.        |
| `ionViewWillLeave` | Fired when the component routing from is about to animate.         |
| `ionViewDidLeave`  | Fired when the component routing to has finished animating.        |

These event tie into Ionic's animation system and can be used to coordinate parts of your app when a Components is done with its animation. These events are not a replacement for your framework's own event system, but an addition.

For handling Router Guards, the older `ionViewCanEnter` and `ionViewCanLeave` have been replaced with their framework specific equivalent. For Angular, there are [Router Guards](https://angular.io/guide/router#milestone-5-route-guards).


## Kedy použiť

Použite `wje-router-outlet`, keď používateľ potrebuje orientáciu v aplikácii alebo prechod medzi stavmi/obrazovkami.

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
