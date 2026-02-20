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
var _loadedOptions, _drawPreloadedElements;
import WJElement from "./wje-element.js";
import InfiniteScroll from "./wje-infinite-scroll.js";
import List from "./wje-list.js";
import Option from "./wje-option.js";
import { event } from "./event.js";
const styles = "/*\n[ WJ OPTIONS ]\n*/\n\n:host {\n  display: block;\n  height: 100%;\n}\n\nwje-infinite-scroll {\n  background-color: red;\n  height: 100%;\n  display: block;\n  .loader {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n";
class Options extends WJElement {
  constructor() {
    super();
    __privateAdd(this, _loadedOptions, []);
    __privateAdd(this, _drawPreloadedElements, []);
    __publicField(this, "dependencies", {
      "wje-option": Option,
      "wje-infinite-scroll": InfiniteScroll,
      "wje-list": List
    });
    __publicField(this, "className", "Options");
    __publicField(this, "dispatchOptionsLoadEvent", (e) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          event.dispatchCustomEvent(this, "wje-options:load", {});
        });
      });
    });
    /**
     * Recursively updates the object based on the provided path to the property.
     * @param {object | Array | null} object
     * @param {Array<string> | null} pathToProperty
     * @returns {object | Array | null}
     */
    __publicField(this, "recursiveUpdate", (object, pathToProperty) => {
      var _a;
      if (pathToProperty.length === 0) {
        if (Array.isArray(object)) {
          return object.filter(
            (option) => !this.loadedOptions.some(
              (loadedOption) => loadedOption[this.itemValue] === option[this.itemValue]
            )
          );
        } else {
          console.error("Expected an array but got:", object, pathToProperty);
          return [];
        }
      }
      const [currentPath, ...remainingPath] = pathToProperty;
      if (remainingPath.length > 0) {
        object[currentPath] = this.recursiveUpdate(object[currentPath], remainingPath);
      } else {
        object[currentPath] = ((_a = object[currentPath]) == null ? void 0 : _a.filter(
          (option) => !this.loadedOptions.some(
            (loadedOption) => loadedOption[this.itemValue] === option[this.itemValue]
          )
        )) ?? [];
      }
      return object;
    });
    /**
     * Generates an HTML option element based on the provided item.
     * @param {object} item The item to generate the option element for.
     * @returns {HTMLElement} The generated option element.
     */
    __publicField(this, "htmlItem", (item) => {
      let option = document.createElement("wje-option");
      if (item[this.itemValue] === null || item[this.itemValue] === void 0) {
        console.warn(`The item ${JSON.stringify(item)} does not have the property ${this.itemValue}`);
      }
      if (item[this.itemText] === null || item[this.itemText] === void 0) {
        console.warn(`The item ${JSON.stringify(item)} does not have the property ${this.itemText}`);
      }
      option.setAttribute("value", item[this.itemValue] ?? "");
      option.innerText = item[this.itemText] ?? "";
      return option;
    });
  }
  /**
   * Sets the option array path attribute.
   * @param {string} value The value to set for the option array path.
   */
  set optionArrayPath(value) {
    this.setAttribute("option-array-path", value);
  }
  /**
   * Gets the option array path attribute.
   * @returns {string} The value of the option array path attribute or "data" if not set.
   */
  get optionArrayPath() {
    return this.getAttribute("option-array-path");
  }
  /**
   * Checks if the option array path attribute is present.
   * @returns {boolean} True if the option array path attribute is present, false otherwise.
   */
  get hasOptionArrayPath() {
    return this.hasAttribute("option-array-path");
  }
  /**
   * Gets the dropdown height attribute.
   * @returns {string} The value of the dropdown height attribute or "100%" if not set.
   */
  get dropdownHeight() {
    return this.getAttribute("dropdown-height") || "100%";
  }
  /**
   * Sets the dropdown height attribute.
   * @param {string} value The value to set for the dropdown height.
   */
  set dropdownHeight(value) {
    this.setAttribute("dropdown-height", value);
  }
  /**
   * Sets the item value attribute.
   * @param {string} value The value to set for the item value.
   */
  set itemValue(value) {
    this.setAttribute("item-value", value);
  }
  /**
   * Gets the item value attribute.
   * @returns {string} The value of the item value attribute or "value" if not set.
   */
  get itemValue() {
    return this.getAttribute("item-value") || "value";
  }
  /**
   * Sets the item text attribute.
   * @param {string} value The value to set for the item text.
   */
  set itemText(value) {
    this.setAttribute("item-text", value);
  }
  /**
   * Gets the item text attribute.
   * @returns {string} The value of the item text attribute or "text" if not set.
   */
  get itemText() {
    return this.getAttribute("item-text") || "text";
  }
  /**
   * Gets the lazy load size attribute.
   * @returns {number} The value of the lazy load size attribute or 10 if not set.
   */
  get lazyLoadSize() {
    return this.getAttribute("lazy-load-size") || 10;
  }
  /**
   * Sets the lazy load size attribute.
   * @param {number} value The value to set for the lazy load size.
   */
  set lazyLoadSize(value) {
    this.setAttribute("lazy-load-size", value);
  }
  /**
   * Sets the search attribute.
   * @param {string} value The value to set for the search.
   */
  set search(value) {
    this.setAttribute("search", value);
  }
  /**
   * Gets the search attribute.
   * @returns {string} The value of the search attribute.
   */
  get search() {
    return this.getAttribute("search");
  }
  /**
   * Checks if the search attribute is present.
   * @returns {boolean} True if the search attribute is present, false otherwise.
   */
  get hasSearch() {
    return this.hasAttribute("search");
  }
  /**
   * Retrieves the value of the 'search-to-query-params' attribute from the current instance.
   * @returns {string | null} The value of the 'search-to-query-params' attribute, or null if the attribute is not set.
   */
  get searchToQueryParams() {
    return this.getAttribute("search-to-query-params");
  }
  /**
   * Sets the value to define search-to-query params behavior.
   * @param {string} value The value to be set for the search-to-query-params attribute.
   */
  set searchToQueryParams(value) {
    this.setAttribute("search-to-query-params", value);
  }
  /**
   * Determines whether the 'search-to-query-params' attribute is present on the element.
   * @returns {boolean} True if the 'search-to-query-params' attribute exists, otherwise false.
   */
  get hasSearchToQueryParams() {
    return this.hasAttribute("search-to-query-params");
  }
  /**
   * Sets the value of the search parameter name attribute.
   * @param {string} value The string value to set as the search parameter name.
   */
  set searchParamName(value) {
    this.setAttribute("search-param-name", value);
  }
  /**
   * Gets the search parameter name used in queries.
   * Retrieves the value of the 'search-param-name' attribute.
   * If the attribute is not set, it defaults to 'search'.
   * @returns {string} The search parameter name used for queries.
   */
  get searchParamName() {
    return this.getAttribute("search-param-name") || "search";
  }
  /**
   * Sets the queryParams attribute on the element.
   * @param {string} value The query parameters to set, represented as a string.
   */
  set queryParams(value) {
    this.setAttribute("query-params", value);
  }
  /**
   * Retrieves the value of the 'query-params' attribute.
   * @returns {string | null} The value of the 'query-params' attribute, or null if the attribute is not set.
   */
  get queryParams() {
    return this.getAttribute("query-params");
  }
  /**
   * Sets the lazy attribute.
   * @param {boolean} value The value to set for the lazy attribute.
   */
  set lazy(value) {
    this.setAttribute("lazy", value);
  }
  /**
   * Checks if the lazy attribute is present.
   * @returns {boolean} True if the lazy attribute is present, false otherwise.
   */
  get lazy() {
    return this.hasAttribute("lazy");
  }
  /**
   * Gets the loaded options.
   * @returns {Array} The loaded options.
   */
  get options() {
    var _a;
    return (_a = this.loadedOptions) == null ? void 0 : _a.flat();
  }
  /**
   * Gets the loaded options.
   * @type {Array}
   */
  get loadedOptions() {
    return __privateGet(this, _loadedOptions);
  }
  /**
   * Sets the loaded options.
   * @type {Array}
   */
  set loadedOptions(loadedOptions) {
    __privateSet(this, _loadedOptions, loadedOptions);
  }
  /**
   * Array of preloaded elements.
   * @type {Array}
   * @private
   */
  get drawPreloadedElements() {
    return __privateGet(this, _drawPreloadedElements);
  }
  /**
   * Sets the elements that are preloaded and ready to be drawn.
   * @param {Array|object} elements The elements to be set for preloading. This can be an array or a specific object containing drawable elements.
   */
  set drawPreloadedElements(elements) {
    __privateSet(this, _drawPreloadedElements, elements);
  }
  /**
   * Returns the CSS styles for the component.
   * @static
   * @returns {CSSStyleSheet} The CSS styles for the component.
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Retrieves an array of attributes that should be observed for changes.
   * The method returns a list of attribute names that the browser will monitor for changes.
   * @returns {Array<string>} An array of attribute names to observe.
   */
  static get observedAttributes() {
    return ["search", "attached"];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    this.syncAria();
  }
  /**
   * Draws the component.
   * @returns {DocumentFragment}
   */
  async draw() {
    let fragment = document.createDocumentFragment();
    const slot = document.createElement("slot");
    fragment.appendChild(slot);
    this.syncAria();
    if (this.lazy) {
      if (this.contains(this.infiniteScroll)) {
        this.drawPreloadedElements.forEach((el) => {
          el.remove();
        });
        this.loadedOptions = [];
        this.infiniteScroll.placementObj.innerHTML = "";
        this.infiniteScroll.totalPages = 0;
        this.infiniteScroll.refresh();
      }
      let loader = document.createElement("div");
      loader.setAttribute("slot", "loader");
      loader.append("Loading...");
      loader.classList.add("loader");
      const infiniteScroll = document.createElement("wje-infinite-scroll");
      infiniteScroll.setAttribute("placement", "wje-list");
      infiniteScroll.setAttribute("height", this.dropdownHeight);
      infiniteScroll.setAttribute("object-name", this.optionArrayPath);
      infiniteScroll.dataToHtml = this.htmlItem;
      infiniteScroll.setCustomData = async (page, signal) => {
        let processedUrl = `${this.url}${this.search ? `/${this.search}` : ""}?page=${page}&size=${this.lazyLoadSize}${this.queryParams ? `&${this.queryParams}` : ""}`;
        if (this.hasSearchToQueryParams) {
          processedUrl = `${this.url}?page=${page}&size=${this.lazyLoadSize}${this.queryParams ? `&${this.queryParams}` : ""}${this.search ? `&${this.searchParamName}=${this.search}` : ""}`;
        }
        let res = await this.service.get(processedUrl, null, false, signal);
        const filteredOptions = this.filterOutDrawnOptions(res);
        this.loadedOptions.push(...this.processData(filteredOptions));
        return filteredOptions;
      };
      const list = document.createElement("wje-list");
      infiniteScroll.append(list);
      infiniteScroll.append(loader);
      if (this.hasAttribute("attached") && !this.hasSearch) {
        this.appendChild(infiniteScroll);
        this.drawPreloadedElements.forEach((el) => {
          list.appendChild(el);
        });
        this.infiniteScroll = infiniteScroll;
      }
    } else {
      this.response = await this.getPages();
      let optionsData = this.filterOutDrawnOptions(this.response);
      optionsData = this.processData(optionsData);
      this.loadedOptions.push(...optionsData);
      this.append(...optionsData.map(this.htmlItem));
      event.dispatchCustomEvent(this, "wje-options:load", {});
    }
    return fragment;
  }
  /**
   * Syncs ARIA attributes on the host element.
   */
  syncAria() {
    var _a;
    const isMultiple = (_a = this.closest("wje-select")) == null ? void 0 : _a.hasAttribute("multiple");
    this.setAriaState({
      role: "listbox",
      multiselectable: isMultiple ? "true" : void 0
    });
  }
  afterDraw() {
    event.addListener(this.infiniteScroll, "wje-infinite-scroll:load", null, this.dispatchOptionsLoadEvent);
  }
  /**
   * Processes the provided data based on the optional array path set in the instance.
   * @param {object} data The input data to be processed.
   * @returns {Array} The resolved options array from the data or an empty array if no match is found.
   */
  processData(data) {
    var _a;
    const splittedOptionArrayPath = this.optionArrayPath ? (_a = this.optionArrayPath) == null ? void 0 : _a.split(".") : null;
    let options = data;
    splittedOptionArrayPath == null ? void 0 : splittedOptionArrayPath.forEach((path) => {
      options = options[path];
    });
    return options ?? [];
  }
  /**
   * Filters out options from the response object that have already been drawn, based on the specified option array path.
   * @param {object} response The response object containing data to process.
   * @returns {object} The filtered response object with drawn options removed.
   */
  filterOutDrawnOptions(response) {
    var _a;
    const splittedOptionArrayPath = this.optionArrayPath ? (_a = this.optionArrayPath) == null ? void 0 : _a.split(".") : [];
    let filteredResponse = structuredClone(response);
    filteredResponse = this.recursiveUpdate(filteredResponse, splittedOptionArrayPath);
    return filteredResponse;
  }
  /**
   * Fetches the pages from the provided URL.
   * @param {number} page The page number to fetch.
   * @returns {Promise<object>} The fetched data.
   * @throws Will throw an error if the response is not ok.
   */
  async getPages(page) {
    const response = await fetch(this.url);
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.status}`);
    }
    return await response.json();
  }
  /**
   * Finds the selected option data based on the given selected option values.
   * @param {Array} selectedOptionValues The array of selected option values.
   * @returns {Array} - The array of option data that matches the selected option values.
   */
  findSelectedOptionData(selectedOptionValues = []) {
    return this.options.filter((option) => selectedOptionValues.includes(option[this.itemValue]));
  }
  /**
   * Adds an option to the element.
   * @param {object} optionData The data of the option to be added.
   */
  addOption(optionData) {
    if (this.loadedOptions.some((option) => option[this.itemValue] === optionData[this.itemValue])) {
      return;
    }
    const item = this.htmlItem(optionData);
    __privateGet(this, _drawPreloadedElements).push(item);
    this.prepend(item);
    this.loadedOptions.push(optionData);
  }
  /**
   * Adds options to the element.
   * @param {Array} optionsData The array of option data to be added.
   * @param {boolean} [silent] Whether to suppress events triggered by adding options.
   */
  addOptions(optionsData = [], silent = false) {
    if (Array.isArray(optionsData)) optionsData == null ? void 0 : optionsData.forEach((od) => this.addOption(od, silent));
    else this.addOption(optionsData, silent);
  }
  beforeDisconnect() {
    event.removeListener(this.infiniteScroll, "wje-infinite-scroll:load", null, this.dispatchOptionsLoadEvent);
  }
}
_loadedOptions = new WeakMap();
_drawPreloadedElements = new WeakMap();
Options.define("wje-options", Options);
export {
  Options as default
};
//# sourceMappingURL=wje-options.js.map
