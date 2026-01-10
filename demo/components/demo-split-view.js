import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Split View</h1>
  <div class="container">
    
    <style>
      wje-split-view {
        height: 300px;
        width: 100%;
        border-color: var(--wje-border-color); 
        border-style: solid;
        border-width: 1px;
        display: block; /* Must be block */
      }
    </style>
        
    <!-- BASIC -->

    <h2>Basic</h2>
    <p class="description">
      Základné použitie <span class="tok tag">&lt;wje-split-view&gt;</span> s horizontálnym rozdelením.
      Atribút <span class="tok attr">initial</span> nastavuje počiatočnú veľkosť časti 
      <span class="tok attr">slot="start"</span> v pixeloch.
    </p>
    <div class="playground">
      <div class="content">
        <wje-split-view initial="250">
          <div slot="start">Start</div>
          <div slot="end">End</div>
        </wje-split-view>
      </div>
    </div>   
    
    <!-- VERTICAL -->

    <h2>Vertical</h2>
    <p class="description">
      Vertikálne rozdelenie cez boolean atribút <span class="tok attr">vertical</span>.
      Obsah sa delí na <span class="tok attr">slot="start"</span> (hore) a 
      <span class="tok attr">slot="end"</span> (dole).
    </p>
    <div class="playground">
      <div class="content">
        <wje-split-view vertical>
          <div slot="start">Top</div>
          <div slot="end">Bottom</div>
        </wje-split-view>
      </div>
    </div>
    
    <!-- MIN/MAX -->

    <h2>Min/Max</h2>
    <p class="description">
      Obmedzenie veľkosti časti pomocou atribútov 
      <span class="tok attr">min</span> a <span class="tok attr">max</span> (percentá).
      Počiatočná pozícia sa nastavuje cez <span class="tok attr">initial</span>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-split-view min="50" max="50" initial="75">
          <div slot="start">Start</div>
          <div slot="end">End</div>
        </wje-split-view>
      </div>
    </div> 

    <!-- DISABLED -->

    <h2>Disabled</h2>
    <p class="description">
      Vypnutie interakcie cez atribút <span class="tok attr">disabled</span>.
      Rozdeľovač je zobrazený, ale nie je možné s ním hýbať.
    </p>
    <div class="playground">
      <div class="content">
        <wje-split-view disabled>
          <div slot="start">Start</div>
          <div slot="end">End</div>
        </wje-split-view>
      </div>
    </div> 
    
    <!-- SPLIT -->

    <h2>Split</h2>
    <p class="description">
      Vnorený split view: v <span class="tok attr">slot="end"</span> je ďalší 
      <span class="tok tag">&lt;wje-split-view&gt;</span>, tentokrát vertikálny.
      Umožňuje vytvoriť komplexné rozdelené layouty.
    </p>
    <div class="playground">
      <div class="content">
        <wje-split-view initial="50">
          <div slot="start">Start</div>
          <div slot="end">
            <wje-split-view vertical id="custom-vertical-2">
              <div slot="start">Top</div>
              <div slot="end">Bottom</div>
            </wje-split-view>
          </div>
        </wje-split-view>
      </div>
    </div>
    
    <!-- CUSTOM -->

    <h2>Custom</h2>
    <p class="description">
      Ukážka vlastného rozdeľovača cez slot <span class="tok attr">divider</span>.
      V CSS sú upravené premenné <span class="tok css">--wje-split-view-divider-background</span> 
      a <span class="tok css">--wje-split-view-divider-size</span>, pričom 
      <span class="tok tag">&lt;wje-icon&gt;</span> je vizuálny obsah rozdeľovača.
    </p>
    <div class="playground">
      <div class="content">
        <wje-split-view id="custom">
          <div slot="start">Start</div>
          <wje-icon name="grip-vertical" slot="divider"></wje-icon>
          <div slot="end">End</div>
        </wje-split-view>
        <style>
          #custom {
            --wje-split-view-divider-background: mediumvioletred !important;
            --wje-split-view-divider-size: 1px !important;
          }
          #custom wje-icon {
            display: flex;
            position: absolute;
            background-color: mediumvioletred;
            padding: .2rem 0.25rem;
            color: white;
            border-radius: 4px;
            height: 20px;
          }
        </style>  
      </div>
    </div>
  </div>`;

export default class DemoSplitView extends WJElement {
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
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-split-view') || window.customElements.define('demo-split-view', DemoSplitView);
