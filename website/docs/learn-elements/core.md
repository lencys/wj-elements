---
sidebar_position: 1
---

# Core

Komponent - custom element, ktorý zoskupuje základnú funkcionalitu ktorú bežne využívame v aplikácii ako store,universal
service, vytváranie tooltipov a kontrolu právomocí. Taktiež predstavuje zjednodušenú formu vytvárania, vykreslovania a
prekreslovania komponentu pre vývojárov.

## Atributy

Uvedené atribúty je možné zadať na element

| Názov                      | Popis                                                                                                               | Validné hodnoty vstupu                    |
|----------------------------|---------------------------------------------------------------------------------------------------------------------|-------------------------------------------|
| permission-check           | Slúži na nastavenie kľúčov právomocí ktoré sa majú kontrolovať  napr ```permission-check="check-read,check-edit"``` | ```String```- kľúče oddelené čiarkami     |
| show                       | Slúži na podmienečné zobrazenie a skrývanie komponentu ```show="${ podmienka1 == podmienka2}" ```                   | ```true / false```                        |
| shadow                     | Slúži na nastavené shadownRootu pre element ```shadow="open"```                                                     | ```"open" / "close" /  ""```              |
| remove-class-after-connect | Po pripnutí componentu do domu sa vymažú uvedené css classy ```remove-class-after-connect="hidden"```               | ``` String``` -  classy oddelené čiarkami |

## Premenné

| Názov               | Popis                          | Typ                          |
|---------------------|--------------------------------|------------------------------|
| context             | sprístupňuje element v ktorom sa nachádza HTML komponentu                                                                                                                                                        | ```HTMLElement/ShadowRoot``` |
| store               | sprístupňuje ```Store```                                                                                                                                                                                         | ```Store```                  |
| defaultStoreActions | sprístupňuje store ```defaultStoreActions```                                                                                                                                                                     | ```defaultStoreActions```    |
| template            | využívame na zadefinovanie CSS štýlov                                                                                                                                                                            | ```HTMLTemplateElement```    |
| isAttached          | stavová premenná ktorá vypovedá o tom či je aktualne komponent pripnutý v DOM-e alebo nie                                                                                                                        | ```Boolean```                |
| rendering           | stavová premenná ktorá vypovedá o tom či je aktualne komponent vo vykreslovacej fáze                                                                                                                             | ```Boolean```                |
| service             | inštancia  ```UniversalService``` inicializovaná nad ```Store```                                                                                                                                                 | ```UniversalService```       |
| runtimeTimeout      | Vykreslovacie okno, využíva sa na okamžité zastavenie vykreslovania pokiaľ sa začne nové a predošlé ešte nedobehlo. Vyhodne pokiaľ chceme zamedziť súbežné vykreslovanie ktoré by mohlo spôsobiť nevalidné HTML. | ```Timeout```                |
| generatedTooltips   | Zoznam ```HubTooltip``` objektov, ktoré boli vygenerované pomocou ```WJElementu```. Využívané na dočistenie tooltipov po odstránení komponentu                                                                   | ```HubTooltip[]```           |

## Hook-y

| Názov           | Popis                                                                                                                               | 
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------|
| beforeDraw      | Zavolá sa pred ```Draw``` funkciou, využíva sa na dočítanie dôležitých dát, potrebných pre vykreslenie komponentu                   | 
| afterDraw       | Zavolá sa po ```Draw``` funkciou, využíva sa napríklad na binding EventListenerov, pre vykreslený komponent                         | 
| afterInit       | Slúži na dodatočné zadefinovanie attribútov komponentu, ktoré z neakého dôvodu nemohli byť zadefinové pri inštanciovaní komponenty. | ```HTMLElement/ShadowRoot```
| afterDisconnect | Slúži na začistenie komponentu, napr unsubscribe subscription alebo odbindovanie eventListenerov                                    | ```HTMLElement/ShadowRoot```
| draw            | Slúži zadefinovanie obsahu komponentu. Funkcia sa volá pri každom vykreslení komponenty.                                            | ```HTMLElement/DocumentFragment```

## Funkcie

| Názov   | Popis                                                                        | 
|---------|------------------------------------------------------------------------------|
| refresh | Komponent sa vyčistí a zavolá sa nanovo vykreslovací mechanizmus komponentu. |

## Základné použitie

```WJElement``` nie je určený ako samostatný komponent, ale je určený na to aby poskytoval zdieľanú funkcionalitu pomocou dedenia. Postará sa o vykreslenie a znovu prekreslenie komponentu v prípade, že sa zmenia ```observedAttributes``` alebo sa zavolá funkcia ```refresh```.

#### Definovanie CSS pre komponent

- vytvoríme ```HTMLTemplateElement```, ktorému nastavíme `innerHTML` so CSS štýlmi.
- vytvorená trieda musí byť rozšírená(`extends`) o triedu `WJElement`.
- `WJElement` vezme tieto štýly a pridá ich do `context` (`this / this.shadownRoot`).

```javascript title="Štýly pre komponent"
import {default as WJElement, WjElementUtils} from '/templates/net/assets/js/components/wj-element.js?v=@@version@@';

const template = document.createElement("template");
template.innerHTML = `<style>
    @import "/templates/net/assets/plugins/bootstrap/css/bootstrap.css?v=@@version@@";
    @import "/templates/net/pages/css/themes/net-basic.css?v=@@version@@";
    @import "/templates/net/assets/plugins/tabulator/css/tabulator-webjet.css?v=@@version@@";
</style>`;

export default class TaskList extends WJElement {
    constructor() {
        super(template);
    }

```

#### Špecialne prípady predávania CSS

Pokiaľ si vytvoríme komponent ktorý bude ďalej poskytovať funkcionalitu ako napr `Dropdown` je potrebné skombinovať obsah viacerých template-ov. Na toto je pripravená staticá funkcia `processTemplates`, ktorá sa nachádza v `WJElement`. Použitie je uvedené nižšie.

```javascript title="Štýly pre komponent"
import {default as WJElement, WjElementUtils} from '/templates/net/assets/js/components/wj-element.js?v=@@version@@';

const template = document.createElement('template');
template.innerHTML = `<style>
    ...
    .dropdown-btn{
        padding: .5rem;
        border: 1px solid gray;
    }
    
    .dropdown-icon{
        margin-right: 0px;
        margin-left: auto;
    }
    
    .dropdown-icon i{
        padding-left: 10px;
        transform:rotate(0deg);
        transition-duration: .3s;
    }
    ...
</style>`;

export default class Dropdown extends WJElement {
    constructor(pTemplate) {
        super(WJElement.processTemplates(pTemplate));
    }

...
```

#### Využitie predpripravených funkcií potrebných na vykreslenie komponentu

- Keď sa komponent pripne do DOM-u zavolá sa "hook" `afterInit`. Slúži na nastavenie atribútov komponentu, ktoré nemohli
  byť nastavené pri inštanciácií, napr. či je do ku komponentu pripnutý `shadowRoot`.
- Esenciálna funkcia ktorá je potrebná pre vykreslenie komponentu je `draw`. Vstupujú do nej argumenty `context,store`.
  Návratová hodnota musí byť `HTMLElement`, ktorý sa následne pripne do `context`.
- Predtým ako sa zavolá funkcia `draw` zavolá sa "hook" `beforeDraw`. Môže byť asynchrónna `async` alebo synchrónna
  funkcia. V prípade že je  `async`, nezačne sa vykreslovanie komponentu (`draw`) predtým, ako sa dokončí `beforeDraw`
  hook. Nastaví sa premenná `this.rendering` na `true`.
- Potom ako sa zavolá funkcia `draw` zavolá sa "hook" `afterDraw`.Môže byť asynchrónna `async` alebo synchrónna funkcia.
  V prípade že je  `async`, počká sa na dokončenie `afterDraw` hooku a až potom sa inicializuje `Tooltip` a nastaví sa
  premenna `this.isAttached` na  `true` a `this.rendering` na `false`.

```javascript title="Základná štruktúra komponentu"
import {default as WJElement} from "/templates/net/assets/js/components/wj-element.js";

const template = document.createElement('template');
template.innerHTML = `<style>
    :host{
        display: block;
        background-color: red;
    }
</style>`;

export default class WJElementTest extends WJElement {
    constructor() {
        super(template);
    }

    draw(context, store, params) {
        const div = document.createElement('div');
        div.classList.add('btn-send')
        div.innerHTML = 'Testovací text';
        return div;
    }

    afterDraw(context) {
        context
            .querySelector('.btn-send')
            .addEventListener('click', (e) => {
            ...
            })
    }
}
```

#### AfterInit
V prípade že chceme inštanciovať komponent pomocou `document.createElement`, nevieme nastaviť attributy hneď a je ich
potrebné nastaviť dodatočne napr pomocou  `setAttribute`.

```javascript
 let visibility = document.createElement("wj-dropdown");
visibility.setAttribute("slot-button", "true");
visibility.setAttribute("position", "bottom-left");
visibility.appendChild(slot);
visibility.classList.add("mr-3", 'd-inline-block');
visibility.appendChild(this.visibility(this.table.getColumns()));
```

Pri vytváraní komponentu `Dropdown` sme chceli aby komponent bol so `shadowRoot`. Štandardne by nás napadlo vložiť tento
atribút do konštruktora a tým by sme to defaultne nastavili pre všetky inštancie `Dropdown`. Toto by ale spôsobovalo
chybu v `debugovacej konzoli`, pretože nastavovanie atributov v konštruktore nieje povolené.
Na tieto účeli sme implementovali `afterInit` hook, ktorý sa zavolá až keď je komponent pripnutý v dome a predtým ako sa
čokoľvek začne vykreslovať.

````javascript
const template = document.createElement('template');
template.innerHTML = `<style>
    ...
</style>`;

export default class Dropdown extends WJElement {
    constructor(pTemplate) {
        super(WJElement.processTemplates(pTemplate, template));
    }

...

    afterInit() {
        this.isShadowRoot = 'open';
    }

...
````

#### BeforeDraw

Miesto pre načítanie dát, ktoré potrebuje komponent pre svoje vykreslenie.

```javascript
import {default as WJElement} from "/templates/net/assets/js/components/wj-element.js?v=@@version@@";

const template = document.createElement('template');
template.innerHTML = `<style>
    ...
</style>`;

export default class FinancialHealthProject extends WJElement {
    constructor() {
        super(template);
    }

    async beforeDraw() {
        return await this.loadData();
    }

    beforeDraw() {
        this.subscription = this.store.subscribe("stateToSubscribe", (e, b, c) => {
            this.refresh();
        });
    }

    draw(context, store, params) {
        let element = document.createElement("div");
        element.innerHTML = this.getHTML();

        return element;
    }

    getHTML() {
        return `<div>
            ...
        </div>`;
    }

    async loadData() {
        try {
            let response = await fetch(`/rest/data/to/load`);
            this.data = await response.json();
        } catch (e) {
            console.error(e);
        }
    }
}
```

rovnako vieme využiť tento "hook" na zaregistrovanie 'subscription' na `state` zo `store`.

```javascript
export default class FinancialHealthProject extends WJElement {
...

    beforeDraw() {
        this.subscription = this.store.subscribe("stateToSubscribe", (e, b, c) => {
            this.refresh();
        });
    }

...
}
```

#### AfterDraw

Dá sa využiť napríklad na zadefinovanie `EventListener`-ov po vykreslení komponentu.

```javascript
export default class DskDashboardTimeTracking extends WJElement {
...

    afterDraw(context) {
        context
            .querySelector('#time-tracking-range-select')
            .addEventListener('selected', async (e) => {
                await this.loadData(e.detail[0].value);
                context.querySelector('.tab-content').innerHTML = this.drawTabContent(this.data);
                this.tooltip()
            })
    }

...
}
```

ale aj viac komplexne situácie, ako je vidieť nižšie, zaregistrovanie `MutationObserver`-a pre pozorovanie zmien v komponente.

```javascript
    ...

afterDraw(context)
{
    super.afterDraw(context);
    if (this.firstDraw) {
        this.prepareSelectFunctionality();
    } else {
        this.observer?.disconnect();
        this.observer = new MutationObserver((mutations) => {
            this.observer?.disconnect();

            this.prepareSelectFunctionality();
            return;
        });

        this.observer.observe(this.context, {
            childList: true,
            characterData: true,
            subtree: true,
        });
    }
}
...
```

#### AfterDisconnect

Zavolá sa po odpojení komponentu z domu. Využíva sa na začistenie komponentu, aby neostali vysieť `EventListener`-y
  a `subscription` na `store`.

```javascript
...
afterDisconnect()
{
    this.observer?.disconnect();
    this.subscription?.unsubscribe();
}
...
```


