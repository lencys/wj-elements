import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `<h1>Icon Picker</h1>
  <div class="container">
    
    <!-- BASIC -->

    <h2>Standalone</h2>
    <p class="description">
      Samostatné použitie <span class="tok tag">&lt;wje-icon-picker&gt;</span> bez obalu.
      Komponent poskytuje UI na výber ikony a emituje event
      <span class="tok event">wje-icon-picker:select</span> s detailom vybranej ikony.
    </p>
    <div class="playground">
      <div class="content">
        <wje-icon-picker></wje-icon-picker>
      </div>
    </div>
    
    <!-- DROPDOWN -->

    <h2>Dropdown</h2>
    <p class="description">
      Použitie <span class="tok tag">&lt;wje-icon-picker&gt;</span> v kombinácii s
      <span class="tok tag">&lt;wje-dropdown&gt;</span>. Picker je obsah dropdownu,
      trigger je vlastný element v slote <span class="tok attr">trigger</span>.
      Po výbere ikony sa v <span class="tok method">afterDraw()</span> odchytí event
      <span class="tok event">wje-icon-picker:select</span> a vybraná ikona sa
      dynamicky vloží do trigger elementu.
      Atribúty <span class="tok attr">icon</span> a <span class="tok attr">type="filled"</span> určujú
      predvolenú ikonu a jej štýl (napr. <em>outlined</em> vs. <em>filled</em>) pri inicializácii pickeru.
    </p>
    <div class="playground">
      <div class="content">
        <wje-dropdown label="Start" placement="bottom-start" offset="5" collapsible>
          <div class="icon" slot="trigger"></div>
          <wje-icon-picker id="example" icon="ad-circle" type="filled"></wje-icon-picker>
        </wje-dropdown>
        <style>
          .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: var(--wje-border-radius-circle);
            border: 1px solid var(--wje-border-color);
          }
        </style>
      </div>
    </div>
  </div>`;

export default class DemoIconPicker extends WJElement {
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

    this.querySelector('#example').addEventListener('wje-icon-picker:select', (e) => {
      let iconContainer = this.querySelector('.icon');
      iconContainer.innerHTML = '';
      iconContainer.append(e.detail.icon);
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-icon-picker') || window.customElements.define('demo-icon-picker', DemoIconPicker);