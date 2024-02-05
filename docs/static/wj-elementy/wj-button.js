var d = Object.defineProperty;
var b = (t, e, o) => e in t ? d(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var c = (t, e, o) => (b(t, typeof e != "symbol" ? e + "" : e, o), o);
import j, { WjElementUtils as h, event as i } from "./wj-element.js";
import "./wj-store.js";
const u = (t) => t === "false" || t === "null" || t === "NaN" || t === "undefined" || t === "0" ? !1 : !!t, g = `:host(.wj-button-solid.wj-color-primary){--wj-button-background-color: var(--wj-color-primary-10);--wj-button-border-color: var(--wj-color-primary-11);--wj-button-color: var(--wj-color-contrast-0)}:host(.wj-button-outline.wj-color-primary){--wj-button-border-color: var(--wj-color-primary-6);--wj-button-color: var(--wj-color-primary-6)}:host(.wj-button-solid.wj-color-complete){--wj-button-background-color: var(--wj-color-complete-10);--wj-button-border-color: var(--wj-color-complete-11);--wj-button-color: var(--wj-color-contrast-0)}:host(.wj-button-outline.wj-color-complete){--wj-button-border-color: var(--wj-color-complete-6);--wj-button-color: var(--wj-color-complete-6)}:host(.wj-button-solid.wj-color-success){--wj-button-background-color: var(--wj-color-success-10);--wj-button-border-color: var(--wj-color-success-11);--wj-button-color: var(--wj-color-contrast-0)}:host(.wj-button-outline.wj-color-success){--wj-button-border-color: var(--wj-color-success-6);--wj-button-color: var(--wj-color-success-6)}:host(.wj-button-solid.wj-color-warning){--wj-button-background-color: var(--wj-color-warning-10);--wj-button-border-color: var(--wj-color-warning-11);--wj-button-color: var(--wj-color-black)}:host(.wj-button-outline.wj-color-warning){--wj-button-border-color: var(--wj-color-warning-6);--wj-button-color: var(--wj-color-warning-6)}:host(.wj-button-solid.wj-color-danger){--wj-button-background-color: var(--wj-color-danger-10);--wj-button-border-color: var(--wj-color-danger-11);--wj-button-color: var(--wj-color-contrast-0)}:host(.wj-button-outline.wj-color-danger){--wj-button-border-color: var(--wj-color-danger-6);--wj-button-color: var(--wj-color-danger-6)}:host(.wj-button-solid.wj-color-neutral){--wj-button-background-color: var(--wj-color-contrast-10);--wj-button-border-color: var(--wj-color-contrast-11);--wj-button-color: var(--wj-color-contrast-0)}:host(.wj-button-outline.wj-color-neutral){--wj-button-border-color: var(--wj-color-contrast-6);--wj-button-color: var(--wj-color-contrast-6)}:host(.wj-button-solid.wj-color-default){--wj-button-background-color: transparent;--wj-button-border-color: var(--wj-color-contrast-4);--wj-button-color: var(--wj-color-contrast-11)}:host(.wj-button-outline.wj-color-default){--wj-button-border-color: var(--wj-color-contrast-4);--wj-button-color: var(--wj-color-contrast-11)}:host{--wj-button-border-radius: 4px;--wj-button-border-width: 1px;--wj-button-border-style: solid;--wj-button-border-color: var(--wj-color-contrast-1);--wj-button-margin-inline: 0;--wj-padding-top: .4rem;--wj-padding-start: .5rem;--wj-padding-end: .5rem;--wj-padding-bottom: .4rem;display:inline-flex;position:relative;width:auto;cursor:pointer;margin-inline:var(--wj-button-margin-inline)}:host(.wj-button-group-button){display:block}.button-native{font-family:var(--wj-font-family);font-size:var(--wj-font-size);display:flex;position:relative;align-items:center;width:100%;height:100%;min-height:inherit;overflow:hidden;border-width:var(--wj-button-border-width);border-style:var(--wj-button-border-style);border-color:var(--wj-button-border-color);outline:none;background-color:var(--wj-button-background-color);color:var(--wj-button-color);line-height:1;contain:layout style;cursor:pointer;z-index:0;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0;border-radius:var(--wj-button-border-radius);padding-top:var(--wj-padding-top);padding-bottom:var(--wj-padding-bottom);padding-inline:var(--wj-padding-start) var(--wj-padding-end)}@media (any-hover: hover){:host(.wj-button-solid.wj-color-primary:hover){--wj-button-background-color: var(--wj-color-primary-9);--wj-button-border-color: var(--wj-color-primary-10);--wj-button-color: var(--wj-color-contrast-0)}:host(.wj-button-outline.wj-color-primary:hover){--wj-button-background-color: var(--wj-color-primary-1);--wj-button-border-color: var(--wj-color-primary-11);--wj-button-color: var(--wj-color-primary-11)}:host(.wj-button-solid.wj-color-complete:hover){--wj-button-background-color: var(--wj-color-complete-9);--wj-button-border-color: var(--wj-color-complete-10);--wj-button-color: var(--wj-color-contrast-0)}:host(.wj-button-outline.wj-color-complete:hover){--wj-button-background-color: var(--wj-color-complete-1);--wj-button-border-color: var(--wj-color-complete-11);--wj-button-color: var(--wj-color-complete-11)}:host(.wj-button-solid.wj-color-success:hover){--wj-button-background-color: var(--wj-color-success-9);--wj-button-border-color: var(--wj-color-success-10);--wj-button-color: var(--wj-color-contrast-0)}:host(.wj-button-outline.wj-color-success:hover){--wj-button-background-color: var(--wj-color-success-1);--wj-button-border-color: var(--wj-color-success-11);--wj-button-color: var(--wj-color-success-11)}:host(.wj-button-solid.wj-color-warning:hover){--wj-button-background-color: var(--wj-color-warning-9);--wj-button-border-color: var(--wj-color-warning-10);--wj-button-color: var(--wj-color-black)}:host(.wj-button-outline.wj-color-warning:hover){--wj-button-background-color: var(--wj-color-warning-1);--wj-button-border-color: var(--wj-color-warning-11);--wj-button-color: var(--wj-color-warning-11)}:host(.wj-button-solid.wj-color-danger:hover){--wj-button-background-color: var(--wj-color-danger-9);--wj-button-border-color: var(--wj-color-danger-10);--wj-button-color: var(--wj-color-contrast-0)}:host(.wj-button-outline.wj-color-danger:hover){--wj-button-background-color: var(--wj-color-danger-1);--wj-button-border-color: var(--wj-color-danger-11);--wj-button-color: var(--wj-color-danger-11)}:host(.wj-button-solid.wj-color-neutral:hover){--wj-button-background-color: var(--wj-color-contrast-9);--wj-button-border-color: var(--wj-color-contrast-10);--wj-button-color: var(--wj-color-contrast-0)}:host(.wj-button-outline.wj-color-neutral:hover){--wj-button-background-color: var(--wj-color-contrast-1);--wj-button-border-color: var(--wj-color-contrast-11);--wj-button-color: var(--wj-color-contrast-11)}:host(.wj-button-solid.wj-color-default:hover){--wj-button-background-color: var(--wj-color-contrast-1);--wj-button-border-color: var(--wj-color-contrast-2);--wj-button-color: var(--wj-color-contrast-9)}:host(.wj-button-outline.wj-color-default:hover){--wj-button-background-color: var(--wj-color-contrast-1);--wj-button-border-color: var(--wj-color-contrast-2);--wj-button-color: var(--wj-color-contrast-9)}:host(.wj-button-link:hover){--wj-button-background-color: var(--wj-color-contrast-1) !important;--wj-button-border-color: transparent !important;color:var(--wj-color-contrast-9)!important}}.button-inner{display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.button-solid.wj-color){background-color:var(--wj-button-background-color);color:var(--wj-button-color)}:host(.wj-button-link){--wj-button-border-width: 1px;--wj-button-border-color: transparent;--wj-button-background-color: transparent !important}:host(.wj-button-disabled){cursor:default;opacity:.5;pointer-events:none}:host(.wj-button-round){--wj-button-border-radius: var(--wj-border-radius-pill)}:host(.wj-button-circle){--wj-button-border-radius: var(--wj-border-radius-circle);aspect-ratio:1/1}:host(.wj-button-large){--wj-padding-top: .6rem;--wj-padding-start: .7rem;--wj-padding-end: .7rem;--wj-padding-bottom: .6rem}:host(.wj-button-small){--wj-padding-top: .25rem;--wj-padding-start: .25rem;--wj-padding-end: .25rem;--wj-padding-bottom: .25rem}::slotted(wj-icon[slot=start]){margin:0 .3rem 0 -.3rem}::slotted(wj-icon[slot=end]){margin:0 -.2rem 0 .3rem}:host(:not([only-caret])) slot[name=caret]{padding:0 0 0 .3rem}:host([only-caret]) slot[name=caret]{padding:0;display:block}:host(.wj-button-group-first:not(.wj-button-group-last)) .button-native{border-start-end-radius:0;border-end-end-radius:0}:host(.wj-button-group-inner) .button-native{border-radius:0}:host(.wj-button-group-last:not(.wj-button-group-first)) .button-native{border-start-start-radius:0;border-end-start-radius:0}:host(.wj-button-group-button:not(.wj-button-group-first)){margin-inline-start:calc(-1 * var(--wj-button-border-width))!important}::slotted([slot=toggle]){display:none}::slotted([slot=toggle].show){display:block}
`;
class p extends j {
  constructor() {
    super();
    c(this, "className", "Button");
    c(this, "eventDialogOpen", (o) => {
      document.dispatchEvent(
        new CustomEvent(
          this.dialog,
          {
            bubbles: !0
          }
        )
      );
    });
    c(this, "toggleStates", () => {
      this.slotToggle.assignedNodes().filter((l) => l.nodeType === Node.ELEMENT_NODE).forEach((l) => {
        l.classList.contains("show") ? l.classList.remove("show") : l.classList.add("show");
      });
    });
  }
  set active(o) {
    this.setAttribute("active", "");
  }
  get active() {
    return this.hasAttribute("active");
  }
  set disabled(o) {
    this.setAttribute("disabled", "");
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  set fill(o) {
    this.setAttribute("fill", o);
  }
  get fill() {
    return this.getAttribute("fill") || "solid";
  }
  set outline(o) {
    this.setAttribute("outline", "");
  }
  get outline() {
    return this.hasAttribute("outline");
  }
  set stopPropagation(o) {
    this.setAttribute("stop-propagation", u(o));
  }
  get stopPropagation() {
    return u(this.getAttribute("stop-propagation"));
  }
  static get cssStyleSheet() {
    return g;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(o, l, v) {
    let w = document.createDocumentFragment();
    if (this.disabled && this.classList.add("wj-button-disabled"), this.variant && this.classList.add("wj-button-" + this.variant), this.hasAttribute("round") && this.classList.add("wj-button-round"), this.hasAttribute("circle") && this.classList.add("wj-button-circle"), this.outline && this.classList.add("wj-outline"), this.fill && this.classList.add("wj-button-" + this.fill), this.size && this.classList.add("wj-button-" + this.size), this.hasAttribute("color") ? this.classList.add("wj-color-" + this.color, "wj-color") : this.classList.add("wj-color-default", "wj-color"), this.hasAttribute("caret") || this.hasAttribute("only-caret")) {
      let a = document.createElement("wj-icon");
      a.style.setProperty("--wj-icon-size", "14px"), a.setAttribute("slot", "caret"), a.setAttribute("name", "chevron-down"), this.appendChild(a);
    }
    if (this.active) {
      this.classList.add("wj-active");
      let a = document.createElement("wj-icon");
      a.setAttribute("name", "check"), this.appendChild(a);
    }
    this.disabled && this.classList.add("wj-disabled");
    let s = document.createElement(this.hasAttribute("href") ? "a" : "button");
    s.classList.add("button-native"), s.setAttribute("part", "native");
    let n = document.createElement("span");
    n.classList.add("button-inner");
    let r = document.createElement("slot");
    return r.setAttribute("name", "icon-only"), n.appendChild(r), r = document.createElement("slot"), r.setAttribute("name", "start"), n.appendChild(r), r = document.createElement("slot"), n.appendChild(r), r = document.createElement("slot"), r.setAttribute("name", "end"), n.appendChild(r), r = document.createElement("slot"), r.setAttribute("name", "caret"), n.appendChild(r), this.hasToggle = h.hasSlot(this, "toggle"), this.hasToggle && (this.slotToggle = document.createElement("slot"), this.slotToggle.setAttribute("name", "toggle"), n.appendChild(this.slotToggle)), s.appendChild(n), w.appendChild(s), w;
  }
  afterDraw() {
    this.hasToggle && (this.toggle === "off" ? this.slotToggle.assignedNodes()[1].classList.add("show") : this.slotToggle.assignedNodes()[0].classList.add("show")), i.addListener(this, "click", "wj:button-click", null, { stopPropagation: this.stopPropagation }), i.addListener(this, "click", null, this.eventDialogOpen), this.hasToggle && i.addListener(this, "click", "wj-button:toggle", this.toggleStates, { stopPropagation: this.stopPropagation });
  }
  beforeDisconnect() {
    this.removeEventListener("click", this.eventDialogOpen);
  }
}
customElements.get("wj-button") || window.customElements.define("wj-button", p);
export {
  p as Button
};
