import { default as WJElement , WjePermissionsApi } from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Accordion</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
    <div class="playground" style="background-color: rgba(0,0,0,.08);">
      <div class="content" style="flex-direction: column;">
        <p></p>
        <wje-button hide>Hide</wje-button>
        <wje-button permission="test">No permission Check</wje-button>
        <wje-button permission="test" permission-check>Premission Check test</wje-button>
        <wje-button permission="test" permission-check hide>Premission Check test Hide</wje-button>
      </div>
    </div>
  </div>`;

export default class DemoPermissions extends WJElement {
  constructor() {
    super(template);

    WjePermissionsApi.permissions = ['test'];
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-permissions') || window.customElements.define('demo-permissions', DemoPermissions);
