import { default as WJElement, event } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary This class represents an Accordion Item element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/accordion-item
 * @status stable
 *
 * @extends WJElement
 *
 * @slot - The accordion item main content.
 *
 * @tag wje-accordion
 */
export default class AccordionItem extends WJElement {
    /**
     * Constructor for the AccordionItem class.
     */
    constructor() {
        super();
    }

    /**
     * The class name for the Accordion Item element.
     * @type {string}
     */
    className = "AccordionItem";

    /**
     * Getter for the CSS stylesheet.
     * @return {Object} The styles for the Accordion Item element.
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for the observed attributes.
     * @return {Array} An array containing the name of the observed attribute.
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Method to setup attributes for the Accordion Item element.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Method to draw the Accordion Item element.
     * @param {Object} context - The context in which the element is drawn.
     * @param {Object} store - The store containing the state of the element.
     * @param {Object} params - The parameters for drawing the element.
     * @return {Object} The document fragment containing the drawn element.
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.classList.add("native-accordion-item");

        let headline = document.createElement("slot");
        headline.setAttribute("name", "headline");
        headline.setAttribute("id", "headline");

        let toggle = document.createElement("slot");
        toggle.setAttribute("name", "toggle");
        toggle.setAttribute("id", "toggle");

        let content = document.createElement("div");
        content.setAttribute("id", "content");

        let slot = document.createElement("slot");
        slot.setAttribute("name", "content");

        content.appendChild(slot); // Append the slot to the content div.

        native.appendChild(headline);
        native.appendChild(content);

        fragment.appendChild(native);

        this.headline = headline;
        this.toggle = toggle;

        return fragment;
    }

    /**
     * Method to execute after the Accordion Item element is drawn.
     */
    afterDraw() {
        if(!this.classList.contains("expanded"))
            this.classList.add("collapsed");

        this.headline.addEventListener("click", () => {
            if(this.classList.contains("collapsed")) {
                this.collapse();
                event.dispatchCustomEvent(this, "wje-accordion-item:open");
            } else {
                this.expand();
                event.dispatchCustomEvent(this, "wje-accordion-item:close");
            }
        });
    }

    // afterDraw(context, store, params) {
    //     this.summary.style.setProperty("--wje-accordion-marker", `url(${svgIcon})`);
    //     this.summary.style.setProperty("--wje-accordion-marker-rotate", '180deg');
    //
    //     this.native.addEventListener("toggle", (e) => {
    //         e.stopPropagation();
    //         if (this.native.open) {
    //             event.dispatchCustomEvent(this, "wje-accordion-item:open");
    //         } else {
    //             event.dispatchCustomEvent(this, "wje-accordion-item:close");
    //         }
    //     });
    // }

    collapse = () => {
        this.classList.remove("expanded");
        this.classList.add("collapsed");
    }

    expand = () => {
        this.classList.remove("collapsed");
        this.classList.add("expanded");
    }
}