import { default as WJElement, event } from "../wj-element/wj-element.js";
import { Localizer } from "../utils/localize.js";
import { getFileTypeIcon, isValidFileType, uploadFile } from "./service/service.js";

import styles from "./scss/styles.scss?inline";
import localize from "tabulator-tables/src/js/modules/Localize/Localize.js";

export class FileUpload extends WJElement {
  constructor() {
    super();
    this.localizer = new Localizer(this);
  }

  set acceptedTypes(value) {
    this.setAttribute("accepted-types", value);
  }

  get acceptedTypes() {
    const accepted = this.getAttribute("accepted-types");
    return this.hasAttribute("accepted-types") ? accepted : "";
  }

  set chunkSize(value) {
    this.setAttribute("chunk-size", value)
  }

  get chunkSize() {
    const chunk = this.getAttribute("chunk-size");
    return this.hasAttribute("chunk-size") ? chunk : 1024 * 1024;
  }

  set maxFileSize(value) {
    this.setAttribute("max-file-size", value)
  }

  get maxFileSize() {
    const fileSize = this.getAttribute("max-file-size");
    return this.hasAttribute("max-file-size") ? fileSize * 1024 * 1024: 1024 * 1024;
  }

  className = "FileUpload";

  static get cssStyleSheet() {
    return styles;
  }

  static get observedAttributes() {
    return [];
  }

  setupAttributes() {
    this.isShadowRoot = "open";
  }

  draw(context, store, params) {
    let fragment = document.createDocumentFragment();

    let native = document.createElement("div");
    native.classList.add("native-file-upload");
    native.setAttribute("part", "native");

    let label = document.createElement("div");
    label.classList.add("file-label");

    let button = document.createElement("wj-button");
    button.innerText = this.label || this.localizer.translate("wj.file.upload.button");

    // button.innerHTML = `<wj-icon slot="icon-only" name="cloud-upload"></wj-icon>`;

    let slot = document.createElement("slot");
    // icon.setAttribute("slot", "icon-only");
    // icon.setAttribute("name", "cloud-upload");

    let fileInput = document.createElement("input");
    fileInput.setAttribute("type", "file");
    fileInput.setAttribute("multiple", "");
    fileInput.setAttribute("style", "display:none;");

    button.appendChild(slot);
    button.appendChild(fileInput);

    this.fileInput = fileInput;

    let fileList = document.createElement("div");
    fileList.classList.add("file-list");

    label.appendChild(slot);
    label.appendChild(button);

    native.appendChild(fileInput);
    native.appendChild(label);
    native.appendChild(fileList);

    fragment.appendChild(native);

    this.native = native;
    this.fileList = fileList;
    this.button = button;

    return fragment;
  }

  afterDraw() {
    this.button.addEventListener("click", () => {
      this.fileInput.click();
    });

    // form.addEventListener('submit', this.handleSubmit);
    this.fileInput.addEventListener('change', this.handleInputChange);
    this.native.addEventListener('drop', this.handleDrop);

    let dragEventCounter = 0;

    this.native.addEventListener('dragenter', event => {
      event.preventDefault();

      if (dragEventCounter === 0) {
        this.native.classList.add('highlight');
      }

      dragEventCounter += 1;
    });

    this.native.addEventListener('dragover', event => {
      event.preventDefault();

      if (dragEventCounter === 0) {
        dragEventCounter = 1;
      }
    });

    this.native.addEventListener('dragleave', event => {
      event.preventDefault();

      dragEventCounter -= 1;

      if (dragEventCounter <= 0) {
        dragEventCounter = 0;
        this.native.classList.remove('highlight');
      }
    });

    this.native.addEventListener('drop', event => {
      event.preventDefault();

      dragEventCounter = 0;
      this.native.classList.remove('highlight');
    });
  }

  createButton() {

    let button = document.createElement("wj-button");
    button.innerText = this.label || this.localizer.translate("wj.file.upload.button");

    // button.innerHTML = `<wj-icon slot="icon-only" name="cloud-upload"></wj-icon>`;

    let slot = document.createElement("slot");
    // icon.setAttribute("slot", "icon-only");
    // icon.setAttribute("name", "cloud-upload");

    let fileInput = document.createElement("input");
    fileInput.setAttribute("type", "file");
    fileInput.setAttribute("multiple", "");
    fileInput.setAttribute("style", "display:none;");

    button.appendChild(slot);
    button.appendChild(fileInput);

    this.fileInput = fileInput;

    return button;
  }

  handleSubmit(event) {
    event.preventDefault();

    // this.showPendingState();
    // TODO: TU TREBA PRIDAT ZOBRAZENIE SUBORU A JEHO PROCESSU

    this.uploadFiles(this.fileInput.files);
  }

  handleDrop = (event) => {
    const fileList = event.dataTransfer.files;

    this.resetFormState();
    // console.log("DROP");
    // try {
    //   this.assertFilesValid(fileList);
    // } catch (err) {
    //   console.log("NOT VALID", err);
    //   // this.updateStatusMessage(err.message);
    //   return;
    // }
    // this.showPendingState();

    this.uploadFiles(fileList);
  }

  handleInputChange = (event) => {
    this.resetFormState();

    try {
      this.handleSubmit(event);
    } catch (err) {
      console.log("NOT VALID 1", err);
      // this.updateStatusMessage(err.message);
      return;
    }
    // submitButton.disabled = false;
  }

  // tu treba pridat kontrolu chunku
  uploadFiles(files) {
    if (files.length === 0) {
      return;
    }

    Array.from(files).forEach(file => {
      this.assertFilesValid(file);
      let preview;

      let reader = new FileReader();
      reader.onload = (e) => {
        preview = this.createPreview(file, reader)
        this.fileList.appendChild(preview);
        uploadFile(file, this.chunkSize, preview);
      }

      reader.readAsDataURL(file);
    });
  }

  createPreview(file, reader) {
    let preview  = document.createElement("wj-file-upload-item");
    preview.setAttribute("name", file.name);
    preview.setAttribute("size", file.size);
    preview.setAttribute("uploaded", "0");
    preview.setAttribute("progress", "0");
    preview.innerHTML = `<wj-icon slot="img" name="${getFileTypeIcon(file.type.split("/")[1])}" size="large"></wj-icon>`;

    // if(this.hasAttribute("icon")) {
    //   let icon = document.querySelector("wj-icon");
    //   icon.setAttribute("slot", "img");
    //   icon.setAttribute("size", "large");
    //   icon.setAttribute("name", getFileTypeIcon(file.type.split("/")[1]));
    //
    //   preview.appendChild(icon);
    // } else {
    //   let img = document.createElement("img");
    //   img.setAttribute("slot", "img");
    //   img.setAttribute("src", reader.result);
    //
    //   preview.appendChild(img);
    // }

    return preview;
  }

  createThumbnail(file, reader) {
    let img = document.createElement("img");
    img.setAttribute("src", reader.result);

    return img;
  }

  // TODO: alowed types a size limit by malo byt cez attributy
  assertFilesValid(file) {

    const { name: fileName, size: fileSize } = file;
    console.log("FILE", file, this.acceptedTypes);
    if (!isValidFileType(file, this.acceptedTypes)) {
      throw new Error(`❌ FILE: "${fileName}" Valid file types are: "${this.acceptedTypes}"`);
    }

    if (fileSize > this.maxFileSize) {
      throw new Error(`❌ File "${fileName}" could not be uploaded. Only images up to ${this.maxFileSize} MB are allowed. Nie je to ${fileSize}`);
    }
  }

  updateStatusMessage(text) {
    // this.statusMessage.textContent = text;
  }

  updateProgressBar(value, id) {
    const percent = Math.round(value);

    this.context.querySelector("#id-" + id).value = percent;
  }

  showPendingState() {
    // submitButton.disabled = true;
    this.updateStatusMessage('⏳ Pending...')
  }

  resetFormState() {
    this.fileList.textContent = '';

    // submitButton.disabled = true;
    this.updateStatusMessage(`🤷‍♂ Nothing's uploaded`)
  }
}

customElements.get("wj-file-upload") || window.customElements.define("wj-file-upload", FileUpload);