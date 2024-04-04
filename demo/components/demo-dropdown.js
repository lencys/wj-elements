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
    
    <!-- HOVER -->

    <h2>Hover</h2>
    <div class="playground">
      <div class="content">
          <wje-dropdown id="custom-dropdown" placement="right-start" trigger="hover" offset="5">
            <wje-avatar label="Petr Rahman" initials slot="trigger"></wje-avatar>
            <wje-menu class="custom-menu" active>
              <h5 style="margin: 0;">Petr Rahman</h5>
              <p class="hint-text">Frontend Developer</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
            </wje-menu>
          </wje-dropdown>
          <style>
            .custom-menu {
              width: 200px;
              padding: 1rem 1rem 0;
            }
          </style>
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