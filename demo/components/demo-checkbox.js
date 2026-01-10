import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<h1>Checkbox</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <p class="description">
      Základné stavy <span class="tok tag">&lt;wje-checkbox&gt;</span>: default, zaškrtnutý cez <span class="tok attr">checked</span> a tri-state cez <span class="tok attr">indeterminate</span>.
      Príklad je vo <span class="tok tag">&lt;form&gt;</span> a prvý checkbox má <span class="tok attr">name</span>/<span class="tok attr">id</span> pre prácu v JavaScripte.
      V <span class="tok method">afterDraw()</span> sa počúva event <span class="tok event">wje-toggle:change</span> a loguje sa <span class="tok attr">value</span>.
    </p>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-checkbox name="clear" id="test">Default</wje-checkbox>
        <wje-checkbox name="test" checked>Default checked</wje-checkbox>
        <wje-checkbox name="indeterminate" indeterminate>Default indeterminate</wje-checkbox>
      </div>
    </div>
    
    <!-- End -->

    <h2>End</h2>
    <p class="description">
      Umiestnenie labelu na koniec cez atribút <span class="tok attr">placement="end"</span>.
      Ukážka porovnáva default a <span class="tok attr">checked</span> stav pri rovnakom layoute.
    </p>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-checkbox placement="end">Default</wje-checkbox>
        <wje-checkbox placement="end" checked>Default checked</wje-checkbox>
      </div>
    </div>

    <!-- COLOR -->

    <h2>Color</h2>
    <p class="description">
      Farebné varianty cez atribút <span class="tok attr">color</span> (napr. <span class="tok attr">primary</span>, <span class="tok attr">complete</span>, <span class="tok attr">success</span>, <span class="tok attr">warning</span>, <span class="tok attr">danger</span>, <span class="tok attr">info</span>).
      Každá farba je ukázaná v stavoch <span class="tok attr">checked</span>, default a <span class="tok attr">indeterminate</span>.
    </p>
    <div class="playground">
      <div class="content" style="display: block;">
        <h5>Default</h5>
        <wje-checkbox checked>Default primary checked</wje-checkbox>
        <wje-checkbox>Default primary</wje-checkbox>
        <wje-checkbox indeterminate>Default primary indeterminate</wje-checkbox>
        
        <h5>Primary</h5>
        <wje-checkbox color="primary" checked>Default primary checked</wje-checkbox>
        <wje-checkbox color="primary">Default primary</wje-checkbox>
        <wje-checkbox color="primary" indeterminate>Default primary indeterminate</wje-checkbox>
        
        <h5>Complete</h5>
        <wje-checkbox color="complete" checked>Default complete checked</wje-checkbox>
        <wje-checkbox color="complete">Default complete</wje-checkbox>
        <wje-checkbox color="complete" indeterminate>Default complete indeterminate</wje-checkbox>
        
        <h5>Success</h5>
        <wje-checkbox color="success" checked>Default success checked</wje-checkbox>
        <wje-checkbox color="success">Default success</wje-checkbox>
        <wje-checkbox color="success" indeterminate>Default success indeterminate</wje-checkbox>
        
        <h5>Warning</h5>
        <wje-checkbox color="warning" checked>Default warning checked</wje-checkbox>
        <wje-checkbox color="warning">Default warning</wje-checkbox>
        <wje-checkbox color="warning" indeterminate>Default warning indeterminate</wje-checkbox>
        
        <h5>Danger</h5>
        <wje-checkbox color="danger" checked>Default danger checked</wje-checkbox>
        <wje-checkbox color="danger">Default danger</wje-checkbox>
        <wje-checkbox color="danger" indeterminate>Default danger indeterminate</wje-checkbox>
        
        <h5>Info</h5>
        <wje-checkbox color="info" checked>Default info checked</wje-checkbox>
        <wje-checkbox color="info">Default info</wje-checkbox>
        <wje-checkbox color="info" indeterminate>Default info indeterminate</wje-checkbox>
      </div>
    </div>
    
    <!-- CIRCLE -->

    <h2>Circle</h2>
    <p class="description">
      Zmena vizuálneho štýlu cez <span class="tok attr">variant="circle"</span>.
      Kombinované s <span class="tok attr">color</span> a stavmi <span class="tok attr">checked</span> / <span class="tok attr">indeterminate</span>.
    </p>
    <div class="playground">
      <div class="content" style="display: block;">
        <h5>Default</h5>
        <wje-checkbox variant="circle" checked>Default primary checked</wje-checkbox>
        <wje-checkbox variant="circle">Default primary</wje-checkbox>
        <wje-checkbox variant="circle" indeterminate>Default primary indeterminate</wje-checkbox>
        
        <h5>Primary</h5>
        <wje-checkbox variant="circle" color="primary" checked>Default primary checked</wje-checkbox>
        <wje-checkbox variant="circle" color="primary">Default primary</wje-checkbox>
        <wje-checkbox variant="circle" color="primary" indeterminate>Default primary indeterminate</wje-checkbox>
        
        <h5>Complete</h5>
        <wje-checkbox variant="circle" color="complete" checked>Default complete checked</wje-checkbox>
        <wje-checkbox variant="circle" color="complete">Default complete</wje-checkbox>
        <wje-checkbox variant="circle" color="complete" indeterminate>Default complete indeterminate</wje-checkbox>
        
        <h5>Success</h5>
        <wje-checkbox variant="circle" color="success" checked>Default success checked</wje-checkbox>
        <wje-checkbox variant="circle" color="success">Default success</wje-checkbox>
        <wje-checkbox variant="circle" color="success" indeterminate>Default success indeterminate</wje-checkbox>
        
        <h5>Warning</h5>
        <wje-checkbox variant="circle" color="warning" checked>Default warning checked</wje-checkbox>
        <wje-checkbox variant="circle" color="warning">Default warning</wje-checkbox>
        <wje-checkbox variant="circle" color="warning" indeterminate>Default warning indeterminate</wje-checkbox>
        
        <h5>Danger</h5>
        <wje-checkbox variant="circle" color="danger" checked>Default danger checked</wje-checkbox>
        <wje-checkbox variant="circle" color="danger">Default danger</wje-checkbox>
        <wje-checkbox variant="circle" color="danger" indeterminate>Default danger indeterminate</wje-checkbox>
        
        <h5>Info</h5>
        <wje-checkbox variant="circle" color="info" checked>Default info checked</wje-checkbox>
        <wje-checkbox variant="circle" color="info">Default info</wje-checkbox>
        <wje-checkbox variant="circle" color="info" indeterminate>Default info indeterminate</wje-checkbox>
      </div>
    </div>
    
    <!-- DISABLED -->

    <h2>Disabled</h2>
    <p class="description">
      Neaktívny stav cez boolean atribút <span class="tok attr">disabled</span> pre štandardný aj <span class="tok attr">variant="circle"</span> checkbox.
      Ukážka obsahuje aj kombináciu <span class="tok attr">checked</span> + <span class="tok attr">disabled</span>.
    </p>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-checkbox disabled>Default disabled</wje-checkbox>
        <wje-checkbox checked disabled>Default checked disabled</wje-checkbox>
        
        <h5>Circle</h5>
        <wje-checkbox variant="circle" disabled>Circle disabled</wje-checkbox>
        <wje-checkbox variant="circle" checked disabled>Circle checked disabled</wje-checkbox>
      </div>
    </div>
  </div>`;

export default class DemoCheckbox extends WJElement {
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

    let test = this.context.querySelector('#test');

    test.addEventListener('wje-toggle:change', (e) => {
      console.log('wje-toggle:change:', e.target, e.target.value);
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-checkbox') || window.customElements.define('demo-checkbox', DemoCheckbox);
