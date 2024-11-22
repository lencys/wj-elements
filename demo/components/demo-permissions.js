import { default as WJElement , WjePermissionsApi } from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Permissions</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
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

    WjePermissionsApi.permissions = ['test'];
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
