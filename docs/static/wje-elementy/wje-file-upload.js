var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { Localizer } from "./localize.js";
import Button from "./wje-button.js";
import WJElement from "./wje-element.js";
function fileType() {
  return [
    {
      type: ["jpg", "jpeg", "png", "gif", "bpm", "tiff", "svg"],
      name: "photo"
    },
    {
      type: ["zip", "rar", "cab", "jar", "tar", "gzip", "uue", "bz2", "scorm", "war"],
      name: "file-type-zip"
    },
    {
      type: ["mov", "mp4", "avi", "flv"],
      name: "video"
    },
    {
      type: ["m4a", "mp3", "wav"],
      name: "audio"
    },
    {
      type: ["html", "html"],
      name: "file-type-html"
    },
    {
      type: ["css"],
      name: "code"
    },
    {
      type: ["txt"],
      name: "file-type-txt"
    },
    {
      type: ["doc", "docx"],
      name: "file-type-doc"
    },
    {
      type: ["xls", "xlsx"],
      name: "file-type-xls"
    },
    {
      type: ["pdf"],
      name: "file-type-pdf"
    },
    {
      type: ["ppt", "pptx", "odp"],
      name: "file-type-ppt"
    }
  ];
}
function getFileTypeIcon(type) {
  let searchType;
  if (type.toLowerCase() !== "folder") {
    fileType().forEach((i) => {
      if (i.type.includes(type.toLowerCase())) {
        searchType = i.name;
      }
    });
  } else {
    searchType = "folder";
  }
  return searchType;
}
function isValidFileType(file, acceptedFileTypes) {
  const baseMimeType = file.type.split("/")[0];
  let acceptedTypes = Array.isArray(acceptedFileTypes) ? acceptedFileTypes : acceptedFileTypes.split(",");
  if (acceptedTypes.length === 0) {
    throw new Error("acceptedFileTypes is empty");
  }
  for (let type of acceptedTypes) {
    if (type.includes(baseMimeType + "/*")) {
      return true;
    }
    if (type.includes(file.type) || type.includes(file.type.split("/")[1])) {
      return true;
    }
  }
  return false;
}
function upload(url, chunkSize = 1024 * 1024, wholeFile = false) {
  if (wholeFile) {
    return (file, preview) => uploadWholeFile(url, file, preview);
  }
  return (file, preview) => uploadFileInChunks(url, file, preview, chunkSize);
}
async function uploadFileInChunks(url, file, preview, chunkSize = 1024 * 1024) {
  let offset = 0;
  const totalChunks = Math.ceil(file.size / chunkSize);
  const partResponses = [];
  while (offset < file.size) {
    const chunk = file.slice(offset, offset + chunkSize);
    const stream = new ReadableStream({
      start(controller) {
        const reader = chunk.stream().getReader();
        let uploadedBytes = 0;
        reader.read().then(function process({ done, value }) {
          if (done) {
            controller.close();
            return Promise.resolve();
          }
          uploadedBytes += value.byteLength;
          const percentComplete = (offset + uploadedBytes) / file.size * 100;
          console.log(`Upload Progress: ${percentComplete.toFixed(2)}%`);
          preview.setAttribute("uploaded", offset + uploadedBytes);
          controller.enqueue(value);
          return reader.read().then(process);
        });
      }
    });
    const formData = new FormData();
    formData.append("file", new Blob([stream]));
    formData.append("chunkIndex", Math.floor(offset / chunkSize));
    formData.append("totalChunks", totalChunks);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData
      });
      if (!response.ok) {
        throw new Error(`Failed to upload chunk ${Math.floor(offset / chunkSize) + 1}: ${response.statusText}`);
      }
      console.log(`Chunk ${Math.floor(offset / chunkSize) + 1}/${totalChunks} uploaded successfully.`);
      partResponses.push(response);
    } catch (error) {
      console.error("Error uploading chunk:", error);
      break;
    }
    offset += chunkSize;
  }
  console.log("File upload complete!");
  return partResponses.at(-1).json();
}
function uploadWholeFile(url, file, preview) {
  const formData = new FormData();
  formData.append("file", file);
  return fetch(url, {
    method: "POST",
    body: formData
  }).then((response) => response.json()).then((data) => {
    preview.setAttribute("uploaded", file.size);
    return {
      data,
      file
    };
  }).catch((error) => {
    console.error("Error:", error);
  });
}
const styles = "/*\n[ WJ File Upload ]\n*/\n\n:host {\n    width: 100%;\n}\n\n.native-file-upload {\n    width: 100%;\n    position: relative;\n    border: 1px dashed var(--wje-border-color);\n    border-radius: var(--wje-border-radius-medium);\n}\n\n.file-label {\n    background: var(--wje-color-contrast-0);\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    padding: 1rem;\n    margin-bottom: 0.5rem;\n    flex-direction: column;\n    position: relative;\n}\n\n.file-preview {\n    display: grid;\n    grid-template-columns: auto 1fr 1fr;\n    grid-template-rows: auto auto auto;\n    gap: 0 0;\n    grid-template-areas:\n        'image name name'\n        'image size size'\n        'progress progress progress';\n}\n\n.file-image {\n    grid-area: image;\n    align-items: center;\n    display: flex;\n}\n\n.file-name {\n    grid-area: name;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.file-size {\n    grid-area: size;\n    display: flex;\n}\n\n.file-progress {\n    grid-area: progress;\n}\n\nwje-icon {\n    margin-right: 0.25rem;\n}\n\nwje-img {\n    margin-right: 0.25rem;\n}\n\n.file-info > span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\nwje-slider {\n    flex-basis: 100%;\n    margin-top: 0.5rem;\n}\n\n::part(slider) {\n    &::-webkit-slider-thumb {\n        visibility: hidden;\n    }\n\n    &::-moz-range-thumb {\n        visibility: hidden;\n    }\n\n    &::-ms-thumb {\n        visibility: hidden;\n    }\n}\n\nwje-img {\n    width: 50px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    padding: 0.25rem;\n    border: 1px solid var(--wje-border-color);\n    border-radius: var(--wje-border-radius-medium);\n}\n";
class FileUpload extends WJElement {
  /**
   * Constructor for FileUpload.
   * Initializes a new instance of the Localizer.
   */
  constructor() {
    super();
    /**
     * Dependencies for the FileUpload component.
     * @type {object}
     */
    __publicField(this, "dependencies", {
      "wje-button": Button
    });
    __publicField(this, "className", "FileUpload");
    /**
     * Method to handle file drop event.
     * @param {Event} event The file drop event object.
     */
    __publicField(this, "handleDrop", (event) => {
      const fileList = event.dataTransfer.files;
      this.resetFormState();
      this.addFilesToQueue(fileList);
    });
    /**
     * Method to handle file input change event.
     * @param {Event} event The file input change event object.
     */
    __publicField(this, "handleInputChange", (event) => {
      this.resetFormState();
      try {
        this.handleSubmit(event);
      } catch (err) {
      }
    });
    /**
     * Method to create an upload promise.
     * @param file
     * @returns {Promise<unknown>}
     */
    __publicField(this, "createUploadPromise", (file) => {
      return new Promise((resolve, reject) => {
        this.assertFilesValid(file);
        let preview;
        let reader = new FileReader();
        reader.onload = (e) => {
          var _a;
          this.dispatchEvent(
            new CustomEvent("file-upload:upload-started", { detail: file, bubbles: true, composed: true })
          );
          (_a = this.onUploadStarted) == null ? void 0 : _a.call(this, file);
          preview = this.createPreview(file, reader);
          this.appendChild(preview);
          this.uploadFunction(file, preview).then((res) => {
            var _a2;
            this.dispatchEvent(
              new CustomEvent("file-upload:upladed-file-complete", {
                detail: res,
                bubbles: true,
                composed: true
              })
            );
            (_a2 = this.onUploadedFileComplete) == null ? void 0 : _a2.call(this, res);
            this.uploadedFiles.push(res.data);
            resolve(res);
          });
        };
        reader.readAsDataURL(file);
      });
    });
    this.localizer = new Localizer(this);
    this._uploadedFiles = [];
    this._queuedFiles = [];
  }
  /**
   * Setter for acceptedTypes attribute.
   * @param {string} value The accepted file types for upload.
   */
  set acceptedTypes(value) {
    this.setAttribute("accepted-types", value);
  }
  /**
   * Getter for acceptedTypes attribute.
   * @returns {string} The accepted file types for upload.
   */
  get acceptedTypes() {
    const accepted = this.getAttribute("accepted-types");
    return this.hasAttribute("accepted-types") ? accepted : "";
  }
  /**
   * Setter for chunkSize attribute.
   * @param {number} value The chunk size for file upload.
   */
  set chunkSize(value) {
    this.setAttribute("chunk-size", value);
  }
  /**
   * Getter for chunkSize attribute.
   * @returns {number} The chunk size for file upload.
   */
  get chunkSize() {
    const chunk = this.getAttribute("chunk-size");
    return this.hasAttribute("chunk-size") ? chunk : 1024 * 1024;
  }
  /**
   * Setter for maxFileSize attribute.
   * @param {number} value The maximum file size for upload.
   */
  set maxFileSize(value) {
    this.setAttribute("max-file-size", value);
  }
  /**
   * Getter for maxFileSize attribute.
   * @returns {number} The maximum file size for upload.
   */
  get maxFileSize() {
    const fileSize = this.getAttribute("max-file-size");
    return this.hasAttribute("max-file-size") ? fileSize * 1024 * 1024 : 1024 * 1024;
  }
  /**
   * Setter for label attribute.
   * @param {string} value The URL to set as the upload URL.
   */
  set uploadUrl(value) {
    this.setAttribute("upload-url", value);
  }
  /**
   * Gets the upload URL for the file upload element.
   * @returns {string} The upload URL for the file upload element.
   */
  get uploadUrl() {
    return this.getAttribute("upload-url") ?? "/upload";
  }
  /**
   * Sets the autoProcessFiles attribute.
   * @param value
   */
  set autoProcessFiles(value) {
    this.setAttribute("auto-process-files", value);
  }
  /**
   * Gets the autoProcessFiles attribute.
   * @returns {any|boolean}
   */
  get autoProcessFiles() {
    return JSON.parse(this.getAttribute("auto-process-files")) ?? true;
  }
  /**
   * Sets the uploaded files.
   * @param value
   */
  set uploadedFiles(value) {
    this._uploadedFiles = value;
  }
  /**
   * Return the uploaded files.
   * @returns {[]}
   */
  get uploadedFiles() {
    return this._uploadedFiles;
  }
  /**
   * Sets the to-chunk attribute.
   * @param value
   */
  set toChunk(value) {
    this.setAttribute("to-chunk", value);
  }
  /**
   * Gets the to-chunk attribute.
   * @returns {boolean}
   */
  get toChunk() {
    return this.hasAttribute("to-chunk");
  }
  /**
   * Getter for cssStyleSheet.
   * @returns {string} The CSS styles for the component.
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Getter for observedAttributes.
   * @returns {Array} An empty array as no attributes are observed.
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Method to setup attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw() {
    console.log("beforeDraw", this.toChunk, !this.toChunk);
    this.uploadFunction = upload(this.uploadUrl, this.chunkSize, !this.toChunk);
  }
  /**
   * Method to draw the component on the screen.
   * @returns {DocumentFragment} The fragment containing the component.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-file-upload");
    native.setAttribute("part", "native");
    let label = document.createElement("div");
    label.setAttribute("part", "label");
    label.classList.add("file-label");
    label.setAttribute("part", "file-label");
    let button = document.createElement("wje-button");
    button.innerText = this.label || this.localizer.translate("wj.file.upload.button");
    let slot = document.createElement("slot");
    let fileInput = document.createElement("input");
    fileInput.setAttribute("type", "file");
    fileInput.setAttribute("multiple", "");
    fileInput.setAttribute("style", "display:none;");
    button.appendChild(slot);
    button.appendChild(fileInput);
    this.fileInput = fileInput;
    let fileList = document.createElement("slot");
    fileList.setAttribute("name", "item");
    fileList.setAttribute("part", "items");
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
  /**
   * Method to perform actions after the component is drawn.
   */
  afterDraw() {
    this.button.addEventListener("click", () => {
      this.fileInput.click();
    });
    this.fileInput.addEventListener("change", this.handleInputChange);
    this.native.addEventListener("drop", this.handleDrop);
    let dragEventCounter = 0;
    this.native.addEventListener("dragenter", (event) => {
      event.preventDefault();
      if (dragEventCounter === 0) {
        this.native.classList.add("highlight");
      }
      dragEventCounter += 1;
    });
    this.native.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (dragEventCounter === 0) {
        dragEventCounter = 1;
      }
    });
    this.native.addEventListener("dragleave", (event) => {
      event.preventDefault();
      dragEventCounter -= 1;
      if (dragEventCounter <= 0) {
        dragEventCounter = 0;
        this.native.classList.remove("highlight");
      }
    });
    this.native.addEventListener("drop", (event) => {
      event.preventDefault();
      dragEventCounter = 0;
      this.native.classList.remove("highlight");
    });
  }
  /**
   * Method to handle form submission.
   * @param {Event} event The form submission event.
   */
  handleSubmit(event) {
    event.preventDefault();
    this.addFilesToQueue(this.fileInput.files);
  }
  /**
   * Method to add files to the queue.
   * @param files
   */
  addFilesToQueue(files) {
    var _a;
    this._queuedFiles = [...files];
    this.dispatchEvent(
      new CustomEvent("file-upload:files-added", { detail: files, bubbles: true, composed: true })
    );
    (_a = this.onAddedFiles) == null ? void 0 : _a.call(this);
    if (this.autoProcessFiles) {
      this.uploadFiles();
    }
    this.fileInput.value = "";
  }
  /**
   * Method to upload files.
   */
  uploadFiles() {
    if (this._queuedFiles.length === 0) {
      return;
    }
    const uploadPromises = this._queuedFiles.map((file) => this.createUploadPromise(file));
    uploadPromises.reduce((prev, curr) => {
      return prev.then(() => {
        return curr;
      });
    }, Promise.resolve()).then(() => {
      var _a;
      this.dispatchEvent(
        new CustomEvent("file-upload:all-files-uploaded", {
          detail: this.uploadedFiles,
          bubbles: true,
          composed: true
        })
      );
      (_a = this.onAllFilesUploaded) == null ? void 0 : _a.call(this);
      this._queuedFiles = [];
    });
  }
  /**
   * Method to create a preview for the file.
   * @param {File} file The file for which the preview is to be created.
   * @param {FileReader} reader The FileReader instance to read the file.
   * @returns {HTMLElement} The created preview.
   */
  createPreview(file, reader) {
    let preview = document.createElement("wje-file-upload-item");
    preview.setAttribute("slot", "item");
    preview.setAttribute("name", file.name);
    preview.setAttribute("size", file.size);
    preview.setAttribute("uploaded", "0");
    preview.setAttribute("progress", "0");
    preview.innerHTML = `<wje-icon slot="img" name="${getFileTypeIcon(file.type.split("/")[1])}" size="large"></wje-icon>`;
    return preview;
  }
  /**
   * Method to create a thumbnail for the file.
   * @param {File} file The file for which the thumbnail is to be created.
   * @param {FileReader} reader The FileReader instance to read the file.
   * @returns {HTMLElement} The created thumbnail.
   */
  createThumbnail(file, reader) {
    let img = document.createElement("img");
    img.setAttribute("src", reader.result);
    return img;
  }
  /**
   * Method to validate the files.
   * @param {File} file The file to be validated.
   * TODO: alowed types a size limit by malo byt cez attributy
   */
  assertFilesValid(file) {
    const { name: fileName, size: fileSize } = file;
    if (!isValidFileType(file, this.acceptedTypes)) {
      throw new Error(`❌ FILE: "${fileName}" Valid file types are: "${this.acceptedTypes}"`);
    }
    if (fileSize > this.maxFileSize) {
      throw new Error(
        `❌ File "${fileName}" could not be uploaded. Only images up to ${this.maxFileSize} MB are allowed. Nie je to ${fileSize}`
      );
    }
  }
  /**
   * Method to reset the form state.
   */
  resetFormState() {
    this.fileList.textContent = "";
  }
}
FileUpload.define("wje-file-upload", FileUpload);
export {
  FileUpload as default
};
