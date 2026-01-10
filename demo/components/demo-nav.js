import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Nav</h1>
  <div class="container">
    
    <!-- MEGAMENU -->

    <h2>Megamenu</h2>
    <p class="description">
      Navigácia ako <span class="tok tag">&lt;wje-menu&gt;</span> s <span class="tok attr">variant="megamenu"</span> a aktívnym stavom cez boolean <span class="tok attr">active</span>.
      Submenu je ďalší <span class="tok tag">&lt;wje-menu&gt;</span> vložený do slotu <span class="tok attr">submenu</span> na <span class="tok tag">&lt;wje-menu-item&gt;</span>;
      umiestnenie a odsadenie riešia <span class="tok attr">placement</span> a <span class="tok attr">offset</span>.
      V ukážke sú aj položky s <span class="tok attr">variant="context"</span>, <span class="tok attr">manual</span> a lokálne CSS premenne (napr. <span class="tok css">--wje-menu-border-width</span>, <span class="tok css">--wje-menu-border-radius</span>) vrátane úprav cez <span class="tok css">::part(native)</span>.
    </p>
    <div class="playground" style="align-items: start;">
      <div class="content" style="display: block; margin: 0; width: 100%;">
        <wje-menu id="custom-2" variant="megamenu" active>
          <wje-menu-item>
            <span>Home</span>
            <wje-icon slot="start" name="home"></wje-icon>
          </wje-menu-item>
          <wje-menu-item offset="5" variant="context" manual>
            <span>One</span>
            <wje-icon slot="start" name="heart"></wje-icon>
            <wje-menu slot="submenu" offset="5" placement="bottom-start">
              <wje-menu-item>Menu item 1</wje-menu-item>
              <wje-menu-item variant="context">
                Menu item 2
                <wje-menu slot="submenu" offset="5">
                  <wje-menu-item>Menu item 2.1</wje-menu-item>
                  <wje-menu-item>Menu item 2.2</wje-menu-item>
                  <wje-menu-item>Menu item 2.3</wje-menu-item>
                </wje-menu >
              </wje-menu-item>
              <wje-menu-item offset="10">Menu item 3</wje-menu-item>
            </wje-menu>
          </wje-menu-item>
          <wje-menu-item>
            <span>Two</span>
            <wje-icon slot="start" name="map-pin"></wje-icon>
          </wje-menu-item>
          <wje-menu-item>
            <wje-icon slot="start" name="settings"></wje-icon>
            <span>Three</span>
          </wje-menu-item>
        </wje-menu> 
        
        <style>
          #custom-2 {
            --wje-menu-border-width: 0 0 1px 0;
            --wje-menu-border-radius: 0;
            max-width: 100%;
            padding: 0;
            wje-menu-item {
              wje-menu {
                --wje-menu-border-width: 1px;
              }
            }
          }
          
          #custom-2 wje-menu-item::part(native) {
            --wje-menu-item-padding-top: .75rem;
            --wje-menu-item-padding-bottom: .75rem;
          }
        </style>
      </div>
    </div>
    
    <!-- COLLAPSE -->

    <h2>Collapse</h2>
    <p class="description">
      Navigačné menu s <span class="tok attr">variant="nav"</span> a booleanským atribútom <span class="tok attr">collapse</span>, ktorý zbalí menu do úzkeho režimu.
      Toggle tlačidlo je <span class="tok tag">&lt;wje-button&gt;</span> s atribútom <span class="tok attr">toggle="off"</span> a ikonami v slote <span class="tok attr">toggle</span>.
      Položky používajú ikony v slote <span class="tok attr">start</span> a tooltip sloty <span class="tok attr">tooltip-start</span>/<span class="tok attr">tooltip-end</span>.
      V JavaScripte sa na event <span class="tok event">wje-button:click</span> prepína stav cez <span class="tok method">toggleAttribute('collapse')</span>.
    </p>
    <div class="playground" style="align-items: start;">
      <div class="content" style="display: block; margin: 0 auto;">
        <wje-button fill="link" toggle="off" id="toggle">
          <wje-icon name="chevron-left" slot="toggle"></wje-icon>
          <wje-icon name="chevron-right" slot="toggle"></wje-icon>
        </wje-button>
        
        <wje-menu id="custom" variant="nav" collapse active>
          <wje-menu-item>
            Home
            <wje-icon slot="start" name="home"></wje-icon>
            <span slot="tooltip-start">START</span>
            <span slot="tooltip-end">END</span>
          </wje-menu-item>
          <wje-menu-item>
            One
            <wje-icon slot="start" name="heart"></wje-icon>
            <wje-menu slot="submenu" variant="nav">
              <wje-menu-item>Menu item 1</wje-menu-item>
              <wje-menu-item>
                Menu item 2
                <wje-menu slot="submenu" variant="nav">
                  <wje-menu-item>Menu item 2.1</wje-menu-item>
                  <wje-menu-item>Menu item 2.2</wje-menu-item>
                  <wje-menu-item>Menu item 2.3</wje-menu-item>
                </wje-menu >
              </wje-menu-item>
              <wje-menu-item>Menu item 3</wje-menu-item>
            </wje-menu>
          </wje-menu-item>
          <wje-menu-item>
            Two
            <wje-icon slot="start" name="map-pin"></wje-icon>
          </wje-menu-item>
          <wje-menu-item>
            Three
            <wje-icon slot="start" name="settings"></wje-icon>
          </wje-menu-item>
        </wje-menu> 
   
        <style>
          #toggle {
            margin-left: 1rem;
          }
          #custom {
            --wje-menu-border-width: 0 1px 0 0;
            --wje-menu-border-radius: 0 !important;
            overflow: hidden;
            max-width: 240px;
            wje-menu-item {
              wje-menu {
                --wje-menu-border-width: 1px;
              }
            }
          }
          
          #custom[variant=nav] {
            --wje-menu-shadow: none;
          }
          
          #custom[variant=nav][collapse] {
            --wje-menu-shadow: var(--wje-shadow-medium);
          }
          
          #custom wje-menu-item::part(native) {
            --wje-menu-item-padding-top: .75rem;
            --wje-menu-item-padding-bottom: .75rem;
          }
        </style>
      </div>
    </div>

    <!-- EXPAND -->

    <h2>Expand</h2>
    <p class="description">
      Rozbalený „sidebar“ variant bez <span class="tok attr">collapse</span>: <span class="tok tag">&lt;wje-menu&gt;</span> s <span class="tok attr">variant="nav"</span> a aktívnym stavom.
      Hierarchia je riešená vnoreným submenu cez slot <span class="tok attr">submenu</span>; odsadenie položiek je nastavené atribútom <span class="tok attr">offset</span>.
      Lokálne CSS upravuje hranice a tieň cez premenné (napr. <span class="tok css">--wje-menu-border-width</span>, <span class="tok css">--wje-menu-shadow</span>) a padding cez <span class="tok css">::part(native)</span>.
    </p>
    <div class="playground" style="align-items: start;">
      <div class="content" style="display: block; margin: 0 auto;">
        <wje-menu id="custom-1" variant="nav" active>
          <wje-menu-item>
            Home
            <wje-icon slot="start" name="home"></wje-icon>
          </wje-menu-item>
          <wje-menu-item>
            One
            <wje-icon slot="start" name="heart"></wje-icon>
            <wje-menu slot="submenu" variant="nav">
              <wje-menu-item offset="10">Menu item 1</wje-menu-item>
              <wje-menu-item offset="10">
                Menu item 2
                <wje-menu slot="submenu" variant="nav">
                  <wje-menu-item offset="10">Menu item 2.1</wje-menu-item>
                  <wje-menu-item offset="10">Menu item 2.2</wje-menu-item>
                  <wje-menu-item offset="10">Menu item 2.3</wje-menu-item>
                </wje-menu>
              </wje-menu-item>
              <wje-menu-item offset="10">Menu item 3</wje-menu-item>
            </wje-menu>
          </wje-menu-item>
          <wje-menu-item>
            Two
            <wje-icon slot="start" name="map-pin"></wje-icon>
          </wje-menu-item>
          <wje-menu-item>
            <wje-icon slot="start" name="settings"></wje-icon>
            Three
          </wje-menu-item>
        </wje-menu> 
        
        <style>
          #custom-1 {
            --wje-menu-border-width: 0 1px 0 0;
            --wje-menu-border-radius: 0;
            max-width: 240px; 
            --wje-menu-shadow: none;
          }
          
          #custom-1 wje-menu-item::part(native) {
            --wje-menu-item-padding-top: .75rem;
            --wje-menu-item-padding-bottom: .75rem;
          }
        </style>
      </div>
    </div>
  </div>`;

export default class DemoNav extends WJElement {
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

    const toggle = document.querySelector('#toggle');
    const menu = document.querySelector('#custom');

    toggle.addEventListener('wje-button:click', (e) => {
      menu.toggleAttribute('collapse');
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-nav') || window.customElements.define('demo-nav', DemoNav);
