var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
const styles = '/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n:host {\n  --wj-border-width: 0 0 1px 0;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --inner-border-width: 0 0 1px 0;\n  --inner-padding-top: 0px;\n  --inner-padding-bottom: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n  --inner-box-shadow: none;\n  --show-full-highlight: 0;\n  --show-inset-highlight: 0;\n  --detail-icon-color: initial;\n  --detail-icon-font-size: 20px;\n  --detail-icon-opacity: 0.25;\n  --color-activated: var(--color);\n  --color-focused: var(--color);\n  --color-hover: var(--color);\n  --ripple-color: currentColor;\n  display: block;\n  position: relative;\n  align-items: center;\n  justify-content: space-between;\n  outline: none;\n  color: var(--color);\n  text-align: initial;\n  text-decoration: none;\n  overflow: hidden;\n  box-sizing: border-box;\n  width: 100%;\n}\n.item-native {\n  --min-height: 40px;\n  --background: #FFFFFF;\n  --transition: opacity 15ms linear, background-color 15ms linear;\n  border-radius: var(--border-radius);\n  -webkit-border-radius: var(--border-radius);\n  -moz-border-radius: var(--border-radius);\n  margin: 0 0 0 0;\n  padding: var(--padding-top) var(--padding-end) var(--padding-bottom) calc(var(--padding-start) + var(--ion-safe-area-left, 0px));\n  display: flex;\n  position: relative;\n  align-items: inherit;\n  justify-content: inherit;\n  width: 100%;\n  min-height: var(--min-height);\n  transition: var(--transition);\n  outline: none;\n  background: var(--background);\n  overflow: inherit;\n  box-sizing: border-box;\n  z-index: 1;\n  text-decoration: none;\n  color: #000;\n}\n.item-native .item-inner {\n  margin: 0 0 0 0;\n  padding: var(--inner-padding-top) calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end)) var(--inner-padding-bottom) var(--inner-padding-start);\n  display: flex;\n  position: relative;\n  flex: 1 1 0;\n  flex-direction: inherit;\n  align-items: inherit;\n  align-self: stretch;\n  min-height: inherit;\n  border-width: var(--wj-border-width);\n  border-style: var(--wj-border-style);\n  border-color: var(--wj-border-color);\n  box-shadow: var(--inner-box-shadow);\n  overflow: inherit;\n  box-sizing: border-box;\n}\n.item-native .item-inner .input-wrapper {\n  display: flex;\n  flex: 1 1 0;\n  flex-direction: inherit;\n  align-items: inherit;\n  align-self: stretch;\n  text-overflow: ellipsis;\n  overflow: inherit;\n  box-sizing: border-box;\n}\n.item-native .item-bottom {\n  padding: 0 var(--inner-padding-end) 0 calc(var(--padding-start) + var(--ion-safe-area-left, 0px));\n  display: flex;\n  justify-content: space-between;\n}\n@media (any-hover: hover) {\n  :host(:hover) .item-native {\n    color: #212121;\n  }\n  :host(:hover) .item-native :after {\n    transition: var(--transition);\n    z-index: -1;\n    inset: 0;\n    position: absolute;\n    content: "";\n    background: #f4f4f4;\n    opacity: 0.7;\n  }\n}\nbutton,\na {\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-drag: none;\n}\n::slotted([slot=start]) {\n  margin-inline: 0 1rem;\n}\n::slotted(wj-label) {\n  margin: 10px 8px 10px 0;\n}\n::slotted(wj-label:not([slot=end])) {\n  flex: 1 1 0;\n}\n/*\n[ lines ]\n*/';
class Item extends WJElement {
  constructor() {
    super();
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
