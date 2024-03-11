var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import { L as Localizer } from "./localize-DSOailh_.js";
const styles = '/*\n[ WJ File Upload Item ]\n*/\n:host {\n  width: 100%;\n}\n\n.native-file-upload-item {\n  display: grid;\n  grid-template-columns: auto 1fr 1fr;\n  grid-template-rows: auto auto auto;\n  gap: 0 0.5rem;\n  grid-template-areas: "image name actions" "image size actions" "progress progress progress";\n  padding: 0.5rem;\n  border: 1px solid var(--wj-border-color);\n  border-radius: var(--wj-border-radius-medium);\n}\n\n.image {\n  grid-area: image;\n  align-items: center;\n  display: flex;\n}\n\n::slotted([slot=img]) {\n  --wj-img-border-radius: var(--wj-border-radius-medium) !important;\n}\n\n.name {\n  grid-area: name;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: bold;\n}\n\n.size {\n  grid-area: size;\n  display: flex;\n}\n\n.actions {\n  grid-area: actions;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.file-progress {\n  grid-area: progress;\n}\n\nwj-icon {\n  margin-right: 0.25rem;\n}\n\nwj-img {\n  margin-right: 0.25rem;\n}\n\n.file-info > span {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nwj-slider {\n  flex-basis: 100%;\n  margin-top: 0.5rem;\n}\n\n::part(slider)::-webkit-slider-thumb {\n  visibility: hidden;\n}\n::part(slider)::-moz-range-thumb {\n  visibility: hidden;\n}\n::part(slider)::-ms-thumb {\n  visibility: hidden;\n}\n\nwj-img {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  border: 1px solid var(--wj-border-color);\n  border-radius: var(--wj-border-radius-medium);\n}';
class FileUploadItem extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "FileUploadItem");
    __publicField(this, "onDelete", () => {
      this.remove();
    });
    this.localizer = new Localizer(this);
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return ["uploaded"];
  }
  attributeChangedCallback(name, old, newName) {
    if (name === "uploaded" && this.drawingStatus === "AFTER") {
      this.uploadedEl.setAttribute("value", this.uploaded);
      let progress = +this.uploaded / +this.size * 100 || 0;
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
}
WJElement.define("wj-file-upload-item", FileUploadItem);
export {
  FileUploadItem as default
};
