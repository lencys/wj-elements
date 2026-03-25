---
title: CSS Shadow Parts
---

<head>
  <title>CSS Shadow Parts - Prispôsobte si štýly elementov vo vnútri Shadow DOMu.</title>
  <meta
    name="description"
    content="CSS Shadow Parts umožňujú bezpečne štýlovať interné časti WebJET komponentov, ktoré používajú Shadow DOM."
  />
</head>

CSS Shadow Parts umožňujú štýlovať konkrétne časti komponentov, ktoré používajú <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a>. To je dôležité pri WebJET komponentoch, kde je interný DOM zámerne zapuzdrený a klasické selektory zvonka nevidia vnútorné uzly.

## Výhody Shadow parts

Shadow Parts umožňujú vystaviť len tie interné časti, ktoré autor komponentu považuje za bezpečné na úpravu. Zachováva sa tak zapuzdrenie a zároveň získate kontrolu nad vzhľadom konkrétnych častí bez prepisovania celej implementácie.


## Použitie Shadow parts

Pri použití web komponentov so Shadow DOM nie je možné cieliť interné časti bežným selektorom. Napríklad `wje-button` renderuje svoj interný natívny prvok vo vnútri shadow rootu.

```html
<wje-button>
  #shadow-root
  <button class="button-native" part="native"></button>
</wje-button>
```

Tento interný `<button>` je zapuzdrený, preto nasledujúci selektor nebude fungovať:

```css
/* Nefunkčný selektor */
wje-button .button-native {
  color: blue;
}
```

Tento problém rieši `::part()`. Komponent vystavuje interný uzol s atribútom `part="native"`, takže ho viete cieliť takto:

```css
wje-button::part(native) {
  color: blue;
}
```

### Praktický príklad

Niektoré komponenty vystavujú viacero parts. Napríklad `wje-select` používa okrem iného parts ako `native`, `input`, `popup` alebo `clear`.

```css
wje-select::part(input) {
  color: #0f172a;
  background: #fff;
}
```

### How ::part works

Pseudo-element <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank" rel="noopener noreferrer">`::part()`</a> funguje len na partoch, ktoré komponent explicitne vystavil. Je to preto, aby ste mali kontrolu nad dizajnom, ale zároveň neboli naviazaní na celé interné DOM rozloženie komponentu.

Štýlovanie cez `::part()` vám umožní meniť tie CSS vlastnosti, ktoré daný interný element podporuje.

## WebJET Elements parts

Zoznam všetkých vystavených parts nájdete na API stránke konkrétneho komponentu v sekcii **CSS Shadow Parts**.

## Limitácie

### Kompatibilita s prehliadačmi

CSS Shadow Parts fungujú v aktuálnych verziách moderných prehliadačov. Ak potrebujete podporovať staršie prostredia, skontrolujte si <a href="https://caniuse.com/#feat=mdn-css_selectors_part" target="_blank" rel="noopener noreferrer">kompatibilitu</a> a zvážte, či vám postačia [CSS Premenné](../theming/css-variables.md).

### Podpora prehliadačom prefixovaných pseudoelementov

<p>
  <a href="https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix" target="_blank" rel="noopener noreferrer">Vendorom prefixované</a>
{' '}
  pseudoelementy nie sú v súčasnosti podporované. Preto napríklad `::-webkit-scrollbar` pseudoelement v príklade nižšie
  nebude funkčný.
</p>

```css
/* Nie je podporovaný */
my-component::part(scroll)::-webkit-scrollbar {
  background: green;
}
```

Viac informácií nájdete v <a href="https://github.com/w3c/csswg-drafts/issues/4530" target="_blank" rel="noopener noreferrer">diskusii na GitHube</a>.

### Štrukturálne pseudotriedy

Väčšina pseudotried je podporovaná pomocou častí, avšak <a href="https://www.w3.org/TR/selectors-4/#structural-pseudos" target="_blank" rel="noopener noreferrer">štrukturálne pseudotriedy</a> nie sú podporované. Príklad štrukturálnych pseudotried, ktoré nefungujú, je uvedený nižšie.

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

Pseudo-element `::part()` nemožno reťaziť cez viacero parts. Ak potrebujete štylizovať konkrétnu časť, použite priamo part, ktorý komponent vystavuje.

```css
/* Nie je podporovaný */
my-component::part(button)::part(label)
```
