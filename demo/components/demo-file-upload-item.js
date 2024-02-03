import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>File upload item</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content">
        <wj-file-upload-item name="tralala.png" size="1000000" uploaded="500000" progress="50" lang="sk">
          <wj-icon slot="img" name="video" size="large"></wj-icon>
        </wj-file-upload-item>
      </div>
    </div>
    
    <!-- IMAGE -->

    <h2>Image</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content">
        <wj-file-upload-item name="tralala.png" size="1000000">
          <wj-img slot="img" src="https://picsum.photos/42/42?i=1"></wj-img>
        </wj-file-upload-item>
      </div>
    </div>
  </div>`;

export default class DemoFileUploadItem extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-file-upload-item") || window.customElements.define("demo-file-upload-item", DemoFileUploadItem);