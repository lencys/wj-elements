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
            Undo
            <wj-icon slot="start" name="house"></wj-icon>
          </wj-menu-item>
          <wj-menu-item value="redo">
            Redo
            <wj-icon slot="end" name="heart"></wj-icon>
          </wj-menu-item>
          <wj-divider style="--wj-divider-spacing: .5rem;"></wj-divider>
          <wj-menu-item value="cut">Cut</wj-menu-item>
          <wj-menu-item value="copy">Copy</wj-menu-item>
          <wj-menu-item value="paste">Paste</wj-menu-item>
          <wj-divider style="--wj-divider-spacing: .5rem;"></wj-divider>
          <wj-menu-item>
            Find
            <wj-menu slot="submenu">
              <wj-menu-item value="find">Find…</wj-menu-item>
              <wj-menu-item value="find-previous">
                Find Next
                <wj-menu slot="submenu">
                  <wj-menu-item value="find">Find…</wj-menu-item>
                  <wj-menu-item value="find-previous">Find Next</wj-menu-item>
                  <wj-menu-item value="find-next">Find Previous</wj-menu-item>
                </wj-menu>
              </wj-menu-item>
              <wj-menu-item value="find-next">Find Previous</wj-menu-item>
            </wj-menu>
          </wj-menu-item>
          <wj-menu-item id="transformations">
            Transformations
            <wj-menu slot="submenu">
              <wj-menu-item value="uppercase">Make uppercase</wj-menu-item>
              <wj-menu-item value="lowercase">Make lowercase</wj-menu-item>
              <wj-menu-item value="capitalize">Capitalize</wj-menu-item>
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