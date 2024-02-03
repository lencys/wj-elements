---
title: "Tooltip"
---

<head>
  <title>Tooltip : Vyskakovacej nápovedy pri nájazde myšou</title>
  <meta name="description" content="Element Tooltip slúži na zobrazovanie vyskakovacej nápovedy pri nájazde myšou a je ho možné pripojiť k rôznym elementom webovej stránky. Je ľahko prispôsobiteľný pomocou atribútov pre obsah a umiestnenie." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element `Tooltip` slúži na zobrazovanie vyskakovacej nápovedy pri nájazde myšou a je ho možné pripojiť k rôznym elementom webovej stránky. Je ľahko prispôsobiteľný pomocou atribútov pre obsah a umiestnenie. Tooltip sa zobrazí, keď používateľ prejde myšou nad cieľový element, a zmizne, keď myš element opustí.

## Basic Usage

import Basic from '@site/static/usage/v1/tooltip/basic/index.md';

<Basic />


## Atribúty a Vlastnosti

### active

|  |  |
| --- | --- |
| Popis | Ak `true`, toggle je aktivovaný |
| Atribút | `active` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### content

|  |  |
| --- | --- |
| Popis | Ak `true`, s toggle elementom nie je možné interagovať |
| Atribút | `content` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### offset

|  |  |
| --- | --- |
| Popis | Určuje veľkosť odsadenia tooltip elementu v pixeloch.|
| Atribút | `offset` |
| Typ | `number` |
| Predvolená hodnota | `0` |

### placement

|  |  |
| --- | --- |
| Popis | Určuje pozíciu tooltip elementu. Predvolené možnosti sú: `top`, `bottom`, `left` a `right`. |
| Atribút | `placement` |
| Typ | `bottom`, `left`, `right`, `top` |
| Predvolená hodnota | `top` |


## Eventy

| Event             | Popis                                  |
|-------------------|----------------------------------------|
| `mouseenter`      | Vyvolaný pri ukázaní na element myšou.     |
| `mouseleave`      | Vyvolaný keď myš opustí element.     |

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Party

Pre tento komponent nie sú k dispozícií žiadne CSS shadow parts.


## CSS Custom Vlastnosti

| Názov                      | Popis       |
|----------------------------|-------------|
| `--arrow-size`          | Určuje veľkosť šípky tooltipu |
| `--arrow-color`         | Určuje farbu šípky tooltipu |


## Sloty

Pre tento komponent nie sú k dispozícii žiadne sloty.

