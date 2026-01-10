import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Breadcrumb</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <p class="description">
Základné použitie breadcrumbs bez ikon a bez špeciálnych atribútov. Ukážka sa zameriava na čistú hierarchickú navigáciu, kde sa položky renderujú v poradí, v akom sú vložené ako <code>&lt;wje-breadcrumb&gt;</code> elementy.
    </p>
    <div class="playground">
      <div class="content">
        <wje-breadcrumbs>
          <wje-breadcrumb>Home</wje-breadcrumb>
          <wje-breadcrumb>Electronics</wje-breadcrumb>
          <wje-breadcrumb>Cameras</wje-breadcrumb>
          <wje-breadcrumb>Film</wje-breadcrumb>
        </wje-breadcrumbs>
      </div>
    </div>
    
    <!-- ICONS -->

    <h2>Icons</h2>
    <p class="description">
Ukážka použitia ikon v breadcrumb položkách pomocou slotov <code>start</code> a <code>end</code>. Demonštruje, ako je možné kombinovať text a ikony bez potreby špeciálnych atribútov alebo JavaScriptu.
    </p>
    <div class="playground">
      <div class="content">
        <p>Ikony na začiatku</p>
        <wje-breadcrumbs>
          <wje-breadcrumb>
            <wje-icon slot="start" name="home"></wje-icon>
            Home
          </wje-breadcrumb>
          <wje-breadcrumb>
            <wje-icon slot="start" name="bolt"></wje-icon>
            Electronics
          </wje-breadcrumb>
          <wje-breadcrumb>
            <wje-icon slot="start" name="camera"></wje-icon>
            Cameras
          </wje-breadcrumb>
          <wje-breadcrumb>
            <wje-icon slot="start" name="video"></wje-icon>
            Film
          </wje-breadcrumb>
        </wje-breadcrumbs>
        
        <p>Ikony na konci</p>
        <wje-breadcrumbs>
          <wje-breadcrumb>
            Home
            <wje-icon slot="end" name="home"></wje-icon>
          </wje-breadcrumb>
          <wje-breadcrumb>
            Electronics
            <wje-icon slot="end" name="bolt"></wje-icon>
          </wje-breadcrumb>
          <wje-breadcrumb>
            Cameras
            <wje-icon slot="end" name="camera"></wje-icon>
          </wje-breadcrumb>
          <wje-breadcrumb>
            Film
            <wje-icon slot="end" name="video"></wje-icon>
          </wje-breadcrumb>
        </wje-breadcrumbs>
      </div>
    </div>
    
    <!-- CUSTOM SEPARATOR -->

    <h2>Custom Separator</h2>
    <p class="description">
Príklad vlastného oddeľovača medzi položkami breadcrumbs pomocou slotu <code>separator</code>. Umožňuje nahradiť predvolený separátor vlastnou ikonou alebo ľubovoľným obsahom bez zásahu do CSS alebo JS logiky komponentu.
    </p>
    <div class="playground">
      <div class="content">
        <wje-breadcrumbs>
          <wje-breadcrumb>
            Home
            <wje-icon slot="separator" name="slash"></wje-icon>
          </wje-breadcrumb>
          <wje-breadcrumb>
            Electronics
            <wje-icon slot="separator" name="slash"></wje-icon>
          </wje-breadcrumb>
          <wje-breadcrumb>
            Cameras
            <wje-icon slot="separator" name="slash"></wje-icon>
          </wje-breadcrumb>
          <wje-breadcrumb>
            Film
            <wje-icon slot="separator" name="slash"></wje-icon>
          </wje-breadcrumb>
        </wje-breadcrumbs>
      </div>
    </div>

    <!-- MAX ITEMS -->

    <h2>Max Items</h2>
    <p class="description">
Ukážka práce so špeciálnymi atribútmi <code>max-items</code> a <code>items-before-collapse</code>. Komponent automaticky kolabuje stredné položky, ak ich počet prekročí nastavený limit, bez potreby dodatočného JavaScriptu.
    </p>
    <div class="playground">
      <div class="content">
        <wje-breadcrumbs max-items="4" items-before-collapse="2">
          <wje-breadcrumb>Home</wje-breadcrumb>
          <wje-breadcrumb>Electronics</wje-breadcrumb>
          <wje-breadcrumb>Photography</wje-breadcrumb>
          <wje-breadcrumb>Cameras</wje-breadcrumb>
          <wje-breadcrumb>Film</wje-breadcrumb>
          <wje-breadcrumb>35 mm</wje-breadcrumb>
          <wje-breadcrumb>A</wje-breadcrumb>
          <wje-breadcrumb>B</wje-breadcrumb>
          <wje-breadcrumb>C</wje-breadcrumb>
        </wje-breadcrumbs>
      </div>
    </div>
    
    <!-- MAX ITEMS - DROPDOWN -->

    <h2>Max Items</h2>
    <p class="description">
Rozšírenie predchádzajúcej ukážky o atribút <code>variant="dropdown"</code>, kde sú skryté položky presunuté do rozbaľovacieho menu. Príklad zároveň ukazuje napojenie na JavaScript udalosti kliknutia nad jednotlivými <code>&lt;wje-breadcrumb&gt;</code> položkami.
    </p>
    <div class="playground">
      <div class="content">
        <wje-breadcrumbs max-items="3" items-before-collapse="2" variant="dropdown" id="breadcrumb-dropdown">
          <wje-breadcrumb>Home</wje-breadcrumb>
          <wje-breadcrumb>Electronics</wje-breadcrumb>
          <wje-breadcrumb>Photography</wje-breadcrumb>
          <wje-breadcrumb>Cameras</wje-breadcrumb>
          <wje-breadcrumb>Film</wje-breadcrumb>
          <wje-breadcrumb>35 mm</wje-breadcrumb>
          <wje-breadcrumb>A</wje-breadcrumb>
          <wje-breadcrumb>B</wje-breadcrumb>
          <wje-breadcrumb>C</wje-breadcrumb>
        </wje-breadcrumbs>
      </div>
    </div>
  </div>`;

export default class DemoBreadcrumb extends WJElement {
   constructor() {
    super();
  }

  /**
   * Returns the template for the component.
   * @static
   * @returns {HTMLElement} The template element
   */
  static get customTemplate() {
    return template;
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);

    this.querySelector('#breadcrumb-dropdown').querySelectorAll('wje-breadcrumb').forEach(el => {
      el.addEventListener('click', (e) => {
        console.log(`You clicked on breadcrumb: ${el.textContent.trim()}`);
      });
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-breadcrumb') || window.customElements.define('demo-breadcrumb', DemoBreadcrumb);
