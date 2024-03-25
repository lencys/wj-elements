var v = Object.defineProperty;
var w = (r, s, e) => s in r ? v(r, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[s] = e;
var h = (r, s, e) => (w(r, typeof s != "symbol" ? s + "" : s, e), e);
import x from "./wje-element.js";
import { L as A } from "./localize-7fxVJArK.js";
import E from "./wje-button.js";
function z() {
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
function L(r) {
  let s;
  return r.toLowerCase() !== "folder" ? z().forEach((e) => {
    e.type.includes(r.toLowerCase()) && (s = e.name);
  }) : s = "folder", s;
}
function F(r, s) {
  console.log("FILE", r, s);
  const e = r.type.split("/")[0];
  console.log("BASE MIME TYPE", e);
  let t = Array.isArray(s) ? s : s.split(",");
  if (console.log("ACCEPTED TYPES", t), t.length === 0)
    throw new Error("acceptedFileTypes is empty");
  for (let i of t)
    if (i.includes(e + "/*") || i.includes(r.type) || i.includes(r.type.split("/")[1]))
      return !0;
  return !1;
}
function j(r, s, e) {
  console.log("UPLOAD FILE:", r, s, e);
  let t = 0;
  const i = new Array(Math.ceil(r.size / s)).fill(0), l = (a, p) => {
    const n = new FileReader(), u = a / s, o = r.slice(a, p);
    n.onload = (c) => {
      const d = new XMLHttpRequest();
      d.open("POST", "/upload", !0), d.setRequestHeader("Content-Range", `${a}-${p}/${r.size}`), d.upload.onprogress = (m) => {
        if (m.lengthComputable) {
          const g = m.loaded / m.total * 100;
          i[u] = g, i.reduce((b, y) => b + y, 0) / i.length;
        }
      }, d.onload = () => {
        d.status == 200 || d.status == 201 ? (i[u] = 100, a += s, a < r.size ? (e.setAttribute("uploaded", a), l(a, Math.min(a + s, r.size))) : (e.setAttribute("uploaded", a), console.log("Upload complete"))) : console.error("Error during upload: ", d.statusText);
      }, d.send(c.target.result);
    }, n.readAsArrayBuffer(o);
  };
  l(t, Math.min(t + s, r.size));
}
const C = ':host{width:100%}.native-file-upload{width:100%}.file-label{background:var(--wje-color-contrast-0);border:1px dashed var(--wje-border-color);border-radius:var(--wje-border-radius-medium);align-items:center;justify-content:center;display:flex;padding:1rem;margin-bottom:.5rem;flex-direction:column}.file-preview{display:grid;grid-template-columns:auto 1fr 1fr;grid-template-rows:auto auto auto;gap:0 0;grid-template-areas:"image name name" "image size size" "progress progress progress"}.file-image{grid-area:image;align-items:center;display:flex}.file-name{grid-area:name;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.file-size{grid-area:size;display:flex}.file-progress{grid-area:progress}wje-icon{margin-right:.25rem}wje-img{margin-right:.25rem}.file-info>span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}wje-slider{flex-basis:100%;margin-top:.5rem}:is()::-webkit-slider-thumb{visibility:hidden}:is()::-moz-range-thumb{visibility:hidden}:is()::-ms-thumb{visibility:hidden}wje-img{width:50px;height:50px;display:flex;align-items:center;padding:.25rem;border:1px solid var(--wje-border-color);border-radius:var(--wje-border-radius-medium)}';
class f extends x {
  /**
   * Constructor for FileUpload.
   * Initializes a new instance of the Localizer.
   */
  constructor() {
    super();
    /**
     * Dependencies
     * @type {Object}
     */
    h(this, "depandencies", {
      "wje-button": E
    });
    h(this, "className", "FileUpload");
    /**
     * Method to handle file drop event.
     * @param {Event} event - The file drop event.
     */
    h(this, "handleDrop", (e) => {
      const t = e.dataTransfer.files;
      this.resetFormState(), this.uploadFiles(t);
    });
    /**
     * Method to handle file input change event.
     * @param {Event} event - The file input change event.
     */
    h(this, "handleInputChange", (e) => {
      this.resetFormState();
      try {
        this.handleSubmit(e);
      } catch {
        return;
      }
    });
    this.localizer = new A(this);
  }
  /**
   * Setter for acceptedTypes attribute.
   * @param {string} value - The accepted file types.
   */
  set acceptedTypes(e) {
    this.setAttribute("accepted-types", e);
  }
  /**
   * Getter for acceptedTypes attribute.
   * @returns {string} The accepted file types.
   */
  get acceptedTypes() {
    const e = this.getAttribute("accepted-types");
    return this.hasAttribute("accepted-types") ? e : "";
  }
  /**
   * Setter for chunkSize attribute.
   * @param {number} value - The chunk size for file upload.
   */
  set chunkSize(e) {
    this.setAttribute("chunk-size", e);
  }
  /**
   * Getter for chunkSize attribute.
   * @returns {number} The chunk size for file upload.
   */
  get chunkSize() {
    const e = this.getAttribute("chunk-size");
    return this.hasAttribute("chunk-size") ? e : 1024 * 1024;
  }
  /**
   * Setter for maxFileSize attribute.
   * @param {number} value - The maximum file size for upload.
   */
  set maxFileSize(e) {
    this.setAttribute("max-file-size", e);
  }
  /**
   * Getter for maxFileSize attribute.
   * @returns {number} The maximum file size for upload.
   */
  get maxFileSize() {
    const e = this.getAttribute("max-file-size");
    return this.hasAttribute("max-file-size") ? e * 1024 * 1024 : 1024 * 1024;
  }
  /**
   * Getter for cssStyleSheet.
   * @returns {string} The CSS styles for the component.
   */
  static get cssStyleSheet() {
    return C;
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
  /**
   * Method to draw the component.
   * @param {Object} context - The context of the component.
   * @param {Object} store - The store of the component.
   * @param {Object} params - The parameters for the component.
   * @returns {DocumentFragment} The fragment containing the component.
   */
  draw(e, t, i) {
    let l = document.createDocumentFragment(), a = document.createElement("div");
    a.classList.add("native-file-upload"), a.setAttribute("part", "native");
    let p = document.createElement("div");
    p.classList.add("file-label");
    let n = document.createElement("wje-button");
    n.innerText = this.label || this.localizer.translate("wj.file.upload.button");
    let u = document.createElement("slot"), o = document.createElement("input");
    o.setAttribute("type", "file"), o.setAttribute("multiple", ""), o.setAttribute("style", "display:none;"), n.appendChild(u), n.appendChild(o), this.fileInput = o;
    let c = document.createElement("div");
    return c.classList.add("file-list"), p.appendChild(u), p.appendChild(n), a.appendChild(o), a.appendChild(p), a.appendChild(c), l.appendChild(a), this.native = a, this.fileList = c, this.button = n, l;
  }
  /**
   * Method to perform actions after the component is drawn.
   */
  afterDraw() {
    this.button.addEventListener("click", () => {
      this.fileInput.click();
    }), this.fileInput.addEventListener("change", this.handleInputChange), this.native.addEventListener("drop", this.handleDrop);
    let e = 0;
    this.native.addEventListener("dragenter", (t) => {
      t.preventDefault(), e === 0 && this.native.classList.add("highlight"), e += 1;
    }), this.native.addEventListener("dragover", (t) => {
      t.preventDefault(), e === 0 && (e = 1);
    }), this.native.addEventListener("dragleave", (t) => {
      t.preventDefault(), e -= 1, e <= 0 && (e = 0, this.native.classList.remove("highlight"));
    }), this.native.addEventListener("drop", (t) => {
      t.preventDefault(), e = 0, this.native.classList.remove("highlight");
    });
  }
  /**
   * Method to handle form submission.
   * @param {Event} event - The form submission event.
   */
  handleSubmit(e) {
    e.preventDefault(), this.uploadFiles(this.fileInput.files);
  }
  /**
   * Method to upload files.
   * @param {FileList} files - The files to be uploaded.
   */
  uploadFiles(e) {
    e.length !== 0 && Array.from(e).forEach((t) => {
      this.assertFilesValid(t);
      let i, l = new FileReader();
      l.onload = (a) => {
        i = this.createPreview(t, l), this.fileList.appendChild(i), j(t, this.chunkSize, i);
      }, l.readAsDataURL(t);
    });
  }
  /**
   * Method to create a preview for the file.
   * @param {File} file - The file for which the preview is to be created.
   * @param {FileReader} reader - The FileReader instance to read the file.
   * @returns {HTMLElement} The created preview.
   */
  createPreview(e, t) {
    let i = document.createElement("wje-file-upload-item");
    return i.setAttribute("name", e.name), i.setAttribute("size", e.size), i.setAttribute("uploaded", "0"), i.setAttribute("progress", "0"), i.innerHTML = `<wje-icon slot="img" name="${L(e.type.split("/")[1])}" size="large"></wje-icon>`, i;
  }
  /**
   * Method to create a thumbnail for the file.
   * @param {File} file - The file for which the thumbnail is to be created.
   * @param {FileReader} reader - The FileReader instance to read the file.
   * @returns {HTMLElement} The created thumbnail.
   */
  createThumbnail(e, t) {
    let i = document.createElement("img");
    return i.setAttribute("src", t.result), i;
  }
  /**
   * Method to validate the files.
   * @param {File} file - The file to be validated.
   * TODO: alowed types a size limit by malo byt cez attributy
   */
  assertFilesValid(e) {
    const { name: t, size: i } = e;
    if (!F(e, this.acceptedTypes))
      throw new Error(`❌ FILE: "${t}" Valid file types are: "${this.acceptedTypes}"`);
    if (i > this.maxFileSize)
      throw new Error(`❌ File "${t}" could not be uploaded. Only images up to ${this.maxFileSize} MB are allowed. Nie je to ${i}`);
  }
  /**
   * Method to update the status message.
   * @param {string} text - The status message.
   */
  updateStatusMessage(e) {
  }
  /**
   * Method to reset the form state.
   */
  resetFormState() {
    this.fileList.textContent = "", this.updateStatusMessage("🤷‍♂ Nothing's uploaded");
  }
}
f.define("wje-file-upload", f);
export {
  f as default
};
