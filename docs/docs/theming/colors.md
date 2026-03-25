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
    content="WebJET Elements používa sémantické farby definované cez CSS tokeny a tónové škály, ktoré môžete upravovať vo vlastnej téme."
  />
</head>

WebJET Elements používa sémantické farby ako `primary`, `complete`, `success`, `warning`, `danger` a `info`. Komponenty ich používajú cez CSS tokeny definované v `light.css` a `dark.css`.

Vo väčšine komponentov môžete farbu zvoliť atribútom `color`:

```html
<wje-button>Default</wje-button>
<wje-button color="primary">Primary</wje-button>
<wje-button color="complete">Complete</wje-button>
<wje-button color="success">Success</wje-button>
<wje-button color="warning">Warning</wje-button>
<wje-button color="danger">Danger</wje-button>
<wje-button color="info">Info</wje-button>
```

## Ako sú farby definované

Každá sémantická farba má viacero tónov. Napríklad primárna paleta používa tokeny `--wje-color-primary-1` až `--wje-color-primary-11`. Komponenty si z tejto škály vyberajú vhodný odtieň podľa variantu alebo stavu.

Preto je pri úprave farieb najlepšie meniť celú tónovú škálu, nie iba jednu izolovanú hodnotu.

## Úprava existujúcej farby

Ak chcete zmeniť primárnu farbu, prepíšte relevantné tokeny vo vlastnej téme. Napríklad tlačidlá využívajú pri rôznych fill režimoch najmä tóny `1`, `9` a `11`.

```css
:root {
  --wje-color-primary-1: #fff7db;
  --wje-color-primary-9: #ffd945;
  --wje-color-primary-11: #7a5a00;
}
```

Takto dosiahnete konzistentnejší výsledok než prepísaním jednej náhodnej premennej.

## Kedy použiť `color` atribút a kedy CSS premenné

- Atribút `color` použite, keď chcete využiť vstavané sémantické farby komponentu.
- CSS premenné použite, keď chcete zmeniť firemnú identitu, farebný kontrast alebo vytvoriť vlastnú tému.

## Odporúčaný postup

1. Vyberte si sémantickú farbu, ktorú chcete mapovať na vašu značku.
2. Prepíšte jej tónovú škálu v `:root` alebo v kontajneri témy.
3. Skontrolujte kontrast v svetlom aj tmavom režime.
4. Otestujte hlavné komponenty ako `wje-button`, `wje-badge`, `wje-card` a formulárové prvky.

## Súvisiace témy

- [CSS Premenné](css-variables.md)
- [Šablóny](themes.md)
- [Tmavý režim](dark-mode.md)
