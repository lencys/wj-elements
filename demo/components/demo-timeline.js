import WJElement from "../../dist/wje-element.js";
import CodeSnippet from "../assets/js/code-snippet-builder.js";

const template = document.createElement("template");

template.innerHTML = `
  <h1>Timeline</h1>
  <div class="container">
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
    super(template);
  }

  afterDraw() {
    const codeSnippet = new CodeSnippet();
    codeSnippet.generateSnippet(template, this.context);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-timeline") || window.customElements.define("demo-timeline", DemoTimeline);
