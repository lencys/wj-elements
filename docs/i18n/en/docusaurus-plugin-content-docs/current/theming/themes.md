---
title: Templates
---

import CodeColor from '@components/page/theming/CodeColor';
import SteppedColorGenerator from '@components/page/theming/SteppedColorGenerator';

<head>
  <title>WebJet Elements Templates | Change default themes and background colors of the application</title>
  <meta
    name="description"
    content="WebJet Elements ponúka celý rad globálnych premenných, ktoré možno použiť na úpravu predvolenej témy v celej aplikácii. [Farby aplikácie](#application-colors) sú užitočné na zmenu vzhľadu mnohých WebJET komponentov."
  />
</head>

WebJet Elements offers a number of global variables that can be used to modify the default template throughout the application. Application colors are useful for changing the appearance of many WebJET components.

## Application colours

Application colours play an important role in the application and are often used in different contexts. They are particularly handy for seamlessly creating dark themes or topics that are in line with your brand identity.

| Name                          | Description                                                       |
| ----------------------------- | ----------------------------------------------------------------- |
| `--wje-border-color`          | Determines the color of the borders throughout the application    |
| `--wje-border-radius`         | Determines the rounding of edges throughout the application       |
| `--wje-border-size`           | Determines the width of the margins throughout the application    |
| `--wje-border-style`          | Determines the style of borders throughout the application        |
| `--wje-color`                 | Specifies the text colour across the application                  |
| `--wje-font-family`           | Specifies the font of texts throughout the application            |
| `--wje-font-family-secondary` | Specifies the secondary font for texts throughout the application |
| `--wje-force-mac-font-family` | Specifies the font of texts for Mac devices throughout the app    |
| `--wje-font-size`             | Specifies the size of text across the application                 |
| `--wje-line-height`           | Determines the height of texts throughout the application         |

| Name                          | Description                                                           |
| ----------------------------- | --------------------------------------------------------------------- |
| `--wje-backdrop`              | Color backdrop overlay overlays and modal backgrounds and backgrounds |
| `--its-backdrop-opacity`      | Opacity of the backdrop                                               |
| `--wje-border-radius-circle`  | Specifies the default roundness size in %                             |
| `--wje-border-radius-large`   | Border radius for large-sized elements                                |
| `--wje-border-radius-medium`  | Border radius for medium-sized elements                               |
| `--wje-border-radius-pill`    | Border radius for pill-shaped elements                                |
| `--wje-border-radius-small`   | Border radius for small-sized elements                                |
| `--wje-border-radius-x-large` | Border radius for extra-large-sized elements                          |
| `--wje-border-size`           | Edge thickness                                                        |
| `--wje-border-style`          | Style of borders                                                      |
| `--its-box-shadow-large`      | Box shadow for large-sized elements                                   |
| `--its-box-shadow-medium`     | Box shadow for medium-sized elements                                  |
| `--wje-card-background`       | Background color for card elements                                    |
| `--wje-card-color`            | Text colour for card elements                                         |
| `--wje-color-white`           | White colour                                                          |
| `--wje-color-black`           | Black colour                                                          |
| `--wje-font-family`           | Specifies the font of texts throughout the application                |
| `--wje-font-family-secondary` | Specifies the secondary font for texts throughout the application     |
| `--wje-force-mac-font-family` | Specifies the font of texts for Mac devices throughout the app        |
| `--wje-font-size`             | Base font size                                                        |
| `--wje-font-size-2x-large`    | Font size for 2x large text                                           |
| `--wje-font-size-3x-large`    | Font size for 3x large text                                           |
| `--wje-font-size-4x-large`    | Font size for 4x large text                                           |
| `--its-font-size-large`       | Font size for large text                                              |
| `--its-font-size-medium`      | Font size for medium text                                             |
| `--wje-font-size-small`       | Font size for small text                                              |
| `--wje-font-size-x-large`     | Font size for extra-large text                                        |
| `--wje-font-size-x-small`     | Font size for extra-small text                                        |
| `--wje-line-height`           | Line height for text elements                                         |

## Graduated colours

While updating the background (--wje-background-color) and text (--wje-text-color) variables will change the appearance of the application for most components, there are certain Ionic components where this may look non-standard or non-functional. This will be more noticeable when using a darker theme.

In some components, we use a shade darker than the background or lighter than the text. For example, the heading text of an item may need color #404040, which is a few shades lighter than our default text color. Meanwhile, the background of the loading component is a shade darker than white, using #f2f2f2. We use graded colours to define these slight deviations. When updating the background color or text of an application, it is important to update the step colors.

By default, Ionic's step colors start at the default background color value of #ffffff and blend with the text color value of #000000 using an increasing percentage. The full list of step colours is given in the generator below.

## Graduated colour generator

Create a custom background theme and text color for your app. Update the hexadecimal values of the background colors or text below and then copy and paste the generated code directly into the WebJET Elements project.

<SteppedColorGenerator />
