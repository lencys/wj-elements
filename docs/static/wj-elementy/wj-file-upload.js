var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import { L as Localizer } from "./localize-DSOailh_.js";
function fileType() {
  return [
    {
      "type": ["jpg", "jpeg", "png", "gif", "bpm", "tiff", "svg"],
      "name": "photo"
    },
    {
      "type": ["zip", "rar", "cab", "jar", "tar", "gzip", "uue", "bz2", "scorm", "war"],
      "name": "file-type-zip"
    },
    {
      "type": ["mov", "mp4", "avi", "flv"],
      "name": "video"
    },
    {
      "type": ["m4a", "mp3", "wav"],
      "name": "audio"
    },
    {
      "type": ["html", "html"],
      "name": "file-type-html"
    },
    {
      "type": ["css"],
      "name": "code"
    },
    {
      "type": ["txt"],
      "name": "file-type-txt"
    },
    {
      "type": ["doc", "docx"],
      "name": "file-type-doc"
    },
    {
      "type": ["xls", "xlsx"],
      "name": "file-type-xls"
    },
    {
      "type": ["pdf"],
      "name": "file-type-pdf"
    },
    {
      "type": ["ppt", "pptx", "odp"],
      "name": "file-type-ppt"
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
  console.log("FILE", file, acceptedFileTypes);
  const baseMimeType = file.type.split("/")[0];
  console.log("BASE MIME TYPE", baseMimeType);
  let acceptedTypes = Array.isArray(acceptedFileTypes) ? acceptedFileTypes : acceptedFileTypes.split(",");
  console.log("ACCEPTED TYPES", acceptedTypes);
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
function uploadFile(file, chunkSize, preview) {
  console.log("UPLOAD FILE:", file, chunkSize, preview);
  let start = 0;
  const progressArray = new Array(Math.ceil(file.size / chunkSize)).fill(0);
  const readAndUploadChunk = (start2, end) => {
    const reader = new FileReader();
    const chunkIndex = start2 / chunkSize;
    const chunk = file.slice(start2, end);
    reader.onload = (e) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "/upload", true);
      xhr.setRequestHeader("Content-Range", `${start2}-${end}/${file.size}`);
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = event.loaded / event.total * 100;
          progressArray[chunkIndex] = progress;
          progressArray.reduce((a, b) => a + b, 0) / progressArray.length;
        }
      };
      xhr.onload = () => {
        if (xhr.status == 200 || xhr.status == 201) {
          progressArray[chunkIndex] = 100;
          start2 += chunkSize;
          if (start2 < file.size) {
            preview.setAttribute("uploaded", start2);
            readAndUploadChunk(start2, Math.min(start2 + chunkSize, file.size));
          } else {
            preview.setAttribute("uploaded", start2);
            console.log("Upload complete");
          }
        } else {
          console.error("Error during upload: ", xhr.statusText);
        }
      };
      xhr.send(e.target.result);
    };
    reader.readAsArrayBuffer(chunk);
  };
  readAndUploadChunk(start, Math.min(start + chunkSize, file.size));
}
const styles = '/*\n[ WJ File Upload ]\n*/\n:host {\n  width: 100%;\n}\n\n.native-file-upload {\n  width: 100%;\n}\n\n.file-label {\n  background: var(--wj-color-contrast-0);\n  border: 1px dashed var(--wj-border-color);\n  border-radius: var(--wj-border-radius-medium);\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  padding: 1rem;\n  margin-bottom: 0.5rem;\n  flex-direction: column;\n}\n\n.file-preview {\n  display: grid;\n  grid-template-columns: auto 1fr 1fr;\n  grid-template-rows: auto auto auto;\n  gap: 0 0;\n  grid-template-areas: "image name name" "image size size" "progress progress progress";\n}\n\n.file-image {\n  grid-area: image;\n  align-items: center;\n  display: flex;\n}\n\n.file-name {\n  grid-area: name;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.file-size {\n  grid-area: size;\n  display: flex;\n}\n\n.file-progress {\n  grid-area: progress;\n}\n\nwj-icon {\n  margin-right: 0.25rem;\n}\n\nwj-img {\n  margin-right: 0.25rem;\n}\n\n.file-info > span {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nwj-slider {\n  flex-basis: 100%;\n  margin-top: 0.5rem;\n}\n\n::part(slider)::-webkit-slider-thumb {\n  visibility: hidden;\n}\n::part(slider)::-moz-range-thumb {\n  visibility: hidden;\n}\n::part(slider)::-ms-thumb {\n  visibility: hidden;\n}\n\nwj-img {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  border: 1px solid var(--wj-border-color);\n  border-radius: var(--wj-border-radius-medium);\n}';
class FileUpload extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "FileUpload");
    __publicField(this, "handleDrop", (event) => {
      const fileList = event.dataTransfer.files;
      this.resetFormState();
      this.uploadFiles(fileList);
    });
    __publicField(this, "handleInputChange", (event) => {
      this.resetFormState();
      try {
        this.handleSubmit(event);
      } catch (err) {
        console.log("NOT VALID 1", err);
        return;
      }
    });
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
    this.setAttribute("chunk-size", value);
  }
  get chunkSize() {
    const chunk = this.getAttribute("chunk-size");
    return this.hasAttribute("chunk-size") ? chunk : 1024 * 1024;
  }
  set maxFileSize(value) {
    this.setAttribute("max-file-size", value);
  }
  get maxFileSize() {
    const fileSize = this.getAttribute("max-file-size");
    return this.hasAttribute("max-file-size") ? fileSize * 1024 * 1024 : 1024 * 1024;
  }
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
    let slot = document.createElement("slot");
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
  createButton() {
    let button = document.createElement("wj-button");
    button.innerText = this.label || this.localizer.translate("wj.file.upload.button");
    let slot = document.createElement("slot");
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
    this.uploadFiles(this.fileInput.files);
  }
  // tu treba pridat kontrolu chunku
  uploadFiles(files) {
    if (files.length === 0) {
      return;
    }
    Array.from(files).forEach((file) => {
      this.assertFilesValid(file);
      let preview;
      let reader = new FileReader();
      reader.onload = (e) => {
        preview = this.createPreview(file, reader);
        this.fileList.appendChild(preview);
        uploadFile(file, this.chunkSize, preview);
      };
      reader.readAsDataURL(file);
    });
  }
  createPreview(file, reader) {
    let preview = document.createElement("wj-file-upload-item");
    preview.setAttribute("name", file.name);
    preview.setAttribute("size", file.size);
    preview.setAttribute("uploaded", "0");
    preview.setAttribute("progress", "0");
    preview.innerHTML = `<wj-icon slot="img" name="${getFileTypeIcon(file.type.split("/")[1])}" size="large"></wj-icon>`;
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
  }
  updateProgressBar(value, id) {
    const percent = Math.round(value);
    this.context.querySelector("#id-" + id).value = percent;
  }
  showPendingState() {
    this.updateStatusMessage("⏳ Pending...");
  }
  resetFormState() {
    this.fileList.textContent = "";
    this.updateStatusMessage(`🤷‍♂ Nothing's uploaded`);
  }
}
WJElement.define("wj-file-upload", FileUpload);
export {
  FileUpload as default
};
