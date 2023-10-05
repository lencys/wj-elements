import { WJElement, Menu, MenuItem, Popup } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `
  <h1>Menu</h1>
  <div class="container">

    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wj-menu active style="max-width: 200px;">
          <wj-menu-item>
            Menu item
            <wj-icon slot="start" name="house"></wj-icon>
          </wj-menu-item>
          <wj-menu-item id="testicek" @wj-click="openModalFn">
            Menu item
            <wj-icon slot="end" name="heart"></wj-icon>
          </wj-menu-item>
          <wj-divider style="--wj-divider-spacing: .5rem;"></wj-divider>
          <wj-menu-item>Menu item</wj-menu-item>
          <wj-menu-item>Menu item</wj-menu-item>
          <wj-menu-item>Menu item</wj-menu-item>
          <wj-divider style="--wj-divider-spacing: .5rem;"></wj-divider>
          <wj-menu-label>Next menu</wj-menu-label>
          <wj-menu-item>
            Menu item
            <wj-menu slot="submenu">
              <wj-menu-item>Menu item</wj-menu-item>
              <wj-menu-item>
                Menu item
                <wj-menu slot="submenu">
                  <wj-menu-item>Menu item</wj-menu-item>
                  <wj-menu-item>Menu item</wj-menu-item>
                  <wj-menu-item>Menu item</wj-menu-item>
                </wj-menu>
              </wj-menu-item>
              <wj-menu-item>Menu item</wj-menu-item>
            </wj-menu>
          </wj-menu-item>
          <wj-menu-item id="transformations">
            Menu item
            <wj-menu slot="submenu">
              <wj-menu-item>Menu item</wj-menu-item>
              <wj-menu-item>Menu item</wj-menu-item>
              <wj-menu-item>Menu item</wj-menu-item>
            </wj-menu>
          </wj-menu-item>
        </wj-menu>    
      </div>
    </div>
    
    <!-- INSET -->

    <h2>Inset</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wj-menu active style="max-width: 200px; --wj-menu-padding-inline: 1rem;">
          <wj-menu-item>
            Menu item
            <wj-icon slot="start" name="house"></wj-icon>
          </wj-menu-item>
          <wj-menu-item>
            Menu item
            <wj-icon slot="end" name="heart"></wj-icon>
          </wj-menu-item>
          <wj-divider style="--wj-divider-spacing: .5rem;"></wj-divider>
          <wj-menu-item>Menu item</wj-menu-item>
          <wj-menu-item checked>Menu item</wj-menu-item>
          <wj-menu-item>Menu item</wj-menu-item>
          <wj-divider style="--wj-divider-spacing: .5rem;"></wj-divider>
          <wj-menu-item>
            Menu item
            <wj-menu slot="submenu">
              <wj-menu-item>Menu item</wj-menu-item>
              <wj-menu-item>
                Menu item
                <wj-menu slot="submenu">
                  <wj-menu-item>Menu item</wj-menu-item>
                  <wj-menu-item>Menu item</wj-menu-item>
                  <wj-menu-item>Menu item</wj-menu-item>
                </wj-menu>
              </wj-menu-item>
              <wj-menu-item>Menu item</wj-menu-item>
            </wj-menu>
          </wj-menu-item>
          <wj-menu-item id="transformations">
            Menu item
            <wj-menu slot="submenu">
              <wj-menu-item>Menu item</wj-menu-item>
              <wj-menu-item>Menu item</wj-menu-item>
              <wj-menu-item>Menu item</wj-menu-item>
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

  afterDraw(){
    /// TODO process vsetky @wj-event


    
    this.context.addEventListener('wj:jozefko',(e)=>{
      console.log(e);
        // otvorenie modalka
    })
  }


  openModalFn(){
    debugger
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-menu") || window.customElements.define("demo-menu", DemoMenu);