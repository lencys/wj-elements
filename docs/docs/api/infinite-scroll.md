---
title: "Infinite-scroll"
---

<head>
  <title>Infinite Scroll | ion-infinite-scroll Action Component</title>
  <meta name="description" content="The ion-infinite-scroll component calls an action to be performed when the user scrolls a specified distance from the bottom or top of the page." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


 Infinite Scroll umožňuje implementovať dynamické načítavanie dát, keď používatelia scrollujú väčším množstvom obsahu. Element umožňuje zobraziť akýkoľvek obsah zo zvoleného koncového bodu (endpointu) bez toho, aby bola potrebná ďalšia interakcia, napríklad kliknutie na tlačidlo “Načítať viac” alebo na odkaz na ďalšiu stránku. Komponent zároveň zobrazuje indikátor načítania (loader), aby informoval používateľov o načítavaní nového obsahu.

import Basic from '@site/static/usage/v1/infinite-scroll/basic/index.md';


<Basic />


## Počet načítaných položiek (size)

Atribút `size` definuje počet položiek pri každom načítaní nového obsahu.

import Size from '@site/static/usage/v1/infinite-scroll/size/index.md';

<Size />

## Vlastný obsah

Element Infinite scroll je možné použiť v kombinácii s akýmkoľvek Elements elementom. Napríklad `Card`.

import Card from '@site/static/usage/v1/infinite-scroll/card/index.md';

<Card />

## Atribúty a Vlastnosti

### iterate

|  |  |
| --- | --- |
| Popis | Slúži na identifikáciu elementu, ktorý má byť použitý ako šablóna pre jednotlivé položky počas procesu nekonečného scrollovania. |
| Atribút | `iterate `|
| Typ |`string` |
| Predvolená hodnota | undefined |

### placement

|  |  |
| --- | --- |
| Popis | Používa sa na určenie cieľového elementu, do ktorého sa majú načítané údaje vložiť počas procesu nekonečného scrollovania. Určuje, kam sa novo načítaný obsah pridá v rámci DOM. |
| Atribút | `placement` |
| Typ | `string` |
| Predvolená hodnota | undefined |

### size

|  |  |
| --- | --- |
| Popis | Definuje počet položiek pri každom načítaní |
| Atribút | `size` |
| Typ | `integer` |
| Predvolená hodnota | `10` |

### url

|  |  |
| --- | --- |
| Popis | Definuje url adresu koncového bodu (endpointu) dát na načítanie |
| Atribút | `url` |
| Typ | string |
| Predvolená hodnota | undefined |

## Eventy

Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts[](https://ionicframework.com/docs/api/badge#css-shadow-parts)

Pre tento komponent nie sú k dispozícií žiadne CSS shadow parts.

## CSS Custom Vlastnosti

Pre tento komponent nie sú k dispozícií žiadne CSS custom vlastnosti.

## Sloty

Pre tento komponent nie sú k dispozícii žiadne sloty.