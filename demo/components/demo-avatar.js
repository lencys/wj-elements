import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<style>
    .description {
      margin: 0 0 .5rem;
      max-width: 72ch;
      opacity: .8;
    }
  </style>
  <h1>Avatar</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
    <p class="description">
      Základná ukážka avatara s obrázkom (<code>&lt;wje-img&gt;</code>), s iniciálami cez <code>label</code> + boolean <code>initials</code> a s ikonou cez slot <code>icon</code>.
    </p>
    <div class="playground">
      <div class="content" style="display: flex; gap: .25rem;">
        <wje-avatar>
          <wje-img src="/assets/img/avatar.svg"></wje-img>
        </wje-avatar>
        
        <wje-avatar label="Petr Rahman" initials>
          <wje-img src="/assets/img/avatar.svg"></wje-img>
        </wje-avatar>
        <wje-avatar>
          <wje-icon name="check" slot="icon"></wje-icon>
        </wje-avatar>
      </div>
    </div>
    
    <!-- ERROR -->

    <h3>Error</h3>
    <p class="description">
      Ukážka správania pri chybe načítania obrázka – komponent fallbackne na inicialy podľa <code>label</code> (ak je dostupné) alebo na default obsah.
    </p>
    <div class="playground">
      <div class="content" style="display: flex; gap: .25rem;">
        <wje-avatar label="Petr Rahman">
          <wje-img src="/assets/img/avatar-1.svg"></wje-img>
        </wje-avatar>
        <wje-avatar label="Petr Rahman">
          <wje-img src="/assets/img/avatar.svg"></wje-img>
        </wje-avatar>
      </div>
    </div>
    
    <!-- SIZE -->

    <h3>Size</h3>
    <p class="description">
      Veľkosti avatara cez atribút <code>size</code> (napr. <code>small</code>, <code>medium</code>, <code>normal</code>, <code>large</code> až <code>5x-large</code>). Ukážka používa obrázok vnútri <code>&lt;wje-img&gt;</code>.
    </p>
    <div class="playground">
      <div class="content" style="display: flex; gap: .25rem;">
        <wje-avatar size="small"><wje-img src="/assets/img/avatar.svg"></wje-img></wje-avatar>
        <wje-avatar size="medium"><wje-img src="/assets/img/avatar.svg"></wje-img></wje-avatar>
        <wje-avatar size="normal"><wje-img src="/assets/img/avatar.svg"></wje-img></wje-avatar>
        <wje-avatar size="large"><wje-img src="/assets/img/avatar.svg"></wje-img></wje-avatar>
        <wje-avatar size="x-large"><wje-img src="/assets/img/avatar.svg"></wje-img></wje-avatar>
        <wje-avatar size="2x-large"><wje-img src="/assets/img/avatar.svg"></wje-img></wje-avatar>
        <wje-avatar size="3x-large"><wje-img src="/assets/img/avatar.svg"></wje-img></wje-avatar>
        <wje-avatar size="4x-large"><wje-img src="/assets/img/avatar.svg"></wje-img></wje-avatar>
        <wje-avatar size="5x-large"><wje-img src="/assets/img/avatar.svg"></wje-img></wje-avatar>
      </div>
    </div>
    
    <!-- SIZE INITIALS -->
    
    <h3>Size - Initials</h3>
    <p class="description">
      Rovnaké veľkosti <code>size</code>, ale render iniciál cez <code>label</code> + boolean <code>initials</code> (bez obrázka).
    </p>
    <div class="playground">
      <div class="content" style="display: flex; gap: .25rem;">
        <wje-avatar size="small" label="Petr Rahman" initials></wje-avatar>
        <wje-avatar size="medium" label="Petr Rahman" initials></wje-avatar>
        <wje-avatar size="normal" label="Petr Rahman" initials></wje-avatar>
        <wje-avatar size="large" label="Petr Rahman" initials></wje-avatar>
        <wje-avatar size="x-large" label="Petr Rahman" initials></wje-avatar>
        <wje-avatar size="2x-large" label="Petr Rahman" initials></wje-avatar>
        <wje-avatar size="3x-large" label="Petr Rahman" initials></wje-avatar>
        <wje-avatar size="4x-large" label="Petr Rahman" initials></wje-avatar>
        <wje-avatar size="5x-large" label="Petr Rahman" initials></wje-avatar>
      </div>
    </div>
    
    <!-- COLOR -->
    
    <h3>Color</h3>
    <p class="description">
      Automatické priraďovanie farby backgroundu pre initial avatar (podľa hodnoty <code>label</code>). Bez špeciálneho CSS/JS – farby určuje komponent.
    </p>
    <div class="playground">
      <div class="content" style="display: flex; gap: .25rem;">
        <wje-avatar label="Z M" initials></wje-avatar>
        <wje-avatar label="L V" initials></wje-avatar>
        <wje-avatar label="M K" initials></wje-avatar>
        <wje-avatar label="A N" initials></wje-avatar>
        <wje-avatar label="I D" initials></wje-avatar>
        <wje-avatar label="J S" initials></wje-avatar>
        <wje-avatar label="K P" initials></wje-avatar>
        <wje-avatar label="D D" initials></wje-avatar>
      </div>
    </div>
    
    <!-- ICON -->

    <h3>Icon</h3>
    <p class="description">
      Ikona v avatare cez slot <code>icon</code> – vhodné pre stavové/akčné avatary (napr. „verified“).
    </p>
    <div class="playground">
      <div class="content">
        <wje-avatar>
          <wje-icon name="check" slot="icon"></wje-icon>
        </wje-avatar>
      </div>
    </div>
    
    <!-- INITIALS -->

    <h3>Initials</h3>
    <p class="description">
      Zobrazenie iniciál len z <code>label</code> pomocou boolean atribútu <code>initials</code>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-avatar label="Petr Rahman" initials></wje-avatar>
      </div>
    </div>
    
    <!-- STATUS -->

    <h3>Status</h3>
    <p class="description">
      Status indikátor cez slot <code>status</code> s vnoreným <code>&lt;wje-status&gt;</code>. Pozíciu nastavuje atribút <code>status-placement</code> (napr. <code>top-start</code>, <code>bottom-end</code>).
    </p>
    <div class="playground">
      <div class="content" style="display: flex; gap: 1rem; width: 100px;">
        <wje-avatar label="Petr Rahman" status-placement="top-start" initials>
          <wje-status color="success" slot="status">
            <wje-icon name="check" size="2x-small"></wje-icon>
          </wje-status>
        </wje-avatar>
        
        <wje-avatar label="Petr Rahman" status-placement="top-end" initials>
          <wje-status color="success" slot="status">
            <wje-icon name="check" size="2x-small"></wje-icon>
          </wje-status>
        </wje-avatar>
        
        <wje-avatar label="Petr Rahman" status-placement="bottom-start" initials>
          <wje-status color="success" slot="status">
            <wje-icon name="check" size="2x-small"></wje-icon>
          </wje-status>
        </wje-avatar>
        
        <wje-avatar label="Petr Rahman" status-placement="bottom-end" initials>
          <wje-status color="success" slot="status">
            <wje-icon name="check" size="2x-small"></wje-icon>
          </wje-status>
        </wje-avatar>
      </div>
    </div>
    
    <!-- DROPDOWN -->

    <h3>Dropdown</h3>
    <p class="description">
      Avatar ako trigger pre <code>&lt;wje-dropdown&gt;</code> (slot <code>trigger</code>). Ukazuje atribúty dropdownu <code>placement</code>, <code>trigger="hover"</code>, <code>offset</code> a variant <code>collapsible</code>. Menu je upravené lokálnym CSS cez triedu <code>.custom-menu</code>.
    </p>
    <div class="playground">
      <div class="content" style="display: flex; gap: .25rem;">
        <wje-dropdown id="custom-dropdown" placement="right-start" trigger="hover" offset="5">
          <wje-avatar label="Petr Rahman" initials slot="trigger"></wje-avatar>
          <wje-menu class="custom-menu" active>
            <h5 style="margin: 0;">Petr Rahman</h5>
            <p class="hint-text">Frontend Developer</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
          </wje-menu>
        </wje-dropdown>
        
        <wje-dropdown id="custom-dropdown" placement="right-start" offset="5" collapsible>
          <wje-avatar label="Petr Rahman" initials slot="trigger"></wje-avatar>
          <wje-menu class="custom-menu" active>
            <h5 style="margin: 0;">Petr Rahman</h5>
            <p class="hint-text">Frontend Developer</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
            <wje-divider></wje-divider>
            <wje-menu-item>Link A</wje-menu-item>
            <wje-menu-item>Link B</wje-menu-item>
          </wje-menu>
        </wje-dropdown>
        <style>
          .custom-menu {
            width: 200px;
            padding: 1rem 1rem 1rem;
          }
        </style>
      </div>
    </div>
    
    <!-- TOOLTIP -->

    <h3>Tooltip</h3>
    <p class="description">
      Tooltip cez obalový komponent <code>&lt;wje-tooltip&gt;</code> a jeho atribút <code>content</code> – bez dodatočného JavaScriptu.
    </p>
    <div class="playground">
      <div class="content">
        <wje-tooltip content="Petr Rahman">
          <wje-avatar label="Petr Rahman" initials></wje-avatar>
        </wje-tooltip>
      </div>
    </div>
    
    <!-- GROUP -->

    <h3>Group</h3>
    <p class="description">
      Skupina avatarov s prekrytím pomocou lokálneho CSS (<code>margin-left: -1rem</code>) a „ring“ efekt cez <code>::part(native)</code> (biely border).
    </p>
    <div class="playground">
      <div class="content">
        <div class="wje-avatar-group">
          <wje-avatar>
            <wje-img src="/assets/img/avatar.svg"></wje-img>
          </wje-avatar>
          <wje-avatar>
            <wje-img src="/assets/img/avatar.svg"></wje-img>
          </wje-avatar>
          <wje-avatar>
            <wje-img src="/assets/img/avatar.svg"></wje-img>
          </wje-avatar>
          <style>
            .wje-avatar-group wje-avatar:not(:first-of-type) {
              margin-left: -1rem;      
            }
            
            .wje-avatar-group wje-avatar::part(native) {
              border: solid 2px #fff;
            }
          </style>
        </div>
      </div>
    </div>
    
    <!-- CUSTOM -->

    <h3>Custom</h3>
    <p class="description">
      Override vzhľadu cez CSS custom properties (napr. <code>--wje-avatar-size</code>, <code>--wje-avatar-font-size</code>, <code>--wje-avatar-color</code>, <code>--wje-avatar-background-color</code>) aplikované na konkrétny element cez <code>id="custom"</code>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-avatar id="custom" label="Petr Rahman" initials></wje-avatar>
        <style>
          wje-avatar#custom {
            --wje-avatar-size: 100px;
            --wje-avatar-font-size: 2rem;
            --wje-avatar-font-weight: 700;
            --wje-avatar-color: #000 !important;
            --wje-avatar-background-color: #ff0000 !important;
          }
        </style>
      </div>
    </div>
  </div>`;

export default class DemoAvatar extends WJElement {
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
  }

  beforeRouteEnter(transition) {
    this.breadcrumbs = transition.breadcrumbs;
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-avatar') || window.customElements.define('demo-avatar', DemoAvatar);
