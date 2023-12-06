import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Checkbox</h1>
  <div class="container">
    
    <!-- CHECKBOX -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wj-checkbox id="test">Default</wj-checkbox>
        <wj-checkbox checked>Default checked</wj-checkbox>
        <wj-checkbox disabled>Default disabled</wj-checkbox>
        <wj-checkbox checked disabled>Default checked disabled</wj-checkbox>
        <wj-checkbox color="primary" checked>Default primary checked</wj-checkbox>
        <wj-checkbox color="warning" indeterminate>Default warning indeterminate</wj-checkbox>
        <wj-checkbox variant="circle">Circle</wj-checkbox>
        <wj-checkbox variant="circle" checked>Circle checked</wj-checkbox>
        <wj-checkbox variant="circle" disabled>Circle disabled</wj-checkbox>
        <wj-checkbox variant="circle" checked disabled>Circle checked disabled</wj-checkbox>
        <wj-checkbox variant="circle" color="complete" checked>Circle complete checked</wj-checkbox>
        <wj-checkbox variant="circle" color="danger" indeterminate>Circle danger indeterminate</wj-checkbox>
      </div>
    </div>
    
  </div>`;

export default class DemoCheckbox extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    let test = this.context.querySelector('wj-checkbox');

    test.addEventListener('wj:checkbox:change', (e) => {
      console.log('ccccccchange');
    });

    test.addEventListener('wj:checkbox:input', (e) => {
      // debugger
      console.log('iiiiiiiinput');
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-checkbox") || window.customElements.define("demo-checkbox", DemoCheckbox);