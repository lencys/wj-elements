var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _Event_instances, dispatch_fn;
import { store, defaultStoreActions } from "./wje-store.js";
class UniversalService {
  constructor(props = {}) {
    __publicField(this, "findByKey", (attrName, key, keyValue) => {
      if (this._store.getState()[attrName] instanceof Array) {
        return this._store.getState()[attrName].find((item) => item[key] === keyValue);
      } else {
        console.warn(` Attribute ${attrName} is not array`);
        return null;
      }
    });
    __publicField(this, "findById", (attrName, id) => {
      if (this._store.getState()[attrName] instanceof Array) {
        return this._store.getState()[attrName].find((item) => item.id === id);
      } else {
        console.warn(` Attribute ${attrName} is not array`);
        return null;
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
    __publicField(this, "loadPromise", (url, action, method = "GET", data = "", permissionCallBack = () => {
    }) => {
      return fetch(url, {
        method,
        body: data,
        headers: {
          "Content-Type": "application/json"
        },
        async: true
      }).then((response, e) => {
        var _a;
        let permissions = (_a = response.headers.get("permissions")) == null ? void 0 : _a.split(",");
        permissionCallBack(permissions);
        if (response.ok) {
          return response.json();
        } else {
          throw response.json();
        }
      }).then((responseData) => {
        this._store.dispatch(action(responseData));
        return responseData;
      });
    });
    __publicField(this, "loadOnePromise", (url, action) => {
      return fetch(url, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response) => {
        const responseData = response.json();
        if (action) {
          this._store.dispatch(action(responseData));
        }
        return responseData;
      });
    });
    this._store = props.store;
  }
  _save(url, data, action, dispatchMethod, method) {
    let promise = fetch(url, {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json();
      }
    });
    return this.dispatch(promise, dispatchMethod, action);
  }
  _get(url, action, dispatchMethod, signal) {
    let promise = fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      ...signal ? { signal } : {}
    }).then(async (response) => {
      let responseText;
      try {
        responseText = await response.text();
        return JSON.parse(responseText);
      } catch (err) {
        console.error(err);
        return responseText;
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
const _WjePermissionsApi = class _WjePermissionsApi {
  /**
   * Sets the permission key.
   * @param value
   */
  static set permissionKey(value) {
    _WjePermissionsApi._permissionKey = value || "permissions";
  }
  /**
   * Returns the permission key.
   * @returns {*|string}
   */
  static get permissionKey() {
    return _WjePermissionsApi._permissionKey;
  }
  /**
   * Sets the permissions.
   * @param value
   */
  static set permissions(value) {
    window.localStorage.setItem(_WjePermissionsApi.permissionKey, JSON.stringify(value));
  }
  /**
   * Returns the permissions.
   * @returns {string[]}
   */
  static get permissions() {
    return JSON.parse(window.localStorage.getItem(_WjePermissionsApi.permissionKey)) || [];
  }
  /**
   * Checks if the permission is included.
   * @param key
   * @returns {boolean}
   */
  static includesKey(key) {
    return _WjePermissionsApi.permissions.includes(key);
  }
  /**
   * Checks if the permission is fulfilled.
   * @returns {boolean}
   */
  static isPermissionFulfilled(permissions) {
    return permissions.some((perm) => _WjePermissionsApi.permissions.includes(perm));
  }
};
__publicField(_WjePermissionsApi, "_permissionKey", "permissions");
let WjePermissionsApi = _WjePermissionsApi;
class WjElementUtils {
  /**
   * This function creates an element.
   * @param element : HTMLElement - The element value.
   * @param object : Object - The object value.
   */
  static setAttributesToElement(element, object) {
    Object.entries(object).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }
  /**
   * This function gets the attributes from an element.
   * @param {string|HTMLElement} el The element or selector to retrieve attributes from.
   * @returns {object} - An object containing the element's attributes as key-value pairs.
   */
  static getAttributes(el) {
    if (typeof el === "string") el = document.querySelector(el);
    return Array.from(el.attributes).filter((a) => !a.name.startsWith("@")).map((a) => [
      a.name.split("-").map((s, i) => {
        if (i !== 0) {
          return s.charAt(0).toUpperCase() + s.slice(1);
        } else {
          return s;
        }
      }).join(""),
      a.value
    ]).reduce((acc, attr) => {
      acc[attr[0]] = attr[1];
      return acc;
    }, {});
  }
  /**
   * This function gets the events from an element.
   * @param {string|HTMLElement} el The element or selector to retrieve events from.
   * @returns {Map<any, any>} - The map value.
   */
  static getEvents(el) {
    if (typeof el === "string") el = document.querySelector(el);
    return Array.from(el.attributes).filter((a) => a.name.startsWith("@wje")).map((a) => [a.name.substring(3).split("-").join(""), a.value]).reduce((acc, attr) => {
      acc.set(attr[0], attr[1]);
      return acc;
    }, /* @__PURE__ */ new Map());
  }
  /**
   * This function converts an object to a string.
   * @param {object} object The object to convert.
   * @returns {string} - The string value.
   */
  static attributesToString(object) {
    return Object.entries(object).map(([key, value]) => {
      return `${key}="${value}"`;
    }).join(" ");
  }
  /**
   * This function checks if the slot exists.
   * @param {string|HTMLElement} el The element or selector to check for slots.
   * @param slotName The slot name to check for.
   * @returns {boolean} - The boolean value.
   */
  static hasSlot(el, slotName = null) {
    let selector = slotName ? `[slot="${slotName}"]` : "[slot]";
    return el.querySelectorAll(selector).length > 0 ? true : false;
  }
  /**
   * This function checks if the slot has content.
   * @param {string|HTMLElement} el The element or selector to check for slot content
   * @param slotName The slot name to check for.
   * @returns {boolean} - The boolean value.
   */
  static hasSlotContent(el, slotName = null) {
    let slotElement = el.querySelector(`slot`);
    if (slotName) {
      slotElement = el.querySelector(`slot[name="${slotName}"]`);
    }
    if (slotElement) {
      const assignedElements = slotElement.assignedElements();
      return assignedElements.length > 0;
    }
    return false;
  }
  /**
   * This function converts a string to a boolean.
   * @param {string | object} value The value to convert to a boolean. If the value is a boolean, it will be returned as is.
   * @returns {boolean} - The boolean value.
   */
  static stringToBoolean(value) {
    if (typeof value === "boolean") return value;
    return !["false", "0", 0].includes(value);
  }
}
var self;
class Event {
  constructor() {
    __privateAdd(this, _Event_instances);
    this.customEventStorage = [];
    self = this;
  }
  /**
   * Dispatch custom event to the element with the specified event name and detail.
   * @param element
   * @param event
   * @param detail
   */
  dispatchCustomEvent(element, event2, detail) {
    element.dispatchEvent(
      new CustomEvent(event2, {
        detail: detail || {
          context: element,
          event: self
        },
        bubbles: true,
        composed: true,
        cancelable: true
      })
    );
  }
  /**
   * Find record by element in the storage.
   * @param element
   * @returns {*}
   */
  findRecordByElement(element) {
    for (let index = 0, length = this.customEventStorage.length; index < length; index++) {
      let record = this.customEventStorage[index];
      if (element === record.element) {
        return record;
      }
    }
    return false;
  }
  /**
   * Add listener to the element. If the element is an array, the listener will be added to all elements in the array.
   * @param element
   * @param originalEvent
   * @param event
   * @param listener
   * @param options
   */
  addListener(element, originalEvent, event2, listener, options) {
    if (!element) return;
    if (!Array.isArray(element)) element = [element];
    element.forEach((el) => {
      this.writeRecord(el, originalEvent, event2, listener, options);
    });
  }
  /**
   * Write record to the storage.
   * @param element
   * @param originalEvent
   * @param event
   * @param listener
   * @param options
   */
  writeRecord(element, originalEvent, event2, listener, options) {
    let record = this.findRecordByElement(element);
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
    listener = listener || __privateMethod(this, _Event_instances, dispatch_fn);
    let obj = {
      listener,
      options,
      event: event2
    };
    if (!this.listenerExists(element, originalEvent, obj)) {
      record.listeners[originalEvent].push(obj);
      element.addEventListener(originalEvent, listener, options);
    }
  }
  /**
   * Performs a deep equality check between two objects.
   * @param x The first object to compare.
   * @param y The second object to compare.
   * @returns - Returns `true` if the objects are deeply equal, `false` otherwise.
   */
  deepEqual(x, y) {
    return x && y && typeof x === "object" && typeof x === typeof y ? Object.keys(x).length === Object.keys(y).length && Object.keys(x).every((key) => this.deepEqual(x[key], y[key])) : x === y;
  }
  /**
   * Check if the listener already exists on the element.
   * @param element
   * @param event
   * @param listener
   * @returns
   */
  listenerExists(element, event2, listener) {
    let record = this.findRecordByElement(element);
    return record.listeners[event2].some((e) => this.deepEqual(e, listener));
  }
  /**
   * Remove listener from the element and delete the listener from the custom event storage.
   * @param element
   * @param originalEvent
   * @param event
   * @param listener
   * @param options
   */
  removeListener(element, originalEvent, event2, listener, options) {
    let record = this.findRecordByElement(element);
    if (record && originalEvent in record.listeners) {
      let index = record.listeners[originalEvent].indexOf(listener);
      if (index !== -1) {
        record.listeners[originalEvent].splice(index, 1);
      }
      if (!record.listeners[originalEvent].length) {
        delete record.listeners[originalEvent];
      }
    }
    listener = listener || __privateMethod(this, _Event_instances, dispatch_fn);
    element.removeEventListener(originalEvent, listener, options);
  }
  /**
   * Remove all event listeners from the specified element and delete the element from the custom event storage.
   * @param {HTMLElement} element The element from which all listeners will be removed.
   */
  removeElement(element) {
    this.customEventStorage = this.customEventStorage.filter((e) => {
      return e.element !== element;
    });
  }
  // TODO
  createPromiseFromEvent(element, event2) {
    return new Promise((resolve) => {
      let success = () => {
        element.removeEventListener(event2, success);
        resolve();
      };
      element.addEventListener(event2, success);
    });
  }
}
_Event_instances = new WeakSet();
/**
 * Dispatch event to the element and trigger the listener.
 * @param e
 */
dispatch_fn = function(e) {
  let element = this;
  let record = self.findRecordByElement(element);
  let listeners = record.listeners[e.type];
  listeners.forEach((listener) => {
    self.dispatchCustomEvent(element, listener.event, {
      originalEvent: (e == null ? void 0 : e.type) || null,
      context: element,
      event: self
    });
    if (listener.options && listener.options.stopPropagation === true) e.stopPropagation();
  });
};
let event = new Event();
const template = document.createElement("template");
template.innerHTML = ``;
const _WJElement = class _WJElement extends HTMLElement {
  /**
   * Initializes a new instance of the WJElement class.
   */
  constructor() {
    super();
    /**
     * Initializes the component, setting up attributes and rendering.
     * @param [force] Whether to force initialization.
     * @returns A promise that resolves when initialization is complete.
     */
    __publicField(this, "initWjElement", (force = false) => {
      return new Promise(async (resolve, reject) => {
        var _a;
        this.drawingStatus = this.drawingStatuses.BEGINING;
        (_a = this.setupAttributes) == null ? void 0 : _a.call(this);
        if (this.isShadowRoot) {
          if (!this.shadowRoot) this.attachShadow({ mode: this.shadowType || "open" });
        }
        this.setUpAccessors();
        this.drawingStatus = this.drawingStatuses.START;
        await this.display(force);
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(this.constructor.cssStyleSheet);
        this.context.adoptedStyleSheets = [sheet];
        resolve();
      });
    });
    this.isAttached = false;
    this.service = new UniversalService({
      store
    });
    this.defineDependencies();
    this.rendering = false;
    this._dependencies = {};
    this.drawingStatuses = {
      CREATED: 0,
      ATTACHED: 1,
      BEGINING: 2,
      START: 3,
      DRAWING: 4,
      DONE: 5,
      DISCONNECTED: 6
    };
    this.drawingStatus = this.drawingStatuses.CREATED;
  }
  /**
   * Sets the value of the 'permission' attribute.
   * @param {string[]} value The value to set for the 'permission' attribute.
   */
  set permission(value) {
    this.setAttribute("permission", value.join(","));
  }
  /**
   * Gets the value of the 'permission-check' attribute.
   * @returns {string[]} The value of the 'permission' attribute.
   */
  get permission() {
    var _a;
    return ((_a = this.getAttribute("permission")) == null ? void 0 : _a.split(",")) || [];
  }
  /**
   * Sets the 'permission-check' attribute.
   * @param {boolean} value The value to set for the 'permission-check' attribute.
   */
  set isPermissionCheck(value) {
    if (value) this.setAttribute("permission-check", "");
    else this.removeAttribute("permission-check");
  }
  /**
   * Checks if the 'permission-check' attribute is present.
   * @returns {boolean} True if the 'permission-check' attribute is present.
   */
  get isPermissionCheck() {
    return this.hasAttribute("permission-check");
  }
  set noShow(value) {
    if (value) this.setAttribute("no-show", "");
    else this.removeAttribute("no-show");
  }
  /**
   * Checks if the 'show' attribute is present.
   * @returns {boolean} True if the 'show' attribute is present.
   */
  get noShow() {
    return this.hasAttribute("no-show");
  }
  /**
   * Sets the 'shadow' attribute.
   * @param value The value to set for the 'shadow' attribute.
   */
  set isShadowRoot(value) {
    return this.setAttribute("shadow", value);
  }
  /**
   * Checks if the 'shadow' attribute is present.
   * @returns {boolean} True if the 'shadow' attribute is present.
   */
  get isShadowRoot() {
    return this.hasAttribute("shadow");
  }
  /**
   * Gets the value of the 'shadow' attribute or 'open' if not set.
   * @returns {string} The value of the 'shadow' attribute or 'open'.
   */
  get shadowType() {
    return this.getAttribute("shadow") || "open";
  }
  /**
   * Gets the rendering context, either the shadow root or the component itself.
   * @returns The rendering context.
   */
  get context() {
    if (this.isShadowRoot) {
      return this.shadowRoot;
    } else {
      return this;
    }
  }
  /**
   * Gets the store instance.
   * @returns {object} The store instance.
   */
  get store() {
    return store;
  }
  /**
   * @typedef {object} ArrayActions
   * @property {Function} addAction - Adds an item to the array.
   * @property {Function} deleteAction - Deletes an item from the array.
   * @property {Function} loadAction - Loads an array.
   * @property {Function} updateAction - Updates an item in the array.
   * @property {Function} addManyAction - Adds many items to the array.
   */
  /**
   * @typedef {object} ObjectActions
   * @property {Function} addAction - Replace old object with new object
   * @property {Function} deleteAction - Delete item based on key
   * @property {Function} updateAction - Update item based on key
   */
  /**
   * Gets the default store actions.
   * @returns The default store actions for arrays and objects.
   */
  get defaultStoreActions() {
    return defaultStoreActions;
  }
  /**
   * Gets the classes to be removed after the component is connected.
   * @returns An array of class names to remove.
   */
  get removeClassAfterConnect() {
    var _a;
    return (_a = this.getAttribute("remove-class-after-connect")) == null ? void 0 : _a.split(" ");
  }
  /**
   * Sets the component dependencies.
   * @param value The dependencies to set.
   */
  set dependencies(value) {
    this._dependencies = value;
  }
  /**
   * Gets the component dependencies.
   * @returns The component dependencies.
   */
  get dependencies() {
    return this._dependencies;
  }
  /**
   * Defines a custom element if not already defined.
   * @param name The name of the custom element.
   * @param [elementConstructor] The constructor for the custom element.
   * @param [options] Additional options for defining the element.
   */
  static define(name, elementConstructor = this, options = {}) {
    const definedElement = customElements.get(name);
    if (!definedElement) {
      customElements.define(name, elementConstructor, options);
    }
  }
  /**
   * Defines component dependencies by registering custom elements.
   */
  defineDependencies() {
    if (this.dependencies)
      Object.entries(this.dependencies).forEach((name, component) => _WJElement.define(name, component));
  }
  /**
   * Hook for extending behavior before drawing the component.
   * @param context The rendering context, usually the element's shadow root or main DOM element.
   * @param appStoreObj The global application store for managing state.
   * @param params Additional parameters or attributes for rendering the component.
   */
  beforeDraw(context, appStoreObj, params) {
  }
  /**
   * Renders the component within the provided context.
   * @param context The rendering context, usually the element's shadow root or main DOM element.
   * @param appStoreObj
   * @param params Additional parameters or attributes for rendering the component.
   * @returns This implementation does not render anything and returns `null`.
   * @description
   * The `draw` method is responsible for rendering the component's content.
   * Override this method in subclasses to define custom rendering logic.
   * @example
   * class MyComponent extends WJElement {
   *   draw(context, appStoreObj, params) {
   *     const div = document.createElement('div');
   *     div.textContent = 'Hello, world!';
   *     context.appendChild(div);
   *   }
   * }
   */
  draw(context, appStoreObj, params) {
    return null;
  }
  /**
   * Hook for extending behavior after drawing the component.
   * @param context The rendering context, usually the element's shadow root or main DOM element.
   * @param appStoreObj The global application store for managing state.
   * @param params Additional parameters or attributes for rendering the component.
   */
  afterDraw(context, appStoreObj, params) {
  }
  /**
   * Refreshes the update promise for rendering lifecycle management.
   */
  refreshUpdatePromise() {
    this.updateComplete = new Promise((resolve, reject) => {
      this.finisPromise = resolve;
      this.rejectPromise = reject;
    });
  }
  /**
   * Lifecycle method invoked when the component is connected to the DOM.
   */
  connectedCallback() {
    this.drawingStatus = this.drawingStatuses.ATTACHED;
    this.finisPromise = (resolve) => {
      resolve();
    };
    this.rejectPromise = (reject) => {
      reject();
    };
    this.refreshUpdatePromise();
    this.renderPromise = this.initWjElement(true);
  }
  /**
   * Sets up attributes and event listeners for the component.
   * This method retrieves all custom events defined for the component
   * and adds event listeners for each of them. When an event is triggered,
   * it calls the corresponding method on the host element.
   */
  setupAttributes() {
    let allEvents = WjElementUtils.getEvents(this);
    allEvents.forEach((customEvent, domEvent) => {
      this.addEventListener(domEvent, (e) => {
        var _a, _b;
        (_b = (_a = this.getRootNode().host)[customEvent]) == null ? void 0 : _b.call(_a);
      });
    });
  }
  /**
   * Hook for extending behavior before disconnecting the component.
   */
  beforeDisconnect() {
  }
  /**
   * Hook for extending behavior after disconnecting the component.
   */
  afterDisconnect() {
  }
  /**
   * Hook for extending behavior before redrawing the component.
   */
  beforeRedraw() {
  }
  /**
   * Cleans up resources and event listeners for the component.
   */
  componentCleanup() {
  }
  /**
   * Lifecycle method invoked when the component is disconnected from the DOM.
   */
  disconnectedCallback() {
    var _a, _b;
    (_a = this.beforeDisconnect) == null ? void 0 : _a.call(this);
    if (this.isAttached) this.context.innerHTML = "";
    this.isAttached = false;
    (_b = this.afterDisconnect) == null ? void 0 : _b.call(this);
    this.drawingStatus = this.drawingStatuses.DISCONNECTED;
    this.componentCleanup();
  }
  /**
   * Enqueues an update to the component.
   * @returns A promise that resolves when the update is complete.
   */
  async enqueueUpdate() {
    try {
      if (this.renderPromise && this.renderPromise instanceof Promise) {
        await this.renderPromise;
      }
    } catch (e) {
      console.error("An error occurred:", e);
      Promise.reject(e);
    }
    const result = this.refresh();
    if (result !== null) {
      await result;
    }
    this.renderPromise = null;
  }
  /**
   * Lifecycle method invoked when an observed attribute changes.
   * @param name The name of the attribute that changed.
   * @param old The old value of the attribute.
   * @param newName The new value of the attribute.
   */
  attributeChangedCallback(name, old, newName) {
    if (old !== newName) {
      this.renderPromise = this.enqueueUpdate();
    }
  }
  /**
   * Refreshes the component by reinitializing it if it is in a drawing state.
   * This method checks if the component's drawing status is at least in the START state.
   * If so, it performs the following steps:
   * 1. Calls the `beforeRedraw` hook if defined.
   * 2. Calls the `beforeDisconnect` hook if defined.
   * 3. Refreshes the update promise to manage the rendering lifecycle.
   * 4. Calls the `afterDisconnect` hook if defined.
   * 5. Reinitializes the component by calling `initWjElement` with `true` to force initialization.
   * If the component is not in a drawing state, it simply returns a resolved promise.
   * @returns {Promise<void>} A promise that resolves when the refresh is complete.
   */
  refresh() {
    var _a, _b, _c;
    if (this.drawingStatus && this.drawingStatus >= this.drawingStatuses.START) {
      (_a = this.beforeRedraw) == null ? void 0 : _a.call(this);
      (_b = this.beforeDisconnect) == null ? void 0 : _b.call(this);
      this.refreshUpdatePromise();
      (_c = this.afterDisconnect) == null ? void 0 : _c.call(this);
      return this.initWjElement(true);
    }
    return Promise.resolve();
  }
  /**
   * Renders the component within the provided context.
   * @param context The rendering context, usually the element's shadow root or main DOM element.
   * @param appStore The global application store for managing state.
   * @param params Additional parameters or attributes for rendering the component.
   * @returns This implementation does not render anything and returns `null`.
   * @description
   * The `draw` method is responsible for rendering the component's content.
   * Override this method in subclasses to define custom rendering logic.
   * @example
   * class MyComponent extends WJElement {
   *   draw(context, appStore, params) {
   *     const div = document.createElement('div');
   *     div.textContent = 'Hello, world!';
   *     context.appendChild(div);
   *   }
   * }
   */
  draw(context, appStore, params) {
    return null;
  }
  /**
   * Displays the component's content, optionally forcing a re-render.
   * @param [force] Whether to force a re-render.
   * @returns A promise that resolves when the display is complete.
   */
  display(force = false) {
    this.template = this.constructor.customTemplate || document.createElement("template");
    if (force) {
      [...this.context.childNodes].forEach(this.context.removeChild.bind(this.context));
      this.isAttached = false;
    }
    this.context.append(this.template.content.cloneNode(true));
    if (this.noShow || this.isPermissionCheck && !WjePermissionsApi.isPermissionFulfilled(this.permission)) {
      this.remove();
      return Promise.resolve();
    }
    return this._resolveRender();
  }
  /**
   * Renders the component's content.
   */
  async render() {
    this.drawingStatus = this.drawingStatuses.DRAWING;
    let _draw = this.draw(this.context, this.store, WjElementUtils.getAttributes(this));
    if (_draw instanceof Promise) {
      _draw = await _draw;
    }
    let rend = _draw;
    let element;
    if (rend instanceof HTMLElement || rend instanceof DocumentFragment) {
      element = rend;
    } else {
      let inputTemplate = document.createElement("template");
      inputTemplate.innerHTML = rend;
      element = inputTemplate.content.cloneNode(true);
    }
    let rendered = element;
    this.context.appendChild(rendered);
  }
  /**
   * Sanitizes a given name by converting it from kebab-case to camelCase.
   * @param {string} name The name in kebab-case format (e.g., "example-name").
   * @returns {string} The sanitized name in camelCase format (e.g., "exampleName").
   * @example
   * // Returns 'exampleName'
   * sanitizeName('example-name');
   * @example
   * // Returns 'myCustomComponent'
   * sanitizeName('my-custom-component');
   */
  sanitizeName(name) {
    let parts = name.split("-");
    return [parts.shift(), ...parts.map((n) => n[0].toUpperCase() + n.slice(1))].join("");
  }
  /**
   * Checks if a property on an object has a getter or setter method defined.
   * @param {object} obj The object on which the property is defined.
   * @param {string} property The name of the property to check.
   * @returns {object} An object indicating the presence of getter and setter methods.
   * @property {Function|null} hasGetter The getter function if it exists, otherwise `null`.
   * @property {Function|null} hasSetter The setter function if it exists, otherwise `null`.
   * @example
   * const obj = {
   *   get name() { return 'value'; },
   *   set name(val) { console.log(val); }
   * };
   * // Returns { hasGetter: [Function: get name], hasSetter: [Function: set name] }
   * checkGetterSetter(obj, 'name');
   * @example
   * const obj = { prop: 42 };
   * // Returns { hasGetter: null, hasSetter: null }
   * checkGetterSetter(obj, 'prop');
   */
  checkGetterSetter(obj, property) {
    let descriptor = Object.getOwnPropertyDescriptor(obj, property);
    if (descriptor) {
      return {
        hasGetter: typeof descriptor.get === "function" ? descriptor.get : null,
        hasSetter: typeof descriptor.set === "function" ? descriptor.set : null
      };
    }
    let proto = Object.getPrototypeOf(obj);
    if (proto) {
      return this.checkGetterSetter(proto, property);
    }
    return { hasGetter: null, hasSetter: null };
  }
  /**
   * Sets up property accessors for the component's attributes.
   */
  setUpAccessors() {
    let attrs = this.getAttributeNames();
    attrs.forEach((name) => {
      const sanitizedName = this.sanitizeName(name);
      const { hasGetter, hasSetter } = this.checkGetterSetter(this, sanitizedName);
      Object.defineProperty(this, sanitizedName, {
        set: hasSetter ?? ((value) => this.setAttribute(name, value)),
        get: hasGetter ?? (() => this.getAttribute(name))
      });
    });
  }
  /**
   * Resolves the rendering process of the component.
   * @returns A promise that resolves when rendering is complete.
   * @private
   */
  _resolveRender() {
    this.params = WjElementUtils.getAttributes(this);
    return new Promise(async (resolve, reject) => {
      var _a;
      const __beforeDraw = this.beforeDraw(this.context, this.store, WjElementUtils.getAttributes(this));
      if (__beforeDraw instanceof Promise) {
        await __beforeDraw;
      }
      await this.render();
      const __afterDraw = (_a = this.afterDraw) == null ? void 0 : _a.call(this, this.context, this.store, WjElementUtils.getAttributes(this));
      if (__afterDraw instanceof Promise) {
        await __afterDraw;
      }
      this.finisPromise();
      this.rendering = false;
      this.isAttached = true;
      if (this.removeClassAfterConnect) {
        this.classList.remove(...this.removeClassAfterConnect);
      }
      this.drawingStatus = this.drawingStatuses.DONE;
      resolve();
    }).catch((e) => {
      console.log(e);
    });
  }
};
/**
 * Processes and combines two templates into one.
 * @param pTemplate The primary template.
 * @param inputTemplate The secondary template.
 * @returns The combined template.
 */
__publicField(_WJElement, "processTemplates", (pTemplate, inputTemplate) => {
  const newTemplate = document.createElement("template");
  newTemplate.innerHTML = [inputTemplate.innerHTML, (pTemplate == null ? void 0 : pTemplate.innerHTML) || ""].join("");
  return newTemplate;
});
let WJElement = _WJElement;
let __esModule = "true";
export {
  WjElementUtils,
  WjePermissionsApi,
  __esModule,
  WJElement as default,
  event
};
