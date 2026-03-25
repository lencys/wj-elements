---
title: Inštalácia WebJET Elements
sidebar_label: Inštalácia
---

<head>
  <title>Ako získať WebJET Elements pre svoj projekt</title>
  <meta
    name="description"
    content="Nainštalujte WebJET Elements cez npm alebo ho načítajte cez CDN vrátane odporúčaných CSS súborov a nastavenia base path pre assety."
  />
</head>

WebJET Elements môžete používať dvoma hlavnými spôsobmi:

- **cez npm** – odporúčané pre aplikácie s bundlerom (Vite, webpack, Rollup),
- **cez CDN** – vhodné pre prototypy, jednoduché integrácie alebo statické stránky.

## Inštalácia s npm

Balík nainštalujete do projektu pomocou npm:

Pred pokračovaním sa uistite, že máte v počítači nainštalovaný Node.js. Ak chcete nastaviť prostredie pre Elements, pozrite si [tieto pokyny](environment.md).

```shell
$ npm install wj-elements
```

Potom do aplikácie naimportujte bundle komponentov a štýly:

```js
import 'wj-elements';
import 'wj-elements/style.css';
import 'wj-elements/light.css';

// Voliteľné: ak chcete používať zabudovaný tmavý motív
import 'wj-elements/dark.css';
```

### Minimálny príklad použitia

```html
<wje-button>Potvrdiť</wje-button>
```

### Assety a base path

Niektoré časti knižnice načítavajú assety relatívne voči base path knižnice. Ak vo vašej aplikácii kopírujete obsah `dist/` na vlastné miesto, nastavte base path explicitne:

```js
import { setBasePath } from 'wj-elements';

setBasePath('/vendor/wj-elements/dist');
```

Takéto nastavenie je užitočné najmä pri práci s ikonami alebo komponentmi, ktoré načítavajú súbory z `dist/assets`.

## Inštalácia s CDN

Ak nechcete používať bundler, môžete načítať pripravený build priamo z CDN.

Odporúčané je načítať:

- hlavný modul `wje-master.js`,
- základné štýly `styles.css`,
- svetlú tému `light.css`,
- prípadne aj `dark.css`, ak chcete prepínať tmavý režim.

```html
<script data-base-path="https://cdn.jsdelivr.net/npm/wj-elements@0.3.8/dist/"></script>
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/wj-elements@0.3.8/dist/wje-master.js"
></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/wj-elements@0.3.8/dist/styles.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/wj-elements@0.3.8/dist/light.css"
/>
```

Atribút `data-base-path` pomáha knižnici správne nájsť interné assety v CDN builde.

