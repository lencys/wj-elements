var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const DEFAULT_DEBOUNCE_MS = 300;
const COL_COUNT_CSS_VAR_NAME = `--wje-masonry-layout-col-count`;
const GAP_CSS_VAR_NAME = `--wje-masonry-layout-gap`;
const ELEMENT_NODE_TYPE = 1;
const DEBOUNCE_MAP = /* @__PURE__ */ new Map();
function getNumberAttribute($elem, name, defaultValue) {
  const value = parseFloat($elem.getAttribute(name) || "");
  return isNaN(value) ? defaultValue : value;
}
function getColCount(totalWidth, cols, maxColWidth) {
  return isNaN(cols) ? Math.max(1, Math.ceil(totalWidth / maxColWidth)) : cols;
}
function debounce(cb, ms, id) {
  const existingTimeout = DEBOUNCE_MAP.get(id);
  if (existingTimeout !== null && existingTimeout !== void 0) window.clearTimeout(existingTimeout);
  DEBOUNCE_MAP.set(id, window.setTimeout(cb, ms));
}
function findSmallestColIndex(colHeights) {
  let smallestIndex = 0;
  let smallestHeight = Infinity;
  colHeights.forEach((height, i) => {
    if (height < smallestHeight) {
      smallestHeight = height;
      smallestIndex = i;
    }
  });
  return smallestIndex;
}
const styles = "/*\n[ WJ Masonry ]\n*/\n\n:host {\n    display: flex;\n    align-items: flex-start;\n    justify-content: stretch;\n    width: 100%;\n}\n\n.column {\n    max-width: calc(\n        (\n            100% / var(--wje-masonry-layout-col-count, 1) -\n                (\n                    (\n                        var(--wje-masonry-layout-gap, 1rem) * (var(--wje-masonry-layout-col-count, 1) - 1) /\n                            var(--wje-masonry-layout-col-count, 1)\n                    )\n                )\n        )\n    );\n    width: 100%;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n.column:not(:last-child) {\n    margin-inline-end: var(--wje-masonry-layout-gap, 1rem);\n}\n\n.column ::slotted(*) {\n    margin-block-end: var(--wje-masonry-layout-gap, 1rem);\n    box-sizing: border-box;\n    width: 100%;\n}\n\n/* Hide the items that has not yet found the correct slot */\n#unset-items {\n    opacity: 0;\n    position: absolute;\n    pointer-events: none;\n}\n";
class Masonry extends WJElement {
  /**
   * Constructor for the Masonry class.
   */
  constructor() {
    super();
    __publicField(this, "debounceId", `layout_${Math.random()}`);
    __publicField(this, "ro");
    __publicField(this, "className", "Masonry");
    /**
     * Called when the slot changes.
     */
    __publicField(this, "onSlotChange", () => {
      const $unsetElements = (this.unsetSlot.assignedNodes() || []).filter(
        (node) => node.nodeType === ELEMENT_NODE_TYPE
      );
      if ($unsetElements.length > 0) {
        this.layout();
      }
    });
    /**
     * Called when the window resizes.
     * @param {Array} entries The entries to use.
     */
    __publicField(this, "onResize", (entries) => {
      const { width } = entries !== null && entries !== void 0 && Array.isArray(entries) && entries.length > 0 ? entries[0].contentRect : { width: this.offsetWidth };
      const colCount = getColCount(width, this.cols, this.maxColWidth);
      if (colCount !== this.columns.length) {
        this.scheduleLayout();
      }
    });
    /**
     * Lays out the element.
     */
    __publicField(this, "layout", () => {
      if (this.currentRequestAnimationFrameCallback !== null && this.currentRequestAnimationFrameCallback !== void 0) {
        window.cancelAnimationFrame(this.currentRequestAnimationFrameCallback);
      }
      this.currentRequestAnimationFrameCallback = requestAnimationFrame(() => {
        const gap = this.gap;
        const $elements = Array.from(this.children).filter((node) => node.nodeType === ELEMENT_NODE_TYPE);
        const colCount = getColCount(this.offsetWidth, this.cols, this.maxColWidth);
        const colHeights = Array(colCount).fill(0);
        const writes = [];
        for (const elem of $elements) {
          const height = elem.getBoundingClientRect().height;
          let smallestColIndex = findSmallestColIndex(colHeights);
          colHeights[smallestColIndex] += height + +gap;
          const newSlot = smallestColIndex;
          if (elem.slot !== newSlot) {
            writes.push(() => elem.slot = newSlot);
          }
        }
        for (const write of writes) {
          write();
        }
        this.renderCols(colCount);
      });
    });
    this.debounceId = `layout_${Math.random()}`;
    this.ro = void 0;
    this.currentRequestAnimationFrameCallback = void 0;
    this.unsetSlot = void 0;
  }
  /**
   * Setter for the maxColWidth property.
   * @param {number} value The maximum column width.
   */
  set maxColWidth(value) {
    this.setAttribute("max-col-width", value);
  }
  /**
   * Getter for the maxColWidth property.
   * @returns {number} The maximum column width.
   */
  get maxColWidth() {
    return this.hasAttribute("max-col-width") ? +this.getAttribute("max-col-width") : 500;
  }
  /**
   * Setter for the cols property.
   * @param {number} value The number of columns.
   */
  set cols(value) {
    if (this.hasAttribute("cols")) this.setAttribute("cols", value);
    else this.setAttribute("cols", "auto");
  }
  /**
   * Getter for the cols property.
   * @returns {number} The number of columns.
   */
  get cols() {
    return getNumberAttribute(this, "cols", "auto");
  }
  /**
   * Setter for the gap property.
   * @param {number} value The gap between columns.
   */
  set gap(value) {
    this.setAttribute("gap", value);
  }
  /**
   * Getter for the gap property.
   * @returns {number} The gap between columns.
   */
  get gap() {
    return getNumberAttribute(this, "gap", "24");
  }
  /**
   * Setter for the debounce property.
   * @param {number} value The debounce time.
   */
  set debounce(value) {
    this.setAttribute("debounce", value);
  }
  /**
   * Getter for the debounce property.
   * @returns {number} The debounce time.
   */
  get debounce() {
    return getNumberAttribute(this, "debounce", DEFAULT_DEBOUNCE_MS);
  }
  /**
   * Getter for the columns property.
   * @returns {Array} An array of all the columns.
   */
  get columns() {
    return Array.from(this.shadowRoot.querySelectorAll(`.column`));
  }
  /**
   * Getter for the cssStyleSheet property.
   * @static
   * @returns {CSSStyleSheet} The CSS style sheet for the masonry layout.
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Getter for the observedAttributes property.
   * @returns {Array} An array of the observed attributes.
   */
  static get observedAttributes() {
    return ["max-col-width", "gap", "cols"];
  }
  /**
   * Callback for when an attribute changes.
   */
  attributeChangedCallback(name, old, newName) {
    switch (name) {
      case "gap":
        this.style.setProperty(GAP_CSS_VAR_NAME, `${this.gap}px`);
        break;
    }
    this.scheduleLayout();
  }
  /**
   * Callback for when the element is disconnected.
   */
  beforeDisconnect() {
    this.unsetSlot.removeEventListener("slotchange", this.onSlotChange);
    window.removeEventListener("resize", this.onResize);
    if (this.ro !== null && this.ro !== void 0) {
      this.ro.unobserve(this);
    }
  }
  /**
   * Sets up the attributes for the element.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Draws the element for the masonry layout.
   * @returns {DocumentFragment} The drawn element.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("id", "unset-items");
    native.setAttribute("part", "native");
    let unsetSlot = document.createElement("slot");
    native.appendChild(unsetSlot);
    this.unsetSlot = unsetSlot;
    this.native = native;
    fragment.appendChild(native);
    return fragment;
  }
  /**
   * Called after the element is drawn.
   */
  afterDraw() {
    this.onSlotChange();
    this.onResize();
    this.layout();
    this.unsetSlot.addEventListener("slotchange", this.onSlotChange);
    if ("ResizeObserver" in window) {
      this.ro = new ResizeObserver(this.onResize);
      this.ro.observe(this);
    } else {
      window.addEventListener("resize", this.onResize);
    }
  }
  /**
   * Renders the columns.
   * @param {number} colCount The number of columns to render.
   */
  renderCols(colCount) {
    const columns = this.columns;
    if (columns.length === colCount) {
      return;
    }
    for (let i = 0; i < colCount; i++) {
      const column = document.createElement("div");
      column.classList.add("column");
      column.setAttribute("part", `column column-${i}`);
      const slot = document.createElement("slot");
      slot.setAttribute("name", i);
      column.appendChild(slot);
      this.context.appendChild(column);
    }
    this.style.setProperty(COL_COUNT_CSS_VAR_NAME, colCount);
  }
  /**
   * Schedules a layout.
   * @param {number} ms The number of milliseconds to wait before laying out.
   */
  scheduleLayout(ms = this.debounce) {
    debounce(this.layout, ms, this.debounceId);
  }
}
Masonry.define("wje-masonry", Masonry);
export {
  Masonry as default
};
//# sourceMappingURL=wje-masonry.js.map
