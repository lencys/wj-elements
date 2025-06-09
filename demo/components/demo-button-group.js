import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    wje-button {
      margin: 0;
    }
  </style>
  <h1>Button Group</h1>
  <div class="container">
    
    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-button-group active="2">
          <wje-button>Start</wje-button>
          <wje-button>Center</wje-button>
          <wje-button>End</wje-button>
        </wje-button-group>
      </div>
    </div>

    <!--  SHAPE -->

    <h2>Shape</h2>
    <div class="playground">
      <div class="content">
        <wje-button-group active="1" round>
          <wje-button>Start</wje-button>
          <wje-button>Center</wje-button>
          <wje-button>End</wje-button>
        </wje-button-group>
      </div>
    </div>
    
    <!-- DROPDOWN -->

    <h2>Dropdown</h2>
    <div class="playground">
      <div class="content">
        <wje-button-group>
          <wje-button>Button</wje-button>
          <wje-button>Button</wje-button>
          <wje-dropdown placement="bottom-end" offset="5">
            <wje-button slot="trigger" caret>Dropdown</wje-button>
            <wje-menu variant="context">
              <wje-menu-item>Item 1</wje-menu-item>
              <wje-menu-item>Item 2</wje-menu-item>
              <wje-menu-item>Item 3</wje-menu-item>
            </wje-menu>
          </wje-dropdown>
        </wje-button-group>
      </div>
    </div>

    <!--  ICONS -->

    <h2>Icons</h2>
    <div class="playground">
      <div class="content">
        <wje-button-group style="margin-right: 1rem;">
          <wje-button tooltip="Bold">
            <wje-icon slot="icon-only" name="bold"></wje-icon>
          </wje-button>
          <wje-button tooltip="Italic">
            <wje-icon slot="icon-only" name="italic"></wje-icon>
          </wje-button>
          <wje-button tooltip="Underline">
            <wje-icon slot="icon-only" name="underline"></wje-icon>
          </wje-button>
        </wje-button-group>
        <wje-button-group>
          <wje-button tooltip="Align left">
            <wje-icon slot="icon-only" name="align-left"></wje-icon>
          </wje-button>
          <wje-button tooltip="Align center">
            <wje-icon slot="icon-only" name="align-center"></wje-icon>
          </wje-button>
          <wje-button tooltip="Align right">
            <wje-icon slot="icon-only" name="align-right"></wje-icon>
          </wje-button>
          <wje-button tooltip="Align justify">
            <wje-icon slot="icon-only" name="align-justified"></wje-icon>
          </wje-button>
        </wje-button-group>
      </div>
    </div>
    
    <!-- SPLIT BUTTONS -->

    <h2>Split butons</h2>
    <div class="playground">
      <div class="content">
        <wje-button-group>
          <wje-button>Save</wje-button>
          <wje-dropdown placement="bottom-end" offset="5">
            <wje-button slot="trigger" only-caret>
              <wje-visually-hidden>More options</wje-visually-hidden>
            </wje-button>
            <wje-menu variant="context">
              <wje-menu-item>Save</wje-menu-item>
              <wje-menu-item>Save as&hellip;</wje-menu-item>
              <wje-menu-item>Save all</wje-menu-item>
            </wje-menu>
          </wje-dropdown>
        </wje-button-group>
      </div>
    </div>

    <!-- COLORS -->

    <h2>Colors</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <p>
          <wje-button-group color="primary" active="1">
            <wje-button>Primary</wje-button>
            <wje-button>Primary</wje-button>
            <wje-button>Primary</wje-button>
          </wje-button-group>
        </p>
        <p>
          <wje-button-group color="complete" active="1">
            <wje-button>Complete</wje-button>
            <wje-button>Complete</wje-button>
            <wje-button>Complete</wje-button>
          </wje-button-group>
        </p>
        <p>
          <wje-button-group color="success" active="1">
            <wje-button>Success</wje-button>
            <wje-button>Success</wje-button>
            <wje-button>Success</wje-button>
          </wje-button-group>
        </p>
        <p>
          <wje-button-group color="warning" active="1">
            <wje-button>Warning</wje-button>
            <wje-button>Warning</wje-button>
            <wje-button>Warning</wje-button>
          </wje-button-group>
        </p>
        <p>
          <wje-button-group color="danger" active="1">
            <wje-button>Danger</wje-button>
            <wje-button>Danger</wje-button>
            <wje-button>Danger</wje-button>
          </wje-button-group>
        </p>
      </div>
    </div>
    
    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <wje-button-group id="custom" active="1">
          <wje-button>Start</wje-button>
          <wje-button>Center</wje-button>
          <wje-button>End</wje-button>
        </wje-button-group>
        <style>
          #custom {
            --wje-button-border-radius: var(--wje-border-radius-large);
            --wje-button-group-border-radius: var(--wje-border-radius-large);
          }
        </style>
      </div>
    </div>
  </div>`;

export default class DemoButtonGroup extends WJElement {
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

customElements.get('demo-button-group') || window.customElements.define('demo-button-group', DemoButtonGroup);
