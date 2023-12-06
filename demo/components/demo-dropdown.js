import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `
  <h1>Dropdown</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <p style="overflow: hidden; height: 50px;">
          <wj-dropdown label="Start" placement="bottom-start" offset="5">
            <wj-button size="large" slot="trigger" stop-propagation="true" caret>Large</wj-button>
            <wj-menu variant="context">
              <wj-menu-item>
                <wj-icon name="plane" slot="start"></wj-icon>
                <wj-label>Menu item</wj-label>
              </wj-menu-item>
              <wj-menu-item>
                <wj-icon name="book" slot="start"></wj-icon>
                <wj-label>Menu item</wj-label>
              </wj-menu-item>
              <wj-menu-item>
                <wj-icon name="music" slot="start"></wj-icon>
                <wj-label>Menu item</wj-label>
              </wj-menu-item>
              <wj-menu-item>
                <wj-icon name="video" slot="start"></wj-icon>
                <wj-label>Menu item</wj-label>
              </wj-menu-item>
            </wj-menu>
          </wj-dropdown>
        </p>
      </div>
    </div>
    
    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <p style="overflow: hidden; height: 50px;">
          <wj-dropdown label="Start" placement="bottom-start" offset="5">
            <wj-button size="large" slot="trigger" stop-propagation="true" caret>Large</wj-button>
            <wj-menu variant="context">
              <wj-menu-item>
                <wj-icon name="plane" slot="start"></wj-icon>
                <wj-label>Menu item</wj-label>
              </wj-menu-item>
              <wj-menu-item>
                <wj-icon name="book" slot="start"></wj-icon>
                <wj-label>Menu item</wj-label>
              </wj-menu-item>
              <wj-menu-item>
                <wj-icon name="music" slot="start"></wj-icon>
                <wj-label>Menu item</wj-label>
              </wj-menu-item>
              <wj-menu-item>
                <wj-icon name="video" slot="start"></wj-icon>
                <wj-label>Menu item</wj-label>
              </wj-menu-item>
            </wj-menu>
          </wj-dropdown>
        </p>
      </div>
    </div>
  </div>`;

export default class DemoDropdown extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-dropdown") || window.customElements.define("demo-dropdown", DemoDropdown);