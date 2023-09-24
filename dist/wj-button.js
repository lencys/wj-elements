var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Button ]\n*/\n:host(.wj-button-solid.wj-color-primary) {\n  --wj-color-base: #7252D3;\n  --wj-color-contrast: #fff !important;\n}\n:host(.wj-button-outline.wj-color-primary) {\n  --wj-button-border-color: #7252d3;\n  --wj-color-contrast: #7252D3 !important;\n}\n:host(.wj-button-solid.wj-color-complete) {\n  --wj-color-base: #0072EC;\n  --wj-color-contrast: #fff !important;\n}\n:host(.wj-button-outline.wj-color-complete) {\n  --wj-button-border-color: #0072ec;\n  --wj-color-contrast: #0072EC !important;\n}\n:host(.wj-button-solid.wj-color-success) {\n  --wj-color-base: #19AD79;\n  --wj-color-contrast: #fff !important;\n}\n:host(.wj-button-outline.wj-color-success) {\n  --wj-button-border-color: #19ad79;\n  --wj-color-contrast: #19AD79 !important;\n}\n:host(.wj-button-solid.wj-color-warning) {\n  --wj-color-base: #FFd945;\n  --wj-color-contrast: #4b4b4b !important;\n}\n:host(.wj-button-outline.wj-color-warning) {\n  --wj-button-border-color: #ffd945;\n  --wj-color-contrast: #FFd945 !important;\n}\n:host(.wj-button-solid.wj-color-danger) {\n  --wj-color-base: #D83C31;\n  --wj-color-contrast: #fff !important;\n}\n:host(.wj-button-outline.wj-color-danger) {\n  --wj-button-border-color: #d83c31;\n  --wj-color-contrast: #D83C31 !important;\n}\n:host(.wj-button-solid.wj-color-neutral) {\n  --wj-color-base: #212121;\n  --wj-color-contrast: #fff !important;\n}\n:host(.wj-button-outline.wj-color-neutral) {\n  --wj-button-border-color: #212121;\n  --wj-color-contrast: #212121 !important;\n}\n:host(.wj-button-solid.wj-color-default) {\n  --wj-color-base: #fff;\n  --wj-color-contrast: #4b4b4b !important;\n}\n:host(.wj-button-outline.wj-color-default) {\n  --wj-button-border-color: rgba(33, 33, 33, 0.17);\n  --wj-color-base: #fff;\n  --wj-color-contrast: #4b4b4b !important;\n}\n:host {\n  --wj-button-border-radius: 4px;\n  --wj-button-border-width: 1px;\n  --wj-button-border-style: solid;\n  --wj-button-border-color: rgba(33, 33, 33, 0.17);\n  --wj-padding-top: .4rem;\n  --wj-padding-start: .5rem;\n  --wj-padding-end: .5rem;\n  --wj-padding-bottom: .4rem;\n  display: inline-flex;\n  position: relative;\n  width: auto;\n  cursor: pointer;\n}\n:host(.wj-button-group-button) {\n  display: block;\n}\n.button-native {\n  display: flex;\n  position: relative;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  overflow: hidden;\n  border-width: var(--wj-button-border-width);\n  border-style: var(--wj-button-border-style);\n  border-color: var(--wj-button-border-color);\n  outline: none;\n  background: var(--wj-color-base);\n  color: var(--wj-color-contrast);\n  line-height: 1;\n  contain: layout style;\n  cursor: pointer;\n  z-index: 0;\n  box-sizing: border-box;\n  appearance: none;\n  margin: 0;\n  border-radius: var(--wj-button-border-radius);\n  padding-top: var(--wj-padding-top);\n  padding-bottom: var(--wj-padding-bottom);\n  padding-left: var(--wj-padding-start);\n  padding-right: var(--wj-padding-end);\n}\n@media (any-hover: hover) {\n  :host(.wj-button-solid:hover) {\n    --wj-color-base: #845ae0;\n    --wj-button-border-color: #7252D3;\n    --wj-color-contrast: #fff;\n  }\n  :host(.wj-button-outline:hover) {\n    --wj-color-base: rgba(114, 82, 211, 0.1);\n    --wj-button-border-color: #7252D3;\n    --wj-color-contrast: #7252D3;\n  }\n  :host(.wj-button-solid.wj-color-complete:hover) {\n    --wj-color-base: #0f8ff9;\n    --wj-button-border-color: #0072EC;\n    --wj-color-contrast: #fff;\n  }\n  :host(.wj-button-outline.wj-color-complete:hover) {\n    --wj-color-base: rgba(0, 114, 236, 0.1);\n    --wj-button-border-color: #0072EC;\n    --wj-color-contrast: #0072EC;\n  }\n  :host(.wj-button-solid.wj-color-success:hover) {\n    --wj-color-base: #26bf93;\n    --wj-button-border-color: #19AD79;\n    --wj-color-contrast: #fff;\n  }\n  :host(.wj-button-outline.wj-color-success:hover) {\n    --wj-color-base: rgba(25, 173, 121, 0.1);\n    --wj-button-border-color: #19AD79;\n    --wj-color-contrast: #19AD79;\n  }\n  :host(.wj-button-solid.wj-color-warning:hover) {\n    --wj-color-base: #ffe858;\n    --wj-button-border-color: #FFd945;\n    --wj-color-contrast: #4b4b4b;\n  }\n  :host(.wj-button-outline.wj-color-warning:hover) {\n    --wj-color-base: rgba(255, 217, 69, 0.1);\n    --wj-button-border-color: #FFd945;\n    --wj-color-contrast: #FFd945;\n  }\n  :host(.wj-button-solid.wj-color-danger:hover) {\n    --wj-color-base: #e6533c;\n    --wj-button-border-color: #D83C31;\n    --wj-color-contrast: #fff;\n  }\n  :host(.wj-button-outline.wj-color-danger:hover) {\n    --wj-color-base: rgba(216, 60, 49, 0.1);\n    --wj-button-border-color: #D83C31;\n    --wj-color-contrast: #D83C31;\n  }\n  :host(.wj-button-solid.wj-color-neutral:hover) {\n    --wj-color-base: #373737;\n    --wj-button-border-color: #212121;\n    --wj-color-contrast: #fff;\n  }\n  :host(.wj-button-outline.wj-color-neutral:hover) {\n    --wj-color-base: rgba(33, 33, 33, 0.1);\n    --wj-button-border-color: #212121;\n    --wj-color-contrast: #212121;\n  }\n  :host(.wj-button-solid.wj-color-default:hover) {\n    --wj-color-base: rgba(245, 245, 245, 0.19);\n    --wj-button-border-color: #e0e0e0;\n    --wj-color-contrast: #4b4b4b;\n  }\n  :host(.wj-button-outline.wj-color-default:hover) {\n    --wj-color-base: rgba(224, 224, 224, 0.1);\n    --wj-button-border-color: #e0e0e0;\n    --wj-color-contrast: #4b4b4b;\n  }\n  :host(.wj-button-link:hover) {\n    --wj-color-base: rgba(128, 128, 128, 0.2) !important;\n    --wj-button-border-color: transparent !important;\n    color: #4b4b4b !important;\n  }\n}\n.button-inner {\n  display: flex;\n  position: relative;\n  flex-flow: row nowrap;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n:host(.button-solid.wj-color) {\n  background-color: var(--wj-color-base);\n  color: var(--wj-color-contrast);\n}\n:host(.wj-button-disabled) {\n  cursor: default;\n  opacity: 0.5;\n  pointer-events: none;\n}\n/*\n[ Default = Solid ]\n*/\n:host(.wj-button-solid) {\n  --wj-color-base: #7252D3;\n  --wj-color-contrast: #fff;\n}\n/*\n[ Outline ]\n*/\n:host(.wj-button-outline) {\n  --wj-button-border-color: #7252d3;\n  --wj-color-base: transparent;\n  --wj-color-contrast: #7252D3;\n}\n/*\n[ Link ]\n*/\n:host(.wj-button-link) {\n  --wj-button-border-width: 1px;\n  --wj-button-border-color: transparent;\n  --wj-color-base: transparent !important;\n}\n/*\n[ Disabled ]\n*/\n:host(.wj-button-disabled) {\n  cursor: default;\n  opacity: 0.5;\n  pointer-events: none;\n}\n/*\n[ Round ]\n*/\n:host(.wj-button-round) {\n  --wj-button-border-radius: 100px;\n}\n:host(.wj-button-large) {\n  --wj-padding-top: .6rem;\n  --wj-padding-start: .7rem;\n  --wj-padding-end: .7rem;\n  --wj-padding-bottom: .6rem;\n}\n:host(.wj-button-small) {\n  --wj-padding-top: .25rem;\n  --wj-padding-start: .25rem;\n  --wj-padding-end: .25rem;\n  --wj-padding-bottom: .25rem;\n}\n::slotted(wj-icon[slot=start]) {\n  margin: 0 0.3rem 0 -0.3rem;\n}\n::slotted(wj-icon[slot=end]) {\n  margin: 0 -0.2rem 0 0.3rem;\n}\n::slotted(wj-icon[slot=caret]) {\n  margin: 0 0 0 0.3rem;\n}\nslot[name=caret] {\n  display: block;\n}\n:host(.wj-button-group-first:not(.wj-button-group-last)) .button-native {\n  border-start-end-radius: 0;\n  border-end-end-radius: 0;\n}\n:host(.wj-button-group-inner) .button-native {\n  border-radius: 0;\n}\n:host(.wj-button-group-last:not(.wj-button-group-first)) .button-native {\n  border-start-start-radius: 0;\n  border-end-start-radius: 0;\n}\n:host(.wj-button-group-button:not(.wj-button-group-first)) {\n  margin-inline-start: calc(-1 * var(--wj-button-border-width)) !important;\n}";
class Button extends WJElement {
  constructor() {
    super();
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
  set round(value) {
    this.setAttribute("round", "");
  }
  get round() {
    return this.hasAttribute("round");
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
    if (this.round)
      this.classList.add("wj-button-round");
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
    if (this.hasAttribute("caret")) {
      let i = document.createElement("wj-icon");
      i.style.setProperty("--wj-icon-size", "10px");
      i.setAttribute("slot", "caret");
      i.setAttribute("size", "small");
      i.setAttribute("name", "angle-down");
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
    element.appendChild(span);
    fragment.appendChild(element);
    return fragment;
  }
  afterDraw() {
    this.addEventListener("click", this.eventDialogOpen);
  }
  beforeDisconnect() {
    this.removeEventListener("click", this.eventDialogOpen);
  }
}
customElements.get("wj-button") || window.customElements.define("wj-button", Button);
export {
  Button
};
