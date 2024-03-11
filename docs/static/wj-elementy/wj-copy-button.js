var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { event } from "./wj-element.js";
import Input from "./wj-input.js";
function createNode(text) {
  const node = document.createElement("pre");
  node.style.width = "1px";
  node.style.height = "1px";
  node.style.position = "fixed";
  node.style.top = "5px";
  node.textContent = text;
  return node;
}
function copyNode(node) {
  if ("clipboard" in navigator) {
    return navigator.clipboard.writeText(node.textContent || "");
  }
  const selection = getSelection();
  if (selection == null) {
    return Promise.reject(new Error());
  }
  selection.removeAllRanges();
  const range = document.createRange();
  range.selectNodeContents(node);
  selection.addRange(range);
  selection.removeAllRanges();
  return Promise.resolve();
}
function copyText(text) {
  if ("clipboard" in navigator) {
    return navigator.clipboard.writeText(text);
  }
  const body = document.body;
  if (!body) {
    return Promise.reject(new Error());
  }
  const node = createNode(text);
  body.appendChild(node);
  copyNode(node);
  body.removeChild(node);
  return Promise.resolve();
}
const styles = "/*\n[ Wj Copy Button ]\n*/\n:host {\n  cursor: pointer;\n  padding: 0.5rem;\n}";
class CopyButton extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "CopyButton");
    __publicField(this, "clicked", (e) => {
      const button = e.currentTarget;
      if (button instanceof HTMLElement) {
        this.copy(button);
      }
    });
    __publicField(this, "keydown", (e) => {
      if (e.key === " " || e.key === "Enter") {
        const button = e.currentTarget;
        if (button instanceof HTMLElement) {
          this.copy(button);
        }
      }
    });
    __publicField(this, "focused", (e) => {
      e.currentTarget.addEventListener("keydown", this.keydown);
    });
    __publicField(this, "blurred", (e) => {
      e.currentTarget.removeEventListener("keydown", this.keydown);
    });
    __publicField(this, "copied", (e) => {
      this.icon.setAttribute("color", "success");
      this.icon.setAttribute("name", "check");
      this.tooltip.setAttribute("content", this.labelSuccess || "Copied");
      setTimeout(() => {
        this.icon.removeAttribute("color");
        this.icon.setAttribute("name", "clipboard");
        this.tooltip.setAttribute("content", this.label || "Copy");
      }, this.timeout);
    });
    this.timeout = 1e3;
  }
  set value(value) {
    this.setAttribute("value", value);
  }
  get value() {
    return this.getAttribute("value") || "";
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
  draw() {
    let fragment = document.createDocumentFragment();
    let tooltip = document.createElement("wj-tooltip");
    tooltip.setAttribute("offset", "5");
    tooltip.setAttribute("content", this.label || "Copy");
    let icon = document.createElement("wj-icon");
    icon.setAttribute("name", "clipboard");
    tooltip.appendChild(icon);
    fragment.appendChild(tooltip);
    this.tooltip = tooltip;
    this.icon = icon;
    return fragment;
  }
  afterDraw() {
    event.addListener(this, "click", null, this.clicked);
    event.addListener(this, "focus", null, this.focused);
    event.addListener(this, "blur", null, this.blurred);
    event.addListener(this, "wj:copy-button", null, this.copied);
  }
  async copy(button) {
    const id = this.getAttribute("for");
    const text = this.getAttribute("value");
    if (button.getAttribute("aria-disabled") === "true") {
      return;
    }
    if (text) {
      await copyText(text);
      event.dispatchCustomEvent(this, "wj:copy-button");
    } else if (id) {
      const root = "getRootNode" in Element.prototype ? button.getRootNode() : button.ownerDocument;
      if (!(root instanceof Document || "ShadowRoot" in window && root instanceof ShadowRoot))
        return;
      const node = root.getElementById(id);
      if (node) {
        await this.copyTarget(node);
        event.dispatchCustomEvent(this, "wj:copy-button");
      }
    }
  }
  copyTarget(content) {
    if (content instanceof HTMLInputElement || content instanceof HTMLTextAreaElement || content instanceof Input) {
      return copyText(content.value);
    } else if (content instanceof HTMLAnchorElement && content.hasAttribute("href")) {
      return copyText(content.href);
    } else {
      return copyNode(content);
    }
  }
}
WJElement.define("wj-copy-button", CopyButton);
export {
  CopyButton as default
};
