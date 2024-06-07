import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Thumbnail</h1>
  <div class="container">

    <!-- CIRCLE -->

    <h3>Circle</h3>
    <div class="playground">
      <div class="content">
        <wje-thumbnail circle>
          <img alt="Silhouette of mountains" src="/assets/img/thumbnail.svg" />
        </wje-thumbnail>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- BASIC -->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content">
        <wje-thumbnail>
          <img alt="Silhouette of mountains" src="/assets/img/thumbnail.svg" />
        </wje-thumbnail>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!-- ITEM -->

    <h3>Item</h3>
    <div class="playground">
      <div class="content">
        <wje-item>
          <wje-thumbnail slot="start">
            <img alt="Silhouette of mountains" src="/assets/img/thumbnail.svg" />
          </wje-thumbnail>
          <wje-label>Item</wje-label>
        </wje-item>
      </div>
    </div>

    <div class="html-snippet"></div>

    <!--  CUSTOM -->

    <h3>Custom</h3>
    <div class="playground">
      <div class="content">
        <wje-thumbnail class="example-thumbnail">
          <img alt="Silhouette of mountains" src="/assets/img/thumbnail.svg" />
        </wje-thumbnail>

        <style>
          .example-thumbnail {
            --wje-thumbnail-width: 80px !important;
            --wje-thumbnail-height: 80px !important;
            --wje-border-radius: 24px !important;
          }
        </style>
      </div>
    </div>

    <div class="html-snippet"></div>
  </div>`;

export default class DemoThumbnail extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-thumbnail") || window.customElements.define("demo-thumbnail", DemoThumbnail);