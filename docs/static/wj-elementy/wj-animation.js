var m = Object.defineProperty;
var l = (n, i, t) => i in n ? m(n, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[i] = t;
var r = (n, i, t) => (l(n, typeof i != "symbol" ? i + "" : i, t), t);
import c from "./wj-element.js";
import { fetchAndParseCSS as h } from "./wj-fetchAndParseCSS.js";
import "./wj-store.js";
const d = "";
class u extends c {
  constructor() {
    super();
    r(this, "className", "Animation");
    this._animations = [];
  }
  set animations(t) {
    this._animations = t;
  }
  get animations() {
    return this._animations;
  }
  static get cssStyleSheet() {
    return d;
  }
  static get observedAttributes() {
    return ["name"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, a, e) {
    let s = document.createDocumentFragment(), o = document.createElement("slot");
    return s.appendChild(o), this.slotEl = o, s;
  }
  async afterDraw() {
    this.destroyAnimation(), this.animations = await this.getAnimationsArray();
    const t = this.animations.find((e) => e.name === this.name), a = this.slotEl.assignedElements()[0];
    this.animation = a.animate(t.keyframes, {
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
      iterations: this.iterations || 1 / 0,
      // počet opakování animacie
      direction: this.direction || "normal",
      // smer animaciee (zpat a dopredu)
      easing: this.easing || "linear"
      // typ spomalenia (rychlost zmen v čase)
    }), this.animation.play();
  }
  destroyAnimation() {
    this.animation && this.animation.cancel();
  }
  async getAnimationsArray() {
    return await h("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");
  }
}
customElements.get("wj-animation") || window.customElements.define("wj-animation", u);
export {
  u as Animation
};
