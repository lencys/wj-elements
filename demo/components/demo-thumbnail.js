import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Thumbnail</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content">
        <wj-thumbnail>
          <img alt="Silhouette of mountains" src="/assets/img/thumbnail.svg" />
        </wj-thumbnail>
      </div>
    </div>

    <!-- ITEM -->

    <h3>Item</h3>
    <div class="playground">
      <div class="content">
        <wj-item>
          <wj-thumbnail slot="start">
            <img alt="Silhouette of mountains" src="/assets/img/thumbnail.svg" />
          </wj-thumbnail>
          <wj-label>Item</wj-label>
        </wj-item>
      </div>
    </div>

    <!--  CUSTOM -->

    <h3>Custom</h3>
    <div class="playground">
      <div class="content">
        <wj-thumbnail class="example-thumbnail">
          <img alt="Silhouette of mountains" src="/assets/img/thumbnail.svg" />
        </wj-thumbnail>

        <style>
          .example-thumbnail {
            --wj-thumbnail-width: 80px !important;
            --wj-thumbnail-height: 80px !important;
            --wj-border-radius: 24px !important;
          }
        </style>
      </div>
    </div>
  </div>`;

export default class DemoThumbnail extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-thumbnail") || window.customElements.define("demo-thumbnail", DemoThumbnail);