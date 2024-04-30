var s = Object.defineProperty;
var h = (c, t, e) => t in c ? s(c, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[t] = e;
var l = (c, t, e) => (h(c, typeof t != "symbol" ? t + "" : t, e), e);
import b, { event as a } from "./wje-element.js";
const d = ':host{--wje-grey-check-icon: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAQAgMAAADsa5zLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTHBwcG9vb3BwcBFjhIYAAAAEdFJOUwBG9tQE3MceAAAAVUlEQVQoz2NgGLKA0QGIDwDxBSCeAMEYgAWI2YCK2CagYgwgDcRSDhgYbAkKzsSKGdgakCyY6ADES7BiiCkgJ4PYyybgxAhQAsRZDrgxCpDEg4cAAAAp2ibhZRGLHgAAAABJRU5ErkJggg==) left center;--wje-white-check-icon: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAQAgMAAADsa5zLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTP///////////waf0AoAAAAEdFJOUwBG9tQE3MceAAAAVUlEQVQoz2NgGLKA0QGIDwDxBSCeAMEYgAWI2YCK2CagYgwgDcRSDhgYbAkKzsSKGdgakCyY6ADES7BiiCkgJ4PYyybgxAhQAsRZDrgxCpDEg4cAAAAp2ibhZRGLHgAAAABJRU5ErkJggg==) left center;--wje-checkbox-margin-top: 0;--wje-checkbox-margin-bottom: .5rem;--wje-checkbox-margin-inline: 0;--wje-checkbox-width: 16px;--wje-checkbox-height: 16px;display:block;margin-top:var(--wje-checkbox-margin-top);margin-bottom:var(--wje-checkbox-margin-bottom);margin-inline:var(--wje-checkbox-margin-inline);line-height:100%;padding-left:0}:host label{display:inline-block;cursor:pointer;position:relative;padding-left:25px;min-width:var(--wje-checkbox-width);min-height:var(--wje-checkbox-height);margin-bottom:0;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host label:before{content:"";position:absolute;width:16px;height:16px;left:0;-webkit-box-sizing:inherit;box-sizing:border-box;background-color:var(--wje-color-contrast-lowest);border:1px solid var(--wje-border-color)}.native-checkbox label{transition:border .14s linear 0s,color .14s linear 0s,background-color .14s linear 0s}.native-checkbox label:hover{color:var(--wje-color-contrast-highest)}.native-checkbox label:before{border-radius:3px;transition:border .14s linear 0s,color .14s linear 0s,background-color .14s linear 0s}.native-checkbox input[type=checkbox]{position:absolute;margin:0;z-index:-1;width:16px;height:16px;opacity:0;display:none}.native-checkbox input[type=checkbox]+label:after{content:"";position:absolute;left:0;border-right:0 solid transparent;border-bottom:0 solid transparent;width:16px;height:16px;overflow:hidden}.native-checkbox.checkbox-circle label:after{border-radius:99px}.native-checkbox.checkbox-circle label:before{border-radius:99px}.native-checkbox input[type=checkbox]:checked+label:after{content:"";background:var(--wje-grey-check-icon);background-size:160px 16px;background-repeat:no-repeat;animation-name:checkbox-check;animation-duration:.32s;animation-timing-function:steps(9);animation-fill-mode:forwards;animation-iteration-count:1}.native-checkbox input[type=checkbox]:hover:active:not(:checked)+label:before{background-color:#00000014}.native-checkbox input[type=checkbox]:focus+label{color:var(--wje-color-contrast-highest)}.native-checkbox input[type=checkbox]:focus+label:before{outline:none!important;box-shadow:#78c8fe 0 0}.native-checkbox input[type=checkbox][disabled]+label{cursor:not-allowed!important;color:var(--wje-color-contrast-high);opacity:.58}.native-checkbox input[type=checkbox][disabled]+label:before{cursor:not-allowed!important;background:#ececec}.native-checkbox input[type=checkbox]:indeterminate+label:after{background:none;background-color:var(--wje-color-contrast-high);width:10px;height:2px;top:6px;margin:3px;border-radius:2px}.native-checkbox.right label{padding-left:0;padding-right:26px}.native-checkbox.right label:before{right:0;left:auto}.native-checkbox.right input[type=checkbox]:checked+label{position:relative}.native-checkbox.right input[type=checkbox]:checked+label:after{position:absolute;right:0;left:auto}.success :is(input[type=checkbox]:checked+label):before,.success :is(input[type=checkbox]:indeterminate+label):before{border-color:var(--wje-color-success);background-color:var(--wje-color-success)}.primary :is(input[type=checkbox]:checked+label):before,.primary :is(input[type=checkbox]:indeterminate+label):before{border-color:var(--wje-color-primary);background-color:var(--wje-color-primary)}.complete :is(input[type=checkbox]:checked+label):before,.complete :is(input[type=checkbox]:indeterminate+label):before{border-color:var(--wje-color-complete);background-color:var(--wje-color-complete)}.warning :is(input[type=checkbox]:checked+label):before,.warning :is(input[type=checkbox]:indeterminate+label):before{border-color:var(--wje-color-warning);background-color:var(--wje-color-warning)}.danger :is(input[type=checkbox]:checked+label):before,.danger :is(input[type=checkbox]:indeterminate+label):before{border-color:var(--wje-color-danger);background-color:var(--wje-color-danger)}.info :is(input[type=checkbox]:checked+label):before,.info :is(input[type=checkbox]:indeterminate+label):before{border-color:var(--wje-color-info);background-color:var(--wje-color-info)}.info :is(input[type=checkbox]:checked+label):after,.danger :is(input[type=checkbox]:checked+label):after,.complete :is(input[type=checkbox]:checked+label):after,.primary :is(input[type=checkbox]:checked+label):after,.success :is(input[type=checkbox]:checked+label):after{background:var(--wje-white-check-icon)}.info :is(input[type=checkbox]:indeterminate+label):after,.danger :is(input[type=checkbox]:indeterminate+label):after,.complete :is(input[type=checkbox]:indeterminate+label):after,.primary :is(input[type=checkbox]:indeterminate+label):after,.success :is(input[type=checkbox]:indeterminate+label):after{background-color:var(--wje-color-contrast-lowest)}@keyframes shrink-bounce{0%{transform:scale(1)}33%{transform:scale(.85)}to{transform:scale(1)}}@keyframes checkbox-check{0%{background-position:0}to{background-position:-144px}}.js-focus-visible .native-checkbox input[type=checkbox]:focus:not(.focus-visible)+label:before{box-shadow:none}input[type=checkbox]{accent-color:var(--wje-color-primary)!important;font-size:50px}';
class p extends b {
  /**
   * Checkbox constructor.
   */
  constructor() {
    super();
    /**
     * The class name.
     */
    l(this, "className", "Checkbox");
  }
  /**
   * @summary Set checked attribute
   * @returns {boolean} true if the toggle is checked, false otherwise
   */
  set disabled(e) {
    e ? this.setAttribute("disabled", "") : this.removeAttribute("disabled");
  }
  /**
   * @summary Get disabled attribute
   * @returns {boolean} true if the toggle is disabled, false otherwise
   */
  get disabled() {
    return this.hasAttribute("disabled");
  }
  /**
  * @summary Set checked attribute
  * @returns {boolean} true if the toggle is checked, false otherwise
  */
  set checked(e) {
    e ? this.setAttribute("checked", "") : this.removeAttribute("checked");
  }
  /**
   * @summary Get checked attribute
   * @returns {boolean} true if the toggle is checked, false otherwise
   */
  get checked() {
    return this.hasAttribute("checked");
  }
  /**
   * Getter for the CSS stylesheet.
   * @returns {string} The CSS stylesheet.
   */
  static get cssStyleSheet() {
    return d;
  }
  static get observedAttributes() {
    return ["checked", "disabled"];
  }
  /**
   * Sets up the attributes for the checkbox.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the checkbox.
   * @param {object} context - The context.
   * @param {object} store - The store.
   * @param {object} params - The parameters.
   * @returns {DocumentFragment} The created fragment.
   */
  draw(e, k, u) {
    let n = document.createDocumentFragment(), i = document.createElement("div");
    i.classList.add("native-checkbox"), this.variant === "circle" && i.classList.add("checkbox-circle"), this.color && i.classList.add(this.color);
    let o = document.createElement("input");
    o.type = "checkbox", o.id = "checkbox", o.name = this.name = "checkbox", o.checked = this.hasAttribute("checked"), o.disabled = this.hasAttribute("disabled"), o.indeterminate = this.hasAttribute("indeterminate");
    let r = document.createElement("label");
    return r.htmlFor = "checkbox", r.innerHTML = "<slot></slot>", i.appendChild(o), i.appendChild(r), this.input = o, n.appendChild(i), n;
  }
  /**
   * Adds an event listener after drawing the checkbox.
   */
  afterDraw() {
    this.disabled || (this.input.addEventListener("input", (e) => {
      this.checked = e.target.checked, a.dispatchCustomEvent(this, "wje-toggle:input");
    }), this.input.addEventListener("change", (e) => {
      this.checked = e.target.checked, a.dispatchCustomEvent(this, "wje-toggle:change");
    }));
  }
  /**
   * Handles the input event.
   * @param {Event} e - The event.
   */
  // inputEvent = (e) => {
  //     this.checked = this.input.checked;
  //     event.dispatchCustomEvent(this, "wje-checkbox:change");
  // }
  /**
   * Removes the event listener when the checkbox is disconnected.
   */
  disconnectedCallback() {
    a.removeElement(this.input);
  }
}
b.define("wje-checkbox", p);
export {
  p as default
};
