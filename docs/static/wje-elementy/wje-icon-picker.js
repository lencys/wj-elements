var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
import { getBasePath } from "./base-path.js";
import InfiniteScroll from "./wje-infinite-scroll.js";
import Input from "./wje-input.js";
import Tooltip from "./wje-tooltip.js";
import { event } from "./event.js";
const styles = "/*\n[ Wj Icon Picker ]\n*/\n\n:host {\n    /*padding: 0 1rem;*/\n}\n\n.anchor {\n    width: var(--wje-icon-picker-icon-size);\n    height: var(--wje-icon-picker-icon-size);\n    padding: var(--wje-icon-picker-padding);\n    border-width: var(--wje-icon-picker-border-width);\n    border-style: var(--wje-icon-picker-border-style);\n    border-color: var(--wje-icon-picker-border-color);\n    box-sizing: border-box;\n    border-radius: var(--wje-icon-picker-radius);\n}\n\n.picker {\n    width: 320px;\n    height: 271px;\n    box-shadow: var(--wje-icon-picker-shadow);\n    border-radius: var(--wje-icon-picker-radius);\n    border-width: var(--wje-icon-picker-border-width);\n    border-style: var(--wje-icon-picker-border-style);\n    border-color: var(--wje-icon-picker-border-color);\n    overflow: auto;\n    padding: 1rem;\n    background: var(--wje-icon-picker-background);\n}\n\n.icon-items {\n    --icon-min-width: 2rem;\n    display: grid;\n    grid-gap: 0.5rem;\n    grid-template-columns: repeat(auto-fit, minmax(var(--icon-min-width), 1fr));\n}\n\n.icon-item {\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    color: inherit;\n    padding: 0.25rem;\n    min-height: var(--wje-icon-picker-icon-size);\n    min-width: var(--wje-icon-picker-icon-size);\n    text-decoration: none;\n\n    &:hover {\n        border-radius: 0.25rem;\n        background: var(--wje-border-color);\n    }\n}\n\n.wje-size {\n    --wje-icon-size: 24px !important;\n}\n\nicon-item svg {\n    width: var(--wje-icon-picker-icon-size);\n    height: var(--wje-icon-picker-icon-size);\n}\n\nwje-input {\n    --wje-input-border-radius: 4px;\n    --wje-input-margin-bottom: 0;\n}\n\nwje-infinite-scroll {\n    margin-top: 1rem;\n}\n\nwje-select {\n    --wje-select-border-width: 0 0 1px 0 !important;\n    --wje-select-border-radius: 0 !important;\n    margin-bottom: 1rem;\n}\n\n.anchor wje-icon {\n    --wje-icon-size: 100% !important;\n}\n";
class IconPicker extends WJElement {
  /**
   * Creates an instance of IconPicker.
   * @class
   */
  constructor() {
    super();
    /**
     * Dependencies of the IconPicker component.
     * @property {object} dependencies
     */
    __publicField(this, "dependencies", {
      "wje-input": Input,
      "wje-infinite-scroll": InfiniteScroll,
      "wje-tooltip": Tooltip
    });
    __publicField(this, "className", "IconPicker");
    /**
     * Handles the selection of an icon from a given input element and updates the relevant properties and events.
     * @function selectIcon
     * @param {HTMLElement} icon The icon element that was selected. It must have a 'name' attribute and may optionally have a 'filled' attribute.
     * The function performs the following actions:
     * - Retrieves the name of the selected icon from its 'name' attribute.
     * - Determines the style type ('filled' or 'outline') based on the presence of the 'filled' attribute.
     * - Searches for a matching object in the `transformedObjects` array based on name and style.
     * - Creates a new `wje-icon` element and assigns its attributes based on the selected icon's properties.
     * - Updates the selected object's properties and assigns it to the `value`, `icon`, and `type` properties of the class.
     * - Dispatches a custom event (`wje-icon-picker:select`) to signal a change in the selected icon.
     */
    __publicField(this, "selectIcon", (icon) => {
      var _a, _b;
      let name = icon.getAttribute("name");
      let stylesType = icon.hasAttribute("filled") ? "filled" : "outline";
      let uniqueObject = this.transformedObjects.find(
        (i) => i.name === name && Object.keys(i.styles)[0] === stylesType
      );
      const iconElement = document.createElement("wje-icon");
      iconElement.setAttribute("name", name);
      if ((_a = uniqueObject.styles) == null ? void 0 : _a.hasOwnProperty("filled")) iconElement.setAttribute("filled", "");
      uniqueObject.icon = iconElement;
      this.value = uniqueObject;
      this.icon = uniqueObject.name;
      this.type = ((_b = uniqueObject.styles) == null ? void 0 : _b.hasOwnProperty("filled")) ? "filled" : "outline";
      event.dispatchCustomEvent(this, "wje-icon-picker:select", uniqueObject);
    });
    /**
     * Converts an object of tags into a transformed array of objects, separating `filled` and `outline` styles.
     * The function processes an input object containing tags, extracts its values,
     * and for each tag that has both `filled` and `outline` styles, splits them into
     * two separate objects. Tags without `filled` styles remain unchanged.
     * @param {object} tags The input object containing tags as properties. Each property is an object with a `styles` key.
     * @param {object} tags[].styles The styles object containing `filled` and/or `outline` styles.
     * @param {object} [tags[].styles.outline] The outline style object, if present.
     * @param {object} [tags[].styles.filled] The filled style object, if present.
     * @returns {Array<object>} An array of transformed objects. Objects with both `filled` and `outline` styles are split into separate objects, each containing only one style.
     * @example
     * const tags = {
     *     hourglass: {
     *         styles: {
     *             outline: { ... },
     *             filled: { ... },
     *         }
     *     },
     *     clock: {
     *         styles: {
     *             outline: { ... },
     *         }
     *     }
     * };
     * const result = convertObject(tags);
     * console.log(result);
     * // [
     * //   { styles: { outline: { ... } } },
     * //   { styles: { filled: { ... } } },
     * //   { styles: { outline: { ... } } }
     * // ]
     */
    __publicField(this, "convertObject", (tags = {}) => {
      let originalObjects = Object.values(tags);
      let transformedObjects = [];
      for (let i = 0; i < originalObjects.length; i++) {
        const obj = originalObjects[i];
        if (obj.styles.filled) {
          transformedObjects.push(
            { ...obj, styles: { outline: obj.styles.outline } },
            { ...obj, styles: { filled: obj.styles.filled } }
          );
        } else {
          transformedObjects.push(obj);
        }
      }
      return transformedObjects;
    });
    /**
     * Converts an icon data object into an HTML element structure.
     * This function creates a styled HTML element that represents an icon with a tooltip.
     * The tooltip displays the name of the icon, and the icon itself is styled based on
     * whether it uses the `filled` style.
     * @param {object} data The icon data object.
     * @returns {HTMLElement} A `div` element containing the icon wrapped in a `wje-tooltip`. The tooltip displays the icon name, and the `wje-icon` element represents the icon with attributes set according to the data.
     * @example
     * const iconData = {
     *     name: "hourglass",
     *     styles: {
     *         filled: { ... }
     *     }
     * };
     * const htmlElement = dataToHtml(iconData);
     * document.body.appendChild(htmlElement);
     *
     * // The resulting structure:
     * // <div class="icon-item">
     * //   <wje-tooltip content="hourglass">
     * //     <wje-icon name="hourglass" size="large" filled></wje-icon></wje-icon>
     * //   </wje-tooltip>
     * // </div>
     */
    __publicField(this, "dataToHtml", (data) => {
      let iconItem = document.createElement("div");
      iconItem.classList.add("icon-item");
      let tooltip = document.createElement("wje-tooltip");
      tooltip.setAttribute("content", data.name);
      let icon = document.createElement("wje-icon");
      icon.setAttribute("name", data.name);
      icon.setAttribute("size", "large");
      if (data.styles.hasOwnProperty("filled")) icon.setAttribute("filled", "");
      tooltip.appendChild(icon);
      iconItem.appendChild(tooltip);
      return iconItem;
    });
    /**
     * Searches icons based on user input.
     * This method handles the input event and filters the available icons based on the provided search string.
     * The filtering is performed on an index that combines icon names and their tags.
     * The results are then adjusted for infinite scrolling.
     * @param {Event} e The input event (e.g., `wje-input:input`) containing the search query details.
     */
    __publicField(this, "searchIcon", (e) => {
      var _a;
      const query = !((_a = e.detail) == null ? void 0 : _a.value) ? "" : e.detail.value.toLowerCase();
      const results = this.index.filter((item) => item.searchText.includes(query));
      if (results.length === 0) {
        this.clearIconsContainer();
        const noResultsDiv = document.createElement("div");
        noResultsDiv.setAttribute("part", "no-results");
        noResultsDiv.classList.add("no-results");
        noResultsDiv.textContent = "No icons found";
        this.infiniteScroll.querySelector(".icon-items").append(noResultsDiv);
        return;
      }
      this.infiniteScroll.unScrollEvent();
      this.infiniteScroll.setCustomData = (page = 0) => {
        const data = results.slice(page * this.size, page * this.size + this.size);
        return {
          data,
          page,
          size: this.size,
          totalPages: Math.ceil(results.length / this.size)
        };
      };
      this.infiniteScroll.reset();
      this.infiniteScroll.scrollEvent();
      this.infiniteScroll.loadPages(0);
    });
  }
  /**
   * Setter for the markerPosition property.
   * @param {any} value The value to set.
   */
  set size(value) {
    this.setAttribute("size", value);
  }
  /**
   * Getter for the markerPosition property.
   * @returns {any} size The value of the markerPosition property.
   */
  get size() {
    return this.getAttribute("size") || 60;
  }
  /**
   * Setter for the value property.
   * @param value
   */
  set icon(value) {
    this.setAttribute("icon", value);
  }
  /**
   * Getter for the value property.
   * @returns {string}
   */
  get icon() {
    return this.getAttribute("icon");
  }
  /**
   * Setter for the value property.
   * @param value
   */
  set type(value) {
    this.setAttribute("type", value);
  }
  /**
   * Getter for the value property.
   * @returns {string}
   */
  get type() {
    return this.getAttribute("type");
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
   * Prepares data before the draw operation by fetching tags, transforming objects, and creating an index.
   * @returns {Promise<void>} Resolves when data preparation is complete.
   */
  async beforeDraw() {
    this.tags = Object.values(await this.getTags());
    this.transformedObjects = this.convertObject(this.tags);
    this.index = this.transformedObjects.map((item) => ({
      ...item,
      searchText: `${item.name.toLowerCase()} ${item.tags.join(" ").toLowerCase()}`
    }));
  }
  /**
   * Draws and initializes the native color picker component on the DOM.
   * This method creates and appends the necessary elements, including input and infinite scroll components,
   * and sets their attributes and event listeners. It also provides custom data handling for infinite scrolling
   * and manages the way icons are displayed based on input.
   * @returns {DocumentFragment} A document fragment containing the fully constructed color picker component.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-color-picker");
    if (this.hasAttribute("icon") && this.icon) {
      let icon = document.createElement("wje-icon");
      icon.setAttribute("name", this.icon);
      if (this.type === "filled")
        icon.setAttribute("filled", "");
      this.selectIcon(icon);
    }
    let picker = document.createElement("div");
    picker.classList.add("picker");
    let input = document.createElement("wje-input");
    input.classList.add("input");
    input.setAttribute("variant", "standard");
    input.setAttribute("placeholder", "type to filter...");
    input.setAttribute("clearable", "");
    input.addEventListener("wje-input:input", this.debounce(this.searchIcon.bind(this), 300));
    input.addEventListener("wje-input:clear", this.searchIcon);
    let infiniteScroll = new InfiniteScroll();
    infiniteScroll.setAttribute("url", getBasePath("assets/tags.json"));
    infiniteScroll.setAttribute("placement", ".icon-items");
    infiniteScroll.setAttribute("size", this.size);
    infiniteScroll.setAttribute("height", "223px");
    infiniteScroll.innerHTML = '<div class="icon-items"></div>';
    picker.append(input, infiniteScroll);
    native.append(picker);
    fragment.append(native);
    this.input = input;
    this.picker = picker;
    this.infiniteScroll = infiniteScroll;
    this.infiniteScroll.dataToHtml = this.dataToHtml;
    this.infiniteScroll.compareFunction = (i, item) => i.name === item.name;
    this.infiniteScroll.setCustomData = (page = 0) => {
      return {
        data: this.transformedObjects.slice(page * this.size, page * this.size + this.size),
        page,
        size: this.size,
        totalPages: Math.round(this.transformedObjects.length / this.size)
      };
    };
    return fragment;
  }
  /**
   * Executes actions that occur after the component finishes its draw phase. Sets up event listeners for input clear
   * and infinite scroll item clicks, resets initialization state, and rebinds scroll-related events.
   * @returns {void} Does not return a value.
   */
  afterDraw() {
    this.syncAria();
    this.addEventListener("wje-input:clear", () => {
      this.clearIconsContainer();
      this.infiniteScroll.scrollEvent();
      this.infiniteScroll.loadPages(0);
    });
    this.addEventListener("wje-infinite-scroll:click-item", (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      this.selectIcon(e.detail.context.querySelector("wje-icon"));
    });
    this.init = false;
  }
  /**
   * Sync ARIA attributes on host.
   */
  syncAria() {
    if (!this.hasAttribute("role")) {
      this.setAriaState({ role: "group" });
    }
    const ariaLabel = this.getAttribute("aria-label");
    const label = this.getAttribute("label");
    if (!ariaLabel && label) {
      this.setAriaState({ label });
    }
  }
  /**
   * Initializes the component.
   */
  initial() {
    this.infiniteScroll.scrollEvent();
  }
  /**
   * Gets the tags.
   * @returns {Promise<Array>} The tags of the component.
   */
  async getTags() {
    const response = await fetch(getBasePath("assets/tags.json"));
    return response.json();
  }
  /**
   * Called when the component is disconnected.
   */
  beforeDisconnect() {
    this.init = false;
  }
  /**
   * Clears the icons container.
   */
  clearIconsContainer() {
    this.context.querySelector(".icon-items").innerHTML = "";
  }
  /**
   * Creates a debounced version of the provided function that delays its execution
   * until after the specified delay has passed since the last time it was invoked.
   * @param {Function} fn The function to debounce.
   * @param {number} delay The delay duration in milliseconds.
   * @returns {Function} A new debounced function that delays the execution of the original function.
   */
  debounce(fn, delay) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  }
}
IconPicker.define("wje-icon-picker", IconPicker);
export {
  IconPicker as default
};
//# sourceMappingURL=wje-icon-picker.js.map
