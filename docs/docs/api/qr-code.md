---
title: 'QR Code'
---

import Props from '@ionic-internal/component-api/v1-sk/qr-code/props.md';
import Events from '@ionic-internal/component-api/v1-sk/qr-code/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/qr-code/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/qr-code/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/qr-code/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/qr-code/slots.md';

<head>
  <title>QR Code | QR Kód</title>
  <meta
    name="description"
    content="API dokumentácia pre wje-qr-code vrátane odporúčaného použitia, atribútov, udalostí, metód, možností štýlovania a slotov."
  />
</head>

Kód pozostávajúci z poľa čiernych a bielych štvorcov, ktorý sa zvyčajne používa na ukladanie adries URL alebo iných informácií na čítanie fotoaparátom na smartfóne. Tieto qr kódy si je možné jednoducho prispôsobiť použitím rôznych atribútov.

## Základné použitie

Ak chcete použiť komponent QR, zahrňte ho do HTML s požadovanými atribútmi. Odporúčaný zápis v HTML je kebab-case (`foreground-alpha`, `background-alpha`), komponent však akceptuje aj aliasy v camelCase (`foregroundAlpha`, `backgroundAlpha`).

import Basic from '@site/static/usage/v1/qr-code/basic/index.md';

<Basic />

## Podporované atribúty

- `value`: hodnota zakódovaná do QR.
- `size`: veľkosť výsledného QR v px.
- `padding`: vnútorné odsadenie v px.
- `foreground`: farba popredia.
- `foreground-alpha` (alias `foregroundAlpha`): nepriehľadnosť popredia v rozsahu `0-1`.
- `background`: farba pozadia.
- `background-alpha` (alias `backgroundAlpha`): nepriehľadnosť pozadia v rozsahu `0-1`.
- `level`: úroveň korekcie chyby (`L`, `M`, `Q`, `H`).

Sloty:
- `top`: obsah zobrazený nad QR.
- `bottom`: obsah zobrazený pod QR.


## Kedy použiť

Použite `wje-qr-code` na zobrazenie obsahu, ktorý zlepšuje čitateľnosť, skenovateľnosť alebo kontext informácií.

## Kedy nepoužiť

Nepoužívajte ho ako náhradu za štruktúrované dáta tam, kde je potrebná presná interakcia.

## Prístupnosť

Doplňte alternatívny text pre obrázky, čitateľné kontrasty a textové ekvivalenty pre ikony bez popisu.

## Odporúčané postupy

- Komprimujte médiá a používajte lazy loading pri veľkých zoznamoch.
- Pri kartách a zoznamoch držte konzistentné informačné priority.
- Neopakujte rovnakú informáciu súčasne textom aj ikonou bez pridanej hodnoty.

## Atribúty a vlastnosti

| Názov | Atribút | Typ | Predvolené | Popis |
| --- | --- | --- | --- | --- |
| `value` | `value` | `string` | `empty value` | Hodnota, ktorá sa zakóduje do QR kódu (URL alebo text). |
| `size` | `size` | `number` | podľa knižnice QRious | Výsledná veľkosť QR kódu v pixeloch. |
| `padding` | `padding` | `number` | podľa knižnice QRious | Vnútorné odsadenie okolo QR kódu. |
| `foreground` | `foreground` | `string` | podľa knižnice QRious | Farba popredia QR kódu. |
| `foregroundAlpha` | `foreground-alpha` (`foregroundAlpha`) | `number` (`0-1`) | podľa knižnice QRious | Nepriehľadnosť popredia. |
| `background` | `background` | `string` | podľa knižnice QRious | Farba pozadia QR kódu. |
| `backgroundAlpha` | `background-alpha` (`backgroundAlpha`) | `number` (`0-1`) | podľa knižnice QRious | Nepriehľadnosť pozadia. |
| `level` | `level` | `L` \| `M` \| `Q` \| `H` | podľa knižnice QRious | Úroveň korekcie chýb. |

## Udalosti

Komponent aktuálne neemituje vlastné doménové eventy.

## Metódy

Komponent aktuálne neposkytuje verejné metódy.

## CSS tieňové časti

- `native` - natívny `canvas` element, v ktorom sa vykresľuje QR.

## CSS vlastné premenné

Komponent aktuálne neexportuje vlastné CSS custom properties.

## Sloty

- `top` - obsah zobrazený nad QR kódom.
- `bottom` - obsah zobrazený pod QR kódom.
