var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { WjElementUtils } from "./wj-element.js";
import "./wj-store.js";
const styles = '/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n:host {\n  --wj-dialog-width: 600px;\n  --wj-dialog-height: 600px;\n  --wj-dialog-padding: 1rem;\n  --wj-dialog-border-radius: 8px;\n  --wj-dialog-border-width: 1px;\n  --wj-dialog-border-style: solid;\n  --wj-dialog-border-color: rgba(33, 33, 33, 0.17);\n  --wj-dialog-margin-top: auto;\n  --wj-dialog-margin-start: auto;\n  --wj-dialog-margin-end: auto;\n  --wj-dialog-margin-bottom: auto;\n}\n:host .close {\n  margin-left: auto;\n}\n:host .modal-content {\n  border-radius: 3px;\n  box-shadow: none;\n}\n:host .dialog-header {\n  position: relative;\n  border-bottom: 0;\n  padding-inline: var(--wj-dialog-padding);\n  padding-top: var(--wj-dialog-padding);\n  display: flex;\n  align-items: center;\n}\n:host .dialog-header span {\n  -webkit-transition: opacity 0.3s ease;\n  transition: opacity 0.3s ease;\n  font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  font-size: 10.5px;\n  text-transform: uppercase;\n  display: inline-block;\n  letter-spacing: 0.06em;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n  line-height: normal;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  filter: alpha(opacity=40);\n}\n:host .dialog-content {\n  box-shadow: none;\n  padding-inline: var(--wj-dialog-padding);\n  white-space: normal;\n  z-index: 1;\n}\n:host .dialog-footer {\n  display: flex;\n  justify-content: end;\n  border-top: none;\n  box-shadow: none;\n  margin-top: 0;\n  padding-inline: var(--wj-dialog-padding);\n  padding-top: 0;\n  padding-bottom: var(--wj-dialog-padding);\n}\ndialog::backdrop {\n  --wj-backdrop: rgb(0, 0, 0);\n  --wj-backdrop-opacity: .3;\n  opacity: var(--wj-backdrop-opacity);\n  background-color: var(--wj-backdrop);\n}\n:host(.separator) .dialog-header:after {\n  content: "";\n  height: 1px;\n  background: rgba(0, 0, 0, 0.08);\n  left: var(--wj-dialog-padding);\n  right: var(--wj-dialog-padding);\n  position: absolute;\n  bottom: 0;\n}\n:host dialog {\n  box-sizing: border-box;\n  transition: all 0.2s !important;\n  width: var(--wj-dialog-width);\n  height: var(--wj-dialog-height);\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  border-radius: var(--wj-dialog-border-radius);\n  border-width: var(--wj-dialog-border-width);\n  border-style: var(--wj-dialog-border-style);\n  border-color: var(--wj-dialog-border-color);\n  margin-top: var(--wj-dialog-margin-top);\n  margin-bottom: var(--wj-dialog-margin-bottom);\n  margin-inline: var(--wj-dialog-margin-start) var(--wj-dialog-margin-end);\n  padding: 0;\n}\n:host(.stick-up) {\n  --wj-dialog-width: 300px !important;\n  --wj-dialog-height: fit-content;\n  --wj-dialog-border-radius: 0 0 8px 8px;\n  --wj-dialog-border-width: 0 1px 1px 1px;\n  --wj-dialog-margin-top: 0;\n}\n:host(.slide-up) {\n  --wj-dialog-width: 300px !important;\n  --wj-dialog-height: fit-content;\n  --wj-dialog-border-radius: 8px;\n  --wj-dialog-border-width: 1px;\n}\n:host(.fill-in) {\n  --wj-dialog-width: 100%;\n  --wj-dialog-height: 100%;\n  --wj-dialog-border-radius: 0 0 0 0 !important;\n  --wj-dialog-border-width: 0;\n  --wj-dialog-margin-top: 0;\n  --wj-dialog-margin-start: 0;\n  --wj-dialog-margin-end: 0;\n  --wj-dialog-margin-bottom: 0;\n}\n:host(.fill-in) dialog {\n  min-width: var(--wj-dialog-width);\n  min-height: var(--wj-dialog-height);\n}\n:host(.slide-left) {\n  --wj-dialog-width: 300px !important;\n  --wj-dialog-height: 100% !important;\n  --wj-dialog-border-radius: 0;\n  --wj-dialog-border-width: 0 1px 0 0;\n  --wj-dialog-margin-top: 0;\n  --wj-dialog-margin-start: 0;\n  --wj-dialog-margin-end: auto;\n  --wj-dialog-margin-bottom: 0;\n}\n:host(.slide-left) dialog {\n  min-height: var(--wj-dialog-height);\n}\n:host(.slide-right) {\n  --wj-dialog-width: 300px !important;\n  --wj-dialog-height: 100% !important;\n  --wj-dialog-border-radius: 0;\n  --wj-dialog-border-width: 0 0 0 1px;\n  --wj-dialog-margin-top: 0;\n  --wj-dialog-margin-start: auto;\n  --wj-dialog-margin-end: 0;\n  --wj-dialog-margin-bottom: 0;\n}\n:host(.slide-right) dialog {\n  min-height: var(--wj-dialog-height);\n}\n:host(.small) {\n  --wj-dialog-width: 300px !important;\n}\n:host(.medium) {\n  --wj-dialog-width: 500px !important;\n}\n:host(.large) {\n  --wj-dialog-width: 600px !important;\n}\n:host(.ex-large) {\n  --wj-dialog-width: 900px !important;\n}';
class Dialog extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Dialog");
  }
  set placement(value) {
    this.setAttribute("placement", value);
  }
  get placement() {
    return this.getAttribute("placement") || "slide-up";
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
    WjElementUtils.setAttributesToElement(this, {
      "test": "test"
    });
  }
  beforeDraw(context, store, params) {
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    this.classList.add("modal", "fade", this.placement, params.size);
    let slot = document.createElement("slot");
    let dialog = document.createElement("dialog");
    dialog.classList.add("modal-dialog");
    let icon = document.createElement("wj-icon");
    icon.setAttribute("name", "xmark");
    icon.setAttribute("slot", "icon-only");
    let close = document.createElement("wj-button");
    close.setAttribute("fill", "link");
    close.setAttribute("size", "small");
    close.classList.add("close");
    close.addEventListener("click", () => {
      dialog.close();
    });
    close.appendChild(icon);
    let header = document.createElement("div");
    header.setAttribute("part", "header");
    header.classList.add("dialog-header");
    header.innerHTML = `<span>${this.title}</span>`;
    header.appendChild(close);
    let slotHeader = document.createElement("slot");
    slotHeader.setAttribute("name", "header");
    header.appendChild(slotHeader);
    let body = document.createElement("div");
    body.setAttribute("part", "body");
    body.classList.add("dialog-content");
    body.appendChild(slot);
    let footer = document.createElement("div");
    footer.setAttribute("part", "footer");
    footer.classList.add("dialog-footer");
    footer.innerHTML = "";
    let slotFooter = document.createElement("slot");
    slotFooter.setAttribute("name", "footer");
    footer.appendChild(slotFooter);
    dialog.appendChild(header);
    dialog.appendChild(body);
    dialog.appendChild(footer);
    fragment.appendChild(dialog);
    this.dialog = dialog;
    return fragment;
  }
  afterDraw(context, store, params) {
    if (params.trigger) {
      document.addEventListener(params.trigger, () => {
        this.dialog.showModal();
      });
    }
  }
}
customElements.get("wj-dialog") || window.customElements.define("wj-dialog", Dialog);
export {
  Dialog
};
