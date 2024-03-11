var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { WjElementUtils, event } from "./wj-element.js";
import IconElement from "./wj-icon.js";
const bool = (v) => {
  return v === "false" || v === "null" || v === "NaN" || v === "undefined" || v === "0" ? false : !!v;
};
const styles = "/*\n[ WJ Button ]\n*/\n:host(.wj-button-solid.wj-color-primary) {\n  --wj-button-background-color: var(--wj-color-primary-10);\n  --wj-button-border-color: var(--wj-color-primary-11);\n  --wj-button-color: var(--wj-color-contrast-0);\n}\n\n:host(.wj-button-outline.wj-color-primary) {\n  --wj-button-border-color: var(--wj-color-primary-6);\n  --wj-button-color: var(--wj-color-primary-6);\n}\n\n:host(.wj-button-solid.wj-color-complete) {\n  --wj-button-background-color: var(--wj-color-complete-10);\n  --wj-button-border-color: var(--wj-color-complete-11);\n  --wj-button-color: var(--wj-color-contrast-0);\n}\n\n:host(.wj-button-outline.wj-color-complete) {\n  --wj-button-border-color: var(--wj-color-complete-6);\n  --wj-button-color: var(--wj-color-complete-6);\n}\n\n:host(.wj-button-solid.wj-color-success) {\n  --wj-button-background-color: var(--wj-color-success-10);\n  --wj-button-border-color: var(--wj-color-success-11);\n  --wj-button-color: var(--wj-color-contrast-0);\n}\n\n:host(.wj-button-outline.wj-color-success) {\n  --wj-button-border-color: var(--wj-color-success-6);\n  --wj-button-color: var(--wj-color-success-6);\n}\n\n:host(.wj-button-solid.wj-color-warning) {\n  --wj-button-background-color: var(--wj-color-warning-10);\n  --wj-button-border-color: var(--wj-color-warning-11);\n  --wj-button-color: var(--wj-color-black);\n}\n\n:host(.wj-button-outline.wj-color-warning) {\n  --wj-button-border-color: var(--wj-color-warning-6);\n  --wj-button-color: var(--wj-color-warning-6);\n}\n\n:host(.wj-button-solid.wj-color-danger) {\n  --wj-button-background-color: var(--wj-color-danger-10);\n  --wj-button-border-color: var(--wj-color-danger-11);\n  --wj-button-color: var(--wj-color-contrast-0);\n}\n\n:host(.wj-button-outline.wj-color-danger) {\n  --wj-button-border-color: var(--wj-color-danger-6);\n  --wj-button-color: var(--wj-color-danger-6);\n}\n\n:host(.wj-button-solid.wj-color-neutral) {\n  --wj-button-background-color: var(--wj-color-contrast-10);\n  --wj-button-border-color: var(--wj-color-contrast-11);\n  --wj-button-color: var(--wj-color-contrast-0);\n}\n\n:host(.wj-button-outline.wj-color-neutral) {\n  --wj-button-border-color: var(--wj-color-contrast-6);\n  --wj-button-color: var(--wj-color-contrast-6);\n}\n\n:host(.wj-button-solid.wj-color-default) {\n  --wj-button-background-color: transparent;\n  --wj-button-border-color: var(--wj-color-contrast-4);\n  --wj-button-color: var(--wj-color-contrast-11);\n}\n\n:host(.wj-button-outline.wj-color-default) {\n  --wj-button-border-color: var(--wj-color-contrast-4);\n  --wj-button-color: var(--wj-color-contrast-11);\n}\n\n:host {\n  --wj-button-border-radius: var(--wj-border-radius-medium);\n  --wj-button-border-width: 1px;\n  --wj-button-border-style: solid;\n  --wj-button-border-color: var(--wj-color-contrast-1);\n  --wj-button-margin-inline: 0;\n  --wj-padding-top: .4rem;\n  --wj-padding-start: .5rem;\n  --wj-padding-end: .5rem;\n  --wj-padding-bottom: .4rem;\n  display: inline-flex;\n  position: relative;\n  width: auto;\n  cursor: pointer;\n  margin-inline: var(--wj-button-margin-inline);\n}\n\n:host(.wj-button-group-button) {\n  display: block;\n}\n\n.button-native {\n  font-family: var(--wj-font-family);\n  font-size: var(--wj-font-size);\n  display: flex;\n  position: relative;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  overflow: hidden;\n  border-width: var(--wj-button-border-width);\n  border-style: var(--wj-button-border-style);\n  border-color: var(--wj-button-border-color);\n  outline: none;\n  background-color: var(--wj-button-background-color);\n  color: var(--wj-button-color);\n  line-height: 1;\n  contain: layout style;\n  cursor: pointer;\n  z-index: 0;\n  box-sizing: border-box;\n  appearance: none;\n  margin: 0;\n  border-radius: var(--wj-button-border-radius);\n  padding-top: var(--wj-padding-top);\n  padding-bottom: var(--wj-padding-bottom);\n  padding-inline: var(--wj-padding-start) var(--wj-padding-end);\n}\n\n@media (any-hover: hover) {\n  :host(.wj-button-solid.wj-color-primary:hover) {\n    --wj-button-background-color: var(--wj-color-primary-9);\n    --wj-button-border-color: var(--wj-color-primary-10);\n    --wj-button-color: var(--wj-color-contrast-0);\n  }\n  :host(.wj-button-outline.wj-color-primary:hover) {\n    --wj-button-background-color: var(--wj-color-primary-1);\n    --wj-button-border-color: var(--wj-color-primary-11);\n    --wj-button-color: var(--wj-color-primary-11);\n  }\n  :host(.wj-button-solid.wj-color-complete:hover) {\n    --wj-button-background-color: var(--wj-color-complete-9);\n    --wj-button-border-color: var(--wj-color-complete-10);\n    --wj-button-color: var(--wj-color-contrast-0);\n  }\n  :host(.wj-button-outline.wj-color-complete:hover) {\n    --wj-button-background-color: var(--wj-color-complete-1);\n    --wj-button-border-color: var(--wj-color-complete-11);\n    --wj-button-color: var(--wj-color-complete-11);\n  }\n  :host(.wj-button-solid.wj-color-success:hover) {\n    --wj-button-background-color: var(--wj-color-success-9);\n    --wj-button-border-color: var(--wj-color-success-10);\n    --wj-button-color: var(--wj-color-contrast-0);\n  }\n  :host(.wj-button-outline.wj-color-success:hover) {\n    --wj-button-background-color: var(--wj-color-success-1);\n    --wj-button-border-color: var(--wj-color-success-11);\n    --wj-button-color: var(--wj-color-success-11);\n  }\n  :host(.wj-button-solid.wj-color-warning:hover) {\n    --wj-button-background-color: var(--wj-color-warning-9);\n    --wj-button-border-color: var(--wj-color-warning-10);\n    --wj-button-color: var(--wj-color-black);\n  }\n  :host(.wj-button-outline.wj-color-warning:hover) {\n    --wj-button-background-color: var(--wj-color-warning-1);\n    --wj-button-border-color: var(--wj-color-warning-11);\n    --wj-button-color: var(--wj-color-warning-11);\n  }\n  :host(.wj-button-solid.wj-color-danger:hover) {\n    --wj-button-background-color: var(--wj-color-danger-9);\n    --wj-button-border-color: var(--wj-color-danger-10);\n    --wj-button-color: var(--wj-color-contrast-0);\n  }\n  :host(.wj-button-outline.wj-color-danger:hover) {\n    --wj-button-background-color: var(--wj-color-danger-1);\n    --wj-button-border-color: var(--wj-color-danger-11);\n    --wj-button-color: var(--wj-color-danger-11);\n  }\n  :host(.wj-button-solid.wj-color-neutral:hover) {\n    --wj-button-background-color: var(--wj-color-contrast-9);\n    --wj-button-border-color: var(--wj-color-contrast-10);\n    --wj-button-color: var(--wj-color-contrast-0);\n  }\n  :host(.wj-button-outline.wj-color-neutral:hover) {\n    --wj-button-background-color: var(--wj-color-contrast-1);\n    --wj-button-border-color: var(--wj-color-contrast-11);\n    --wj-button-color: var(--wj-color-contrast-11);\n  }\n  :host(.wj-button-solid.wj-color-default:hover) {\n    --wj-button-background-color: var(--wj-color-contrast-1);\n    --wj-button-border-color: var(--wj-color-contrast-2);\n    --wj-button-color: var(--wj-color-contrast-9);\n  }\n  :host(.wj-button-outline.wj-color-default:hover) {\n    --wj-button-background-color: var(--wj-color-contrast-1);\n    --wj-button-border-color: var(--wj-color-contrast-2);\n    --wj-button-color: var(--wj-color-contrast-9);\n  }\n  :host(.wj-button-link:hover) {\n    --wj-button-background-color: var(--wj-color-contrast-1) !important;\n    --wj-button-border-color: transparent !important;\n    color: var(--wj-color-contrast-9) !important;\n  }\n}\n.button-inner {\n  display: flex;\n  position: relative;\n  flex-flow: row nowrap;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n\n:host(.button-solid.wj-color) {\n  background-color: var(--wj-button-background-color);\n  color: var(--wj-button-color);\n}\n\n:host(.wj-button-disabled) {\n  cursor: default;\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n/*\n[ Default = Solid ]\n*/\n/*\n[ Outline ]\n*/\n/*\n[ Link ]\n*/\n:host(.wj-button-link) {\n  --wj-button-border-width: 1px;\n  --wj-button-border-color: transparent;\n  --wj-button-background-color: transparent !important;\n}\n\n/*\n[ Disabled ]\n*/\n:host(.wj-button-disabled) {\n  cursor: default;\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n/*\n[ Round ]\n*/\n:host(.wj-button-round) {\n  --wj-button-border-radius: var(--wj-border-radius-pill);\n}\n\n:host(.wj-button-circle) {\n  --wj-button-border-radius: var(--wj-border-radius-circle);\n  aspect-ratio: 1/1;\n}\n\n:host(.wj-button-large) {\n  --wj-padding-top: .6rem;\n  --wj-padding-start: .7rem;\n  --wj-padding-end: .7rem;\n  --wj-padding-bottom: .6rem;\n}\n\n:host(.wj-button-small) {\n  --wj-padding-top: .25rem;\n  --wj-padding-start: .25rem;\n  --wj-padding-end: .25rem;\n  --wj-padding-bottom: .25rem;\n}\n\n::slotted(wj-icon[slot=start]) {\n  margin: 0 0.3rem 0 -0.3rem;\n}\n\n::slotted(wj-icon[slot=end]) {\n  margin: 0 -0.2rem 0 0.3rem;\n}\n\n:host(:not([only-caret])) slot[name=caret] {\n  padding: 0 0 0 0.3rem;\n}\n\n:host([only-caret]) slot[name=caret] {\n  padding: 0;\n  display: block;\n}\n\n:host(.wj-button-group-first:not(.wj-button-group-last)) .button-native {\n  border-start-end-radius: 0;\n  border-end-end-radius: 0;\n}\n\n:host(.wj-button-group-inner) .button-native {\n  border-radius: 0;\n}\n\n:host(.wj-button-group-last:not(.wj-button-group-first)) .button-native {\n  border-start-start-radius: 0;\n  border-end-start-radius: 0;\n}\n\n:host(.wj-button-group-button:not(.wj-button-group-first)) {\n  margin-inline-start: calc(-1 * var(--wj-button-border-width)) !important;\n}\n\n::slotted([slot=toggle]) {\n  display: none;\n}\n\n::slotted([slot=toggle].show) {\n  display: block;\n}";
class Button extends WJElement {
  constructor() {
    super();
    __publicField(this, "depandencies", {
      "wj-icon": IconElement
    });
    __publicField(this, "className", "Button");
    __publicField(this, "eventDialogOpen", (e) => {
      document.dispatchEvent(
        new CustomEvent(
          this.dialog,
          {
            bubbles: true
          }
        )
      );
    });
    __publicField(this, "toggleStates", () => {
      const nodes = this.slotToggle.assignedNodes().filter((node) => node.nodeType === Node.ELEMENT_NODE);
      nodes.forEach((node) => {
        if (node.classList.contains("show")) {
          node.classList.remove("show");
        } else {
          node.classList.add("show");
        }
      });
    });
  }
  set active(value) {
    this.setAttribute("active", "");
  }
  get active() {
    return this.hasAttribute("active");
  }
  set disabled(value) {
    this.setAttribute("disabled", "");
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  set fill(value) {
    this.setAttribute("fill", value);
  }
  get fill() {
    return this.getAttribute("fill") || "solid";
  }
  set outline(value) {
    this.setAttribute("outline", "");
  }
  get outline() {
    return this.hasAttribute("outline");
  }
  set stopPropagation(value) {
    this.setAttribute("stop-propagation", bool(value));
  }
  get stopPropagation() {
    return bool(this.getAttribute("stop-propagation"));
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    if (this.disabled)
      this.classList.add("wj-button-disabled");
    if (this.variant)
      this.classList.add("wj-button-" + this.variant);
    if (this.hasAttribute("round"))
      this.classList.add("wj-button-round");
    if (this.hasAttribute("circle"))
      this.classList.add("wj-button-circle");
    if (this.outline)
      this.classList.add("wj-outline");
    if (this.fill)
      this.classList.add("wj-button-" + this.fill);
    if (this.size)
      this.classList.add("wj-button-" + this.size);
    if (this.hasAttribute("color"))
      this.classList.add("wj-color-" + this.color, "wj-color");
    else
      this.classList.add("wj-color-default", "wj-color");
    if (this.hasAttribute("caret") || this.hasAttribute("only-caret")) {
      let i = document.createElement("wj-icon");
      i.style.setProperty("--wj-icon-size", "14px");
      i.setAttribute("slot", "caret");
      i.setAttribute("name", "chevron-down");
      this.appendChild(i);
    }
    if (this.active) {
      this.classList.add("wj-active");
      let i = document.createElement("wj-icon");
      i.setAttribute("name", "check");
      this.appendChild(i);
    }
    if (this.disabled)
      this.classList.add("wj-disabled");
    let element = document.createElement(this.hasAttribute("href") ? "a" : "button");
    element.classList.add("button-native");
    element.setAttribute("part", "native");
    let span = document.createElement("span");
    span.classList.add("button-inner");
    let slot = document.createElement("slot");
    slot.setAttribute("name", "icon-only");
    span.appendChild(slot);
    slot = document.createElement("slot");
    slot.setAttribute("name", "start");
    span.appendChild(slot);
    slot = document.createElement("slot");
    span.appendChild(slot);
    slot = document.createElement("slot");
    slot.setAttribute("name", "end");
    span.appendChild(slot);
    slot = document.createElement("slot");
    slot.setAttribute("name", "caret");
    span.appendChild(slot);
    this.hasToggle = WjElementUtils.hasSlot(this, "toggle");
    if (this.hasToggle) {
      this.slotToggle = document.createElement("slot");
      this.slotToggle.setAttribute("name", "toggle");
      span.appendChild(this.slotToggle);
    }
    element.appendChild(span);
    fragment.appendChild(element);
    return fragment;
  }
  afterDraw() {
    if (this.hasToggle) {
      if (this.toggle === "off") {
        this.slotToggle.assignedNodes()[1].classList.add("show");
      } else {
        this.slotToggle.assignedNodes()[0].classList.add("show");
      }
    }
    event.addListener(this, "click", "wj:button-click", null, { stopPropagation: this.stopPropagation });
    event.addListener(this, "click", null, this.eventDialogOpen);
    if (this.hasToggle)
      event.addListener(this, "click", "wj-button:toggle", this.toggleStates, { stopPropagation: this.stopPropagation });
  }
  beforeDisconnect() {
    this.removeEventListener("click", this.eventDialogOpen);
  }
}
WJElement.define("wj-button", Button);
export {
  Button as default
};
