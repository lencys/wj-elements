import { WJElement, Menu, MenuItem, Popup } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `
  <h1>Nav</h1>
  <div class="container">
    
    <!-- MEGAMENU -->

    <h2>Megamenu</h2>
    <div class="playground" style="align-items: start;">
      <div class="content" style="display: block; margin: 0; width: 100%;">
        <wj-menu id="custom-2" variant="megamenu" active>
          <wj-menu-item>
            Home
            <wj-icon slot="start" name="home"></wj-icon>
          </wj-menu-item>
          <wj-menu-item offset="5" manual>
            Navigation One
            <wj-icon slot="start" name="heart"></wj-icon>
            <wj-menu slot="submenu" offset="5" placement="bottom-start">
              <wj-menu-item>Menu item 1</wj-menu-item>
              <wj-menu-item>
                Menu item 2
                <wj-menu slot="submenu" variant="context" offset="10">
                  <wj-menu-item>Menu item 2.1</wj-menu-item>
                  <wj-menu-item>Menu item 2.2</wj-menu-item>
                  <wj-menu-item>Menu item 2.3</wj-menu-item>
                </wj-menu >
              </wj-menu-item>
              <wj-menu-item offset="10">Menu item 3</wj-menu-item>
            </wj-menu>
          </wj-menu-item>
          <wj-menu-item>
            Navigation Two
            <wj-icon slot="start" name="map-pin"></wj-icon>
          </wj-menu-item>
          <wj-menu-item>
            <wj-icon slot="start" name="settings"></wj-icon>
            Navigation Three
          </wj-menu-item>
        </wj-menu> 
        
        <style>
          #custom-2 {
            --wj-menu-border-width: 0 0 1px 0;
            --wj-menu-border-radius: 0;
            max-width: 100%;
            padding: 0;
          }
          
          #custom-2 wj-menu-item::part(native) {
            --wj-menu-item-padding-top: .75rem;
            --wj-menu-item-padding-bottom: .75rem;
          }
        </style>
      </div>
    </div>
    
    <!-- COLLAPSE -->

    <h2>Collapse</h2>
    <div class="playground" style="align-items: start;">
      <div class="content" style="display: block; margin: 0 auto;">
        <wj-menu id="custom" variant="nav" active collapse>
          <wj-menu-item offset="10">
            Home
            <wj-icon slot="start" name="home"></wj-icon>
          </wj-menu-item>
          <wj-menu-item offset="10">
            Navigation One
            <wj-icon slot="start" name="heart"></wj-icon>
            <wj-menu slot="submenu" variant="context" offset="10">
              <wj-menu-item>Menu item 1</wj-menu-item>
              <wj-menu-item>
                Menu item 2
                <wj-menu slot="submenu" variant="context">
                  <wj-menu-item>Menu item 2.1</wj-menu-item>
                  <wj-menu-item>Menu item 2.2</wj-menu-item>
                  <wj-menu-item>Menu item 2.3</wj-menu-item>
                </wj-menu >
              </wj-menu-item>
              <wj-menu-item offset="10">Menu item 3</wj-menu-item>
            </wj-menu>
          </wj-menu-item>
          <wj-menu-item offset="10">
            Navigation Two
            <wj-icon slot="start" name="map-pin"></wj-icon>
          </wj-menu-item>
          <wj-menu-item offset="10">
            Navigation Three
            <wj-icon slot="start" name="settings"></wj-icon>
          </wj-menu-item>
        </wj-menu> 
   
        <style>
          #custom {
            --wj-menu-border-width: 0 1px 0 0;
            --wj-menu-border-radius: 0;
            max-width: 240px; 
          }
          
          #custom wj-menu-item::part(native) {
            --wj-menu-item-padding-top: .75rem;
            --wj-menu-item-padding-bottom: .75rem;
          }
        </style>
      </div>
    </div>
    
    <!-- EXPAND -->

    <h2>Expand</h2>
    <div class="playground" style="align-items: start;">
      <div class="content" style="display: block; margin: 0 auto;">
        <wj-menu id="custom-1" variant="nav" active>
          <wj-menu-item offset="10">
            Home
            <wj-icon slot="start" name="home"></wj-icon>
          </wj-menu-item>
          <wj-menu-item offset="10">
            Navigation One
            <wj-icon slot="start" name="heart"></wj-icon>
            <wj-menu slot="submenu" variant="nav">
              <wj-menu-item offset="10">Menu item 1</wj-menu-item>
              <wj-menu-item offset="10">
                Menu item 2
                <wj-menu slot="submenu" variant="nav">
                  <wj-menu-item offset="10">Menu item 2.1</wj-menu-item>
                  <wj-menu-item offset="10">Menu item 2.2</wj-menu-item>
                  <wj-menu-item offset="10">Menu item 2.3</wj-menu-item>
                </wj-menu >
              </wj-menu-item>
              <wj-menu-item offset="10">Menu item 3</wj-menu-item>
            </wj-menu>
          </wj-menu-item>
          <wj-menu-item offset="10">
            Navigation Two
            <wj-icon slot="start" name="map-pin"></wj-icon>
          </wj-menu-item>
          <wj-menu-item offset="10">
            <wj-icon slot="start" name="settings"></wj-icon>
            Navigation Three
          </wj-menu-item>
        </wj-menu> 
        
        <style>
          #custom-1 {
            --wj-menu-border-width: 0 1px 0 0;
            --wj-menu-border-radius: 0;
            max-width: 240px; 
          }
          
          #custom-1 wj-menu-item::part(native) {
            --wj-menu-item-padding-top: .75rem;
            --wj-menu-item-padding-bottom: .75rem;
          }
        </style>
      </div>
    </div>
  </div>`;

export default class DemoNav extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-nav") || window.customElements.define("demo-nav", DemoNav);