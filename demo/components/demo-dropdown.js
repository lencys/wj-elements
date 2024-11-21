import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <style>
    wje-button [slot=caret] {
      margin-inline: .5rem 0;
    }
  </style>
  <h1>Dropdown</h1>
  <div class="container">

    <!--  BASIC-->

    <h2>Basic</h2>
    <div class="playground">
      <div class="content">
        <p style="height: 50px;">
          <wje-dropdown label="Start" placement="bottom-start" offset="5" collapsible id="custom-dropdown-basic">
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

    <!-- OPEN DIALOG -->

    <h2>Open Dialog</h2>
    <div class="playground">
      <div class="content">
        <wje-dropdown label="Start" placement="bottom-start" offset="5" collapsible>
          <wje-button size="large" slot="trigger" stop-propagation="true" caret>Large</wje-button>
          <wje-menu variant="context">
            <wje-menu-item dialog="open-modal">
              <wje-icon name="book" slot="start"></wje-icon>
              <wje-label>Open dialog</wje-label>
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
        
        <wje-dialog trigger="open-modal" headline="Title">
          <h4>Lorem ipsum dolor sit amet</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vulputate velit, at volutpat nisl.</p>
          <div slot="footer">
            <wje-button class="close">Zatvoriť</wje-button>
            <wje-button id="save" color="primary">Potvrdiť</wje-button>
          </div>
        </wje-dialog>
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
    
    <!-- TOOLTIP -->

    <h2>Tooltip</h2>
    <div class="playground">
      <div class="content">
        <wje-tooltip id="custom-tooltip" content="Tooltip content" placement="right" selector=".my-selector">
          <wje-dropdown id="custom-dropdown-tooltip" placement="right-start" offset="5" collapsible>
            <wje-button slot="trigger" class="my-selector">CLICK</wje-button>
            <wje-menu class="custom-menu" active>
              <h5 style="margin: 0;">Petr Rahman</h5>
              <p class="hint-text">Frontend Developer</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
            </wje-menu>
          </wje-dropdown>
        </wje-tooltip>
      </div>
    </div>
    
    <!-- INNER AVATAR -->

    <h3>Inner avatar</h3>
    <div class="playground">
      <div class="content">
        <wje-dropdown id="custom-dropdown" placement="right-start" offset="5" collapsible>
          <wje-avatar label="Petr Rahman" initials slot="trigger"></wje-avatar>
          <wje-menu class="custom-menu" active>
            <div style="display: flex; align-items: center;">
              <wje-avatar>
                <wje-img src="/assets/img/avatar.svg"></wje-img>
              </wje-avatar>
              <h5 style="margin: 0 0 0 .5rem; line-height: normal;">Petr Rahman</h5>
            </div>
            <wje-divider style="--wje-divider-spacing: .5rem"></wje-divider>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
            <wje-divider></wje-divider>
            <wje-menu-item>Link A</wje-menu-item>
            <wje-menu-item>Link B</wje-menu-item>
          </wje-menu>
        </wje-dropdown>
        <style>
          .custom-menu {
            width: 200px;
            padding: 1rem 1rem 1rem;
          }
        </style>
      </div>
    </div>
  </div>`;

export default class DemoDropdown extends WJElement {
   constructor() {
    super();
  }

  /**
   * Returns the template for the component.
   * @static
   * @returns {HTMLElement} The template element
   */
  static get customTemplate() {
    return template;
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(this.context);

    // Simulácia oneskorenia načítania dát
    this.querySelector('#custom-dropdown-basic').beforeShow = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('Dáta načítané');
        }, 1000); // Simuluje 1 sekundové oneskorenie
      });
    };
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-dropdown') || window.customElements.define('demo-dropdown', DemoDropdown);
