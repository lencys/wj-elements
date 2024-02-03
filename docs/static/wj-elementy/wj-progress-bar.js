var m = Object.defineProperty;
var A = (o, i, e) => i in o ? m(o, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[i] = e;
var g = (o, i, e) => (A(o, typeof i != "symbol" ? i + "" : i, e), e);
import f from "./wj-element.js";
import "./wj-store.js";
const k = `/*!
* direction.scss
*/:host(.wj-color-primary) #bar{--wj-progress-bar-color: #7252D3}:host(.wj-color-complete) #bar{--wj-progress-bar-color: #0072EC}:host(.wj-color-success) #bar{--wj-progress-bar-color: #19AD79}:host(.wj-color-warning) #bar{--wj-progress-bar-color: #FFd945}:host(.wj-color-danger) #bar{--wj-progress-bar-color: #D83C31}:host(.wj-color-dark) #bar{--wj-progress-bar-color: #212121}:host(.wj-color-light) #bar{--wj-progress-bar-color: #fff}:host{--wj-progress-bar-color: #212121;--wj-progress-bar-text-size: 1rem}:host .progress{position:relative;display:flex;align-items:center}:host .slot-wrapper{display:flex;position:absolute;top:0;align-items:center;width:100%;height:100%;justify-content:center}:host #bar{stroke:var(--wj-progress-bar-color, red)}:host text{transform:rotate(90deg);transform-origin:center;text-anchor:middle;dominant-baseline:middle;font-size:var(--wj-progress-bar-text-size)}:host(.wj-color) #bar{stroke:var(--wj-progress-bar-color)}::slotted([slot=start]){margin-inline:0 1rem}::slotted([slot=end]){margin-inline:1rem 0}
`;
class x extends f {
  constructor() {
    super();
    g(this, "className", "ProgressBar");
    this.timerInterval = null, this.timeLimit = 60;
  }
  set radius(e) {
    this.setAttribute("radius", e);
  }
  get radius() {
    return +this.getAttribute("radius") || 70;
  }
  get diameter() {
    return this.radius * 2 + this.stroke;
  }
  set stroke(e) {
    this.setAttribute("stroke", e);
  }
  get stroke() {
    return +this.getAttribute("stroke") || 6;
  }
  get linecap() {
    return this.getAttribute("linecap") || "square";
  }
  static get cssStyleSheet() {
    return k;
  }
  static get observedAttributes() {
    return ["progress"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(e, h, l) {
    let n = this.radius + this.stroke / 2, u = document.createDocumentFragment();
    l.color && this.classList.add("wj-color-" + l.color, "wj-color");
    let a = document.createElement("div");
    a.classList.add("progress");
    let w = document.createElement("slot"), d = document.createElement("div");
    d.classList.add("slot-wrapper");
    let b = document.createElement("slot");
    b.setAttribute("name", "start");
    let p = document.createElement("slot");
    p.setAttribute("name", "end");
    let s = document.createElementNS("http://www.w3.org/2000/svg", "svg"), r, t;
    if ((this == null ? void 0 : this.type) === "circle") {
      s.setAttribute("width", this.diameter), s.setAttribute("height", this.diameter), s.setAttribute("viewBox", `0 0 ${this.diameter} ${this.diameter}`), s.setAttribute("style", "transform: rotate(-90deg)"), r = document.createElementNS("http://www.w3.org/2000/svg", "circle"), r.setAttribute("r", this.radius), r.setAttribute("cx", n), r.setAttribute("cy", n), r.setAttribute("fill", "transparent"), t = document.createElementNS("http://www.w3.org/2000/svg", "circle"), t.setAttribute("r", this.radius), t.setAttribute("cx", n), t.setAttribute("cy", n), t.setAttribute("fill", "transparent"), t.setAttribute("stroke-dasharray", "0"), t.setAttribute("stroke-dashoffset", "0");
      let c = document.createElementNS("http://www.w3.org/2000/svg", "text");
      c.setAttribute("x", "50%"), c.setAttribute("y", "50%"), c.innerHTML = this.progress + "%", s.appendChild(c);
    } else
      s.setAttribute("width", "100%"), s.setAttribute("height", this.stroke), s.setAttribute("preserveAspectRatio", "none"), r = document.createElementNS("http://www.w3.org/2000/svg", "line"), r.setAttribute("x1", 0), r.setAttribute("y1", this.stroke / 2), r.setAttribute("x2", "100%"), r.setAttribute("y2", this.stroke / 2), t = document.createElementNS("http://www.w3.org/2000/svg", "line"), t.setAttribute("x1", 0), t.setAttribute("y1", this.stroke / 2), t.setAttribute("x2", this.progress + "%"), t.setAttribute("y2", this.stroke / 2);
    return r.setAttribute("stroke", "#e0e0e0"), r.setAttribute("stroke-linecap", this.linecap), r.setAttribute("stroke-width", this.stroke + "px"), t.setAttribute("stroke-linecap", this.linecap), t.setAttribute("stroke-width", this.stroke + "px"), t.setAttribute("id", "bar"), s.appendChild(r), s.appendChild(t), d.appendChild(w), a.appendChild(b), a.appendChild(d), a.appendChild(s), a.appendChild(p), u.appendChild(a), this.background = r, this.bar = t, u;
  }
  afterDraw(e, h, l) {
    this.type === "circle" && (this.background.setAttribute("stroke-dasharray", this.getCircleDashoffset(100) + "px"), this.background.setAttribute("stroke-dashoffset", "0px"), this.bar.setAttribute("stroke-dasharray", this.getCircleDasharray(this.radius) + "px"), this.bar.setAttribute("stroke-dashoffset", this.getCircleDashoffset(l.progress, this.radius) + "px"));
  }
  getCircleDasharray(e = 70) {
    return 2 * Math.PI * e;
  }
  getCircleDashoffset(e = 0, h) {
    return this.getCircleDasharray(h) * ((100 - e) / 100);
  }
}
customElements.get("wj-progress-bar") || window.customElements.define("wj-progress-bar", x);
export {
  x as ProgressBar
};
