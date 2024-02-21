var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
function drag(container, options) {
  function move(pointerEvent) {
    const dims = container.getBoundingClientRect();
    const defaultView = container.ownerDocument.defaultView;
    const offsetX = dims.left + defaultView.pageXOffset;
    const offsetY = dims.top + defaultView.pageYOffset;
    const x = pointerEvent.pageX - offsetX;
    const y = pointerEvent.pageY - offsetY;
    if (options == null ? void 0 : options.onMove) {
      options.onMove(x, y);
    }
  }
  function stop() {
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", stop);
    if (options == null ? void 0 : options.onStop) {
      options.onStop();
    }
  }
  document.addEventListener("pointermove", move, { passive: true });
  document.addEventListener("pointerup", stop);
  if ((options == null ? void 0 : options.initialEvent) instanceof PointerEvent) {
    move(options.initialEvent);
  }
}
const styles = '/*\n[ WJ Image Compare ]\n*/\n:host {\n  --wj-img-compare-divider-area: 12px;\n  --wj-img-compare-divider-background: white;\n  --wj-img-compare-divider-size: 2px;\n  --wj-img-compare-divider-left: 50%;\n  --wj-img-compare-position: 50%;\n  --wj-img-compare-clip-path: inset(0 calc(100% - var(--wj-img-compare-position)) 0 0);\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  border-color: var(--wj-border-color);\n  border-style: solid;\n  border-width: 1px;\n}\n\n.wj-before, .wj-after {\n  display: block;\n}\n\n.wj-after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  clip-path: var(--wj-img-compare-clip-path);\n}\n\n.native-split-view {\n  max-width: 100%;\n  max-height: 100%;\n  overflow: hidden;\n}\n\n.wj-divider {\n  display: flex;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n  background-color: var(--wj-img-compare-divider-background);\n  height: 100%;\n  width: var(--wj-img-compare-divider-size);\n  cursor: col-resize;\n  top: 0;\n  left: var(--wj-img-compare-divider-left);\n}\n.wj-divider:after {\n  display: flex;\n  content: "";\n  position: absolute;\n  height: 100%;\n  left: calc(var(--wj-img-compare-divider-area) / -2 + var(--wj-img-compare-divider-size) / 2);\n  width: var(---wj-img-compare-divider-area);\n}\n.wj-divider wj-icon {\n  position: absolute;\n  background-color: white;\n  padding: 0.5rem;\n  color: var(--wj-color-dark);\n  border-radius: var(--wj-border-radius-circle);\n  box-shadow: rgba(82, 63, 105, 0.2) 0 0 30px 10px;\n  background: var(--wj-color-white) !important;\n}';
class ImgComparer extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "ImgComparer");
    __publicField(this, "handleDrag", (e) => {
      const { width } = this.native.getBoundingClientRect();
      drag(this, {
        onMove: (x) => {
          let value = x / width * 100;
          this.position = parseFloat(this.clamp(value, 0, 100).toFixed(2));
          this.native.style.setProperty("--wj-img-compare-divider-left", this.position + "%");
          this.native.style.setProperty("--wj-img-compare-clip-path", `inset(0 ${100 - this.position}% 0 0)`);
        },
        initialEvent: e
      });
    });
    __publicField(this, "clamp", (num, min, max) => Math.min(Math.max(num, min), max));
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-split-view");
    let beforeElement = document.createElement("div");
    beforeElement.classList.add("wj-before");
    let before = document.createElement("slot");
    before.setAttribute("name", "before");
    let afterElement = document.createElement("div");
    afterElement.classList.add("wj-after");
    let after = document.createElement("slot");
    after.setAttribute("name", "after");
    let icon = document.createElement("wj-icon");
    icon.setAttribute("name", "arrow-bar-both");
    let dividerElement = document.createElement("div");
    dividerElement.classList.add("wj-divider");
    dividerElement.setAttribute("part", "divider");
    dividerElement.addEventListener("mousedown", this.handleDrag, false);
    beforeElement.appendChild(before);
    afterElement.appendChild(after);
    dividerElement.appendChild(icon);
    native.appendChild(beforeElement);
    native.appendChild(afterElement);
    native.appendChild(dividerElement);
    fragment.appendChild(native);
    this.native = native;
    return fragment;
  }
}
customElements.get("wj-img-comparer") || window.customElements.define("wj-img-comparer", ImgComparer);
export {
  ImgComparer
};
