var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = '/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n:host {\n  --wj-slider-track-height: 4px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  max-width: 100%;\n}\n:host .native-slider {\n  display: flex;\n  position: relative;\n  flex-grow: 1;\n  align-items: center;\n  height: inherit;\n}\n:host .slider {\n  display: flex;\n  align-items: center;\n  position: relative;\n  flex: 1 1 0%;\n  width: 100%;\n  height: var(--height);\n  contain: size layout style;\n  cursor: grab;\n  touch-action: pan-y;\n}\ninput[type=range] {\n  -webkit-appearance: none;\n  width: 100%;\n  height: var(--wj-slider-track-height);\n  margin: 0;\n  border-radius: 5px;\n  background-size: 70% 100%;\n  background-repeat: no-repeat;\n  /* Input Track */\n  --wj-slider-color: #7252D3;\n  --wj-slider-thumb-color: #7252D3;\n  --wj-slider-thumb-shadow: none;\n  --wj-slider-thumb-shadow-active: 0 0 0 7px #eae0fb;\n  --wj-slider-track-color: #dbe6e8;\n  background-color: var(--wj-slider-track-color, #dbe6e8);\n  background-image: linear-gradient(var(--wj-slider-color, #7252D3), var(--wj-slider-color, #7252D3));\n  /* Input Thumb */\n}\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  height: 18px;\n  width: 18px;\n  border-radius: 50%;\n  cursor: ew-resize;\n  transition: background 0.3s ease-in-out;\n}\ninput[type=range]::-moz-range-thumb {\n  -webkit-appearance: none;\n  height: 18px;\n  width: 18px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background 0.3s ease-in-out;\n  border: 0;\n}\ninput[type=range]::-ms-thumb {\n  -webkit-appearance: none;\n  height: 18px;\n  width: 18px;\n  border-radius: 50%;\n  cursor: ew-resize;\n  transition: background 0.3s ease-in-out;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n  -webkit-appearance: none;\n  box-shadow: none;\n  border: none;\n  background: transparent;\n}\ninput[type=range]::-moz-range-track {\n  -webkit-appearance: none;\n  box-shadow: none;\n  border: none;\n  background: transparent;\n}\ninput[type=range]::-ms-track {\n  -webkit-appearance: none;\n  box-shadow: none;\n  border: none;\n  background: transparent;\n}\ninput[type=range][color=primary] {\n  --wj-slider-color: #7252D3;\n  --wj-slider-thumb-color: #7252D3;\n  --wj-slider-thumb-shadow: none;\n  --wj-slider-thumb-shadow-active: 0 0 0 7px #eae0fb;\n  --wj-slider-track-color: #dbe6e8;\n  background-color: var(--wj-slider-track-color, #dbe6e8);\n  background-image: linear-gradient(var(--wj-slider-color, #7252D3), var(--wj-slider-color, #7252D3));\n  /* Input Thumb */\n}\ninput[type=range][color=primary]::-webkit-slider-thumb {\n  background: var(--wj-slider-thumb-color, #7252D3);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px #eae0fb);\n}\ninput[type=range][color=primary]::-moz-range-thumb {\n  background: var(--wj-slider-thumb-color, #7252D3);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px #eae0fb);\n}\ninput[type=range][color=primary]::-ms-thumb {\n  background: var(--wj-slider-thumb-color, #7252D3);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px #eae0fb);\n}\ninput[type=range][color=primary]::-webkit-slider-thumb:active {\n  background: var(--wj-slider-thumb-color, #7252D3);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb);\n}\ninput[type=range][color=primary]::-moz-range-thumb:active {\n  background: var(--wj-slider-thumb-color, #7252D3);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb);\n}\ninput[type=range][color=primary]::-ms-thumb:active {\n  background: var(--wj-slider-thumb-color, #7252D3);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb);\n}\ninput[type=range][color=primary]::-webkit-slider-thumb:hover {\n  background: var(--wj-slider-thumb-color, #7252D3);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb);\n}\ninput[type=range][color=primary]::-moz-range-thumb:hover {\n  background: var(--wj-slider-thumb-color, #7252D3);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb);\n}\ninput[type=range][color=primary]::-ms-thumb:hover {\n  background: var(--wj-slider-thumb-color, #7252D3);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb);\n}\ninput[type=range][color=success] {\n  --wj-slider-color: #19AD79;\n  --wj-slider-thumb-color: #19AD79;\n  --wj-slider-thumb-shadow: none;\n  --wj-slider-thumb-shadow-active: 0 0 0 7px #d6f7f0;\n  --wj-slider-track-color: #dbe6e8;\n  background-color: var(--wj-slider-track-color, #dbe6e8);\n  background-image: linear-gradient(var(--wj-slider-color, #19AD79), var(--wj-slider-color, #19AD79));\n  /* Input Thumb */\n}\ninput[type=range][color=success]::-webkit-slider-thumb {\n  background: var(--wj-slider-thumb-color, #19AD79);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px #d6f7f0);\n}\ninput[type=range][color=success]::-moz-range-thumb {\n  background: var(--wj-slider-thumb-color, #19AD79);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px #d6f7f0);\n}\ninput[type=range][color=success]::-ms-thumb {\n  background: var(--wj-slider-thumb-color, #19AD79);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px #d6f7f0);\n}\ninput[type=range][color=success]::-webkit-slider-thumb:active {\n  background: var(--wj-slider-thumb-color, #19AD79);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d6f7f0);\n}\ninput[type=range][color=success]::-moz-range-thumb:active {\n  background: var(--wj-slider-thumb-color, #19AD79);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d6f7f0);\n}\ninput[type=range][color=success]::-ms-thumb:active {\n  background: var(--wj-slider-thumb-color, #19AD79);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d6f7f0);\n}\ninput[type=range][color=success]::-webkit-slider-thumb:hover {\n  background: var(--wj-slider-thumb-color, #19AD79);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d6f7f0);\n}\ninput[type=range][color=success]::-moz-range-thumb:hover {\n  background: var(--wj-slider-thumb-color, #19AD79);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d6f7f0);\n}\ninput[type=range][color=success]::-ms-thumb:hover {\n  background: var(--wj-slider-thumb-color, #19AD79);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d6f7f0);\n}\ninput[type=range][color=complete] {\n  --wj-slider-color: #0072EC;\n  --wj-slider-thumb-color: #0072EC;\n  --wj-slider-thumb-shadow: none;\n  --wj-slider-thumb-shadow-active: 0 0 0 7px #d3eeff;\n  --wj-slider-track-color: #dbe6e8;\n  background-color: var(--wj-slider-track-color, #dbe6e8);\n  background-image: linear-gradient(var(--wj-slider-color, #0072EC), var(--wj-slider-color, #0072EC));\n  /* Input Thumb */\n}\ninput[type=range][color=complete]::-webkit-slider-thumb {\n  background: var(--wj-slider-thumb-color, #0072EC);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px #d3eeff);\n}\ninput[type=range][color=complete]::-moz-range-thumb {\n  background: var(--wj-slider-thumb-color, #0072EC);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px #d3eeff);\n}\ninput[type=range][color=complete]::-ms-thumb {\n  background: var(--wj-slider-thumb-color, #0072EC);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px #d3eeff);\n}\ninput[type=range][color=complete]::-webkit-slider-thumb:active {\n  background: var(--wj-slider-thumb-color, #0072EC);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d3eeff);\n}\ninput[type=range][color=complete]::-moz-range-thumb:active {\n  background: var(--wj-slider-thumb-color, #0072EC);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d3eeff);\n}\ninput[type=range][color=complete]::-ms-thumb:active {\n  background: var(--wj-slider-thumb-color, #0072EC);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d3eeff);\n}\ninput[type=range][color=complete]::-webkit-slider-thumb:hover {\n  background: var(--wj-slider-thumb-color, #0072EC);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d3eeff);\n}\ninput[type=range][color=complete]::-moz-range-thumb:hover {\n  background: var(--wj-slider-thumb-color, #0072EC);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d3eeff);\n}\ninput[type=range][color=complete]::-ms-thumb:hover {\n  background: var(--wj-slider-thumb-color, #0072EC);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d3eeff);\n}\ninput[type=range][color=danger] {\n  --wj-slider-color: #D83C31;\n  --wj-slider-thumb-color: #D83C31;\n  --wj-slider-thumb-shadow: none;\n  --wj-slider-thumb-shadow-active: 0 0 0 7px #fde2da;\n  --wj-slider-track-color: #dbe6e8;\n  background-color: var(--wj-slider-track-color, #dbe6e8);\n  background-image: linear-gradient(var(--wj-slider-color, #D83C31), var(--wj-slider-color, #D83C31));\n  /* Input Thumb */\n}\ninput[type=range][color=danger]::-webkit-slider-thumb {\n  background: var(--wj-slider-thumb-color, #D83C31);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px #fde2da);\n}\ninput[type=range][color=danger]::-moz-range-thumb {\n  background: var(--wj-slider-thumb-color, #D83C31);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px #fde2da);\n}\ninput[type=range][color=danger]::-ms-thumb {\n  background: var(--wj-slider-thumb-color, #D83C31);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px #fde2da);\n}\ninput[type=range][color=danger]::-webkit-slider-thumb:active {\n  background: var(--wj-slider-thumb-color, #D83C31);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fde2da);\n}\ninput[type=range][color=danger]::-moz-range-thumb:active {\n  background: var(--wj-slider-thumb-color, #D83C31);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fde2da);\n}\ninput[type=range][color=danger]::-ms-thumb:active {\n  background: var(--wj-slider-thumb-color, #D83C31);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fde2da);\n}\ninput[type=range][color=danger]::-webkit-slider-thumb:hover {\n  background: var(--wj-slider-thumb-color, #D83C31);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fde2da);\n}\ninput[type=range][color=danger]::-moz-range-thumb:hover {\n  background: var(--wj-slider-thumb-color, #D83C31);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fde2da);\n}\ninput[type=range][color=danger]::-ms-thumb:hover {\n  background: var(--wj-slider-thumb-color, #D83C31);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fde2da);\n}\ninput[type=range][color=warning] {\n  --wj-slider-color: #FFd945;\n  --wj-slider-thumb-color: #FFd945;\n  --wj-slider-thumb-shadow: none;\n  --wj-slider-thumb-shadow-active: 0 0 0 7px #fffde1;\n  --wj-slider-track-color: #dbe6e8;\n  background-color: var(--wj-slider-track-color, #dbe6e8);\n  background-image: linear-gradient(var(--wj-slider-color, #FFd945), var(--wj-slider-color, #FFd945));\n  /* Input Thumb */\n}\ninput[type=range][color=warning]::-webkit-slider-thumb {\n  background: var(--wj-slider-thumb-color, #FFd945);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px #fffde1);\n}\ninput[type=range][color=warning]::-moz-range-thumb {\n  background: var(--wj-slider-thumb-color, #FFd945);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px #fffde1);\n}\ninput[type=range][color=warning]::-ms-thumb {\n  background: var(--wj-slider-thumb-color, #FFd945);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px #fffde1);\n}\ninput[type=range][color=warning]::-webkit-slider-thumb:active {\n  background: var(--wj-slider-thumb-color, #FFd945);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fffde1);\n}\ninput[type=range][color=warning]::-moz-range-thumb:active {\n  background: var(--wj-slider-thumb-color, #FFd945);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fffde1);\n}\ninput[type=range][color=warning]::-ms-thumb:active {\n  background: var(--wj-slider-thumb-color, #FFd945);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fffde1);\n}\ninput[type=range][color=warning]::-webkit-slider-thumb:hover {\n  background: var(--wj-slider-thumb-color, #FFd945);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fffde1);\n}\ninput[type=range][color=warning]::-moz-range-thumb:hover {\n  background: var(--wj-slider-thumb-color, #FFd945);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fffde1);\n}\ninput[type=range][color=warning]::-ms-thumb:hover {\n  background: var(--wj-slider-thumb-color, #FFd945);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fffde1);\n}\ninput[type=range][color=contrast] {\n  --wj-slider-color: #fff;\n  --wj-slider-thumb-color: #fff;\n  --wj-slider-thumb-shadow: none;\n  --wj-slider-thumb-shadow-active: 0 0 0 7px white;\n  --wj-slider-track-color: #757575;\n  background-color: var(--wj-slider-track-color, #757575);\n  background-image: linear-gradient(var(--wj-slider-color, #fff), var(--wj-slider-color, #fff));\n  /* Input Thumb */\n}\ninput[type=range][color=contrast]::-webkit-slider-thumb {\n  background: var(--wj-slider-thumb-color, #fff);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px white);\n}\ninput[type=range][color=contrast]::-moz-range-thumb {\n  background: var(--wj-slider-thumb-color, #fff);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px white);\n}\ninput[type=range][color=contrast]::-ms-thumb {\n  background: var(--wj-slider-thumb-color, #fff);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px white);\n}\ninput[type=range][color=contrast]::-webkit-slider-thumb:active {\n  background: var(--wj-slider-thumb-color, #fff);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px white);\n}\ninput[type=range][color=contrast]::-moz-range-thumb:active {\n  background: var(--wj-slider-thumb-color, #fff);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px white);\n}\ninput[type=range][color=contrast]::-ms-thumb:active {\n  background: var(--wj-slider-thumb-color, #fff);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px white);\n}\ninput[type=range][color=contrast]::-webkit-slider-thumb:hover {\n  background: var(--wj-slider-thumb-color, #fff);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px white);\n}\ninput[type=range][color=contrast]::-moz-range-thumb:hover {\n  background: var(--wj-slider-thumb-color, #fff);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px white);\n}\ninput[type=range][color=contrast]::-ms-thumb:hover {\n  background: var(--wj-slider-thumb-color, #fff);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px white);\n}\ninput[type=range]::-webkit-slider-thumb {\n  background: var(--wj-slider-thumb-color, #7252D3);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px #eae0fb);\n}\ninput[type=range]::-moz-range-thumb {\n  background: var(--wj-slider-thumb-color, #7252D3);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px #eae0fb);\n}\ninput[type=range]::-ms-thumb {\n  background: var(--wj-slider-thumb-color, #7252D3);\n  box-shadow: var(--wj-slider-thumb-shadow, 0 0 0 7px #eae0fb);\n}\ninput[type=range]::-webkit-slider-thumb:active {\n  background: var(--wj-slider-thumb-color, #7252D3);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb);\n}\ninput[type=range]::-moz-range-thumb:active {\n  background: var(--wj-slider-thumb-color, #7252D3);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb);\n}\ninput[type=range]::-ms-thumb:active {\n  background: var(--wj-slider-thumb-color, #7252D3);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb);\n}\ninput[type=range]::-webkit-slider-thumb:hover {\n  background: var(--wj-slider-thumb-color, #7252D3);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb);\n}\ninput[type=range]::-moz-range-thumb:hover {\n  background: var(--wj-slider-thumb-color, #7252D3);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb);\n}\ninput[type=range]::-ms-thumb:hover {\n  background: var(--wj-slider-thumb-color, #7252D3);\n  box-shadow: var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb);\n}\ndatalist {\n  display: flex;\n  justify-content: space-between;\n  height: auto;\n  overflow: hidden;\n  margin-top: 16px;\n}\ndatalist option:before {\n  content: "";\n  display: block;\n  width: 0;\n  height: auto;\n  padding-left: 3px;\n  text-indent: 0;\n}\noutput {\n  position: absolute;\n  background: var(--wj-color-contrast-11);\n  color: var(--wj-color-contrast-0);\n  top: -46px;\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n::slotted([slot=label]) {\n  margin-inline: 0 1rem;\n  font-size: var(--wj-font-size);\n}\n::slotted([slot=start]) {\n  margin-inline: 0 1rem;\n}\n::slotted([slot=end]) {\n  margin-inline: 1rem 0;\n}';
class Slider extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Slider");
    __publicField(this, "setHandlePosition", () => {
      this.input.style.backgroundSize = this.getPercentage(this.input.value, this.input.min, this.input.max) + "% 100%";
    });
    __publicField(this, "setBubble", () => {
      let newValue = this.getPercentage(this.input.value, this.input.min, this.input.max);
      this.output.style.left = `calc(${newValue}% + (${8 - newValue * 0.15}px) - ${this.output.offsetWidth / 2}px)`;
      this.output.innerHTML = this.input.value;
    });
  }
  set value(value) {
    this.setAttribute("value", value);
    if (this.input) {
      this.input.value = value;
      this.setHandlePosition();
    }
  }
  get value() {
    return this.getAttribute("value") || 0;
  }
  set min(value) {
    this.setAttribute("min", value);
  }
  get min() {
    return this.getAttribute("min") || 0;
  }
  set max(value) {
    this.setAttribute("max", value);
  }
  get max() {
    return this.getAttribute("max") || 100;
  }
  set step(value) {
    this.setAttribute("step", value);
  }
  get step() {
    return this.getAttribute("step") || 1;
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return ["max", "value"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw() {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("div");
    element.className = "native-slider";
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
    input.addEventListener("input", (e) => {
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
    return fragment;
  }
  afterDraw() {
    this.setHandlePosition();
    if (this.hasAttribute("bubble")) {
      this.output.innerHTML = this.input.value;
      this.output.removeAttribute("hidden");
      setTimeout(this.setBubble, 50);
    }
    this.dispatchInit(this.input.value);
    this.input.addEventListener("input", (e) => {
      this.value = e.target.value;
      this.dispatchMove(this.value);
      if (this.hasAttribute("bubble")) {
        this.setBubble();
      }
    });
    this.input.addEventListener("change", (e) => {
      this.dispatchChange(e.target.value);
    });
  }
  dispatchInit(value) {
    this.dispatchEvent(
      new CustomEvent("wj:slider-init", {
        bubbles: true,
        detail: {
          value,
          output: this.output
        }
      })
    );
  }
  dispatchMove(value) {
    this.dispatchEvent(
      new CustomEvent("wj:slider-move", {
        bubbles: true,
        detail: {
          value,
          output: this.output
        }
      })
    );
  }
  dispatchChange(value) {
    this.dispatchEvent(
      new CustomEvent("wj:slider-change", {
        bubbles: true,
        detail: {
          value,
          output: this.output
        }
      })
    );
  }
  getPercentage(value = 0, min, max) {
    return Number((value - min) * 100 / (max - min)) || 0;
  }
}
customElements.get("wj-slider") || customElements.define("wj-slider", Slider);
export {
  Slider
};
