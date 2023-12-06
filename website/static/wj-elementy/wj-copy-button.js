var d = Object.defineProperty;
var p = (o, e, t) => e in o ? d(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var i = (o, e, t) => (p(o, typeof e != "symbol" ? e + "" : e, t), t);
import h, { event as s } from "./wj-element.js";
import { Input as m } from "./wj-input.js";
import "./wj-store.js";
function f(o) {
  const e = document.createElement("pre");
  return e.style.width = "1px", e.style.height = "1px", e.style.position = "fixed", e.style.top = "5px", e.textContent = o, e;
}
function l(o) {
  if ("clipboard" in navigator)
    return navigator.clipboard.writeText(o.textContent || "");
  const e = getSelection();
  if (e == null)
    return Promise.reject(new Error());
  e.removeAllRanges();
  const t = document.createRange();
  return t.selectNodeContents(o), e.addRange(t), e.removeAllRanges(), Promise.resolve();
}
function u(o) {
  if ("clipboard" in navigator)
    return navigator.clipboard.writeText(o);
  const e = document.body;
  if (!e)
    return Promise.reject(new Error());
  const t = f(o);
  return e.appendChild(t), l(t), e.removeChild(t), Promise.resolve();
}
const b = `/*!
* direction.scss
*/:host{cursor:pointer;padding:.5rem}
`;
class y extends h {
  constructor() {
    super();
    i(this, "className", "CopyButton");
    i(this, "clicked", (t) => {
      const n = t.currentTarget;
      n instanceof HTMLElement && this.copy(n);
    });
    i(this, "keydown", (t) => {
      if (t.key === " " || t.key === "Enter") {
        const n = t.currentTarget;
        n instanceof HTMLElement && this.copy(n);
      }
    });
    i(this, "focused", (t) => {
      t.currentTarget.addEventListener("keydown", this.keydown);
    });
    i(this, "blurred", (t) => {
      t.currentTarget.removeEventListener("keydown", this.keydown);
    });
    i(this, "copied", (t) => {
      this.icon.setAttribute("color", "success"), this.icon.setAttribute("name", "check"), this.tooltip.setAttribute("content", this.labelSuccess || "Copied"), setTimeout(() => {
        this.icon.removeAttribute("color"), this.icon.setAttribute("name", "clipboard"), this.tooltip.setAttribute("content", this.label || "Copy");
      }, this.timeout);
    });
    this.timeout = 1e3;
  }
  set value(t) {
    this.setAttribute("value", t);
  }
  get value() {
    return this.getAttribute("value") || "";
  }
  static get cssStyleSheet() {
    return b;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw() {
    let t = document.createDocumentFragment(), n = document.createElement("wj-tooltip");
    n.setAttribute("offset", "5"), n.setAttribute("content", this.label || "Copy");
    let r = document.createElement("wj-icon");
    return r.setAttribute("name", "clipboard"), n.appendChild(r), t.appendChild(n), this.tooltip = n, this.icon = r, t;
  }
  afterDraw() {
    s.addListener(this, "click", null, this.clicked), s.addListener(this, "focus", null, this.focused), s.addListener(this, "blur", null, this.blurred), s.addListener(this, "wj:copy-button", null, this.copied);
  }
  async copy(t) {
    const n = this.getAttribute("for"), r = this.getAttribute("value");
    if (t.getAttribute("aria-disabled") !== "true") {
      if (r)
        await u(r), s.dispatchCustomEvent(this, "wj:copy-button");
      else if (n) {
        const c = "getRootNode" in Element.prototype ? t.getRootNode() : t.ownerDocument;
        if (!(c instanceof Document || "ShadowRoot" in window && c instanceof ShadowRoot))
          return;
        const a = c.getElementById(n);
        a && (await this.copyTarget(a), s.dispatchCustomEvent(this, "wj:copy-button"));
      }
    }
  }
  copyTarget(t) {
    return t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof m ? u(t.value) : t instanceof HTMLAnchorElement && t.hasAttribute("href") ? u(t.href) : l(t);
  }
}
customElements.get("wj-copy-button") || window.customElements.define("wj-copy-button", y);
export {
  y as CopyButton
};
