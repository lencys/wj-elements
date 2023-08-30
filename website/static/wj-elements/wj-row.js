var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import "./default-store-actions-65bc7799.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Row ]\n*/\nwj-row {\n  display: flex;\n  flex-wrap: wrap;\n}\nwj-row {\n  --wj-gutter-x: 1.5rem;\n  --wj-gutter-y: 0;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(var(--wj-gutter-y) * -1);\n  margin-right: calc(var(--wj-gutter-x) * -0.5);\n  margin-left: calc(var(--wj-gutter-x) * -0.5);\n}\n.g-0,\n.gx-0 {\n  --wj-gutter-x: 0;\n}\n.g-0,\n.gy-0 {\n  --wj-gutter-y: 0;\n}\n.g-1,\n.gx-1 {\n  --wj-gutter-x: 0.25rem;\n}\n.g-1,\n.gy-1 {\n  --wj-gutter-y: 0.25rem;\n}\n.g-2,\n.gx-2 {\n  --wj-gutter-x: 0.5rem;\n}\n.g-2,\n.gy-2 {\n  --wj-gutter-y: 0.5rem;\n}\n.g-3,\n.gx-3 {\n  --wj-gutter-x: 1rem;\n}\n.g-3,\n.gy-3 {\n  --wj-gutter-y: 1rem;\n}\n.g-4,\n.gx-4 {\n  --wj-gutter-x: 1.5rem;\n}\n.g-4,\n.gy-4 {\n  --wj-gutter-y: 1.5rem;\n}\n.g-5,\n.gx-5 {\n  --wj-gutter-x: 3rem;\n}\n.g-5,\n.gy-5 {\n  --wj-gutter-y: 3rem;\n}\n@media (min-width: 576px) {\n  .g-sm-0,\n  .gx-sm-0 {\n    --wj-gutter-x: 0;\n  }\n  .g-sm-0,\n  .gy-sm-0 {\n    --wj-gutter-y: 0;\n  }\n  .g-sm-1,\n  .gx-sm-1 {\n    --wj-gutter-x: 0.25rem;\n  }\n  .g-sm-1,\n  .gy-sm-1 {\n    --wj-gutter-y: 0.25rem;\n  }\n  .g-sm-2,\n  .gx-sm-2 {\n    --wj-gutter-x: 0.5rem;\n  }\n  .g-sm-2,\n  .gy-sm-2 {\n    --wj-gutter-y: 0.5rem;\n  }\n  .g-sm-3,\n  .gx-sm-3 {\n    --wj-gutter-x: 1rem;\n  }\n  .g-sm-3,\n  .gy-sm-3 {\n    --wj-gutter-y: 1rem;\n  }\n  .g-sm-4,\n  .gx-sm-4 {\n    --wj-gutter-x: 1.5rem;\n  }\n  .g-sm-4,\n  .gy-sm-4 {\n    --wj-gutter-y: 1.5rem;\n  }\n  .g-sm-5,\n  .gx-sm-5 {\n    --wj-gutter-x: 3rem;\n  }\n  .g-sm-5,\n  .gy-sm-5 {\n    --wj-gutter-y: 3rem;\n  }\n}\n@media (min-width: 768px) {\n  .g-md-0,\n  .gx-md-0 {\n    --wj-gutter-x: 0;\n  }\n  .g-md-0,\n  .gy-md-0 {\n    --wj-gutter-y: 0;\n  }\n  .g-md-1,\n  .gx-md-1 {\n    --wj-gutter-x: 0.25rem;\n  }\n  .g-md-1,\n  .gy-md-1 {\n    --wj-gutter-y: 0.25rem;\n  }\n  .g-md-2,\n  .gx-md-2 {\n    --wj-gutter-x: 0.5rem;\n  }\n  .g-md-2,\n  .gy-md-2 {\n    --wj-gutter-y: 0.5rem;\n  }\n  .g-md-3,\n  .gx-md-3 {\n    --wj-gutter-x: 1rem;\n  }\n  .g-md-3,\n  .gy-md-3 {\n    --wj-gutter-y: 1rem;\n  }\n  .g-md-4,\n  .gx-md-4 {\n    --wj-gutter-x: 1.5rem;\n  }\n  .g-md-4,\n  .gy-md-4 {\n    --wj-gutter-y: 1.5rem;\n  }\n  .g-md-5,\n  .gx-md-5 {\n    --wj-gutter-x: 3rem;\n  }\n  .g-md-5,\n  .gy-md-5 {\n    --wj-gutter-y: 3rem;\n  }\n}\n@media (min-width: 992px) {\n  .g-lg-0,\n  .gx-lg-0 {\n    --wj-gutter-x: 0;\n  }\n  .g-lg-0,\n  .gy-lg-0 {\n    --wj-gutter-y: 0;\n  }\n  .g-lg-1,\n  .gx-lg-1 {\n    --wj-gutter-x: 0.25rem;\n  }\n  .g-lg-1,\n  .gy-lg-1 {\n    --wj-gutter-y: 0.25rem;\n  }\n  .g-lg-2,\n  .gx-lg-2 {\n    --wj-gutter-x: 0.5rem;\n  }\n  .g-lg-2,\n  .gy-lg-2 {\n    --wj-gutter-y: 0.5rem;\n  }\n  .g-lg-3,\n  .gx-lg-3 {\n    --wj-gutter-x: 1rem;\n  }\n  .g-lg-3,\n  .gy-lg-3 {\n    --wj-gutter-y: 1rem;\n  }\n  .g-lg-4,\n  .gx-lg-4 {\n    --wj-gutter-x: 1.5rem;\n  }\n  .g-lg-4,\n  .gy-lg-4 {\n    --wj-gutter-y: 1.5rem;\n  }\n  .g-lg-5,\n  .gx-lg-5 {\n    --wj-gutter-x: 3rem;\n  }\n  .g-lg-5,\n  .gy-lg-5 {\n    --wj-gutter-y: 3rem;\n  }\n}\n@media (min-width: 1200px) {\n  .g-xl-0,\n  .gx-xl-0 {\n    --wj-gutter-x: 0;\n  }\n  .g-xl-0,\n  .gy-xl-0 {\n    --wj-gutter-y: 0;\n  }\n  .g-xl-1,\n  .gx-xl-1 {\n    --wj-gutter-x: 0.25rem;\n  }\n  .g-xl-1,\n  .gy-xl-1 {\n    --wj-gutter-y: 0.25rem;\n  }\n  .g-xl-2,\n  .gx-xl-2 {\n    --wj-gutter-x: 0.5rem;\n  }\n  .g-xl-2,\n  .gy-xl-2 {\n    --wj-gutter-y: 0.5rem;\n  }\n  .g-xl-3,\n  .gx-xl-3 {\n    --wj-gutter-x: 1rem;\n  }\n  .g-xl-3,\n  .gy-xl-3 {\n    --wj-gutter-y: 1rem;\n  }\n  .g-xl-4,\n  .gx-xl-4 {\n    --wj-gutter-x: 1.5rem;\n  }\n  .g-xl-4,\n  .gy-xl-4 {\n    --wj-gutter-y: 1.5rem;\n  }\n  .g-xl-5,\n  .gx-xl-5 {\n    --wj-gutter-x: 3rem;\n  }\n  .g-xl-5,\n  .gy-xl-5 {\n    --wj-gutter-y: 3rem;\n  }\n}\n@media (min-width: 1400px) {\n  .g-xxl-0,\n  .gx-xxl-0 {\n    --wj-gutter-x: 0;\n  }\n  .g-xxl-0,\n  .gy-xxl-0 {\n    --wj-gutter-y: 0;\n  }\n  .g-xxl-1,\n  .gx-xxl-1 {\n    --wj-gutter-x: 0.25rem;\n  }\n  .g-xxl-1,\n  .gy-xxl-1 {\n    --wj-gutter-y: 0.25rem;\n  }\n  .g-xxl-2,\n  .gx-xxl-2 {\n    --wj-gutter-x: 0.5rem;\n  }\n  .g-xxl-2,\n  .gy-xxl-2 {\n    --wj-gutter-y: 0.5rem;\n  }\n  .g-xxl-3,\n  .gx-xxl-3 {\n    --wj-gutter-x: 1rem;\n  }\n  .g-xxl-3,\n  .gy-xxl-3 {\n    --wj-gutter-y: 1rem;\n  }\n  .g-xxl-4,\n  .gx-xxl-4 {\n    --wj-gutter-x: 1.5rem;\n  }\n  .g-xxl-4,\n  .gy-xxl-4 {\n    --wj-gutter-y: 1.5rem;\n  }\n  .g-xxl-5,\n  .gx-xxl-5 {\n    --wj-gutter-x: 3rem;\n  }\n  .g-xxl-5,\n  .gy-xxl-5 {\n    --wj-gutter-y: 3rem;\n  }\n}";
const template = document.createElement("template");
template.innerHTML = `<style>
	${styles}
</style>`;
class Row extends WJElement {
  constructor() {
    super(template);
    __publicField(this, "className", "Row");
  }
  setupAttributes() {
  }
  beforeDraw(context, store, params) {
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
customElements.get("wj-row") || window.customElements.define("wj-row", Row);
export {
  Row
};
