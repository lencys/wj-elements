---
title: Šablóny
---

import CodeColor from '@components/page/theming/CodeColor';
import SteppedColorGenerator from '@components/page/theming/SteppedColorGenerator';

<head>
  <title>WebJet Elements šablóny | Zmena predvolených tém a farieb pozadia aplikácie</title>
  <meta
    name="description"
    content="WebJet Elements ponúka celý rad globálnych premenných, ktoré možno použiť na úpravu predvolenej témy v celej aplikácii. [Farby aplikácie](#application-colors) sú užitočné na zmenu vzhľadu mnohých WebJET komponentov."
  />
</head>

WebJet Elements ponúka celý rad globálnych premenných, ktoré možno použiť na úpravu predvolenej šablóny v celej aplikácii. Farby aplikácie sú užitočné na zmenu vzhľadu mnohých WebJET komponentov.

## Aplikačné farby

Aplikačné farby zohrávajú v aplikácii významnú úlohu a často sa používajú v rôznych kontextoch. Sú obzvlášť praktické na bezproblémové vytváranie tmavých tém alebo tém, ktoré sú v súlade s identitou značky.


| Názov                          | Popis |
|--------------------------------|-------------|
| `--wje-border-color`            | Určuje farbu okrajov v celej aplikácii            |
| `--wje-border-radius`           | Určuje zaoblenie okrajov v celej aplikácii        |
| `--wje-border-size`             | Určuje šírku okrajov v celej aplikácii            |
| `--wje-border-style`            | Určuje štýl okrajov v celej aplikácii             |
| `--wje-color`                   | Určuje farbu textu naprieč aplikáciou             |
| `--wje-font-family`             | Určuje font textov v celej aplikácii              |
| `--wje-font-family-secondary`   | Určuje sekundárny font textov v celej aplikácii   |
| `--wje-force-mac-font-family`   | Určuje font textov pre pre zariadenia Mac v celej aplikácii   |
| `--wje-font-size`               | Určuje veľkosť textu naprieč aplikáciou           |
| `--wje-line-height`             | Určuje výšku textov v celej aplikácii             |



| Názov                   | Popis                                                  |
|-------------------------|--------------------------------------------------------|
| `--wje-backdrop`           | Farba backdrop overlay overlays and modal backgrounds a pozadí       |
| `--wje-backdrop-opacity`   | Opacity of the backdrop                               |
| `--wje-border-radius-circle` | Určuje predvolenú veľkosť zaoblenia v %                 |
| `--wje-border-radius-large` | Border radius for large-sized elements                |
| `--wje-border-radius-medium` | Border radius for medium-sized elements               |
| `--wje-border-radius-pill` | Border radius for pill-shaped elements                |
| `--wje-border-radius-small` | Border radius for small-sized elements                |
| `--wje-border-radius-x-large` | Border radius for extra-large-sized elements        |
| `--wje-border-size`        | Hrúbka okrajov                                         |
| `--wje-border-style`       | Style of borders                                       |
| `--wje-box-shadow-large`   | Box shadow for large-sized elements                    |
| `--wje-box-shadow-medium`  | Box shadow for medium-sized elements                   |
| `--wje-card-background`    | Background color for card elements                     |
| `--wje-card-color`         | Text color for card elements                           |
| `--wje-color-white`        | White color                                            |
| `--wje-color-black`        | Black color                                            |
| `--wje-font-family`             | Určuje font textov v celej aplikácii              |
| `--wje-font-family-secondary`   | Určuje sekundárny font textov v celej aplikácii   |
| `--wje-force-mac-font-family`   | Určuje font textov pre pre zariadenia Mac v celej aplikácii   |
| `--wje-font-size`          | Base font size                                         |
| `--wje-font-size-2x-large` | Font size for 2x large text                            |
| `--wje-font-size-3x-large` | Font size for 3x large text                            |
| `--wje-font-size-4x-large` | Font size for 4x large text                            |
| `--wje-font-size-large`    | Font size for large text                               |
| `--wje-font-size-medium`   | Font size for medium text                              |
| `--wje-font-size-small`    | Font size for small text                               |
| `--wje-font-size-x-large`  | Font size for extra-large text                         |
| `--wje-font-size-x-small`  | Font size for extra-small text                         |
| `--wje-line-height`        | Line height for text elements                          |


## Odstupňované farby

Zatiaľ čo aktualizácia premenných pozadia (--wje-background-color) a textu (--wje-text-color) zmení vzhľad aplikácie pre väčšinu komponentov, existujú určité komponenty Ionic, kde to môže vyzerať neštandardne alebo nefunkčne. Bude to viac viditeľné pri použití tmavšej témy.

V niektorých komponentoch používame odtieň tmavší ako pozadie alebo svetlejší ako text. Napríklad text nadpisu položky môže potrebovať farbu #404040, ktorá je o niekoľko odtieňov svetlejšia ako naša predvolená farba textu. Medzitým je pozadie komponentu načítania o odtieň tmavšie ako biela, pričom sa používa #f2f2f2. Na definovanie týchto miernych odchýlok používame stupňovité farby. Pri aktualizácii farby pozadia alebo textu aplikácie je dôležité aktualizovať krokové farby.

V predvolenom nastavení začínajú krokové farby Ionic na predvolenej hodnote farby pozadia #ffffff a miešajú sa s hodnotou farby textu #000000 pomocou zvyšujúceho sa percenta. Úplný zoznam krokových farieb je uvedený v generátore nižšie.

## Generátor odstupňovaných farieb

Vytvorenie vlastnej témy pozadia a farby textu pre vašu aplikáciu. Aktualizujte hexadecimálne hodnoty farieb pozadia alebo textu nižšie a potom skopírujte a vložte vygenerovaný kód priamo do projektu WebJET Elements.

<SteppedColorGenerator />
