// ReorderItem.js

import { default as WJElement } from "../wje-element/element.js";
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

    // let start = document.createElement("slot");
    // start.setAttribute("name", "handle");
    // start.classList.add("handle");

    // const img = document.createElement("img");
    // img.setAttribute("src", "public/assets/img/icons/outline/baseline-density-medium.svg");

    // start.appendChild(img);

    // wrapper.appendChild(start);
    wrapper.appendChild(element);

    fragment.appendChild(wrapper);

    return fragment;
  }
}
