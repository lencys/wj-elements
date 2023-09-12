import { WJElement, Menu, MenuItem, Popup } from "../../website/static/wj-elements/wj-main.js";

const template = document.createElement('template');

template.innerHTML = `
  <h1>Menu</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wj-menu style="max-width: 200px;">
          <wj-menu-item>
            Menu item
            <wj-icon slot="start" name="house"></wj-icon>
          </wj-menu-item>
          <wj-menu-item value="redo">
            Menu item
            <wj-icon slot="end" name="heart"></wj-icon>
          </wj-menu-item>
          <wj-divider style="--wj-divider-spacing: .5rem;"></wj-divider>
          <wj-menu-item value="cut">Menu item</wj-menu-item>
          <wj-menu-item value="copy">Menu item</wj-menu-item>
          <wj-menu-item value="paste">Menu item</wj-menu-item>
          <wj-divider style="--wj-divider-spacing: .5rem;"></wj-divider>
          <wj-menu-item>
            Menu item
            <wj-menu slot="submenu">
              <wj-menu-item value="find">Menu item</wj-menu-item>
              <wj-menu-item value="find-previous">
                Menu item
                <wj-menu slot="submenu">
                  <wj-menu-item value="find">Menu item</wj-menu-item>
                  <wj-menu-item value="find-previous">Menu item</wj-menu-item>
                  <wj-menu-item value="find-next">Menu item</wj-menu-item>
                </wj-menu>
              </wj-menu-item>
              <wj-menu-item value="find-next">Menu item</wj-menu-item>
            </wj-menu>
          </wj-menu-item>
          <wj-menu-item id="transformations">
            Menu item
            <wj-menu slot="submenu">
              <wj-menu-item value="uppercase">Menu item</wj-menu-item>
              <wj-menu-item value="lowercase">Menu item</wj-menu-item>
              <wj-menu-item value="capitalize">Menu item</wj-menu-item>
            </wj-menu>
          </wj-menu-item>
        </wj-menu>    
      </div>
    </div>
    
    <!-- INSET -->

    <h2>Inset</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wj-menu style="max-width: 200px; --wj-menu-padding-inline: 1rem;">
          <wj-menu-item>
            Menu item
            <wj-icon slot="start" name="house"></wj-icon>
          </wj-menu-item>
          <wj-menu-item value="redo">
            Menu item
            <wj-icon slot="end" name="heart"></wj-icon>
          </wj-menu-item>
          <wj-divider style="--wj-divider-spacing: .5rem;"></wj-divider>
          <wj-menu-item value="cut">Menu item</wj-menu-item>
          <wj-menu-item value="copy" checked>Menu item</wj-menu-item>
          <wj-menu-item value="paste">Menu item</wj-menu-item>
          <wj-divider style="--wj-divider-spacing: .5rem;"></wj-divider>
          <wj-menu-item>
            Menu item
            <wj-menu slot="submenu">
              <wj-menu-item value="find">Menu item</wj-menu-item>
              <wj-menu-item value="find-previous">
                Menu item
                <wj-menu slot="submenu">
                  <wj-menu-item value="find">Menu item</wj-menu-item>
                  <wj-menu-item value="find-previous">Menu item</wj-menu-item>
                  <wj-menu-item value="find-next">Menu item</wj-menu-item>
                </wj-menu>
              </wj-menu-item>
              <wj-menu-item value="find-next">Menu item</wj-menu-item>
            </wj-menu>
          </wj-menu-item>
          <wj-menu-item id="transformations">
            Menu item
            <wj-menu slot="submenu">
              <wj-menu-item value="uppercase">Menu item</wj-menu-item>
              <wj-menu-item value="lowercase">Menu item</wj-menu-item>
              <wj-menu-item value="capitalize">Menu item</wj-menu-item>
            </wj-menu>
          </wj-menu-item>
        </wj-menu>    
      </div>
    </div>
  </div>`;

export default class DemoMenu extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-menu") || window.customElements.define("demo-menu", DemoMenu);