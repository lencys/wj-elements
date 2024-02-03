var y = Object.defineProperty;
var w = (r, s, e) => s in r ? y(r, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[s] = e;
var h = (r, s, e) => (w(r, typeof s != "symbol" ? s + "" : s, e), e);
import v from "./wj-element.js";
import { L as x } from "./localize-762a9f0f.js";
import "./wj-store.js";
function A() {
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
function E(r) {
  let s;
  return r.toLowerCase() !== "folder" ? A().forEach((e) => {
    e.type.includes(r.toLowerCase()) && (s = e.name);
  }) : s = "folder", s;
}
function z(r, s) {
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
function L(r, s, e) {
  console.log("UPLOAD FILE:", r, s, e);
  let t = 0;
  const i = new Array(Math.ceil(r.size / s)).fill(0), l = (a, p) => {
    const n = new FileReader(), u = a / s, o = r.slice(a, p);
    n.onload = (c) => {
      const d = new XMLHttpRequest();
      d.open("POST", "/upload", !0), d.setRequestHeader("Content-Range", `${a}-${p}/${r.size}`), d.upload.onprogress = (m) => {
        if (m.lengthComputable) {
          const g = m.loaded / m.total * 100;
          i[u] = g, i.reduce((f, b) => f + b, 0) / i.length;
        }
      }, d.onload = () => {
        d.status == 200 || d.status == 201 ? (i[u] = 100, a += s, a < r.size ? (e.setAttribute("uploaded", a), l(a, Math.min(a + s, r.size))) : (e.setAttribute("uploaded", a), console.log("Upload complete"))) : console.error("Error during upload: ", d.statusText);
      }, d.send(c.target.result);
    }, n.readAsArrayBuffer(o);
  };
  l(t, Math.min(t + s, r.size));
}
const j = `:host{width:100%}.native-file-upload{width:100%}.file-label{background:var(--wj-color-contrast-0);border:1px dashed var(--wj-border-color);border-radius:var(--wj-border-radius-medium);align-items:center;justify-content:center;display:flex;padding:1rem;margin-bottom:.5rem;flex-direction:column}.file-preview{display:grid;grid-template-columns:auto 1fr 1fr;grid-template-rows:auto auto auto;gap:0 0;grid-template-areas:"image name name" "image size size" "progress progress progress"}.file-image{grid-area:image;align-items:center;display:flex}.file-name{grid-area:name;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.file-size{grid-area:size;display:flex}.file-progress{grid-area:progress}wj-icon{margin-right:.25rem}wj-img{margin-right:.25rem}.file-info>span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}wj-slider{flex-basis:100%;margin-top:.5rem}::part(slider)::-webkit-slider-thumb{visibility:hidden}::part(slider)::-moz-range-thumb{visibility:hidden}::part(slider)::-ms-thumb{visibility:hidden}wj-img{width:50px;height:50px;display:flex;align-items:center;padding:.25rem;border:1px solid var(--wj-border-color);border-radius:var(--wj-border-radius-medium)}
`;
class F extends v {
  constructor() {
    super();
    h(this, "className", "FileUpload");
    h(this, "handleDrop", (e) => {
      const t = e.dataTransfer.files;
      this.resetFormState(), this.uploadFiles(t);
    });
    h(this, "handleInputChange", (e) => {
      this.resetFormState();
      try {
        this.handleSubmit(e);
      } catch (t) {
        console.log("NOT VALID 1", t);
        return;
      }
    });
    this.localizer = new x(this);
  }
  set acceptedTypes(e) {
    this.setAttribute("accepted-types", e);
  }
  get acceptedTypes() {
    const e = this.getAttribute("accepted-types");
    return this.hasAttribute("accepted-types") ? e : "";
  }
  set chunkSize(e) {
    this.setAttribute("chunk-size", e);
  }
  get chunkSize() {
    const e = this.getAttribute("chunk-size");
    return this.hasAttribute("chunk-size") ? e : 1024 * 1024;
  }
  set maxFileSize(e) {
    this.setAttribute("max-file-size", e);
  }
  get maxFileSize() {
    const e = this.getAttribute("max-file-size");
    return this.hasAttribute("max-file-size") ? e * 1024 * 1024 : 1024 * 1024;
  }
  static get cssStyleSheet() {
    return j;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(e, t, i) {
    let l = document.createDocumentFragment(), a = document.createElement("div");
    a.classList.add("native-file-upload"), a.setAttribute("part", "native");
    let p = document.createElement("div");
    p.classList.add("file-label");
    let n = document.createElement("wj-button");
    n.innerText = this.label || this.localizer.translate("wj.file.upload.button");
    let u = document.createElement("slot"), o = document.createElement("input");
    o.setAttribute("type", "file"), o.setAttribute("multiple", ""), o.setAttribute("style", "display:none;"), n.appendChild(u), n.appendChild(o), this.fileInput = o;
    let c = document.createElement("div");
    return c.classList.add("file-list"), p.appendChild(u), p.appendChild(n), a.appendChild(o), a.appendChild(p), a.appendChild(c), l.appendChild(a), this.native = a, this.fileList = c, this.button = n, l;
  }
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
  createButton() {
    let e = document.createElement("wj-button");
    e.innerText = this.label || this.localizer.translate("wj.file.upload.button");
    let t = document.createElement("slot"), i = document.createElement("input");
    return i.setAttribute("type", "file"), i.setAttribute("multiple", ""), i.setAttribute("style", "display:none;"), e.appendChild(t), e.appendChild(i), this.fileInput = i, e;
  }
  handleSubmit(e) {
    e.preventDefault(), this.uploadFiles(this.fileInput.files);
  }
  // tu treba pridat kontrolu chunku
  uploadFiles(e) {
    e.length !== 0 && Array.from(e).forEach((t) => {
      this.assertFilesValid(t);
      let i, l = new FileReader();
      l.onload = (a) => {
        i = this.createPreview(t, l), this.fileList.appendChild(i), L(t, this.chunkSize, i);
      }, l.readAsDataURL(t);
    });
  }
  createPreview(e, t) {
    let i = document.createElement("wj-file-upload-item");
    return i.setAttribute("name", e.name), i.setAttribute("size", e.size), i.setAttribute("uploaded", "0"), i.setAttribute("progress", "0"), i.innerHTML = `<wj-icon slot="img" name="${E(e.type.split("/")[1])}" size="large"></wj-icon>`, i;
  }
  createThumbnail(e, t) {
    let i = document.createElement("img");
    return i.setAttribute("src", t.result), i;
  }
  // TODO: alowed types a size limit by malo byt cez attributy
  assertFilesValid(e) {
    const { name: t, size: i } = e;
    if (console.log("FILE", e, this.acceptedTypes), !z(e, this.acceptedTypes))
      throw new Error(`❌ FILE: "${t}" Valid file types are: "${this.acceptedTypes}"`);
    if (i > this.maxFileSize)
      throw new Error(`❌ File "${t}" could not be uploaded. Only images up to ${this.maxFileSize} MB are allowed. Nie je to ${i}`);
  }
  updateStatusMessage(e) {
  }
  updateProgressBar(e, t) {
    const i = Math.round(e);
    this.context.querySelector("#id-" + t).value = i;
  }
  showPendingState() {
    this.updateStatusMessage("⏳ Pending...");
  }
  resetFormState() {
    this.fileList.textContent = "", this.updateStatusMessage("🤷‍♂ Nothing's uploaded");
  }
}
customElements.get("wj-file-upload") || window.customElements.define("wj-file-upload", F);
export {
  F as FileUpload
};
