var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
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
const styles = "/*\n[ WJ Split View ]\n*/\n\n:host {\n    --wje-split-view-divider-area: 12px;\n    --wje-split-view-divider-width: 4px;\n    --wje-split-view-min: 0%;\n    --wje-split-view-max: 100%;\n    --wje-split-view-calc-a: 50%;\n    --wje-split-view-calc-b: 50%;\n    --wje-split-view-clamp-a: clamp(var(--wje-split-view-min), var(--wje-split-view-calc-a), var(--wje-split-view-max));\n    --wje-split-view-clamp-b: clamp(var(--wje-split-view-min), var(--wje-split-view-calc-b), var(--wje-split-view-max));\n\n    --wje-split-view-divider-background: var(--wje-border-color);\n    --wje-split-view-divider-size: 4px;\n    height: 100%;\n    width: 100%;\n}\n\n::slotted([slot='start']),\n::slotted([slot='end']) {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n}\n\n:host(:not([vertical])) ::slotted([slot='start']) {\n    width: var(--wje-split-view-clamp-a);\n}\n\n:host(:not([vertical])) ::slotted([slot='end']) {\n    width: var(--wje-split-view-clamp-b);\n}\n\n:host([vertical]) ::slotted([slot='start']) {\n    height: var(--wje-split-view-clamp-a);\n    width: 100%;\n}\n\n:host([vertical]) ::slotted([slot='end']) {\n    height: var(--wje-split-view-clamp-b);\n    width: 100%;\n}\n\n.native-split-view {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    overflow: hidden;\n    position: relative;\n}\n\n:host([vertical]) .native-split-view {\n    flex-direction: column;\n}\n\n.wje-divider {\n    display: flex;\n    position: relative;\n    align-items: center;\n    justify-content: center;\n    z-index: 1;\n    background-color: var(--wje-split-view-divider-background);\n    height: 100%;\n    width: var(--wje-split-view-divider-size);\n    cursor: col-resize;\n    &:after {\n        display: flex;\n        align-items: center;\n        content: '';\n        position: absolute;\n        height: 100%;\n        left: calc(var(--wje-split-view-divider-area) / -2 + var(--wje-split-view-divider-width) / 2);\n        width: var(--wje-split-view-divider-area);\n    }\n}\n\n:host([vertical]) .wje-divider {\n    height: var(--wje-split-view-divider-size);\n    width: 100%;\n    cursor: row-resize;\n    &:after {\n        width: 100%;\n        top: calc(var(--wje-split-view-divider-area) / -2 + var(--wje-split-view-divider-width) / 2);\n        height: var(--wje-split-view-divider-area);\n    }\n}\n";
class SplitView extends WJElement {
  /**
   * Creates an instance of SplitView.
   * @class
   */
  constructor() {
    super();
    __publicField(this, "className", "SplitView");
    /**
     * Handles the drag event.
     * @param {Event} e The event object.
     */
    __publicField(this, "handleDrag", (e) => {
      if (this.hasAttribute("disabled")) return;
      drag(this, {
        onMove: (x, y) => {
          let newPositionInPixels = this.hasAttribute("vertical") ? y : x;
          let sizeA = this.pixelsToPercentage(newPositionInPixels);
          let sizeB = 100 - this.pixelsToPercentage(newPositionInPixels);
          this.style.setProperty("--wje-split-view-calc-a", sizeA + "%");
          this.style.setProperty("--wje-split-view-calc-b", sizeB + "%");
          if (this.dividerElement) {
            this.dividerElement.setAttribute("aria-valuenow", `${Math.round(sizeA)}`);
          }
        },
        initialEvent: e
      });
    });
  }
  set initial(value) {
    this.setAttribute("initial", value);
  }
  get initial() {
    return +this.getAttribute("initial") || 50;
  }
  /**
   * Returns the CSS styles for the component.
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Returns the list of attributes to observe for changes.
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the component for the split view.
   * @returns {DocumentFragment}
   */
  draw() {
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
    dividerElement.classList.add("wje-divider");
    dividerElement.setAttribute("part", "divider");
    dividerElement.setAttribute("role", "separator");
    dividerElement.setAttribute("aria-orientation", this.hasAttribute("vertical") ? "vertical" : "horizontal");
    dividerElement.setAttribute("aria-valuemin", "0");
    dividerElement.setAttribute("aria-valuemax", "100");
    dividerElement.setAttribute("aria-valuenow", `${this.initial}`);
    dividerElement.appendChild(divider);
    dividerElement.addEventListener("mousedown", this.handleDrag, false);
    native.appendChild(start);
    native.appendChild(dividerElement);
    native.appendChild(end);
    fragment.appendChild(native);
    this.dividerElement = dividerElement;
    return fragment;
  }
  /**
   * Sets up the event listeners after the component is drawn.
   */
  afterDraw() {
    this.detectSize();
    if (this.min) this.style.setProperty("--wje-split-view-min", this.pixelsToPercentage(this.min) + "%");
    if (this.max) this.style.setProperty("--wje-split-view-max", 100 - this.pixelsToPercentage(this.max) + "%");
    if (this.initial) {
      this.style.setProperty("--wje-split-view-calc-a", this.pixelsToPercentage(this.initial) + "%");
      this.style.setProperty("--wje-split-view-calc-b", 100 - this.pixelsToPercentage(this.initial) + "%");
    }
    this.resizeObserver = new ResizeObserver((entries) => this.handleResize(entries));
  }
  /**
   * Detects the size of the split view.
   */
  detectSize() {
    const { width, height } = this.getBoundingClientRect();
    this.size = this.hasAttribute("vertical") ? height : width;
  }
  /**
   * Converts pixels to a percentage.
   * @param {number} value The pixel value.
   * @returns {number} The percentage value.
   */
  pixelsToPercentage(value) {
    return value / this.size * 100;
  }
}
SplitView.define("wje-split-view", SplitView);
export {
  SplitView as default
};
//# sourceMappingURL=wje-split-view.js.map
