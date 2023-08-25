---
title: "Badge"
---
import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Badge sú inline-block elementy, ktoré majú informatívny charakter a zvyčajne sa zobrazujú v blízkosti iného elementu. Používajú sa ako upozornenie, že k elementu sú priradené ďalšie elementy, a informujú používateľa o ich počte.

## Použitie

Ak chcete použiť komponent Badge, zahrňte ho do HTML s požadovanými atribútmi.



```html
<wj-list>
  <wj-item>
    <wj-badge slot="start">11</wj-badge>
    <wj-label>Badge in start slot</wj-label>
  </wj-item>
  <wj-item>
    <wj-badge slot="end">22</wj-badge>
    <wj-label>Badge in end slot</wj-label>
  </wj-item>
</wj-list>
```

## Úprava štýlov

### Farby



```html
<wj-list>
  <wj-item>
    <wj-label>Followers</wj-label>
    <wj-badge color="primary">22k</wj-badge>
  </wj-item>
  <wj-item>
    <wj-label>Likes</wj-label>
    <wj-badge color="complete">118k</wj-badge>
  </wj-item>
  <wj-item>
    <wj-label>Stars</wj-label>
    <wj-badge color="success">34k</wj-badge>
  </wj-item>
  <wj-item>
    <wj-label>Completed</wj-label>
    <wj-badge color="warning">80</wj-badge>
  </wj-item>
  <wj-item>
    <wj-label>Warnings</wj-label>
    <wj-badge color="danger">70</wj-badge>
  </wj-item>
  <wj-item>
    <wj-label>Notifications</wj-label>
    <wj-badge color="info">1000</wj-badge>
  </wj-item>
  <wj-item>
    <wj-label>Notifications</wj-label>
    <wj-badge color="menu">1000</wj-badge>
  </wj-item>
</wj-list>
```

### CSS Custom Vlastnosti

```html

```

## Atribúty a Vlastnosti

### color

|  |  |
| --- | --- |
| Popis | Farba, ktorá sa má použiť z palety farieb vašej aplikácie. Predvolené možnosti sú: `"primary"`, `"complete"`, `"success"`, `"warning"`, `"danger"`, `"info"`, `"contrast-low"` a `"menu"`. |
| Atribút | `color` |
| Typ | `"complete"` ｜ `"danger"` ｜ `"info"` ｜ `"menu"` ｜ `"primary"` ｜ `"success"` ｜ `"warning"` ｜ `undefined` |
| Predvolená hodnota | `"contrast-low"` |

## Eventy

Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts

Pre tento komponent nie sú k dispozícií žiadne CSS shadow parts.

## CSS Custom Vlastnosti


| Názov | Popis |
| --- | --- |
| `--wj-chip-border-radius` | Upraví zaoblenie elementu badge |

## Sloty

| Názov | Popis |
| --- | --- |
| `` | Obsah sa umiestni medzi named sloty. |
| `end` | Obsah sa umiestni vpravo v LTR a vľavo v RTL. |
| `icon-only` | Mal by sa použiť na ikonu v tlačidle, ktoré neobsahuje text. |
| `start` | Obsah je umiestnený vľavo v LTR a vpravo v RTL. |