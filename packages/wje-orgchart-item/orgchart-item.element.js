import { default as WJElement, event } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary OrgchartItem is a custom web component that extends WJElement.
 * @documentation https://elements.webjet.sk/components/OrgchartItem
 * @status stable
 *
 * @extends WJElement
 *
 * @csspart - Styles the element.
 *
 * @tag wje-orgchart-item
 *
 * @example
 * <wje-orgchart-item></wje-orgchart-item>
 */
export default class OrgchartItem extends WJElement {
    /**
     * Creates an instance of OrgchartItem.
     *
     * @constructor
     */
    constructor() {
        super();
    }

    className = "OrgchartItem";

    /**
     * Returns the CSS styles for the component.
     *
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    beforeDraw() {
        if (this.parentElement && this.parentElement.tagName === 'WJE-ORGCHART-GROUP') {
            this.classList.add('parent-group');
        }
    }

    /**
     * Draws the component.
     *
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.classList.add("orgchart-item");

        let card = document.createElement("wje-card");

        let slot = document.createElement("slot");

        let child = document.createElement("slot");
        child.setAttribute("name", "child");

        let expander = document.createElement("div");
        expander.setAttribute("part", "expander");
        expander.classList.add("expander");
        expander.innerHTML = "-";

        card.appendChild(slot);
        if(this.children.length > 0 && Array.from(this.children).some(el => el.tagName === "WJE-ORGCHART")) card.appendChild(expander); // if the orgchart item has children and

        native.appendChild(card);
        native.appendChild(child);

        fragment.appendChild(native);

        this.expander = expander;

        return fragment;
    }

    /**
     * After Draws the component.
     *
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     * @returns {DocumentFragment}
     */
    afterDraw(context, store, params) {
        this.expander.addEventListener("click", this.toggleChildren);
    }

    /**
     * Toggles the children of the orgchart item.
     * @param e - The event object.
     */
    toggleChildren = (e) => {
        this.classList.toggle("collapse");
        // change the expander icon
        this.classList.contains('collapse') ? e.target.innerHTML = "+" : e.target.innerHTML = "-";
    }
}
    