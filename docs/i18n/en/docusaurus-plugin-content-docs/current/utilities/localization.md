---
title: Localization
sidebar_label: Localization
---

<head>
  <title>Localization | WebJET Elements</title>
  <meta
    name="description"
    content="Simple localization quick start for WebJET Elements and a complete Localizer function reference."
  />
</head>

`Localizer` is used for two things: translating text and locale-aware formatting of numbers, dates, and relative time.

## Quick Start

To get localization working in the simplest way:

1. set `lang` on `<html>`,
2. create `window.translations = new Map()`,
3. register translations with `Localizer.registerTranslation(...)`,
4. create `new Localizer(...)`,
5. call `translate()`, `translateWithParams()`, `translatePlural()`, `formatNumber()`, `formatDate()`, and `relativeTime()`.

### `index.html`

```html
<!doctype html>
<html lang="en-gb">
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
  code: 'en-gb',
  name: 'English',
  dir: 'ltr',
  'app.hello': 'Hello',
  'app.greeting': 'Hello {name}',
  'cart.items.one': '{count} item',
  'cart.items.other': '{count} items',
});

const localizer = new Localizer(document.documentElement);

console.log(localizer.translate('app.hello'));
console.log(localizer.translateWithParams('app.greeting', { name: 'John' }));

const template = localizer.translatePlural('cart.items', 3);
console.log(template.replace('{count}', 3));

console.log(localizer.formatNumber(1234.56, {
  style: 'currency',
  currency: 'EUR',
}));

console.log(localizer.formatDate(new Date(), { dateStyle: 'long' }));
console.log(localizer.relativeTime(undefined, -1, 'day'));
```

In this example, the language comes from `<html lang="en-gb">`, translations are registered once during app startup, and `localizer` can then be used anywhere in the code.

## Language

`Localizer` resolves the language in this order:

1. `element.lang`
2. `document.documentElement.lang`
3. internal default `en-GB`

:::important
In practice, do not rely on the implicit default. Always set `lang` explicitly and use lowercase language codes such as `sk-sk` and `en-gb`. Registered translations are stored in lowercase and the current implementation expects the same format in `lang`.
:::

## Component

Inside a web component, this is the most common pattern:

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
      name: 'John',
    });

    return div;
  }
}
```

Outside components, the usual pattern is `new Localizer(document.body)` or `new Localizer(document.documentElement)`.

## Setup

### `new Localizer()`

Creates a new localizer instance.

| Parameter | Type | Description |
| --- | --- | --- |
| `element` | `HTMLElement \| Element \| { lang?: string; dir?: string }` | Element used to read `lang` and `dir`. |

Common usage:

```js
const appLocalizer = new Localizer(document.documentElement);
const serviceLocalizer = new Localizer(document.body);
const componentLocalizer = new Localizer(this);
```

### `registerTranslation()`

Registers one or more translation objects.

| Parameter | Type | Description |
| --- | --- | --- |
| `...translation` | `object[]` | One or more objects with a `code` field. |

A translation is just a plain object:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | yes | Language code such as `sk-sk`, `en-gb`, `de-de`. |
| `name` | `string` | no | Human-readable language name. |
| `dir` | `string` | no | Text direction, usually `ltr` or `rtl`. |
| other fields | `string` | no | Translation keys and values. |

Example:

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

Behavior:

- `window.translations` must exist before the first call,
- registering the same language multiple times merges keys,
- if the new object contains an existing key, it overrides it,
- if the object has no `code`, an error is printed to the console.

### `localizer.setLanguage()`

Re-evaluates the active language from `localizer.lang`.

Use it after changing `lang` at runtime.

```js
document.documentElement.lang = 'en-gb';
localizer.lang = 'en-gb';
localizer.setLanguage();
```

### `convertLangCode()`

Converts a frontend language code into the shape often used in API payloads.

```js
localizer.convertLangCode('en-gb');
// en_GB
```

Practical example:

```js
const apiKey = localizer.convertLangCode(localizer.currentLang);
const label = item.name?.values?.[apiKey];
```

## Translation

### `translate()`

Returns the translation for a key.

| Parameter | Type | Description |
| --- | --- | --- |
| `key` | `string` | Translation key. |

If the key does not exist, the original key is returned.

```js
localizer.translate('app.hello');
// 'Hello'
```

### `translateWithParams()`

Translates text and fills placeholders in the `{name}` format.

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `key` | `string` | - | Translation key. |
| `params` | `Record<string, unknown>` | `{}` | Placeholder values. |

Behavior:

- placeholders are replaced when values exist,
- values are converted to strings,
- if a value is missing or `null`, the placeholder stays unchanged.

```js
localizer.translateWithParams('app.greeting', {
  name: 'John',
});
// 'Hello John'
```

### `translatePlural()`

Selects the correct plural form through `Intl.PluralRules`.

| Parameter | Type | Default | Allowed values | Description |
| --- | --- | --- | --- | --- |
| `key` | `string` | - | - | Base key without suffix. |
| `count` | `number` | `0` | any number | Count used to select the form. |
| `type` | `string` | `'cardinal'` | `'cardinal'`, `'ordinal'` | Pluralization type. |

The method looks for keys in this form:

- `<key>.zero`
- `<key>.one`
- `<key>.two`
- `<key>.few`
- `<key>.many`
- `<key>.other`

If the exact form does not exist, it falls back to `<key>.other`.

```js
const template = localizer.translatePlural('cart.items', 3);
const text = template.replace('{count}', 3);
// '3 items'
```

:::note
`translatePlural()` only selects the correct string. If the string contains placeholders such as `{count}`, replace them afterwards yourself.
:::

## Formatting

### `formatNumber()`

The number-formatting function is called `formatNumber()`. There is no separate `translateNumber()` in this API.

Formats a number through `Intl.NumberFormat`.

| Parameter | Type | Description |
| --- | --- | --- |
| `number` | `number` | Number to format. |
| `options` | `Intl.NumberFormatOptions` | Formatting options. |

Most common options:

| Option | Allowed values |
| --- | --- |
| `style` | `'decimal'`, `'currency'`, `'percent'`, `'unit'` |
| `currency` | for example `'EUR'`, `'USD'` |
| `currencyDisplay` | `'code'`, `'symbol'`, `'narrowSymbol'`, `'name'` |
| `currencySign` | `'standard'`, `'accounting'` |
| `unit` | for example `'byte'`, `'kilobyte'`, `'meter'`, `'celsius'` |
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

Examples:

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

Formats dates through `Intl.DateTimeFormat`.

| Parameter | Type | Description |
| --- | --- | --- |
| `date` | `string \| Date \| number` | Date, timestamp, or parseable string. |
| `options` | `Intl.DateTimeFormatOptions` | Formatting options. |

Most common options:

| Option | Allowed values |
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
| `timeZone` | for example `'Europe/Bratislava'`, `'UTC'` |
| `timeZoneName` | `'short'`, `'long'`, `'shortOffset'`, `'longOffset'`, `'shortGeneric'`, `'longGeneric'` |
| `calendar` | for example `'gregory'` |
| `numberingSystem` | for example `'latn'`, `'arab'` |
| `localeMatcher` | `'lookup'`, `'best fit'` |
| `formatMatcher` | `'basic'`, `'best fit'` |

Examples:

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

Formats relative time through `Intl.RelativeTimeFormat`.

| Parameter | Type | Default | Allowed values | Description |
| --- | --- | --- | --- | --- |
| `lang` | `string` | `this.currentLang` | locale code or `undefined` | Output language. |
| `value` | `number` | `0` | positive or negative numbers | Time delta. |
| `unit` | `string` | `'day'` | `'year'`, `'years'`, `'quarter'`, `'quarters'`, `'month'`, `'months'`, `'week'`, `'weeks'`, `'day'`, `'days'`, `'hour'`, `'hours'`, `'minute'`, `'minutes'`, `'second'`, `'seconds'` | Time unit. |
| `options` | `Intl.RelativeTimeFormatOptions` | `{ numeric: 'auto' }` | see below | Formatting options. |

`options` values:

| Option | Allowed values |
| --- | --- |
| `numeric` | `'always'`, `'auto'` |
| `style` | `'long'`, `'short'`, `'narrow'` |
| `localeMatcher` | `'lookup'`, `'best fit'` |

Examples:

```js
localizer.relativeTime(undefined, -1, 'day');
// for example 'yesterday'

localizer.relativeTime('en-gb', 3, 'week', {
  numeric: 'always',
  style: 'short',
});
// 'in 3 wk.'
```

:::note
The first parameter is `lang`. If you want to use the current localizer language, pass `undefined`, `null`, or an empty string.
:::
