var s = Object.defineProperty;
var d = (i, e, t) => e in i ? s(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var o = (i, e, t) => (d(i, typeof e != "symbol" ? e + "" : e, t), t);
import l from "./wj-element.js";
import "./wj-store.js";
const m = `:host{--wj-border-width: 0 0 1px 0;--wj-item-background: transparent;--wj-item-background-hover: var(--wj-color-contrast-3);--wj-item-padding-top: 0px;--wj-item-padding-bottom: 0px;--wj-item-padding-end: 0px;--wj-item-padding-start: 0px;--wj-item-inner-border-width: 0 0 1px 0;--wj-item-inner-padding-top: 0px;--wj-item-inner-padding-bottom: 0px;--wj-item-inner-padding-start: 0px;--wj-item-inner-padding-end: 0px;--wj-item-inner-box-shadow: none;--wj-item-min-height: 40px;--wj-item-transition: opacity 15ms linear, background-color 15ms linear;display:block;position:relative;align-items:center;justify-content:space-between;outline:none;color:var(--wj-item-color);text-align:initial;text-decoration:none;overflow:hidden;box-sizing:border-box;width:100%}.item-native{border-radius:var(--wj-item-border-radius);padding-top:var(--wj-item-padding-top);padding-bottom:var(--wj-item-padding-bottom);padding-inline:var(--wj-item-padding-start) var(--wj-item-padding-end);margin:0;display:flex;position:relative;align-items:inherit;justify-content:inherit;width:100%;min-height:var(--wj-item-min-height);transition:var(--wj-item-transition);outline:none;background:var(--wj-item-background);overflow:inherit;box-sizing:border-box;z-index:1;text-decoration:none;color:var(--wj-item-color)}.item-native .item-inner{margin:0;padding:var(--wj-item-inner-padding-top) var(--wj-item-inner-padding-end) var(--wj-item-inner-padding-bottom) var(--wj-item-inner-padding-start);display:flex;position:relative;flex:1 1 0;flex-direction:inherit;align-items:inherit;align-self:stretch;min-height:inherit;border-width:var(--wj-border-width);border-style:var(--wj-border-style);border-color:var(--wj-border-color);box-shadow:var(--wj-item-inner-box-shadow);overflow:inherit;box-sizing:border-box}.item-native .item-inner .input-wrapper{display:flex;flex:1 1 0;flex-direction:inherit;align-items:inherit;align-self:stretch;text-overflow:ellipsis;overflow:inherit;box-sizing:border-box}.item-native .item-bottom{padding:0 var(--wj-item-inner-padding-end) 0 var(--wj-item-padding-start);display:flex;justify-content:space-between}@media (any-hover: hover){:host(:hover) .item-native{color:var(--wj-item-color)}:host(:hover) .item-native :after{transition:var(--wj-item-transition);z-index:-1;top:0;right:0;bottom:0;left:0;position:absolute;content:"";background:var(--wj-item-background-hover);opacity:.7}}button,a{cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}::slotted([slot=start]){margin-inline:0 1rem}::slotted(wj-label:not([slot=end])){flex:1 1 0}
`;
class p extends l {
  constructor() {
    super();
    o(this, "hostContext", (t, n) => n.closest(t) !== null);
    this.labelColorStyles = {}, this.itemStyles = /* @__PURE__ */ new Map(), this.inheritedAriaAttributes = {}, this.multipleInputs = !1, this.focusable = !0, this.button = !1, this.detailIcon = "", this.disabled = !1, this.counter = !1, this.routerDirection = "forward", this.type = "button";
  }
  isClickable() {
    return this.hasAttribute("href") || this.button;
  }
  static get cssStyleSheet() {
    return m;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw(t, n, a) {
  }
  draw(t, n, a) {
    const r = this.isClickable() ? this.hasAttribute("href") === void 0 ? "button" : "a" : "div";
    return this.hostContext("wj-list", this) && this.classList.add("wj-item-list"), `<${r} class="item-native" part="native">
			<slot name="start"></slot>
			<div class="item-inner">
					<div class="input-wrapper">
							<slot></slot>
					</div>
					<slot name="end"></slot>
			</div>
			<div class="item-highlight"></div>
    </${r}>
		<div class="item-bottom">
				<slot name="error"></slot>
				<slot name="helper"></slot>
		</div>`;
  }
}
customElements.get("wj-item") || window.customElements.define("wj-item", p);
export {
  p as Item
};
