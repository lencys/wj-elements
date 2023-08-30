var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { WjElementUtils } from "./wj-element.js";
import "./default-store-actions-65bc7799.js";
const styles = '/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n#color-picker-input-wrapper {\n  position: relative;\n  cursor: default;\n}\n#color-picker-input-wrapper #color {\n  cursor: pointer;\n}\n#color-picker-input-wrapper .selected-color {\n  width: 20px;\n  height: 20px;\n  background-color: transparent;\n  position: absolute;\n  right: 18px;\n  top: 16px;\n  z-index: 1100;\n  cursor: pointer;\n}\n#color-picker-input-wrapper #color-picker-wrapper {\n  position: absolute;\n  left: -10px;\n  z-index: 100;\n  width: 260px;\n}\n#color-picker-input-wrapper #color-picker-wrapper #colors {\n  border: 1px solid rgba(8, 8, 8, 0.14);\n  background-color: #fff;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  padding: 5px;\n}\n#color-picker-input-wrapper #color-picker-wrapper .color {\n  width: 24px;\n  height: 24px;\n}\n#color-picker-input-wrapper #color-picker-wrapper .color:hover {\n  cursor: pointer;\n}\n.circle {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n.bg-danger {\n  background-color: #D83C31 !important;\n}\n.bg-danger-lighter {\n  background-color: #fde2da !important;\n}\n.bg-danger-light {\n  background-color: #e6533c !important;\n}\n.bg-danger-dark {\n  background-color: #b91e1e !important;\n}\n.bg-danger-darker {\n  background-color: #900f17 !important;\n}\n.color-danger {\n  color: #D83C31 !important;\n}\n.color-danger-lighter {\n  color: #fde2da !important;\n}\n.color-danger-light {\n  color: #e6533c !important;\n}\n.color-danger-dark {\n  color: #b91e1e !important;\n}\n.color-danger-darker {\n  color: #900f17 !important;\n}\n.bg-crimson {\n  background-color: #dc143c !important;\n}\n.bg-crimson-lighter {\n  background-color: #fdd5e3 !important;\n}\n.bg-crimson-light {\n  background-color: #eb2157 !important;\n}\n.bg-crimson-dark {\n  background-color: #bb0720 !important;\n}\n.bg-crimson-darker {\n  background-color: #90000a !important;\n}\n.color-crimson {\n  color: #dc143c !important;\n}\n.color-crimson-lighter {\n  color: #fdd5e3 !important;\n}\n.color-crimson-light {\n  color: #eb2157 !important;\n}\n.color-crimson-dark {\n  color: #bb0720 !important;\n}\n.color-crimson-darker {\n  color: #90000a !important;\n}\n.bg-tomato {\n  background-color: #ff6347 !important;\n}\n.bg-tomato-lighter {\n  background-color: #ffeae2 !important;\n}\n.bg-tomato-light {\n  background-color: #ff7e59 !important;\n}\n.bg-tomato-dark {\n  background-color: #da3d2f !important;\n}\n.bg-tomato-darker {\n  background-color: #ab1b19 !important;\n}\n.color-tomato {\n  color: #ff6347 !important;\n}\n.color-tomato-lighter {\n  color: #ffeae2 !important;\n}\n.color-tomato-light {\n  color: #ff7e59 !important;\n}\n.color-tomato-dark {\n  color: #da3d2f !important;\n}\n.color-tomato-darker {\n  color: #ab1b19 !important;\n}\n.bg-red-orange {\n  background-color: #ff7745 !important;\n}\n.bg-red-orange-lighter {\n  background-color: #ffede1 !important;\n}\n.bg-red-orange-light {\n  background-color: #ff9058 !important;\n}\n.bg-red-orange-dark {\n  background-color: #da4f2d !important;\n}\n.bg-red-orange-darker {\n  background-color: #aa2b18 !important;\n}\n.color-red-orange {\n  color: #ff7745 !important;\n}\n.color-red-orange-lighter {\n  color: #ffede1 !important;\n}\n.color-red-orange-light {\n  color: #ff9058 !important;\n}\n.color-red-orange-dark {\n  color: #da4f2d !important;\n}\n.color-red-orange-darker {\n  color: #aa2b18 !important;\n}\n.bg-orange {\n  background-color: #ff9c45 !important;\n}\n.bg-orange-lighter {\n  background-color: #fff3e1 !important;\n}\n.bg-orange-light {\n  background-color: #ffb158 !important;\n}\n.bg-orange-dark {\n  background-color: #da722d !important;\n}\n.bg-orange-darker {\n  background-color: #aa4918 !important;\n}\n.color-orange {\n  color: #ff9c45 !important;\n}\n.color-orange-lighter {\n  color: #fff3e1 !important;\n}\n.color-orange-light {\n  color: #ffb158 !important;\n}\n.color-orange-dark {\n  color: #da722d !important;\n}\n.color-orange-darker {\n  color: #aa4918 !important;\n}\n.bg-yellow-orange {\n  background-color: #ffb245 !important;\n}\n.bg-yellow-orange-lighter {\n  background-color: #fff7e1 !important;\n}\n.bg-yellow-orange-light {\n  background-color: #ffc558 !important;\n}\n.bg-yellow-orange-dark {\n  background-color: #da862d !important;\n}\n.bg-yellow-orange-darker {\n  background-color: #aa5b18 !important;\n}\n.color-yellow-orange {\n  color: #ffb245 !important;\n}\n.color-yellow-orange-lighter {\n  color: #fff7e1 !important;\n}\n.color-yellow-orange-light {\n  color: #ffc558 !important;\n}\n.color-yellow-orange-dark {\n  color: #da862d !important;\n}\n.color-yellow-orange-darker {\n  color: #aa5b18 !important;\n}\n.bg-warning {\n  background-color: #FFd945 !important;\n}\n.bg-warning-lighter {\n  background-color: #fffde1 !important;\n}\n.bg-warning-light {\n  background-color: #ffe858 !important;\n}\n.bg-warning-dark {\n  background-color: #daab2d !important;\n}\n.bg-warning-darker {\n  background-color: #aa7918 !important;\n}\n.color-warning {\n  color: #FFd945 !important;\n}\n.color-warning-lighter {\n  color: #fffde1 !important;\n}\n.color-warning-light {\n  color: #ffe858 !important;\n}\n.color-warning-dark {\n  color: #daab2d !important;\n}\n.color-warning-darker {\n  color: #aa7918 !important;\n}\n.bg-khaki {\n  background-color: #f0e68c !important;\n}\n.bg-khaki-lighter {\n  background-color: #ffffeb !important;\n}\n.bg-khaki-light {\n  background-color: #f7f493 !important;\n}\n.bg-khaki-dark {\n  background-color: #cbbb68 !important;\n}\n.bg-khaki-darker {\n  background-color: #a58d3f !important;\n}\n.color-khaki {\n  color: #f0e68c !important;\n}\n.color-khaki-lighter {\n  color: #ffffeb !important;\n}\n.color-khaki-light {\n  color: #f7f493 !important;\n}\n.color-khaki-dark {\n  color: #cbbb68 !important;\n}\n.color-khaki-darker {\n  color: #a58d3f !important;\n}\n.bg-olive {\n  background-color: #808000 !important;\n}\n.bg-olive-lighter {\n  background-color: #f0ecd1 !important;\n}\n.bg-olive-light {\n  background-color: #958c12 !important;\n}\n.bg-olive-dark {\n  background-color: #616800 !important;\n}\n.bg-olive-darker {\n  background-color: #434d00 !important;\n}\n.color-olive {\n  color: #808000 !important;\n}\n.color-olive-lighter {\n  color: #f0ecd1 !important;\n}\n.color-olive-light {\n  color: #958c12 !important;\n}\n.color-olive-dark {\n  color: #616800 !important;\n}\n.color-olive-darker {\n  color: #434d00 !important;\n}\n.bg-yellow-green {\n  background-color: #8ccf19 !important;\n}\n.bg-yellow-green-lighter {\n  background-color: #f3fbd6 !important;\n}\n.bg-yellow-green-light {\n  background-color: #a7df25 !important;\n}\n.bg-yellow-green-dark {\n  background-color: #68b00c !important;\n}\n.bg-yellow-green-darker {\n  background-color: #458902 !important;\n}\n.color-yellow-green {\n  color: #8ccf19 !important;\n}\n.color-yellow-green-lighter {\n  color: #f3fbd6 !important;\n}\n.color-yellow-green-light {\n  color: #a7df25 !important;\n}\n.color-yellow-green-dark {\n  color: #68b00c !important;\n}\n.color-yellow-green-darker {\n  color: #458902 !important;\n}\n.bg-success {\n  background-color: #19AD79 !important;\n}\n.bg-success-lighter {\n  background-color: #d6f7f0 !important;\n}\n.bg-success-light {\n  background-color: #26bf93 !important;\n}\n.bg-success-dark {\n  background-color: #0d935b !important;\n}\n.bg-success-darker {\n  background-color: #04733e !important;\n}\n.color-success {\n  color: #19AD79 !important;\n}\n.color-success-lighter {\n  color: #d6f7f0 !important;\n}\n.color-success-light {\n  color: #26bf93 !important;\n}\n.color-success-dark {\n  color: #0d935b !important;\n}\n.color-success-darker {\n  color: #04733e !important;\n}\n.bg-springgreen {\n  background-color: #00ff7f !important;\n}\n.bg-springgreen-lighter {\n  background-color: #d6fff0 !important;\n}\n.bg-springgreen-light {\n  background-color: #1aff9b !important;\n}\n.bg-springgreen-dark {\n  background-color: #00cf59 !important;\n}\n.bg-springgreen-darker {\n  background-color: #009938 !important;\n}\n.color-springgreen {\n  color: #00ff7f !important;\n}\n.color-springgreen-lighter {\n  color: #d6fff0 !important;\n}\n.color-springgreen-light {\n  color: #1aff9b !important;\n}\n.color-springgreen-dark {\n  color: #00cf59 !important;\n}\n.color-springgreen-darker {\n  color: #009938 !important;\n}\n.bg-turquoise {\n  background-color: #37d5c5 !important;\n}\n.bg-turquoise-lighter {\n  background-color: #dbfcf5 !important;\n}\n.bg-turquoise-light {\n  background-color: #41e3c8 !important;\n}\n.bg-turquoise-dark {\n  background-color: #23b7b2 !important;\n}\n.bg-turquoise-darker {\n  background-color: #138b8e !important;\n}\n.color-turquoise {\n  color: #37d5c5 !important;\n}\n.color-turquoise-lighter {\n  color: #dbfcf5 !important;\n}\n.color-turquoise-light {\n  color: #41e3c8 !important;\n}\n.color-turquoise-dark {\n  color: #23b7b2 !important;\n}\n.color-turquoise-darker {\n  color: #138b8e !important;\n}\n.bg-aqua {\n  background-color: #00ffff !important;\n}\n.bg-aqua-lighter {\n  background-color: #d6fffa !important;\n}\n.bg-aqua-light {\n  background-color: #1afff0 !important;\n}\n.bg-aqua-dark {\n  background-color: #00c1cf !important;\n}\n.bg-aqua-darker {\n  background-color: #008599 !important;\n}\n.color-aqua {\n  color: #00ffff !important;\n}\n.color-aqua-lighter {\n  color: #d6fffa !important;\n}\n.color-aqua-light {\n  color: #1afff0 !important;\n}\n.color-aqua-dark {\n  color: #00c1cf !important;\n}\n.color-aqua-darker {\n  color: #008599 !important;\n}\n.bg-complete {\n  background-color: #0072EC !important;\n}\n.bg-complete-lighter {\n  background-color: #d3eeff !important;\n}\n.bg-complete-light {\n  background-color: #0f8ff9 !important;\n}\n.bg-complete-dark {\n  background-color: #004fbf !important;\n}\n.bg-complete-darker {\n  background-color: #00318e !important;\n}\n.color-complete {\n  color: #0072EC !important;\n}\n.color-complete-lighter {\n  color: #d3eeff !important;\n}\n.color-complete-light {\n  color: #0f8ff9 !important;\n}\n.color-complete-dark {\n  color: #004fbf !important;\n}\n.color-complete-darker {\n  color: #00318e !important;\n}\n.bg-navy {\n  background-color: #000080 !important;\n}\n.bg-navy-lighter {\n  background-color: #d5d1f0 !important;\n}\n.bg-navy-light {\n  background-color: #1b1295 !important;\n}\n.bg-navy-dark {\n  background-color: #000768 !important;\n}\n.bg-navy-darker {\n  background-color: #000a4d !important;\n}\n.color-navy {\n  color: #000080 !important;\n}\n.color-navy-lighter {\n  color: #d5d1f0 !important;\n}\n.color-navy-light {\n  color: #1b1295 !important;\n}\n.color-navy-dark {\n  color: #000768 !important;\n}\n.color-navy-darker {\n  color: #000a4d !important;\n}\n.bg-primary {\n  background-color: #7252D3 !important;\n}\n.bg-primary-lighter {\n  background-color: #eae0fb !important;\n}\n.bg-primary-light {\n  background-color: #845ae0 !important;\n}\n.bg-primary-dark {\n  background-color: #4e37b6 !important;\n}\n.bg-primary-darker {\n  background-color: #2d218f !important;\n}\n.color-primary {\n  color: #7252D3 !important;\n}\n.color-primary-lighter {\n  color: #eae0fb !important;\n}\n.color-primary-light {\n  color: #845ae0 !important;\n}\n.color-primary-dark {\n  color: #4e37b6 !important;\n}\n.color-primary-darker {\n  color: #2d218f !important;\n}\n.bg-red-violet {\n  background-color: #ae52d3 !important;\n}\n.bg-red-violet-lighter {\n  background-color: #f7e0fb !important;\n}\n.bg-red-violet-light {\n  background-color: #c35ae0 !important;\n}\n.bg-red-violet-dark {\n  background-color: #8937b6 !important;\n}\n.bg-red-violet-darker {\n  background-color: #60218f !important;\n}\n.color-red-violet {\n  color: #ae52d3 !important;\n}\n.color-red-violet-lighter {\n  color: #f7e0fb !important;\n}\n.color-red-violet-light {\n  color: #c35ae0 !important;\n}\n.color-red-violet-dark {\n  color: #8937b6 !important;\n}\n.color-red-violet-darker {\n  color: #60218f !important;\n}\n.bg-violet {\n  background-color: #ee82ee !important;\n}\n.bg-violet-lighter {\n  background-color: #fbe9fe !important;\n}\n.bg-violet-light {\n  background-color: #ee89f6 !important;\n}\n.bg-violet-dark {\n  background-color: #cb5fc3 !important;\n}\n.bg-violet-darker {\n  background-color: #a33a95 !important;\n}\n.color-violet {\n  color: #ee82ee !important;\n}\n.color-violet-lighter {\n  color: #fbe9fe !important;\n}\n.color-violet-light {\n  color: #ee89f6 !important;\n}\n.color-violet-dark {\n  color: #cb5fc3 !important;\n}\n.color-violet-darker {\n  color: #a33a95 !important;\n}\n.bg-magenta {\n  background-color: #ff00ff !important;\n}\n.bg-magenta-lighter {\n  background-color: #fad6ff !important;\n}\n.bg-magenta-light {\n  background-color: #f01aff !important;\n}\n.bg-magenta-dark {\n  background-color: #cf00c1 !important;\n}\n.bg-magenta-darker {\n  background-color: #990085 !important;\n}\n.color-magenta {\n  color: #ff00ff !important;\n}\n.color-magenta-lighter {\n  color: #fad6ff !important;\n}\n.color-magenta-light {\n  color: #f01aff !important;\n}\n.color-magenta-dark {\n  color: #cf00c1 !important;\n}\n.color-magenta-darker {\n  color: #990085 !important;\n}\n.bg-deeppink {\n  background-color: #ff1493 !important;\n}\n.bg-deeppink-lighter {\n  background-color: #ffd9f3 !important;\n}\n.bg-deeppink-light {\n  background-color: #ff2cac !important;\n}\n.bg-deeppink-dark {\n  background-color: #d9066a !important;\n}\n.bg-deeppink-darker {\n  background-color: #a50043 !important;\n}\n.color-deeppink {\n  color: #ff1493 !important;\n}\n.color-deeppink-lighter {\n  color: #ffd9f3 !important;\n}\n.color-deeppink-light {\n  color: #ff2cac !important;\n}\n.color-deeppink-dark {\n  color: #d9066a !important;\n}\n.color-deeppink-darker {\n  color: #a50043 !important;\n}\n.bg-hotpink {\n  background-color: #ff69b4 !important;\n}\n.bg-hotpink-lighter {\n  background-color: #ffe7f6 !important;\n}\n.bg-hotpink-light {\n  background-color: #ff78c5 !important;\n}\n.bg-hotpink-dark {\n  background-color: #d94b89 !important;\n}\n.bg-hotpink-darker {\n  background-color: #ac2c5b !important;\n}\n.color-hotpink {\n  color: #ff69b4 !important;\n}\n.color-hotpink-lighter {\n  color: #ffe7f6 !important;\n}\n.color-hotpink-light {\n  color: #ff78c5 !important;\n}\n.color-hotpink-dark {\n  color: #d94b89 !important;\n}\n.color-hotpink-darker {\n  color: #ac2c5b !important;\n}\n.bg-lightcoral {\n  background-color: #f08080 !important;\n}\n.bg-lightcoral-lighter {\n  background-color: #ffece9 !important;\n}\n.bg-lightcoral-light {\n  background-color: #f88f87 !important;\n}\n.bg-lightcoral-dark {\n  background-color: #cc5e66 !important;\n}\n.bg-lightcoral-darker {\n  background-color: #a43947 !important;\n}\n.color-lightcoral {\n  color: #f08080 !important;\n}\n.color-lightcoral-lighter {\n  color: #ffece9 !important;\n}\n.color-lightcoral-light {\n  color: #f88f87 !important;\n}\n.color-lightcoral-dark {\n  color: #cc5e66 !important;\n}\n.color-lightcoral-darker {\n  color: #a43947 !important;\n}\n.bg-saddle-brown {\n  background-color: #8b4513 !important;\n}\n.bg-saddle-brown-lighter {\n  background-color: #f1e4d4 !important;\n}\n.bg-saddle-brown-light {\n  background-color: #a05f22 !important;\n}\n.bg-saddle-brown-dark {\n  background-color: #773009 !important;\n}\n.bg-saddle-brown-darker {\n  background-color: #5b1c03 !important;\n}\n.color-saddle-brown {\n  color: #8b4513 !important;\n}\n.color-saddle-brown-lighter {\n  color: #f1e4d4 !important;\n}\n.color-saddle-brown-light {\n  color: #a05f22 !important;\n}\n.color-saddle-brown-dark {\n  color: #773009 !important;\n}\n.color-saddle-brown-darker {\n  color: #5b1c03 !important;\n}\n.bg-info {\n  background-color: #3B4752 !important;\n}\n.bg-info-lighter {\n  background-color: #dbe6e8 !important;\n}\n.bg-info-light {\n  background-color: #475b6b !important;\n}\n.bg-info-dark {\n  background-color: #2b3947 !important;\n}\n.bg-info-darker {\n  background-color: #1b2839 !important;\n}\n.color-info {\n  color: #3B4752 !important;\n}\n.color-info-lighter {\n  color: #dbe6e8 !important;\n}\n.color-info-light {\n  color: #475b6b !important;\n}\n.color-info-dark {\n  color: #2b3947 !important;\n}\n.color-info-darker {\n  color: #1b2839 !important;\n}\n/*------------------------------------------------------------------\n[Card - Header]\n*/\n:host {\n  background: transparent;\n  border-radius: 0px;\n  border-bottom: 0px;\n  padding: 1rem 1rem 0.5rem;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  color: var(--wj-color-contrast);\n}\n:host(.wj-separator):after {\n  content: "";\n  height: 1px;\n  background: rgba(0, 0, 0, 0.08);\n  margin-top: 0.5rem;\n}';
const template = document.createElement("template");
template.innerHTML = `<style>
	${styles}
</style>`;
class CardHeader extends WJElement {
  constructor() {
    super(template);
    __publicField(this, "className", "CardHeader");
  }
  get separator() {
    return this.hasAttribute("separator");
  }
  set separator(value) {
    if (value)
      this.setAttribute("separator", "");
  }
  setupAttributes() {
    this.isShadowRoot = "open";
    WjElementUtils.setAttributesToElement(this, {
      "test": "test"
    });
  }
  beforeDraw(context, store, params) {
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    if (this.separator)
      this.classList.add("wj-separator");
    fragment.appendChild(element);
    return fragment;
  }
}
customElements.get("wj-card-header") || window.customElements.define("wj-card-header", CardHeader);
export {
  CardHeader
};
