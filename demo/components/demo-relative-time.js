import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Relative time</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Default usage</h3>
    <p class="description">
      Základné použitie komponentu <span class="tok tag">&lt;wje-relative-time&gt;</span>, ktorý
      zobrazuje čas relatívne k aktuálnemu momentu (napr. „pred 2 dňami“, „o 5 minút“).
      Atribút <span class="tok attr">date</span> akceptuje UNIX timestamp (v sekundách)
      alebo ISO dátum; jazyk výstupu je možné zmeniť pomocou atribútu
      <span class="tok attr">lang</span>. Neplatná alebo chýbajúca hodnota dátumu
      sa spracuje bezpečne bez chyby v UI.
    </p>
    <div class="playground">
      <div class="content" style="display: block;">
        <b>No date</b>
        <wje-relative-time></wje-relative-time>
        
        <b>Timestamp</b>
        <wje-relative-time date="1704067200"></wje-relative-time>
        
        <b>ISO Date</b>
        <wje-relative-time date="2024-01-01T00:00:00+00:00"></wje-relative-time>
        
        <b>ISO Date - Slovak</b>
        <wje-relative-time date="2024-01-01T00:00:00+00:00" lang="sk-sk"></wje-relative-time>
        
        <b>Invalid Date</b>
        <wje-relative-time date="Invalid Date"></wje-relative-time>
      </div>
    </div>
  </div>`;

export default class DemoRelativeTime extends WJElement {
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

customElements.get('demo-relative-time') || window.customElements.define('demo-relative-time', DemoRelativeTime);
