var A = Object.defineProperty;
var v = (h, e, t) => (e in h ? A(h, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (h[e] = t));
var a = (h, e, t) => (v(h, typeof e != 'symbol' ? e + '' : e, t), t),
  P = (h, e, t) => {
    if (!e.has(h)) throw TypeError('Cannot ' + t);
  };
var b = (h, e, t) => {
  if (e.has(h)) throw TypeError('Cannot add the same private member more than once');
  e instanceof WeakSet ? e.add(h) : e.set(h, t);
};
var p = (h, e, t) => (P(h, e, 'access private method'), t);
import { store as w, defaultStoreActions as C } from './wje-store.js';
class j {
  constructor(e = {}) {
    a(this, 'findByKey', (e, t, s) => {
      if (this._store.getState()[e] instanceof Array) return this._store.getState()[e].find((n) => n[t] == s);
      console.warn(` Attribute ${e} is not array`);
    });
    a(this, 'findById', (e, t) => {
      if (this._store.getState()[e] instanceof Array) return this._store.getState()[e].find((i) => i.id == t);
      console.warn(` Attribute ${e} is not array`);
    });
    a(this, 'findAttributeValue', (e) => this._store.getState()[e]);
    a(this, 'update', (e, t) => {
      this._store.dispatch(t(e));
    });
    a(this, 'add', (e, t) => {
      this._store.dispatch(t(e));
    });
    a(this, 'loadPromise', (e, t, s = 'GET', i, n = () => {}) =>
      fetch(e, {
        method: s,
        body: i,
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        async: !0,
        referrerPolicy: 'same-origin',
      })
        .then((r, o) => {
          var y;
          let m = (y = r.headers.get('permissions')) == null ? void 0 : y.split(',');
          if ((n(m), r.ok)) return r.json();
          throw r.json();
        })
        .then((r) => (this._store.dispatch(t(r)), r))
    );
    a(this, 'loadOnePromise', (e, t) =>
      fetch(e, {
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        referrerPolicy: 'same-origin',
      }).then((s) => ((s = s.json()), t && this._store.dispatch(t(s)), s))
    );
    a(this, 'load', (e, t = !1) =>
      $.ajax({
        method: 'GET',
        url: e,
        async: t,
        dataType: 'json',
      })
    );
    (this._store = e.store), (this.premenna = null);
  }
  _save(e, t, s, i, n) {
    let r = fetch(e, {
      method: n,
      body: JSON.stringify(t),
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      referrerPolicy: 'same-origin',
    }).then((o) => (o.ok, o.json()));
    return this.dispatch(r, i, s);
  }
  _get(e, t, s) {
    let i = fetch(e, {
      method: 'GET',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      referrerPolicy: 'same-origin',
    }).then(async (n) => {
      let r;
      try {
        let o = await n.text();
        return JSON.parse(o);
      } catch {
        return r;
      }
    });
    return this.dispatch(i, s, t);
  }
  put(e, t, s, i = !0) {
    return this._save(e, t, s, i, 'PUT');
  }
  post(e, t, s, i = !0) {
    return this._save(e, t, s, i, 'POST');
  }
  delete(e, t, s, i = !0) {
    return this._save(e, t, s, i, 'DELETE');
  }
  get(e, t, s = !0) {
    return this._get(e, t, s);
  }
  dispatch(e, t, s) {
    return t
      ? e
          .then((i) => (this._store.dispatch(s(i.data)), i))
          .catch((i) => {
            console.error(i);
          })
      : e;
  }
}
class c {
  constructor() {}
  static get permissions() {
    return [
      ...(intranet.storage().getItem('permissions', 'settings') || []),
      ...(intranet.storage().getItem('globalPermissions', 'settings') || []),
    ];
  }
  static includesKey(e) {
    return c.permissions.includes(e);
  }
  static getKeys() {
    let e = [];
    return this.hasAttribute('permission-check') && (e = this.getAttribute('permission-check').split(',')), e;
  }
  static shouldShow() {
    return this.hasAttribute('show') && JSON.parse(this.getAttribute('show'));
  }
  static isPermissionFulfilled() {
    return (
      c.getKeys
        .bind(this)()
        .some((e) => c.permissions.includes(e)) || c.shouldShow.bind(this)()
    );
  }
}
class u {
  constructor() {}
  /**
   *
   * @param element : HTMLElement
   * @param object : Object
   */
  static setAttributesToElement(e, t) {
    Object.entries(t).forEach(([s, i]) => {
      e.setAttribute(s, i);
    });
  }
  /** @function getAttributes
   * @description Vráti všetky atributy elementu v poli
   * @return (array)
   */
  static getAttributes(e) {
    return (
      typeof e == 'string' && (e = document.querySelector(e)),
      Array.from(e.attributes)
        .filter((t) => !t.name.startsWith('@'))
        .map((t) => [
          t.name
            .split('-')
            .map((s, i) => (i != 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s))
            .join(''),
          t.value,
        ])
        .reduce((t, s) => ((t[s[0]] = s[1]), t), {})
    );
  }
  static getEvents(e) {
    return (
      typeof e == 'string' && (e = document.querySelector(e)),
      Array.from(e.attributes)
        .filter((t) => t.name.startsWith('@wje'))
        .map((t) => [t.name.substring(3).split('-').join(''), t.value])
        .reduce((t, s) => (t.set(s[0], s[1]), t), /* @__PURE__ */ new Map())
    );
  }
  static attributesToString(e) {
    return Object.entries(e)
      .map(([t, s]) => `${t}="${s}"`)
      .join(' ');
  }
  static hasSlot(e, t = null) {
    let s = t ? `[slot="${t}"]` : '[slot]';
    return e.querySelectorAll(s).length > 0;
  }
  static stringToBoolean(e) {
    return !['false', '0', 0].includes(e);
  }
}
var l, d, g;
class T {
  constructor() {
    b(this, d);
    (this.customEventStorage = []), (l = this);
  }
  dispatchCustomEvent(e, t, s) {
    e.dispatchEvent(
      new CustomEvent(t, {
        detail: s || {
          context: e,
          event: l,
        },
        bubbles: !0,
        composed: !0,
      })
    );
  }
  findRecordByElement(e) {
    for (var t = 0, s = this.customEventStorage.length; t < s; t++) {
      var i = this.customEventStorage[t];
      if (e == i.element) return i;
    }
    return !1;
  }
  addListener(e, t, s, i, n) {
    e &&
      (Array.isArray(e) || (e = [e]),
      e.forEach((r) => {
        this.writeRecord(r, t, s, i, n);
      }));
  }
  writeRecord(e, t, s, i, n) {
    let r = this.findRecordByElement(e);
    r
      ? (r.listeners[t] = r.listeners[t] || [])
      : ((r = {
          element: e,
          listeners: {},
        }),
        (r.listeners[t] = []),
        this.customEventStorage.push(r)),
      (i = i || p(this, d, g));
    let o = {
      listener: i,
      options: n,
      event: s,
    };
    this.listenerExists(e, t, o) || (r.listeners[t].push(o), e.addEventListener(t, i));
  }
  listenerExists(e, t, s) {
    return this.findRecordByElement(e).listeners[t].some((n) => JSON.stringify(n) === JSON.stringify(s));
  }
  removeListener(e, t, s, i, n) {
    let r = this.findRecordByElement(e);
    if (r && t in r.listeners) {
      var o = r.listeners[t].indexOf(i);
      ~o && r.listeners[t].splice(o, 1), r.listeners[t].length || delete r.listeners[t];
    }
    (i = i || p(this, d, g)), e.removeEventListener(t, i, n);
  }
  removeElement(e) {
    this.customEventStorage = this.customEventStorage.filter((t) => {
      if (t.element !== e) return t;
    });
  }
}
(d = new WeakSet()),
  (g = function (e) {
    let t = this;
    l.findRecordByElement(t).listeners[e.type].forEach((n, r) => {
      l.dispatchCustomEvent(t, n.event, {
        originalEvent: (e == null ? void 0 : e.type) || null,
        context: t,
        event: l,
      }),
        n.options && n.options.stopPropagation === !0 && e.stopPropagation();
    });
  });
let _ = new T();
const E = document.createElement('template');
E.innerHTML = '';
const f = class f extends HTMLElement {
  constructor(t) {
    super();
    a(this, 'initWjElement', async (t = !1) => {
      var n;
      this.functionStack = [];
      const s = Date.now();
      this.functionStack.push(s),
        (n = this.setupAttributes) == null || n.call(this),
        this.isShadowRoot && !this.shadowRoot && this.attachShadow({ mode: this.shadowType || 'open' }),
        this.setUpAccessors(),
        (this.drawingStatus = 'BEGINING'),
        this.display(t, s);
      const i = new CSSStyleSheet();
      i.replaceSync(this.constructor.cssStyleSheet), (this.context.adoptedStyleSheets = [i]);
    });
    (this.template = t || E),
      (this.isAttached = !1),
      (this.service = new j({
        store: w,
      })),
      this.definedependencies(),
      (this.rendering = !1),
      (this.runtimeTimeout = null),
      (this.count = 0),
      (this.functionStack = []),
      (this.scheludedRefresh = !1),
      (this._dependencies = {});
  }
  get permission() {
    return this.getAttribute('permission-check');
  }
  get isPermissionCheck() {
    return this.hasAttribute('permission-check');
  }
  set isPermissionCheck(t) {
    return this.setAttribute('permission-check', 'permission-check');
  }
  get isShow() {
    return this.hasAttribute('show');
  }
  get isShadowRoot() {
    return this.hasAttribute('shadow');
  }
  set isShadowRoot(t) {
    return this.setAttribute('shadow', t);
  }
  get shadowType() {
    return this.getAttribute('shadow') || 'open';
  }
  get context() {
    return this.isShadowRoot ? this.shadowRoot : this;
  }
  get store() {
    return w;
  }
  // addAction,
  // deleteAction,
  // loadAction,
  // updateAction,
  // addManyAction
  /**
   * @typedef {Object} ArrayActions
   * @property {function} addAction - Indicates whether the Courage component is present.
   * @property {function} deleteAction - Indicates whether the Power component is present.
   * @property {function} loadAction - Indicates whether the Wisdom component is present.
   * @property {function} updateAction - Indicates whether the Wisdom component is present.
   */
  /**
   * @typedef {Object} ObjectActions
   * @property {function} addAction - Indicates whether the Courage component is present.
   * @property {function} deleteAction - Indicates whether the Power component is present.
   * @property {function} updateAction - Indicates whether the Wisdom component is present.
   */
  /**
   * @return {ArrayActions, ObjectActions}
   */
  get defaultStoreActions() {
    return C;
  }
  get removeClassAfterConnect() {
    var t;
    return (t = this.getAttribute('remove-class-after-connect')) == null ? void 0 : t.split(' ');
  }
  get dependencies() {
    return this._dependencies;
  }
  set dependencies(t) {
    this._dependencies = t;
  }
  static define(t, s = this, i = {}) {
    if (!customElements.get(t)) {
      customElements.define(t, s, i);
      return;
    }
  }
  definedependencies() {
    this.dependencies && Object.entries(dependencies).forEach((t, s) => f.define(t, s));
  }
  beforeDraw() {}
  afterDraw() {}
  refreshUpdatePromise() {
    this.updateComplete = new Promise((t, s) => {
      (this.finisPromise = t), (this.rejectPromise = s);
    });
  }
  async connectedCallback() {
    (this.finisPromise = (t) => {
      t();
    }),
      (this.rejectPromise = (t) => {
        t();
      }),
      this.refreshUpdatePromise(),
      await this.initWjElement(!0);
  }
  setupAttributes() {
    console.log('Inner call of setupAttributes method...'),
      u.getEvents(this).forEach((s, i) => {
        this.addEventListener(i, (n) => {
          var r, o;
          (o = (r = this.getRootNode().host)[s]) == null || o.call(r);
        });
      });
  }
  beforeDisconnect() {}
  disconnectedCallback() {
    var t, s;
    (t = this.beforeDisconnect) == null || t.call(this),
      this.isAttached && (this.context.innerHTML = ''),
      (this.drawingStatus = 'DISCONNECTED'),
      (this.isAttached = !1),
      (s = this.afterDisconnect) == null || s.call(this);
  }
  /**
   * Lifecycle method, called whenever an observed property changes
   */
  attributeChangedCallback(t, s, i) {
    if (!this.isAttached && s !== i) {
      this.scheludedRefresh = !0;
      return;
    }
    s !== i && this.refresh();
  }
  async refresh() {
    var t, s;
    this.refreshUpdatePromise(),
      this.drawingStatus != 'AFTER'
        ? ((t = this.afterDisconnect) == null || t.call(this), await this.initWjElement(!0))
        : ((s = this.unregister) == null || s.call(this), await this.initWjElement(!0));
  }
  /**
   * To be implemented by the child class
   */
  draw(t, s, i) {
    return null;
  }
  display(t = !1, s) {
    this.isProcessingFlow(s) ||
      (t && ([...this.context.childNodes].forEach(this.context.removeChild.bind(this.context)), (this.isAttached = !1)),
      this.context.append(this.template.content.cloneNode(!0)),
      this.isPermissionCheck || this.isShow
        ? c.isPermissionFulfilled.bind(this)(this.permission)
          ? this._resolveRender(s)
          : this.remove()
        : this._resolveRender(s));
  }
  async render(t) {
    (this.drawingStatus = 'DRAWING'),
      !this.isProcessingFlow(t) &&
        (await Promise.resolve(this.draw(this.context, this.store, u.getAttributes(this))).then((s) => {
          let i = s || '',
            n;
          if (i instanceof HTMLElement || i instanceof DocumentFragment) n = i;
          else {
            let o = document.createElement('template');
            (o.innerHTML = i), (n = o.content.cloneNode(!0));
          }
          let r = n;
          this.isProcessingFlow(t) || this.context.appendChild(r);
        }));
  }
  /**
   * Turns a string split with "-" into camel case notation
   */
  sanitizeName(t) {
    let s = t.split('-');
    return [s.shift(), ...s.map((i) => i[0].toUpperCase() + i.slice(1))].join('');
  }
  /**
   * Creates one property on this class for every
   * HTML property defined on the element
   */
  setUpAccessors() {
    this.getAttributeNames().forEach((s) => {
      const i = this.sanitizeName(s);
      this[i] == null &&
        Object.defineProperty(this, i, {
          set: (n) => this.setAttribute(s, n),
          get: (n) => this.getAttribute(s),
        });
    });
  }
  isProcessingFlow(t) {
    return !this.functionStack.find((s) => s == t);
  }
  _resolveRender(t) {
    this.isProcessingFlow(t) ||
      ((this.params = u.getAttributes(this)),
      Promise.resolve(this.beforeDraw(this.context, this.store, u.getAttributes(this))).then((s) => {
        (this.drawingStatus = 'BEFORE'),
          Promise.resolve(this.render(t)).then((i) => {
            var n;
            this.isProcessingFlow(t) ||
              Promise.resolve(
                (n = this.afterDraw) == null ? void 0 : n.call(this, this.context, this.store, u.getAttributes(this))
              ).then((r, o, m) => {
                (this.drawingStatus = 'AFTER'),
                  this.finisPromise(),
                  (this.rendering = !1),
                  (this.isAttached = !0),
                  this.removeClassAfterConnect && this.classList.remove(...this.removeClassAfterConnect),
                  this.scheludedRefresh && (this.refresh(), (this.scheludedRefresh = !1));
              });
          });
      }));
  }
};
a(f, 'processTemplates', (t, s) => {
  const i = document.createElement('template');
  return (i.innerHTML = [s.innerHTML, (t == null ? void 0 : t.innerHTML) || ''].join('')), i;
});
let S = f,
  k = 'true';
export { u as WjElementUtils, c as WjePermissionsApi, k as __esModule, S as default, _ as event };
