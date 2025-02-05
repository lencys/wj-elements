var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Item ]\n*/\n\n:host {\n    display: block;\n    position: relative;\n    align-items: center;\n    justify-content: space-between;\n    outline: none;\n    color: var(--wje-item-color);\n    text-align: initial;\n    text-decoration: none;\n    overflow: hidden;\n    box-sizing: border-box;\n    width: 100%;\n}\n\n.item-native {\n    border-radius: var(--wje-item-border-radius);\n    padding-top: var(--wje-item-padding-top);\n    padding-bottom: var(--wje-item-padding-bottom);\n    padding-inline: var(--wje-item-padding-start) var(--wje-item-padding-end);\n    margin: 0;\n    display: flex;\n    position: relative;\n    align-items: inherit;\n    justify-content: inherit;\n    width: 100%;\n    min-height: var(--wje-item-min-height);\n    transition: var(--wje-item-transition);\n    outline: none;\n    background: var(--wje-item-background);\n    overflow: inherit;\n    box-sizing: border-box;\n    z-index: 1;\n    text-decoration: none;\n    color: var(--wje-item-color);\n\n    .item-inner {\n        margin: 0;\n        padding: var(--wje-item-inner-padding-top) var(--wje-item-inner-padding-end)\n            var(--wje-item-inner-padding-bottom) var(--wje-item-inner-padding-start);\n\n        display: flex;\n        position: relative;\n\n        flex: 1 1 0;\n        flex-direction: inherit;\n        align-items: inherit;\n        align-self: stretch;\n\n        min-height: inherit;\n\n        border-width: var(--wje-item-border-width);\n        border-style: var(--wje-item-border-style);\n        border-color: var(--wje-item-border-color);\n\n        box-shadow: var(--wje-item-inner-box-shadow);\n        overflow: inherit;\n        box-sizing: border-box;\n\n        .input-wrapper {\n            display: flex;\n            flex: 1 1 0;\n            flex-direction: inherit;\n            align-items: inherit;\n            align-self: stretch;\n            text-overflow: ellipsis;\n            overflow: inherit;\n            box-sizing: border-box;\n        }\n    }\n\n    .item-bottom {\n        padding: 0 var(--wje-item-inner-padding-end) 0 var(--wje-item-padding-start);\n        display: flex;\n        justify-content: space-between;\n    }\n}\n\n@media (any-hover: hover) {\n    :host(:hover) .item-native {\n        color: var(--wje-item-color);\n\n        :after {\n            transition: var(--wje-item-transition);\n            z-index: -1;\n            inset: 0;\n            position: absolute;\n            content: '';\n            background: var(--wje-item-background-hover);\n            opacity: 0.7;\n        }\n    }\n}\n\nbutton,\na {\n    cursor: pointer;\n    user-select: none;\n    -webkit-user-drag: none;\n}\n\n::slotted([slot='start']) {\n    margin-inline: 0 1rem;\n}\n\n::slotted(wje-label:not([slot='end'])) {\n    flex: 1 1 0;\n}\n";
class Item extends WJElement {
  /**
   * Item constructor for the class.
   */
  constructor() {
    super();
    /**
     * Returns the CSS styles for the component.
     * @type {string}
     */
    __publicField(this, "className", "Item");
    /**
     * Determines if the given element or any of its ancestors matches the specified selector.
     * @param {string} selector The CSS selector to match against the element's ancestors.
     * @param {HTMLElement} el The element from which to start the search.
     * @returns {boolean} - Returns `true` if the element or one of its ancestors matches the selector; otherwise, `false`.
     */
    __publicField(this, "hostContext", (selector, el) => {
      return el.closest(selector) !== null;
    });
    this.labelColorStyles = {};
    this.itemStyles = /* @__PURE__ */ new Map();
    this.inheritedAriaAttributes = {};
    this.multipleInputs = false;
    this.focusable = true;
    this.button = false;
    this.detailIcon = ``;
    this.disabled = false;
    this.counter = false;
    this.routerDirection = "forward";
    this.type = "button";
  }
  /**
   * Returns the CSS styles for the component.
   * @returns {boolean}
   */
  isClickable() {
    return this.hasAttribute("href") || this.button;
  }
  /**
   * Returns the CSS styles for the component.
   * @static
   * @returns {object} styles
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
   * Draws the component for the item.
   * @returns {DocumentFragment}
   */
  draw() {
    const TagType = this.isClickable() ? this.hasAttribute("href") === void 0 ? "button" : "a" : "div";
    if (this.hostContext("wje-list", this)) {
      this.classList.add("wje-item-list");
    }
    return `<${TagType} class="item-native" part="native">
			<slot name="start"></slot>
			<div class="item-inner">
					<div class="input-wrapper" part="inner">
							<slot></slot>
					</div>
					<slot name="end"></slot>
			</div>
			<div class="item-highlight"></div>
    </${TagType}>
		<div class="item-bottom">
				<slot name="error"></slot>
				<slot name="helper"></slot>
		</div>`;
  }
}
Item.define("wje-item", Item);
export {
  Item as default
};
