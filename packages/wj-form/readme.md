# Príklad elementu

Tento element slúži ako ukážka vytvorenia elementu pomocou WebJET Element. Zobrazuje štruktúru priečinkov, základné nastavenia a metódy WebJET elementu. Takýto priečinkový zápis a štruktúra umožňujú organizované rozdelenie súborov a komponentov v rámci elementu. Každý priečinok má svoju špecifickú úlohu a pomáha udržiavať kód elementu prehľadný a ľahko spravovateľný.


## Štruktúra priečinkov

```
└── wj-example-element
    ├── components
    ├── css
    ├── img
    ├── plugins
    ├── scss
    ├── services
    ├── example-element.js
    └── readme.md
```
> Pričinky ktoré v projekte nepotrebujete môžete zmazať. Základný .js súbor sa volá rovnako ako element ale bez prefixu wj-. 

### Components

V tomto priečinku sa nachádzajú komponenty, ktoré sú použité v elemente. Komponenty sú vytvorené pomocou [WebJET Element].

### CSS

V tomto priečinku sa nachádzajú štýly pre element. Štýly sú vytvorené pomocou [SASS] a sú umiestnené v priečinku `scss`. Štýly sa kompiluju do priečinku `css` pomocou nástroja [Grunt]. Samotný priečink bude vytvorený až po kompilácií a nie je potrebné ho ručne vytvárať.

### Img

Ak v elemente používame obrázky, nachádzajú sa v tomto priečinku.

### Plugins

V tomto priečinku sa nachádzajú pluginy, ktoré sú použité v elemente. Pluginy predstavujú funkcionality alebo moduly tretích strán, ktoré sa integrujú do samotného elementu.

> Pluginy by mali byť písané vo vanilla style bez dodatočných knižníc a frameworkov.

### Scss

V tomto priečinku sa nachádzajú štýly pre element. Štýly sú vytvorené pomocou [SASS] a sú umiestnené v priečinku `scss`. Štýly sa kompilujú do priečinku `css` pomocou nástroja [Grunt].  Základný  subor so štýlmi sa volá styles.css a ostatné štýly ak sú potrebné sú odvodene od potreby použitia.

Ak chceme použiť premenne z projektu pages tak je potrebne do stzles.scss vložiť ako prvý riadok:

```scss
@import "../../../../../pages/scss/themes/net-basic/important.scss";
```

### Services

V tomto priečinku sa nachádzajú služby, ktoré sú použité v elemente. Služby predstavujú pomocné metódy, ktoré sa využívajú v rámci elementu.