---
title: CSS Shadow Parts
---

<head>
  <title>CSS Shadow Parts - Customize the styles of elements inside the Shadow DOM.</title>
  <meta
    name="description"
    content="CSS Shadow Parts let you safely style internal pieces of WebJET components that use Shadow DOM."
  />
</head>

CSS Shadow Parts let you style specific pieces of components that use <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a>. This matters for WebJET components because their internal DOM is intentionally encapsulated and cannot normally be targeted from outside.

## Benefits of Shadow parts

Shadow Parts expose only the internal nodes that the component author explicitly marks as safe to style. This keeps encapsulation intact while still giving you fine control over the component’s appearance.


## Using Shadow parts

When a component uses Shadow DOM, you cannot target its internals with a normal selector. For example, `wje-button` renders its native button inside a shadow root.

```html
<wje-button>
  #shadow-root
  <button class="button-native" part="native"></button>
</wje-button>
```

That internal `<button>` is encapsulated, so the following selector does not work:

```css
/* Non-functional selector */
wje-button .button-native {
  color: blue;
}
```

This is where `::part()` helps. The component exposes an internal node with `part="native"`, so you can target it like this:

```css
wje-button::part(native) {
  color: blue;
}
```

### Practical example

Some components expose multiple parts. For example, `wje-select` exposes parts such as `native`, `input`, `popup`, and `clear`.

```css
wje-select::part(input) {
  color: #0f172a;
  background: #fff;
}
```

### How ::part works

The <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank" rel="noopener noreferrer">`::part()`</a> pseudo-element works only for parts that a component explicitly exposes. This gives you styling hooks without coupling your app to the component’s full internal DOM structure.

Styling via `::part()` lets you change any CSS property that the targeted internal element accepts.

## WebJET Elements parts

You can find the full list of exposed parts on each component’s API page under **CSS Shadow Parts**.

## Limitations

### Compatibility with browsers

CSS Shadow Parts work in current versions of major browsers. If you need to support older environments, check <a href="https://caniuse.com/#feat=mdn-css_selectors_part" target="_blank" rel="noopener noreferrer">browser compatibility</a> and consider using [CSS Variables](../theming/css-variables.md) where possible.

### Support for browser-prefixed pseudoelements

<p>
  <a href="https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix" target="_blank" rel="noopener noreferrer">Vendor-prefixed</a>
{' '}
  pseudo-elements are not currently supported. Therefore, for example, the `::-webkit-scrollbar` pseudoelement in the example below
  will not work.
</p>

```css
/* Not supported */
my-component::part(scroll)::-webkit-scrollbar {
  background: green;
}
```

See <a href="https://github.com/w3c/csswg-drafts/issues/4530" target="_blank" rel="noopener noreferrer">this GitHub issue</a> for more details.

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

The `::part()` pseudo-element cannot chain multiple parts together. If you need to style something, target the exposed part directly.

```css
/* Not supported */
my-component::part(button)::part(label)
```
