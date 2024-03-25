import WJElement from "../../dist/wje-element.js";

const template = document.createElement('template');

template.innerHTML = `
  <h1>Dropdown</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <p style="overflow: hidden; height: 50px;">
          <wje-dropdown label="Start" placement="bottom-start" offset="5">
            <wje-button size="large" slot="trigger" stop-propagation="true" caret>Large</wje-button>
            <wje-menu variant="context">
              <wje-menu-item>
                <wje-icon name="plane" slot="start"></wje-icon>
                <wje-label>Menu item</wje-label>
              </wje-menu-item>
              <wje-menu-item>
                <wje-icon name="book" slot="start"></wje-icon>
                <wje-label>Menu item</wje-label>
              </wje-menu-item>
              <wje-menu-item>
                <wje-icon name="music" slot="start"></wje-icon>
                <wje-label>Menu item</wje-label>
              </wje-menu-item>
              <wje-menu-item>
                <wje-icon name="video" slot="start"></wje-icon>
                <wje-label>Menu item</wje-label>
              </wje-menu-item>
            </wje-menu>
          </wje-dropdown>
        </p>
      </div>
    </div>
    
    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <p style="overflow: hidden; height: 50px;">
          <wje-dropdown label="Start" placement="bottom-start" offset="5">
            <wje-button size="large" slot="trigger" stop-propagation="true" caret>Large</wje-button>
            <wje-menu variant="context">
              <wje-menu-item>
                <wje-icon name="plane" slot="start"></wje-icon>
                <wje-label>Menu item</wje-label>
              </wje-menu-item>
              <wje-menu-item>
                <wje-icon name="book" slot="start"></wje-icon>
                <wje-label>Menu item</wje-label>
              </wje-menu-item>
              <wje-menu-item>
                <wje-icon name="music" slot="start"></wje-icon>
                <wje-label>Menu item</wje-label>
              </wje-menu-item>
              <wje-menu-item>
                <wje-icon name="video" slot="start"></wje-icon>
                <wje-label>Menu item</wje-label>
              </wje-menu-item>
            </wje-menu>
          </wje-dropdown>
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