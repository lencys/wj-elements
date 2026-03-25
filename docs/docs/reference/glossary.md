---
title: Slovník pojmov
---

<section id="scoped">
  ### Scoped
  <p>
    Scoped zapuzdrenie znamená, že štýly komponentu sú viazané na konkrétny komponent a neunikajú do zvyšku aplikácie.
    Pri prepise takýchto štýlov často potrebujete vyššiu
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity" target="_blank">špecificitu selektora</a>
    alebo verejne vystavené CSS premenné.
  </p>
</section>

<section id="shadow">
  ### Shadow
  <p>
    <a href="https://developers.google.com/web/fundamentals/web-components/shadowdom" target="_blank">Shadow DOM</a>
    je natívny mechanizmus prehliadača na zapuzdrenie DOM a štýlov komponentu. Chráni vnútornú štruktúru komponentu pred
    okolitými štýlmi. Ak chcete zvonka upraviť interné časti shadow komponentu, použite
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">CSS Custom Properties</a>
    alebo <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank">CSS Shadow Parts</a>.
  </p>
</section>
