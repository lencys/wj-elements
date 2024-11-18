import { default as WJElement, WjElementUtils } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `ReorderItem` is a custom web component that represents a reorder item.
 * @summary This element represents a reorder item.
 * @documentation https://elements.webjet.sk/components/reorder-item
 * @status stable
 * @augments WJElement
 * @csspart native-reorder-item - The native part of the reorder item.
 * @csspart handle-part - The handle part of the reorder item when the handle slot is present.
 * @slot - The default slot for the reorder item.
 * @tag wje-reorder-item
 */
export default class ReorderItem extends WJElement {

  /**
   * Creates an instance of ReorderItem.
   */
  constructor() {
    super();
  }

  /**
   * The class name for the component.
   * @type {string}
   */
  className = "ReorderItem";

  /**
   * Returns the CSS stylesheet for the component.
   * @returns {CSSStyleSheet} The CSS stylesheet.
   */
  static get cssStyleSheet() {
    return styles;
  }

  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }

  /**
   * Returns the list of observed attributes.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();

    let wrapper = document.createElement("div");
    wrapper.classList.add("item");
    wrapper.setAttribute("part", "native-reorder-item");

    let element = document.createElement("slot");
    element.classList.add("name");

    if(WjElementUtils.hasSlot(this, "handle")) {
        const handle = document.createElement("slot");
        handle.classList.add("handle");
        handle.setAttribute("name", "handle");
        handle.setAttribute("part", "handle-part");

        wrapper.classList.add("item-w-handle");
        wrapper.appendChild(handle);
    } else {
      element.setAttribute("draggable", "true");
    }

    wrapper.appendChild(element);

    fragment.appendChild(wrapper);

    return fragment;
  }
}
