---
title: "Textarea"
---

<head>
  <title>Textarea Component and CSS Properties for Multi-Line Input</title>
  <meta name="description" content="Textarea rozširuje možnosti štandardného HTML textarea elementu. Pridáva štýly pre dosiahnutie vizuálne konzistného používateľského rozhrania a ponúka nové funkcie." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

Textarea rozširuje možnosti štandardného HTML `textarea` elementu. Pridáva štýly pre dosiahnutie vizuálne konzistného používateľského rozhrania a ponúka funkcie ako napríklad auto-height - prispôsobenie výšky elementu vloženému textu, alebo tiež počítadlo vložených znakov.


## Základné použitie

import BasicPlayground from '@site/static/usage/v1/textarea/basic/index.md';

<BasicPlayground />

## Standard

Pridaním atribútu `standard` sa zobrazí textarea v štýle štandardného HTML textarea elementu.

import Standard from '@site/static/usage/v1/textarea/standard/index.md';

<Standard />

## Counter

Pridaním atribútu `counter` sa pod textareou zobrazí počítadlo zobrazujúce počet vložených znakov a ich maximálny povolený počet. Je potrebné použítie v kombinácii s vlastnosťou `max-length`. V opačnom prípade bude maximálny povolený počet nastavený na `1000`.

import Counter from '@site/static/usage/v1/textarea/counter/index.md';

<Counter />

## Resize (none)
Vlastnosť `resize` určuje správanie zmeny veľkosti elementu. Ak je nastavená na hodnotu `none`, veľkosť poľa zostane fixná. 

import Resize from '@site/static/usage/v1/textarea/resize/index.md';

<Resize />

## Resize (auto)

Ak je vlastnosť `resize` nastavená na hodnotu `auto`, automaticky sa prispôsobí veľkosť elementu vloženému obsahu.

import AutoHeight from '@site/static/usage/v1/textarea/auto-height/index.md';

<AutoHeight />

## Disabled

Pri vloženom atribúte `disabled` do elementu textarea nebude možné písať.

import Disabled from '@site/static/usage/v1/textarea/disabled/index.md';

<Disabled />



## Atribúty a Vlastnosti

### counter

|  |  |
| --- | --- |
| Popis | Ak `true`, pridá pod element počítadlo zobrazujúce počet vložených znakov a ich maximálny povolený počet. |
| Atribút | `counter` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### disabled

|  |  |
| --- | --- |
| Popis | Ak `true`, do textarea nebude možné písať. |
| Atribút | `disabled` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |


### label

|  |  |
| --- | --- |
| Popis | Slúži na nastavenie popisu k elementu textarea. |
| Atribút | `label` |
| Typ | `string` |
| Predvolená hodnota | `undefined` |

### maxLength

|  |  |
| --- | --- |
| Popis | Nastaví maximálny povolený počet znakov. Používa sa v spojení s atribútom `counter`. |
| Atribút | `maxLength` |
| Typ | `number` |
| Predvolená hodnota | `1000` |

### name

|  |  |
| --- | --- |
| Popis | Nastaví name atribút vnútorného textarea elementu dôležitého pri použití vo formulároch. |
| Atribút | `name` |
| Typ | `string` |
| Predvolená hodnota | `undefined` |

### resize

|  |  |
| --- | --- |
| Popis |Určuje správanie pri zmene veľkosti. Ak je nastavená na hodnotu `auto`, automaticky sa zmení veľkosť poľa obsahu. |
| Atribút | `resize` |
| Typ | `auto`, `none` |
| Predvolená hodnota | `none` |

### rows

|  |  |
| --- | --- |
| Popis |Určuje počet riadkov v textarea. |
| Atribút | `rows` |
| Typ | `number` |
| Predvolená hodnota | `3` |

### spellcheck

|  |  |
| --- | --- |
| Popis |Ak `true`, na textarea bude aktivovaná kontrola pravopisu. |
| Atribút | `spellcheck` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### variant

|  |  |
| --- | --- |
| Popis | Nastavením na hodnotu `undefined` sa zobrazí textarea v štýle štandardného HTML textarea elementu |
| Atribút | `variant` |
| Typ | `standard`, `undefined` |
| Predvolená hodnota | `undefined` |


## Events

| Event             | Popis                                      |
|-------------------|--------------------------------------------|
| `blur`              | Vyvolaný keď element stratí focus.      |
| `focus`             | Vyvolaný keď element dostane focus.     |
| `Resize`            | Vyvolaný po zmene veľkosti textarea.     |
| `wj:textarea:change` | Vyvolaný po zmene zmene v textarea.     |
| `wj:textarea:input` | Vyvolaný po vložení textu                |

## Metódy
Pre tento komponent nie sú k dispozícii žiadne Metódy.

## CSS Shadow Parts

| Názov | Popis |
| --- | --- |
| `input` | Odkazuje na vnútorný `<textarea>` element |

## CSS Custom Properties


| CSS Custom Property                      | Description |
| ---------------------------------------- | ----------- |
| `--wj-textarea-background-color`         | Nastaví farbu pozadia elementu.                  |
| `--wj-textarea-border-color`             | Nastaví farbu okrajov elementu.                  |
| `--wj-textarea-border-color-focus`       | Nastaví farbu okrajov pri focuse.                |
| `--wj-textarea-border-radius`            | Nastaví zaoblenie okrajov elementu.              |
| `--wj-textarea-border-style`             | Nastaví štýl okrajov elementu.                   |
| `--wj-textarea-border-width`             | Nastaví šírku okrajov elementu.                  |
| `--wj-textarea-color`                    | Nastaví farbu textu elementu.                    |
| `--wj-textarea-color-invalid`            | Nastaví farbu textu pri chybe.                   |
| `--wj-textarea-font-family`              | Nastaví písmo elementu.                          |
| `--wj-textarea-line-height`              | Nastaví výšku riadka elementu.                   |
| `--wj-textarea-margin-bottom`            | Nastaví spodné vonkajšie odsadenie elementu.     |
| `--wj-textarea-padding`                  | Nastaví vnútorné odsadenie elementu.             |


## Sloty
Pre tento komponent nie sú k dispozícii žiadne sloty.
