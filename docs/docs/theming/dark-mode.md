---
title: Tmavý režim
initialTab: 'preview'
inlineHtmlPreviews: true
---

<head>
  <title>Tmavý režim</title>
  <meta
    name="description"
    content="WebJET Elements obsahuje pripravený tmavý motív v súbore dark.css a podporuje prepínanie cez class alebo data atribút."
  />
</head>

WebJET Elements už obsahuje pripravený tmavý motív v súbore `dark.css`. Ak spolu načítate `light.css` aj `dark.css`, tmavý režim aktivujete iba prepnutím vhodného selektora na dokumente alebo kontajneri.

## Podporované selektory

Vstavaný tmavý motív reaguje na tieto selektory:

- `.dark`
- `.wje-theme-dark`
- `[data-theme="dark"]`

Svetlý motív používa paralelne:

- `.light`
- `.wje-theme-light`
- `[data-theme="light"]`

## Základné zapojenie

```html
<link rel="stylesheet" href="/wje-elementy/styles.css" />
<link rel="stylesheet" href="/wje-elementy/light.css" />
<link rel="stylesheet" href="/wje-elementy/dark.css" />
```

Potom môžete tému prepínať napríklad cez `data-theme`:

```js
document.documentElement.dataset.theme = 'dark';
// alebo:
document.documentElement.dataset.theme = 'light';
```

## Prepínanie podľa preferencie systému

Ak chcete rešpektovať systémové nastavenie používateľa, použite `prefers-color-scheme`:

```js
const media = window.matchMedia('(prefers-color-scheme: dark)');

const applyTheme = () => {
  document.documentElement.dataset.theme = media.matches ? 'dark' : 'light';
};

applyTheme();
media.addEventListener('change', applyTheme);
```

## Úprava systémového UI

Pri tmavom režime sa oplatí nastaviť aj `color-scheme`, aby sa správne vykresľovali napríklad formulárové prvky alebo scrollbar:

```html
<meta name="color-scheme" content="light dark" />
```

Alebo priamo cez CSS:

```css
html {
  color-scheme: light dark;
}
```

## Vlastný dark theme override

Ak vám vstavaný tmavý motív nestačí, pridajte vlastné prepísania nad jeho tokeny:

```css
[data-theme='dark'] {
  --wje-background: #0b1220;
  --wje-color: #e5e7eb;
  --wje-border-color: #334155;

  --wje-card-background: #111827;
  --wje-card-color: #f8fafc;
}
```

Takto zachováte kompatibilitu s komponentmi a zároveň si doladíte vzhľad podľa potreby.

## Odporúčania

- Načítajte vždy `light.css` aj `dark.css`, ak plánujete prepínanie tém za behu.
- Vlastné úpravy robte cez CSS tokeny, nie cez hlboké prepisovanie interných selektorov komponentov.
- Otestujte kontrast textu, hover/focus stavy a formulárové prvky v oboch režimoch.

## Súvisiace témy

- [CSS Premenné](css-variables.md)
- [Farby](colors.md)
- [Šablóny](themes.md)
  --wje-color-complete-light: #0f8ff9;
  --wje-color-complete-dark: #004fbf;
  --wje-color-complete-darker: #00318e;

  // WARNING
  --wje-color-warning-lighter: #fffde1;
  --wje-color-warning-light: #ffe858;
  --wje-color-warning-dark: #daab2d;
  --wje-color-warning-darker: #aa7918;

  // DANGER
  --wje-color-danger-lighter: #fde2da;
  --wje-color-danger-light: #e6533c;
  --wje-color-danger-dark: #b91e1e;
  --wje-color-danger-darker: #900f17;

  // INFO
  --wje-color-info-lighter: #dbe6e8;
  --wje-color-info-light: #475b6b;
  --wje-color-info-dark: #2b3947;
  --wje-color-info-darker: #1b2839;

  // CONTRAST A
  --wje-color-contrast-lower-a: rgba(33, 33, 33, 0.05); //#f4f4f4
  --wje-color-contrast-low-a: rgba(33, 33, 33, 0.14); // #e0e0e0
  --wje-color-contrast-medium-a: rgba(33, 33, 33, 0.62); //#757575
  --wje-color-contrast-high-a: rgba(33, 33, 33, 0.81); //#4b4b4b
}
```
