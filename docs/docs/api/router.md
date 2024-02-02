---
title: "Router"
---

<head>
  <title>Router: Router Komponent navigácie v rámci webových aplikácií</title>
  <meta name="description" content="Komponent Router je nástroj určený na navigáciu v rámci webových aplikácií. Táto komponenta podporuje komplexné navigačné scenáre a lazy-load, čím zvyšuje výkon aplikácie a používateľský zážitok." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

Komponent Router je nástroj určený na navigáciu v rámci webových aplikácií. Táto komponenta podporuje komplexné navigačné scenáre a lazy-load, čím zvyšuje výkon aplikácie a používateľský zážitok. Na to využíva ďalšie komponenty: [Router Link](./router-link.md), [Router Outlet](./router-outlet.md) a [Route](./route.md). 

Navyše sa bezproblémovo integruje s komponentmi WebJET Elements, čím umožnuje jednoduchú implementáciu navigácie vo vašom projekte.



Komponent `wj-router` má za úlohu spravovať všetky interakcie s históriou prehliadača a zoskupovať aktualizácie prostredníctvom systému udalostí a mal by sa nachádzať v štruktúre aplikácie iba raz.

`wj-router` is just a URL coordinator for the navigation outlets of ionic: `wj-nav`, `wj-tabs`, and `wj-router-outlet`.

That means the `wj-router` never touches the DOM, it does NOT show the components or emit any kind of lifecycle events, it just tells `wj-nav`, `wj-tabs`, and `wj-router-outlet` what and when to "show" based on the browser's URL.

In order to configure this relationship between components (to load/select) and URLs, `wj-router` uses a declarative syntax using JSX/HTML to define a tree of routes.

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

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface RouterCustomEvent extends CustomEvent {
  detail: RouterEventDetail;
  target: HTMLIonRouterElement;
}
```

## Použitie

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

## Atribúty a Vlastnosti

### root

|  |  |
| --- | --- |
| Popis | Description	The root path to use when matching URLs. By default, this is set to "/", but you can specify an alternate prefix for all URL paths. |
| Atribút | `root` |
| Typ | `string` |
| Predvolená hodnota | `/` |

### useHash

|  |  |
| --- | --- |
| Popis | Description	The router can work in two "modes": - With hash: /index.html#/path/to/page - Without hash: /path/to/page. <br /><br /> Using one or another might depend in the requirements of your app and/or where it's deployed. Usually "hash-less" navigation works better for SEO and it's more user friendly too, but it might requires additional server-side configuration in order to properly work. <br /><br />On the other side hash-navigation is much easier to deploy, it even works over the file protocol. <br /> By default, this property is true, change to false to allow hash-less URLs. |
| Atribút | `use-hash` |
| Typ | `boolean` |
| Predvolená hodnota | `true` |

## Eventy

Name	Description
ionRouteDidChange	Emitted when the route had changed
ionRouteWillChange	Event emitted when the route is about to change

| Názov                           | Popis                  |
|---------------------------------|------------------------|
| `ionRouteDidChange` | Emitted when the route had changed | 
| `ionRouteWillChange` | Event emitted when the route is about to change | 

## Metódy

### back

|  |  |
| --- | --- |
| Popis | Go back to previous page in the window.history. |
| Signature | `back() => Promise<void>` |


### push

|  |  |
| --- | --- |
| Popis | 	Navigate to the specified path. |
| Signature | `Signature	push(path: string, direction?: RouterDirection, animation?: AnimationBuilder) => Promise<boolean>` |


## CSS Shadow Parts
Pre tento komponent nie sú k dispozícii žiadne CSS Shadow Parts.

## CSS Custom Vlastnosti
Pre tento komponent nie sú k dispozícii žiadne CSS Custom Vlastnosti.

## Sloty
Pre tento komponent nie sú k dispozícii žiadne Sloty.
