var b = Object.defineProperty;
var c = (a, o, e) => o in a ? b(a, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[o] = e;
var s = (a, o, e) => (c(a, typeof o != "symbol" ? o + "" : o, e), e);
import w from "./wj-element.js";
import "./wj-store.js";
const p = `/*!
* direction.scss
*/:host{--wj-slider-track-height: 4px;position:relative;display:flex;align-items:center;max-width:100%}:host .native-slider{display:flex;position:relative;flex-grow:1;align-items:center;height:inherit}:host .slider{display:flex;align-items:center;position:relative;flex:1 1 0%;width:100%;height:var(--height);contain:size layout style;cursor:grab;touch-action:pan-y}input[type=range]{-webkit-appearance:none;width:100%;height:var(--wj-slider-track-height);margin:0;border-radius:5px;background-size:70% 100%;background-repeat:no-repeat;--wj-slider-color: #7252D3;--wj-slider-thumb-color: #7252D3;--wj-slider-thumb-shadow: none;--wj-slider-thumb-shadow-active: 0 0 0 7px #eae0fb;--wj-slider-track-color: #dbe6e8;background-color:var(--wj-slider-track-color, #dbe6e8);background-image:linear-gradient(var(--wj-slider-color, #7252D3),var(--wj-slider-color, #7252D3))}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;height:18px;width:18px;border-radius:50%;cursor:ew-resize;transition:background .3s ease-in-out}input[type=range]::-moz-range-thumb{-webkit-appearance:none;height:18px;width:18px;border-radius:50%;cursor:pointer;transition:background .3s ease-in-out;border:0}input[type=range]::-ms-thumb{-webkit-appearance:none;height:18px;width:18px;border-radius:50%;cursor:ew-resize;transition:background .3s ease-in-out}input[type=range]::-webkit-slider-runnable-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}input[type=range]::-moz-range-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}input[type=range]::-ms-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}input[type=range][color=primary]{--wj-slider-color: #7252D3;--wj-slider-thumb-color: #7252D3;--wj-slider-thumb-shadow: none;--wj-slider-thumb-shadow-active: 0 0 0 7px #eae0fb;--wj-slider-track-color: #dbe6e8;background-color:var(--wj-slider-track-color, #dbe6e8);background-image:linear-gradient(var(--wj-slider-color, #7252D3),var(--wj-slider-color, #7252D3))}input[type=range][color=primary]::-webkit-slider-thumb{background:var(--wj-slider-thumb-color, #7252D3);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px #eae0fb)}input[type=range][color=primary]::-moz-range-thumb{background:var(--wj-slider-thumb-color, #7252D3);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px #eae0fb)}input[type=range][color=primary]::-ms-thumb{background:var(--wj-slider-thumb-color, #7252D3);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px #eae0fb)}input[type=range][color=primary]::-webkit-slider-thumb:active{background:var(--wj-slider-thumb-color, #7252D3);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb)}input[type=range][color=primary]::-moz-range-thumb:active{background:var(--wj-slider-thumb-color, #7252D3);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb)}input[type=range][color=primary]::-ms-thumb:active{background:var(--wj-slider-thumb-color, #7252D3);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb)}input[type=range][color=primary]::-webkit-slider-thumb:hover{background:var(--wj-slider-thumb-color, #7252D3);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb)}input[type=range][color=primary]::-moz-range-thumb:hover{background:var(--wj-slider-thumb-color, #7252D3);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb)}input[type=range][color=primary]::-ms-thumb:hover{background:var(--wj-slider-thumb-color, #7252D3);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb)}input[type=range][color=success]{--wj-slider-color: #19AD79;--wj-slider-thumb-color: #19AD79;--wj-slider-thumb-shadow: none;--wj-slider-thumb-shadow-active: 0 0 0 7px #d6f7f0;--wj-slider-track-color: #dbe6e8;background-color:var(--wj-slider-track-color, #dbe6e8);background-image:linear-gradient(var(--wj-slider-color, #19AD79),var(--wj-slider-color, #19AD79))}input[type=range][color=success]::-webkit-slider-thumb{background:var(--wj-slider-thumb-color, #19AD79);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px #d6f7f0)}input[type=range][color=success]::-moz-range-thumb{background:var(--wj-slider-thumb-color, #19AD79);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px #d6f7f0)}input[type=range][color=success]::-ms-thumb{background:var(--wj-slider-thumb-color, #19AD79);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px #d6f7f0)}input[type=range][color=success]::-webkit-slider-thumb:active{background:var(--wj-slider-thumb-color, #19AD79);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d6f7f0)}input[type=range][color=success]::-moz-range-thumb:active{background:var(--wj-slider-thumb-color, #19AD79);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d6f7f0)}input[type=range][color=success]::-ms-thumb:active{background:var(--wj-slider-thumb-color, #19AD79);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d6f7f0)}input[type=range][color=success]::-webkit-slider-thumb:hover{background:var(--wj-slider-thumb-color, #19AD79);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d6f7f0)}input[type=range][color=success]::-moz-range-thumb:hover{background:var(--wj-slider-thumb-color, #19AD79);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d6f7f0)}input[type=range][color=success]::-ms-thumb:hover{background:var(--wj-slider-thumb-color, #19AD79);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d6f7f0)}input[type=range][color=complete]{--wj-slider-color: #0072EC;--wj-slider-thumb-color: #0072EC;--wj-slider-thumb-shadow: none;--wj-slider-thumb-shadow-active: 0 0 0 7px #d3eeff;--wj-slider-track-color: #dbe6e8;background-color:var(--wj-slider-track-color, #dbe6e8);background-image:linear-gradient(var(--wj-slider-color, #0072EC),var(--wj-slider-color, #0072EC))}input[type=range][color=complete]::-webkit-slider-thumb{background:var(--wj-slider-thumb-color, #0072EC);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px #d3eeff)}input[type=range][color=complete]::-moz-range-thumb{background:var(--wj-slider-thumb-color, #0072EC);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px #d3eeff)}input[type=range][color=complete]::-ms-thumb{background:var(--wj-slider-thumb-color, #0072EC);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px #d3eeff)}input[type=range][color=complete]::-webkit-slider-thumb:active{background:var(--wj-slider-thumb-color, #0072EC);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d3eeff)}input[type=range][color=complete]::-moz-range-thumb:active{background:var(--wj-slider-thumb-color, #0072EC);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d3eeff)}input[type=range][color=complete]::-ms-thumb:active{background:var(--wj-slider-thumb-color, #0072EC);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d3eeff)}input[type=range][color=complete]::-webkit-slider-thumb:hover{background:var(--wj-slider-thumb-color, #0072EC);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d3eeff)}input[type=range][color=complete]::-moz-range-thumb:hover{background:var(--wj-slider-thumb-color, #0072EC);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d3eeff)}input[type=range][color=complete]::-ms-thumb:hover{background:var(--wj-slider-thumb-color, #0072EC);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #d3eeff)}input[type=range][color=danger]{--wj-slider-color: #D83C31;--wj-slider-thumb-color: #D83C31;--wj-slider-thumb-shadow: none;--wj-slider-thumb-shadow-active: 0 0 0 7px #fde2da;--wj-slider-track-color: #dbe6e8;background-color:var(--wj-slider-track-color, #dbe6e8);background-image:linear-gradient(var(--wj-slider-color, #D83C31),var(--wj-slider-color, #D83C31))}input[type=range][color=danger]::-webkit-slider-thumb{background:var(--wj-slider-thumb-color, #D83C31);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px #fde2da)}input[type=range][color=danger]::-moz-range-thumb{background:var(--wj-slider-thumb-color, #D83C31);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px #fde2da)}input[type=range][color=danger]::-ms-thumb{background:var(--wj-slider-thumb-color, #D83C31);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px #fde2da)}input[type=range][color=danger]::-webkit-slider-thumb:active{background:var(--wj-slider-thumb-color, #D83C31);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fde2da)}input[type=range][color=danger]::-moz-range-thumb:active{background:var(--wj-slider-thumb-color, #D83C31);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fde2da)}input[type=range][color=danger]::-ms-thumb:active{background:var(--wj-slider-thumb-color, #D83C31);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fde2da)}input[type=range][color=danger]::-webkit-slider-thumb:hover{background:var(--wj-slider-thumb-color, #D83C31);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fde2da)}input[type=range][color=danger]::-moz-range-thumb:hover{background:var(--wj-slider-thumb-color, #D83C31);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fde2da)}input[type=range][color=danger]::-ms-thumb:hover{background:var(--wj-slider-thumb-color, #D83C31);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fde2da)}input[type=range][color=warning]{--wj-slider-color: #FFd945;--wj-slider-thumb-color: #FFd945;--wj-slider-thumb-shadow: none;--wj-slider-thumb-shadow-active: 0 0 0 7px #fffde1;--wj-slider-track-color: #dbe6e8;background-color:var(--wj-slider-track-color, #dbe6e8);background-image:linear-gradient(var(--wj-slider-color, #FFd945),var(--wj-slider-color, #FFd945))}input[type=range][color=warning]::-webkit-slider-thumb{background:var(--wj-slider-thumb-color, #FFd945);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px #fffde1)}input[type=range][color=warning]::-moz-range-thumb{background:var(--wj-slider-thumb-color, #FFd945);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px #fffde1)}input[type=range][color=warning]::-ms-thumb{background:var(--wj-slider-thumb-color, #FFd945);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px #fffde1)}input[type=range][color=warning]::-webkit-slider-thumb:active{background:var(--wj-slider-thumb-color, #FFd945);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fffde1)}input[type=range][color=warning]::-moz-range-thumb:active{background:var(--wj-slider-thumb-color, #FFd945);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fffde1)}input[type=range][color=warning]::-ms-thumb:active{background:var(--wj-slider-thumb-color, #FFd945);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fffde1)}input[type=range][color=warning]::-webkit-slider-thumb:hover{background:var(--wj-slider-thumb-color, #FFd945);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fffde1)}input[type=range][color=warning]::-moz-range-thumb:hover{background:var(--wj-slider-thumb-color, #FFd945);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fffde1)}input[type=range][color=warning]::-ms-thumb:hover{background:var(--wj-slider-thumb-color, #FFd945);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #fffde1)}input[type=range][color=contrast]{--wj-slider-color: #fff;--wj-slider-thumb-color: #fff;--wj-slider-thumb-shadow: none;--wj-slider-thumb-shadow-active: 0 0 0 7px white;--wj-slider-track-color: #757575;background-color:var(--wj-slider-track-color, #757575);background-image:linear-gradient(var(--wj-slider-color, #fff),var(--wj-slider-color, #fff))}input[type=range][color=contrast]::-webkit-slider-thumb{background:var(--wj-slider-thumb-color, #fff);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px white)}input[type=range][color=contrast]::-moz-range-thumb{background:var(--wj-slider-thumb-color, #fff);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px white)}input[type=range][color=contrast]::-ms-thumb{background:var(--wj-slider-thumb-color, #fff);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px white)}input[type=range][color=contrast]::-webkit-slider-thumb:active{background:var(--wj-slider-thumb-color, #fff);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px white)}input[type=range][color=contrast]::-moz-range-thumb:active{background:var(--wj-slider-thumb-color, #fff);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px white)}input[type=range][color=contrast]::-ms-thumb:active{background:var(--wj-slider-thumb-color, #fff);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px white)}input[type=range][color=contrast]::-webkit-slider-thumb:hover{background:var(--wj-slider-thumb-color, #fff);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px white)}input[type=range][color=contrast]::-moz-range-thumb:hover{background:var(--wj-slider-thumb-color, #fff);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px white)}input[type=range][color=contrast]::-ms-thumb:hover{background:var(--wj-slider-thumb-color, #fff);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px white)}input[type=range]::-webkit-slider-thumb{background:var(--wj-slider-thumb-color, #7252D3);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px #eae0fb)}input[type=range]::-moz-range-thumb{background:var(--wj-slider-thumb-color, #7252D3);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px #eae0fb)}input[type=range]::-ms-thumb{background:var(--wj-slider-thumb-color, #7252D3);box-shadow:var(--wj-slider-thumb-shadow, 0 0 0 7px #eae0fb)}input[type=range]::-webkit-slider-thumb:active{background:var(--wj-slider-thumb-color, #7252D3);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb)}input[type=range]::-moz-range-thumb:active{background:var(--wj-slider-thumb-color, #7252D3);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb)}input[type=range]::-ms-thumb:active{background:var(--wj-slider-thumb-color, #7252D3);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb)}input[type=range]::-webkit-slider-thumb:hover{background:var(--wj-slider-thumb-color, #7252D3);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb)}input[type=range]::-moz-range-thumb:hover{background:var(--wj-slider-thumb-color, #7252D3);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb)}input[type=range]::-ms-thumb:hover{background:var(--wj-slider-thumb-color, #7252D3);box-shadow:var(--wj-slider-thumb-shadow-active, 0 0 0 7px #eae0fb)}datalist{display:flex;justify-content:space-between;height:auto;overflow:hidden;margin-top:16px}datalist option:before{content:"";display:block;width:0;height:auto;padding-left:3px;text-indent:0}output{position:absolute;background:#000;color:#fff;top:-46px;padding:4px 8px;border-radius:4px}::slotted([slot=label]){margin-inline:0 1rem;font-size:14px}::slotted([slot=start]){margin-inline:0 1rem}::slotted([slot=end]){margin-inline:1rem 0}
`;
class m extends w {
  constructor() {
    super();
    s(this, "className", "Slider");
    s(this, "setHandlePosition", () => {
      this.input.style.backgroundSize = this.getPercentage(this.input.value, this.input.min, this.input.max) + "% 100%";
    });
    s(this, "setBubble", () => {
      let e = this.getPercentage(this.input.value, this.input.min, this.input.max);
      this.output.style.left = `calc(${e}% + (${8 - e * 0.15}px) - ${this.output.offsetWidth / 2}px)`, this.output.innerHTML = this.input.value;
    });
  }
  set value(e) {
    this.setAttribute("value", e), this.input && (this.input.value = e, this.setHandlePosition());
  }
  get value() {
    return this.getAttribute("value") || 0;
  }
  set min(e) {
    this.setAttribute("min", e);
  }
  get min() {
    return this.getAttribute("min") || 0;
  }
  set max(e) {
    this.setAttribute("max", e);
  }
  get max() {
    return this.getAttribute("max") || 100;
  }
  set step(e) {
    this.setAttribute("step", e);
  }
  get step() {
    return this.getAttribute("step") || 1;
  }
  static get cssStyleSheet() {
    return p;
  }
  static get observedAttributes() {
    return ["max"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw() {
    let e = document.createDocumentFragment(), t = document.createElement("div");
    t.className = "native-slider";
    let i = document.createElement("div");
    i.className = "slider";
    let n = document.createElement("slot");
    n.name = "label";
    let u = document.createElement("slot");
    u.name = "start";
    let l = document.createElement("slot");
    l.name = "end";
    let d = document.createElement("output");
    d.setAttribute("for", "slider"), d.id = "output", d.setAttribute("hidden", "");
    let r = document.createElement("input");
    return r.type = "range", r.min = this.min, r.max = this.max, r.step = this.step, r.value = this.value, r.id = "slider", r.name = "slider", r.part = "slider", r.setAttribute("autocomplete", "off"), r.setAttribute("color", this.color || ""), r.addEventListener("input", (h) => {
      this.setHandlePosition(h.target);
    }), i.appendChild(r), this.hasAttribute("bubble") && i.appendChild(d), t.appendChild(n), t.appendChild(u), t.appendChild(i), t.appendChild(l), e.appendChild(t), this.input = r, this.output = d, e;
  }
  afterDraw() {
    this.setHandlePosition(), this.hasAttribute("bubble") && (this.output.innerHTML = this.input.value, this.output.removeAttribute("hidden"), setTimeout(this.setBubble, 50)), this.dispatchInit(this.input.value), this.input.addEventListener("input", (e) => {
      this.value = e.target.value, this.dispatchMove(this.value), this.hasAttribute("bubble") && this.setBubble();
    }), this.input.addEventListener("change", (e) => {
      this.dispatchChange(e.target.value);
    });
  }
  dispatchInit(e) {
    this.dispatchEvent(
      new CustomEvent("wj:slider-init", {
        bubbles: !0,
        detail: {
          value: e,
          output: this.output
        }
      })
    );
  }
  dispatchMove(e) {
    this.dispatchEvent(
      new CustomEvent("wj:slider-move", {
        bubbles: !0,
        detail: {
          value: e,
          output: this.output
        }
      })
    );
  }
  dispatchChange(e) {
    this.dispatchEvent(
      new CustomEvent("wj:slider-change", {
        bubbles: !0,
        detail: {
          value: e,
          output: this.output
        }
      })
    );
  }
  getPercentage(e = 0, t, i) {
    return Number((e - t) * 100 / (i - t)) || 0;
  }
}
customElements.get("wj-slider") || customElements.define("wj-slider", m);
export {
  m as Slider
};
