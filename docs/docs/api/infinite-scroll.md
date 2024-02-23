---
title: "Infinite-scroll"
---
import Props from '@ionic-internal/component-api/v1/infinite-scroll/props.md';
import Events from '@ionic-internal/component-api/v1/infinite-scroll/events.md';
import Methods from '@ionic-internal/component-api/v1/infinite-scroll/methods.md';
import Parts from '@ionic-internal/component-api/v1/infinite-scroll/parts.md';
import CustomProps from '@ionic-internal/component-api/v1/infinite-scroll/custom-props.md';
import Slots from '@ionic-internal/component-api/v1/infinite-scroll/slots.md';

<head>
  <title>Infinite Scroll | Komponent Nekonečného scrollovania</title>
  <meta name="description" content="Infinite Scroll umožňuje implementovať dynamické načítavanie dát, keď používatelia prechádzajú väčším množstvom obsahu. Element umožňuje zobraziť akýkoľvek obsah zo zvoleného koncového bodu (endpointu) bez toho, aby bola potrebná ďalšia interakcia, napríklad kliknutie na tlačidlo “Načítať viac” alebo na odkaz na ďalšiu stránku." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


 Infinite Scroll umožňuje implementovať dynamické načítavanie dát, keď používatelia prechádzajú väčším množstvom obsahu. Element umožňuje zobraziť akýkoľvek obsah zo zvoleného koncového bodu (endpointu) bez toho, aby bola potrebná ďalšia interakcia, napríklad kliknutie na tlačidlo “Načítať viac” alebo na odkaz na ďalšiu stránku. Komponent zároveň zobrazuje indikátor načítania (loader), aby informoval používateľov o načítavaní nového obsahu.

import Basic from '@site/static/usage/v1/infinite-scroll/basic/index.md';

<Basic />

## Počet načítaných položiek (size)

Atribút `size` definuje počet položiek pri každom načítaní nového obsahu.

import Size from '@site/static/usage/v1/infinite-scroll/size/index.md';

<Size />

## Vlastný obsah

Element Infinite scroll je možné použiť v kombinácii s akýmkoľvek Elements elementom. Napríklad `Card`.

import Custom from '@site/static/usage/v1/infinite-scroll/custom/index.md';

<Custom />

## Atribúty a Vlastnosti

<Props />

## Eventy

<Events />

## Metódy

<Methods/>

## CSS Shadow Parts

<Parts />

## CSS Custom Vlastnosti

<CustomProps />

## Sloty

<Slots />