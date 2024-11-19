import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>File upload</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content">
        <wje-file-upload accepted-types="image/*">
          <p>Drag and drop files here</p>
        </wje-file-upload>
      </div>
    </div>

    <!-- ICON -->

    <h2>Icon</h2>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content">
        <wje-file-upload max-file-size="10000" accepted-types="mp4" icon>
          <wje-icon name="cloud-upload" style="--wje-icon-size: 4rem;"></wje-icon>
          <p>Drag and drop to upload</p>
        </wje-file-upload>
      </div>
    </div>
  </div>`;

export default class DemoFileUpload extends WJElement {
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

customElements.get('demo-file-upload') || window.customElements.define('demo-file-upload', DemoFileUpload);
