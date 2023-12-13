---
title: CSS Shadow Parts
---

<head>
  <title>CSS Shadow Parts - Style CSS Properties Inside of A Shadow Tree</title>
  <meta
    name="description"
    content="CSS Shadow Parts allow developers to style CSS properties on elements inside of a shadow tree. Read to learn more about customizing Ionic Shadow DOM components."
  />
</head>

CSS Shadow Parts je funkcia, ktorá umožňuje vývojárom štylizovať špecifické časti <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a> . Toto je užitočné v prípade WebJET Elements postavených na technológii <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank" rel="noopener noreferrer">Web komponentov</a>, kde by v opačnom prípade zapúzdrenie neumožnilo upraviť vzhľad vnútorných častí elementov.

## Výhody Shadow parts

Shadow Parts poskytujú spôsob, ako vystaviť špecifické prvky v rámci Shadow DOM pre účely štylizácie, pričom sa zachovávajú jeho výhody zapuzdrenia a izolácie podľa <a href="https://w3c.github.io/webcomponents/spec/shadow/" target="_blank" rel="noopener noreferrer">Shadow DOM špecifikácie</a>. Tým pádom nehrozí prenos štýlov z komponentov a ich neúmyselnému použitiu na iné elementy.

<!-- :::note
Ionic Framework components are **not all** Shadow DOM components. If the component is a Shadow DOM component, there will be a badge in the top right of its [component documentation](../components.md). An example of a Shadow DOM component is the [button component](../api/button.md).
::: -->

## Použitie Shadow parts

Pri použití Web komponentov so Shadow DOM, nie je možné zacieliť vnútorné časti komponenty pomocou CSS selektora. Ako sme si vysvetlili vyššie, všetko vo vnútri Shadow DOM je izolované od zbytku aplikácie. V príklade nižšie je zobrazené to, akým spôsobom je vykreslená komponenta `wj-select`. 

```html
<wj-button>
  #shadow-root
  <button class="button-native" part="native"></button>
</wj-button>
```
Element button vo vnútri `#shadow-root` je zapúzdrený a preto CSS selektor nižšie nebude fungovať.

```css
/* Nefunkčný selektor */
wj-button .button-native {
  color: blue;
}
```

Tento problém riešia CSS Shadow Parts. V komponente `wj-button` sa nachádza atribút `part` s hodnotou, ktorú je možné v css zacieliť pomocou css pseudo-elementu<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank" rel="noopener noreferrer">`::part()`</a>. V tomto prípade je to hodnota `native`.

Funkčný css selektor by preto vyzeral nasledovne:

```css
wj-button::part(native) {
  color: blue;
}
```

Viac informácii o tom ako 

### How ::part works

The <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank" rel="noopener noreferrer">`::part()`</a> pseudo-element allows developers to select elements inside of a shadow tree that have been exposed via a part attribute.

Since we know that `ion-select` exposes a `placeholder` part for styling the text when there is no value selected, we can customize it in the following way:

```css
ion-select::part(placeholder) {
  color: blue;
  opacity: 1;
}
```

Štýlovanie pomocou `::part` umožňuje zmeniť akúkoľvek vlastnosť CSS, ktorú daný element akceptuje.

## WebJET Elements parts

All exposed parts for an Ionic Framework component can be found under the CSS Shadow Parts heading on its API page. To view all components and their API pages, see the [Component documentation](../components.md).



## Limitácie

### Kompatibilita s prehliadačmi

Shadow Parts CSS fungujú v najnovších verziách všetkých významných prehliadačov. Staršie verzie prehliadačov ich však nemusia podporovať. Pred použitím Shadow Parts vo svojej aplikácii skontrolujte <a href="https://caniuse.com/#feat=mdn-css_selectors_part" target="_blank" rel="noopener noreferrer">kompatibiltu s prehliadačom</a> a uistite sa, že vyhovuje vašim požiadavkám. Ak potrebujete podporovať staršie prehliadače, zvážte namiesto toho pre úpravu štýlov [CSS Premenné](../theming/css-variables.md).

### Podpora prehliadačom prefixovaných pseudoelementov

<p>
  <a href="https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix" target="_blank" rel="noopener noreferrer">
    Vendorom prefixované
  </a>{' '}
  pseudoelementy nie sú v súčasnosti podporované. Preto napríklad `::-webkit-scrollbar`
  pseudoelement v príklade nižšie nebude funkčný.
</p>

```css
/* Nie je podporovaný */
my-component::part(scroll)::-webkit-scrollbar {
  background: green;
}
```

See <a href="https://github.com/w3c/csswg-drafts/issues/4530" target="_blank" rel="noopener noreferrer">this issue on GitHub</a> for more information.

### Štrukturálne pseudotriedy

Väčšina pseudotried je podporovaná pomocou častí, avšak  <a href="https://www.w3.org/TR/selectors-4/#structural-pseudos" target="_blank" rel="noopener noreferrer">štrukturálne pseudotriedy</a> nie sú podporované. Príklad štrukturálnych pseudotried, ktoré nefungujú, je uvedený nižšie.

```css
/* Nie je podporovaný */
my-component::part(container):first-child {
  background: green;
}

/* Nie je podporovaný */
my-component::part(container):last-child {
  background: green;
}
```

### Reťazenie viacerých Parts

Pseudoelement `::part()` nemôže reťaziť viacero selektorov `::part().` Je to preto, aby sa zabránilo exponovaniu nadbytočného obsahu komponenty. Ak potrebujete zacieliť na konkrétnu časť, použite priamo hodnotu danej part.

```css
/* Nie je podporovaný */
my-component::part(button)::part(label)
```
