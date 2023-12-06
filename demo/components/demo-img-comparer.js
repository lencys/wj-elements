import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Img Comparer</h1>
  <div class="container">
        
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wj-img-comparer>
          <wj-img src="/demo/assets/img/example-image.svg" slot="before"></wj-img>
          <wj-img src="/demo/assets/img/example-image2.svg" slot="after"></wj-img>
        </wj-img-comparer>
      </div>
    </div>
  </div>`;

export default class DemoImgComparer extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-img-comparer") || window.customElements.define("demo-img-comparer", DemoImgComparer);