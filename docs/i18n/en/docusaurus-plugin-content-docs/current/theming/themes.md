---
title: Šablóny
---

import CodeColor from '@components/page/theming/CodeColor';
import SteppedColorGenerator from '@components/page/theming/SteppedColorGenerator';


  <title>WebJet Elements šablóny | Zmena predvolených tém a farieb pozadia aplikácie</title>
  <meta
    name="description"
    content="WebJet Elements ponúka celý rad globálnych premenných, ktoré možno použiť na úpravu predvolenej témy v celej aplikácii. [Farby aplikácie](#application-colors) sú užitočné na zmenu vzhľadu mnohých WebJET komponentov."
  />


WebJet Elements ponúka celý rad globálnych premenných, ktoré možno použiť na úpravu predvolenej témy v celej aplikácii. [Farby aplikácie](#application-colors) sú užitočné na zmenu vzhľadu mnohých WebJET komponentov.

## Aplikačné farby

Aplikačné farby zohrávajú v aplikácii významnú úlohu a často sa používajú v rôznych kontextoch. Sú obzvlášť praktické na bezproblémové vytváranie tmavých tém alebo tém, ktoré sú v súlade s identitou značky.

| Názov                        | Popis                                                       |
| ---------------------------- | ----------------------------------------------------------- |
| `--wj-border-color`          | Určuje farbu okrajov v celej aplikácii                      |
| `--wj-border-radius`         | Určuje zaoblenie okrajov v celej aplikácii                  |
| `--wj-border-size`           | Určuje šírku okrajov v celej aplikácii                      |
| `--wj-border-style`          | Určuje štýl okrajov v celej aplikácii                       |
| `--wj-color`                 | Určuje farbu textu naprieč aplikáciou                       |
| `--wj-font-family`           | Určuje font textov v celej aplikácii                        |
| `--wj-font-family-secondary` | Určuje sekundárny font textov v celej aplikácii             |
| `--wj-force-mac-font-family` | Určuje font textov pre pre zariadenia Mac v celej aplikácii |
| `--wj-font-size`             | Určuje veľkosť textu naprieč aplikáciou                     |
| `--wj-line-height`           | Určuje výšku textov v celej aplikácii                       |

| Názov                        | Popis                                                          |
| ---------------------------- | -------------------------------------------------------------- |
| `--wj-backdrop`              | Farba backdrop overlay overlays and modal backgrounds a pozadí |
| `--wj-backdrop-opacity`      | Opacity of the backdrop                                        |
| `--wj-border-radius-circle`  | Určuje predvolenú veľkosť zaoblenia v %                        |
| `--wj-border-radius-large`   | Border radius for large-sized elements                         |
| `--wj-border-radius-medium`  | Border radius for medium-sized elements                        |
| `--wj-border-radius-pill`    | Border radius for pill-shaped elements                         |
| `--wj-border-radius-small`   | Border radius for small-sized elements                         |
| `--wj-border-radius-x-large` | Border radius for extra-large-sized elements                   |
| `--wj-border-size`           | Hrúbka okrajov                                                 |
| `--wj-border-style`          | Style of borders                                               |
| `--wj-box-shadow-large`      | Box shadow for large-sized elements                            |
| `--wj-box-shadow-medium`     | Box shadow for medium-sized elements                           |
| `--wj-card-background`       | Background color for card elements                             |
| `--wj-card-color`            | Text color for card elements                                   |
| `--wj-color-white`           | White color                                                    |
| `--wj-color-black`           | Black color                                                    |
| `--wj-font-family`           | Určuje font textov v celej aplikácii                           |
| `--wj-font-family-secondary` | Určuje sekundárny font textov v celej aplikácii                |
| `--wj-force-mac-font-family` | Určuje font textov pre pre zariadenia Mac v celej aplikácii    |
| `--wj-font-size`             | Base font size                                                 |
| `--wj-font-size-2x-large`    | Font size for 2x large text                                    |
| `--wj-font-size-3x-large`    | Font size for 3x large text                                    |
| `--wj-font-size-4x-large`    | Font size for 4x large text                                    |
| `--wj-font-size-large`       | Font size for large text                                       |
| `--wj-font-size-medium`      | Font size for medium text                                      |
| `--wj-font-size-small`       | Font size for small text                                       |
| `--wj-font-size-x-large`     | Font size for extra-large text                                 |
| `--wj-font-size-x-small`     | Font size for extra-small text                                 |
| `--wj-line-height`           | Line height for text elements                                  |

## Odstupňované farby

Zatiaľ čo aktualizácia premenných pozadia (--wj-background-color) a textu (--wj-text-color) zmení vzhľad aplikácie pre väčšinu komponentov, existujú určité komponenty Ionic, kde to môže vyzerať neštandardne alebo nefunkčne. Bude to viac viditeľné pri použití tmavšej témy.

V niektorých komponentoch používame odtieň tmavší ako pozadie alebo svetlejší ako text. Napríklad text nadpisu položky môže potrebovať farbu #404040, ktorá je o niekoľko odtieňov svetlejšia ako naša predvolená farba textu. Medzitým je pozadie komponentu načítania o odtieň tmavšie ako biela, pričom sa používa #f2f2f2. Na definovanie týchto miernych odchýlok používame stupňovité farby. Pri aktualizácii farby pozadia alebo textu aplikácie je dôležité aktualizovať krokové farby.

V predvolenom nastavení začínajú krokové farby Ionic na predvolenej hodnote farby pozadia #ffffff a miešajú sa s hodnotou farby textu #000000 pomocou zvyšujúceho sa percenta. Úplný zoznam krokových farieb je uvedený v generátore nižšie.

## Generátor odstupňovaných farieb

Vytvorenie vlastnej témy pozadia a farby textu pre vašu aplikáciu. Aktualizujte hexadecimálne hodnoty farieb pozadia alebo textu nižšie a potom skopírujte a vložte vygenerovaný kód priamo do projektu WebJET Elements.

<SteppedColorGenerator />
