import { WJElement } from "../../../website/static/wj-elements/wj-main.js";
import { makeServer } from './mirage-config.js';
import "../../components/demo-badge.js";
import "../../components/demo-button.js";
import "../../components/demo-card.js";
import "../../components/demo-chip.js";
import "../../components/demo-dialog.js";
import "../../components/demo-form.js";
import "../../components/demo-grid.js";
import "../../components/demo-icons.js";
import "../../components/demo-infinite-scroll.js";
import "../../components/demo-item.js";
import "../../components/demo-list.js";
import "../../components/demo-media.js";
import "../../components/demo-progress-bar.js";
import "../../components/demo-slider.js";
import "../../components/demo-toast.js";
import "../../components/demo-toggle.js";

if (import.meta.env.DEV) {
  makeServer();
}

const template = document.createElement('template');

template.innerHTML = `<style>
	
</style>`;
export class DemoHeader extends WJElement {
  constructor() {
    super(template);
  }

  className = "DemoHeader";
  static get observedAttributes() {
    return [];
  }

  setupAttributes() {
    this.isShadowRoot = "open";
  }

  beforeDraw(context, store, params) {
  }

  draw(context, store, params) {
    let fragment = document.createDocumentFragment();

    let element = document.createElement("div");
    element.innerHTML = `
      <a href="./badge.html">Badge</a>
      <a href="./button.html">Button</a>
      <a href="./card.html">Card</a>
      <a href="./dialog.html">Dialog</a>
      <a href="./form.html">Form</a>
      <a href="./grid.html">Grid</a>
      <a href="./chip.html">Chip</a>
      <a href="./icons.html">Icon</a>
      <a href="./infinite-scroll.html">Infinite scroll</a>
      <a href="./item.html">Item</a>
      <a href="./list.html">List</a>
      <a href="./media.html">Media</a>
      <a href="./progress-bar.html">Progress bar</a>
      <a href="./routing.html">Routing</a>
      <a href="./slider.html">Slider</a>
      <a href="./toast.html">Toast</a>
      <a href="./toggle.html">Toggle</a>
    `;

    fragment.appendChild(element);

    return fragment;
  }
}

customElements.get("wj-demo-header") || window.customElements.define("wj-demo-header", DemoHeader);