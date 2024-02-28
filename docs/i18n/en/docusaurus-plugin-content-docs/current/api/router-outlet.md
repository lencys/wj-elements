---
title: Router Outlet
---

import Props from '@ionic-internal/component-api/v1/router-outlet/props.md';
import Events from '@ionic-internal/component-api/v1/router-outlet/events.md';
import Methods from '@ionic-internal/component-api/v1/router-outlet/methods.md';
import Parts from '@ionic-internal/component-api/v1/router-outlet/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/router-outlet/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/router-outlet/slots.md';


  <title>Router | Router The navigation component within web applications</title>
  <meta name="description" content="Komponent Router je nástroj určený na navigáciu v rámci webových aplikácií. Táto komponenta podporuje komplexné navigačné scenáre a lazy-load, čím zvyšuje výkon aplikácie a používateľský zážitok." />


import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

The Router Outlet component manages the insertion and removal of various page components based on the current routing state of the application. It also controls animations and transitions when switching between pages (or views), enhancing the user experience with smooth visual changes. Essentially, it functions as a dynamic content container that automatically updates the displayed content according to user interactions.

## Life Cycle Hooks

Routes rendered in a Router Outlet have access to specific Ionic events that are wired up to animations

| Event Name         | Trigger                                                            |
| ------------------ | ------------------------------------------------------------------ |
| `ionViewWillEnter` | Fired when the component routing to is about to animate into view. |
| `ionViewDidEnter`  | Fired when the component routing to has finished animating.        |
| `ionViewWillLeave` | Fired when the component routing from is about to animate.         |
| `ionViewDidLeave`  | Fired when the component routing to has finished animating.        |

These events tie into Ionic's animation system and can be used to coordinate parts of your app when a Components is done with its animation. These events are not a replacement for your framework's own event system, but an addition.

For handling Router Guards, the older `ionViewCanEnter` and `ionViewCanLeave` have been replaced with their framework specific equivalent. For Angular, there are [Router Guards](https://angular.io/guide/router#milestone-5-route-guards).

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
