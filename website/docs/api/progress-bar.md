---
title: "Progress bar"
---

<head>
  <title>Progress Bar | Horizontal App Progress Bar for Loading Indicator</title>
  <meta name="description" content="ion-progress-bars are horizontal loading indicators that inform users about the status of ongoing app processes—such as submitting a form or saving updates." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Progress Bar element je dynamický komponent navrhnutý na vizualizáciu priebehu. Ponúka možnosť vytvárať prispôsobiteľné kruhové ukazovatele s rôznymi možnosťami konfigurácie. 

## Základné použitie

Pre použitie komponentu Progress Bar, ho zahrňte do HTML s požadovanými atribútmi. Atribút progress nastaví percentuálnu hodnotu priebehu v progress bare.

import Basic from '@site/static/usage/v7/progress-bar/basic/index.md';

<Basic />

## Type

Podporované sú dva typy progress barov. Pridaním vlastnosti `type` s hodnotou `“circle”` zobrazíte progress bar s okrúhlym dizajnom. 


import Type from '@site/static/usage/v7/progress-bar/type/index.md';

<Type />

## Label

Pre zobrazenie popisiek pri progress bare je potrebné vložiť do jeho vnútra **Label** element a definovať  mu pozíciu pridaním atribútu **slot** s hodnotu **start** alebo **end**. 

import Label from '@site/static/usage/v7/progress-bar/label/index.md';

<Label />


## Linecap

Pridaním vlastnosti **linecap** s hodnotou **“round”** zobrazíte ukazovateľ priebehu so zaobleným koncom.


```html
<wj-progress-bar progress="80" stroke="12" linecap="round"></wj-progress-bar>
```

## Radius

Atribút radius určí priemer okrúhleho progress baru.


```html
<wj-progress-bar progress="60" radius="40"></wj-progress-bar>
```

## Stroke

Atribút stroke definuje šírku progress baru v pixeloch.


```html
<wj-progress-bar progress="60" radius="20" stroke="5"></wj-progress-bar>
```

## Progress bar s obrázkom

Pre zobrazenie obrázku vo vnútri elementu, je potrebné obrázok zaobaliť do progress bar elementu.


```html
<wj-progress-bar progress="60" radius="20" stroke="3">
  <wj-thumbnail>
    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
  </wj-thumbnail>
</wj-progress-bar>
```

## Farebné varianty progress baru

Vlastnosť **color** upravuje farbu elementu. V predvolenom nastavení má element farbu **dark**. Nastavením tejto hodnoty sa farba elementu zmení na jednu z farieb prednastavenej farebnej palety.


```html
<p>
  <wj-progress-bar progress="60" radius="20"></wj-progress-bar>
</p>
<p>
  <wj-progress-bar progress="60" radius="20" color="primary"></wj-progress-bar>
</p>
<p>
  <wj-progress-bar progress="60" radius="20" color="complete"></wj-progress-bar>
</p>
<p>
  <wj-progress-bar progress="60" radius="20" color="success"></wj-progress-bar>
</p>
<p>
  <wj-progress-bar progress="60" radius="20" color="warning"></wj-progress-bar>
</p>
<p>
  <wj-progress-bar progress="60" radius="20" color="danger"></wj-progress-bar>
</p>
<p>
  <wj-progress-bar progress="60" radius="20" color="dark"></wj-progress-bar>
</p>
<p>
  <wj-progress-bar progress="60" radius="20" color="light"></wj-progress-bar>
</p>
```

## Vlastnosti

### color

| Popis | Farba, ktorá sa má použiť z palety farieb vašej aplikácie. Predvolené možnosti sú: "primary", "complete", "success", "warning", "danger", "dark" a "light". |
| --- | --- |
| Atribút | color |
| Typ | "complete" ｜ "danger" ｜ "dark" ｜ "light" ｜ "primary" ｜ "success" ｜ "warning" ｜ undefined |
| Predvolená hodnota | "dark" |

### linecap

| Popis | Definuje ukazovateľ priebehu so zaobleným koncom. |
| --- | --- |
| Atribút | round |
| Typ | "boolean" |
| Predvolená hodnota | false |

### **progress**

| Popis | Určuje hodnotu priebehu v percentách. |
| --- | --- |
| Atribút | progress |
| Typ | "number" |
| Predvolená hodnota | 0 |

### **radius**

| Popis | Určuje hodnotu priemeru progress baru v pixeloch. |
| --- | --- |
| Atribút | radius |
| Typ | "number" |
| Predvolená hodnota | 70 |

### **stroke**

| Popis | Určuje hodnotu šírky progress baru v pixeloch. |
| --- | --- |
| Atribút | stroke |
| Typ | "number" |
| Predvolená hodnota | 12 |

### **type**

| Popis | Pridaním vlastnosti type s hodnotou “circle” zobrazíte progress bar s okrúhlym dizajnom.  |
| --- | --- |
| Atribút | type |
| Typ | "boolean" |
| Predvolená hodnota | false |

## Eventy

Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy[](https://ionicframework.com/docs/api/badge#methods)

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts[](https://ionicframework.com/docs/api/badge#css-shadow-parts)

Pre tento komponent nie sú k dispozícií žiadne CSS shadow parts.

## CSS Custom Vlastnosti

| Name | Description |
| --- | --- |
| --wj-progress-bar-color | Definuje farbu ukazovateľa priebehu |
| --wj-progress-bar-text-size | Definuje veľkosť textu |

## Sloty

| Názov | Popis |
| --- | --- |
| end | Obsah sa umiestni vpravo v LTR a vľavo v RTL. |
| start | Obsah je umiestnený vľavo v LTR a vpravo v RTL. |