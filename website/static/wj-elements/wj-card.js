var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { W as WJElement } from "./wj-element-e3d75f4b.js";
import "./wj-store.js";
const styles = '/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Card ]\n*/\n:host {\n  --wj-card-margin-top: 0;\n  --wj-card-margin-bottom: 1rem;\n  --wj-card-margin-inline: 0;\n  --wj-card-border-color: transparent;\n  --wj-color-base: #fff;\n  --wj-color-contrast: #4b4b4b;\n}\n:host(.wj-color-primary) {\n  --wj-color-base: #7252D3 !important;\n  --wj-color-contrast: #fff !important;\n}\n:host(.wj-color-complete) {\n  --wj-color-base: #0072EC !important;\n  --wj-color-contrast: #fff !important;\n}\n:host(.wj-color-success) {\n  --wj-color-base: #19AD79 !important;\n  --wj-color-contrast: #fff !important;\n}\n:host(.wj-color-warning) {\n  --wj-color-base: #FFd945 !important;\n  --wj-color-contrast: #4b4b4b !important;\n}\n:host(.wj-color-danger) {\n  --wj-color-base: #D83C31 !important;\n  --wj-color-contrast: #fff !important;\n}\n:host(.wj-color-info) {\n  --wj-color-base: #3B4752 !important;\n  --wj-color-contrast: #fff !important;\n}\n:host(.wj-color-menu) {\n  --wj-color-base: #2b303b !important;\n  --wj-color-contrast: #fff !important;\n}\n:host {\n  background-color: var(--wj-color-base, red);\n  color: var(--wj-color-contrast);\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  margin-top: var(--wj-card-margin-top);\n  margin-bottom: var(--wj-card-margin-bottom);\n  margin-inline: var(--wj-card-margin-inline);\n  box-shadow: rgba(0, 0, 0, 0.12) 0 4px 16px;\n  border-color: var(--wj-border-color);\n  border-style: var(--wj-border-style);\n  border-width: var(--wj-border-size);\n  border-radius: var(--wj-border-radius);\n  font-family: var(--wj-font-family);\n  font-size: var(--wj-font-size);\n  line-height: var(--wj-line-height);\n  position: relative;\n  width: 100%;\n  word-wrap: normal;\n  display: flex;\n  flex-direction: column;\n  contain: content;\n  overflow: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n}\n:host.card-collapsed .card-header .card-controls .card-icon-collapse:before {\n  content: "\\e986";\n}\n:host.card-maximized .card-header .card-controls .card-icon-maximize:before {\n  content: "\\e98d";\n}\n:host.card-bordered {\n  border: 1px solid rgba(224, 224, 224, 0.7);\n}\n:host.card-borderless {\n  border: none;\n  box-shadow: none;\n}\n:host.card-condensed .card-header {\n  padding: 9px 13px 0 13px;\n  min-height: 32px;\n}\n:host.card-condensed .card-header .card-title {\n  opacity: 0.4;\n}\n:host.card-condensed .card-body {\n  padding: 13px;\n}\n:host.card-hover .card-header .card-title {\n  opacity: 0.4;\n}\n:host.card-hover:hover .card-header .card-title {\n  opacity: 1;\n}\n:host.card-transparent {\n  background: transparent;\n  border: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n:host.card-transparent .card-body {\n  background: transparent;\n}\n:host.full-height {\n  height: 100%;\n}\n:host.full-height .card-body {\n  height: auto;\n  width: 100%;\n  height: 100%;\n}\n:host.card-featured {\n  -webkit-box-shadow: -1px 1px 3px 0px rgba(121, 129, 135, 0.14);\n  box-shadow: -1px 1px 3px 0px rgba(121, 129, 135, 0.14);\n  width: calc(100% - 50px);\n  float: right;\n}\n:host.card-featured .card-title h4 {\n  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  font-size: 16px;\n  text-transform: uppercase;\n  color: inherit;\n}\n:host.card-featured .card-body h3 {\n  line-height: 34px;\n  font-size: 26px;\n}\n:host.card-featured .footer .username {\n  line-height: 8px;\n  padding-top: 10px;\n  font-size: 16px;\n}\n:host.card-featured .footer .buttons li {\n  display: inline;\n  list-style: none;\n  font-weight: bold;\n  margin-left: 20px;\n}\n:host.card-featured .footer .buttons li:first-child {\n  margin-left: 0;\n}\n:host.card-featured .footer .buttons .heart {\n  color: #D83C31;\n}\n:host.card-featured .footer .buttons .comment {\n  color: #4b4b4b;\n}\n:host.card-featured .ribbon {\n  width: 38px;\n  height: 38px;\n  margin-left: -39px;\n  float: left;\n  -webkit-box-shadow: inset -3px 0px 3px 0px rgba(0, 0, 0, 0.14);\n  box-shadow: inset -3px 0px 3px 0px rgba(0, 0, 0, 0.14);\n}\n:host.card-featured .ribbon.green {\n  background: #0072EC;\n}\n:host.card-featured .ribbon.blue {\n  background: #19AD79;\n}\n:host.hover-fill:hover {\n  background: #f4f4f4;\n}\n:host.hover-stroke:hover {\n  border: 1px solid #e0e0e0;\n}\n:host(.wj-color) {\n  background-color: var(--wj-color-base, red);\n  color: var(--wj-color-contrast);\n}';
const template = document.createElement("template");
template.innerHTML = `<style>
	${styles}
</style>`;
class Card extends WJElement {
  constructor() {
    super(template);
    __publicField(this, "className", "Card");
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    if (params.color)
      this.classList.add("wj-color-" + params.color, "wj-color");
    fragment.appendChild(element);
    return fragment;
  }
}
customElements.get("wj-card") || window.customElements.define("wj-card", Card);
export {
  Card
};
