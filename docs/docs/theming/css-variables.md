---
title: CSS Premenné
---

<head>
  <title>CSS Premenné | Custom CSS vlastnosti pre premenné a komponenty</title>
  <meta
    name="description"
    content="WebJET Elements používa CSS premenné pre globálne témy aj jemné doladenie jednotlivých komponentov."
  />
</head>

WebJET Elements využíva <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">CSS premenné</a> ako hlavný spôsob prispôsobenia vzhľadu. Vstavané súbory `light.css` a `dark.css` definujú predvolené tokeny a vaša aplikácia ich môže prepísať vlastnými hodnotami.

## Nastavenie hodnôt

### Globálne premenné

Globálne premenné nastavujte typicky na `:root`, prípadne na kontajner témy ako `.wje-theme-dark`, `.wje-theme-light` alebo `[data-theme="dark"]`.

```css
/* Premenné platné pre celú aplikáciu */
:root {
  --wje-background: #ffffff;
  --wje-color: #1f2937;

  --wje-font-family: Inter, system-ui, sans-serif;
}
```

### Premenné v komponentoch

Premennú môžete prepísať aj len pre konkrétny komponent. Takto upravíte vzhľad všetkých inštancií daného elementu bez zásahu do jeho implementácie.

```css
/* Nastaví farbu okrajov všetkých tlačidiel */
wje-button {
  --wje-button-border-color: #0af4fc;
}

/* Nastaví farbu okrajov všetkých tlačidla s id 'custom' */
#custom {
  --wje-button-border-color: #0af4fc;
}
```

### Premenné cez Javascript

CSS premenné môžete meniť aj dynamicky pomocou JavaScriptu, napríklad pri prepínaní témy alebo brandingu pre tenantov.

```js
document.documentElement.style.setProperty('--wje-background', '#f8fafc');
document.documentElement.style.setProperty('--wje-color', '#0f172a');
```

## Získanie hodnoty

### Použitím CSS

Na použitie hodnoty premennej v CSS slúži funkcia [var()](https://developer.mozilla.org/en-US/docs/Web/CSS/var). Môžete pri nej zadať aj fallback hodnotu.

```css
#custom {
  --wje-button-border-color: var(--wje-color-primary-9, #0af4fc);
}
```

### Použitím JavaScript

Ak chcete prečítať výslednú hodnotu, použite `getComputedStyle()`, nie iba `el.style`. Tak získate aj hodnoty, ktoré prišli z načítanej témy.

```js
const rootStyles = getComputedStyle(document.documentElement);
const background = rootStyles.getPropertyValue('--wje-background').trim();
```

## Premenné WebJET Elements

### Prispôsobenie komponentov pomocou premenných

Každý komponent vystavuje vlastnú sadu CSS premenných. Úplný zoznam nájdete v sekcii **CSS vlastné premenné** na jeho API stránke. Napríklad pri tlačidle môžete upravovať hodnoty ako `--wje-button-border-color`, `--wje-button-border-radius` alebo `--wje-button-outline-width`.

### Prispôsobenie aplikácie pomocou globálnych premenných

Pre celú aplikáciu sú dôležité hlavne globálne tokeny ako:

- `--wje-background`
- `--wje-color`
- `--wje-border-color`
- `--wje-font-family`
- `--wje-color-primary-1` až `--wje-color-primary-11`

Podrobnejšie informácie nájdete na stránkach [Farby](colors.md), [Šablóny](themes.md) a [Tmavý režim](dark-mode.md).
