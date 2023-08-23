import { WJElement } from "../../website/static/wj-elements/wj-main.js";
import { makeServer } from './mirage-config.js';

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
      <a href="./grid.html">Grid</a>
      <a href="./chip.html">Chip</a>
      <a href="./icons.html">Icon</a>
      <a href="./infinite-scroll.html">Infinite scroll</a>
      <a href="./item.html">Item</a>
      <a href="./list.html">List</a>
      <a href="./media.html">Media</a>
      <a href="./progress-bar.html">Progress bar</a>
      <a href="./slider.html">Slider</a>
      <a href="./toast.html">Toast</a>
      <a href="./toggle.html">Toggle</a>
    `;

    fragment.appendChild(element);

    return fragment;
  }
}

customElements.get("wj-demo-header") || window.customElements.define("wj-demo-header", DemoHeader);