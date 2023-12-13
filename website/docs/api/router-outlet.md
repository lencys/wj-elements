---
title: "Router outlet"
---

import Props from '@ionic-internal/component-api/v1/router-outlet/props.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponenta Router Outlet riadi vkladanie a odoberanie rôznych komponentov stránky na základe aktuálneho stavu routovania aplikácie. Zároveň kontroluje animácie a prechody pri prepínaní medzi stránkami (alebo pohľadmi), čo zvyšuje používateľský zážitok vďaka plynulým vizuálnym zmenám. V podstate funguje ako kontajner dynamického obsahu, ktorý automaticky aktualizuje zobrazený obsah podľa podľa interakcií používateľa.

## Life Cycle Hooks

Routes rendered in a Router Outlet have access to specific Ionic events that are wired up to animations


| Event Name         | Trigger                                                            |
|--------------------|--------------------------------------------------------------------|
| `ionViewWillEnter` | Fired when the component routing to is about to animate into view. |
| `ionViewDidEnter`  | Fired when the component routing to has finished animating.        |
| `ionViewWillLeave` | Fired when the component routing from is about to animate.         |
| `ionViewDidLeave`  | Fired when the component routing to has finished animating.        |


These event tie into Ionic's animation system and can be used to coordinate parts of your app when a Components is done with its animation. These events are not a replacement for your framework's own event system, but an addition.

For handling Router Guards, the older `ionViewCanEnter` and `ionViewCanLeave` have been replaced with their framework specific equivalent. For Angular, there are [Router Guards](https://angular.io/guide/router#milestone-5-route-guards).


## Atribúty a Vlastnosti

### animation

|  |  |
| --- | --- |
| Popis | The animation attribute specifies the type of animation to apply to child elements during their entry or exit transitions.
Určuje typ animácie, ktorá sa má použiť na child elementy počas ich zobrazenia a odchodu z obrazovky. |
| Atribút | `animation` |
| Typ | `"fade"` ｜ undefined |
| Predvolená hodnota | `outlet` |

<Props />

## Eventy
Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy
Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts
Pre tento komponent nie sú k dispozícií žiadne CSS shadow parts.
## CSS Custom vlastnosti
Pre tento komponent nie sú k dispozícií žiadne CSS Custom vlastnosti.

## Sloty
Pre tento komponent nie sú k dispozícii žiadne sloty.