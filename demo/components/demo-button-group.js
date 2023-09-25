import { WJElement } from "../../dist/wj-main.js";

const template = document.createElement('template');
template.innerHTML = ``;

export default class DemoButtonGroup extends WJElement {
  constructor() {
    super(template);
  }

  draw(){
    return `<h1>Button Group</h1>
    <div class="container">
      
      <!--  BASIC-->
  
      <h2>Basic</h2>
      <div class="playground">
        <div class="content">
          <wj-button-group>
            <wj-button>Start</wj-button>
            <wj-button>Center</wj-button>
            <wj-button>End</wj-button>
          </wj-button-group>
        </div>
      </div>
  
      <!--  SHAPE -->
  
      <h2>Shape</h2>
      <div class="playground">
        <div class="content">
          <wj-button-group>
            <wj-button round>Start</wj-button>
            <wj-button round>Center</wj-button>
            <wj-button round>End</wj-button>
          </wj-button-group>
        </div>
      </div>
      
      <!-- DROPDOWN -->
  
      <h2>Dropdown</h2>
      <div class="playground">
        <div class="content">
          <wj-button-group label="Example Button Group">
            <wj-button>Button</wj-button>
            <wj-button>Button</wj-button>
            <wj-dropdown placement="bottom-end" offset="5">
              <wj-button slot="trigger" caret>Dropdown</wj-button>
              <wj-menu>
                <wj-menu-item>Item 1</wj-menu-item>
                <wj-menu-item>Item 2</wj-menu-item>
                <wj-menu-item>Item 3</wj-menu-item>
              </wj-menu>
            </wj-dropdown>
          </wj-button-group>
        </div>
      </div>
  
      <!--  ICONS -->
  
      <h2>Icons</h2>
      <div class="playground">
        <div class="content">
          <wj-button-group style="margin-right: 1rem;">
            <wj-tooltip content="Bold">
              <wj-button>
                <wj-icon slot="icon-only" name="bold"></wj-icon>
              </wj-button>
            </wj-tooltip>
            <wj-tooltip content="Italic">
              <wj-button>
                <wj-icon slot="icon-only" name="italic"></wj-icon>
              </wj-button>
            </wj-tooltip>
            <wj-tooltip content="Bold">
              <wj-button>
                <wj-icon slot="icon-only" name="underline"></wj-icon>
              </wj-button>
            </wj-tooltip>
          </wj-button-group>
          <wj-button-group>
            <wj-tooltip content="Align left">
              <wj-button>
                <wj-icon slot="icon-only" name="align-left"></wj-icon>
              </wj-button>
              </wj-tooltip>
            <wj-tooltip content="Align center">
              <wj-button>
                <wj-icon slot="icon-only" name="align-center"></wj-icon>
              </wj-button>
            </wj-tooltip>
            <wj-tooltip content="Align right">
              <wj-button>
                <wj-icon slot="icon-only" name="align-right"></wj-icon>
              </wj-button>
            </wj-tooltip>
            <wj-tooltip content="Align justify">
              <wj-button>
                <wj-icon slot="icon-only" name="align-justify"></wj-icon>
              </wj-button>
            </wj-tooltip>
          </wj-button-group>
        </div>
      </div>
      
      <!-- SPLIT BUTTONS -->
  
      <h2>Split butons</h2>
      <div class="playground">
        <div class="content">
          <wj-button-group>
            <wj-button variant="primary">Save</wj-button>
            <wj-dropdown placement="bottom-end" offset="5">
              <wj-button slot="trigger" variant="primary" caret>
                <wj-visually-hidden>More options</wj-visually-hidden>
              </wj-button>
              <wj-menu>
                <wj-menu-item>Save</wj-menu-item>
                <wj-menu-item>Save as&hellip;</wj-menu-item>
                <wj-menu-item>Save all</wj-menu-item>
              </wj-menu>
            </wj-dropdown>
          </wj-button-group>
        </div>
      </div>
  
      <!-- COLORS -->
  
      <h2>Colors</h2>
      <div class="playground">
        <div class="content" style="display: block;">
          <p>
            <wj-button-group>
              <wj-button>Default</wj-button>
              <wj-button>Default</wj-button>
              <wj-button>Default</wj-button>
            </wj-button-group>
          </p>
          <p>
            <wj-button-group>
              <wj-button color="primary">Primary</wj-button>
              <wj-button color="primary">Primary</wj-button>
              <wj-button color="primary">Primary</wj-button>
            </wj-button-group>
          </p>
          <p>
            <wj-button-group>
              <wj-button color="complete">Complete</wj-button>
              <wj-button color="complete">Complete</wj-button>
              <wj-button color="complete">Complete</wj-button>
            </wj-button-group>
          </p>
          <p>
            <wj-button-group>
              <wj-button color="success">Success</wj-button>
              <wj-button color="success">Success</wj-button>
              <wj-button color="success">Success</wj-button>
            </wj-button-group>
          </p>
          <p>
            <wj-button-group>
              <wj-button color="warning">Warning</wj-button>
              <wj-button color="warning">Warning</wj-button>
              <wj-button color="warning">Warning</wj-button>
            </wj-button-group>
          </p>
          <p>
            <wj-button-group>
              <wj-button color="danger">Danger</wj-button>
              <wj-button color="danger">Danger</wj-button>
              <wj-button color="danger">Danger</wj-button>
            </wj-button-group>
          </p>
          <p>
            <wj-button-group>
              <wj-button color="neutral">Neutral</wj-button>
              <wj-button color="neutral">Neutral</wj-button>
              <wj-button color="neutral">Neutral</wj-button>
            </wj-button-group>
          </p>
        </div>
      </div>
  
      <!-- COLORS - OUTLINE -->
  
      <h2>Colors outline</h2>
      <div class="playground">
        <div class="content" style="display: block;">
          <p>
            <wj-button-group>
              <wj-button fill="outline">Default</wj-button>
              <wj-button fill="outline">Default</wj-button>
              <wj-button fill="outline">Default</wj-button>
            </wj-button-group>
          </p>
          <p>
            <wj-button-group>
              <wj-button color="primary" fill="outline">Primary</wj-button>
              <wj-button color="primary" fill="outline">Primary</wj-button>
              <wj-button color="primary" fill="outline">Primary</wj-button>
            </wj-button-group>
          </p>
          <p>
            <wj-button-group>
              <wj-button color="complete" fill="outline">Complete</wj-button>
              <wj-button color="complete" fill="outline">Complete</wj-button>
              <wj-button color="complete" fill="outline">Complete</wj-button>
            </wj-button-group>
          </p>
          <p>
            <wj-button-group>
              <wj-button color="success" fill="outline">Success</wj-button>
              <wj-button color="success" fill="outline">Success</wj-button>
              <wj-button color="success" fill="outline">Success</wj-button>
            </wj-button-group>
          </p>
          <p>
            <wj-button-group>
              <wj-button color="warning" fill="outline">Warning</wj-button>
              <wj-button color="warning" fill="outline">Warning</wj-button>
              <wj-button color="warning" fill="outline">Warning</wj-button>
            </wj-button-group>
          </p>
          <p>
            <wj-button-group>
              <wj-button color="danger" fill="outline">Danger</wj-button>
              <wj-button color="danger" fill="outline">Danger</wj-button>
              <wj-button color="danger" fill="outline">Danger</wj-button>
            </wj-button-group>
          </p>
          <p>
            <wj-button-group>
              <wj-button color="neutral" fill="outline">Neutral</wj-button>
              <wj-button color="neutral" fill="outline">Neutral</wj-button>
              <wj-button color="neutral" fill="outline">Neutral</wj-button>
            </wj-button-group>
          </p>
        </div>
      </div>
    </div>`;
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-button-group") || window.customElements.define("demo-button-group", DemoButtonGroup);