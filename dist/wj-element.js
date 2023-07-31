var A = Object.defineProperty;
var w = (h, e, t) => e in h ? A(h, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[e] = t;
var o = (h, e, t) => (w(h, typeof e != "symbol" ? e + "" : e, t), t);
import { P as y, d as p } from "./default-store-actions-ff3e8b0b.js";
class b {
  constructor(e = {}) {
    o(this, "findByKey", (e, t, s) => {
      if (this._store.getState()[e] instanceof Array)
        return this._store.getState()[e].find((i) => i[t] == s);
      console.warn(` Attribute ${e} is not array`);
    });
    o(this, "findById", (e, t) => {
      if (this._store.getState()[e] instanceof Array)
        return this._store.getState()[e].find((r) => r.id == t);
      console.warn(` Attribute ${e} is not array`);
    });
    o(this, "findAttributeValue", (e) => this._store.getState()[e]);
    o(this, "update", (e, t) => {
      this._store.dispatch(t(e));
    });
    o(this, "add", (e, t) => {
      this._store.dispatch(t(e));
    });
    o(this, "loadPromise", (e, t, s = "GET", r, i = () => {
    }) => fetch(e, {
      method: s,
      body: r,
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      async: !0,
      referrerPolicy: "same-origin"
    }).then((n, a) => {
      var d;
      let l = (d = n.headers.get("permissions")) == null ? void 0 : d.split(",");
      if (i(l), n.ok)
        return n.json();
      throw n.json();
    }).then((n) => (this._store.dispatch(t(n)), n)));
    o(this, "loadOnePromise", (e, t) => fetch(e, {
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      referrerPolicy: "same-origin"
    }).then((s) => (s = s.json(), t && this._store.dispatch(t(s)), s)));
    o(this, "load", (e, t = !1) => $.ajax({
      method: "GET",
      url: e,
      async: t,
      dataType: "json"
    }));
    this._store = e.store, this.premenna = null;
  }
  _save(e, t, s, r, i) {
    let n = fetch(e, {
      method: i,
      body: JSON.stringify(t),
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      referrerPolicy: "same-origin"
    }).then((a) => (a.ok, a.json()));
    return this.dispatch(n, r, s);
  }
  _get(e, t, s) {
    let r = fetch(e, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      referrerPolicy: "same-origin"
    }).then(async (i) => {
      let n;
      try {
        let a = await i.text();
        return JSON.parse(a);
      } catch {
        return n;
      }
    });
    return this.dispatch(r, s, t);
  }
  put(e, t, s, r = !0) {
    return this._save(e, t, s, r, "PUT");
  }
  post(e, t, s, r = !0) {
    return this._save(e, t, s, r, "POST");
  }
  delete(e, t, s, r = !0) {
    return this._save(e, t, s, r, "DELETE");
  }
  get(e, t, s = !0) {
    return this._get(e, t, s);
  }
  dispatch(e, t, s) {
    return t ? e.then((r) => (this._store.dispatch(s(r.data)), r)).catch((r) => {
      console.error(r);
    }) : e;
  }
}
class S {
  constructor(e = {}) {
    o(this, "_state");
    o(this, "_reducer");
    o(this, "events");
    o(this, "status");
    this._isPause = !1, this._state = {}, this._reducer = function(s = {}, r) {
      return {};
    }, this.status = "resting", this.events = new y(), e != null && e.hasOwnProperty("reducer") && (this._reducer = e.reducer), this.refreshProxy(e == null ? void 0 : e.state);
  }
  /**
   * A dispatcher for actions that looks in the actions 
   * collection and runs the action if it can find it
   *
   * @param {string} actionKey
   * @param {mixed} payload
   * @returns {boolean}
   * @memberof Store
   */
  dispatch(e) {
    this.status = "action";
    let t = this._reducer(this._state, e);
    return this.status = "mutation", this._state = Object.assign(this._state, t), !0;
  }
  getState() {
    return JSON.parse(JSON.stringify(this._state));
  }
  subscribe(e, t) {
    return this.events.subscribe(e, t);
  }
  unsubscribe(e) {
    console.log(this), delete this.events[e];
  }
  pause() {
    return this._isPause = !0, this;
  }
  play(e) {
    return this._isPause = !1, this;
  }
  mergeReducers(e, t) {
    let s = this._reducer;
    this._reducer = (r, i) => ({
      ...s(r, i),
      [e]: t(r[e], i)
    });
  }
  makeEveryArrayEntryAsStoreState(e, t = [], s = "id") {
    t.forEach((r) => {
      this.getState().hasOwnProperty(`${e}-${r[s]}`) ? this.dispatch(p.updateAction(`${e}-${r[s]}`)(r)) : this.define(`${e}-${r.id || r.source || r[s]}`, r, null, s);
    });
  }
  define(e, t, s, r = "id") {
    if (this._state.hasOwnProperty(e)) {
      console.warn(`STATE už obsahuje premennú ${e},ktorú sa pokúšate pridať`);
      return;
    }
    s instanceof Function ? this.mergeReducers(e, s) : t instanceof Array ? this.mergeReducers(e, this.createArrayReducer(e, r)) : this.mergeReducers(e, this.createObjectReducer(e, r)), this.refreshProxy({
      ...this._state,
      [e]: t
    });
  }
  refreshProxy(e) {
    this._state = new Proxy(e || {}, {
      set: (t, s, r) => {
        if (JSON.stringify(t[s]) === JSON.stringify(r))
          return !0;
        let i = t[s];
        return t[s] = r, this._isPause || this.events.publish(s, this._state, i), this.status !== "mutation" && console.warn(`You should use a mutation to set ${s}`), this.status = "resting", !0;
      }
    });
  }
  createObjectReducer(e) {
    return (t = {}, s) => {
      switch (s.type) {
        case `${e}/ADD`:
          return {
            ...s.payload
          };
        case `${e}/UPDATE`:
          return {
            ...t,
            ...s.payload
          };
        case `${e}/DELETE`:
          return {};
        default:
          return t;
      }
    };
  }
  createArrayReducer(e, t) {
    return (s = [], r) => {
      switch (r.type) {
        case `${e}/ADD`:
          return Array.isArray(r.payload) ? [
            ...s,
            ...r.payload
          ] : [
            ...s,
            r.payload
          ];
        case `${e}/ADD_MANY`:
          return [
            ...s,
            ...r.payload
          ];
        case `${e}/UPDATE`:
          return s.some((i) => i[t] == r.payload[t]) ? [
            ...s.map((i) => i[t] == r.payload[t] ? r.payload : i)
          ] : [
            ...s,
            r.payload
          ];
        case `${e}/DELETE`:
          return [
            ...s.filter((i) => i.hasOwnProperty(t) && i[t] != r.payload[t] || !i.hasOwnProperty(t) && i != r.payload)
          ];
        case `${e}/LOAD`:
          return [
            ...r.payload
          ];
        default:
          return s;
      }
    };
  }
}
let f = new S();
class c {
  constructor() {
  }
  static get permissions() {
    return [
      ...intranet.storage().getItem("permissions", "settings") || [],
      ...intranet.storage().getItem("globalPermissions", "settings") || []
    ];
  }
  static includesKey(e) {
    return c.permissions.includes(e);
  }
  static getKeys() {
    let e = [];
    return this.hasAttribute("permission-check") && (e = this.getAttribute("permission-check").split(",")), e;
  }
  static shouldShow() {
    return this.hasAttribute("show") && JSON.parse(this.getAttribute("show"));
  }
  static isPermissionFulfilled() {
    return c.getKeys.bind(this)().some((e) => c.permissions.includes(e)) || c.shouldShow.bind(this)();
  }
}
class u {
  constructor() {
  }
  /**
   *
   * @param element : HTMLElement
   * @param object : Object
   */
  static setAttributesToElement(e, t) {
    Object.entries(t).forEach(([s, r]) => {
      e.setAttribute(s, r);
    });
  }
  /** @function getAttributes
   * @description Vráti všetky atributy elementu v poli
   * @return (array)
   */
  static getAttributes(e) {
    return typeof e == "string" && (e = document.querySelector(e)), Array.from(e.attributes).map((t) => [t.name.split("-").map((s, r) => r != 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s).join(""), t.value]).reduce((t, s) => (t[s[0]] = s[1], t), {});
  }
}
const m = document.createElement("template");
m.innerHTML = "";
class g extends HTMLElement {
  constructor(t) {
    super();
    o(this, "initWjElement", async (t = !1) => {
      var r;
      this.functionStack = [];
      const s = Date.now();
      if (this.functionStack.push(s), (r = this.setupAttributes) == null || r.call(this), this.isShadowRoot && !this.shadowRoot && this.attachShadow({ mode: this.shadowType || "open" }), this.constructor.CSS) {
        let i = this.constructor.CSS();
        Array.isArray(i) ? await Promise.all(i.map((n) => WjImport.call(this, n))).then() : WjImport.call(this, i);
      }
      this.setUpAccessors(), this.drawingStatus = "BEGINING", this.display(t, s);
    });
    this.template = t || m, this._attributes = {}, this.isAttached = !1, this.service = new b({
      store: f
    }), this.rendering = !1, this.runtimeTimeout = null, this.generatedTooltips = [], this.count = 0, this.functionStack = [], this.scheludedRefresh = !1;
  }
  get permission() {
    return this.getAttribute("permission-check");
  }
  get isPermissionCheck() {
    return this.hasAttribute("permission-check");
  }
  set isPermissionCheck(t) {
    return this.setAttribute("permission-check", "permission-check");
  }
  get isShow() {
    return this.hasAttribute("show");
  }
  get isShadowRoot() {
    return this.hasAttribute("shadow");
  }
  set isShadowRoot(t) {
    return this.setAttribute("shadow", t);
  }
  get shadowType() {
    return this.getAttribute("shadow") || "open";
  }
  get context() {
    return this.isShadowRoot ? this.shadowRoot : this;
  }
  get store() {
    return f;
  }
  get defaultStoreActions() {
    return p;
  }
  get removeClassAfterConnect() {
    var t;
    return (t = this.getAttribute("remove-class-after-connect")) == null ? void 0 : t.split(" ");
  }
  beforeDraw() {
  }
  afterDraw() {
  }
  makeRuntimeTimeout(t = () => {
  }) {
    return setTimeout(() => {
      t();
    }, 0);
  }
  refreshUpdatePromise() {
    this.updateComplete = new Promise((t, s) => {
      this.finisPromise = t, this.rejectPromise = s;
    });
  }
  async connectedCallback() {
    this.finisPromise = (t) => {
      t();
    }, this.rejectPromise = (t) => {
      t();
    }, this.refreshUpdatePromise(), await this.initWjElement(!0);
  }
  setupAttributes() {
  }
  beforeDisconnect() {
  }
  disconnectedCallback() {
    var t, s;
    for ((t = this.beforeDisconnect) == null || t.call(this), this.isAttached && (this.context.innerHTML = ""), this.isAttached = !1; this.generatedTooltips.length; ) {
      let r = this.generatedTooltips.pop();
      r == null || r.hide(), r == null || r.remove();
    }
    (s = this.afterDisconnect) == null || s.call(this);
  }
  /**
   * Lifecycle method, called whenever an observed property changes
   */
  attributeChangedCallback(t, s, r) {
    if (!this.isAttached && s !== r) {
      this.scheludedRefresh = !0;
      return;
    }
    s !== r && this.refresh();
  }
  async refresh() {
    var t;
    this.refreshUpdatePromise(), this.drawingStatus != "AFTER" ? ((t = this.afterDisconnect) == null || t.call(this), await this.initWjElement(!0)) : await this.initWjElement(!0);
  }
  /**
   * To be implemented by the child class
   */
  draw(t, s, r) {
    return null;
  }
  display(t = !1, s) {
    this.isProcessingFlow(s) || (t && ([...this.context.children].forEach(this.context.removeChild.bind(this.context)), this.isAttached = !1), this.isAttached && console.log("Already rendered...", this), this.context.append(this.template.content.cloneNode(!0)), this.isPermissionCheck || this.isShow ? c.isPermissionFulfilled.bind(this)(this.permission) ? this._resolveRender(s) : this.remove() : this._resolveRender(s));
  }
  render(t) {
    if (this.drawingStatus = "DRAWING", this.isProcessingFlow(t))
      return;
    let s = this.draw(this.context, this.store, u.getAttributes(this)) || "", r;
    if (s instanceof HTMLElement || s instanceof DocumentFragment)
      r = s;
    else {
      let n = document.createElement("template");
      n.innerHTML = s, r = n.content.cloneNode(!0);
    }
    let i = r;
    this.isProcessingFlow(t) || this.context.appendChild(i);
  }
  /**
   * Turns a string split with "-" into camel case notation
   */
  sanitizeName(t) {
    let s = t.split("-");
    return [s.shift(), ...s.map((r) => r[0].toUpperCase() + r.slice(1))].join("");
  }
  /**
   * Creates one property on this class for every
   * HTML property defined on the element
   */
  setUpAccessors() {
    this.getAttributeNames().forEach((s) => {
      const r = this.sanitizeName(s);
      this[r] == null && Object.defineProperty(this, r, {
        set: (i) => this.setAttribute(s, i),
        get: (i) => this.getAttribute(s)
      });
    });
  }
  isProcessingFlow(t) {
    return !this.functionStack.find((s) => s == t);
  }
  _resolveRender(t) {
    this.isProcessingFlow(t) || (this.params = u.getAttributes(this), Promise.resolve(this.beforeDraw(this.context, this.store, u.getAttributes(this))).then((s) => {
      var r;
      this.drawingStatus = "BEFORE", this.render(t), !this.isProcessingFlow(t) && Promise.resolve((r = this.afterDraw) == null ? void 0 : r.call(this, this.context, this.store, u.getAttributes(this))).then(
        (i, n, a) => {
          this.drawingStatus = "AFTER", this.finisPromise(), this.tooltip(), this.rendering = !1, this.isAttached = !0, this.removeClassAfterConnect && this.classList.remove(...this.removeClassAfterConnect), this.scheludedRefresh && (this.refresh(), this.scheludedRefresh = !1);
        }
      );
    }));
  }
  tooltip() {
    for (; this.generatedTooltips.length; ) {
      let t = this.generatedTooltips.pop();
      t == null || t.hide(), t == null || t.remove();
    }
    this.context.querySelectorAll("[wj-tooltip]").forEach((t) => {
    });
  }
}
o(g, "processTemplates", (t, s) => {
  const r = document.createElement("template");
  return r.innerHTML = [s.innerHTML, (t == null ? void 0 : t.innerHTML) || ""].join(""), r;
});
let E = "true";
customElements.get("wj-element") || customElements.define("wj-element", g);
export {
  u as WjElementUtils,
  c as WjPermissionsApi,
  E as __esModule,
  g as default
};
