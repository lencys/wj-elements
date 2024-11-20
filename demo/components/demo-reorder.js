import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
    <h1>Reorder</h1>
    <div class="container">
    
        <!-- BASIC -->
        
        <h2>Basic</h2>
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
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-reorder') || window.customElements.define('demo-reorder', DemoReorder);
