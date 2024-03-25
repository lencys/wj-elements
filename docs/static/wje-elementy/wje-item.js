var d = Object.defineProperty;
var l = (i, t, e) => t in i ? d(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var r = (i, t, e) => (l(i, typeof t != "symbol" ? t + "" : t, e), e);
import m from "./wje-element.js";
const p = ':host{--wje-border-width: 0 0 1px 0;--wje-item-background: transparent;--wje-item-background-hover: var(--wje-color-contrast-3);--wje-item-padding-top: 0px;--wje-item-padding-bottom: 0px;--wje-item-padding-end: 0px;--wje-item-padding-start: 0px;--wje-item-inner-border-width: 0 0 1px 0;--wje-item-inner-padding-top: 0px;--wje-item-inner-padding-bottom: 0px;--wje-item-inner-padding-start: 0px;--wje-item-inner-padding-end: 0px;--wje-item-inner-box-shadow: none;--wje-item-min-height: 40px;--wje-item-transition: opacity 15ms linear, background-color 15ms linear;display:block;position:relative;align-items:center;justify-content:space-between;outline:none;color:var(--wje-item-color);text-align:initial;text-decoration:none;overflow:hidden;box-sizing:border-box;width:100%}.item-native{border-radius:var(--wje-item-border-radius);padding-top:var(--wje-item-padding-top);padding-bottom:var(--wje-item-padding-bottom);padding-inline:var(--wje-item-padding-start) var(--wje-item-padding-end);margin:0;display:flex;position:relative;align-items:inherit;justify-content:inherit;width:100%;min-height:var(--wje-item-min-height);transition:var(--wje-item-transition);outline:none;background:var(--wje-item-background);overflow:inherit;box-sizing:border-box;z-index:1;text-decoration:none;color:var(--wje-item-color)}.item-native .item-inner{margin:0;padding:var(--wje-item-inner-padding-top) var(--wje-item-inner-padding-end) var(--wje-item-inner-padding-bottom) var(--wje-item-inner-padding-start);display:flex;position:relative;flex:1 1 0;flex-direction:inherit;align-items:inherit;align-self:stretch;min-height:inherit;border-width:var(--wje-border-width);border-style:var(--wje-border-style);border-color:var(--wje-border-color);box-shadow:var(--wje-item-inner-box-shadow);overflow:inherit;box-sizing:border-box}.item-native .item-inner .input-wrapper{display:flex;flex:1 1 0;flex-direction:inherit;align-items:inherit;align-self:stretch;text-overflow:ellipsis;overflow:inherit;box-sizing:border-box}.item-native .item-bottom{padding:0 var(--wje-item-inner-padding-end) 0 var(--wje-item-padding-start);display:flex;justify-content:space-between}@media (any-hover: hover){:host(:hover) .item-native{color:var(--wje-item-color)}:host(:hover) .item-native :after{transition:var(--wje-item-transition);z-index:-1;top:0;right:0;bottom:0;left:0;position:absolute;content:"";background:var(--wje-item-background-hover);opacity:.7}}button,a{cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}::slotted([slot=start]){margin-inline:0 1rem}::slotted(wje-label:not([slot=end])){flex:1 1 0}';
class a extends m {
  constructor() {
    super();
    r(this, "className", "Item");
    r(this, "hostContext", (e, n) => n.closest(e) !== null);
    this.labelColorStyles = {}, this.itemStyles = /* @__PURE__ */ new Map(), this.inheritedAriaAttributes = {}, this.multipleInputs = !1, this.focusable = !0, this.button = !1, this.detailIcon = "", this.disabled = !1, this.counter = !1, this.routerDirection = "forward", this.type = "button";
  }
  isClickable() {
    return this.hasAttribute("href") || this.button;
  }
  static get cssStyleSheet() {
    return p;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw(e, n, s) {
  }
  draw(e, n, s) {
    const o = this.isClickable() ? this.hasAttribute("href") === void 0 ? "button" : "a" : "div";
    return this.hostContext("wje-list", this) && this.classList.add("wje-item-list"), `<${o} class="item-native" part="native">
			<slot name="start"></slot>
			<div class="item-inner">
					<div class="input-wrapper">
							<slot></slot>
					</div>
					<slot name="end"></slot>
			</div>
			<div class="item-highlight"></div>
    </${o}>
		<div class="item-bottom">
				<slot name="error"></slot>
				<slot name="helper"></slot>
		</div>`;
  }
}
a.define("wje-item", a);
export {
  a as default
};
