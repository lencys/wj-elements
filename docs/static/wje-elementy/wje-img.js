var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Img ]\n*/\n\nimg {\n    display: block;\n    width: var(--wje-img-width, 100%);\n    height: var(--wje-img-height, auto);\n    max-width: 100%;\n    object-fit: inherit;\n    border-radius: var(--wje-img-border-radius, 0);\n}\n";
class Img extends WJElement {
  /**
   * Creates an instance of Img.
   * @class
   */
  constructor() {
    super();
    /**
     * The class name for the component.
     * @type {string}
     */
    __publicField(this, "className", "Img");
    __publicField(this, "setAvatarInitials", (value = false) => {
      let parent = this.parentElement;
      if ((parent == null ? void 0 : parent.tagName) === "WJE-AVATAR") parent.initials = value;
    });
    /**
     * Deletes the current image by calling the remove method.
     * This function is typically used to trigger the removal of an image element
     * or perform cleanup operations related to the image.
     */
    __publicField(this, "deleteImage", () => {
      this.remove();
    });
    /**
     * Handles error scenarios by checking the `fallout` property and performing
     * corresponding actions. If `fallout` is not defined, the function terminates
     * early. Logs the active actions and attempts to assign an error handler
     * based on the `fallout` value. If the `fallout` value does not correspond to
     * a recognized action, it logs an error message.
     * @function onerrorFunc
     * @memberof Img
     */
    __publicField(this, "onerrorFunc", (img) => {
      if (!this.fallout) return;
      if (this.actions[this.fallout]) {
        img.onerror = this.actions[this.fallout];
      } else {
        console.error("Unsupported value:", this.fallout);
      }
    });
    this._fallout = false;
    this.actions = {
      delete: () => this.deleteImage(),
      log: () => console.error("Error log pre obrázok:", this.src)
    };
  }
  /**
   * Sets the value of the `src` attribute for the element.
   * @param {string} value The value to set for the `src` attribute.
   */
  set src(value) {
    this.setAttribute("src", value);
  }
  /**
   * Retrieves the value of the 'src' attribute from the element.
   * @returns {string} The value of the 'src' attribute.
   */
  get src() {
    return this.getAttribute("src");
  }
  /**
   * Sets the value of the 'alt' attribute for the element.
   * @param {string} value The new value to set for the 'alt' attribute.
   */
  set alt(value) {
    this.setAttribute("alt", value);
  }
  /**
   * Retrieves the value of the 'alt' attribute for the current element.
   * @returns {string|null} The value of the 'alt' attribute, or null if the attribute is not set.
   */
  get alt() {
    return this.getAttribute("alt");
  }
  /**
   * Sets the fallout property. Updates the `fallout` attribute if the value is a string;
   * otherwise, assigns the value to the `_fallout` property.
   * @param {string|*} value The value to set for the fallout property. If a string, it will update the `fallout` attribute; for other types, it will assign it to the `_fallout` property.
   */
  set fallout(value) {
    if (typeof value === "string") {
      this.setAttribute("fallout", value);
    } else {
      this._fallout = value;
    }
  }
  /**
   * Retrieves the value of the 'fallout' attribute if it exists, otherwise returns the internal `_fallout` property.
   * @returns {string|null} The value of the 'fallout' attribute or the `_fallout` property if the attribute is not present. Returns null if no value is found.
   */
  get fallout() {
    return this.hasAttribute("fallout") ? this.getAttribute("fallout") : this._fallout;
  }
  /**
   * Sets the value of the loader attribute.
   * @param {string} value The value to set for the loader attribute.
   */
  set loader(value) {
    if (value) {
      this.setAttribute("loader", value);
    }
  }
  /**
   * Retrieves the value of the 'loader' attribute from the element.
   * @returns {string|null} The value of the 'loader' attribute if set, otherwise null.
   */
  get loader() {
    return this.getAttribute("loader") || "./assets/img/image-loader.gif";
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
    return ["src", "alt"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    var _a, _b;
    (_a = super.attributeChangedCallback) == null ? void 0 : _a.call(this, name, oldValue, newValue);
    if (oldValue === newValue) return;
    if (name === "alt") {
      if (this.native) this.native.setAttribute("alt", this.alt || "");
      const label = (_b = this.alt) == null ? void 0 : _b.trim();
      if (label) this.setAriaState({ label });
    }
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    var _a;
    this.isShadowRoot = "open";
    this.setAriaState({ role: "img" });
    if ((_a = this.alt) == null ? void 0 : _a.trim()) this.setAriaState({ label: this.alt.trim() });
  }
  /**
   * Creates and assembles a lazy-loaded image element within a document fragment.
   * @returns {DocumentFragment} A document fragment containing the image element.
   */
  draw() {
    var _a;
    let fragment = document.createDocumentFragment();
    let native = document.createElement("img");
    native.setAttribute("part", "native");
    native.setAttribute("src", this.loader);
    native.setAttribute("alt", this.alt || "");
    native.classList.add("lazy-loaded-image", "lazy");
    native.addEventListener("error", (e) => {
      const absoluteLoaderUrl = new URL(this.loader, window.location.origin).href;
      if (e.target.src === absoluteLoaderUrl) return;
      this.setAvatarInitials(true);
    });
    this.onerrorFunc(native);
    fragment.appendChild(native);
    this.native = native;
    if ((_a = this.alt) == null ? void 0 : _a.trim()) this.setAriaState({ label: this.alt.trim() });
    return fragment;
  }
  /**
   * Handles post-draw operations, such as setting up a lazy image loader using an IntersectionObserver.
   * Observes when the target element becomes visible in the viewport and updates its source with the provided image source.
   * Removes the `lazy` class once the image source is updated and unobserves the element.
   * It also invokes the `onerrorFunc` method at the beginning to handle potential error scenarios.
   * @returns {void} Does not return a value.
   */
  afterDraw() {
    let lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = this.src;
          this.classList.remove("lazy");
          lazyImageObserver.unobserve(entry.target);
        }
      });
    });
    lazyImageObserver.observe(this.native);
  }
  /**
   * Adds a new action to the internal actions object.
   * @param {string} name The name of the action to be added.
   * @param {Function} func The function representing the action logic.
   * @returns {void} This method does not return a value.
   */
  addAction(name, func) {
    if (typeof func === "function") {
      this.actions[name] = func;
    } else {
      console.error("The action must be a function.");
    }
  }
  /**
   * Removes an action from the actions list if it exists.
   * @param {string} name The name of the action to remove.
   * @returns {void} Does not return a value.
   */
  removeAction(name) {
    if (this.actions[name]) {
      delete this.actions[name];
    } else {
      console.error(`Action "${name}" does not exist.`);
    }
  }
}
Img.define("wje-img", Img);
export {
  Img as default
};
//# sourceMappingURL=wje-img.js.map
