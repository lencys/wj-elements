---
title: "Tab"
---

<head>
  <title>Tab - tlačidlo navigácie založenej na záložkách</title>
  <meta name="description" content="Komponent Tab je podriadeným komponentom TabGroup a slúži ako tlačidlo navigácie založenej na záložkách. Používa sa v kombinácii s elementom TabPanel." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Komponent `Tab` je podriadeným komponentom [TabGroup](tab-group.md) a slúži ako tlačidlo navigácie založenej na záložkách. Používa sa v kombinácii s elementom [TabPanel](tab-panel.md).

Pre príklady použitia komponentu `Tab` prejdite na dokumentáciu [TabGroup](tab-group.md).

## Atribúty a Vlastnosti

### active

|  |  |
| --- | --- |
| Popis |  Určuje, ktorý tab bude predvolene otvorený  |
| Atribút | `active` |
| Typ | `boolean` |
| Predvolená hodnota | `false` |

### panel

|  |  |
| --- | --- |
| Popis |  Identifikátor názvu panela, ktorý sa zobrazí po kliknutí na tab.  |
| Atribút | `panel` |
| Typ | `any` |
| Predvolená hodnota | `undefined` |

## Eventy

Pre tento komponent nie sú k dispozícii žiadne eventy.

| Názov | Popis |
|-----------|-------------|
| `wj:tab-change` |  Vyvolaný po kliknuti na záložku |

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Party

Pre tento komponent nie sú k dispozícii žiadne shadow party.


## CSS Custom Vlastnosti

| Názov | Popis |
|-----------|-------------|
| `--wj-tab-bottom` | Používa sa interne na určenie spodného odsadenia označenia aktívneho Tab elementu. |
| `--wj-tab-end` |  Používa sa interne na určenie koncového odsadenia označenia aktívneho Tab elementu. |
| `--wj-tab-start` | Používa sa interne na určenie počiatočného odsadenia označenia aktívneho Tab elementu. |
| `--wj-tab-top` | Používa sa interne na určenie horného odsadenia označenia aktívneho Tab elementu. |
| `--wj-tab-writing-mode` | Určuje orientáciu textu v Tab elementoch.  |


## Sloty

Pre tento komponent nie sú k dispozícii žiadne sloty.