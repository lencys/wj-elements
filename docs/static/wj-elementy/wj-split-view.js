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
const styles = '/*\n[ WJ Split View ]\n*/\n:host {\n  --wj-split-view-divider-area: 12px;\n  --wj-split-view-divider-width: 4px;\n  --wj-split-view-min: 0%;\n  --wj-split-view-max: 100%;\n  --wj-split-view-calc-a: 50%;\n  --wj-split-view-calc-b: 50%;\n  --wj-split-view-clamp-a: clamp(var(--wj-split-view-min), var(--wj-split-view-calc-a), var(--wj-split-view-max));\n  --wj-split-view-clamp-b: clamp(var(--wj-split-view-min), var(--wj-split-view-calc-b), var(--wj-split-view-max));\n  --wj-split-view-divider-background: var(--wj-border-color);\n  --wj-split-view-divider-size: 4px;\n  height: 100%;\n  width: 100%;\n}\n\n::slotted([slot=start]), ::slotted([slot=end]) {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n\n:host(:not([vertical])) ::slotted([slot=start]) {\n  width: var(--wj-split-view-clamp-a);\n}\n\n:host(:not([vertical])) ::slotted([slot=end]) {\n  width: var(--wj-split-view-clamp-b);\n}\n\n:host([vertical]) ::slotted([slot=start]) {\n  height: var(--wj-split-view-clamp-a);\n  width: 100%;\n}\n\n:host([vertical]) ::slotted([slot=end]) {\n  height: var(--wj-split-view-clamp-b);\n  width: 100%;\n}\n\n.native-split-view {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  position: relative;\n}\n\n:host([vertical]) .native-split-view {\n  flex-direction: column;\n}\n\n.wj-divider {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n  background-color: var(--wj-split-view-divider-background);\n  height: 100%;\n  width: var(--wj-split-view-divider-size);\n  cursor: col-resize;\n}\n.wj-divider:after {\n  display: flex;\n  content: "";\n  position: absolute;\n  height: 100%;\n  left: calc(var(--wj-split-view-divider-area) / -2 + var(--wj-split-view-divider-width) / 2);\n  width: var(--wj-split-view-divider-area);\n}\n\n:host([vertical]) .wj-divider {\n  height: var(--wj-split-view-divider-size);\n  width: 100%;\n  cursor: row-resize;\n}\n:host([vertical]) .wj-divider:after {\n  width: 100%;\n  top: calc(var(--wj-split-view-divider-area) / -2 + var(--wj-split-view-divider-width) / 2);\n  height: var(--wj-split-view-divider-area);\n}';
class SplitView extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "SplitView");
    __publicField(this, "handleDrag", (e) => {
      if (this.hasAttribute("disabled"))
        return false;
      drag(this, {
        onMove: (x, y) => {
          let newPositionInPixels = this.hasAttribute("vertical") ? y : x;
          let sizeA = this.pixelsToPercentage(newPositionInPixels);
          let sizeB = 100 - this.pixelsToPercentage(newPositionInPixels);
          this.style.setProperty("--wj-split-view-calc-a", sizeA + "%");
          this.style.setProperty("--wj-split-view-calc-b", sizeB + "%");
        },
        initialEvent: e
      });
    });
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
    let start = document.createElement("slot");
    start.setAttribute("name", "start");
    let end = document.createElement("slot");
    end.setAttribute("name", "end");
    let divider = document.createElement("slot");
    divider.setAttribute("name", "divider");
    let dividerElement = document.createElement("div");
    dividerElement.classList.add("wj-divider");
    dividerElement.setAttribute("part", "divider");
    dividerElement.appendChild(divider);
    dividerElement.addEventListener("mousedown", this.handleDrag, false);
    native.appendChild(start);
    native.appendChild(dividerElement);
    native.appendChild(end);
    fragment.appendChild(native);
    return fragment;
  }
  afterDraw() {
    this.detectSize();
    if (this.min)
      this.style.setProperty("--wj-split-view-min", this.pixelsToPercentage(this.min) + "%");
    if (this.max)
      this.style.setProperty("--wj-split-view-max", 100 - this.pixelsToPercentage(this.max) + "%");
    if (this.initial) {
      this.style.setProperty("--wj-split-view-calc-a", this.pixelsToPercentage(this.initial) + "%");
      this.style.setProperty("--wj-split-view-calc-b", 100 - this.pixelsToPercentage(this.initial) + "%");
    }
    this.resizeObserver = new ResizeObserver((entries) => this.handleResize(entries));
  }
  detectSize() {
    const { width, height } = this.getBoundingClientRect();
    this.size = this.hasAttribute("vertical") ? height : width;
  }
  percentageToPixels(value) {
    return this.size * (value / 100);
  }
  pixelsToPercentage(value) {
    return value / this.size * 100;
  }
}
customElements.get("wj-split-view") || window.customElements.define("wj-split-view", SplitView);
export {
  SplitView
};
