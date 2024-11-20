import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
  <h1>Accordion</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
    <div class="playground" style="background-color: rgba(0,0,0,.08);">
      <div class="content" style="flex-direction: column;">
        <wje-accordion>
          <wje-accordion-item>
            <div slot="headline">
              <wje-status color="success" size="large">
                <wje-icon name="check" size="medium"></wje-icon>
              </wje-status>
              Headline
              <wje-dropdown label="Start" placement="bottom-start" offset="5" collapsible id="custom-dropdown-basic">
                <wje-button fill="link" slot="trigger">
                  <wje-icon name="dots-vertical"></wje-icon>
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
            </div>
            <div slot="description">Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
            <div slot="content">Click headers to expand/collapse content that is broken into logical sections, much like tabs. Optionally, toggle sections open/closed on mouseover.</div>
          </wje-accordion-item>
        </wje-accordion>
      </div>
    </div>
        
    <!-- COLOR -->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content" style="flex-direction: column;">
        <wje-accordion>
          <wje-accordion-item color="primary">
            <span slot="headline">Headline</span>
            <div slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum urna quis velit consequat, et malesuada dolor tempus.</div>
          </wje-accordion-item>
          <wje-accordion-item color="complete">
            <span slot="headline">Headline</span>
            <div slot="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum urna quis velit consequat, et malesuada dolor tempus. Aenean luctus facilisis nibh. Cras ac leo tellus. Vivamus sagittis a elit ut imperdiet. Donec fringilla elementum odio. Integer vitae aliquam metus. Curabitur ante nisi, rutrum sit amet nunc quis, dapibus iaculis massa.</p>
            </div>
          </wje-accordion-item>
          <wje-accordion-item color="success">
            <span slot="headline">Headline</span>
            <div slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum urna quis velit consequat, et malesuada dolor tempus.</div>
          </wje-accordion-item>
          <wje-accordion-item color="danger">
            <span slot="headline">Headline</span>
            <div slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum urna quis velit consequat, et malesuada dolor tempus.</div>
          </wje-accordion-item>
          <wje-accordion-item color="warning">
            <span slot="headline">Headline</span>
            <div slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum urna quis velit consequat, et malesuada dolor tempus.</div>
          </wje-accordion-item>
          <wje-accordion-item color="info">
            <span slot="headline">Headline</span>
            <div slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum urna quis velit consequat, et malesuada dolor tempus.</div>
          </wje-accordion-item>
        </wje-accordion>
          
        <style>
          [slot=headline] {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              gap: .5rem;
          }
          wje-dropdown {
              margin-left: auto;
          }
        </style>
      </div>
    </div>
    
    <!-- MULTIPLE -->

    <h3>Multiple</h3>
    <div class="playground">
      <div class="content" style="flex-direction: column;">
        <wje-accordion multiple index="3">
          <wje-accordion-item  color="info">
            <span slot="headline">Headline</span>
            <div slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum urna quis velit consequat, et malesuada dolor tempus.</div>
          </wje-accordion-item>
          <wje-accordion-item color="info">
            <span slot="headline">Headline</span>
            <div slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum urna quis velit consequat, et malesuada dolor tempus.</div>
          </wje-accordion-item>
          <wje-accordion-item color="info">
            <span slot="headline">Headline</span>
            <div slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum urna quis velit consequat, et malesuada dolor tempus.</div>
          </wje-accordion-item>
        </wje-accordion>
      </div>
    </div>
  </div>`;

export default class DemoAccordion extends WJElement {
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
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get('demo-accordion') || window.customElements.define('demo-accordion', DemoAccordion);
