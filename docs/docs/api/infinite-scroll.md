---
title: 'Infinite-scroll'
---

import Props from '@ionic-internal/component-api/v1-sk/infinite-scroll/props.md';
import Events from '@ionic-internal/component-api/v1-sk/infinite-scroll/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/infinite-scroll/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/infinite-scroll/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/infinite-scroll/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/infinite-scroll/slots.md';

<head>
  <title>Infinite Scroll | Komponent Nekonečného scrollovania</title>
  <meta
    name="description"
    content="Infinite Scroll umožňuje implementovať dynamické načítavanie dát, keď používatelia prechádzajú väčším množstvom obsahu."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Infinite Scroll umožňuje implementovať dynamické načítavanie dát, keď používatelia prechádzajú väčším množstvom obsahu. Element umožňuje zobraziť akýkoľvek obsah zo zvoleného koncového bodu (endpointu) bez toho, aby bola potrebná ďalšia interakcia, napríklad kliknutie na tlačidlo “Načítať viac” alebo na odkaz na ďalšiu stránku. Komponent zároveň zobrazuje indikátor načítania (loader), aby informoval používateľov o načítavaní nového obsahu.

import Basic from '@site/static/usage/v1/infinite-scroll/basic/index.md';

<Basic />

## Počet načítaných položiek (size)

Atribút `size` definuje počet položiek pri každom načítaní nového obsahu.

import Size from '@site/static/usage/v1/infinite-scroll/size/index.md';

<Size />

## Card

Element Infinite scroll je možné použiť v kombinácii s akýmkoľvek Elements elementom. Napríklad `Card`.

import Card from '@site/static/usage/v1/infinite-scroll/card/index.md';

<Card />

## Vlastné dáta

Ukážka pripája infinite scroll na vlastný zdroj dát namiesto predpripraveného zoznamu, takže je bližšie reálnemu použitiu v aplikácii.

import Custom from '@site/static/usage/v1/infinite-scroll/custom/index.md';

<Custom />


## Kedy použiť

Použite `wje-infinite-scroll`, keď chcete riešiť daný UI problém konzistentne v rámci WebJET dizajn systému.

## Kedy nepoužiť

Nepoužívajte komponent mimo jeho zodpovednosti; pri netypickom prípade radšej zložte viac menších prvkov.

## Prístupnosť

Skontrolujte klávesnicové ovládanie, focus stavy, kontrast a zrozumiteľné pomenovanie interaktívnych prvkov.

## Odporúčané postupy

- Preferujte API komponentu pred ručnými DOM zásahmi.
- Držte sa dizajnových tokenov a konzistentných konvencií pomenovania.
- Pred nasadením otestujte komponent v reálnych dátových scenároch.

## Atribúty a vlastnosti

<Props />

## Udalosti

<Events />

## Metódy

<Methods />

## CSS tieňové časti

<Parts />

## CSS vlastné premenné

<CustomProps />

## Sloty

<Slots />
