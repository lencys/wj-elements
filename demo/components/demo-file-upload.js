import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>File upload</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content">
        <wj-file-upload accepted-types="image/*">
          <p>Drag and drop files here</p>
        </wj-file-upload>
      </div>
    </div>
    
    <!-- ICON -->

    <h2>Icon</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content">
        <wj-file-upload max-file-size="10000" accepted-types="mp4" icon>
          <wj-icon name="cloud-upload" style="--wj-icon-size: 4rem;"></wj-icon>
          <p>Drag and drop to upload</p>
        </wj-file-upload>
      </div>
    </div>
  </div>`;

export default class DemoFileUpload extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-file-upload") || window.customElements.define("demo-file-upload", DemoFileUpload);