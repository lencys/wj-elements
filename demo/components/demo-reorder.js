import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
    <h1>Reorder</h1>
    <div class="container">
    
        <!-- DEFAULT -->
        
        <h2>Default</h2>
        <p class="description">
          Základné použitie <span class="tok tag">&lt;wje-reorder&gt;</span> s položkami
          <span class="tok tag">&lt;wje-reorder-item&gt;</span>. Presúvanie funguje „drag &amp; drop“
          na celej položke bez potreby ďalších atribútov.
        </p>
        <div class="playground">
            <div class="content">
                <wje-reorder>
                    <wje-reorder-item>Reorder item 1</wje-reorder-item>
                    <wje-reorder-item>Reorder item 2</wje-reorder-item>
                    <wje-reorder-item>Reorder item 3</wje-reorder-item>
                    <wje-reorder-item>Reorder item 4</wje-reorder-item>
                </wje-reorder>
            </div>
        </div>

        <!-- ITEMS WITH HANDLE -->
        
        <h2>Items With Handle</h2>
        <p class="description">
          Reorder s „handle“: do každého <span class="tok tag">&lt;wje-reorder-item&gt;</span> je vložený
          element do slotu <span class="tok attr">handle</span> (tu <span class="tok tag">&lt;wje-icon&gt;</span>).
          Drag sa iniciuje iba chytením handle, nie klikom na celý riadok.
        </p>
        <div class="playground">
            <div class="content">
                <wje-reorder>
                    <wje-reorder-item>
                        <wje-icon name="baseline-density-medium" slot="handle"></wje-icon>
                        Reorder item 1
                    </wje-reorder-item>
                    <wje-reorder-item>
                        <wje-icon name="baseline-density-medium" slot="handle"></wje-icon>
                        Reorder item 2
                    </wje-reorder-item>
                    <wje-reorder-item>
                        <wje-icon name="baseline-density-medium" slot="handle"></wje-icon>
                        Reorder item 3
                    </wje-reorder-item>
                    <wje-reorder-item>
                        <wje-icon name="baseline-density-medium" slot="handle"></wje-icon>
                        Reorder item 4
                    </wje-reorder-item>
                </wje-reorder>
            </div>
        </div>

        <!-- DISABLED -->
        
        <h2>Disabled</h2>
        <p class="description">
          Vypnutie interakcie cez boolean atribút <span class="tok attr">disabled</span> na
          <span class="tok tag">&lt;wje-reorder&gt;</span>. Položky sa dajú zobraziť, ale nedajú sa presúvať.
        </p>
        <div class="playground">
            <div class="content">
                <wje-reorder disabled>
                    <wje-reorder-item>Reorder item 1</wje-reorder-item>
                    <wje-reorder-item>Reorder item 2</wje-reorder-item>
                    <wje-reorder-item>Reorder item 3</wje-reorder-item>
                    <wje-reorder-item>Reorder item 4</wje-reorder-item>
                </wje-reorder>
            </div>
        </div>
    </div>
`;

export default class DemoReorder extends WJElement {
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

    const reorderList = this.context.querySelectorAll('wje-reorder');
    reorderList.forEach((reorder) => {
      reorder.addEventListener('wje-reorder:change', (e) => {
        console.log('Reorder changed:', e.detail.order);
      });
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-reorder') || window.customElements.define('demo-reorder', DemoReorder);
