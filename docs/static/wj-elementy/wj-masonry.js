var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const DEFAULT_MAX_COL_WIDTH = 500;
const DEFAULT_DEBOUNCE_MS = 300;
const COL_COUNT_CSS_VAR_NAME = `--wj-masonry-layout-col-count`;
const GAP_CSS_VAR_NAME = `--wj-masonry-layout-gap`;
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
  if (existingTimeout != null)
    window.clearTimeout(existingTimeout);
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
const styles = "/*\n[ WJ Masonry ]\n*/\n:host {\n  display: flex;\n  align-items: flex-start;\n  justify-content: stretch;\n  width: 100%;\n}\n\n.column {\n  max-width: calc(100% / var(--wj-masonry-layout-col-count, 1) - var(--wj-masonry-layout-gap, 1rem) * (var(--wj-masonry-layout-col-count, 1) - 1) / var(--wj-masonry-layout-col-count, 1));\n  width: 100%;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.column:not(:last-child) {\n  margin-inline-end: var(--wj-masonry-layout-gap, 1rem);\n}\n\n.column ::slotted(*) {\n  margin-block-end: var(--wj-masonry-layout-gap, 1rem);\n  box-sizing: border-box;\n  width: 100%;\n}\n\n/* Hide the items that has not yet found the correct slot */\n#unset-items {\n  opacity: 0;\n  position: absolute;\n  pointer-events: none;\n}";
class Masonry extends WJElement {
  constructor() {
    super();
    __publicField(this, "debounceId", `layout_${Math.random()}`);
    __publicField(this, "ro");
    __publicField(this, "className", "Masonry");
    __publicField(this, "onSlotChange", () => {
      const $unsetElements = (this.unsetSlot.assignedNodes() || []).filter((node) => node.nodeType === ELEMENT_NODE_TYPE);
      if ($unsetElements.length > 0) {
        this.layout();
      }
    });
    __publicField(this, "onResize", (entries) => {
      const { width } = entries != null && Array.isArray(entries) && entries.length > 0 ? entries[0].contentRect : { width: this.offsetWidth };
      const colCount = getColCount(width, this.cols, this.maxColWidth);
      if (colCount !== this.columns.length) {
        this.scheduleLayout();
      }
    });
    __publicField(this, "layout", () => {
      if (this.currentRequestAnimationFrameCallback != null) {
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
  set maxColWidth(value) {
    this.setAttribute("max-col-width", value);
  }
  get maxColWidth() {
    return this.hasAttribute("max-col-width") ? +this.getAttribute("max-col-width") : +DEFAULT_MAX_COL_WIDTH;
  }
  set cols(value) {
    this.hasAttribute("cols") ? this.setAttribute("cols", value) : "auto";
  }
  get cols() {
    return getNumberAttribute(this, "cols", "auto");
  }
  set gap(value) {
    this.setAttribute("gap", value);
  }
  get gap() {
    return getNumberAttribute(this, "gap", "24");
  }
  set debounce(value) {
    this.setAttribute("debounce", value);
  }
  get debounce() {
    return getNumberAttribute(this, "debounce", DEFAULT_DEBOUNCE_MS);
  }
  get columns() {
    return Array.from(this.shadowRoot.querySelectorAll(`.column`));
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return ["max-col-width", "gap", "cols"];
  }
  attributeChangedCallback(name, old, newName) {
    switch (name) {
      case "gap":
        this.style.setProperty(GAP_CSS_VAR_NAME, `${this.gap}px`);
        break;
    }
    this.scheduleLayout();
  }
  disconnectedCallback() {
    this.unsetSlot.removeEventListener("slotchange", this.onSlotChange);
    window.removeEventListener("resize", this.onResize);
    if (this.ro != null) {
      this.ro.unobserve(this);
    }
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
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
  renderCols(colCount) {
    const columns = this.columns;
    if (columns.length === colCount) {
      return;
    }
    for (const column of columns) {
      column.parentNode && column.parentNode.removeChild(column);
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
  scheduleLayout(ms = this.debounce) {
    debounce(this.layout, ms, this.debounceId);
  }
}
customElements.get("wj-masonry") || window.customElements.define("wj-masonry", Masonry);
export {
  Masonry
};
