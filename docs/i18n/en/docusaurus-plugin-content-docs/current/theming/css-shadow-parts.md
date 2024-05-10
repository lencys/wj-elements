---
title: CSS Shadow Parts
---

<head>
  <title>CSS Shadow Parts - Customize the styles of elements inside the Shadow DOM.</title>
  <meta
    name="description"
    content="Shadow Parts poskytujú spôsob, ako vystaviť špecifické prvky v rámci Shadow DOM pre účely štylizácie, pričom sa zachovávajú jeho výhody zapuzdrenia a izolácie podľa Shadow DOM špecifikácie."
  />
</head>

CSS Shadow Parts is a feature that allows developers to stylize specific parts of the <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a>. This is useful in the case of WebJET Elements built on <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank" rel="noopener noreferrer">Web Component</a> technology, where otherwise the encapsulation would not allow the appearance of the internal parts of the elements to be modified.

## Benefits of Shadow parts

Shadow Parts provide a way to expose specific elements within the Shadow DOM for styling purposes, while maintaining its benefits of encapsulation and isolation according to the <a href="https://www.w3.org/TR/css-shadow-parts-1/" target="_blank" rel="noopener noreferrer">Shadow DOM specification</a>. This avoids the risk of styles being transferred from components and inadvertently applied to other elements.

<!-- :::note
Ionic Framework components are **not all** Shadow DOM components. If the component is a Shadow DOM component, there will be a badge in the top right of its [component documentation](../components.md). An example of a Shadow DOM component is the [button component](../api/button.md).
::: -->

## Using Shadow parts

When using Web components with Shadow DOM, it is not possible to target the internals of the component using the CSS selector. As we explained above, everything inside the Shadow DOM is isolated from the rest of the application. The example below shows how the `wj-select` component is rendered.

```html
<wj-button>
  #shadow-root
  <button class="button-native" part="native"></button>
</wj-button>
```

The element button inside `#shadow-root` is encapsulated and therefore the CSS selector below will not work.

```css
/* Non-functional selector */
wj-button .button-native {
  color: blue;
}
```

This problem is solved by CSS Shadow Parts. The `wj-button` component contains a `part` attribute with a value that can be targeted in css using the css pseudo-element <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank" rel="noopener noreferrer">`::part()`</a>. In this case it is the value `native`.

A functional css selector would therefore look like this:

```css
wj-button::part(native) {
  color: blue;
}
```

More information on how

### How ::part works

The <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank" rel="noopener noreferrer">`::part()`</a> pseudo-element allows developers to select elements inside of a shadow tree that have been exposed via a part attribute.

Since we know that `ion-select` exposes a `placeholder` part for styling the text when there is no value selected, we can customize it in the following way:

```css
ion-select::part(placeholder) {
  color: blue;
  opacity: 1;
}
```

Styling with `::part` allows you to change any CSS property that the element accepts.

## WebJET Elements parts

All exposed parts for an Ionic Framework component can be found under the CSS Shadow Parts heading on its API page. To view all components and their API pages, see the [Component documentation](../components.md).

## Limitations

### Compatibility with browsers

Shadow Parts CSS works in the latest versions of all major browsers. However, older browser versions may not support them. Before using Shadow Parts in your application, check your <a href="https://caniuse.com/#feat=mdn-css_selectors_part" target="_blank" rel="noopener noreferrer">browser compatibility</a> and make sure it meets your requirements. If you need to support older browsers, consider [CSS Variables](../theming/css-variables.md) instead for editing styles.

### Support for browser-prefixed pseudoelements

<p>
  <a href="https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix" target="_blank" rel="noopener noreferrer">Vendor-prefixed</a>{' '}
  pseudo-elements are not currently supported. Therefore, for example, the `::-webkit-scrollbar`
  pseudoelement in the example below will not work.
</p>

```css
/* Not supported */
my-component::part(scroll)::-webkit-scrollbar {
  background: green;
}
```

See <a href="https://github.com/w3c/csswg-drafts/issues/4530" target="_blank" rel="noopener noreferrer">this issue on GitHub</a> for more information.

### Structural pseudo-classes

Most pseudo-classes are supported using parts, but <a href="https://www.w3.org/TR/selectors-4/#structural-pseudos" target="_blank" rel="noopener noreferrer">structural pseudo-classes</a> are not supported. An example of structural pseudo-classes that do not work is given below.

```css
/* Not supported */
my-component::part(container):first-child {
  background: green;
}

/* Not supported */
my-component::part(container):last-child {
  background: green;
}
```

### Chaining multiple Parts

The `::part()` pseudoelement cannot chain multiple `::part() selectors.` This is to avoid exposing redundant component content. If you need to target a specific part, use the value of that part directly.

```css
/* Not supported */
my-component::part(button)::part(label)
```
