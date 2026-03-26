---
title: 'Accordion Item'
---

import Props from '@ionic-internal/component-api/v1-sk/accordion-item/props.md';
import Events from '@ionic-internal/component-api/v1-sk/accordion-item/events.md';
import Methods from '@ionic-internal/component-api/v1-sk/accordion-item/methods.md';
import Parts from '@ionic-internal/component-api/v1-sk/accordion-item/parts.md';
import CustomProps from '@ionic-internal/component-api/v1-sk/accordion-item/custom-props.md';
import Slots from '@ionic-internal/component-api/v1-sk/accordion-item/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<head>
  <title>Accordion Item: jedna rozbaľovacia položka s headline a obsahom</title>
  <meta
    name="description"
    content="Komponent wje-accordion-item predstavuje jednu interaktívnu položku akordeónu so slotmi pre headline, description, toggle a content, s vlastnými eventmi a verejnými metódami expand/collapse."
  />
</head>

<EncapsulationPill type="shadow" />

`wje-accordion-item` je samotná interaktívna položka vnútri `wje-accordion`. Práve tento komponent rieši kliknutie na hlavičku, prepínanie medzi stavmi `collapsed` a `expanded`, nastavovanie ARIA väzieb medzi headline a panelom obsahu, fallback toggle ikonu aj emitovanie eventov pri otvorení a zatvorení. Ak si chcete zapamätať jednu vec, tak túto: `wje-accordion` koordinuje skupinu, ale `wje-accordion-item` je komponent, ktorý používateľ skutočne otvára a zatvára.

## Základné použitie v kontexte skupiny

Nasledujúca ukážka používa jednu položku vo vnútri `wje-accordion`, aby bolo jasne vidieť, kam patria sloty `headline`, `description` a `content`. V headline je zároveň vložený aj `wje-dropdown`, čo je dobrý príklad toho, že hlavička môže obsahovať nielen text, ale aj sekundárne akcie.

import Basic from '@site/static/usage/v1/accordion/basic/index.md';

<Basic />

## Ako položka funguje

- Slot `headline` tvorí klikateľnú hlavičku. Komponent jej po vyrenderovaní nastaví `role="button"`, `tabindex="0"`, `aria-controls` a `aria-expanded`.
- Slot `description` je doplnkový text v hlavičke a hodí sa na krátky kontext, stav alebo pomocný popis.
- Slot `content` obsahuje rozbaľovanú časť.
- Slot `toggle` je voliteľný. Ak ho nevyplníte vlastným obsahom, komponent zobrazí fallback `wje-icon` s chevrónom.
- Stav sa riadi CSS triedami `collapsed` a `expanded`. Ak položka po inicializácii nemá triedu `expanded`, komponent jej automaticky doplní `collapsed`.

## Eventy a metódy, ktoré sa naozaj používajú

`wje-accordion-item` pri interakcii dispatchuje dva vlastné eventy:

- `wje-accordion-item:open`
- `wje-accordion-item:close`

Oba eventy bubblujú nahor, takže ich môžete počúvať priamo na položke aj na nadradenom `wje-accordion`. Detail eventu obsahuje minimálne referenciu na aktuálny komponent v `detail.context`, čo používa aj wrapper na koordináciu zatvárania ostatných položiek.

Okrem toho sú k dispozícii aj dve praktické verejné metódy:

- `expand()` otvorí položku programovo,
- `collapse()` ju zatvorí programovo.

To je užitočné napríklad v onboarding flow, vo wizardoch alebo pri väzbe na vlastné ovládacie prvky mimo headline.

## Farby, parts a CSS premenné

Položka podporuje farebné varianty cez atribút `color`. V aktuálnych stylesheetoch sú pripravené varianty `primary`, `complete`, `success`, `danger`, `warning` a `info`.

Na detailné štylizovanie sú najdôležitejšie tieto shadow parts:

- `native` – obal celej položky,
- `headline` – klikateľná hlavička,
- `description` – slot s doplnkovým popisom,
- `toggle` – oblasť pre ikonu alebo vlastný toggle obsah,
- `content` – rozbaľovaný obsahový panel.

Komponent sa zároveň opiera o CSS custom properties ako `--wje-accordion-background`, `--wje-accordion-border`, `--wje-accordion-background-hover`, `--wje-accordion-border-hover`, `--wje-accordion-background-expanded`, `--wje-accordion-border-expanded`, `--wje-accordion-headline-color`, `--wje-accordion-content-color` a `--wje-accordion-marker-rotate`. To je dôležité vedieť hlavne vtedy, keď potrebujete meniť vizuál bez zásahu do markup štruktúry.

## Kedy použiť

Použite `wje-accordion-item`, keď chcete jednu kompaktnú sekciu s vlastnou hlavičkou a rozbaľovaným telom, ale zároveň potrebujete zostať kompatibilní s grupovaním v `wje-accordion`. Typicky ide o FAQ položku, nastavenie s doplnkovým vysvetlením, detail k objednávke alebo sekundárny informačný blok v admin rozhraní.

## Kedy nepoužiť

Nepoužívajte ho ako bežný kontajner bez potreby expand/collapse logiky. Rovnako nie je vhodný tam, kde musí byť celý obsah stále dostupný bez prepínania alebo kde interakciu riadi úplne iný ovládací prvok než headline.

## Prístupnosť

- Headline je ovládateľný klávesami `Enter` a `Space`.
- Obsah panelu má `role="region"` a je previazaný s headline cez `aria-labelledby`.
- Ak do headline vkladáte viac interaktívnych prvkov, otestujte, či sa ich ovládanie „nebije“ s klikom na celú hlavičku.

## Odporúčané postupy

- Slot `headline` používajte na jasný názov sekcie, nie na priveľmi dlhý odsek textu.
- Slot `description` držte stručný; detailné vysvetlenie presuňte skôr do `content`.
- Ak potrebujete vlastný toggle vzhľad, vyplňte slot `toggle`, ale zachovajte používateľovi zrozumiteľnú affordance, že ide o rozbaľovací prvok.
- Pri programovom otváraní a zatváraní myslite na konzistenciu s eventmi a stavom nadradeného `wje-accordion`.

## Atribúty a vlastnosti

<Props />

## Udalosti

<Events />

## Metódy

<Methods />

## CSS tieňové časti

<Parts />

## CSS vlastné premenné

Ak automatická tabuľka nižšie nezachytí všetky možnosti, v aktuálnej implementácii sa oplatí poznať aspoň tieto premenné: `--wje-accordion-background`, `--wje-accordion-border`, `--wje-accordion-background-hover`, `--wje-accordion-border-hover`, `--wje-accordion-background-expanded`, `--wje-accordion-border-expanded`, `--wje-accordion-headline-color`, `--wje-accordion-content-color` a `--wje-accordion-marker-rotate`.

<CustomProps />

## Sloty

<Slots />
