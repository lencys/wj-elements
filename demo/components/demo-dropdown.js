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

    <!-- BASIC -->

    <h2>Default</h2>
    <p class="description">
      Základná ukážka <span class="tok tag">&lt;wje-dropdown&gt;</span> s trigger tlačidlom v slote <span class="tok attr">trigger</span>.
      V menu je <span class="tok tag">&lt;wje-menu variant="context"&gt;</span> s položkami <span class="tok tag">&lt;wje-menu-item&gt;</span>.
      V <span class="tok method">afterDraw()</span> je ukážka async hooku <span class="tok method">beforeShow</span>, ktorý vracia <span class="tok tag">Promise</span> (simulácia načítania dát).
      Zároveň sa loguje hook <span class="tok method">beforeClose</span>, ktorý dostane referenciu na dropdown element.
    </p>
    <div class="playground">
      <div class="content">
        <p style="height: 50px; display: flex; gap: 1rem;">
          <wje-dropdown id="custom-dropdown-basic" label="Start" placement="bottom-start" offset="5" collapsible portaled>
            <wje-button size="large" slot="trigger" caret>Large</wje-button>
            <wje-menu variant="context">
              <wje-menu-item>
                <wje-icon name="plane" slot="start"></wje-icon>
                <wje-label>Menu item accordion</wje-label>
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
          
          <wje-dropdown label="Start" placement="bottom-start" offset="5" collapsible>
            <wje-button size="large" slot="trigger" caret>Large</wje-button>
            <wje-menu variant="context">
              <wje-menu-item>
                <wje-icon name="plane" slot="start"></wje-icon>
                <wje-label>Menu item accordion</wje-label>
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
    
    <!-- CHANGE -->

    <h2>Change button</h2>
    <p class="description">
      Vlastný trigger s avatarom a textom: <span class="tok tag">&lt;wje-button&gt;</span> je v slote <span class="tok attr">trigger</span> a obsahuje <span class="tok tag">&lt;wje-avatar&gt;</span>.
      V JavaScripte sa rieši hover stav cez <span class="tok method">mouseenter</span>/<span class="tok method">mouseleave</span> a CSS triedu <span class="tok attr">.hover</span>.
      Dropdown používa callbacky <span class="tok method">afterShow</span> a <span class="tok method">afterClose</span> na synchronizáciu UI s otvorením/zatvorením.
      V lokálnom CSS sa upravuje <span class="tok css">--wje-button-border-width</span> a štýl <span class="tok css">::part(native)</span> (padding, size, display).
    </p>
    <div class="playground">
      <div class="content">
        <wje-dropdown label="Start" placement="bottom-start" offset="5" collapsible id="example">
          <wje-button fill="link" slot="trigger" circle>
            <wje-avatar size="5x-large" label="Petr Rahman" initials>
              <wje-img src="/assets/img/avatar.svg"></wje-img>
            </wje-avatar>
            
            <span class="edit-text">Edit profile</span>
          </wje-button>
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
        
        <style>
          #example {
            wje-button {
              --wje-button-border-width: 0;
              &.hover {
                &::part(native) {
                  background-color: red;
                }
              }
              &::part(native) {
                padding: 0;
                min-width: unset;
                width: fit-content;
                height: fit-content;
                display: inline-flex;
              }
              
              .edit-text {
                opacity: 0;
                position: absolute;
              }
              
              &.hover wje-avatar {
                opacity: 0;
              }

              &.hover .edit-text {
                display: block;
                align-items: center;
                justify-content: center;
                white-space: nowrap;
                opacity: 1;
              }
              
            }
          }
        </style>
      </div>
    </div>

    <!-- OPEN DIALOG -->

    <h2>Open Dialog</h2>
    <p class="description">
      Prepojenie dropdownu a dialógu: <span class="tok tag">&lt;wje-menu-item&gt;</span> má atribút <span class="tok attr">dialog="open-modal"</span> a
      <span class="tok tag">&lt;wje-dialog&gt;</span> reaguje na <span class="tok attr">trigger="open-modal"</span>.
      Footer dialógu je vložený cez slot <span class="tok attr">footer</span>.
    </p>
    <div class="playground">
      <div class="content">
        <wje-dropdown label="Start" placement="bottom-start" offset="5" collapsible>
          <wje-button size="large" slot="trigger" caret>Large</wje-button>
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
    <p class="description">
      Otváranie dropdownu na hover cez <span class="tok attr">trigger="hover"</span> a umiestnenie menu cez <span class="tok attr">placement="right-start"</span>.
      Trigger je avatar v slote <span class="tok attr">trigger</span>.
    </p>
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
    <p class="description">
      Kombinácia s <span class="tok tag">&lt;wje-tooltip&gt;</span>: tooltip je definovaný cez <span class="tok attr">content</span>, <span class="tok attr">placement</span> a výber targetu cez <span class="tok attr">selector</span>.
    </p>
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
    <p class="description">
      Príklad bohatého obsahu v menu: vnútri <span class="tok tag">&lt;wje-menu&gt;</span> je vložený ďalší <span class="tok tag">&lt;wje-avatar&gt;</span>, divider cez <span class="tok tag">&lt;wje-divider&gt;</span>
      (vrátane CSS premennej <span class="tok css">--wje-divider-spacing</span>) a akčné položky cez <span class="tok tag">&lt;wje-menu-item&gt;</span>.
      Layout menu je upravený lokálnym CSS cez triedu <span class="tok attr">.custom-menu</span>.
    </p>
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

    // CHANGE BUTTON
    const el = document.querySelector('#example wje-button');

    const listenerShow = (e) => {
      e.target.classList.add('hover');
    }

    const listenerClose = (e) => {
      e.target.classList.remove('hover');
    }

    // On
    el.addEventListener('mouseenter', listenerShow);

    // Off
    el.addEventListener('mouseleave', listenerClose);

    // Dropdown SHOW
    this.querySelector('#example').afterShow = () => {
      el.classList.add('hover');

      el.removeEventListener('mouseleave', listenerClose);
    }

    // Dropdown CLOSE
    this.querySelector('#example').afterClose = () => {
      el.classList.remove('hover');

      el.addEventListener('mouseleave', listenerClose);
    }

    // PROMISE
    this.querySelector('#custom-dropdown-basic').beforeShow = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('Dáta načítané');
        }, 1000); // Simuluje 1 sekundové oneskorenie
      });
    }

    this.querySelector('#custom-dropdown-basic').beforeClose = (elem) => {
      console.log('Dropdown before close', elem);
    }
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-dropdown') || window.customElements.define('demo-dropdown', DemoDropdown);
