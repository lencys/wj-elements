---
title: "Dialog"
---

<head>
  <title>Dialog | Tlačidlo</title>
  <meta name="description" content="Element Dialog zobrazuje dialógové okno s prispôsobiteľným obsahom. Je možné ho využiť napríklad na jednoduché zobrazenie informácie používateľovi alebo tiež vyžiadať jeho potvrdenie alebo zrušenie ním vykonanej akcie." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element Dialog zobrazuje dialógové okno s prispôsobiteľným obsahom. Je možné ho využiť napríklad na jednoduché zobrazenie informácie používateľovi alebo tiež vyžiadať jeho potvrdenie alebo zrušenie ním vykonanej akcie. Nachádza sa nad obsahom aplikácie a používateľ ho musí ručne zrušiť, aby mohol pokračovať v interakcii s aplikáciou. Dialógové okno je možné zobraziť v rôznych veľkostiach a pozíciách obrazovky.

## Základné použitie

Na zobrazenie komponentu Dialog sa používa komponent Button s atribútom dialog.
Pre viac informácii prejdite na stránku [Button](./button.md).


```markdown
<wj-button dialog="open-modal">Open</wj-button>
<wj-dialog trigger="open-modal" title="Title">
  <h4>Lorem ipsum dolor sit amet</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
  <div slot="footer">
    <wj-button fill="outline" color="light">Zatvorit</wj-button>
    <wj-button>Potvrdit</wj-button>
  </div>
</wj-dialog>
```

### Placement (Umiestnenie)

Vlastnosť `placement` určuje umiestnenie dialógového okna na obrazovke. Predvolená je hodnota slide-up. Ďalšie možnosti sú `"stick-up"`, `"fill-in"`, `"slide-left"`, `"slide-right"`. 

```html
<div class="content">
	<wj-button dialog="open-modal-1">Open Slide Up</wj-button>
	<wj-button dialog="open-modal-2">Open Stick Up</wj-button>
	<wj-button dialog="open-modal-3">Open Fill In</wj-button>
	<wj-button dialog="open-modal-4">Open Slide Left</wj-button>
	<wj-button dialog="open-modal-5">Open Slide Right</wj-button>
	
	<wj-dialog trigger="open-modal-1" href="/nejaka-url/" placement="slide-up">
	  <h2>Lorem ipsum dolor sit amet</h2>
	  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa.</p>
	</wj-dialog>
	
	<wj-dialog trigger="open-modal-2" href="/nejaka-url/" placement="stick-up">
	  <h2>Lorem ipsum dolor sit amet</h2>
	  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
	</wj-dialog>
	
	<wj-dialog trigger="open-modal-3" href="/nejaka-url/" placement="fill-in">
	  <h2>Lorem ipsum dolor sit amet</h2>
	  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
	</wj-dialog>
	
	<wj-dialog trigger="open-modal-4" href="/nejaka-url/" placement="slide-left">
	  <h2>Lorem ipsum dolor sit amet</h2>
	  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
	</wj-dialog>
	
	<wj-dialog trigger="open-modal-5" href="/nejaka-url/" placement="slide-right">
	  <h2>Lorem ipsum dolor sit amet</h2>
	  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
	
	  <p>Nulla elit dui, tincidunt quis maximus nec, bibendum non tortor. Donec quam metus, tristique at erat ut, rhoncus volutpat justo.</p>
	</wj-dialog>
</div>
```

### Size (Veľkosť)

Vlastnosť `size` upravuje veľkosť dialógového okna na obrazovke. Predvolená je veľkosť `"small"`. Ďalšie možnosti sú `"medium"`, `"large"` a `"ex-large"`. 

```html
<div class="content">
  <wj-button dialog="open-modal-small">Small</wj-button>
  <wj-button dialog="open-modal-medium">Medium</wj-button>
  <wj-button dialog="open-modal-large">Large</wj-button>
  <wj-button dialog="open-modal-ex-large">Extra large</wj-button>

  <wj-dialog trigger="open-modal-small" size="small">
    <h2>Lorem ipsum dolor sit amet</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl. Pellentesque nec urna cursus, euismod nunc a, laoreet massa. Integer quis felis malesuada, faucibus mauris nec, aliquam velit.</p>
  </wj-dialog>

  <wj-dialog trigger="open-modal-medium" size="medium">
    <h2>Lorem ipsum dolor sit amet</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
  </wj-dialog>

  <wj-dialog trigger="open-modal-large" size="large">
    <h2>Lorem ipsum dolor sit amet</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
  </wj-dialog>

  <wj-dialog trigger="open-modal-ex-large" size="ex-large">
    <h2>Lorem ipsum dolor sit amet</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
  </wj-dialog>
</div>
```

## Vlastnosti

### **placement**

|  |  |
| --- | --- |
| Popis | Určuje umiestnenie dialógového okna na obrazovke. Medzi možné hodnoty patrí `"slide-up"` (posunúť hore), `"slide-down"` (posunúť dole) a ďalšie. |
| Atribút | `placement` |
| Typ | `"slide-up"` ｜ `"slide-down"` ｜ `"slide-left"` ｜ `"slide-right"` ｜ `"fill-in"`  |
| Predvolená hodnota | `“slide-up”` |

### size

|  |  |
| --- | --- |
| Popis | Určuje veľkosť dialógového okna na obrazovke. Medzi možné hodnoty patrí `"small"` (malé), `"medium"` (stredné) a ďalšie. |
| Atribút | `size` |
| Typ | `"small"` ｜ `"medium"` ｜ `"large"` ｜ `"ex-large"`｜ `undefined` |
| Predvolená hodnota | `“small”` |

## Eventy[](https://ionicframework.com/docs/api/badge#events)

Pre tento komponent nie sú k dispozícii žiadne eventy.

## Metódy[](https://ionicframework.com/docs/api/badge#methods)

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts[](https://ionicframework.com/docs/api/badge#css-shadow-parts)

Pre tento komponent nie sú k dispozícií žiadne CSS shadow parts.

| Názov | Popis |
| --- | --- |
| `body` | Odkazuje na hlavný obsah dialógového okna |
| `header` | Odkazuje na záhlavie dialógového okna |
| `footer` | Odkazuje na pätičku dialógového okna |

## CSS Custom Vlastnosti

| Názov | Popis |
| --- | --- |
| `--wj-backdrop` | Farba pozadia (backdropu) |
| `--wj-backdrop-opacity` | Priehľadnosť pozadia (backdropu) |
| `--wj-dialog-border-color` | Farba okrajov dialógového okna |
| `--wj-dialog-border-radius` | Zaoblenie okrajov dialógového okna |
| `--wj-dialog-border-style` | Štýl okrajov dialógového okna |
| `--wj-dialog-border-width` | Hrúbka okrajov dialógového okna |
| `--wj-dialog-height` | Výška dialógového okna |
| `--wj-dialog-margin-bottom` | Spodné vonkajšie odsadenie dialógového okna |
| `--wj-dialog-margin-end` | Ľavé vonkajšie odsadenie dialógového okna |
| `--wj-dialog-margin-start` | Pravé vonkajšie odsadenie dialógového okna |
| `--wj-dialog-margin-top` | Horné vonkajšie odsadenie dialógového okna |
| `--wj-dialog-padding` | Vnútorné odsadenie dialógového okna |
| `--wj-dialog-width` | Šírka dialógového okna |

## Sloty[](https://ionicframework.com/docs/api/button#slots)

| Názov | Popis |
| --- | --- |
| `header` | Tento slot sa používa pre záhlavie dialógu. |
| `footer` | Tento slot sa používa pre pätičku dialógu. |