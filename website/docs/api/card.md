---
title: "Card"
---

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Element **Card** je flexibilný a rozšíriteľný kontajner formátu karty. Umožňuje zobraziť širokú škálu obsahu a skladá sa z hlavičky `"Card Header"`, hlavnej časti `"Card Content"` a pätičky `"Card Footer"`.

## Základné použitie

```html
<wj-card>
  <wj-card-header>
    <wj-card-subtitle>Subtitle</wj-card-subtitle>
    <wj-card-title>Title</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </wj-card-content>
</wj-card>
```

## Separator

Vlastnosť separator slúži na zobrazenie horizontálneho oddelovača v elementer Card Header.

```html
<wj-card>
  <wj-card-header separator>
    <wj-card-subtitle>Subtitle</wj-card-subtitle>
    <wj-card-title>Title</wj-card-title>
    <wj-card-controls>
      <wj-button fill="link" size="small">
        <wj-icon name="up-right-and-down-left-from-center" slot="icon-only"></wj-icon>
      </wj-button>
      <wj-button fill="link" size="small">
        <wj-icon name="chevron-up" slot="icon-only"></wj-icon>
      </wj-button>
      <wj-button fill="link" size="small">
        <wj-icon name="rotate-right" slot="icon-only"></wj-icon>
      </wj-button>
      <wj-button fill="link" size="small">
        <wj-icon name="ellipsis" slot="icon-only"></wj-icon>
      </wj-button>
      <wj-button fill="link" size="small">
        <wj-icon name="xmark" slot="icon-only"></wj-icon>
      </wj-button>
    </wj-card-controls>
  </wj-card-header>
  <wj-card-content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </wj-card-content>
</wj-card>
```

## Karta s obrázkom



```html
<wj-card>
  <img
    alt="Lorem ipsum"
    src="https://ionicframework.com/docs/img/demos/card-media.png"
  />
  <wj-card-header>
    <wj-card-subtitle>Subtitle</wj-card-subtitle>
    <wj-card-title>Title</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </wj-card-content>
</wj-card>
```

## Karta so zoznamom



```html
<wj-card>
  <wj-card-header>
    <wj-card-subtitle>Subtitle</wj-card-subtitle>
    <wj-card-title>Title</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    <wj-list>
      <wj-item>
        <wj-thumbnail slot="start">
          <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
          />
        </wj-thumbnail>
        <wj-label>Item</wj-label>
      </wj-item>

      <wj-item>
        <wj-thumbnail slot="start">
          <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
          />
        </wj-thumbnail>
        <wj-label>Item</wj-label>
      </wj-item>

      <wj-item>
        <wj-thumbnail slot="start">
          <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
          />
        </wj-thumbnail>
        <wj-label>Item</wj-label>
      </wj-item>

      <wj-item lines="none">
        <wj-thumbnail slot="start">
          <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
          />
        </wj-thumbnail>
        <wj-label>Item</wj-label>
      </wj-item>
    </wj-list>
  </wj-card-content>
</wj-card>
```

## Úprava štýlov

### Prednastavené farebné varianty elementu Card

Vlastnosť `color` upravuje farbu pozadia a okraja karty. Nastavením tejto hodnoty sa farba tlačidla zmení na jednu z farieb prednastavenej farebnej palety.  V predvolenom nastavení má element pozadie `primary`. 

```html
<div class="playground">
  <div class="content d-flex col-4">
    <style>
      /*.container {*/
      /*  margin-inline: -1rem;*/
      /*}*/
      .container wj-card {
        --wj-card-margin-top: 1rem;
        --wj-card-margin-bottom: 1rem;
        --wj-card-margin-inline: 1rem;
      }
    </style>
    <wj-card color="primary" shadow="open" test="test" class="wj-color-primary wj-color">
      <wj-card-header shadow="open" test="test">
        <wj-card-subtitle shadow="open">Primary</wj-card-subtitle>
        <wj-card-title shadow="open">Title</wj-card-title>
      </wj-card-header>
      <wj-card-content shadow="open" test="test"> Content </wj-card-content>
    </wj-card>

    <wj-card color="complete" shadow="open" test="test" class="wj-color-complete wj-color">
      <wj-card-header shadow="open" test="test">
        <wj-card-subtitle shadow="open">Complete</wj-card-subtitle>
        <wj-card-title shadow="open">Title</wj-card-title>
      </wj-card-header>
      <wj-card-content shadow="open" test="test"> Content </wj-card-content>
    </wj-card>

    <wj-card color="success" shadow="open" test="test" class="wj-color-success wj-color">
      <wj-card-header shadow="open" test="test">
        <wj-card-subtitle shadow="open">Success</wj-card-subtitle>
        <wj-card-title shadow="open">Title</wj-card-title>
      </wj-card-header>
      <wj-card-content shadow="open" test="test"> Content </wj-card-content>
    </wj-card>

    <wj-card color="warning" shadow="open" test="test" class="wj-color-warning wj-color">
      <wj-card-header shadow="open" test="test">
        <wj-card-subtitle shadow="open">Warning</wj-card-subtitle>
        <wj-card-title shadow="open">Title</wj-card-title>
      </wj-card-header>
      <wj-card-content shadow="open" test="test"> Content </wj-card-content>
    </wj-card>

    <wj-card color="danger" shadow="open" test="test" class="wj-color-danger wj-color">
      <wj-card-header shadow="open" test="test">
        <wj-card-subtitle shadow="open">Danger</wj-card-subtitle>
        <wj-card-title shadow="open">Title</wj-card-title>
      </wj-card-header>
      <wj-card-content shadow="open" test="test"> Content </wj-card-content>
    </wj-card>

    <wj-card color="info" shadow="open" test="test" class="wj-color-info wj-color">
      <wj-card-header shadow="open" test="test">
        <wj-card-subtitle shadow="open">Info</wj-card-subtitle>
        <wj-card-title shadow="open">Title</wj-card-title>
      </wj-card-header>
      <wj-card-content shadow="open" test="test"> Content </wj-card-content>
    </wj-card>

    <wj-card color="menu" shadow="open" test="test" class="wj-color-menu wj-color">
      <wj-card-header shadow="open" test="test">
        <wj-card-subtitle shadow="open">Menu</wj-card-subtitle>
        <wj-card-title shadow="open">Title</wj-card-title>
      </wj-card-header>
      <wj-card-content shadow="open" test="test"> Content </wj-card-content>
    </wj-card>
  </div>
</div>
```


### CSS Custom Vlastnosti

```html
<wj-card id="custom">
  <wj-card-header>
    <wj-card-subtitle>Subtitle</wj-card-subtitle>
    <wj-card-title>Title</wj-card-title>
  </wj-card-header>
  <wj-card-content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </wj-card-content>
</wj-card>
<style>
  #custom {
    --wj-card-margin-top: 1rem;
    --wj-card-margin-bottom: 1rem;
    --wj-card-margin-inline: 1rem;
    --wj-color-contrast: #f0f;
    --wj-card-border-color: #000;
    --wj-border-size: 2px;
    --background-color: #000!important;
    --wj-font-size: .8rem;
    --wj-border-radius: 0;
  }
</style>
```

## Atribúty a Vlastnosti

### color

|  |  |
| --- | --- |
| Popis | Farba, ktorá sa má použiť z palety farieb aplikácie. Predvolené možnosti sú: `"primary"`, `"secondary"`, `"complete"`, `"success"`, `"warning"`, `"danger"`, `"info"`, a `"menu"`. |
| Atribút | color |
| Typ | `"danger"` ｜ `"menu"` ｜ `"info"` ｜ `"primary"` ｜ `"secondary"` ｜ `"success"` ｜ `"warning"` ｜ undefined |
| Predvolená hodnota | `“primary”` |

## Eventy

Pre tento komponent nie sú k dispozícii žiadne verejné eventy.

## Metódy

Pre tento komponent nie sú k dispozícii žiadne verejné metódy.

## CSS Shadow Parts

Pre tento komponent nie sú k dispozícií žiadne CSS shadow parts.

## CSS Custom Vlastnosti

| Názov | Popis |
| --- | --- |
| `-—wj-card-border-color` | Definuje farbu okraja karty. |
| `--wj-card-margin-bottom` | Definuje veľkosť medzery od dolného okraja karty |
| `--wj-card-margin-inline` | Definuje veľkosť medzery od pravého a ľavého okraja karty |
| `--wj-card-margin-top` | Definuje veľkosť medzery od horného okraja karty |
| `--wj-color-base` | Definuje farbu pozadia karty |
| `--wj-color-contrast` | Definuje farbu textu karty |

## Sloty

Pre tento komponent nie sú k dispozícií žiadne sloty.