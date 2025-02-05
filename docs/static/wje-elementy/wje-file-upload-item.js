var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { Localizer } from "./localize.js";
import Button from "./wje-button.js";
import WJElement from "./wje-element.js";
import FormatDigital from "./wje-format-digital.js";
import Icon from "./wje-icon.js";
import Slider from "./wje-slider.js";
const styles = "/*\n[ WJ File Upload Item ]\n*/\n\n:host {\n    width: 100%;\n}\n\n.native-file-upload-item {\n    display: grid;\n    grid-template-columns: auto 1fr 1fr;\n    grid-template-rows: auto auto auto;\n    gap: 0 0.5rem;\n    grid-template-areas:\n        'image name actions'\n        'image size actions'\n        'progress progress progress';\n    padding: 0.5rem;\n    border-width: var(--wje-file-upload-item-border-width);\n    border-style: var(--wje-file-upload-item-border-style);\n    border-color: var(--wje-file-upload-item-border-color);\n    border-radius: var(--wje-border-radius-medium);\n}\n\n.image {\n    grid-area: image;\n    align-items: center;\n    display: flex;\n}\n\n::slotted([slot='img']) {\n    --wje-img-border-radius: var(--wje-border-radius-medium) !important;\n}\n\n.name {\n    grid-area: name;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-weight: bold;\n}\n\n.size {\n    grid-area: size;\n    display: flex;\n}\n\n.actions {\n    grid-area: actions;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n.file-progress {\n    grid-area: progress;\n}\n\n.file-info > span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\nwje-slider {\n    flex-basis: 100%;\n    margin-top: 0.5rem;\n}\n\nwje-slider::part(slider) {\n    color: yellow;\n}\n\nwje-slider::part(slider)::-webkit-slider-thumb {\n    visibility: hidden;\n}\n\nwje-slider::part(slider)::-moz-range-thumb {\n    visibility: hidden;\n}\n\nwje-slider::part(slider)::-ms-thumb {\n    visibility: hidden;\n}\n\nwje-img {\n    width: 50px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    padding: 0.25rem;\n    border: 1px solid var(--wje-border-color);\n    border-radius: var(--wje-border-radius-medium);\n}\n";
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
      this.remove();
    });
    this.localizer = new Localizer(this);
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
    return ["uploaded"];
  }
  /**
   * Called when an observed attribute has been added, removed, updated, or replaced.
   * @param {string} name The name of the attribute that has changed.
   * @param {string} old The old value of the attribute.
   * @param {string} newName The new value of the attribute.
   */
  attributeChangedCallback(name, old, newName) {
    if (name === "uploaded" && this.drawingStatus === "AFTER") {
      this.uploadedEl.setAttribute("value", this.uploaded);
      let progress = +this.uploaded / +this.size * 100 || 0;
      this.sliderEl.value = Math.round(progress, 0);
    }
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
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
    let slider = document.createElement("wje-progress-bar");
    slider.classList.add("file-progress");
    slider.setAttribute("id", "id-" + this.lastModified);
    slider.setAttribute("value", this.progress || 0);
    slider.setAttribute("color", "success");
    image.appendChild(slot);
    actions.appendChild(button);
    sizeWrapper.appendChild(uploaded);
    sizeWrapper.appendChild(size);
    native.appendChild(image);
    native.appendChild(name);
    native.appendChild(sizeWrapper);
    native.appendChild(actions);
    native.appendChild(slider);
    fragment.appendChild(native);
    this.button = button;
    this.uploadedEl = uploaded;
    this.sliderEl = slider;
    return fragment;
  }
  /**
   * Called after the component has been drawn.
   */
  afterDraw() {
    this.button.addEventListener("wje-button:click", this.onDelete);
  }
}
FileUploadItem.define("wje-file-upload-item", FileUploadItem);
export {
  FileUploadItem as default
};
