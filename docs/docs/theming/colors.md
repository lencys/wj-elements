---
title: Farby
initialTab: 'preview'
inlineHtmlPreviews: true
---

import LayeredColorsSelect from '@components/page/theming/LayeredColorsSelect';
import NewColorGenerator from '@components/page/theming/NewColorGenerator';
import CodeColor from '@components/page/theming/CodeColor';

<head>
  <title>Ionic CSS Color Component: Style or Change Default App Colors</title>
  <meta
    name="description"
    content="Ionic has nine default colors that can be used to change the color of many components. Learn how to utilize Ionic CSS color properties to style your apps."
  />
</head>


Farebná paleta Elements sa skladá zo 7 predvolených farieb, ktoré si je možné jednoducho upraviť. Paleta je navrhnutá tak aby spĺňala aktuálne trendy a zároveň zabezpečovala prístupnosť. Používatelia si môžu prispôsobiť jej farby pomocou CSS premenných, čo im umožňuje zmeniť predvolené farby alebo pridať vlastné.

Vo vačšine elementov je možné nastaviť farbu elementu pomocou atribútu `color` a ako jeho hodnotu je potrebné zvoliť názov niektorej z farieb z farebnej palety.

```html
<wj-button>Default</wj-button>
<wj-button color="primary">Primary</wj-button>
<wj-button color="complete">Complete</wj-button>
<wj-button color="success">Success</wj-button>
<wj-button color="warning">Warning</wj-button>
<wj-button color="danger">Danger</wj-button>
<wj-button color="neutral">Neutral</wj-button>
```

## Upravenie existujúcej farby

Upravenie hodnoty niektorej z farieb farebnej palety dosiahnete nastavením CSS vlastnosti. Napríklad na upravenie hodnoty farby primary na <CodeColor color="#FFd945">#FFd945</CodeColor> použijete vlastnosť nižšie:

```css
:root {
  --wj-color-primary: #FFd945;
}
```

## Pridanie novej farby

Farbu možno pridať na použitie v celej aplikácii nastavením vlastnosti `color` na komponente WebJET alebo štylizáciou pomocou CSS.

Ak chcete začleniť novú farbu do farebnej palety, začnite vytvorením jej premennej CSS na root úrovni. Ak chcete napríklad pridať farbu s názvom `coral`, s hodnotou <CodeColor color="#FF7F50">#FF7F50</CodeColor> je potrebné definovať premennú nasledovne:

```css
:root {
  --wj-color-coral: #FF7F50;
}
```

Potom vytvorte novú triedu, ktorá použije túto premennú CSS. Trieda musí byť zapísaná vo formáte `.wj-color-{COLOR}`, kde `{COLOR}` je názov farby, ktorú chcete pridať:

```css
.wj-color-coral {
  --wj-color-base: var(--wj-color-coral);
}
```

Po pridaní triedy je možné farbu použiť v ľubovoľnej komponente WebJET, ktorá podporuje vlastnosť `color`. Príklad použitia farby `coral` na `wj-button` je uvedený nižšie.

```html
<wj-button color="coral">Coral</wj-button>
```

Premenné CSS definované v koreňovom adresári možno použiť aj na štylizáciu ľubovoľného elementu pomocou CSS:

```css
div {
  background: var(--wj-color-coral);
}
```

Pre viac informácií o použití CSS premenných prejdite na stránku [CSS Premenné](css-variables.md)
