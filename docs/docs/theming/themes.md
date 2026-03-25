---
title: Šablóny
---

import CodeColor from '@components/page/theming/CodeColor';
import SteppedColorGenerator from '@components/page/theming/SteppedColorGenerator';

<head>
  <title>WebJet Elements šablóny | Zmena predvolených tém a farieb pozadia aplikácie</title>
  <meta
    name="description"
    content="WebJET Elements definuje globálne dizajnové tokeny pre typografiu, povrchy, tiene aj sémantické farby, ktoré môžete prepísať vo vlastnej téme."
  />
</head>

WebJET Elements definuje predvolenú tému pomocou globálnych CSS tokenov. Nájdete ich najmä v súboroch `light.css` a `dark.css`. Pri tvorbe vlastnej témy odporúčame začať od týchto tokenov a nie od ručného prepisovania jednotlivých interných štýlov komponentov.

## Čo tvorí tému

V praxi sa téma skladá z niekoľkých vrstiev:

1. **Globálne povrchy a text** – napríklad `--wje-background`, `--wje-color`, `--wje-border-color`.
2. **Typografia a rhythmus** – napríklad `--wje-font-family`, `--wje-font-size`, `--wje-line-height-normal`.
3. **Rohy, spacing a tiene** – napríklad `--wje-border-radius-medium`, `--wje-spacing-medium`, `--wje-shadow-medium`.
4. **Sémantické farebné škály** – napríklad `--wje-color-primary-1` až `--wje-color-primary-11`.
5. **Komponentové tokeny** – napríklad `--wje-card-background`, `--wje-input-border-color`, `--wje-button-border-radius`.

## Najdôležitejšie globálne tokeny

| Token | Význam |
| --- | --- |
| `--wje-background` | Základné pozadie aplikácie alebo sekcie |
| `--wje-color` | Predvolená farba textu |
| `--wje-border-color` | Predvolená farba okrajov |
| `--wje-font-family` | Primárny font |
| `--wje-shadow-medium` | Stredne silný tieň |
| `--wje-color-primary-1..11` | Tónová škála primárnej farby |
| `--wje-color-success-1..11` | Tónová škála success farby |
| `--wje-color-danger-1..11` | Tónová škála danger farby |

## Príklad vlastnej témy

```css
:root {
  --wje-background: #ffffff;
  --wje-color: #111827;
  --wje-border-color: #d1d5db;

  --wje-font-family: Inter, system-ui, sans-serif;

  --wje-color-primary-1: #eef2ff;
  --wje-color-primary-9: #4f46e5;
  --wje-color-primary-11: #312e81;

  --wje-card-background: #ffffff;
  --wje-card-color: #111827;
}
```

## Odporúčaný postup pri tvorbe témy

1. Začnite globálnymi tokenmi (`--wje-background`, `--wje-color`, `--wje-border-color`).
2. Potom upravte sémantické farebné škály podľa brand manuálu.
3. Následne dolaďte komponentové tokeny iba tam, kde nestačia globálne hodnoty.
4. Otestujte svetlý aj tmavý režim a kontrast interaktívnych prvkov.

## Generátor odstupňovaných farieb

Ak chcete experimentovať s tónmi pozadia a textu, využite generátor nižšie ako pomocný nástroj pri tvorbe vlastnej témy.

<SteppedColorGenerator />
