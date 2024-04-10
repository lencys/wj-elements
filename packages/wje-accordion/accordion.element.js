import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary This class represents an Accordion element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/accordion
 * @status stable
 *
 * @extends WJElement
 *
 * @slot - The accordion main content.
 *
 * @tag wje-accordion
 */
export default class Accordion extends WJElement {
    /**
     * Constructor for the Accordion class.
     */
    constructor() {
        super();
    }

    set multiple(value) {
        this.setAttribute("multiple", "");
    }

    get multiple() {
        return this.hasAttribute("multiple");
    }

    /**
     * The class name for the Accordion element.
     * @type {string}
     */
    className = "Accordion";

    /**
     * Getter for the CSS stylesheet.
     * @return {Object} The styles for the Accordion element.
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
     * Method to setup attributes for the Accordion element.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    beforeDraw() {
        console.log("beforeDraw", this.getAccordions());

        this.getAccordions().forEach((accordion, index) => {
            // this.hasAttribute("disabled")
            //     accordion.setAttribute("disabled", "");
            console.log(accordion,index, +this.getAttribute("index"));
            if(this.hasAttribute("index") && +this.getAttribute("index") === index) {
                console.log("index", +this.getAttribute("index") +" !== "+ index);
                accordion.classList.add("expanded");
            }
        });
    }

    /**
     * Method to draw the Accordion element.
     * @param {Object} context - The context in which the element is drawn.
     * @param {Object} store - The store containing the state of the element.
     * @param {Object} params - The parameters for drawing the element.
     * @return {Object} The document fragment containing the drawn element.
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let slot = document.createElement("slot");

        fragment.appendChild(slot);

        this.slotEl = slot;

        return fragment;
    }

    afterDraw() {
        this.addEventListener("wje-accordion-item:close", (e) => {
            console.log("wje-accordion-item:close", e.detail);
        });

        this.addEventListener("wje-accordion-item:open", (e) => {
            console.log("wje-accordion-item:open", e.detail);
            if(!this.multiple)
                this.collapseAll(e.detail.context);
        });
    }

    collapseAll(exception) {
        console.log("collapseAll", exception);
        this.getAccordions().forEach((accordion) => {
            if(accordion !== exception)
                accordion.collapse();
        });
    }
    getAccordions() {
        return Array.from(this.querySelectorAll(':scope > wje-accordion-item'));
    }
}