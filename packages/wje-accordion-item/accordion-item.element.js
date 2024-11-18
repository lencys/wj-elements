import { default as WJElement, event } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary This class represents an Accordion Item element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/accordion-item
 * @status stable
 * @augments WJElement
 * @slot - The accordion item main content.
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
     * @returns {object} The styles for the Accordion Item element.
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for the observed attributes.
     * @returns {Array} An array containing the name of the observed attribute.
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
     * Method to draw the Accordion Item element. This method returns a document fragment containing the drawn element.
     * @returns {object} The document fragment containing the drawn element.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.classList.add("native-accordion-item");

        let headline = document.createElement("div");
        headline.setAttribute("part", "headline");
        headline.classList.add("headline");

        let headlineDescription = document.createElement("slot");
        headlineDescription.setAttribute("part", "description");
        headlineDescription.setAttribute("name", "description");

        let slotHeadline = document.createElement("slot");
        slotHeadline.setAttribute("name", "headline");

        let toggle = document.createElement("slot");
        toggle.setAttribute("part", "toggle");
        toggle.setAttribute("name", "toggle");

        let mark = document.createElement("wje-icon");
        mark.setAttribute("name", "chevron-down");

        let content = document.createElement("div");
        content.setAttribute("part", "content");
        content.setAttribute("id", "content");

        let slot = document.createElement("slot");
        slot.setAttribute("name", "content");

        toggle.appendChild(mark);

        headline.appendChild(slotHeadline);
        headline.appendChild(toggle);
        headline.appendChild(headlineDescription);

        content.appendChild(slot);

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
                event.dispatchCustomEvent(this, "wje-accordion-item:open");
                this.toggle.style.setProperty("--wje-accordion-marker-rotate", '180deg');
                this.expand();
            } else {
                event.dispatchCustomEvent(this, "wje-accordion-item:close");
                this.toggle.style.setProperty("--wje-accordion-marker-rotate", '0deg');
                this.collapse();
            }
        });
    }

    /**
     * Method to handle the attribute changes.
     */
    collapse = () => {
        this.classList.remove("expanded");
        this.classList.add("collapsed");
    }

    /**
     * Method to handle the attribute changes.
     */
    expand = () => {
        this.classList.remove("collapsed");
        this.classList.add("expanded");
    }
}