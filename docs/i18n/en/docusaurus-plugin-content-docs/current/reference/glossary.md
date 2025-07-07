---
title: Glossary
---

<section id="scoped">
  ### Scoped
  <p>
    A component that uses scoped encapsulation will automatically scope its CSS by appending each of the styles with a
    data attribute at run time. Overriding scoped selectors in CSS requires a
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity" target="_blank">higher specificity</a>
    selector. Scoped components can also be styled using
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">CSS Custom Properties</a>.
  </p>
</section>

<section id="shadow">
  ### Shadow
  <p><a href="https://developers.google.com/web/fundamentals/web-components/shadowdom" target="_blank">Shadow DOM</a>
    is a native browser solution for DOM and style encapsulation of a component. It shields the component from its
    surrounding environment. To externally style internal elements of a Shadow DOM component you must use
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">CSS Custom Properties</a>
    or <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank">CSS Shadow Parts</a>.
  </p>
</section>
