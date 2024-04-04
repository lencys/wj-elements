import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Checkbox</h1>
  <div class="container">
    
    <!-- CHECKBOX -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-checkbox id="test">Default</wje-checkbox>
        <wje-checkbox checked>Default checked</wje-checkbox>
        <wje-checkbox disabled>Default disabled</wje-checkbox>
        <wje-checkbox checked disabled>Default checked disabled</wje-checkbox>
        <wje-checkbox color="primary" checked>Default primary checked</wje-checkbox>
        <wje-checkbox color="warning" indeterminate>Default warning indeterminate</wje-checkbox>
        <wje-checkbox variant="circle">Circle</wje-checkbox>
        <wje-checkbox variant="circle" checked>Circle checked</wje-checkbox>
        <wje-checkbox variant="circle" disabled>Circle disabled</wje-checkbox>
        <wje-checkbox variant="circle" checked disabled>Circle checked disabled</wje-checkbox>
        <wje-checkbox variant="circle" color="complete" checked>Circle complete checked</wje-checkbox>
        <wje-checkbox variant="circle" color="danger" indeterminate>Circle danger indeterminate</wje-checkbox>
      </div>
    </div>
    
  </div>`;

export default class DemoCheckbox extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    let test = this.context.querySelector('#test');

    test.addEventListener('wje-checkbox:change', (e) => {
      console.log('wje-checkbox:change:', e.target.checked);
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-checkbox") || window.customElements.define("demo-checkbox", DemoCheckbox);