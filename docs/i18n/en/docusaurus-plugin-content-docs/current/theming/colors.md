---
title: Paints
initialTab: Preview
inlineHtmlPreviews: true
---

import LayeredColorsSelect from '@components/page/theming/LayeredColorsSelect';
import NewColorGenerator from '@components/page/theming/NewColorGenerator';
import CodeColor from '@components/page/theming/CodeColor';


  <title>Colours: customise your palette colours or create a new one</title>
  <meta
    name="description"
    content="Farebná paleta Elements sa skladá zo 7 predvolených farieb, ktoré si je možné jednoducho upraviť. Paleta je navrhnutá tak aby spĺňala aktuálne trendy a zároveň zabezpečovala prístupnosť. Používatelia si môžu prispôsobiť jej farby pomocou CSS premenných, čo im umožňuje zmeniť predvolené farby alebo pridať vlastné."
  />


The Elements colour palette consists of 7 preset colours that can be easily customised. The palette is designed to meet current trends while ensuring accessibility. Users can customize its colors using CSS variables, allowing them to change the default colors or add their own.

In most elements it is possible to set the color of the element using the `color` attribute and as its value it is necessary to choose the name of one of the colors from the color palette.

```html
<wj-button>Default</wj-button>
<wj-button color="primary">Primary</wj-button>
<wj-button color="complete">Complete</wj-button>
<wj-button color="success">Success</wj-button>
<wj-button color="warning">Warning</wj-button>
<wj-button color="danger">Danger</wj-button>
<wj-button color="neutral">Neutral</wj-button>
```

## Adjusting the existing colour

Adjusting the value of one of the colors of the color palette is achieved by setting the CSS property. For example, you would use the property below to adjust the primary color value to <CodeColor color="#FFd945">#FFd945</CodeColor>:

```css
:root {
  --wj-color-primary: #FFd945;
}
```

## Adding a new colour

Color can be added for use throughout the application by setting the `color` property on the WebJET component or by styling with CSS.

To incorporate a new color into the color palette, start by creating its CSS variable at the root level. For example, if you want to add a color named `coral`, with value <CodeColor color="#FF7F50">#FF7F50</CodeColor>, you need to define the variable as follows:

```css
:root {
  --wj-color-coral: #FF7F50;
}
```

Then create a new class that uses this CSS variable. The class must be written in the format `.wj-color-{COLOR}`, where `{COLOR}` is the name of the color you want to add:

```css
.wj-color-coral {
  --wj-color-base: var(--wj-color-coral);
}
```

After adding the class, the color can be used in any WebJET component that supports the `color` property. An example of using the color `coral` on a `wj-button` is shown below.

```html
<wj-button color="coral">Coral</wj-button>
```

CSS variables defined in the root directory can also be used to style any element using CSS:

```css
div {
  background: var(--wj-color-coral);
}
```

For more information on using CSS variables, go to [CSS Variables](css-variables.md)
