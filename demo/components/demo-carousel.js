import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Card</h1>
  <div class="container">
    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wj-carousel>
          <wj-carousel-item>
            <wj-img src="https://picsum.photos/300/200"></wj-img>
          </wj-carousel-item>
          <wj-carousel-item>
            <wj-img src="https://picsum.photos/300/200"></wj-img>
          </wj-carousel-item>
        </wj-carousel>
      </div>
    </div>

  </div>`;

export default class DemoCard extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-card") || window.customElements.define("demo-card", DemoCard);