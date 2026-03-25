---
title: Animácie
---

<head>
  <title>Animácie | Práca s komponentom wje-animation</title>
  <meta
    name="description"
    content="Komponent wje-animation používa Animate.css a Web Animations API na jednoduché animovanie vloženého obsahu."
  />
</head>

Komponent `<wje-animation>` uľahčuje animovanie obsahu bez toho, aby ste museli ručne skladať keyframy alebo priamo pracovať s Web Animations API. Internálne načítava definície z knižnice [Animate.css](https://animate.style/) a aplikuje ich na prvý slotted element.

Najčastejšie používané atribúty sú:

- `name` – názov animácie z Animate.css, napríklad `heartBeat`,
- `duration` – trvanie v milisekundách,
- `delay` – oneskorenie pred spustením,
- `endDelay` – oneskorenie po dokončení,
- `iterations` – počet opakovaní,
- `direction`, `easing`, `fill` – detailné nastavenia prehrávania.

:::note
Názov animácie je case-sensitive. V kóde komponentu je predvolená hodnota `heartBeat`, preto používajte názvy presne podľa Animate.css.
:::

import Basic from '@site/static/usage/v1/animation/basic/index.md';

<Basic />

## Praktické tipy

- Do `<wje-animation>` vložte jeden hlavný element, ktorý sa má animovať.
- Ak chcete animáciu ovládať programovo, použite metódy `play()` a `cancel()`.
- Ak potrebujete používateľovi ponúknuť výber animácie, môžete využiť metódu `getAnimationsArray()` a získať zoznam dostupných názvov.

Pre kompletný prehľad atribútov a metód pokračujte na [API stránku komponentu Animation](../api/animation.md).
