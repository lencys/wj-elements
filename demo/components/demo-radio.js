import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Radio</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-label>Choose an color:</wje-label>
        <wje-radio-group value="blue" name="color" id="radio-group-animal">
          <wje-radio value="red">Red</wje-radio>
          <wje-radio value="yellow" disabled="">Yellow</wje-radio>
          <wje-radio indeterminate value="green" >Green</wje-radio>
          <wje-radio value="blue">Blue</wje-radio>
        </wje-radio-group>
      </div>
    </div>

    <!-- PLACEMENT -->

    <h2>Placement</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-radio-group value="dog" name="animal">
          <wje-radio value="cat" placement="end">Cat</wje-radio>
          <wje-radio value="elephant" disabled="" placement="end">Elephant</wje-radio>
          <wje-radio indeterminate value="rabbit"  placement="end">Rabbit</wje-radio>
          <wje-radio value="dog" placement="end" checked>Dog</wje-radio>
        </wje-radio-group>
      </div>
    </div>
    
    <!-- INLINE -->

    <h2>Inline</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-radio-group name="number" inline>
          <wje-radio value="one">One</wje-radio>
          <wje-radio value="two">Two</wje-radio>
          <wje-radio value="three">Three</wje-radio>
          <wje-radio value="four">Four</wje-radio>
          <wje-radio value="five">Five</wje-radio>
          <wje-radio value="six">Six</wje-radio>
          <wje-radio value="seven">Seven</wje-radio>
          <wje-radio value="eight">Eight</wje-radio>
        </wje-radio-group>
      </div>
    </div>
    
    <!-- COLORS -->

    <h2>Colors</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-radio-group value="complete">
          <wje-radio value="default">Default</wje-radio>
          <wje-radio value="success" color="success">Success</wje-radio>
          <wje-radio value="primary" color="primary">Primary</wje-radio>
          <wje-radio value="complete" color="complete">Complete</wje-radio>
          <wje-radio value="warning" color="warning">Warning</wje-radio>
          <wje-radio value="danger" color="danger">Danger</wje-radio>
          <wje-radio value="neutral" color="neutral">Neutral</wje-radio>
        </wje-radio-group>
      </div>
    </div>    
  </div>`;

export default class DemoRadio extends WJElement {
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

    this.context.querySelector("#radio-group-animal").addEventListener('wje-radio-group:change', (e) => {
      console.log('Radio group changed:', e.detail);
    })

    this.context.querySelector("#radio-group-animal").addEventListener('wje-radio:change', (e) => {
      console.log('Radio group inputed:', e.detail);
    })

  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-radio') || window.customElements.define('demo-radio', DemoRadio);
