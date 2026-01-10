import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `

  <h1>Tooltip</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Default</h2>
    <p class="description">
      Základné použitie komponentu <span class="tok tag">&lt;wje-tooltip&gt;</span> s rôznymi
      umiestneniami. Atribút <span class="tok attr">content</span> definuje text tooltipu,
      <span class="tok attr">placement</span> určuje smer zobrazenia
      (<span class="tok attr">top</span>, <span class="tok attr">bottom</span>,
      <span class="tok attr">left</span>, <span class="tok attr">right</span>) a
      <span class="tok attr">offset</span> nastavuje vzdialenosť od trigger elementu
      (<span class="tok tag">&lt;wje-button&gt;</span>).
    </p>
    <div class="playground">
      <div class="content" style="display: flex; gap: 1rem;">
        <wje-tooltip content="Som najkrajsi tooltip hore" offset="0">
          <wje-button size="large">Top - Offset 0</wje-button>
        </wje-tooltip>
        
        <wje-tooltip content="Som najkrajsi tooltip dole" placement="bottom" offset="0">
          <wje-button size="large">Bottom - Offset 0</wje-button>
        </wje-tooltip>
        
        <wje-tooltip content="Som najkrajsi tooltip vlavo" placement="left" offset="0">
          <wje-button size="large">Left - Offset 0</wje-button>
        </wje-tooltip>
        
        <wje-tooltip content="Som najkrajsi tooltip vpravo" placement="right" offset="0">
          <wje-button size="large">Right - Offset 0</wje-button>
        </wje-tooltip>
      </div>
    </div>

    <!-- SLOTS -->

    <h2>Slots</h2>
    <p class="description">
      Tooltip s bohatším obsahom: ikona v slote <span class="tok attr">start</span>,
      doplnkový text v slote <span class="tok attr">end</span> a samotný
      <span class="tok tag">&lt;wje-button&gt;</span> ako trigger. Text tooltipu je daný
      atribútom <span class="tok attr">content</span>.
    </p>
    <div class="playground">
      <div class="content" style="display: flex; gap: 1rem;">
        <wje-tooltip content="Cloud" offset="0">
          <wje-icon name="cloud" slot="start"></wje-icon>
          <span slot="end">Ctrl + D</span>
          <wje-button size="large">Cloud</wje-button>
        </wje-tooltip>
      </div>
    </div>
    
    <!-- EVENTS -->

    <h2>Events</h2>
    <p class="description">
      Dynamický obsah tooltipu. Element s ID <span class="tok attr">events</span> nemá
      atribút <span class="tok attr">content</span>; namiesto toho sa v
      <span class="tok method">afterDraw()</span> pripája handler
      <span class="tok method">beforeShow</span>, ktorý pomocou
      <span class="tok method">fetch()</span> načíta JSON zo servera a vygeneruje HTML.
      Štýl <span class="tok css">#events::part(native)</span> zabezpečí, že tooltip
      sa vykreslí ako block.
    </p>
    <div class="playground">
      <div class="content" style="display: flex; gap: 1rem;">
        <wje-tooltip id="events">
          <wje-avatar>
            <wje-img src="/assets/img/avatar.svg"></wje-img>
          </wje-avatar>
        </wje-tooltip>
        <style>
          #events::part(native) {
            display: block;
          }
        </style>
      </div>
    </div>
    
    <!-- DIALOG -->

    <h2>Dialog</h2>
    <p class="description">
      Kombinácia tooltipu a dialógu. Tooltip s atribútom
      <span class="tok attr">content</span> obaluje
      <span class="tok tag">&lt;wje-button&gt;</span>, ktorý má
      <span class="tok attr">dialog="dialog"</span>. Samotný dialóg je
      <span class="tok tag">&lt;wje-dialog&gt;</span> s atribútom
      <span class="tok attr">trigger="dialog"</span> a zobrazuje sa nezávisle od tooltipu.
    </p>
    <div class="playground">
      <div class="content" style="display: flex; gap: 1rem;">
        <wje-tooltip content="Tooltip text">
          <wje-button dialog="dialog">Button</wje-button>  
        </wje-tooltip>
        <wje-dialog trigger="dialog" headline="Title">
          Lorem ipsum dolor sit amte
        </wje-dialog>
      </div>
    </div>
  </div>`;

export default class DemoTooltip extends WJElement {
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

  async afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);

    this.querySelector('#events').beforeShow = async (e) => {
      const response = await fetch('/demo/assets/test.json');
      const data = await response.json();
      const result = data
        .map((item) => {
          return `<div>${item.name}</div>`;
        })
        .join('');

      return result;
    };
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-tooltip') || window.customElements.define('demo-tooltip', DemoTooltip);
