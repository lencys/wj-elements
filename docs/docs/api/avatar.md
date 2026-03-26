---
title: 'Avatar'
---

import Props from '@ionic-internal/component-api/v1-sk/avatar/props.md';
import Events from '@ionic-internal/component-api/v1-sk/avatar/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/avatar/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/avatar/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/avatar/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/avatar/slots.md';

<head>
  <title>Avatar: vizuálna reprezentácia osoby, tímu alebo objektu</title>
  <meta
    name="description"
    content="Komponent wje-avatar zobrazuje profilový obrázok, iniciály alebo ikonu a podporuje doplnkové sloty pre status a sekundárny obsah."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

`wje-avatar` slúži na rýchlu vizuálnu identifikáciu osoby, tímu, značky alebo iného objektu. Vie zobraziť obrázok alebo iný vložený obsah, fallback iniciály z `label` aj doplnkové sloty pre ikonu, status a sekundárny obsah.

## Základné použitie

V tejto ukážke sú vedľa seba tri najdôležitejšie režimy: avatar s obrázkom, s iniciálami a s ikonou. Je to rýchly prehľad toho, že `wje-avatar` nie je iba profilová fotka, ale všeobecný identifikačný obal.

import Basic from '@site/static/usage/v1/avatar/basic/index.md';

<Basic />

## Veľkosť avatara

Ukážka demonštruje, že atribút `size` mení rozmery samotného obalu. Rovnaký obrázok alebo obsah sa tak prispôsobí bez zmeny vnútorného markupu.

import Size from '@site/static/usage/v1/avatar/size/index.md';

<Size />

## Veľkosť avatara s iniciálami

Rovnaké veľkostné varianty fungujú aj v initials režime. Ak je prítomný boolean atribút `initials`, komponent uprednostní render iniciál pred predvoleným obsahom.

import SizeInitials from '@site/static/usage/v1/avatar/size-initials/index.md';

<SizeInitials />

## Avatar s ikonou

Ak chcete avatar použiť skôr ako malé stavové alebo akčné označenie než profilovú fotografiu, vložte ikonu do slotu `icon`.

import Icon from '@site/static/usage/v1/avatar/icon/index.md';

<Icon />

## Avatar s iniciálami

Toto je typický fallback scenár. Komponent vezme text z `label`, vygeneruje z neho iniciály a automaticky dopočíta kontrastné farby pozadia aj textu.

import Initials from '@site/static/usage/v1/avatar/initials/index.md';

<Initials />

## Avatar so statusom

Do slotu `status` sa vkladá napríklad `wje-status`, ktorý sa zobrazuje v jednom zo štyroch rohov podľa `status-placement`. Hodí sa to pre online stav, verifikáciu alebo iné malé indikátory.

import Status from '@site/static/usage/v1/avatar/status/index.md';

<Status />

## Avatar ako trigger dropdownu

Tu je dôležitá kompozičná nuansa: `wje-avatar` je vložený do slotu `trigger` komponentu `wje-dropdown`. Atribúty `placement`, `trigger` a `offset` teda patria dropdownu, nie avataru.

import Dropdown from '@site/static/usage/v1/avatar/dropdown/index.md';

<Dropdown />


## Avatar s tooltipom

Aj táto ukážka je založená na kompozícii s iným komponentom. Tooltip nepridáva avatar sám od seba; získate ho tým, že avatar použijete ako cieľový obsah `wje-tooltip`.

import Tooltip from '@site/static/usage/v1/avatar/tooltip/index.md';

<Tooltip />

## Skupina avatarov

Táto ukážka ukazuje hranicu medzi schopnosťami komponentu a schopnosťami okolitého layoutu. `wje-avatar` nemá vstavaný group wrapper ani group API; prekrývanie viacerých avatarov sa rieši cez externý kontajner a CSS.

import Group from '@site/static/usage/v1/avatar/group/index.md';

<Group />

## CSS vlastné premenné

Ak potrebujete upraviť rozmery, typografiu alebo farby bez zmeny markup-u, siahnite po CSS premenných komponentu.

import CssProperties from '@site/static/usage/v1/avatar/theming/css-properties/index.md';

<CssProperties />

## Na čo sa oplatí myslieť

- `label` + `initials` je najpraktickejší fallback bez obrázka.
- `status-placement` riadi polohu slotu `status` v jednom zo štyroch rohov.
- Predvolený slot drží hlavný obsah, ďalšie sloty slúžia pre `icon`, `status` a `secondary`.
- Helper `isImage()` vie zistiť, či je v avatari prítomný `wje-img`.
- Vlastné kliky, hover alebo otvorenie menu zvyčajne rieši nadradený komponent, napríklad `wje-dropdown` alebo `wje-tooltip`.

## Prístupnosť

- Ak používate obrázok, zabezpečte zmysluplný alternatívny text na vloženom `img` alebo `wje-img`.
- Ak používate iniciály, nastavte `label`; komponent ho používa aj pre `aria-label` na hoste.
- Pri avatari použitom ako trigger dropdownu alebo tooltipu myslite na prístupnosť nadradeného komponentu, pretože interakcia sa rieši tam.

## Odporúčané postupy

- Pre fallback bez obrázka používajte kombináciu `label` + `initials`.
- Ak je avatar súčasťou akcie alebo menu triggera, nenechávajte používateľa bez textového kontextu v okolí.
- Pri skupinách avatarov riešte prekrývanie a „ring“ efekt cez externé CSS, nie cez očakávanie vstavaného group API.
- Sekundárny obsah v slote `secondary` používajte len vtedy, keď je jeho poloha a význam vo vašom layoute jasný; komponent mu nedáva komplexnú layout logiku.

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
