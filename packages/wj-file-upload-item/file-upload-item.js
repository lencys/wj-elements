import { default as WJElement, event } from "../wj-element/wj-element.js";
import { Localizer } from "../utils/localize.js";

import styles from "./scss/styles.scss?inline";

export class FileUploadItem extends WJElement {
  constructor() {
    super();
    this.localizer = new Localizer(this);
  }

  className = "FileUploadItem";

  static get cssStyleSheet() {
    return styles;
  }

  static get observedAttributes() {
    return ["uploaded"];
  }

  attributeChangedCallback(name, old, newName) {

    if(name === "uploaded" && this.drawingStatus === "AFTER") {
      this.uploadedEl.setAttribute("value", this.uploaded);

      let progress = (+this.uploaded/+this.size) * 100 || 0;
      this.sliderEl.setAttribute("value", Math.round(progress, 0));
    }
  }

  setupAttributes() {
    this.isShadowRoot = "open";
  }

  draw() {
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

    let button = document.createElement("wj-button");
    button.setAttribute("fill", "link");
    button.setAttribute("size", "small");
    button.innerHTML = `<wj-icon name="x" size="small"></wj-icon>`;

    let sizeWrapper = document.createElement("span");
    sizeWrapper.classList.add("size");

    let uploaded = document.createElement("wj-format-digital");
    uploaded.setAttribute("value", this.uploaded || 0);
    uploaded.innerHTML = `<span slot="start">${this.localizer.translate("wj.file.upload.uploaded")}</span>`;

    let size = document.createElement("wj-format-digital");
    size.setAttribute("value", this.size || 0);
    size.innerHTML = `<span slot="start">&nbsp;${this.localizer.translate("wj.file.upload.from")} </span>`;

    let slider = document.createElement("wj-slider");
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

  afterDraw() {
    this.button.addEventListener("wj:button-click", this.onDelete);
  }

  onDelete = () => {
    this.remove();
  }
}

customElements.get("wj-file-upload-item") || window.customElements.define("wj-file-upload-item", FileUploadItem);