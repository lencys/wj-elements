---
title: Glossary
---

## Scoped

A component that uses scoped encapsulation keeps its styles bound to itself so they do not leak into the rest of the application. Overriding scoped selectors usually requires [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) or public CSS variables exposed by the component.

## Shadow

[Shadow DOM](https://developers.google.com/web/fundamentals/web-components/shadowdom) is a native browser capability for DOM and style encapsulation. It shields a component’s internal structure from surrounding styles. To style internals of Shadow DOM components from the outside, use [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) or [CSS Shadow Parts](https://developer.mozilla.org/en-US/docs/Web/CSS/::part).
