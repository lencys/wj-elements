import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "./snippet/code-snippet-builder.js";

const template = document.createElement('template');

template.innerHTML = `<h1>File upload item</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content">
        <wje-file-upload-item name="tralala.png" size="1000000" uploaded="500000" progress="50" lang="sk">
          <wje-icon slot="img" name="video" size="large"></wje-icon>
        </wje-file-upload-item>
      </div>
    </div>

    <div class="html-snippet"></div>
    
    <!-- IMAGE -->

    <h2>Image</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content">
        <wje-file-upload-item name="tralala.png" size="1000000">
          <wje-img slot="img" src="https://picsum.photos/42/42?i=1"></wje-img>
        </wje-file-upload-item>
      </div>
    </div>

    <div class="html-snippet"></div>
  </div>`;

export default class DemoFileUploadItem extends WJElement {
  constructor() {
    super(template);
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, document);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-file-upload-item") || window.customElements.define("demo-file-upload-item", DemoFileUploadItem);