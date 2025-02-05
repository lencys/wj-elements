var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement, { event } from "./wje-element.js";
import "./wje-infinite-scroll.js";
import Input from "./wje-input.js";
import "./wje-popup.js";
import Tooltip from "./wje-tooltip.js";
import { I as InfiniteScroll } from "./infinite-scroll.element-XVJukzjy.js";
import { P as Popup } from "./popup.element-4DNn6DjX.js";
const styles = "/*\n[ Wj Icon Picker ]\n*/\n\n:host {\n    padding: 0 1rem;\n}\n\n.anchor {\n    width: var(--wje-icon-picker-icon-size);\n    height: var(--wje-icon-picker-icon-size);\n    padding: var(--wje-icon-picker-padding);\n    border-width: var(--wje-icon-picker-border-width);\n    border-style: var(--wje-icon-picker-border-style);\n    border-color: var(--wje-icon-picker-border-color);\n    box-sizing: border-box;\n    border-radius: var(--wje-icon-picker-radius);\n}\n\n.picker {\n    width: 320px;\n    height: 271px;\n    box-shadow:\n        0 0 5px rgba(0, 0, 0, 0.05),\n        0 5px 20px rgba(0, 0, 0, 0.1);\n    border-radius: var(--wje-icon-picker-radius);\n    border-width: var(--wje-icon-picker-border-width);\n    border-style: var(--wje-icon-picker-border-style);\n    border-color: var(--wje-icon-picker-border-color);\n    overflow: auto;\n    padding: 1rem;\n    background: var(--wje-background);\n}\n\n.icon-items {\n    --icon-min-width: 2rem;\n    display: grid;\n    grid-gap: 0.5rem;\n    grid-template-columns: repeat(auto-fit, minmax(var(--icon-min-width), 1fr));\n}\n\n.icon-item {\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    color: inherit;\n    padding: 0.25rem;\n    min-height: var(--wje-icon-picker-icon-size);\n    min-width: var(--wje-icon-picker-icon-size);\n    text-decoration: none;\n\n    &:hover {\n        border-radius: 0.25rem;\n        background: var(--wje-border-color);\n    }\n}\n\n.wje-size {\n    --wje-icon-size: 24px !important;\n}\n\nicon-item svg {\n    width: var(--wje-icon-picker-icon-size);\n    height: var(--wje-icon-picker-icon-size);\n}\n\nwje-input {\n    --wje-input-border-radius: 4px;\n    --wje-input-margin-bottom: 0;\n}\n\nwje-infinite-scroll {\n    margin-top: 1rem;\n}\n\nwje-select {\n    --wje-select-border-width: 0 0 1px 0 !important;\n    --wje-select-border-radius: 0 !important;\n    margin-bottom: 1rem;\n}\n\n.anchor wje-icon {\n    --wje-icon-size: 100% !important;\n}\n";
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
      "wje-tooltip": Tooltip,
      "wje-popup": Popup
    });
    __publicField(this, "className", "IconPicker");
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
     * //     <wje-icon name="hourglass" size="large" filled></wje-icon>
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
      if (data.styles.hasOwnProperty("filled"))
        icon.setAttribute("filled", "");
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
      const query = e.detail.value.toLowerCase();
      const results = this.index.filter(
        (item) => item.searchText.includes(query)
      );
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
      this.clearIconsContainer();
      this.infiniteScroll.loadPages(0);
    });
    /**
     * Closes the component.
     */
    __publicField(this, "onClose", () => {
      this.popup.handleHide();
    });
    /**
     * Gets the URL of the tags.
     * @param {string} path The path to get the URL of.
     * @returns {string} The URL of the tags path.
     */
    __publicField(this, "getTagsUrl", (path) => {
      return new URL(process.env.VITE_ICON_ASSETS_URL + path).href;
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
  }
  /**
   * Prepares the component before drawing.
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
   * Draws the component.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-color-picker");
    let anchor = document.createElement("div");
    anchor.setAttribute("slot", "anchor");
    anchor.classList.add("anchor");
    if (this.hasAttribute("icon") && this.icon) {
      let icon = document.createElement("wje-icon");
      icon.setAttribute("name", this.icon);
      anchor.appendChild(icon);
    }
    let picker = document.createElement("div");
    picker.classList.add("picker");
    let input = document.createElement("wje-input");
    input.classList.add("input");
    input.setAttribute("variant", "standard");
    input.setAttribute("placeholder", "type to filter...");
    input.setAttribute("clearable", "");
    input.addEventListener("wje-input:input", this.searchIcon);
    let infiniteScroll = new InfiniteScroll();
    infiniteScroll.setAttribute("url", this.getTagsUrl("../../tags.json"));
    infiniteScroll.setAttribute("placement", ".icon-items");
    infiniteScroll.setAttribute("size", this.size);
    infiniteScroll.setAttribute("height", "223px");
    infiniteScroll.innerHTML = '<div class="icon-items"></div>';
    picker.appendChild(input);
    picker.appendChild(infiniteScroll);
    let popup = document.createElement("wje-popup");
    popup.setAttribute("placement", this.placement || "bottom-start");
    popup.setAttribute("offset", this.offset);
    popup.setAttribute("manual", "");
    popup.appendChild(anchor);
    popup.appendChild(picker);
    native.appendChild(popup);
    fragment.appendChild(native);
    this.popup = popup;
    this.input = input;
    this.anchor = anchor;
    this.picker = picker;
    this.infiniteScroll = infiniteScroll;
    this.setupInfiniteScroll();
    return fragment;
  }
  /**
   * Called after the component has been drawn.
   */
  afterDraw() {
    this.addEventListener("wje-popup:show", () => {
      this.initial();
    });
    this.addEventListener("wje-input:clear", () => {
      this.setupInfiniteScroll();
      this.clearIconsContainer();
      this.infiniteScroll.scrollEvent();
      this.infiniteScroll.loadPages(0);
    });
    this.addEventListener("wje-infinite-scroll:click-item", (e) => {
      let icon = e.detail.context.querySelector("wje-icon");
      let name = icon.getAttribute("name");
      let stylesType = icon.hasAttribute("filled") ? "filled" : "outline";
      let uniqueObject = this.transformedObjects.find((i) => i.name === name && Object.keys(i.styles)[0] === stylesType);
      const iconElement = document.createElement("wje-icon");
      iconElement.setAttribute("name", name);
      if (uniqueObject.styles.hasOwnProperty("filled"))
        iconElement.setAttribute("filled", "");
      uniqueObject.icon = iconElement;
      this.value = uniqueObject;
      this.icon = uniqueObject.name;
      this.anchor.innerHTML = "";
      this.anchor.appendChild(iconElement);
      event.dispatchCustomEvent(this, "wje-icon-picker:select", uniqueObject);
    });
    this.init = false;
  }
  /**
   * Initializes the component.
   */
  initial() {
    this.infiniteScroll.scrollEvent();
  }
  /**
   * Sets up the infinite scroll for the component.
   */
  setupInfiniteScroll() {
    this.infiniteScroll.dataToHtml = this.dataToHtml;
    this.infiniteScroll.setCustomData = (page = 0) => {
      return {
        data: this.transformedObjects.slice(page * this.size, page * this.size + this.size),
        page,
        size: this.size,
        totalPages: Math.round(this.transformedObjects.length / this.size)
      };
    };
  }
  /**
   * Gets the category of the tags.
   * @param {Array} tags The tags to get the category of.
   * @returns {Array} The category of the tags.
   */
  getCategory(tags) {
    return [...new Set(tags.map((obj) => obj.category))];
  }
  /**
   * Gets the tags.
   * @returns {Promise<Array>} The tags of the component.
   */
  async getTags() {
    const response = await fetch(this.getTagsUrl("../../tags.json"));
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
}
IconPicker.define("wje-icon-picker", IconPicker);
export {
  IconPicker as default
};
