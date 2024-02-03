var h = Object.defineProperty;
var g = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e;
var c = (a, t, e) => (g(a, typeof t != "symbol" ? t + "" : t, e), e);
import w from "./wj-element.js";
import { L as b } from "./localize-762a9f0f.js";
import "./wj-store.js";
const f = `:host{width:100%}.native-file-upload-item{display:grid;grid-template-columns:auto 1fr 1fr;grid-template-rows:auto auto auto;gap:0 .5rem;grid-template-areas:"image name actions" "image size actions" "progress progress progress";padding:.5rem;border:1px solid var(--wj-border-color);border-radius:var(--wj-border-radius-medium)}.image{grid-area:image;align-items:center;display:flex}::slotted([slot=img]){--wj-img-border-radius: var(--wj-border-radius-medium) !important}.name{grid-area:name;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:700}.size{grid-area:size;display:flex}.actions{grid-area:actions;display:flex;align-items:center;justify-content:flex-end}.file-progress{grid-area:progress}wj-icon{margin-right:.25rem}wj-img{margin-right:.25rem}.file-info>span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}wj-slider{flex-basis:100%;margin-top:.5rem}::part(slider)::-webkit-slider-thumb{visibility:hidden}::part(slider)::-moz-range-thumb{visibility:hidden}::part(slider)::-ms-thumb{visibility:hidden}wj-img{width:50px;height:50px;display:flex;align-items:center;padding:.25rem;border:1px solid var(--wj-border-color);border-radius:var(--wj-border-radius-medium)}
`;
class v extends w {
  constructor() {
    super();
    c(this, "className", "FileUploadItem");
    c(this, "onDelete", () => {
      this.remove();
    });
    this.localizer = new b(this);
  }
  static get cssStyleSheet() {
    return f;
  }
  static get observedAttributes() {
    return ["uploaded"];
  }
  attributeChangedCallback(e, i, m) {
    if (e === "uploaded" && this.drawingStatus === "AFTER") {
      this.uploadedEl.setAttribute("value", this.uploaded);
      let r = +this.uploaded / +this.size * 100 || 0;
      this.sliderEl.setAttribute("value", Math.round(r, 0));
    }
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw() {
    let e = document.createDocumentFragment(), i = document.createElement("div");
    i.classList.add("native-file-upload-item");
    let m = document.createElement("slot");
    m.setAttribute("name", "img");
    let r = document.createElement("div");
    r.classList.add("image");
    let p = document.createElement("span");
    p.classList.add("name"), p.innerText = this.name;
    let d = document.createElement("slot");
    d.classList.add("actions"), d.setAttribute("name", "action");
    let l = document.createElement("wj-button");
    l.setAttribute("fill", "link"), l.setAttribute("size", "small"), l.innerHTML = '<wj-icon name="x" size="small"></wj-icon>';
    let o = document.createElement("span");
    o.classList.add("size");
    let n = document.createElement("wj-format-digital");
    n.setAttribute("value", this.uploaded || 0), n.innerHTML = `<span slot="start">${this.localizer.translate("wj.file.upload.uploaded")}</span>`;
    let u = document.createElement("wj-format-digital");
    u.setAttribute("value", this.size || 0), u.innerHTML = `<span slot="start">&nbsp;${this.localizer.translate("wj.file.upload.from")} </span>`;
    let s = document.createElement("wj-slider");
    return s.classList.add("file-progress"), s.setAttribute("id", "id-" + this.lastModified), s.setAttribute("value", this.progress || 0), s.setAttribute("color", "success"), r.appendChild(m), d.appendChild(l), o.appendChild(n), o.appendChild(u), i.appendChild(r), i.appendChild(p), i.appendChild(o), i.appendChild(d), i.appendChild(s), e.appendChild(i), this.button = l, this.uploadedEl = n, this.sliderEl = s, e;
  }
  afterDraw() {
    this.button.addEventListener("wj:button-click", this.onDelete);
  }
}
customElements.get("wj-file-upload-item") || window.customElements.define("wj-file-upload-item", v);
export {
  v as FileUploadItem
};
