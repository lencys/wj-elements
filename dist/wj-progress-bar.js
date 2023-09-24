var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./wj-store.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Progress bar ]\n*/\n:host(.wj-color-primary) #bar {\n  --wj-progress-bar-color: #7252D3;\n}\n:host(.wj-color-complete) #bar {\n  --wj-progress-bar-color: #0072EC;\n}\n:host(.wj-color-success) #bar {\n  --wj-progress-bar-color: #19AD79;\n}\n:host(.wj-color-warning) #bar {\n  --wj-progress-bar-color: #FFd945;\n}\n:host(.wj-color-danger) #bar {\n  --wj-progress-bar-color: #D83C31;\n}\n:host(.wj-color-dark) #bar {\n  --wj-progress-bar-color: #212121;\n}\n:host(.wj-color-light) #bar {\n  --wj-progress-bar-color: #fff;\n}\n:host {\n  --wj-progress-bar-color: #212121;\n  --wj-progress-bar-text-size: 1rem;\n}\n:host .progress {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n:host .slot-wrapper {\n  display: flex;\n  position: absolute;\n  top: 0;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n}\n:host #bar {\n  stroke: var(--wj-progress-bar-color, red);\n}\n:host text {\n  transform: rotate(90deg);\n  transform-origin: center;\n  text-anchor: middle;\n  dominant-baseline: middle;\n  font-size: var(--wj-progress-bar-text-size);\n}\n:host(.wj-color) #bar {\n  stroke: var(--wj-progress-bar-color);\n}\n::slotted([slot=start]) {\n  margin-inline: 0 1rem;\n}\n::slotted([slot=end]) {\n  margin-inline: 1rem 0;\n}";
class ProgressBar extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "ProgressBar");
    this.timerInterval = null;
    this.timeLimit = 60;
  }
  set radius(value) {
    this.setAttribute("radius", value);
  }
  get radius() {
    return +this.getAttribute("radius") || 70;
  }
  get diameter() {
    return this.radius * 2 + this.stroke;
  }
  set stroke(value) {
    this.setAttribute("stroke", value);
  }
  get stroke() {
    return +this.getAttribute("stroke") || 6;
  }
  get linecap() {
    return this.getAttribute("linecap") || "square";
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return ["progress"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let xy = this.radius + this.stroke / 2;
    let fragment = document.createDocumentFragment();
    if (params.color)
      this.classList.add("wj-color-" + params.color, "wj-color");
    let element = document.createElement("div");
    element.classList.add("progress");
    let slot = document.createElement("slot");
    let slotWrapper = document.createElement("div");
    slotWrapper.classList.add("slot-wrapper");
    let slotStart = document.createElement("slot");
    slotStart.setAttribute("name", "start");
    let slotEnd = document.createElement("slot");
    slotEnd.setAttribute("name", "end");
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let background;
    let bar;
    if ((this == null ? void 0 : this.type) === "circle") {
      svg.setAttribute("width", this.diameter);
      svg.setAttribute("height", this.diameter);
      svg.setAttribute("viewBox", `0 0 ${this.diameter} ${this.diameter}`);
      svg.setAttribute("style", "transform: rotate(-90deg)");
      background = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      background.setAttribute("r", this.radius);
      background.setAttribute("cx", xy);
      background.setAttribute("cy", xy);
      background.setAttribute("fill", "transparent");
      bar = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      bar.setAttribute("r", this.radius);
      bar.setAttribute("cx", xy);
      bar.setAttribute("cy", xy);
      bar.setAttribute("fill", "transparent");
      bar.setAttribute("stroke-dasharray", "0");
      bar.setAttribute("stroke-dashoffset", "0");
      let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", "50%");
      text.setAttribute("y", "50%");
      text.innerHTML = this.progress + "%";
      svg.appendChild(text);
    } else {
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", this.stroke);
      svg.setAttribute("preserveAspectRatio", "none");
      background = document.createElementNS("http://www.w3.org/2000/svg", "line");
      background.setAttribute("x1", 0);
      background.setAttribute("y1", this.stroke / 2);
      background.setAttribute("x2", "100%");
      background.setAttribute("y2", this.stroke / 2);
      bar = document.createElementNS("http://www.w3.org/2000/svg", "line");
      bar.setAttribute("x1", 0);
      bar.setAttribute("y1", this.stroke / 2);
      bar.setAttribute("x2", this.progress + "%");
      bar.setAttribute("y2", this.stroke / 2);
    }
    background.setAttribute("stroke", "#e0e0e0");
    background.setAttribute("stroke-linecap", this.linecap);
    background.setAttribute("stroke-width", this.stroke + "px");
    bar.setAttribute("stroke-linecap", this.linecap);
    bar.setAttribute("stroke-width", this.stroke + "px");
    bar.setAttribute("id", "bar");
    svg.appendChild(background);
    svg.appendChild(bar);
    slotWrapper.appendChild(slot);
    element.appendChild(slotStart);
    element.appendChild(slotWrapper);
    element.appendChild(svg);
    element.appendChild(slotEnd);
    fragment.appendChild(element);
    this.background = background;
    this.bar = bar;
    return fragment;
  }
  afterDraw(context, store, params) {
    if (this.type === "circle") {
      this.background.setAttribute("stroke-dasharray", this.getCircleDashoffset(100) + "px");
      this.background.setAttribute("stroke-dashoffset", "0px");
      this.bar.setAttribute("stroke-dasharray", this.getCircleDasharray(this.radius) + "px");
      this.bar.setAttribute("stroke-dashoffset", this.getCircleDashoffset(params.progress, this.radius) + "px");
    }
  }
  getCircleDasharray(radius = 70) {
    return 2 * Math.PI * radius;
  }
  getCircleDashoffset(progress = 0, radius) {
    return this.getCircleDasharray(radius) * ((100 - progress) / 100);
  }
}
customElements.get("wj-progress-bar") || window.customElements.define("wj-progress-bar", ProgressBar);
export {
  ProgressBar
};
