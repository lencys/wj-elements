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

| Name                         | Description                                                       |
| ---------------------------- | ----------------------------------------------------------------- |
| `--wj-border-color`          | Determines the color of the borders throughout the application    |
| `--wj-border-radius`         | Determines the rounding of edges throughout the application       |
| `--wj-border-size`           | Determines the width of the margins throughout the application    |
| `--wj-border-style`          | Determines the style of borders throughout the application        |
| `--wj-color`                 | Specifies the text colour across the application                  |
| `--wj-font-family`           | Specifies the font of texts throughout the application            |
| `--wj-font-family-secondary` | Specifies the secondary font for texts throughout the application |
| `--wj-force-mac-font-family` | Specifies the font of texts for Mac devices throughout the app    |
| `--wj-font-size`             | Specifies the size of text across the application                 |
| `--wj-line-height`           | Determines the height of texts throughout the application         |

| Name                         | Description                                                           |
| ---------------------------- | --------------------------------------------------------------------- |
| `--wj-backdrop`              | Color backdrop overlay overlays and modal backgrounds and backgrounds |
| `--wj-backdrop-opacity`      | Opacity of the backdrop                                               |
| `--wj-border-radius-circle`  | Specifies the default roundness size in %                             |
| `--wj-border-radius-large`   | Border radius for large-sized elements                                |
| `--wj-border-radius-medium`  | Border radius for medium-sized elements                               |
| `--wj-border-radius-pill`    | Border radius for pill-shaped elements                                |
| `--wj-border-radius-small`   | Border radius for small-sized elements                                |
| `--wj-border-radius-x-large` | Border radius for extra-large-sized elements                          |
| `--wj-border-size`           | Edge thickness                                                        |
| `--wj-border-style`          | Style of borders                                                      |
| `--wj-box-shadow-large`      | Box shadow for large-sized elements                                   |
| `--wj-box-shadow-medium`     | Box shadow for medium-sized elements                                  |
| `--wj-card-background`       | Background color for card elements                                    |
| `--wj-card-color`            | Text colour for card elements                                         |
| `--wj-color-white`           | White colour                                                          |
| `--wj-color-black`           | Black colour                                                          |
| `--wj-font-family`           | Specifies the font of texts throughout the application                |
| `--wj-font-family-secondary` | Specifies the secondary font for texts throughout the application     |
| `--wj-force-mac-font-family` | Specifies the font of texts for Mac devices throughout the app        |
| `--wj-font-size`             | Base font size                                                        |
| `--wj-font-size-2x-large`    | Font size for 2x large text                                           |
| `--wj-font-size-3x-large`    | Font size for 3x large text                                           |
| `--wj-font-size-4x-large`    | Font size for 4x large text                                           |
| `--wj-font-size-large`       | Font size for large text                                              |
| `--wj-font-size-medium`      | Font size for medium text                                             |
| `--wj-font-size-small`       | Font size for small text                                              |
| `--wj-font-size-x-large`     | Font size for extra-large text                                        |
| `--wj-font-size-x-small`     | Font size for extra-small text                                        |
| `--wj-line-height`           | Line height for text elements                                         |

## Graduated colours

While updating the background (--wj-background-color) and text (--wj-text-color) variables will change the appearance of the application for most components, there are certain Ionic components where this may look non-standard or non-functional. This will be more noticeable when using a darker theme.

In some components, we use a shade darker than the background or lighter than the text. For example, the heading text of an item may need color #404040, which is a few shades lighter than our default text color. Meanwhile, the background of the loading component is a shade darker than white, using #f2f2f2. We use graded colours to define these slight deviations. When updating the background color or text of an application, it is important to update the step colors.

By default, Ionic's step colors start at the default background color value of #ffffff and blend with the text color value of #000000 using an increasing percentage. The full list of step colours is given in the generator below.

## Graduated colour generator

Create a custom background theme and text color for your app. Update the hexadecimal values of the background colors or text below and then copy and paste the generated code directly into the WebJET Elements project.

<SteppedColorGenerator />
