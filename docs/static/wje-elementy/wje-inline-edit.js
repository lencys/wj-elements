var h = Object.defineProperty;
var r = (s, n, t) => n in s ? h(s, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[n] = t;
var a = (s, n, t) => (r(s, typeof n != "symbol" ? n + "" : n, t), t);
import l from "./wje-element.js";
const u = ":host{cursor:pointer;overflow:hidden;@keyframes wjFade{0%{display:flex}to{display:none}}}:host .heading{z-index:1;display:flex;align-items:center;position:relative;min-height:34px}:host .heading .edit{margin-left:.5rem;opacity:0}:host .heading:hover .edit{opacity:1}:host .heading h5{margin:0;width:calc(100% - 50px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host form{align-items:center;border-radius:3px!important;margin:0 1rem 0 0;display:flex}:host form.open{z-index:9}:host form .buttons{display:flex;margin:0 0 0 .5rem}:host .fade-out{display:none}:host .fade-in{display:flex}";
class o extends l {
  constructor() {
    super();
    a(this, "className", "InfiniteScroll");
  }
  get title() {
    return this.getAttribute("title");
  }
  set title(t) {
    return this.setAttribute("title", t);
  }
  get notEditable() {
    return this.hasAttribute("not-editable");
  }
  set notEditable(t) {
    return this.setAttribute("not-editable", "");
  }
  get endpoint() {
    return this.getAttribute("endpoint");
  }
  set endpoint(t) {
    return this.setAttribute("endpoint", t);
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return u;
  }
  /**
   * Returns the list of attributes to observe for changes.
   *
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, e, d) {
    console.log("Draw", this.notEditable, !this.notEditable);
    let i = document.createDocumentFragment();
    return this.heading = document.createElement("div"), this.heading.classList.add("heading"), this.h5 = document.createElement("h5"), this.h5.innerHTML = this.title, this.heading.appendChild(this.h5), i.appendChild(this.heading), this.notEditable || (console.log("VOJDEM TU"), this.span = document.createElement("span"), this.span.classList.add("edit", "text-primary"), this.span.innerHTML = "Upraviť", this.form = document.createElement("form"), this.form.classList.add("fade-out"), this.input = this.inputElement(), this.buttons = document.createElement("div"), this.buttons.classList.add("buttons", "btn-group"), this.buttonSave = document.createElement("button"), this.buttonSave.classList.add("btn", "btn-primary"), this.buttonSave.setAttribute("type", "button"), this.buttonSave.innerHTML = '<i class="fa-light fa-check"></i>', this.buttonClose = document.createElement("button"), this.buttonClose.classList.add("btn", "btn-default", "btn-close"), this.buttonClose.setAttribute("type", "button"), this.buttonClose.innerHTML = '<i class="fa-light fa-xmark"></i>', this.heading.appendChild(this.span), this.buttons.appendChild(this.buttonSave), this.buttons.appendChild(this.buttonClose), this.form.appendChild(this.input), this.form.appendChild(this.buttons), i.appendChild(this.form)), i;
  }
  afterDraw(t, e, d) {
    this.notEditable || (this.heading.addEventListener("click", (i) => {
      this.form.classList.add("open", "fade-in"), this.heading.classList.remove("fade-in"), this.heading.classList.add("fade-out");
    }), this.buttonClose.addEventListener("click", (i) => {
      i.preventDefault(), i.stopImmediatePropagation(), i.stopPropagation(), this.form.classList.remove("open", "fade-in"), this.heading.classList.remove("fade-out"), this.heading.classList.add("fade-in");
    }), this.buttonSave.addEventListener("click", (i) => {
      this.endpoint === null ? this.dispatchEdit(this.input.value) : this.save(this.input.value);
    }));
  }
  inputElement() {
    let t = document.createElement("input");
    return t.type = "text", t.placeholder = this.title, t.value = this.title, t.classList.add("form-control", "input-sm"), t;
  }
  save(t) {
    return fetch(this.endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: t
    }).then((e) => e.ok ? e.json() : e.text).then((e) => {
      this.title = e.data, this.refresh(), intranet.notification(e), this.dispatchResponse(e.data);
    }).catch((e) => {
      intranet.notification(e), this.dispatchError(e);
    });
  }
  dispatchEdit(t) {
    document.dispatchEvent(
      new CustomEvent("wje-inline-edit-save", {
        bubbles: !0,
        detail: {
          value: t,
          element: this
        }
      })
    );
  }
  dispatchResponse(t) {
    document.dispatchEvent(
      new CustomEvent("wje-inline-edit-response", {
        bubbles: !0,
        detail: {
          value: t,
          element: this
        }
      })
    );
  }
  dispatchError(t) {
    document.dispatchEvent(
      new CustomEvent("wje-inline-edit-error", {
        bubbles: !0,
        detail: {
          value: t,
          element: this
        }
      })
    );
  }
}
o.define("wje-inline-edit", o);
export {
  o as default
};
