import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Inline edit</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Default</h2>
    <div class="playground">
      <div class="content">
        <wje-inline-edit>Tralala</wje-inline-edit>
      </div>
    </div>
  </div>`;

export default class DemoInlineEdit extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-inline-edit") || window.customElements.define("demo-inline-edit", DemoInlineEdit);