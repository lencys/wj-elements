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

`wje-avatar` slúži na stručnú vizuálnu identifikáciu osoby, tímu, značky alebo iného objektu. V praxi sa najčastejšie používa v zoznamoch používateľov, profilových menu, komentároch, kartách, tabuľkách, notifikáciách alebo v navigačnom headeri. Komponent vie zobraziť obrázok alebo iný vložený obsah cez predvolený slot, prípadne vygenerované iniciály z atribútu `label`, a dopĺňa ho o ďalšie sloty pre ikonu, status a sekundárny obsah.

## Základné použitie

V tejto ukážke sú vedľa seba tri najdôležitejšie režimy: avatar s obrázkom, avatar s iniciálami a avatar s ikonou. Je to dobrý rýchly prehľad toho, že `wje-avatar` nie je iba „obrázok používateľa“, ale všeobecný obal pre malú identifikačnú značku.

import Basic from '@site/static/usage/v1/avatar/basic/index.md';

<Basic />

## Veľkosť avatara

Ukážka demonštruje, že atribút `size` mení rozmery samotného avatar obalu. To znamená, že rovnaký obrázok alebo obsah sa prispôsobí veľkosti komponentu bez potreby meniť markup vo vnútri. Aktuálna implementácia podporuje veľkosti `small`, `medium`, `normal`, `large`, `x-large`, `2x-large`, `3x-large`, `4x-large` a `5x-large`.

import Size from '@site/static/usage/v1/avatar/size/index.md';

<Size />

## Veľkosť avatara s iniciálami

Táto ukážka používa rovnaké veľkostné varianty, ale namiesto obrázka necháva komponent vyrenderovať iniciály z `label`. Je dôležité vedieť, že ak je prítomný boolean atribút `initials`, komponent uprednostní render iniciál pred predvoleným obsahom v slote.

import SizeInitials from '@site/static/usage/v1/avatar/size-initials/index.md';

<SizeInitials />

## Avatar s ikonou

Ak chcete použiť avatar skôr ako malé stavové alebo akčné označenie než profilovú fotografiu, vložte ikonu do slotu `icon`. Vďaka tomu zostáva rovnaká veľkostná a vizuálna obálka, ale obsah tvorí `wje-icon`.

import Icon from '@site/static/usage/v1/avatar/icon/index.md';

<Icon />

## Avatar s iniciálami

Toto je najtypickejší fallback scenár. Komponent vezme text z `label`, vygeneruje z neho iniciály a automaticky dopočíta kontrastné farby pozadia a textu. Je to vhodné vtedy, keď nemáte profilovú fotografiu alebo nechcete riešiť načítanie obrázkov v dlhých zoznamoch.

import Initials from '@site/static/usage/v1/avatar/initials/index.md';

<Initials />

## Avatar so statusom

V tejto ukážke sa do slotu `status` vkladá `wje-status`, ktorý sa zobrazuje v jednom zo štyroch rohov avataru podľa atribútu `status-placement`. V praxi sa to hodí napríklad pre online/offline stav, verifikáciu, synchronizačný stav alebo interné označenie používateľa.

Podporované hodnoty `status-placement` v aktuálnej implementácii sú:

- `top-start`
- `top-end`
- `bottom-start`
- `bottom-end`

Pre viac detailov o samotnom indikátore sa pozrite aj na dokumentáciu komponentu [Status](../status).

import Status from '@site/static/usage/v1/avatar/status/index.md';

<Status />

## Avatar ako trigger dropdownu

Tu je dôležitá jedna praktická nuansa: avatar v tejto ukážke nie je nadradeným obalom pre dropdown. Naopak, `wje-avatar` je vložený do slotu `trigger` komponentu `wje-dropdown`. Ukážka teda demonštruje, ako z avataru spraviť spúšťač profilového menu alebo kontextového panelu.

Atribúty `placement`, `trigger` a `offset` patria samotnému `wje-dropdown`, nie avataru.

import Dropdown from '@site/static/usage/v1/avatar/dropdown/index.md';

<Dropdown />


## Avatar s tooltipom

Aj táto ukážka je založená na kompozícii s iným komponentom: `wje-avatar` je obalený vo `wje-tooltip`. Tooltip teda nepridáva avatar sám od seba, ale získate ho tak, že avatar použijete ako cieľový obsah tooltipu.

import Tooltip from '@site/static/usage/v1/avatar/tooltip/index.md';

<Tooltip />

## Skupina avatarov

Táto ukážka je užitočná hlavne preto, že ukazuje hranicu medzi schopnosťami komponentu a schopnosťami okolitého layoutu. `wje-avatar` nemá vstavaný group wrapper ani špeciálny group API. Prekrývanie viacerých avatarov sa robí cez externý kontajner a vlastné CSS.

Inými slovami: avatar skupinu podporuje nepriamo tým, že sa dobre kombinuje s CSS a s `::part(native)`, ale samotnú logiku skupinovania nevlastní.

import Group from '@site/static/usage/v1/avatar/group/index.md';

<Group />

## API komponentu v praxi

Najdôležitejšie verejné schopnosti `wje-avatar` sú:

- atribúty a properties `label`, `initials` a `size`,
- atribút `status-placement`, ktorý riadi polohu obsahu v slote `status`,
- predvolený slot pre obrázok alebo iný hlavný obsah,
- sloty `icon`, `status` a `secondary`,
- shadow parts `native`, `status` a `secondary`,
- pomocná verejná metóda `isImage()`, ktorá vie zistiť, či avatar obsahuje `wje-img`.

Komponent aktuálne neemituje vlastné custom eventy. Ak potrebujete reagovať na kliknutie, hover alebo otvorenie menu, rieši sa to cez nadradený komponent, do ktorého je avatar vložený, napríklad `wje-dropdown` alebo `wje-tooltip`.

## Kedy použiť

Použite `wje-avatar`, keď potrebujete rýchlu vizuálnu identifikáciu entity v malom priestore. Najväčší prínos má tam, kde pomáha používateľovi rýchlejšie rozoznať, kto alebo čo je predmetom aktuálnej akcie – napríklad pri komentároch, účtoch, notifikáciách, priradených úlohách alebo v hlavičke používateľského menu.

## Kedy nepoužiť

Nepoužívajte ho ako jediný nosič dôležitej informácie. Ak je identita osoby alebo objektu kritická, avatar má byť iba doplnok k textu, nie náhrada mena, názvu alebo popisu. Rovnako nie je vhodný ako náhrada za plnohodnotné tlačidlo bez jasného interakčného kontextu.

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

Komponent sám nevysiela vlastné custom eventy.

<Events />

## Metódy

Ak automatická tabuľka nižšie zobrazuje iba minimum, stojí za pozornosť najmä helper `isImage()`, ktorý vracia, či je vnútri avatara prítomný `wje-img`.

<Methods />

## CSS tieňové časti

<Parts />

## CSS vlastné premenné

Okrem tabuliek nižšie je dobré vedieť, že v initials režime si komponent sám nastavuje najmä `--wje-avatar-background-color` a `--wje-avatar-color`, zatiaľ čo veľkosť a tvar viete ladiť cez premenné ako `--wje-avatar-size`, `--wje-avatar-font-size` a `--wje-avatar-border-radius`.

<CustomProps />

## Sloty

<Slots />
