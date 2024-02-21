var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import { fetchAndParseCSS } from "./wj-fetchAndParseCSS.js";
const styles = "/*\n[ WJ Animation ]\n*/";
class Animation extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Animation");
    this._animations = [];
  }
  set animations(value) {
    this._animations = value;
  }
  get animations() {
    return this._animations;
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return ["name"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let slot = document.createElement("slot");
    fragment.appendChild(slot);
    this.slotEl = slot;
    return fragment;
  }
  async afterDraw() {
    this.destroyAnimation();
    this.animations = await this.getAnimationsArray();
    const selected = this.animations.find((k) => k.name === this.name);
    const element = this.slotEl.assignedElements()[0];
    this.animation = element.animate(selected.keyframes, {
      delay: +this.delay || 0,
      // zdrzanie pred zacatim animacie
      endDelay: +this.endDelay || 0,
      // zdrzanie po skoncení animacie
      fill: this.fill || "auto",
      // vyplnenie animace (pred a po animacii)
      duration: +this.duration || 1e3,
      // doba trvania animacie v milisekundách
      iterationStart: +this.iterationStart || 0,
      // počet opakování animacie
      iterations: this.iterations || Infinity,
      // počet opakování animacie
      direction: this.direction || "normal",
      // smer animaciee (zpat a dopredu)
      easing: this.easing || "linear"
      // typ spomalenia (rychlost zmen v čase)
    });
    this.animation.play();
  }
  destroyAnimation() {
    if (this.animation) {
      this.animation.cancel();
    }
  }
  async getAnimationsArray() {
    const cssUrl = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
    return await fetchAndParseCSS(cssUrl);
  }
}
customElements.get("wj-animation") || window.customElements.define("wj-animation", Animation);
export {
  Animation
};
