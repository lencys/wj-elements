var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _drawnItems, _loadedItems, _response, _infiniteScrollTemplate, _abortController, _signal, _loading;
import WJElement from "./wje-element.js";
import { WjElementUtils } from "./element-utils.js";
import { event } from "./event.js";
const styles = "/*\n[ Wj infinite Scroll ]\n*/\n\n:host {\n    overflow-x: auto;\n    width: var(--wje-infinite-scroll-width);\n    height: var(--wje-infinite-scroll-height);\n    display: block;\n    position: relative;\n\n    .loading {\n        position: sticky;\n        inset: 0;\n        display: none;\n        align-items: center;\n        justify-content: center;\n        z-index: 1;\n        background-color: var(--wje-infinite-scroll-loading-background);\n        width: 100%;\n        height: 100%;\n        &.show {\n            display: flex;\n        }\n    }\n}\n\n[name='ending'] {\n    display: none;\n    margin-top: 1rem;\n    text-align: center;\n}\n\n[name='ending'].show {\n    display: block;\n}\n";
class InfiniteScroll extends WJElement {
  /**
   * Creates an instance of InfiniteScroll.
   */
  constructor() {
    super();
    __privateAdd(this, _drawnItems);
    __privateAdd(this, _loadedItems);
    __privateAdd(this, _response);
    __privateAdd(this, _infiniteScrollTemplate);
    __privateAdd(this, _abortController);
    __privateAdd(this, _signal);
    __privateAdd(this, _loading);
    __publicField(this, "className", "InfiniteScroll");
    /**
     * Attaches a scroll event listener to the current object.
     * The `scrollEvent` function binds the `onScroll` method to the 'scroll' event
     * of the current object. This enables handling of scroll events for
     * specific functionality such as updating UI elements, loading content dynamically,
     * or tracking user interaction with scrollable content.
     */
    __publicField(this, "scrollEvent", () => {
      this.addEventListener("scroll", this.onScroll);
    });
    /**
     * A function that removes the scroll event listener from the current context.
     * This function is used to unbind the `onScroll` event listener
     * from the `scroll` event of the current object. It ensures that
     * the scroll event no longer triggers the `onScroll` handler.
     * @function
     */
    __publicField(this, "unScrollEvent", () => {
      this.removeEventListener("scroll", this.onScroll);
    });
    /**
     * A scroll event handler function that checks the scroll position and triggers loading additional content
     * when the user scrolls near the bottom of the page.
     * Properties accessed:
     * - `scrollTop`: The number of pixels that the content of an element is scrolled vertically.
     * - `scrollHeight`: The total height of the element's content.
     * - `clientHeight`: The inner height of the element in pixels, including padding but excluding borders and scrollbars.
     * Conditions:
     * - Determines if the scroll position is within 300 pixels of the bottom of the element.
     * - Verifies that the current page number is less than or equal to the total number of pages.
     * - Checks if the current page is already in the loading state.
     * Actions:
     * - Increments the current page number when the conditions are met.
     * - Initiates loading for the next page by calling the `loadPages` function.
     * @param {Event} e The scroll event object.
     */
    __publicField(this, "onScroll", (e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      if (scrollTop + clientHeight >= scrollHeight - 300 && this.currentPage <= this.totalPages && this.isLoading.includes(this.currentPage)) {
        this.currentPage++;
        __privateSet(this, _loading, this.loadPages(this.currentPage));
      }
    });
    __publicField(this, "compareFunction", (i, item) => i.id === item.id);
    /**
     * Converts a data item into an HTML element based on a template.
     * This function takes a data item, interpolates it into a predefined template,
     * parses the resulting HTML string, and returns the first child element of the parsed HTML content.
     * @param {object} item The data object to interpolate into the HTML template.
     * @returns {Element} The first child element generated from the interpolated HTML string.
     */
    __publicField(this, "dataToHtml", (item) => {
      let interpolateItem = this.interpolate(this.infiniteScrollTemplate, item);
      let doc = this.parser.parseFromString(interpolateItem, "text/html");
      let element = doc.activeElement.firstElementChild;
      return element;
    });
    /**
     * A custom implementation of the forEach method designed to iterate over an array of data,
     * transform each item into an HTML element, and append the element to a specified placement object.
     * Additionally, it adds an event listener to each generated element for handling click events.
     * @param {Array} data An array of items to process. Each item is transformed into an HTML element
     * and appended to the placement object specified in the context of `this`.
     */
    __publicField(this, "customForeach", (data) => {
      data.forEach((item) => {
        let element = this.dataToHtml(item);
        let symbol = Symbol("infinite-scroll-item");
        element[symbol] = item;
        item[symbol] = element;
        event.addListener(element, "click", "wje-infinite-scroll:click-item", null);
        this.placementObj.insertAdjacentElement("beforeend", element);
      });
    });
    /**
     * Interpolates a string template with values from the provided parameters object.
     * The template contains placeholders in the format `{{key}}` or `{{key.subkey}}`,
     * which are replaced with the corresponding values from the `params` object.
     * Placeholders support dot notation for accessing nested properties within the `params` object.
     * @param {string} template The string template containing placeholders to be replaced.
     * @param {object} params The object containing key-value pairs used for substitution in the template.
     * @returns {string} A string with all placeholders replaced by their respective values from the `params` object.
     */
    __publicField(this, "interpolate", (template, params) => {
      let keys = template.match(/\{{.*?\}}/g);
      if (keys) {
        for (let key of keys) {
          let cleanKey = key.replace("{{", "").replace("}}", "");
          let val = "";
          cleanKey.split(".").forEach((k) => {
            val = val === "" ? params[k] : val[k];
          });
          template = template.replace(key, val);
        }
      }
      return template;
    });
    this.totalPages = 0;
    this.isLoading = [];
    __privateSet(this, _response, {});
    this.iterate = null;
    __privateSet(this, _infiniteScrollTemplate, null);
    __privateSet(this, _abortController, new AbortController());
    __privateSet(this, _signal, __privateGet(this, _abortController).signal);
    __privateSet(this, _drawnItems, []);
    __privateSet(this, _loadedItems, []);
    this.placementObj = this;
  }
  /**
   * Dependencies of the InfiniteScroll component.
   * @param value
   */
  set infiniteScrollTemplate(value) {
    __privateSet(this, _infiniteScrollTemplate, value);
  }
  /**
   * Getter for the infiniteScrollTemplate property.
   * @returns {null}
   */
  get infiniteScrollTemplate() {
    return __privateGet(this, _infiniteScrollTemplate);
  }
  /**
   * Dependencies of the InfiniteScroll component.
   * @param value
   */
  set response(value) {
    __privateSet(this, _response, value);
  }
  /**
   * Getter for the response property.
   * @returns {*|{}}
   */
  get response() {
    return __privateGet(this, _response);
  }
  /**
   * Dependencies of the InfiniteScroll component.
   * @param value
   */
  set objectName(value) {
    this.setAttribute("object-name", value);
  }
  get objectName() {
    return this.getAttribute("object-name") ?? "data";
  }
  /**
   * Returns the CSS styles for the component.
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Returns the list of attributes to observe for changes.
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
    this.syncAria();
  }
  /**
   * Prepares the component for updates before it is drawn.
   * This method handles the removal of templates for iteration, adjusts the height styling of the component,
   * and manages abort signals for loading operations.
   * @returns {void} No return value.
   */
  beforeDraw() {
    var _a, _b, _c;
    __privateSet(this, _loadedItems, []);
    __privateSet(this, _drawnItems, []);
    this.iterate = this.querySelector("[iterate]");
    if (this.iterate) {
      if (this.iterate.nodeName !== "TEMPLATE") {
        console.error("The iterate attribute must be a template element");
        this.infiniteScrollTemplate = (_a = this.iterate) == null ? void 0 : _a.outerHTML;
      } else {
        this.infiniteScrollTemplate = (_b = this.iterate) == null ? void 0 : _b.innerHTML;
      }
      (_c = this.iterate) == null ? void 0 : _c.remove();
    }
    this.setAttribute("style", "height: " + this.height);
    if (__privateGet(this, _signal)) {
      __privateGet(this, _abortController).abort();
      __privateSet(this, _abortController, new AbortController());
      __privateSet(this, _signal, __privateGet(this, _abortController).signal);
    }
  }
  /**
   * Creates and returns a document fragment containing the structure for an infinite scroll component.
   * The structure includes native elements, slots for customization, and optional loading content.
   * @returns {DocumentFragment} The document fragment containing the component's DOM structure.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-infinite-scroll");
    native.setAttribute("part", "native-infinite-scroll");
    let slot = document.createElement("slot");
    let ending = document.createElement("slot");
    ending.setAttribute("name", "ending");
    if (WjElementUtils.hasSlot(this, "loader")) {
      let loading = document.createElement("div");
      loading.classList.add("loading");
      let loader = document.createElement("slot");
      loader.setAttribute("name", "loader");
      loading.appendChild(loader);
      this.loadingEl = loading;
      fragment.appendChild(loading);
    }
    native.appendChild(slot);
    native.appendChild(ending);
    fragment.appendChild(native);
    this.endingEl = ending;
    return fragment;
  }
  /**
   * Called after the component has been drawn.
   */
  async afterDraw() {
    this.syncAria();
    this.queryParams = this.queryParams || "";
    this.size = +this.size || 10;
    this.currentPage = 0;
    this.scrollEvent();
    __privateSet(this, _loading, this.loadPages(this.currentPage));
    await __privateGet(this, _loading);
  }
  /**
   * Sync ARIA attributes on host.
   */
  syncAria() {
    if (!this.hasAttribute("role")) {
      this.setAriaState({ role: "list" });
    }
  }
  /**
   * Fetches the pages from the server.
   * @param {number} page The page number.
   * @returns {Promise<object>} The response from the server.
   */
  async getPages(page) {
    var _a;
    let hasParams = (_a = this.url) == null ? void 0 : _a.includes("?");
    const response = await fetch(
      `${this.url}${hasParams ? "&" : "?"}page=${page}&size=${this.size}${this == null ? void 0 : this.queryParams}`,
      {
        signal: __privateGet(this, _signal)
      }
    );
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.status}`);
    }
    return await response.json();
  }
  /**
   * Hides the loader.
   */
  hideLoader() {
    var _a;
    (_a = this == null ? void 0 : this.loadingEl) == null ? void 0 : _a.classList.remove("show");
  }
  /**
   * Displays the loader element by adding the 'show' class to its class list.
   * This method is useful for indicating a loading or processing state in the UI.
   * @returns {void} No return value.
   */
  showLoader() {
    var _a;
    (_a = this == null ? void 0 : this.loadingEl) == null ? void 0 : _a.classList.add("show");
  }
  /**
   * Checks if there are more pages to load.
   * @param {number} page The page number.
   * @returns {boolean} Whether there are more pages to load.
   */
  hasMorePages(page) {
    return this.totalPages === 0 || page < this.totalPages;
  }
  /**
   * Loads the pages.
   * @param {number} page The page number.
   */
  async loadPages(page) {
    this.showLoader();
    try {
      event.dispatchCustomEvent(this, "wje-infinite-scroll:start");
      if (this.hasMorePages(page)) {
        let response;
        this.parser = new DOMParser();
        if (typeof this.setCustomData === "function") {
          response = await this.setCustomData(page, __privateGet(this, _signal));
        } else {
          response = await this.getPages(page);
        }
        this.totalPages = Number((response == null ? void 0 : response.totalPages) ?? 0);
        this.currentPage = page;
        this.placementObj = this;
        if (this.hasAttribute("placement")) this.placementObj = this.querySelector(this.placement);
        event.dispatchCustomEvent(this, "wje-infinite-scroll:load", response);
        this.response = response;
        let items;
        if (Array.isArray(response)) {
          items = response;
        } else if (this.objectName && Array.isArray(response == null ? void 0 : response[this.objectName])) {
          items = response[this.objectName];
        } else if (Array.isArray(response == null ? void 0 : response.content)) {
          items = response.content;
        } else {
          items = [];
        }
        __privateSet(this, _loadedItems, items);
        const notDrawnItems = __privateGet(this, _loadedItems).filter(
          (item) => !__privateGet(this, _drawnItems).some(this.compareFunction.bind(this, item))
        );
        this.customForeach(notDrawnItems);
        __privateGet(this, _drawnItems).push(...notDrawnItems);
        this.isLoading.push(page);
        event.dispatchCustomEvent(this, "wje-infinite-scroll:finish", response);
      } else {
        event.dispatchCustomEvent(this, "wje-infinite-scroll:complete");
        this.endingEl.classList.add("show");
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.hideLoader();
    }
  }
  addItem(item, place = "beforeend") {
    let element = this.dataToHtml(item);
    let symbol = Symbol("infinite-scroll-item");
    element[symbol] = item;
    item[symbol] = element;
    this.placementObj.insertAdjacentElement(place, element);
    __privateGet(this, _drawnItems).push(item);
    if (__privateGet(this, _drawnItems).length > this.size * this.currentPage) {
      this.totalPages += 1;
    }
  }
  removeItem(item) {
    let drawnItem = __privateGet(this, _drawnItems).find(this.compareFunction.bind(this, item));
    if (!drawnItem) {
      console.error("Item not found");
      return;
    }
    let symbol = Object.getOwnPropertySymbols(drawnItem).at(0);
    let element = drawnItem[symbol];
    if (!element) {
      console.error("Element not found");
      return;
    }
    element == null ? void 0 : element.remove();
    __privateSet(this, _drawnItems, __privateGet(this, _drawnItems).filter((i) => i !== item));
    if (__privateGet(this, _drawnItems).length < this.size * this.currentPage) {
      this.isLoading = this.isLoading.filter((i) => i !== this.currentPage);
      this.currentPage--;
    }
  }
  reset() {
    this.isLoading = [];
    this.currentPage = 0;
    this.totalPages = 0;
    this.response = {};
    __privateSet(this, _drawnItems, []);
    __privateSet(this, _loadedItems, []);
    this.placementObj.innerHTML = "";
  }
}
_drawnItems = new WeakMap();
_loadedItems = new WeakMap();
_response = new WeakMap();
_infiniteScrollTemplate = new WeakMap();
_abortController = new WeakMap();
_signal = new WeakMap();
_loading = new WeakMap();
InfiniteScroll.define("wje-infinite-scroll", InfiniteScroll);
export {
  InfiniteScroll as default
};
//# sourceMappingURL=wje-infinite-scroll.js.map
