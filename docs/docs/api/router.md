---
title: 'Router'
---

import Props from '@ionic-internal/component-api/v1-sk/router/props.md';
import Events from '@ionic-internal/component-api/v1-sk/router/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/router/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/router/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/router/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/router/slots.md';

<head>
  <title>Router | Router Komponent navigácie v rámci webových aplikácií</title>
  <meta
    name="description"
    content="Komponent Router je nástroj určený na navigáciu v rámci webových aplikácií. Táto komponenta podporuje komplexné navigačné scenáre a lazy-load, čím zvyšuje výkon aplikácie a používateľský."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent Router je nástroj určený na navigáciu v rámci webových aplikácií. Táto komponenta podporuje komplexné navigačné scenáre a lazy-load, čím zvyšuje výkon aplikácie a používateľský zážitok. Na to využíva ďalšie komponenty: [Router Link](router-link.md), [Router Outlet](router-outlet.md) a [Route](route.md).

Navyše sa bezproblémovo integruje s komponentmi WebJET Elements, čím umožňuje jednoduchú implementáciu navigácie vo vašom projekte.

Komponent `wje-router` má za úlohu spravovať všetky interakcie s históriou prehliadača a zoskupovať aktualizácie prostredníctvom systému udalostí a mal by sa nachádzať v štruktúre aplikácie iba raz.

`wje-router` is just a URL coordinator for the navigation outlets of ionic: `wj-nav`, `wj-tabs`, and `wje-router-outlet`.

That means the `wje-router` never touches the DOM, it does NOT show the components or emit any kind of lifecycle events, it just tells `wj-nav`, `wj-tabs`, and `wje-router-outlet` what and when to "show" based on the browser's URL.

In order to configure this relationship between components (to load/select) and URLs, `wje-router` uses a declarative syntax using JSX/HTML to define a tree of routes.

## Základné použitie

import BasicExample from '@site/static/usage/v1/router/basic/index.md';

<BasicExample />

## Rozhrania

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

## Použitie

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


## Kedy použiť

Použite `wje-router`, keď používateľ potrebuje orientáciu v aplikácii alebo prechod medzi stavmi/obrazovkami.

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
