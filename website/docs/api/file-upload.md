---
title: "FileUpload"
---

import Props from '@ionic-internal/component-api/v1/avatar/props.md';
import Events from '@ionic-internal/component-api/v1/avatar/events.md';
import Methods from '@ionic-internal/component-api/v1/avatar/methods.md';
import Parts from '@ionic-internal/component-api/v1/avatar/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/avatar/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/avatar/slots.md';

<head>
  <title>FileUpload Component</title>
  <meta name="description" content="Komponent FileUpload poskytuje univerzálnu funkciu nahrávania súborov pre webové aplikácie. Podporuje prispôsobiteľné atribúty, ako sú povolené typy súborov, veľkosť častí alebo tiež maximálnu veľkosť súboru, spolu s metódami drag-and-drop a tradičným výberom súborov." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent FileUpload poskytuje univerzálnu funkciu nahrávania súborov pre webové aplikácie. Podporuje prispôsobiteľné atribúty, ako sú povolené typy súborov, veľkosť častí alebo tiež maximálnu veľkosť súboru, spolu s metódami drag-and-drop a tradičným výberom súborov.

## Základné použitie

import Basic from '@site/static/usage/v1/file-upload/basic/index.md';

<Basic />

## Ikona

import Icon from '@site/static/usage/v1/file-upload/Icon/index.md';

<Icon />

## Atribúty a Vlastnosti

### accepted-types

|  |  |
| --- | --- |
| Popis | Nastaví akceptované typy súborov na nahratie. |
| Atribút | `accepted-types` |
| Typ | `number` |
| Predvolená hodnota | `0` |

### chunk-size

|  |  |
| --- | --- |
| Popis | Nastaví veľkosť fragmentu pre nahrávanie veľkých súborov v bajtoch. |
| Atribút | `chunk-size` |
| Typ | `number` |
| Predvolená hodnota | `1 MB` |


### max-file-size

|  |  |
| --- | --- |
| Popis | Nastaví maximálnu povolenú veľkosť súboru na nahrávanie v bajtoch. |
| Atribút | `max-file-size` |
| Typ | `number` |
| Predvolená hodnota | `1 MB` |

## Eventy

Pre tento komponent nie sú k dispozícii žiadne verejné eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts

| Názov                           | Popis                    |
|---------------------------------|--------------------------|
| `native`                        | Odkazuje na `div` element vo vnútri elementu |

## CSS Custom Vlastnosti

Pre tento komponent nie sú k dispozícií žiadne CSS custom vlastnosti.

## Sloty

Pre tento komponent nie sú k dispozícií žiadne pomenované sloty.
