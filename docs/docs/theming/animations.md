---
title: Animácie
---

<head>
  <title>Animácie | Práca s komponentom wje-animation</title>
  <meta
    name="description"
    content="Komponent wje-animation používa Animate.css a Web Animations API na jednoduché animovanie prvého vloženého elementu bez ručného skladania keyframov."
  />
</head>

Komponent `<wje-animation>` uľahčuje animovanie jedného vloženého elementu bez ručného skladania keyframov. Internálne načítava definície z knižnice [Animate.css](https://animate.style/) a prehráva ich cez Web Animations API.

Najčastejšie použijete atribúty:

- `name` – názov animácie z Animate.css, napríklad `heartBeat`,
- `duration` – trvanie v milisekundách,
- `delay` – oneskorenie pred spustením,
- `endDelay` – oneskorenie po dokončení,
- `iterations` – počet opakovaní,
- `direction`, `easing`, `fill`, `iterationStart` – detailnejšie nastavenie prehrávania.

:::note
Názov animácie je case-sensitive. V aktuálnej implementácii je predvolená hodnota `heartBeat`, preto používajte názvy presne podľa Animate.css. Rovnako si všimnite, že atribúty `endDelay` a `iterationStart` sa zapisujú v camelCase tvare.
:::

## Základný príklad

Ukážka nižšie kombinuje deklaratívne nastavenie cez atribúty s programovým ovládaním cez `play()`, `cancel()` a načítanie zoznamu animácií cez `getAnimationsArray()`.

import Basic from '@site/static/usage/v1/animation/basic/index.md';

<Basic />

## Praktické tipy

- Do `<wje-animation>` vložte jeden hlavný element, ktorý sa má animovať.
- Ak potrebujete animáciu ovládať programovo, použite `play()` a `cancel()`.
- Ak chcete používateľovi ponúknuť výber animácie, využite `getAnimationsArray()` a zobrazte názvy dostupných animácií vo vlastnom UI.
- Pri dlhých alebo nekonečných animáciách myslite na rušivosť aj výkon, najmä v zoznamoch a dashboardoch.

Pre kompletný prehľad atribútov a metód pokračujte na [API stránku komponentu Animation](../api/animation.md).
