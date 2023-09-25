---
title: "Chip"
---

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent Chip je univerzálny element, ktorý predstavuje malý vizuálny blok obsahujúci rôzne ďalšie elementy, ako napríklad avatary, text a ikony. Ponúka možnosti prispôsobenia farieb, stavov a ďalšie.

## Basic Usage

import Basic from '@site/static/usage/v1/chip/basic/index.md';

<Basic />

## Vkladanie ďalších prvkov

V elemente chip je možné zobraziť aj ďalšie elementy, napríklad elementy **avatar**, **label** a **icon**.

import SlotExample from '@site/static/usage/v1/chip/slots/index.md';

<SlotExample />

## Štýlovanie

### Farebné varianty

import Colors from '@site/static/usage/v1/chip/theming/colors/index.md';

<Colors />

### Štýlovanie pomocou CSS custom vlastností

import CSSProps from '@site/static/usage/v1/chip/theming/css-properties/index.md';

<CSSProps />

## Vlastnosti

### **active**

| Popis | Ak true, do elementu sa vloží ikona fajky (check) |
| --- | --- |
| Atribút | active |
| Typ | boolean |
| Predvolená hodnota | false |

### color

| Popis | Farba, ktorá sa má použiť z palety farieb aplikácie.                                      |
| --- |-------------------------------------------------------------------------------------------|
| Atribút | color                                                                                     |
| Typ | "danger" ｜ "dark" ｜ "light" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "warning" ｜ undefined |
| Predvolená hodnota | “primary”                                                                                 |

### disabled[](#disabled)

| Popis | Ak true, používateľ nemôže s elementom interagovať. |
| --- | --- |
| Atribút | disabled |
| Typ | boolean |
| Predvolená hodnota | false |

## Eventy[](#events)

Pre tento komponent nie sú k dispozícii žiadne verejné eventy.

## Metódy[](#methods)

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts[](#css-shadow-parts)

Pre tento komponent nie sú k dispozícií žiadne CSS shadow parts.

## CSS Custom Vlastnosti

| Name | Description |
| --- | --- |
| --background | Pozadie elementu chip |
| --color | Farba elementu chip |

## Sloty

Pre tento komponent nie sú k dispozícii žiadne sloty.