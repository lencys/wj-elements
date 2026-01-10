import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<h1>File upload item</h1>
  <div class="container">
    
    <!-- UPLOADING -->

    <h2>Uploading</h2>
    <p class="description">
      Zobrazenie priebehu uploadu pomocou <span class="tok tag">&lt;wje-file-upload-item&gt;</span>.
      Atribúty <span class="tok attr">size</span>, <span class="tok attr">uploaded</span> a <span class="tok attr">progress</span>
      určujú celkovú veľkosť súboru, už nahraté dáta a percentuálny postup.
      Obsah náhľadu je vložený do slotu <span class="tok attr">img</span> (ikona alebo obrázok).
    </p>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content">
        <wje-file-upload-item name="lorem-ipsum.png" size="1000000" uploaded="500000" progress="50" lang="sk-sk">
          <wje-icon slot="img" name="video" size="large"></wje-icon>
        </wje-file-upload-item>
      </div>
    </div>
    
    <!-- IS UPLOADED -->

    <h2>Is uploaded</h2>
    <p class="description">
      Stav dokončeného uploadu cez boolean atribút <span class="tok attr">is-uploaded</span>.
      Komponent ignoruje <span class="tok attr">progress</span> a zobrazí výsledný stav so zvoleným náhľadom
      (obrázok alebo ikona v slote <span class="tok attr">img</span>).
    </p>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content" style="gap: 1rem">
        <wje-file-upload-item name="lorem-ipsum.png" size="1000000" is-uploaded >
          <wje-img slot="img" src="https://picsum.photos/42/42?i=1"></wje-img>
        </wje-file-upload-item>
        
        <wje-file-upload-item name="lorem-ipsum.png" size="1000000" uploaded="500000" progress="50" lang="sk-sk" is-uploaded>
          <wje-icon slot="img" name="video" size="large"></wje-icon>
        </wje-file-upload-item>
      </div>
    </div>
    
    <!-- IMAGE -->

    <h2>Image</h2>
    <p class="description">
      Jednoduchý variant položky s obrázkovým náhľadom:
      do slotu <span class="tok attr">img</span> je vložený <span class="tok tag">&lt;wje-img&gt;</span>.
      Atribút <span class="tok attr">name</span> určuje názov súboru a <span class="tok attr">size</span> jeho veľkosť.
    </p>
    <div class="playground" style="padding-inline: 1rem;">
      <div class="content">
        <wje-file-upload-item name="lorem-ipsum.png" size="1000000">
          <wje-img slot="img" src="https://picsum.photos/42/42?i=1"></wje-img>
        </wje-file-upload-item>
      </div>
    </div>
  </div>`;

export default class DemoFileUploadItem extends WJElement {
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

customElements.get('demo-file-upload-item') ||
  window.customElements.define('demo-file-upload-item', DemoFileUploadItem);
