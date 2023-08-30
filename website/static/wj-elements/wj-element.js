var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { P as PubSub, d as defaultStoreActions } from "./default-store-actions-65bc7799.js";
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
class Store {
  constructor(params = {}) {
    __publicField(this, "_state");
    __publicField(this, "_reducer");
    __publicField(this, "events");
    __publicField(this, "status");
    this._isPause = false;
    this._state = {};
    this._reducer = function rootReducer(state = {}, action) {
      return {};
    };
    this.status = "resting";
    this.events = new PubSub();
    if (params == null ? void 0 : params.hasOwnProperty("reducer")) {
      this._reducer = params.reducer;
    }
    this.refreshProxy(params == null ? void 0 : params.state);
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
  dispatch(action) {
    this.status = "action";
    let newState = this._reducer(this._state, action);
    this.status = "mutation";
    this._state = Object.assign(this._state, newState);
    return true;
  }
  getState() {
    return JSON.parse(JSON.stringify(this._state));
  }
  subscribe(eventName, callbackFn) {
    return this.events.subscribe(eventName, callbackFn);
  }
  unsubscribe(eventName) {
    delete this.events[eventName];
  }
  pause() {
    this._isPause = true;
    return this;
  }
  play(val) {
    this._isPause = false;
    return this;
  }
  mergeReducers(stateValueName, newReducer) {
    let reducerCopy = this._reducer;
    this._reducer = (state, newState) => {
      let preState = reducerCopy(state, newState);
      let result = {
        ...preState,
        [stateValueName]: newReducer(state[stateValueName], newState)
      };
      return result;
    };
  }
  makeEveryArrayEntryAsStoreState(storeKey, array = [], identificator = "id") {
    array.forEach((entry) => {
      if (this.getState().hasOwnProperty(`${storeKey}-${entry[identificator]}`)) {
        this.dispatch(defaultStoreActions.updateAction(`${storeKey}-${entry[identificator]}`)(entry));
      } else {
        this.define(`${storeKey}-${entry.id || entry.source || entry[identificator]}`, entry, null, identificator);
      }
    });
  }
  define(stateValueName, defaultValue, reducer, key = "id") {
    if (this._state.hasOwnProperty(stateValueName)) {
      console.warn(`STATE už obsahuje premennú ${stateValueName},ktorú sa pokúšate pridať`);
      return;
    }
    if (reducer instanceof Function) {
      this.mergeReducers(stateValueName, reducer);
    } else {
      if (defaultValue instanceof Array) {
        this.mergeReducers(stateValueName, this.createArrayReducer(stateValueName, key));
      } else {
        this.mergeReducers(stateValueName, this.createObjectReducer(stateValueName, key));
      }
    }
    this.refreshProxy({
      ...this._state,
      [stateValueName]: defaultValue
    });
  }
  refreshProxy(state) {
    this._state = new Proxy(state || {}, {
      set: (state2, key, value) => {
        if (JSON.stringify(state2[key]) === JSON.stringify(value)) {
          return true;
        }
        let oldState = state2[key];
        state2[key] = value;
        if (!this._isPause)
          this.events.publish(key, this._state, oldState);
        if (this.status !== "mutation") {
          console.warn(`You should use a mutation to set ${key}`);
        }
        this.status = "resting";
        return true;
      }
    });
  }
  createObjectReducer(stateValueName) {
    return (state = {}, action) => {
      switch (action.type) {
        case `${stateValueName}/ADD`:
          return {
            ...action.payload
          };
        case `${stateValueName}/UPDATE`:
          return {
            ...state,
            ...action.payload
          };
        case `${stateValueName}/DELETE`:
          return {};
        default:
          return state;
      }
    };
  }
  createArrayReducer(stateValueName, key) {
    return (state = [], action) => {
      switch (action.type) {
        case `${stateValueName}/ADD`:
          if (Array.isArray(action.payload)) {
            return [
              ...state,
              ...action.payload
            ];
          } else {
            return [
              ...state,
              action.payload
            ];
          }
        case `${stateValueName}/ADD_MANY`:
          return [
            ...state,
            ...action.payload
          ];
        case `${stateValueName}/UPDATE`:
          if (state.some((obj) => obj[key] == action.payload[key])) {
            return [
              ...state.map((obj) => {
                if (obj[key] == action.payload[key]) {
                  return action.payload;
                }
                return obj;
              })
            ];
          } else {
            return [
              ...state,
              action.payload
            ];
          }
        case `${stateValueName}/DELETE`:
          return [
            ...state.filter((obj) => obj.hasOwnProperty(key) && obj[key] != action.payload[key] || !obj.hasOwnProperty(key) && obj != action.payload)
          ];
        case `${stateValueName}/LOAD`:
          return [
            ...action.payload
          ];
        default:
          return state;
      }
    };
  }
}
let store = new Store();
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
    return Array.from(el.attributes).map((a) => [a.name.split("-").map((s, i) => {
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
  static attributesToString(object) {
    return Object.entries(object).map(([key, value]) => {
      return `${key}="${value}"`;
    }).join(" ");
  }
}
const styles = '/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Input ]\n*/\n:host {\n  --wj-input-font-family: Inter UI, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  --wj-input-background-color: #fff;\n  --wj-input-color: #212121;\n  --wj-input-color-invalid: #b91e1e;\n  --wj-input-border-color: rgba(33, 33, 33, 0.14);\n  --wj-input-border-color-focus: #7252D3;\n  --wj-input-border-radius: 2px;\n  --wj-input-margin-bottom: .5rem;\n  --wj-input-line-height: 20px;\n  width: 100%;\n  margin-bottom: var(--wj-input-margin-bottom);\n  display: block;\n}\n:host .error-message {\n  display: none;\n  position: absolute;\n  width: auto;\n  max-width: 90%;\n  border-radius: 50px;\n  background: black;\n  padding: 0.25rem 0.5rem;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 12px;\n  line-height: normal;\n}\n:host input {\n  background-color: var(--wj-input-background-color);\n  border: 1px solid var(--wj-input-border-color);\n  font-family: var(--wjinput-font-family);\n  color: var(--wj-input-color);\n  border-top-color: rgba(33, 33, 33, 0.21);\n  appearance: none;\n  outline: 0;\n  padding: 6px 8px;\n  line-height: var(--wj-input-line-height);\n  font-size: 14px;\n  font-weight: normal;\n  vertical-align: middle;\n  min-height: 32px;\n}\n:host .native-input {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n}\n:host .native-input .input-wrapper {\n  width: 100%;\n}\n:host .native-input.default {\n  background-color: var(--wj-input-background-color);\n  font-family: var(--wj-input-font-family);\n  position: relative;\n  border-radius: var(--wj-input-border-radius);\n  border: 1px solid var(--wj-input-border-color);\n  border-top-color: rgba(8, 8, 8, 0.14);\n  padding-inline: 9px;\n  padding-top: 5px;\n  padding-bottom: 4px;\n  transition: background-color 0.2s ease;\n  cursor: text;\n}\n:host .native-input.default.focused {\n  border: 1px solid var(--wj-input-border-color-focus) !important;\n}\n:host .native-input.default.focused label {\n  opacity: 0.67;\n  font-size: 12px;\n  letter-spacing: normal;\n}\n:host .native-input.default input {\n  border: none;\n  height: 25px;\n  min-height: 25px;\n  padding: 0;\n  margin-top: -4px;\n  background: none;\n  box-shadow: none;\n  width: 100%;\n}\n:host .native-input.default label {\n  margin: 0;\n  display: block;\n  opacity: 1;\n  cursor: text;\n  transition: opacity 0.2s ease;\n  line-height: var(--wj-input-line-height);\n}\n:host .native-input.default label.fade {\n  opacity: 0.5;\n  font-size: 12px;\n  letter-spacing: normal;\n}\n:host([required]) .input-wrapper::after {\n  color: #D83C31;\n  content: "*";\n  font-family: -apple-system, BlinkMacSystemFont, "Inter UI", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  font-size: 20px;\n  position: absolute;\n  right: 10px;\n  top: 2px;\n}\n:host([invalid]) .error-message {\n  display: block;\n}\n:host([invalid]) label {\n  opacity: 1 !important;\n  color: var(--wj-input-color-invalid) !important;\n  animation-name: shake;\n  animation-duration: 0.4s;\n  animation-iteration-count: 1;\n}\nslot[name=start], slot[name=end] {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\nslot[name=start] {\n  margin-inline: 0 10px;\n}\nslot[name=end] {\n  margin-inline: 10px 0;\n}\n::slotted([slot=start]) {\n  padding-inline: 0 10px;\n}\n::slotted([slot=start]):after {\n  border-right: 1px solid rgba(0, 0, 0, 0.16);\n  content: "";\n  display: block;\n  width: 1px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n::slotted([slot=end]) {\n  padding-inline: 10px 0;\n}\n::slotted([slot=end]):after {\n  border-right: 1px solid rgba(0, 0, 0, 0.16);\n  content: "";\n  display: block;\n  width: 1px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n@keyframes shake {\n  8%, 41% {\n    transform: translateX(-4px);\n  }\n  25%, 58% {\n    transform: translateX(4px);\n  }\n  75% {\n    transform: translateX(-2px);\n  }\n  92% {\n    transform: translateX(2px);\n  }\n  0%, 100% {\n    transform: translateX(0);\n  }\n}';
const template = document.createElement("template");
template.innerHTML = ``;
class WJElement extends HTMLElement {
  constructor(componentTemplate) {
    var _a;
    super();
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
    (_a = this.setupAttributes) == null ? void 0 : _a.call(this);
    if (this.isShadowRoot) {
      !this.shadowRoot && this.attachShadow({ mode: this.shadowType || "open" });
    }
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(this.constructor.myCSSStyleSheet);
    this.context.adoptedStyleSheets = [sheet];
  }
  static myCSSStyleSheet() {
    return "";
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
  async initWjElement(force = false) {
    this.functionStack = [];
    const processId = Date.now();
    this.functionStack.push(processId);
    this.setUpAccessors();
    this.drawingStatus = "BEGINING";
    this.display(force, processId);
  }
  setupAttributes() {
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
    var _a;
    this.refreshUpdatePromise();
    if (this.drawingStatus != "AFTER") {
      (_a = this.afterDisconnect) == null ? void 0 : _a.call(this);
      await this.initWjElement(true);
    } else {
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
  WJElement as default
};
