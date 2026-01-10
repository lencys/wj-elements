import WJElement from '../../dist/wje-element.js';
import CodeSnippet from '../assets/js/code-snippet-builder.js';

const template = document.createElement('template');

template.innerHTML = `
    <h1>Timeline</h1>
    <div class="container">
      <h2>Default</h2>
      <p class="description">
        Základná ukážka komponentu <span class="tok tag">&lt;wje-timeline&gt;</span> s položkami
        <span class="tok tag">&lt;wje-timeline-item&gt;</span>. Atribút
        <span class="tok attr">datetime</span> určuje dátum a čas (podporuje formát s časom aj ISO),
        <span class="tok attr">event</span> názov udalosti a boolean
        <span class="tok attr">active</span> zvýrazní aktuálnu položku. Do slotu
        <span class="tok attr">status</span> je možné vložiť <span class="tok tag">&lt;wje-status&gt;</span>
        s ikonou a do tela položky ľubovoľný obsah (napr. <span class="tok tag">&lt;wje-card&gt;</span> alebo text).
      </p>
  
      <div class="playground">
          <div class="content">
              <wje-timeline>
                  <wje-timeline-item datetime="11. 6. 2024 15:52:36" event="Event 1" active><p style="margin: 0"><b>Nieco sem napisem</b></p></wje-timeline-item>
                  <wje-timeline-item datetime="2024-01-01T00:00:00+00:00" event="Event 2">
                      <wje-status slot="status" size="medium" color="success">
                          <wje-icon size="small" name="check"></wje-icon>
                      </wje-status>
                  </wje-timeline-item>
                  <wje-timeline-item datetime="2024-06-15T00:00:00+00:00" event="Event 3">
                      <wje-card>
                          <wje-card-content>Additional content for timeline item.</wje-card-content>
                      </wje-card>
                  </wje-timeline-item>
                  <wje-timeline-item datetime="2024-05-12T00:00:00+00:00" event="Schodza"></wje-timeline-item>
                  <wje-timeline-item datetime="2024-01-01T00:00:00+00:00">
                      <wje-status slot="status" size="medium" color="danger">
                          <wje-icon size="small" name="x"></wje-icon>
                      </wje-status>
                      <p><b>Lorem ipsum dolor sit amet</b></p>
                  </wje-timeline-item>
                  <wje-timeline-item datetime="2024-01-01T00:00:00+00:00">
                      <wje-status slot="status" size="medium" color="complete">
                          <wje-icon size="small" name="mail"></wje-icon>
                      </wje-status>
                      <p><b>Quisque imperdiet non ipsum in ultrices</b></p>
                  </wje-timeline-item>
              </wje-timeline>
          </div>
      </div>
  </div>
`;

export default class DemoTimeline extends WJElement {
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

customElements.get('demo-timeline') || window.customElements.define('demo-timeline', DemoTimeline);
