import { default as WJElement } from "../wje-element/element.js";
import { COL_COUNT_CSS_VAR_NAME, debounce, DEFAULT_DEBOUNCE_MS, DEFAULT_MAX_COL_WIDTH, ELEMENT_NODE_TYPE, findSmallestColIndex, GAP_CSS_VAR_NAME, getColCount, getNumberAttribute } from "./service/service.js";
import styles from "./styles/styles.css?inline";

/**
 * `Masonry` is a custom web component that represents a masonry layout.
 * It extends from `WJElement`.
 * @summary This element represents a masonry layout.
 * @documentation https://elements.webjet.sk/components/masonry
 * @status stable
 *
 * @extends {WJElement}
 *
 * @csspart native - The native part of the masonry layout.
 * @csspart column - The individual columns in the masonry layout.
 *
 * @slot - The default slot for the masonry layout.
 *
 * @cssprop [--wje-masonry-gap=1rem] - The gap between items in the masonry layout.
 * @cssprop [--wje-masonry-layout-col-count=1] - The count column in the masonry layout.
 *
 * @tag wje-masonry
 */
export default class Masonry extends WJElement {
    /**
     * Constructor for the Masonry class.
     */
    constructor() {
        super();

        this.debounceId = `layout_${Math.random()}`;
        this.ro = undefined;
        this.currentRequestAnimationFrameCallback = undefined;
        this.unsetSlot = undefined;
    }

    /**
     * Setter for the maxColWidth property.
     * @param {number} value - The maximum column width.
     */
    set maxColWidth(value) {
        this.setAttribute("max-col-width", value);
    }

    /**
     * Getter for the maxColWidth property.
     * @returns {number} The maximum column width.
     */
    get maxColWidth() {
        return this.hasAttribute("max-col-width") ? +this.getAttribute("max-col-width") : +DEFAULT_MAX_COL_WIDTH;
    }

    /**
     * Setter for the cols property.
     * @param {number} value - The number of columns.
     */
    set cols(value) {
        if(this.hasAttribute("cols"))
            this.setAttribute("cols", value);
        else
            this.setAttribute("cols", "auto");
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
     * @param {number} value - The gap between columns.
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
     * @param {number} value - The debounce time.
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

    debounceId = `layout_${Math.random()}`

    ro = undefined;

    className = "Masonry";

    /**
     * Getter for the cssStyleSheet property.
     * @returns {CSSStyleSheet} The CSS style sheet.
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
     * @param {string} name - The name of the attribute.
     * @param {string} old - The old value of the attribute.
     * @param {string} newName - The new value of the attribute.
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
        this.unsetSlot.removeEventListener("slotchange", this.onSlotChange)
        window.removeEventListener("resize", this.onResize)
        if (this.ro !== null && this.ro !== undefined) {
            this.ro.unobserve(this)
        }
    }

    /**
     * Sets up the attributes for the element.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draws the element.
     * @param {CanvasRenderingContext2D} context - The context to draw on.
     * @param {Object} store - The store to use.
     * @param {Object} params - The parameters to use.
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

        this.unsetSlot.addEventListener("slotchange", this.onSlotChange)

        if ("ResizeObserver" in window) {
            this.ro = new ResizeObserver(this.onResize);
            this.ro.observe(this);
        } else {
            window.addEventListener("resize", this.onResize);
        }
    }

    /**
     * Called when the slot changes.
     */
    onSlotChange = () => {
        const $unsetElements = (this.unsetSlot.assignedNodes() || []).filter(node => node.nodeType === ELEMENT_NODE_TYPE);
        if ($unsetElements.length > 0) {
            this.layout();
        }
    }

    /**
     * Called when the window resizes.
     * @param {Array} entries - The entries to use.
     */
    onResize = (entries) => {
        const { width } = entries !== null && entries !== undefined && Array.isArray(entries) && entries.length > 0 ? entries[0].contentRect : { width: this.offsetWidth };
        const colCount = getColCount(width, this.cols, this.maxColWidth);
        if (colCount !== this.columns.length) {
            this.scheduleLayout();
        }
    }

    /**
     * Renders the columns.
     * @param {number} colCount - The number of columns to render.
     */
    renderCols(colCount) {
        const columns = this.columns;

        if (columns.length === colCount) {
            return;
        }

        for (let i = 0; i < colCount; i++) {
            const column = document.createElement("div");
            column.classList.add('column');
            column.setAttribute('part', `column column-${i}`);

            const slot = document.createElement("slot");
            slot.setAttribute('name', i);

            column.appendChild(slot);

            this.context.appendChild(column);
        }

        this.style.setProperty(COL_COUNT_CSS_VAR_NAME, colCount);
    }

    /**
     * Schedules a layout.
     * @param {number} ms - The number of milliseconds to wait before laying out.
     */
    scheduleLayout(ms = this.debounce) {
        debounce(this.layout, ms, this.debounceId);
    }

    /**
     * Lays out the element.
     */
    layout = () => {
        if (this.currentRequestAnimationFrameCallback !== null && this.currentRequestAnimationFrameCallback !== undefined) {
            window.cancelAnimationFrame(this.currentRequestAnimationFrameCallback);
        }

        this.currentRequestAnimationFrameCallback = requestAnimationFrame(() => {
            const gap = this.gap;
            const $elements = Array.from(this.children).filter(node => node.nodeType === ELEMENT_NODE_TYPE);
            const colCount = getColCount(this.offsetWidth, this.cols, this.maxColWidth);
            const colHeights = Array(colCount).fill(0);
            const writes = [];

            for (const elem of $elements) {
                const height = elem.getBoundingClientRect().height;
                let smallestColIndex = findSmallestColIndex(colHeights);

                colHeights[smallestColIndex] += height + +gap;

                const newSlot = smallestColIndex;

                if (elem.slot !== newSlot) {
                    writes.push(() => (elem.slot = newSlot));
                }
            }

            for (const write of writes) {
                write();
            }

            this.renderCols(colCount);
        });
    }
}