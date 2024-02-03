import { WJElement } from "../../dist/wj-master.js";

const template = document.createElement('template');

template.innerHTML = `<h1>Relative time</h1>
  <div class="container">

    <!-- BASIC -->

    <h3>Basic</h3>
    <div class="playground">
      <div class="content" style="display: block;">
        <b>No date</b>
        <wj-relative-time></wj-relative-time><br/>
        
        <b>Timestamp</b>
        <wj-relative-time date="1704067200"></wj-relative-time><br/>
        
        <b>ISO Date</b>
        <wj-relative-time date="2024-01-01T00:00:00+00:00"></wj-relative-time><br/>
      </div>
    </div>
  </div>`;

export default class DemoRelativeTime extends WJElement {
  constructor() {
    super(template);
  }
}

let __esModule = 'true';
export { __esModule };

customElements.get("demo-relative-time") || window.customElements.define("demo-relative-time", DemoRelativeTime);