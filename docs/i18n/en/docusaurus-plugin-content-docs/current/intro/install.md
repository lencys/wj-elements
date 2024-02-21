---
title: Inštalácia WebJET Elements
sidebar_label: Inštalácia
---


  <title>Ako získať WebJET Elements pre svoj projekt</title>
  <meta
    name="description"
    content="Zahrňte WebJET Elements do svojho projektu pomocou CDN alebo ho nainštalujte pomocou npm."
  />


Zahrňte WebJET Elements do svojho projektu pomocou [CDN](#inštalácia-s-cdn) alebo ho nainštalujte pomocou [npm](#inštalácia-s-npm).

## Inštalácia s npm

Pomocou správcu balíkov npm môžete do takmer každého projektu vložiť zdrojové súbory aplikácie Elements.

Pred pokračovaním sa uistite, že máte v počítači nainštalovaný Node.js. Ak chcete nastaviť prostredie pre Elements, pozrite si [tieto pokyny](environment.md).

Nainštalujte WebJet Elements pomocou npm:

```shell
$ npm install wj-elements
```

Ak existovala predchádzajúca inštalácia rozhrania Ionic CLI, bude potrebné ju odinštalovať z dôvodu zmeny názvu balíka.

```shell
$ npm uninstall wj-elements
```

## Inštalácia s CDN

Použite CDN a zahrňte do svojho projektu skompilované CSS a JS súbory WebJET Elements.

```html
<script type="module" src="https://cdn.jsdelivr.net/gh/lencys/wj-elements@dddb1c19734498c5b2a17f2e6ed605d0cd40d02e/wj-master.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lencys/wj-elements@e5cdd8566b4acaad5c11040bfbb4e09e170074c9/style.css" />
```
