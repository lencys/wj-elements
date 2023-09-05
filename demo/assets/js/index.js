import { WJElement } from "../../../website/static/wj-elements/wj-main.js";

export class Demo extends WJElement {
  constructor() {
    super();
  }

  className = "Demo";

  setupAttributes() {
    this.isShadowRoot = "open";
  }

  draw(context, store, params) {
    let fragment = document.createDocumentFragment();

    let element = document.createElement("div");
    element.innerHTML = `<wj-router outlet="wj-router-outlet">
      <wj-route name="badge" path="/badge/:id" component="demo-badge"></wj-route>
      <wj-route name="button" path="/button" component="demo-button"></wj-route>
      <wj-route name="card" path="/card" component="demo-card"></wj-route>
      <wj-route name="dialog" path="/dialog" component="demo-dialog"></wj-route>
      <wj-route name="form" path="/form" component="demo-form"></wj-route>
      <wj-route name="grid" path="/grid" component="demo-grid"></wj-route>
      <wj-route name="chip" path="/chip" component="demo-chip"></wj-route>
      <wj-route name="icons" path="/icons" component="demo-icons"></wj-route>
      <wj-route name="infinite-scroll" path="/infinite-scroll" component="demo-infinite-scroll"></wj-route>
      <wj-route name="item" path="/item" component="demo-item"></wj-route>
      <wj-route name="list" path="/list" component="demo-list"></wj-route>
      <wj-route name="media" path="/media" component="demo-media"></wj-route>
      <wj-route name="progress-bar" path="/progress-bar" component="demo-progress-bar"></wj-route>
      <wj-route name="slider" path="/slider" component="demo-slider"></wj-route>
      <wj-route name="toast" path="/toast" component="demo-toast"></wj-route>
      <wj-route name="toggle" path="/toggle" component="demo-toggle"></wj-route>
    </wj-router>`;

    fragment.appendChild(element);

    return fragment;
  }
}

customElements.get("wj-demo") || window.customElements.define("wj-demo", Demo);