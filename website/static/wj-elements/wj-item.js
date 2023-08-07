var d = Object.defineProperty;
var l = (i, e, t) => e in i ? d(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var o = (i, e, t) => (l(i, typeof e != "symbol" ? e + "" : e, t), t);
import p from "./wj-element.js";
import "./default-store-actions-ff3e8b0b.js";
const c = `/*!
* direction.scss
*/:host{--wj-border-width: 0 0 1px 0;--padding-top: 0px;--padding-bottom: 0px;--padding-end: 0px;--padding-start: 0px;--inner-border-width: 0 0 1px 0;--inner-padding-top: 0px;--inner-padding-bottom: 0px;--inner-padding-start: 0px;--inner-padding-end: 0px;--inner-box-shadow: none;--show-full-highlight: 0;--show-inset-highlight: 0;--detail-icon-color: initial;--detail-icon-font-size: 20px;--detail-icon-opacity: .25;--color-activated: var(--color);--color-focused: var(--color);--color-hover: var(--color);--ripple-color: currentColor;display:block;position:relative;align-items:center;justify-content:space-between;outline:none;color:var(--color);text-align:initial;text-decoration:none;overflow:hidden;box-sizing:border-box;width:100%}.item-native{--min-height: 40px;--background: #FFFFFF;--transition: opacity 15ms linear, background-color 15ms linear;border-radius:var(--border-radius);-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);margin:0;padding:var(--padding-top) var(--padding-end) var(--padding-bottom) calc(var(--padding-start) + var(--ion-safe-area-left, 0px));display:flex;position:relative;align-items:inherit;justify-content:inherit;width:100%;min-height:var(--min-height);transition:var(--transition);outline:none;background:var(--background);overflow:inherit;box-sizing:border-box;z-index:1;text-decoration:none;color:#000}.item-native .item-inner{margin:0;padding:var(--inner-padding-top) calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end)) var(--inner-padding-bottom) var(--inner-padding-start);display:flex;position:relative;flex:1 1 0;flex-direction:inherit;align-items:inherit;align-self:stretch;min-height:inherit;border-width:var(--wj-border-width);border-style:var(--wj-border-style);border-color:var(--wj-border-color);box-shadow:var(--inner-box-shadow);overflow:inherit;box-sizing:border-box}.item-native .item-inner .input-wrapper{display:flex;flex:1 1 0;flex-direction:inherit;align-items:inherit;align-self:stretch;text-overflow:ellipsis;overflow:inherit;box-sizing:border-box}.item-native .item-bottom{padding:0 var(--inner-padding-end) 0 calc(var(--padding-start) + var(--ion-safe-area-left, 0px));display:flex;justify-content:space-between}@media (any-hover: hover){:host(:hover) .item-native{color:#212121}:host(:hover) .item-native :after{transition:var(--transition);z-index:-1;inset:0;position:absolute;content:"";background:#f4f4f4;opacity:.7}}button,a{cursor:pointer;user-select:none;-webkit-user-drag:none}::slotted([slot=start]){margin-inline:0px 16px}::slotted(wj-label){margin:10px 8px 10px 0}::slotted(wj-label:not([slot=end])){flex:1 1 0}
`, a = document.createElement("template");
a.innerHTML = `<style>
	${c}
</style>`;
class h extends p {
  constructor() {
    super(a);
    o(this, "hostContext", (t, r) => r.closest(t) !== null);
    this.labelColorStyles = {}, this.itemStyles = /* @__PURE__ */ new Map(), this.inheritedAriaAttributes = {}, this.multipleInputs = !1, this.focusable = !0, this.button = !1, this.detailIcon = "", this.disabled = !1, this.counter = !1, this.routerDirection = "forward", this.type = "button";
  }
  isClickable() {
    return this.hasAttribute("href") || this.button;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  beforeDraw(t, r, s) {
  }
  draw(t, r, s) {
    const n = this.isClickable() ? this.hasAttribute("href") === void 0 ? "button" : "a" : "div";
    return this.hostContext("wj-list", this) && this.classList.add("wj-item-list"), `<${n} class="item-native" part="native">
			<slot name="start"></slot>
			<div class="item-inner">
					<div class="input-wrapper">
							<slot></slot>
					</div>
					<slot name="end"></slot>
			</div>
			<div class="item-highlight"></div>
    </${n}>
		<div class="item-bottom">
				<slot name="error"></slot>
				<slot name="helper"></slot>
		</div>`;
  }
}
customElements.get("wj-item") || window.customElements.define("wj-item", h);
export {
  h as Item
};
