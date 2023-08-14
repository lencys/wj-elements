var g = Object.defineProperty;
var l = (o, n, e) => n in o ? g(o, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[n] = e;
var u = (o, n, e) => (l(o, typeof n != "symbol" ? n + "" : n, e), e);
import h from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const m = `/*!
* direction.scss
*/:host{position:relative;display:flex;align-items:center;max-width:100%}:host .native-slider{display:flex;position:relative;flex-grow:1;align-items:center;height:inherit}:host .slider{display:flex;align-items:center;position:relative;flex:1 1 0%;width:100%;height:var(--height);contain:size layout style;cursor:grab;touch-action:pan-y}input[type=range]{-webkit-appearance:none;width:100%;height:4px;margin:0;border-radius:5px;background-size:70% 100%;background-repeat:no-repeat}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;height:18px;width:18px;border-radius:50%;cursor:ew-resize;transition:background .3s ease-in-out}input[type=range]::-moz-range-thumb{-webkit-appearance:none;height:18px;width:18px;border-radius:50%;cursor:pointer;transition:background .3s ease-in-out;border:0}input[type=range]::-ms-thumb{-webkit-appearance:none;height:18px;width:18px;border-radius:50%;cursor:ew-resize;transition:background .3s ease-in-out}input[type=range]::-webkit-slider-runnable-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}input[type=range]::-moz-range-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}input[type=range]::-ms-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}input[type=range][color=primary]{background-color:#dbe6e8;background-image:linear-gradient(#7252D3,#7252D3)}input[type=range][color=primary]::-webkit-slider-thumb{background:#7252D3}input[type=range][color=primary]::-moz-range-thumb{background:#7252D3}input[type=range][color=primary]::-ms-thumb{background:#7252D3}input[type=range][color=primary]::-webkit-slider-thumb:active{background:#7252D3;box-shadow:0 0 0 7px #eae0fb}input[type=range][color=primary]::-moz-range-thumb:active{background:#7252D3;box-shadow:0 0 0 7px #eae0fb}input[type=range][color=primary]::-ms-thumb:active{background:#7252D3;box-shadow:0 0 0 7px #eae0fb}input[type=range][color=primary]::-webkit-slider-thumb:hover{background:#7252D3;box-shadow:0 0 0 7px #eae0fb}input[type=range][color=primary]::-moz-range-thumb:hover{background:#7252D3;box-shadow:0 0 0 7px #eae0fb}input[type=range][color=primary]::-ms-thumb:hover{background:#7252D3;box-shadow:0 0 0 7px #eae0fb}input[type=range][color=success]{background-color:#dbe6e8;background-image:linear-gradient(#19AD79,#19AD79)}input[type=range][color=success]::-webkit-slider-thumb{background:#19AD79}input[type=range][color=success]::-moz-range-thumb{background:#19AD79}input[type=range][color=success]::-ms-thumb{background:#19AD79}input[type=range][color=success]::-webkit-slider-thumb:active{background:#19AD79;box-shadow:0 0 0 7px #d6f7f0}input[type=range][color=success]::-moz-range-thumb:active{background:#19AD79;box-shadow:0 0 0 7px #d6f7f0}input[type=range][color=success]::-ms-thumb:active{background:#19AD79;box-shadow:0 0 0 7px #d6f7f0}input[type=range][color=success]::-webkit-slider-thumb:hover{background:#19AD79;box-shadow:0 0 0 7px #d6f7f0}input[type=range][color=success]::-moz-range-thumb:hover{background:#19AD79;box-shadow:0 0 0 7px #d6f7f0}input[type=range][color=success]::-ms-thumb:hover{background:#19AD79;box-shadow:0 0 0 7px #d6f7f0}input[type=range][color=complete]{background-color:#dbe6e8;background-image:linear-gradient(#0072EC,#0072EC)}input[type=range][color=complete]::-webkit-slider-thumb{background:#0072EC}input[type=range][color=complete]::-moz-range-thumb{background:#0072EC}input[type=range][color=complete]::-ms-thumb{background:#0072EC}input[type=range][color=complete]::-webkit-slider-thumb:active{background:#0072EC;box-shadow:0 0 0 7px #d3eeff}input[type=range][color=complete]::-moz-range-thumb:active{background:#0072EC;box-shadow:0 0 0 7px #d3eeff}input[type=range][color=complete]::-ms-thumb:active{background:#0072EC;box-shadow:0 0 0 7px #d3eeff}input[type=range][color=complete]::-webkit-slider-thumb:hover{background:#0072EC;box-shadow:0 0 0 7px #d3eeff}input[type=range][color=complete]::-moz-range-thumb:hover{background:#0072EC;box-shadow:0 0 0 7px #d3eeff}input[type=range][color=complete]::-ms-thumb:hover{background:#0072EC;box-shadow:0 0 0 7px #d3eeff}input[type=range][color=danger]{background-color:#dbe6e8;background-image:linear-gradient(#D83C31,#D83C31)}input[type=range][color=danger]::-webkit-slider-thumb{background:#D83C31}input[type=range][color=danger]::-moz-range-thumb{background:#D83C31}input[type=range][color=danger]::-ms-thumb{background:#D83C31}input[type=range][color=danger]::-webkit-slider-thumb:active{background:#D83C31;box-shadow:0 0 0 7px #fde2da}input[type=range][color=danger]::-moz-range-thumb:active{background:#D83C31;box-shadow:0 0 0 7px #fde2da}input[type=range][color=danger]::-ms-thumb:active{background:#D83C31;box-shadow:0 0 0 7px #fde2da}input[type=range][color=danger]::-webkit-slider-thumb:hover{background:#D83C31;box-shadow:0 0 0 7px #fde2da}input[type=range][color=danger]::-moz-range-thumb:hover{background:#D83C31;box-shadow:0 0 0 7px #fde2da}input[type=range][color=danger]::-ms-thumb:hover{background:#D83C31;box-shadow:0 0 0 7px #fde2da}input[type=range][color=warning]{background-color:#dbe6e8;background-image:linear-gradient(#FFd945,#FFd945)}input[type=range][color=warning]::-webkit-slider-thumb{background:#FFd945}input[type=range][color=warning]::-moz-range-thumb{background:#FFd945}input[type=range][color=warning]::-ms-thumb{background:#FFd945}input[type=range][color=warning]::-webkit-slider-thumb:active{background:#FFd945;box-shadow:0 0 0 7px #fffde1}input[type=range][color=warning]::-moz-range-thumb:active{background:#FFd945;box-shadow:0 0 0 7px #fffde1}input[type=range][color=warning]::-ms-thumb:active{background:#FFd945;box-shadow:0 0 0 7px #fffde1}input[type=range][color=warning]::-webkit-slider-thumb:hover{background:#FFd945;box-shadow:0 0 0 7px #fffde1}input[type=range][color=warning]::-moz-range-thumb:hover{background:#FFd945;box-shadow:0 0 0 7px #fffde1}input[type=range][color=warning]::-ms-thumb:hover{background:#FFd945;box-shadow:0 0 0 7px #fffde1}input[type=range][color=contrast]{background-color:#757575;background-image:linear-gradient(#fff,#fff)}input[type=range][color=contrast]::-webkit-slider-thumb{background:#fff}input[type=range][color=contrast]::-moz-range-thumb{background:#fff}input[type=range][color=contrast]::-ms-thumb{background:#fff}input[type=range][color=contrast]::-webkit-slider-thumb:active{background:#fff;box-shadow:0 0 0 7px #fff}input[type=range][color=contrast]::-moz-range-thumb:active{background:#fff;box-shadow:0 0 0 7px #fff}input[type=range][color=contrast]::-ms-thumb:active{background:#fff;box-shadow:0 0 0 7px #fff}input[type=range][color=contrast]::-webkit-slider-thumb:hover{background:#fff;box-shadow:0 0 0 7px #fff}input[type=range][color=contrast]::-moz-range-thumb:hover{background:#fff;box-shadow:0 0 0 7px #fff}input[type=range][color=contrast]::-ms-thumb:hover{background:#fff;box-shadow:0 0 0 7px #fff}datalist{display:flex;justify-content:space-between;height:auto;overflow:hidden;margin-top:16px}datalist option:before{content:"";display:block;width:0;height:auto;padding-left:3px;text-indent:0}output{position:absolute;background:#000;color:#fff;top:-46px;padding:4px 8px;border-radius:4px}::slotted([slot=label]){margin-inline:0 1rem;font-size:14px}::slotted([slot=start]){margin-inline:0 1rem}::slotted([slot=end]){margin-inline:1rem 0}
`, c = document.createElement("template");
c.innerHTML = `<style>
	${m}
</style>`;
class f extends h {
  constructor() {
    super(c);
    u(this, "setHandlePosition", () => {
      this.input.style.backgroundSize = this.getPercentage(this.input.value, this.input.min, this.input.max) + "% 100%";
    });
    u(this, "setBubble", () => {
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
  static get observedAttributes() {
    return ["max"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw() {
    let e = document.createDocumentFragment(), r = document.createElement("div");
    r.className = "native-slider";
    let a = document.createElement("div");
    a.className = "slider";
    let s = document.createElement("slot");
    s.name = "label";
    let p = document.createElement("slot");
    p.name = "start";
    let d = document.createElement("slot");
    d.name = "end";
    let i = document.createElement("output");
    i.setAttribute("for", "slider"), i.id = "output", i.setAttribute("hidden", "");
    let t = document.createElement("input");
    return t.type = "range", t.min = this.min, t.max = this.max, t.step = this.step, t.value = this.value, t.id = "slider", t.name = "slider", t.part = "slider", t.setAttribute("autocomplete", "off"), t.setAttribute("color", this.color || "primary"), t.addEventListener("input", (b) => {
      this.setHandlePosition(b.target);
    }), a.appendChild(t), this.hasAttribute("bubble") && a.appendChild(i), r.appendChild(s), r.appendChild(p), r.appendChild(a), r.appendChild(d), e.appendChild(r), this.input = t, this.output = i, e;
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
      new CustomEvent("wj-slider-init", {
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
      new CustomEvent("wj-slider-move", {
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
      new CustomEvent("wj-slider-change", {
        bubbles: !0,
        detail: {
          value: e,
          output: this.output
        }
      })
    );
  }
  getPercentage(e = 0, r, a) {
    return Number((e - r) * 100 / (a - r)) || 0;
  }
}
customElements.get("wj-slider") || customElements.define("wj-slider", f);
export {
  f as Slider
};
