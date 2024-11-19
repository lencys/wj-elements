---
title: Farby
initialTab: 'preview'
inlineHtmlPreviews: true
---

import LayeredColorsSelect from '@components/page/theming/LayeredColorsSelect';
import NewColorGenerator from '@components/page/theming/NewColorGenerator';
import CodeColor from '@components/page/theming/CodeColor';

<head>
  <title>Farby: Prispôsobte si farby palety alebo vytvorte novú</title>
  <meta
    name="description"
    content="Farebná paleta Elements sa skladá zo 7 predvolených farieb, ktoré si je možné jednoducho upraviť. Paleta je navrhnutá tak aby spĺňala aktuálne trendy a zároveň zabezpečovala prístupnosť. Používatelia si môžu prispôsobiť jej farby pomocou CSS premenných, čo im umožňuje zmeniť predvolené farby alebo pridať vlastné."
  />
</head>

Farebná paleta Elements sa skladá zo 7 predvolených farieb, ktoré si je možné jednoducho upraviť. Paleta je navrhnutá tak aby spĺňala aktuálne trendy a zároveň zabezpečovala prístupnosť. Používatelia si môžu prispôsobiť jej farby pomocou CSS premenných, čo im umožňuje zmeniť predvolené farby alebo pridať vlastné.

Vo vačšine elementov je možné nastaviť farbu elementu pomocou atribútu `color` a ako jeho hodnotu je potrebné zvoliť názov niektorej z farieb z farebnej palety.

```html
<wje-button>Default</wje-button>
<wje-button color="primary">Primary</wje-button>
<wje-button color="complete">Complete</wje-button>
<wje-button color="success">Success</wje-button>
<wje-button color="warning">Warning</wje-button>
<wje-button color="danger">Danger</wje-button>
<wje-button color="neutral">Neutral</wje-button>
```

## Upravenie existujúcej farby

Upravenie hodnoty niektorej z farieb farebnej palety dosiahnete nastavením CSS vlastnosti. Napríklad na upravenie hodnoty farby primary na <CodeColor color="#FFd945">#FFd945</CodeColor> použijete vlastnosť nižšie:

```css
:root {
  --wje-color-primary: #ffd945;
}
```

## Pridanie novej farby

Farbu možno pridať na použitie v celej aplikácii nastavením vlastnosti `color` na komponente WebJET alebo štylizáciou pomocou CSS.

Ak chcete začleniť novú farbu do farebnej palety, začnite vytvorením jej premennej CSS na root úrovni. Ak chcete napríklad pridať farbu s názvom `coral`, s hodnotou <CodeColor color="#FF7F50">#FF7F50</CodeColor> je potrebné definovať premennú nasledovne:

```css
:root {
  --wje-color-coral: #ff7f50;
}
```

Potom vytvorte novú triedu, ktorá použije túto premennú CSS. Trieda musí byť zapísaná vo formáte `.wje-color-{COLOR}`, kde `{COLOR}` je názov farby, ktorú chcete pridať:

```css
.wje-color-coral {
  --wje-color-base: var(--wje-color-coral);
}
```

Po pridaní triedy je možné farbu použiť v ľubovoľnej komponente WebJET, ktorá podporuje vlastnosť `color`. Príklad použitia farby `coral` na `wje-button` je uvedený nižšie.

```html
<wje-button color="coral">Coral</wje-button>
```

Premenné CSS definované v koreňovom adresári možno použiť aj na štylizáciu ľubovoľného elementu pomocou CSS:

```css
div {
  background: var(--wje-color-coral);
}
```

Pre viac informácií o použití CSS premenných prejdite na stránku [CSS Premenné](css-variables.md)
