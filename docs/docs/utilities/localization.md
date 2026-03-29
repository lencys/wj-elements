---
title: Lokalizácia
sidebar_label: Lokalizácia
---

<head>
  <title>Lokalizácia | WebJET Elements</title>
  <meta
    name="description"
    content="Jednoduchý quick start pre localization vo WebJET Elements a prehľad všetkých Localizer funkcií."
  />
</head>

`Localizer` slúži na dve veci: preklady textov a locale-aware formátovanie čísel, dátumov a relatívneho času.

## Rýchly štart

Ak chcete localization rozbehať čo najjednoduchšie, stačí:

1. nastaviť `lang` na `<html>`,
2. vytvoriť `window.translations = new Map()`,
3. zaregistrovať preklad cez `Localizer.registerTranslation(...)`,
4. vytvoriť `new Localizer(...)`,
5. volať `translate()`, `translateWithParams()`, `translatePlural()`, `formatNumber()`, `formatDate()` a `relativeTime()`.

### `index.html`

```html
<!doctype html>
<html lang="sk-sk">
  <head>
    <script>
      window.translations = new Map();
    </script>
    <script type="module" src="/src/main.js"></script>
  </head>
  <body></body>
</html>
```

### `main.js`

```js
import 'wj-elements';
import { Localizer } from 'wj-elements';

Localizer.registerTranslation({
  code: 'sk-sk',
  name: 'Slovenčina',
  dir: 'ltr',
  'app.hello': 'Ahoj',
  'app.greeting': 'Ahoj {name}',
  'cart.items.one': '{count} položka',
  'cart.items.few': '{count} položky',
  'cart.items.other': '{count} položiek',
});

const localizer = new Localizer(document.documentElement);

console.log(localizer.translate('app.hello'));
console.log(localizer.translateWithParams('app.greeting', { name: 'Ján' }));

const template = localizer.translatePlural('cart.items', 3);
console.log(template.replace('{count}', 3));

console.log(localizer.formatNumber(1234.56, {
  style: 'currency',
  currency: 'EUR',
}));

console.log(localizer.formatDate(new Date(), { dateStyle: 'long' }));
console.log(localizer.relativeTime(undefined, -1, 'day'));
```

V tomto príklade sa jazyk berie z `<html lang="sk-sk">`, preklady sa zaregistrujú pri štarte aplikácie a `localizer` sa potom používa kdekoľvek v kóde.

## Jazyk

`Localizer` hľadá jazyk v tomto poradí:

1. `element.lang`
2. `document.documentElement.lang`
3. interný default `en-GB`

:::important
V praxi sa na implicitný default nespoliehajte. Nastavte `lang` vždy explicitne a používajte lowercase jazykové kódy, napríklad `sk-sk` a `en-gb`. Registrované preklady sa ukladajú lowercase a rovnaký tvar očakáva aj aktuálna implementácia.
:::

## Komponent

Vo web komponente býva najbežnejší pattern tento:

```js
import { Localizer, WJElement } from 'wj-elements';

export default class AppGreeting extends WJElement {
  constructor() {
    super();
    this.localizer = new Localizer(this);
  }

  draw() {
    const div = document.createElement('div');
    div.textContent = this.localizer.translateWithParams('app.greeting', {
      name: 'Ján',
    });

    return div;
  }
}
```

Mimo komponentu sa typicky používa `new Localizer(document.body)` alebo `new Localizer(document.documentElement)`.

## Setup

### `new Localizer()`

Vytvorí novú inštanciu localizeru.

| Parameter | Typ | Popis |
| --- | --- | --- |
| `element` | `HTMLElement \| Element \| { lang?: string; dir?: string }` | Element, z ktorého sa číta `lang` a `dir`. |

Najčastejšie použitie:

```js
const appLocalizer = new Localizer(document.documentElement);
const serviceLocalizer = new Localizer(document.body);
const componentLocalizer = new Localizer(this);
```

### `registerTranslation()`

Zaregistruje jeden alebo viac prekladových objektov.

| Parameter | Typ | Popis |
| --- | --- | --- |
| `...translation` | `object[]` | Jeden alebo viac objektov s poľom `code`. |

Prekladový objekt je obyčajný objekt:

| Pole | Typ | Povinné | Popis |
| --- | --- | --- | --- |
| `code` | `string` | áno | Jazykový kód, napríklad `sk-sk`, `en-gb`, `de-de`. |
| `name` | `string` | nie | Čitateľný názov jazyka. |
| `dir` | `string` | nie | Smer textu, zvyčajne `ltr` alebo `rtl`. |
| ostatné polia | `string` | nie | Prekladové kľúče a ich hodnoty. |

Príklad:

```js
window.translations = new Map();

Localizer.registerTranslation(
  {
    code: 'sk-sk',
    name: 'Slovenčina',
    'global.save': 'Uložiť',
  },
  {
    code: 'en-gb',
    name: 'English',
    'global.save': 'Save',
  }
);
```

Správanie:

- `window.translations` musí existovať ešte pred prvým volaním,
- ak zaregistrujete rovnaký jazyk viackrát, kľúče sa zlúčia,
- ak nový objekt obsahuje už existujúci kľúč, prepíše ho,
- ak objekt nemá `code`, vypíše sa chyba do konzoly.

### `localizer.setLanguage()`

Znovu vyhodnotí aktívny jazyk podľa `localizer.lang`.

Použite ju po tom, čo zmeníte `lang` počas behu aplikácie.

```js
document.documentElement.lang = 'en-gb';
localizer.lang = 'en-gb';
localizer.setLanguage();
```

### `convertLangCode()`

Prevedie frontendový kód jazyka na tvar, ktorý sa často používa v API dátach.

```js
localizer.convertLangCode('sk-sk');
// sk_SK
```

Praktický príklad:

```js
const apiKey = localizer.convertLangCode(localizer.currentLang);
const label = item.name?.values?.[apiKey];
```

## Preklady

### `translate()`

Vráti preklad pre daný kľúč.

| Parameter | Typ | Popis |
| --- | --- | --- |
| `key` | `string` | Prekladový kľúč. |

Ak kľúč neexistuje, vráti sa pôvodný kľúč.

```js
localizer.translate('app.hello');
// 'Ahoj'
```

### `translateWithParams()`

Preloží text a doplní placeholdery vo formáte `{name}`.

| Parameter | Typ | Predvolená hodnota | Popis |
| --- | --- | --- | --- |
| `key` | `string` | - | Prekladový kľúč. |
| `params` | `Record<string, unknown>` | `{}` | Hodnoty pre placeholdery. |

Správanie:

- placeholder sa nahradí, ak hodnota existuje,
- hodnota sa prevedie na string,
- ak hodnota chýba alebo je `null`, placeholder zostane nezmenený.

```js
localizer.translateWithParams('app.greeting', {
  name: 'Ján',
});
// 'Ahoj Ján'
```

### `translatePlural()`

Vyberie správny pluralizačný tvar cez `Intl.PluralRules`.

| Parameter | Typ | Predvolená hodnota | Možné hodnoty | Popis |
| --- | --- | --- | --- | --- |
| `key` | `string` | - | - | Základný kľúč bez suffixu. |
| `count` | `number` | `0` | ľubovoľné číslo | Počet, podľa ktorého sa vyberie tvar. |
| `type` | `string` | `'cardinal'` | `'cardinal'`, `'ordinal'` | Typ pluralizácie. |

Metóda hľadá kľúče v tvare:

- `<key>.zero`
- `<key>.one`
- `<key>.two`
- `<key>.few`
- `<key>.many`
- `<key>.other`

Ak presný tvar neexistuje, použije fallback `<key>.other`.

```js
const template = localizer.translatePlural('cart.items', 3);
const text = template.replace('{count}', 3);
// '3 položky'
```

:::note
`translatePlural()` iba vyberie správny string. Ak máte v texte placeholdery ako `{count}`, doplňte ich následne sami.
:::

## Formátovanie

### `formatNumber()`

Funkcia pre čísla sa v API volá `formatNumber()`. Samostatné `translateNumber()` tu nie je.

Formátuje číslo cez `Intl.NumberFormat`.

| Parameter | Typ | Popis |
| --- | --- | --- |
| `number` | `number` | Číslo na formátovanie. |
| `options` | `Intl.NumberFormatOptions` | Voľby formátovania. |

Najčastejšie voľby:

| Voľba | Možné hodnoty |
| --- | --- |
| `style` | `'decimal'`, `'currency'`, `'percent'`, `'unit'` |
| `currency` | napríklad `'EUR'`, `'USD'` |
| `currencyDisplay` | `'code'`, `'symbol'`, `'narrowSymbol'`, `'name'` |
| `currencySign` | `'standard'`, `'accounting'` |
| `unit` | napríklad `'byte'`, `'kilobyte'`, `'meter'`, `'celsius'` |
| `unitDisplay` | `'short'`, `'long'`, `'narrow'` |
| `notation` | `'standard'`, `'scientific'`, `'engineering'`, `'compact'` |
| `compactDisplay` | `'short'`, `'long'` |
| `signDisplay` | `'auto'`, `'never'`, `'always'`, `'exceptZero'`, `'negative'` |
| `useGrouping` | `true`, `false`, `'auto'`, `'always'`, `'min2'` |
| `minimumIntegerDigits` | `number` |
| `minimumFractionDigits` | `number` |
| `maximumFractionDigits` | `number` |
| `minimumSignificantDigits` | `number` |
| `maximumSignificantDigits` | `number` |
| `roundingPriority` | `'auto'`, `'morePrecision'`, `'lessPrecision'` |
| `roundingIncrement` | `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500`, `5000` |
| `roundingMode` | `'ceil'`, `'floor'`, `'expand'`, `'trunc'`, `'halfCeil'`, `'halfFloor'`, `'halfExpand'`, `'halfTrunc'`, `'halfEven'` |
| `trailingZeroDisplay` | `'auto'`, `'stripIfInteger'` |

Príklady:

```js
localizer.formatNumber(1234.56, {
  style: 'currency',
  currency: 'EUR',
});

localizer.formatNumber(2048, {
  style: 'unit',
  unit: 'kilobyte',
  unitDisplay: 'short',
});
```

### `formatDate()`

Formátuje dátum cez `Intl.DateTimeFormat`.

| Parameter | Typ | Popis |
| --- | --- | --- |
| `date` | `string \| Date \| number` | Dátum, timestamp alebo parsovateľný string. |
| `options` | `Intl.DateTimeFormatOptions` | Voľby formátovania. |

Najčastejšie voľby:

| Voľba | Možné hodnoty |
| --- | --- |
| `dateStyle` | `'full'`, `'long'`, `'medium'`, `'short'` |
| `timeStyle` | `'full'`, `'long'`, `'medium'`, `'short'` |
| `weekday` | `'long'`, `'short'`, `'narrow'` |
| `era` | `'long'`, `'short'`, `'narrow'` |
| `year` | `'numeric'`, `'2-digit'` |
| `month` | `'numeric'`, `'2-digit'`, `'long'`, `'short'`, `'narrow'` |
| `day` | `'numeric'`, `'2-digit'` |
| `dayPeriod` | `'narrow'`, `'short'`, `'long'` |
| `hour` | `'numeric'`, `'2-digit'` |
| `minute` | `'numeric'`, `'2-digit'` |
| `second` | `'numeric'`, `'2-digit'` |
| `fractionalSecondDigits` | `1`, `2`, `3` |
| `hour12` | `true`, `false` |
| `hourCycle` | `'h11'`, `'h12'`, `'h23'`, `'h24'` |
| `timeZone` | napríklad `'Europe/Bratislava'`, `'UTC'` |
| `timeZoneName` | `'short'`, `'long'`, `'shortOffset'`, `'longOffset'`, `'shortGeneric'`, `'longGeneric'` |
| `calendar` | napríklad `'gregory'` |
| `numberingSystem` | napríklad `'latn'`, `'arab'` |
| `localeMatcher` | `'lookup'`, `'best fit'` |
| `formatMatcher` | `'basic'`, `'best fit'` |

Príklady:

```js
localizer.formatDate(new Date(), {
  dateStyle: 'long',
});

localizer.formatDate('2026-03-29T15:45:00Z', {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'Europe/Bratislava',
});
```

### `relativeTime()`

Formátuje relatívny čas cez `Intl.RelativeTimeFormat`.

| Parameter | Typ | Predvolená hodnota | Možné hodnoty | Popis |
| --- | --- | --- | --- | --- |
| `lang` | `string` | `this.currentLang` | locale kód alebo `undefined` | Jazyk výstupu. |
| `value` | `number` | `0` | záporné aj kladné čísla | Posun v čase. |
| `unit` | `string` | `'day'` | `'year'`, `'years'`, `'quarter'`, `'quarters'`, `'month'`, `'months'`, `'week'`, `'weeks'`, `'day'`, `'days'`, `'hour'`, `'hours'`, `'minute'`, `'minutes'`, `'second'`, `'seconds'` | Jednotka času. |
| `options` | `Intl.RelativeTimeFormatOptions` | `{ numeric: 'auto' }` | viď nižšie | Voľby formátovania. |

Voľby `options`:

| Voľba | Možné hodnoty |
| --- | --- |
| `numeric` | `'always'`, `'auto'` |
| `style` | `'long'`, `'short'`, `'narrow'` |
| `localeMatcher` | `'lookup'`, `'best fit'` |

Príklady:

```js
localizer.relativeTime(undefined, -1, 'day');
// napríklad 'včera'

localizer.relativeTime('en-gb', 3, 'week', {
  numeric: 'always',
  style: 'short',
});
// 'in 3 wk.'
```

:::note
Prvý parameter je `lang`. Ak chcete použiť aktuálny jazyk localizeru, pošlite `undefined`, `null` alebo prázdny string.
:::
