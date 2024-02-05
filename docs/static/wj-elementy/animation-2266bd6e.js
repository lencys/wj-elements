var l = Object.defineProperty;
var c = (s, e, t) => e in s ? l(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var m = (s, e, t) => (c(s, typeof e != "symbol" ? e + "" : e, t), t);
import f from "./wj-element.js";
let o = [];
function h(s) {
  const e = /@keyframes\s+([\w-]+)\s*{([\s\S]+?})\s*}/g;
  let t, n = [];
  for (; (t = e.exec(s)) !== null; ) {
    let i = t[1], a = t[2].trim(), r = u(a);
    n.push({ name: i, keyframes: r });
  }
  return n;
}
function u(s) {
  const e = /([\d%]+)\s*{([\s\S]+?)}/g;
  let t, n = [];
  for (; (t = e.exec(s)) !== null; ) {
    let i = parseFloat(t[1]) / 100, a = d(t[2]), r = {
      offset: i,
      ...a
    };
    n.push(r);
  }
  return n.sort((i, a) => i.offset - a.offset), n;
}
function d(s) {
  const e = {};
  return s.split(";").forEach((t) => {
    const [n, i] = t.split(":").map((a) => a.trim());
    n && i && (n === "animation-timing-function" ? e.easing = i : e[n] = i);
  }), e;
}
async function p(s) {
  try {
    if (o.length > 0)
      return o;
    const t = await (await fetch(s)).text();
    return o = h(t), o;
  } catch (e) {
    console.error("Error:", e);
  }
}
const y = "";
class g extends f {
  constructor() {
    super();
    m(this, "className", "Animation");
    this._animations = [];
  }
  set animations(t) {
    this._animations = t;
  }
  get animations() {
    return this._animations;
  }
  static get cssStyleSheet() {
    return y;
  }
  static get observedAttributes() {
    return ["name"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(t, n, i) {
    let a = document.createDocumentFragment(), r = document.createElement("slot");
    return a.appendChild(r), this.slotEl = r, a;
  }
  async afterDraw() {
    this.destroyAnimation(), this.animations = await this.getAnimationsArray();
    const t = this.animations.find((i) => i.name === this.name), n = this.slotEl.assignedElements()[0];
    this.animation = n.animate(t.keyframes, {
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
    return await p("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");
  }
}
customElements.get("wj-animation") || window.customElements.define("wj-animation", g);
export {
  g as A,
  p as f
};
