var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { Localizer } from "./localize.js";
import Button from "./wje-button.js";
import WJElement from "./wje-element.js";
import FormatDigital from "./wje-format-digital.js";
import { I as Icon } from "./icon-DVyMc4Wv.js";
import Slider from "./wje-slider.js";
import { event } from "./event.js";
const styles = "/*\n[ WJ File Upload Item ]\n*/\n\n:host {\n    width: 100%;\n}\n\n.native-file-upload-item {\n    display: grid;\n    grid-template-columns: auto 1fr 1fr;\n    grid-template-rows: auto auto auto;\n    gap: 0.5rem;\n    grid-template-areas:\n        'image name actions'\n        'image size actions'\n        'progress progress progress';\n    padding: 0.5rem;\n    border-width: var(--wje-file-upload-item-border-width);\n    border-style: var(--wje-file-upload-item-border-style);\n    border-color: var(--wje-file-upload-item-border-color);\n    border-radius: var(--wje-border-radius-medium);\n}\n\n.image {\n    grid-area: image;\n    align-items: center;\n    display: flex;\n}\n\n::slotted([slot='img']) {\n    --wje-img-border-radius: var(--wje-border-radius-medium) !important;\n}\n\n.name {\n    grid-area: name;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-weight: bold;\n}\n\n.size {\n    grid-area: size;\n    display: flex;\n}\n\n.actions {\n    grid-area: actions;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n.file-progress {\n    grid-area: progress;\n}\n\n.file-info > span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\nwje-slider {\n    flex-basis: 100%;\n    margin-top: 0.5rem;\n}\n\nwje-slider::part(slider) {\n    color: yellow;\n}\n\nwje-slider::part(slider)::-webkit-slider-thumb {\n    visibility: hidden;\n}\n\nwje-slider::part(slider)::-moz-range-thumb {\n    visibility: hidden;\n}\n\nwje-slider::part(slider)::-ms-thumb {\n    visibility: hidden;\n}\n\nwje-img {\n    width: 50px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    padding: 0.25rem;\n    border: 1px solid var(--wje-border-color);\n    border-radius: var(--wje-border-radius-medium);\n}\n";
class FileUploadItem extends WJElement {
  /**
   * Creates an instance of FileUploadItem.
   * @class
   */
  constructor() {
    super();
    /**
     * Dependencies for the component.
     * @type {object}
     */
    __publicField(this, "dependencies", {
      "wje-format-digital": FormatDigital,
      "wje-button": Button,
      "wje-slider": Slider,
      "wje-icon": Icon
    });
    __publicField(this, "className", "FileUploadItem");
    /**
     * Handles the delete action.
     */
    __publicField(this, "onDelete", () => {
      event.dispatchCustomEvent(this, "wje-file-upload-item:remove", this.data);
      this.remove();
    });
    this.localizer = new Localizer(this);
  }
  /**
   * Sets the 'is-uploaded' attribute to indicate the uploaded status.
   * @param {boolean} value The value to determine if the element is uploaded.
   */
  set isUploaded(value) {
    this.setAttribute("is-uploaded", "");
  }
  /**
   * Checks if the 'is-uploaded' attribute is present on the element.
   * @returns {boolean} True if the 'is-uploaded' attribute exists, otherwise false.
   */
  get isUploaded() {
    return this.hasAttribute("is-uploaded");
  }
  /**
   * Sets the size attribute of the element.
   * @param {string | number} value The value to set for the size attribute.
   */
  set size(value) {
    this.setAttribute("size", value);
  }
  /**
   * Retrieves the value of the 'size' attribute.
   * @returns {string|null} The value of the 'size' attribute, or null if the attribute is not present.
   */
  get size() {
    return this.getAttribute("size");
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
    return ["uploaded", "is-uploaded"];
  }
  /**
   * A lifecycle method that is called when one of the observed attributes of the custom element is added, removed, or changed.
   * This method is used to react to changes in the specified attributes.
   * @param {string} name The name of the attribute that was changed.
   * @param {string|null} oldValue The previous value of the attribute before the change, or null if the attribute was not previously set.
   * @param {string|null} newValue The new value of the attribute after the change, or null if the attribute has been removed.
   * @returns {void} This method does not return a value.
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (super.attributeChangedCallback) {
      super.attributeChangedCallback(name, oldValue, newValue);
    }
    if (name === "uploaded" && oldValue !== newValue && this.uploadedEl) {
      this.uploadedEl.setAttribute("value", newValue);
      let progress = +newValue / +this.size * 100 || 0;
      this.progress = Math.round(progress, 0);
    }
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    this.syncAria();
  }
  /**
   * Method to draw the component on the screen.
   * @returns {DocumentFragment} The fragment containing the component.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-file-upload-item");
    let slot = document.createElement("slot");
    slot.setAttribute("name", "img");
    let image = document.createElement("div");
    image.setAttribute("part", "image");
    image.classList.add("image");
    let name = document.createElement("span");
    name.classList.add("name");
    name.innerText = this.name;
    let actions = document.createElement("slot");
    actions.classList.add("actions");
    actions.setAttribute("name", "action");
    let button = document.createElement("wje-button");
    button.setAttribute("fill", "link");
    button.setAttribute("size", "small");
    button.innerHTML = `<wje-icon name="x" size="small"></wje-icon>`;
    let sizeWrapper = document.createElement("span");
    sizeWrapper.classList.add("size");
    let uploaded = document.createElement("wje-format-digital");
    uploaded.setAttribute("value", this.uploaded || 0);
    uploaded.innerHTML = `<span slot="start">${this.localizer.translate("wj.file.upload.uploaded")}</span>`;
    let size = document.createElement("wje-format-digital");
    size.setAttribute("value", this.size || 0);
    size.innerHTML = `<span slot="start">&nbsp;${this.localizer.translate("wj.file.upload.from")} </span>`;
    let size2 = document.createElement("wje-format-digital");
    size2.setAttribute("value", this.size || 0);
    let slider = document.createElement("wje-progress-bar");
    slider.classList.add("file-progress");
    slider.setAttribute("id", "id-" + this.lastModified);
    slider.setAttribute("progress", this.progress);
    slider.setAttribute("color", "success");
    image.appendChild(slot);
    actions.appendChild(button);
    sizeWrapper.appendChild(uploaded);
    sizeWrapper.appendChild(size);
    native.appendChild(image);
    native.appendChild(name);
    if (!this.isUploaded)
      native.appendChild(sizeWrapper);
    else
      native.appendChild(size2);
    native.appendChild(actions);
    if (!this.isUploaded)
      native.appendChild(slider);
    fragment.appendChild(native);
    this.button = button;
    this.uploadedEl = uploaded;
    this.sliderEl = slider;
    this.nameEl = name;
    return fragment;
  }
  /**
   * Called after the component has been drawn.
   */
  afterDraw() {
    this.syncAria();
    this.button.addEventListener("wje-button:click", this.onDelete);
  }
  /**
   * Sync ARIA attributes on host and actions.
   */
  syncAria() {
    var _a;
    if (!this.hasAttribute("role")) {
      this.setAriaState({ role: "listitem" });
    }
    const nameText = (((_a = this.nameEl) == null ? void 0 : _a.textContent) || this.name || "").trim();
    if (nameText && !this.hasAttribute("aria-label")) {
      this.setAriaState({ label: nameText });
    }
    if (this.button && !this.button.hasAttribute("aria-label")) {
      const label = nameText ? `Remove ${nameText}` : "Remove file";
      this.button.setAttribute("aria-label", label);
    }
  }
}
FileUploadItem.define("wje-file-upload-item", FileUploadItem);
export {
  FileUploadItem as default
};
//# sourceMappingURL=wje-file-upload-item.js.map
