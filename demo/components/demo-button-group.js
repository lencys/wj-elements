import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "../assets/js/code-snippet-builder.js";

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
        <wje-button-group>
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
        <wje-button-group>
          <wje-button round>Start</wje-button>
          <wje-button round>Center</wje-button>
          <wje-button round>End</wje-button>
        </wje-button-group>
      </div>
    </div>
    
    <!-- DROPDOWN -->

    <h2>Dropdown</h2>
    <div class="playground">
      <div class="content">
        <wje-button-group label="Example Button Group">
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
          <wje-tooltip content="Bold">
            <wje-button>
              <wje-icon slot="icon-only" name="bold"></wje-icon>
            </wje-button>
          </wje-tooltip>
          <wje-tooltip content="Italic">
            <wje-button>
              <wje-icon slot="icon-only" name="italic"></wje-icon>
            </wje-button>
          </wje-tooltip>
          <wje-tooltip content="Bold">
            <wje-button>
              <wje-icon slot="icon-only" name="underline"></wje-icon>
            </wje-button>
          </wje-tooltip>
        </wje-button-group>
        <wje-button-group>
          <wje-tooltip content="Align left">
            <wje-button>
              <wje-icon slot="icon-only" name="align-left"></wje-icon>
            </wje-button>
            </wje-tooltip>
          <wje-tooltip content="Align center">
            <wje-button>
              <wje-icon slot="icon-only" name="align-center"></wje-icon>
            </wje-button>
          </wje-tooltip>
          <wje-tooltip content="Align right">
            <wje-button>
              <wje-icon slot="icon-only" name="align-right"></wje-icon>
            </wje-button>
          </wje-tooltip>
          <wje-tooltip content="Align justify">
            <wje-button>
              <wje-icon slot="icon-only" name="align-justified"></wje-icon>
            </wje-button>
          </wje-tooltip>
        </wje-button-group>
      </div>
    </div>
    
    <!-- SPLIT BUTTONS -->

    <h2>Split butons</h2>
    <div class="playground">
      <div class="content">
        <wje-button-group>
          <wje-button variant="primary">Save</wje-button>
          <wje-dropdown placement="bottom-end" offset="5">
            <wje-button slot="trigger" variant="primary" only-caret>
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
          <wje-button-group>
            <wje-button>Default</wje-button>
            <wje-button>Default</wje-button>
            <wje-button>Default</wje-button>
          </wje-button-group>
        </p>
        <p>
          <wje-button-group>
            <wje-button color="primary">Primary</wje-button>
            <wje-button color="primary">Primary</wje-button>
            <wje-button color="primary">Primary</wje-button>
          </wje-button-group>
        </p>
        <p>
          <wje-button-group>
            <wje-button color="complete">Complete</wje-button>
            <wje-button color="complete">Complete</wje-button>
            <wje-button color="complete">Complete</wje-button>
          </wje-button-group>
        </p>
        <p>
          <wje-button-group>
            <wje-button color="success">Success</wje-button>
            <wje-button color="success">Success</wje-button>
            <wje-button color="success">Success</wje-button>
          </wje-button-group>
        </p>
        <p>
          <wje-button-group>
            <wje-button color="warning">Warning</wje-button>
            <wje-button color="warning">Warning</wje-button>
            <wje-button color="warning">Warning</wje-button>
          </wje-button-group>
        </p>
        <p>
          <wje-button-group>
            <wje-button color="danger">Danger</wje-button>
            <wje-button color="danger">Danger</wje-button>
            <wje-button color="danger">Danger</wje-button>
          </wje-button-group>
        </p>
        <p>
          <wje-button-group>
            <wje-button color="neutral">Neutral</wje-button>
            <wje-button color="neutral">Neutral</wje-button>
            <wje-button color="neutral">Neutral</wje-button>
          </wje-button-group>
        </p>
      </div>
    </div>

    <!-- COLORS - OUTLINE -->

    <h2>Colors outline</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <p>
          <wje-button-group>
            <wje-button fill="outline">Default</wje-button>
            <wje-button fill="outline">Default</wje-button>
            <wje-button fill="outline">Default</wje-button>
          </wje-button-group>
        </p>
        <p>
          <wje-button-group>
            <wje-button color="primary" fill="outline">Primary</wje-button>
            <wje-button color="primary" fill="outline">Primary</wje-button>
            <wje-button color="primary" fill="outline">Primary</wje-button>
          </wje-button-group>
        </p>
        <p>
          <wje-button-group>
            <wje-button color="complete" fill="outline">Complete</wje-button>
            <wje-button color="complete" fill="outline">Complete</wje-button>
            <wje-button color="complete" fill="outline">Complete</wje-button>
          </wje-button-group>
        </p>
        <p>
          <wje-button-group>
            <wje-button color="success" fill="outline">Success</wje-button>
            <wje-button color="success" fill="outline">Success</wje-button>
            <wje-button color="success" fill="outline">Success</wje-button>
          </wje-button-group>
        </p>
        <p>
          <wje-button-group>
            <wje-button color="warning" fill="outline">Warning</wje-button>
            <wje-button color="warning" fill="outline">Warning</wje-button>
            <wje-button color="warning" fill="outline">Warning</wje-button>
          </wje-button-group>
        </p>
        <p>
          <wje-button-group>
            <wje-button color="danger" fill="outline">Danger</wje-button>
            <wje-button color="danger" fill="outline">Danger</wje-button>
            <wje-button color="danger" fill="outline">Danger</wje-button>
          </wje-button-group>
        </p>
        <p>
          <wje-button-group>
            <wje-button color="neutral" fill="outline">Neutral</wje-button>
            <wje-button color="neutral" fill="outline">Neutral</wje-button>
            <wje-button color="neutral" fill="outline">Neutral</wje-button>
          </wje-button-group>
        </p>
      </div>
    </div>
  </div>`;

export default class DemoButtonGroup extends WJElement {
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

customElements.get("demo-button-group") || window.customElements.define("demo-button-group", DemoButtonGroup);