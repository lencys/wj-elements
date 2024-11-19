import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Menu</h1>
  <div class="container">

    <!-- BASIC -->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-menu active style="max-width: 200px;">
          <wje-menu-item>
            Menu item
            <wje-icon slot="start" name="home"></wje-icon>
          </wje-menu-item>
          <wje-menu-item>
            Menu item
            <wje-icon slot="start" name="check"></wje-icon>
            <wje-icon slot="end" name="heart"></wje-icon>
          </wje-menu-item>
          <wje-divider style="--wje-divider-spacing: .5rem;"></wje-divider>
          <wje-menu-item>
            Menu item
            <wje-icon slot="start" name="point"></wje-icon>
          </wje-menu-item>
          <wje-menu-item>Menu item</wje-menu-item>
          <wje-menu-item>Menu item</wje-menu-item>
          <wje-divider style="--wje-divider-spacing: .5rem;"></wje-divider>
          <wje-menu-label>Next menu</wje-menu-label>
          <wje-menu-item>
            Menu item
            <wje-menu slot="submenu">
              <wje-menu-item>Menu item</wje-menu-item>
              <wje-menu-item>
                Menu item
                <wje-menu slot="submenu">
                  <wje-menu-item>Menu item</wje-menu-item>
                  <wje-menu-item>Menu item</wje-menu-item>
                  <wje-menu-item>Menu item</wje-menu-item>
                </wje-menu>
              </wje-menu-item>
              <wje-menu-item>Menu item</wje-menu-item>
            </wje-menu>
          </wje-menu-item>
          <wje-menu-item>
            Menu item
            <wje-menu slot="submenu">
              <wje-menu-item>Menu item</wje-menu-item>
              <wje-menu-item>
                Menu item
                <wje-menu slot="submenu">
                  <wje-menu-item>Menu item</wje-menu-item>
                  <wje-menu-item>Menu item</wje-menu-item>
                  <wje-menu-item>Menu item</wje-menu-item>
                </wje-menu>
              </wje-menu-item>
              <wje-menu-item>Menu item</wje-menu-item>
            </wje-menu>
          </wje-menu-item>
        </wje-menu>    
      </div>
    </div>

    <!-- INSET -->

    <h2>Inset</h2>
    <div class="playground">
      <div class="content" style="display: block;">
        <wje-menu active style="max-width: 200px; --wje-menu-padding-inline: 1rem;">
          <wje-menu-item>
            Menu item
            <wje-icon slot="start" name="home"></wje-icon>
          </wje-menu-item>
          <wje-menu-item>
            Menu item
            <wje-icon slot="end" name="heart"></wje-icon>
          </wje-menu-item>
          <wje-divider style="--wje-divider-spacing: .5rem;"></wje-divider>
          <wje-menu-item>Menu item</wje-menu-item>
          <wje-menu-item checked>Menu item</wje-menu-item>
          <wje-menu-item>Menu item</wje-menu-item>
          <wje-divider style="--wje-divider-spacing: .5rem;"></wje-divider>
          <wje-menu-item>
            Menu item
            <wje-menu slot="submenu">
              <wje-menu-item>Menu item</wje-menu-item>
              <wje-menu-item>
                Menu item
                <wje-menu slot="submenu">
                  <wje-menu-item>Menu item</wje-menu-item>
                  <wje-menu-item>Menu item</wje-menu-item>
                  <wje-menu-item>Menu item</wje-menu-item>
                </wje-menu>
              </wje-menu-item>
              <wje-menu-item>Menu item</wje-menu-item>
            </wje-menu>
          </wje-menu-item>
          <wje-menu-item id="transformations">
            Menu item
            <wje-menu slot="submenu">
              <wje-menu-item>Menu item</wje-menu-item>
              <wje-menu-item>Menu item</wje-menu-item>
              <wje-menu-item>Menu item</wje-menu-item>
            </wje-menu>
          </wje-menu-item>
        </wje-menu>    
      </div>
    </div>
  </div>`;

export default class DemoMenu extends WJElement {
  constructor() {
    super(template);
  }

  openModalFn() {
    debugger;
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, this.context);

    this.querySelectorAll('wje-menu-item').forEach((item) => {
      item.addEventListener('wje-menu-item:click', () => {
        console.log('click menu item');
      });
    });
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-menu') || window.customElements.define('demo-menu', DemoMenu);
