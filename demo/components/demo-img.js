import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Image</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content">
        <wj-img src="/demo/assets/img/img.png" alt="Niekedy máme pocit, že chodíme v kruhoch..."></wj-img>
      </div>
    </div>
  </div>`;

export default class DemoImg extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-img") || window.customElements.define("demo-img", DemoImg);