import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>File upload</h1>
  <div class="container">
    
    <!-- IMAGES -->

    <h2>Images</h2>
    <p class="description">
      Základné použitie <span class="tok tag">&lt;wje-file-upload&gt;</span> pre obrázky: obmedzenie typov súborov cez
      <span class="tok attr">accepted-types="image/*"</span>. Obsah vnútri komponentu je custom (tu len text) a slúži ako vizuálna výzva pre drag &amp; drop.
    </p>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content">
        <wje-file-upload accepted-types="image/*">
          <p>Drag and drop files here</p>
        </wje-file-upload>
      </div>
    </div>

    <!-- ICON -->

    <h2>Icon</h2>
    <p class="description">
      Variant s ikonou a validáciami: boolean <span class="tok attr">icon</span> prepne layout na ikonový režim,
      <span class="tok attr">max-file-size="10000"</span> limituje veľkosť súboru a <span class="tok attr">accepted-types="mp4"</span> obmedzí povolený typ.
      Ikona je vložená ako <span class="tok tag">&lt;wje-icon&gt;</span> a jej veľkosť je upravená cez CSS premennú <span class="tok css">--wje-icon-size</span>.
    </p>
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
    super();
  }

  /**
   * Returns the template for the component.
   * @static
   * @returns {HTMLElement} The template element
   */
  static get customTemplate() {
    return template;
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-file-upload') || window.customElements.define('demo-file-upload', DemoFileUpload);
