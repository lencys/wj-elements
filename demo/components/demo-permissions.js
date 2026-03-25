import WJElement, { Permissions } from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Permissions</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Permission checks</h3>
    <p class="description">
      Ukážka práce s oprávneniami pomocou atribútov <span class="tok attr">permission</span>,
      <span class="tok attr">permission-check</span> a <span class="tok attr">no-show</span>
      na komponentoch ako <span class="tok tag">&lt;wje-button&gt;</span>.
      API <span class="tok tag">Permissions</span> definuje dostupné oprávnenia
      (tu nastavené v <span class="tok method">constructor()</span>) a komponent podľa nich
      automaticky zobrazí, skryje alebo deaktivuje prvky bez ďalšieho JavaScriptu.
    </p>
    <div class="playground">
      <div class="content">
        <wje-button no-show>No Show</wje-button>
        <wje-button permission="test">No permission Check</wje-button>
        <wje-button permission="test" permission-check>Premission Check test</wje-button>
        <wje-button permission="test" permission-check no-show>Premission Check test No Show</wje-button>
      </div>
    </div>
  </div>`;

export default class DemoPermissions extends WJElement {
  constructor() {
    super();

    Permissions.permissions = ['test'];
  }

  /**
   * Returns the template for the component.
   * @static
   * @returns {HTMLElement} The template element
   */
  static get customTemplate() {
    return template;
  }

  beforeDraw() {
    this.myTemplate = this.template.content.querySelector('.content').innerHTML;
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();

    codeSnippet.generateSnippet(this.context, this.myTemplate);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-permissions') || window.customElements.define('demo-permissions', DemoPermissions);
