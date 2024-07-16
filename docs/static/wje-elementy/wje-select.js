var f = Object.defineProperty;
var A = (n, a, e) => a in n ? f(n, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[a] = e;
var u = (n, a, e) => (A(n, typeof a != "symbol" ? a + "" : a, e), e);
import E from "./wje-element.js";
import x from "./wje-button.js";
import "./wje-popup.js";
import y from "./wje-icon.js";
import C from "./wje-label.js";
import L from "./wje-chip.js";
import { P as O } from "./popup.element-BFIsYEbU.js";
const k = ":host{--wje-select-border-width: 1px;--wje-select-border-style: solid;--wje-select-border-color: var(--wje-border-color);--wje-select-options-border-width: 1px;--wje-select-options-border-style: var(--wje-border-style);--wje-select-options-border-color: var(--wje-border-color);--wje-select-background: var(--wje-background);--wje-select-line-height: 20px;--wje-select-color: var(--wje-color);--wje-select-border-radius: var(--wje-border-radius-medium);width:100%;display:block}:host [slot=arrow]{transform:rotate(0);transition:all .2s ease-in}.native-select.default .wrapper{display:block;border-width:var(--wje-select-border-width);border-style:var(--wje-select-border-style);border-color:var(--wje-select-border-color);border-radius:var(--wje-select-border-radius);padding-inline:.5rem;padding-top:.25rem;padding-bottom:.25rem}.native-select.default .input-wrapper{padding:0;min-height:25px;margin-top:-4px}.native-select.default.focused wje-label{opacity:.67;font-size:12px;letter-spacing:normal}.native-select.default wje-label{margin:0;display:block;opacity:1;cursor:text;transition:opacity .2s ease 0s;line-height:var(--wje-select-line-height)}.native-select.default wje-label.fade{opacity:.5;font-size:12px;letter-spacing:normal}.native-select.standard .wrapper{border-width:var(--wje-select-border-width);border-style:var(--wje-select-border-style);border-color:var(--wje-select-border-color);border-radius:var(--wje-select-border-radius)}.native-select.standard .input-wrapper{background:transparent;width:100%}.wrapper{display:flex;width:100%}.input-wrapper{display:grid;grid-template-columns:1fr auto auto;align-items:center;background-color:var(--wje-select-background);min-height:28px;color:var(--wje-select-color);line-height:var(--wje-select-line-height);-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:2px .5rem;font-size:14px;font-weight:400;vertical-align:middle}input{border:medium;height:25px;min-height:25px;padding:0;background:none;box-shadow:none;width:100%;outline:0}::placeholder{opacity:1}:host [active] .wrapper{border-radius:var(--wje-select-border-radius) var(--wje-select-border-radius) 0 0}:host [active] [slot=arrow]{transform:rotate(180deg);transition:all .2s ease-in}.option-wrapper{border-width:var(--wje-select-options-border-width);border-style:var(--wje-select-options-border-style);border-color:var(--wje-select-options-border-color);border-radius:0 0 var(--wje-select-border-radius) var(--wje-select-border-radius);margin-top:-1px;background:var(--wje-select-background);overflow:auto}:host([multiple]) input{position:absolute;z-index:-1;top:0;left:0;width:0;height:0;opacity:0}:host([multiple]) .chips{display:flex;flex:1;align-items:center;flex-wrap:wrap}:host([disabled]) .input-wrapper{opacity:.5;pointer-events:none;cursor:not-allowed}.counter{padding-inline:.5rem}wje-chip{--wje-chip-margin: 0 .25rem 0 0}wje-button{--wje-padding-top: .25rem;--wje-padding-start: .25rem;--wje-padding-end: .25rem;--wje-padding-bottom: .25rem;--wje-button-margin-inline: 0 .25rem}";
class v extends E {
  /**
   * Creates an instance of Select.
   *
   * @constructor
   */
  constructor() {
    super();
    u(this, "dependencies", {
      "wje-button": x,
      "wje-popup": O,
      "wje-icon": y,
      "wje-label": C,
      "wje-chip": L
    });
    u(this, "className", "Select");
    /**
     * Handles the option change event.
     *
     * @param {Event} e - The event.
     */
    u(this, "optionChange", (e) => {
      let t = this.getAllOptions();
      this.hasAttribute("multiple") || (t.forEach((r) => {
        r.selected = !1, r.removeAttribute("selected");
      }), this.popup.removeAttribute("active")), e.target.selected = !e.target.hasAttribute("selected"), this.selections(e.target);
    });
    /**
     * Handles the chip remove event.
     *
     * @param {Event} e - The event.
     */
    u(this, "removeChip", (e) => {
      let t = e.target.option;
      t.selected = !1, t.removeAttribute("selected"), e.target.parentNode.removeChild(e.target), this.selections(null, 0);
    });
    this._selected = [], this.counterEl = null;
  }
  /**
   * Sets the selected value.
   *
   * @param {Array} value - The selected value.
   */
  set selected(e) {
    this._selected = e;
  }
  /**
   * Returns the selected value.
   *
   * @returns {Array} The selected value.
   */
  get selected() {
    return this.getSelected();
  }
  /**
   * Sets the trigger value.
   *
   * @param {string} value - The trigger value.
   */
  set trigger(e) {
    this.setAttribute("trigger", e);
  }
  /**
   * Returns the trigger value.
   *
   * @returns {string} The trigger value.
   */
  get trigger() {
    return this.getAttribute("trigger") || "click";
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return k;
  }
  /**
   * Returns the list of attributes to observe for changes.
   *
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return ["active", "value"];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the component.
   *
   * @param {Object} context - The context for drawing.
   * @param {Object} store - The store for drawing.
   * @param {Object} params - The parameters for drawing.
   * @returns {DocumentFragment}
   */
  draw(e, t, r) {
    let i = document.createDocumentFragment();
    this.classList.add("wje-placement", "wje-" + this.placement || "wje-start");
    let s = document.createElement("div");
    s.setAttribute("part", "native"), s.classList.add("native-select", this.variant || "default");
    let p = document.createElement("div");
    p.classList.add("wrapper"), p.setAttribute("slot", "anchor");
    let m = document.createElement("wje-label");
    m.innerText = this.label || "";
    let d = document.createElement("div");
    d.classList.add("input-wrapper");
    let o = document.createElement("input");
    o.setAttribute("type", "text"), o.setAttribute("part", "input"), o.setAttribute("autocomplete", "off"), o.setAttribute("readonly", ""), o.setAttribute("placeholder", this.placeholder || "");
    let w = document.createElement("wje-icon");
    w.setAttribute("name", "chevron-down"), w.setAttribute("slot", "arrow");
    let b = document.createElement("div");
    b.classList.add("chips"), b.innerText = this.placeholder || "";
    let c = document.createElement("div");
    c.classList.add("option-wrapper"), c.style.setProperty("height", this.maxHeight || "auto");
    let j = document.createElement("slot"), h = document.createElement("wje-button");
    h.setAttribute("fill", "link"), h.setAttribute("part", "clear");
    let g = document.createElement("wje-icon");
    g.setAttribute("name", "x"), h.appendChild(g);
    let l = document.createElement("wje-popup");
    return l.setAttribute("placement", "bottom-start"), l.setAttribute("manual", ""), l.setAttribute("size", ""), this.hasAttribute("disabled") && l.setAttribute("disabled", ""), this.variant === "standard" ? this.hasAttribute("label") && s.appendChild(m) : p.appendChild(m), d.appendChild(o), this.hasAttribute("multiple") && d.appendChild(b), this.hasAttribute("clearable") && d.appendChild(h), d.appendChild(w), c.appendChild(j), p.appendChild(d), l.appendChild(p), l.appendChild(c), this.trigger === "click" && l.setAttribute("manual", ""), s.appendChild(l), this.native = s, this.popup = l, this.labelElement = m, this.input = o, this.optionsWrapper = c, this.chips = b, this.clear = h, i.appendChild(s), i;
  }
  /**
   * Sets up the event listeners after the component is drawn.
   *
   * @param {Object} context - The context for drawing.
   * @param {Object} store - The store for drawing.
   * @param {Object} params - The parameters for drawing.
   */
  afterDraw(e, t, r) {
    this.input.addEventListener("focus", (i) => {
      this.labelElement.classList.add("fade"), this.native.classList.add("focused");
    }), this.input.addEventListener("blur", (i) => {
      this.native.classList.remove("focused"), i.target.value || this.labelElement.classList.remove("fade");
    }), this.addEventListener("wje:option-change", this.optionChange), this.clear.addEventListener("wje-button:click", (i) => {
      this.getAllOptions().forEach((s) => {
        s.selected = !1, s.removeAttribute("selected");
      }), this.selections(), i.stopPropagation();
    }), this.selections(), this.optionsWrapper.addEventListener("wje:options-load", (i) => {
      this.optionsWrapper.scrollTo(0, 0);
    });
  }
  /**
   * Returns all the options.
   *
   * @returns {NodeList} The options.
   */
  getAllOptions() {
    return this.querySelectorAll("wje-option");
  }
  /**
   * Returns the selected options.
   *
   * @returns {NodeList} The selected options.
   */
  getSelectedOptions() {
    return this.querySelectorAll("wje-option[selected]");
  }
  /**
   * Returns the selected options.
   *
   * @param {Element} option - The option to get.
   * @returns {Array} The selected options.
   */
  getSelected(e) {
    let t = this.getSelectedOptions();
    return t = Array.isArray(t) ? t : Array.from(t), t = t.map((r) => ({
      value: r.value,
      text: r.textContent.trim()
    })), t;
  }
  /**
   * Handles the selection change.
   *
   * @param {Element} option - The option that changed.
   * @param {number} length - The length of the selected options.
   */
  selectionChanged(e = null, t = 0) {
    if (this.hasAttribute("multiple"))
      this.value = this.selectedOptions.map((r) => r).reverse(), this.placeholder && t === 0 ? (this.chips.innerHTML = this.placeholder, this.input.value = "") : this.counterEl instanceof HTMLElement || t > +this.maxOptions ? this.counter() : e != null && this.chips.appendChild(this.getChip(e));
    else {
      let r = (e == null ? void 0 : e.textContent.trim()) || "";
      this.value = r, this.input.value = r;
    }
  }
  /**
   * Handles the selections.
   *
   * @param {Element} option - The option to select.
   */
  selections(e) {
    let t = this.getSelectedOptions();
    this.selectedOptions = Array.isArray(t) ? t : Array.from(t), this.selectedOptions.length >= +this.maxOptions && (this.counterEl = null), this.chips.innerHTML = "", this.selectedOptions.length > 0 ? this.selectedOptions.forEach((r, i) => {
      this.selectionChanged(r, ++i);
    }) : this.selectionChanged();
  }
  /**
   * Handles the counter.
   */
  counter() {
    if (this.counterEl && this.value.length === +this.maxOptions) {
      this.counterEl.remove(), this.counterEl = null;
      return;
    }
    this.counterEl || (this.counterEl = document.createElement("span"), this.counterEl.classList.add("counter"), this.chips.appendChild(this.counterEl)), this.counterEl.innerText = `+${this.value.length - +this.maxOptions}`;
  }
  /**
   * Returns a chip element.
   *
   * @param {Element} option - The option to get the chip for.
   * @returns {Element} The chip element.
   */
  getChip(e) {
    let t = document.createElement("wje-chip");
    t.setAttribute("removable", ""), t.addEventListener("wje:chip-remove", this.removeChip), t.option = e;
    let r = document.createElement("wje-label");
    return r.innerText = e.textContent.trim(), t.appendChild(r), t;
  }
}
v.define("wje-select", v);
export {
  v as default
};
