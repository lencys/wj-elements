var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
import { event } from "./event.js";
const styles = ":host {\n    --wje-slider-track-height: 0.25rem;\n    --wje-slider-color: var(--wje-color-primary-9); /* Predvolená farba */\n    --wje-slider-thumb-color: var(--wje-color-primary-9); /* Farba tiahla */\n    --wje-slider-thumb-border: none; /* Predvolene žiadny border */\n    --wje-slider-thumb-shadow: none; /* Tieň vo výchozom stave */\n    --wje-slider-thumb-shadow-active: color-mix(in hsl, var(--wje-color-contrast-4) 60%, white) 0 0 0 7px;\n    --wje-slider-track-color: var(--wje-color-contrast-4); /* Farba tracku */\n\n    position: relative;\n    display: flex;\n    align-items: center;\n    max-width: 100%;\n}\n\n.native-slider {\n    display: flex;\n    position: relative;\n    flex-grow: 1;\n    align-items: center;\n    height: inherit;\n}\n\n.slider {\n    display: flex;\n    align-items: center;\n    position: relative;\n    flex: 1 1 0%;\n    width: 100%;\n    height: var(--height);\n    contain: size layout style;\n    cursor: grab;\n    touch-action: pan-y;\n}\n\ninput[type='range'] {\n    -webkit-appearance: none;\n    width: 100%;\n    height: var(--wje-slider-track-height);\n    margin: 0;\n    border-radius: 5px;\n    background-size: 70% 100%;\n    background-repeat: no-repeat;\n    background-color: var(--wje-slider-track-color);\n    background-image: linear-gradient(var(--wje-slider-color), var(--wje-slider-color));\n}\n\ninput[type='range']::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: 18px;\n    width: 18px;\n    border-radius: 50%;\n    border: var(--wje-slider-thumb-border); /* Nastaviteľný border (predvolený: none) */\n    background: var(--wje-slider-thumb-color); /* Farba tiahla */\n    box-shadow: var(--wje-slider-thumb-shadow); /* Tieň vo výchozom stave */\n    cursor: ew-resize;\n    transition:\n        background 0.3s ease-in-out,\n        border 0.3s ease-in-out;\n}\n\ninput[type='range']::-moz-range-thumb {\n    height: 18px;\n    width: 18px;\n    border-radius: 50%;\n    border: var(--wje-slider-thumb-border); /* Nastaviteľný border (predvolený: none) */\n    background: var(--wje-slider-thumb-color); /* Farba tiahla */\n    box-shadow: var(--wje-slider-thumb-shadow); /* Tieň vo výchozom stave */\n    cursor: pointer;\n    transition:\n        background 0.3s ease-in-out,\n        border 0.3s ease-in-out;\n}\n\ninput[type='range']::-ms-thumb {\n    height: 18px;\n    width: 18px;\n    border-radius: 50%;\n    border: var(--wje-slider-thumb-border); /* Nastaviteľný border (predvolený: none) */\n    background: var(--wje-slider-thumb-color); /* Farba tiahla */\n    box-shadow: var(--wje-slider-thumb-shadow); /* Tieň vo výchozom stave */\n    cursor: ew-resize;\n    transition:\n        background 0.3s ease-in-out,\n        border 0.3s ease-in-out;\n}\n\ninput[type='range']::-webkit-slider-thumb:active,\ninput[type='range']::-moz-range-thumb:active,\ninput[type='range']::-ms-thumb:active {\n    box-shadow: var(--wje-slider-thumb-shadow-active); /* Tieň pri aktívnom stave */\n}\n\ninput[type='range']::-webkit-slider-runnable-track {\n    -webkit-appearance: none;\n    box-shadow: none;\n    border: none;\n    background: transparent;\n}\n\ninput[type='range']::-moz-range-track {\n    -webkit-appearance: none;\n    box-shadow: none;\n    border: none;\n    background: transparent;\n}\n\ninput[type='range']::-ms-track {\n    -webkit-appearance: none;\n    box-shadow: none;\n    border: none;\n    background: transparent;\n}\n\ninput[type='range'][color='primary'] {\n    --wje-slider-color: var(--wje-color-primary-9);\n    --wje-slider-thumb-color: var(--wje-color-primary-9);\n}\n\ninput[type='range'][color='success'] {\n    --wje-slider-color: var(--wje-color-success-9);\n    --wje-slider-thumb-color: var(--wje-color-success-9);\n}\n\ninput[type='range'][color='complete'] {\n    --wje-slider-color: var(--wje-color-complete-9);\n    --wje-slider-thumb-color: var(--wje-color-complete-9);\n}\n\ninput[type='range'][color='danger'] {\n    --wje-slider-color: var(--wje-color-danger-9);\n    --wje-slider-thumb-color: var(--wje-color-danger-9);\n}\n\ninput[type='range'][color='warning'] {\n    --wje-slider-color: var(--wje-color-warning-9);\n    --wje-slider-thumb-color: var(--wje-color-warning-9);\n}\n\ninput[type='range'][color='dark'] {\n    --wje-slider-color: var(--wje-color-contrast-11);\n    --wje-slider-thumb-color: var(--wje-color-contrast-11);\n}\n\ndatalist {\n    display: flex;\n    justify-content: space-between;\n    height: auto;\n    overflow: hidden;\n    margin-top: 16px;\n\n    option::before {\n        content: '';\n        display: block;\n        width: 0;\n        height: auto;\n        padding-left: 3px;\n        text-indent: 0;\n    }\n}\n\noutput {\n    position: absolute;\n    background: var(--wje-color-contrast-11);\n    color: var(--wje-color-contrast-0);\n    top: -46px;\n    padding: 4px 8px;\n    border-radius: 4px;\n}\n\n::slotted([slot='label']) {\n    margin-inline: 0 0.5rem;\n    font-size: var(--wje-font-size);\n}\n\n::slotted([slot='start']) {\n    margin-inline: 0rem 0.75rem;\n}\n\n::slotted([slot='end']) {\n    margin-inline: 0.75rem 0rem;\n}\n";
class Slider extends WJElement {
  /**
   * Creates an instance of Slider.
   * @class
   */
  constructor() {
    super();
    __publicField(this, "className", "Slider");
    /**
     * Sets the handle position of the slider.
     */
    __publicField(this, "setHandlePosition", () => {
      if (!this.input) return;
      this.input.style.backgroundSize = this.getPercentage(this.input.min, this.input.max, this.input.value) + "% 100%";
      this.syncAria();
    });
    /**
     * Updates the position and content of a bubble element based on the input value.
     *
     * This function calculates the position of the bubble using the percentage representation
     * of the input's current value relative to its minimum and maximum bounds. It then adjusts
     * the bubble's left position dynamically for aesthetic purposes and updates its displayed
     * content to reflect the current input value.
     *
     * The function relies on the following elements:
     * - `this.input`: Represents the input element with properties `min`, `max`, and `value`.
     * - `this.output`: Represents the bubble element to be positioned and updated.
     *
     * The left positioning of the bubble ensures precise alignment with the input value indicator.
     */
    __publicField(this, "setBubble", () => {
      let newValue = this.getPercentage(this.input.min, this.input.max, this.input.value);
      this.output.style.left = `calc(${newValue}% + (${8 - newValue * 0.15}px) - ${this.output.offsetWidth / 2}px)`;
      this.output.innerHTML = this.input.value;
    });
  }
  /**
   * Sets the value of the slider.
   * @param {number} value The value to set.
   */
  set value(value) {
    this.setAttribute("value", value);
    if (this.input) {
      this.input.value = value;
      this.setHandlePosition();
    }
    if (this.output && this.hasAttribute("bubble")) {
      this.output.innerHTML = value;
      setTimeout(this.setBubble, 0);
    }
  }
  /**
   * Returns the value of the slider.
   * @returns {number} The value of the slider input.
   */
  get value() {
    return this.getAttribute("value") || 0;
  }
  /**
   * Sets the minimum value of the slider.
   * @param {number} value The minimum value to set.
   */
  set min(value) {
    this.setAttribute("min", value);
  }
  /**
   * Returns the minimum value of the slider.
   * @returns {number} The minimum value of the slider.
   */
  get min() {
    return this.getAttribute("min") || 0;
  }
  /**
   * Sets the maximum value of the slider.
   * @param {number} value The maximum value to set.
   */
  set max(value) {
    this.setAttribute("max", value);
  }
  /**
   * Returns the maximum value of the slider.
   * @returns {number} The maximum value of the slider.
   */
  get max() {
    return this.getAttribute("max") || 100;
  }
  /**
   * Sets the step value of the slider.
   * @param {number} value The step value to set.
   */
  set step(value) {
    this.setAttribute("step", value);
  }
  /**
   * Returns the step value of the slider.
   * @returns {number} The step value of the slider.
   */
  get step() {
    return this.getAttribute("step") || 1;
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
    return ["max", "min", "step", "value", "disabled", "bubble"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    var _a, _b, _c;
    if (oldValue === newValue) return;
    if (["max", "min", "step", "value", "disabled", "bubble"].includes(name)) {
      if (this.input) {
        if (name === "min") this.input.min = this.min;
        if (name === "max") this.input.max = this.max;
        if (name === "step") this.input.step = this.step;
        if (name === "value") this.input.value = this.value;
        if (name === "disabled") this.input.disabled = this.hasAttribute("disabled");
      }
      if (name === "bubble" && this.output) {
        if (this.hasAttribute("bubble")) {
          this.output.removeAttribute("hidden");
          this.output.innerHTML = ((_a = this.input) == null ? void 0 : _a.value) ?? this.value;
          setTimeout(this.setBubble, 0);
        } else {
          this.output.setAttribute("hidden", "");
        }
      }
      if (["min", "max", "value", "disabled"].includes(name) && this.input) {
        (_b = this.setHandlePosition) == null ? void 0 : _b.call(this);
        this.syncAria();
      }
      return;
    }
    (_c = super.attributeChangedCallback) == null ? void 0 : _c.call(this, name, oldValue, newValue);
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    this.syncAria();
  }
  /**
   * Draws the component for the slider.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("div");
    element.className = "native-slider";
    element.setAttribute("part", "native");
    let slider = document.createElement("div");
    slider.className = "slider";
    let label = document.createElement("slot");
    label.name = "label";
    let start = document.createElement("slot");
    start.name = "start";
    let end = document.createElement("slot");
    end.name = "end";
    let output = document.createElement("output");
    output.setAttribute("for", "slider");
    output.id = "output";
    output.setAttribute("hidden", "");
    let input = document.createElement("input");
    input.type = "range";
    input.min = this.min;
    input.max = this.max;
    input.step = this.step;
    input.value = this.value;
    input.id = "slider";
    input.name = "slider";
    input.part = "slider";
    input.setAttribute("autocomplete", "off");
    input.setAttribute("color", this.color || "");
    if (this.hasAttribute("disabled")) input.disabled = true;
    input.addEventListener("input", null, (e) => {
      this.setHandlePosition(e.target);
    });
    slider.appendChild(input);
    if (this.hasAttribute("bubble")) {
      slider.appendChild(output);
    }
    element.appendChild(label);
    element.appendChild(start);
    element.appendChild(slider);
    element.appendChild(end);
    fragment.appendChild(element);
    this.input = input;
    this.output = output;
    this.syncAria();
    return fragment;
  }
  /**
   * Handles the post-rendering logic for a custom slider component. This method performs the following tasks:
   * - Sets the position of the handle.
   * - Displays a bubble indicator with the current value, if the slider has a "bubble" attribute.
   * - Dispatches initialization, movement, and change custom events for the slider input element.
   * - Updates the bubble position and value dynamically on input changes.
   * @returns {void} This method does not return a value.
   */
  afterDraw() {
    this.setHandlePosition();
    if (this.hasAttribute("bubble")) {
      this.output.innerHTML = this.input.value;
      this.output.removeAttribute("hidden");
      setTimeout(this.setBubble, 50);
    }
    event.dispatchCustomEvent(this.input, "wje-slider:init", {
      value: this.input.value,
      output: this.output
    });
    event.addListener(this.input, "input", null, (e) => {
      this.value = e.target.value;
      event.dispatchCustomEvent(this.input, "wje-slider:move", {
        value: e.target.value,
        output: this.output
      });
      if (this.hasAttribute("bubble")) {
        this.setBubble();
      }
    });
    event.addListener(this.input, "change", null, (e) => {
      event.dispatchCustomEvent(this.input, "wje-slider:change", {
        value: e.target.value,
        output: this.output
      });
    });
    this.syncAria();
  }
  /**
   * Syncs ARIA attributes on the host element.
   */
  syncAria() {
    this.setAriaState({
      role: "slider",
      valuemin: this.min,
      valuemax: this.max,
      valuenow: this.value,
      disabled: this.hasAttribute("disabled")
    });
  }
  /**
   * Calculates the percentage of a value within a given range.
   * @param {number} min The minimum value of the range.
   * @param {number} max The maximum value of the range.
   * @param {number} [value] The current value within the range. Defaults to 0 if not provided.
   * @returns {number} The calculated percentage as a number between 0 and 100. Returns 0 if the range is invalid.
   */
  getPercentage(min, max, value = 0) {
    return Number((value - min) * 100 / (max - min)) || 0;
  }
}
Slider.define("wje-slider", Slider);
export {
  Slider as default
};
//# sourceMappingURL=wje-slider.js.map
