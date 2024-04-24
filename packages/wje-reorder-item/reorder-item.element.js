// ReorderItem.js

import { default as WJElement, WjElementUtils } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

export default class ReorderItem extends WJElement {
  constructor() {
    super();
  }

  className = "ReorderItem";

  static get cssStyleSheet() {
    return styles;
  }

  setupAttributes() {
    this.isShadowRoot = "open";
  }

  draw(content, store, params) {
    let fragment = document.createDocumentFragment();

    let wrapper = document.createElement("div");
    wrapper.classList.add("item");
    wrapper.setAttribute("part", "native-reorder-item");

    let element = document.createElement("slot");
    element.classList.add("name");

    if(WjElementUtils.hasSlot(this, "handle")) {
        const handle = document.createElement("slot");
        handle.classList.add("handle");
        wrapper.classList.add("item-w-handle");
        handle.setAttribute("name", "handle");
        handle.setAttribute("part", "handle-part");
        
        wrapper.appendChild(handle);
    } else {
      element.setAttribute("draggable", "true");
    }

    wrapper.appendChild(element);

    fragment.appendChild(wrapper);

    return fragment;
  }
}
