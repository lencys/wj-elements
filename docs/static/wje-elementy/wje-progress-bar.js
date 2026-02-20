var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Progress bar ]\n*/\n\n:host([color='primary']) {\n    --wje-progress-bar-background-color: var(--wje-color-primary-2);\n    --wje-progress-bar-color: var(--wje-color-primary-9);\n}\n\n:host([color='complete']) {\n    --wje-progress-bar-background-color: var(--wje-color-complete-2);\n    --wje-progress-bar-color: var(--wje-color-complete-9);\n}\n\n:host([color='success']) {\n    --wje-progress-bar-background-color: var(--wje-color-success-2);\n    --wje-progress-bar-color: var(--wje-color-success-9);\n}\n\n:host([color='warning']) {\n    --wje-progress-bar-background-color: var(--wje-color-warning-2);\n    --wje-progress-bar-color: var(--wje-color-warning-9);\n}\n\n:host([color='danger']) {\n    --wje-progress-bar-background-color: var(--wje-color-danger-2);\n    --wje-progress-bar-color: var(--wje-color-danger-9);\n}\n\n:host([color='info']) {\n    --wje-progress-bar-background-color: var(--wje-color-info-2);\n    --wje-progress-bar-color: var(--wje-color-info-9);\n}\n\n/*:host(.wje-color-dark) {*/\n/*  --wje-progress-bar-color: var(--wje-color-contrast-0);*/\n/*}*/\n\n/*:host(.wje-color-light) #bar {*/\n/*  --wje-progress-bar-color: var(--wje-color-contrast-9);*/\n/*}*/\n\n:host {\n    --wje-progress-bar-background-color: var(--wje-color-contrast-2);\n    --wje-progress-bar-color: var(--wje-color-contrast-6);\n    --wje-progress-bar-text-size: 0.75rem;\n    --wje-progress-bar-text-color: var(--wje-color);\n    /*--wje-progress-bar-stroke: var(--wje-color-contrast-3);*/\n    fill: var(--wje-progress-bar-background-color);\n    .progress {\n        position: relative;\n        display: flex;\n        align-items: center;\n    }\n\n    .slot-wrapper {\n        display: flex;\n        position: absolute;\n        top: 0;\n        align-items: center;\n        width: 100%;\n        height: 100%;\n        justify-content: center;\n    }\n    #bar {\n        fill: var(--wje-progress-bar-color);\n    }\n\n    text {\n        transform: rotate(90deg);\n        transform-origin: center;\n        text-anchor: middle;\n        dominant-baseline: middle;\n        font-size: var(--wje-progress-bar-text-size);\n        fill: var(--wje-progress-bar-text-color);\n        stroke: var(--wje-progress-bar-text-color);\n    }\n}\n\n:host(.wje-color) #bar {\n    fill: var(--wje-progress-bar-color);\n}\n\n::slotted([slot='start']) {\n    margin-inline: 0 1rem;\n}\n\n::slotted([slot='end']) {\n    margin-inline: 1rem 0;\n}\n";
class ProgressBar extends WJElement {
  /**
   * Creates an instance of ProgressBar.
   * @class
   */
  constructor() {
    super();
    __publicField(this, "className", "ProgressBar");
  }
  /**
   * Sets the radius of the progress bar.
   * @param {number} value The value to set.
   */
  set radius(value) {
    this.setAttribute("radius", value);
  }
  /**
   * Gets the radius of the progress bar.
   * @returns {number} The value of the radius.
   */
  get radius() {
    return +this.getAttribute("radius") || 70;
  }
  /**
   * Gets the diameter of the progress bar.
   * @returns {number} The value of the diameter.
   */
  get diameter() {
    return this.radius * 2;
  }
  /**
   * Gets the diameter of the progress bar.
   * @returns {number} The value of the diameter.
   */
  get containerSize() {
    return this.diameter + 2 * this.stroke;
  }
  /**
   * Sets the stroke of the progress bar.
   * @param {number} value The value to set.
   */
  set stroke(value) {
    this.setAttribute("stroke", value);
  }
  /**
   * Gets the stroke of the progress bar.
   * @returns {number} The value of the stroke.
   */
  get stroke() {
    return +this.getAttribute("stroke") || 6;
  }
  /**
   * Gets the linecap of the progress bar.
   * @returns {string} The value of the linecap.
   */
  get linecap() {
    return this.getAttribute("linecap") || "square";
  }
  /**
   * Returns the CSS styles for the component.
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Returns the list of attributes to observe for changes.
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return ["progress"];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    this.syncAria();
  }
  /**
   * Draws the component.
   * @param {object} context The context for drawing.
   * @param {object} store The store for drawing.
   * @param {object} params The parameters for drawing.
   * @returns {DocumentFragment}
   */
  draw(context, store, params) {
    this.radius + this.stroke / 2;
    let fragment = document.createDocumentFragment();
    if (params.color) this.classList.add("wje-color");
    let element = document.createElement("div");
    element.classList.add("progress");
    let slot = document.createElement("slot");
    let slotWrapper = document.createElement("div");
    slotWrapper.classList.add("slot-wrapper");
    let slotStart = document.createElement("slot");
    slotStart.setAttribute("name", "start");
    let slotEnd = document.createElement("slot");
    slotEnd.setAttribute("name", "end");
    const svgNamespace = "http://www.w3.org/2000/svg";
    let svg = document.createElementNS(svgNamespace, "svg");
    let background;
    let bar;
    if ((this == null ? void 0 : this.type) === "circle") {
      svg.setAttribute("width", this.containerSize);
      svg.setAttribute("height", this.containerSize);
      svg.setAttribute("viewBox", `0 0 ${this.containerSize} ${this.containerSize}`);
      svg.setAttribute("style", "transform: rotate(-90deg)");
      background = document.createElementNS(svgNamespace, "circle");
      background.setAttribute("stroke", "var(--wje-progress-bar-background-color)");
      background.setAttribute("stroke-width", this.stroke);
      background.setAttribute("fill", "transparent");
      background.setAttribute("r", this.radius);
      background.setAttribute("cx", this.containerSize / 2);
      background.setAttribute("cy", this.containerSize / 2);
      bar = document.createElementNS(svgNamespace, "circle");
      bar.setAttribute("stroke", "var(--wje-progress-bar-color)");
      bar.setAttribute("stroke-width", this.stroke);
      bar.setAttribute("fill", "transparent");
      bar.setAttribute("r", this.radius);
      bar.setAttribute("cx", this.containerSize / 2);
      bar.setAttribute("cy", this.containerSize / 2);
      bar.setAttribute("stroke-linecap", this.linecap);
      let text = document.createElementNS(svgNamespace, "text");
      text.setAttribute("x", "50%");
      text.setAttribute("y", "50%");
      text.innerHTML = this.progress + "%";
      svg.appendChild(text);
    } else {
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", this.stroke);
      svg.setAttribute("preserveAspectRatio", "none");
      background = document.createElementNS(svgNamespace, "rect");
      background.setAttribute("x", 0);
      background.setAttribute("y", 0);
      background.setAttribute("width", "100%");
      background.setAttribute("height", this.stroke);
      if (this.linecap === "round") {
        background.setAttribute("rx", this.stroke / 2);
        background.setAttribute("ry", this.stroke / 2);
      }
      bar = document.createElementNS(svgNamespace, "rect");
      bar.setAttribute("x", 0);
      bar.setAttribute("y", 0);
      bar.setAttribute("width", this.progress + "%");
      bar.setAttribute("height", this.stroke);
      bar.setAttribute("id", "bar");
      if (this.linecap === "round") {
        bar.setAttribute("rx", this.stroke / 2);
        bar.setAttribute("ry", this.stroke / 2);
      }
    }
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
  /**
   * Handles attribute changes for ARIA sync.
   * @param {string} name
   * @param {string|null} oldValue
   * @param {string|null} newValue
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (super.attributeChangedCallback) {
      super.attributeChangedCallback(name, oldValue, newValue);
    }
    if (name === "progress" && oldValue !== newValue) {
      this.syncAria();
    }
  }
  /**
   * Sync ARIA attributes on host.
   */
  syncAria() {
    this.setAriaState({
      role: "progressbar",
      valuemin: 0,
      valuemax: 100,
      valuenow: this.progress || 0
    });
  }
  /**
   * Adds event listeners after the component is drawn.
   */
  afterDraw() {
    if (this.type === "circle") {
      this.setCircleProgress(this.progress);
    }
  }
  /**
   * Returns the dasharray for a circle with the given radius.
   * @param {number} radius The radius of the circle in pixels.
   * @returns {number} The dasharray value.
   */
  getCircleDasharray(radius = 70) {
    return 2 * Math.PI * radius;
  }
  /**
   * Returns the dashoffset for a circle with the given progress and radius.
   * @param {number} progress The progress of the circle in percentage.
   * @param {number} radius The radius of the circle in pixels.
   * @returns {number} The dashoffset value.
   */
  getCircleDashoffset(progress = 0, radius = 70) {
    return this.getCircleDasharray(radius) * ((100 - progress) / 100);
  }
  /**
   * Sets the progress of the circle.
   * @param percent
   */
  setCircleProgress(percent) {
    const progress = this.bar;
    const radius = progress.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    progress.style.strokeDasharray = `${circumference}`;
    const offset = circumference - percent / 100 * circumference;
    progress.style.strokeDashoffset = offset;
  }
}
ProgressBar.define("wje-progress-bar", ProgressBar);
export {
  ProgressBar as default
};
//# sourceMappingURL=wje-progress-bar.js.map
