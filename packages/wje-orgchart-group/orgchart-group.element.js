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
export default class OrgchartGroup extends WJElement {
    /**
     * Creates an instance of OrgchartGroup.
     *
     * @constructor
     */
    constructor() {
        super();
    }

    className = "OrgchartGroup";


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

    /**
     * Draws the component.
     *
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.classList.add("orgchart-group");

        let card = document.createElement("wje-card");

        let title = document.createElement("h4");
        title.setAttribute("part", "title")
        title.innerHTML = this.getAttribute("title") || "";

        let items = document.createElement("div");
        items.setAttribute("part", "items");
        items.classList.add("items");

        let slot = document.createElement("slot");

        items.appendChild(slot);

        card.appendChild(title);
        card.appendChild(items);

        native.appendChild(card);

        fragment.appendChild(native);

        this.card = card;

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
    afterDraw() {
        this.card.addEventListener("click", (e) => {
            e.stopPropagation();
            event.dispatchCustomEvent(this.card, "wje-orgchart-group:click", { target: this });
        });
    }
}