var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { store, defaultStoreActions } from "./wj-store.js";
class UniversalService {
  constructor(props = {}) {
    __publicField(this, "findByKey", (attrName, key, keyValue) => {
      if (this._store.getState()[attrName] instanceof Array) {
        let find = this._store.getState()[attrName].find((item) => item[key] == keyValue);
        return find;
      } else {
        console.warn(` Attribute ${attrName} is not array`);
      }
    });
    __publicField(this, "findById", (attrName, id) => {
      if (this._store.getState()[attrName] instanceof Array) {
        let find = this._store.getState()[attrName].find((item) => item.id == id);
        return find;
      } else {
        console.warn(` Attribute ${attrName} is not array`);
      }
    });
    __publicField(this, "findAttributeValue", (attrName) => {
      return this._store.getState()[attrName];
    });
    __publicField(this, "update", (data, action) => {
      this._store.dispatch(action(data));
    });
    __publicField(this, "add", (data, action) => {
      this._store.dispatch(action(data));
    });
    __publicField(this, "loadPromise", (url, action, method = "GET", data, permissionCallBack = () => {
    }) => {
      return fetch(url, {
        method,
        body: data,
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json"
        },
        async: true,
        referrerPolicy: "same-origin"
      }).then((response, e) => {
        var _a;
        let permissions = (_a = response.headers.get("permissions")) == null ? void 0 : _a.split(",");
        permissionCallBack(permissions);
        if (response.ok) {
          return response.json();
        } else {
          throw response.json();
        }
      }).then((data2) => {
        this._store.dispatch(action(data2));
        return data2;
      });
    });
    __publicField(this, "loadOnePromise", (url, action) => {
      return fetch(url, {
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json"
        },
        referrerPolicy: "same-origin"
      }).then((data) => {
        data = data.json();
        if (action) {
          this._store.dispatch(action(data));
        }
        return data;
      });
    });
    __publicField(this, "load", (url, async = false) => {
      return $.ajax({
        method: "GET",
        url,
        async,
        dataType: "json"
      });
    });
    this._store = props.store;
    this.premenna = null;
  }
  _save(url, data, action, dispatchMethod, method) {
    let promise = fetch(url, {
      method,
      body: JSON.stringify(data),
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      referrerPolicy: "same-origin"
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json();
      }
    });
    return this.dispatch(promise, dispatchMethod, action);
  }
  _get(url, action, dispatchMethod) {
    let promise = fetch(url, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      referrerPolicy: "same-origin"
    }).then(async (response) => {
      let text;
      try {
        let text2 = await response.text();
        const data = JSON.parse(text2);
        return data;
      } catch (err) {
        return text;
      }
    });
    return this.dispatch(promise, dispatchMethod, action);
  }
  put(url, data, action, dispatchMethod = true) {
    return this._save(url, data, action, dispatchMethod, "PUT");
  }
  post(url, data, action, dispatchMethod = true) {
    return this._save(url, data, action, dispatchMethod, "POST");
  }
  delete(url, data, action, dispatchMethod = true) {
    return this._save(url, data, action, dispatchMethod, "DELETE");
  }
  get(url, action, dispatchMethod = true) {
    return this._get(url, action, dispatchMethod);
  }
  dispatch(promise, dispatchMethod, action) {
    if (dispatchMethod) {
      return promise.then((data) => {
        this._store.dispatch(action(data.data));
        return data;
      }).catch((error) => {
        console.error(error);
      });
    }
    return promise;
  }
}
class WjPermissionsApi {
  constructor() {
  }
  static get permissions() {
    return [
      ...intranet.storage().getItem("permissions", "settings") || [],
      ...intranet.storage().getItem("globalPermissions", "settings") || []
    ];
  }
  static includesKey(key) {
    return WjPermissionsApi.permissions.includes(key);
  }
  static getKeys() {
    let key = [];
    if (this.hasAttribute("permission-check")) {
      key = this.getAttribute("permission-check").split(",");
    }
    return key;
  }
  static shouldShow() {
    return this.hasAttribute("show") && JSON.parse(this.getAttribute("show"));
  }
  static isPermissionFulfilled() {
    return WjPermissionsApi.getKeys.bind(this)().some((perm) => WjPermissionsApi.permissions.includes(perm)) || WjPermissionsApi.shouldShow.bind(this)();
  }
}
class WjElementUtils {
  constructor() {
  }
  /**
   *
   * @param element : HTMLElement
   * @param object : Object
   */
  static setAttributesToElement(element, object) {
    Object.entries(object).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }
  /** @function getAttributes
   * @description Vráti všetky atributy elementu v poli
   * @return (array)
   */
  static getAttributes(el) {
    if (typeof el === "string")
      el = document.querySelector(el);
    return Array.from(el.attributes).filter((a) => !a.name.startsWith("@")).map((a) => [a.name.split("-").map((s, i) => {
      if (i != 0) {
        return s.charAt(0).toUpperCase() + s.slice(1);
      } else {
        return s;
      }
    }).join(""), a.value]).reduce((acc, attr) => {
      acc[attr[0]] = attr[1];
      return acc;
    }, {});
  }
  static getEvents(el) {
    if (typeof el === "string")
      el = document.querySelector(el);
    return Array.from(el.attributes).filter((a) => a.name.startsWith("@wj")).map((a) => [a.name.substring(3).split("-").join(""), a.value]).reduce((acc, attr) => {
      acc.set(attr[0], attr[1]);
      return acc;
    }, /* @__PURE__ */ new Map());
  }
  static attributesToString(object) {
    return Object.entries(object).map(([key, value]) => {
      return `${key}="${value}"`;
    }).join(" ");
  }
  static hasSlot(el, slotName = null) {
    let selector = slotName ? `[slot="${slotName}"]` : "[slot]";
    return el.querySelectorAll(selector).length > 0 ? true : false;
  }
  static stringToBoolean(string) {
    return !["false", "0", 0].includes(string);
  }
}
class WjEvent {
  constructor() {
    __publicField(this, "dispatch", (e) => {
      let element = e.target;
      let record = this.findRecordByElement(element);
      let listeners = record.listeners[e.type];
      listeners.forEach((listener, i) => {
        element.dispatchEvent(
          new CustomEvent(listener.event, {
            detail: {
              originalEvent: e.type,
              context: element,
              event: this
            },
            bubbles: true
          })
        );
      });
    });
    this.customEventStorage = [];
  }
  findRecordByElement(element) {
    for (var index = 0, length = this.customEventStorage.length; index < length; index++) {
      var record = this.customEventStorage[index];
      if (element == record.element) {
        return record;
      }
    }
    return false;
  }
  addListener(element, originalEvent, event2, listener, options) {
    var record = this.findRecordByElement(element);
    if (record) {
      record.listeners[originalEvent] = record.listeners[originalEvent] || [];
    } else {
      record = {
        element,
        listeners: {}
      };
      record.listeners[originalEvent] = [];
      this.customEventStorage.push(record);
    }
    listener = listener || this.dispatch;
    let obj = {
      listener,
      options,
      event: event2
    };
    if (!this.listenerExists(element, originalEvent, obj)) {
      record.listeners[originalEvent].push(obj);
      element.addEventListener(originalEvent, listener);
    }
  }
  listenerExists(element, event2, listener) {
    let record = this.findRecordByElement(element);
    return record.listeners[event2].some((e) => JSON.stringify(e) === JSON.stringify(listener));
  }
  removeListener(element, originalEvent, event2, listener, options) {
    let record = this.findRecordByElement(element);
    if (record && originalEvent in record.listeners) {
      var index = record.listeners[originalEvent].indexOf(listener);
      if (~index) {
        record.listeners[originalEvent].splice(index, 1);
      }
      if (!record.listeners[originalEvent].length) {
        delete record.listeners[originalEvent];
      }
    }
    listener = listener || this.dispatch;
    element.removeEventListener(originalEvent, listener, options);
  }
  removeElement(element) {
    this.customEventStorage = this.customEventStorage.filter((e) => {
      if (e.element !== element)
        return e;
    });
  }
}
let event = new WjEvent();
const template = document.createElement("template");
template.innerHTML = ``;
class WJElement extends HTMLElement {
  constructor(componentTemplate) {
    super();
    __publicField(this, "initWjElement", async (force = false) => {
      var _a;
      this.functionStack = [];
      const processId = Date.now();
      this.functionStack.push(processId);
      (_a = this.setupAttributes) == null ? void 0 : _a.call(this);
      if (this.isShadowRoot) {
        !this.shadowRoot && this.attachShadow({ mode: this.shadowType || "open" });
      }
      this.setUpAccessors();
      this.drawingStatus = "BEGINING";
      this.display(force, processId);
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(this.constructor.cssStyleSheet);
      this.context.adoptedStyleSheets = [sheet];
    });
    this.template = componentTemplate || template;
    this._attributes = {};
    this.isAttached = false;
    this.service = new UniversalService({
      store
    });
    this.rendering = false;
    this.runtimeTimeout = null;
    this.generatedTooltips = [];
    this.count = 0;
    this.functionStack = [];
    this.scheludedRefresh = false;
  }
  get permission() {
    return this.getAttribute("permission-check");
  }
  get isPermissionCheck() {
    return this.hasAttribute("permission-check");
  }
  set isPermissionCheck(shadow) {
    return this.setAttribute("permission-check", "permission-check");
  }
  get isShow() {
    return this.hasAttribute("show");
  }
  get isShadowRoot() {
    return this.hasAttribute("shadow");
  }
  set isShadowRoot(shadow) {
    return this.setAttribute("shadow", shadow);
  }
  get shadowType() {
    return this.getAttribute("shadow") || "open";
  }
  get context() {
    if (this.isShadowRoot) {
      return this.shadowRoot;
    } else {
      return this;
    }
  }
  get store() {
    return store;
  }
  //		addAction,
  //     deleteAction,
  //     loadAction,
  //     updateAction,
  //     addManyAction
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
    return defaultStoreActions;
  }
  get removeClassAfterConnect() {
    var _a;
    return (_a = this.getAttribute("remove-class-after-connect")) == null ? void 0 : _a.split(" ");
  }
  beforeDraw() {
  }
  afterDraw() {
  }
  makeRuntimeTimeout(callback = () => {
  }) {
    return setTimeout(() => {
      callback();
    }, 0);
  }
  refreshUpdatePromise() {
    this.updateComplete = new Promise((resolve, reject) => {
      this.finisPromise = resolve;
      this.rejectPromise = reject;
    });
  }
  async connectedCallback() {
    this.finisPromise = (resolve) => {
      resolve();
    };
    this.rejectPromise = (reject) => {
      reject();
    };
    this.refreshUpdatePromise();
    await this.initWjElement(true);
  }
  setupAttributes() {
    let allEvents = WjElementUtils.getEvents(this);
    allEvents.forEach((customEvent, domEvent) => {
      this.addEventListener(domEvent, (e) => {
        var _a, _b;
        (_b = (_a = this.getRootNode().host)[customEvent]) == null ? void 0 : _b.call(_a);
      });
    });
  }
  beforeDisconnect() {
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.beforeDisconnect) == null ? void 0 : _a.call(this);
    if (this.isAttached)
      this.context.innerHTML = "";
    this.isAttached = false;
    while (this.generatedTooltips.length) {
      let a = this.generatedTooltips.pop();
      a == null ? void 0 : a.hide();
      a == null ? void 0 : a.remove();
    }
    (_b = this.afterDisconnect) == null ? void 0 : _b.call(this);
  }
  /**
      * Lifecycle method, called whenever an observed property changes
      */
  attributeChangedCallback(name, old, newName) {
    if (!this.isAttached && old !== newName) {
      this.scheludedRefresh = true;
      return;
    }
    if (old !== newName) {
      this.refresh();
    }
  }
  async refresh() {
    var _a, _b;
    this.refreshUpdatePromise();
    if (this.drawingStatus != "AFTER") {
      (_a = this.afterDisconnect) == null ? void 0 : _a.call(this);
      await this.initWjElement(true);
    } else {
      (_b = this.unregister) == null ? void 0 : _b.call(this);
      await this.initWjElement(true);
    }
  }
  /**
      * To be implemented by the child class
      */
  draw(context, store2, params) {
    return null;
  }
  display(force = false, processId) {
    if (this.isProcessingFlow(processId))
      return;
    if (force && this.isShadowRoot) {
      [...this.context.children].forEach(this.context.removeChild.bind(this.context));
      this.isAttached = false;
    }
    if (this.isAttached) {
      console.log("Already rendered...", this);
    }
    this.context.append(this.template.content.cloneNode(true));
    if (this.isPermissionCheck || this.isShow) {
      if (WjPermissionsApi.isPermissionFulfilled.bind(this)(this.permission)) {
        this._resolveRender(processId);
      } else {
        this.remove();
      }
    } else {
      this._resolveRender(processId);
    }
  }
  render(processId) {
    this.drawingStatus = "DRAWING";
    if (this.isProcessingFlow(processId))
      return;
    let rend = this.draw(this.context, this.store, WjElementUtils.getAttributes(this)) || "";
    let element;
    if (rend instanceof HTMLElement || rend instanceof DocumentFragment) {
      element = rend;
    } else {
      let template2 = document.createElement("template");
      template2.innerHTML = rend;
      element = template2.content.cloneNode(true);
    }
    let rendered = element;
    if (this.isProcessingFlow(processId))
      return;
    this.context.appendChild(rendered);
  }
  /**
      * Turns a string split with "-" into camel case notation
      */
  sanitizeName(name) {
    let parts = name.split("-");
    return [parts.shift(), ...parts.map((n) => n[0].toUpperCase() + n.slice(1))].join("");
  }
  /**
      * Creates one property on this class for every
      * HTML property defined on the element
      */
  setUpAccessors() {
    let attrs = this.getAttributeNames();
    attrs.forEach((name) => {
      const sanitizedName = this.sanitizeName(name);
      if (this[sanitizedName] == void 0) {
        Object.defineProperty(this, sanitizedName, {
          set: (value) => this.setAttribute(name, value),
          get: (_) => {
            return this.getAttribute(name);
          }
        });
      }
    });
  }
  isProcessingFlow(processId) {
    return !this.functionStack.find((d) => d == processId);
  }
  _resolveRender(processId) {
    if (this.isProcessingFlow(processId))
      return;
    this.params = WjElementUtils.getAttributes(this);
    Promise.resolve(this.beforeDraw(this.context, this.store, WjElementUtils.getAttributes(this))).then((res) => {
      var _a;
      this.drawingStatus = "BEFORE";
      this.render(processId);
      if (this.isProcessingFlow(processId))
        return;
      Promise.resolve((_a = this.afterDraw) == null ? void 0 : _a.call(this, this.context, this.store, WjElementUtils.getAttributes(this))).then(
        (a, b, c) => {
          this.drawingStatus = "AFTER";
          this.finisPromise();
          this.tooltip();
          this.rendering = false;
          this.isAttached = true;
          this.removeClassAfterConnect && this.classList.remove(...this.removeClassAfterConnect);
          if (this.scheludedRefresh) {
            this.refresh();
            this.scheludedRefresh = false;
          }
        }
      );
    });
  }
  tooltip() {
    while (this.generatedTooltips.length) {
      let a = this.generatedTooltips.pop();
      a == null ? void 0 : a.hide();
      a == null ? void 0 : a.remove();
    }
    this.context.querySelectorAll("[wj-tooltip]").forEach((el) => {
    });
  }
}
__publicField(WJElement, "processTemplates", (pTemplate, template2) => {
  const newTemplate = document.createElement("template");
  newTemplate.innerHTML = [template2.innerHTML, (pTemplate == null ? void 0 : pTemplate.innerHTML) || ""].join("");
  return newTemplate;
});
let __esModule = "true";
customElements.get("wj-element") || customElements.define("wj-element", WJElement);
export {
  WjElementUtils,
  WjPermissionsApi,
  __esModule,
  WJElement as default,
  event
};
