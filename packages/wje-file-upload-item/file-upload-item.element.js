import { default as WJElement, event } from "../wje-element/element.js";
import { Localizer } from "../utils/localize.js";
import FormatDigital from "../wje-format-digital/format-digital.js";
import Button from "../wje-button/button.js";
import Slider from "../wje-slider/slider.js";
import Icon from "../wje-icon/icon.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary This element allows users to upload files.
 * `FileUploadItem` is a custom web component that represents a file upload item.
 * It extends from `WJElement` and uses the `Localizer` utility for localization.
 * @documentation https://elements.webjet.sk/components/file-upload
 * @status stable
 *
 * @extends WJElement
 *
 * @cssprop --primary-color - The primary color of the file upload item
 *
 * @part button - The delete button part
 * @part image - The image part
 * @part name - The name part
 * @part size - The size part
 *
 * @slot img - Slot for the image
 * @slot action - Slot for the action buttons
 *
 * @fires wje-button:click - Dispatches when the delete button is clicked
 *
 * @tag wje-file-upload
 */
export default class FileUploadItem extends WJElement {
  /**
   * Creates an instance of FileUploadItem.
   *
   * @constructor
   */
  constructor() {
    super();
    this.localizer = new Localizer(this);
  }

  /**
   * Dependencies
   * @type {Object}
   */
  dependencies = {
    "wje-format-digital": FormatDigital,
    "wje-button": Button,
    "wje-slider": Slider,
    "wje-icon": Icon
  }

  className = "FileUploadItem";

  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return styles;
  }

  /**
   * Returns the list of attributes to observe for changes.
   *
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return ["uploaded"];
  }

  /**
   * Called when an observed attribute has been added, removed, updated, or replaced.
   *
   * @param {string} name - The name of the attribute.
   * @param {string} old - The old value of the attribute.
   * @param {string} newName - The new value of the attribute.
   */
  attributeChangedCallback(name, old, newName) {

    if(name === "uploaded" && this.drawingStatus === "AFTER") {
      this.uploadedEl.setAttribute("value", this.uploaded);

      let progress = (+this.uploaded/+this.size) * 100 || 0;
      this.sliderEl.setAttribute("value", Math.round(progress, 0));
    }
  }

  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }

  /**
   * Method to draw the component.
   * @param {Object} context - The context of the component.
   * @param {Object} store - The store of the component.
   * @param {Object} params - The parameters for the component.
   * @returns {DocumentFragment} The fragment containing the component.
   */
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();

    let native = document.createElement("div");
    native.classList.add("native-file-upload-item");

    let slot = document.createElement("slot");
    slot.setAttribute("name", "img");

    let image = document.createElement("div");
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

    let slider = document.createElement("wje-slider");
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

  /**
   * Handles the delete action.
   */
  onDelete = () => {
    this.remove();
  }
}