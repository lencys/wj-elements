var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = '/*\n[ WJ Item ]\n*/\n:host {\n  --wj-border-width: 0 0 1px 0;\n  --wj-item-background: transparent;\n  --wj-item-background-hover: var(--wj-color-contrast-3);\n  --wj-item-padding-top: 0px;\n  --wj-item-padding-bottom: 0px;\n  --wj-item-padding-end: 0px;\n  --wj-item-padding-start: 0px;\n  --wj-item-inner-border-width: 0 0 1px 0;\n  --wj-item-inner-padding-top: 0px;\n  --wj-item-inner-padding-bottom: 0px;\n  --wj-item-inner-padding-start: 0px;\n  --wj-item-inner-padding-end: 0px;\n  --wj-item-inner-box-shadow: none;\n  --wj-item-min-height: 40px;\n  --wj-item-transition: opacity 15ms linear, background-color 15ms linear;\n  display: block;\n  position: relative;\n  align-items: center;\n  justify-content: space-between;\n  outline: none;\n  color: var(--wj-item-color);\n  text-align: initial;\n  text-decoration: none;\n  overflow: hidden;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n.item-native {\n  border-radius: var(--wj-item-border-radius);\n  padding-top: var(--wj-item-padding-top);\n  padding-bottom: var(--wj-item-padding-bottom);\n  padding-inline: var(--wj-item-padding-start) var(--wj-item-padding-end);\n  margin: 0;\n  display: flex;\n  position: relative;\n  align-items: inherit;\n  justify-content: inherit;\n  width: 100%;\n  min-height: var(--wj-item-min-height);\n  transition: var(--wj-item-transition);\n  outline: none;\n  background: var(--wj-item-background);\n  overflow: inherit;\n  box-sizing: border-box;\n  z-index: 1;\n  text-decoration: none;\n  color: var(--wj-item-color);\n}\n.item-native .item-inner {\n  margin: 0;\n  padding: var(--wj-item-inner-padding-top) var(--wj-item-inner-padding-end) var(--wj-item-inner-padding-bottom) var(--wj-item-inner-padding-start);\n  display: flex;\n  position: relative;\n  flex: 1 1 0;\n  flex-direction: inherit;\n  align-items: inherit;\n  align-self: stretch;\n  min-height: inherit;\n  border-width: var(--wj-border-width);\n  border-style: var(--wj-border-style);\n  border-color: var(--wj-border-color);\n  box-shadow: var(--wj-item-inner-box-shadow);\n  overflow: inherit;\n  box-sizing: border-box;\n}\n.item-native .item-inner .input-wrapper {\n  display: flex;\n  flex: 1 1 0;\n  flex-direction: inherit;\n  align-items: inherit;\n  align-self: stretch;\n  text-overflow: ellipsis;\n  overflow: inherit;\n  box-sizing: border-box;\n}\n.item-native .item-bottom {\n  padding: 0 var(--wj-item-inner-padding-end) 0 var(--wj-item-padding-start);\n  display: flex;\n  justify-content: space-between;\n}\n\n@media (any-hover: hover) {\n  :host(:hover) .item-native {\n    color: var(--wj-item-color);\n  }\n  :host(:hover) .item-native :after {\n    transition: var(--wj-item-transition);\n    z-index: -1;\n    inset: 0;\n    position: absolute;\n    content: "";\n    background: var(--wj-item-background-hover);\n    opacity: 0.7;\n  }\n}\nbutton,\na {\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-drag: none;\n}\n\n::slotted([slot=start]) {\n  margin-inline: 0 1rem;\n}\n\n::slotted(wj-label:not([slot=end])) {\n  flex: 1 1 0;\n}';
class Item extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Item");
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
  isClickable() {
    return this.hasAttribute("href") || this.button;
  }
  static get cssStyleSheet() {
    return styles;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw(context, store, params) {
  }
  draw(context, store, params) {
    const TagType = this.isClickable() ? this.hasAttribute("href") === void 0 ? "button" : "a" : "div";
    if (this.hostContext("wj-list", this)) {
      this.classList.add("wj-item-list");
    }
    return `<${TagType} class="item-native" part="native">
			<slot name="start"></slot>
			<div class="item-inner">
					<div class="input-wrapper">
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
customElements.get("wj-item") || window.customElements.define("wj-item", Item);
export {
  Item
};
