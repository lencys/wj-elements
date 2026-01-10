import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Thumbnail</h1>
  <div class="container">

    <!-- CIRCLE -->

    <h3>Circle</h3>
    <p class="description">
      Kruhový náhľad pomocou boolean atribútu <span class="tok attr">circle</span> na
      <span class="tok tag">&lt;wje-thumbnail&gt;</span>. Obsahom je bežný
      <span class="tok tag">&lt;img&gt;</span> element.
    </p>
    <div class="playground">
      <div class="content">
        <wje-thumbnail circle>
          <img alt="Silhouette of mountains" src="/assets/img/thumbnail.svg" />
        </wje-thumbnail>
      </div>
    </div>

    <!-- BASIC -->

    <h3>Default</h3>
    <p class="description">
      Základný obdĺžnikový náhľad bez špeciálnych atribútov. Komponent
      <span class="tok tag">&lt;wje-thumbnail&gt;</span> obalí vnorený
      <span class="tok tag">&lt;img&gt;</span> a aplikuje jednotné rozmery a orezanie.
    </p>
    <div class="playground">
      <div class="content">
        <wje-thumbnail>
          <img alt="Silhouette of mountains" src="/assets/img/thumbnail.svg" />
        </wje-thumbnail>
      </div>
    </div>

    <!-- ITEM -->

    <h3>Item</h3>
    <p class="description">
      Použitie mini náhľadu v položke zoznamu: <span class="tok tag">&lt;wje-thumbnail&gt;</span>
      je vložený do slotu <span class="tok attr">start</span> na
      <span class="tok tag">&lt;wje-item&gt;</span> a text je v
      <span class="tok tag">&lt;wje-label&gt;</span>. Vhodné pre zoznamy s ikonou/obrázkom.
    </p>
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

    <!--  CUSTOM -->

    <h3>Custom</h3>
    <p class="description">
      Vlastné rozmery a zaoblenie pomocou CSS premenných na
      <span class="tok tag">&lt;wje-thumbnail&gt;</span>.
      Trieda <span class="tok attr">.example-thumbnail</span> mení
      <span class="tok css">--wje-thumbnail-width</span>,
      <span class="tok css">--wje-thumbnail-height</span> a
      <span class="tok css">--wje-border-radius</span>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-thumbnail class="example-thumbnail">
          <img alt="Silhouette of mountains" src="/assets/img/thumbnail.svg" />
        </wje-thumbnail>

        <style>
          .example-thumbnail {
            --wje-thumbnail-width: 80px !important;
            --wje-thumbnail-height: 80px !important;
            --wje-thumbnail-border-radius: 24px !important;
          }
        </style>
      </div>
    </div>
  </div>`;

export default class DemoThumbnail extends WJElement {
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

customElements.get('demo-thumbnail') || window.customElements.define('demo-thumbnail', DemoThumbnail);
