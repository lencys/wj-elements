import { default as WJElement, event } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";
import svgIcon from "/assets/img/icons/outline/chevron-down.svg";

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

        // <input type="checkbox" id="label" />
        // <label for="label">
        let native = document.createElement("details");
        native.setAttribute("part", "native");
        native.setAttribute("open", "");

        let summary = document.createElement("summary");
        summary.setAttribute("part", "summary");

        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", "label");

        let label = document.createElement("label");
        label.setAttribute("for", "label");

        let headline = document.createElement("slot");
        headline.setAttribute("name", "headline");
        headline.setAttribute("id", "headline");

        let content = document.createElement("div");
        content.classList.add("content");

        let slot = document.createElement("slot");
        slot.setAttribute("name", "content");

        summary.appendChild(label);

        label.appendChild(headline);

        content.appendChild(slot);

        native.appendChild(summary);
        native.appendChild(content);

        fragment.appendChild(input);
        fragment.appendChild(native);

        this.input = input;
        this.summary = summary;
        this.native = native;

        return fragment;
    }

    /**
     * Method to execute after the Accordion Item element is drawn.
     */
    afterDraw(context, store, params) {
        this.summary.style.setProperty("--wje-accordion-marker", `url(${svgIcon})`);
        this.summary.style.setProperty("--wje-accordion-marker-rotate", '180deg');

        this.native.addEventListener("toggle", (e) => {
            // e.stopPropagation();
            console.log("toggle", this.native.open, this.input.checked);
            if (this.native.open) {
                event.dispatchCustomEvent(this, "wje-accordion-item:open");
            } else {
                event.dispatchCustomEvent(this, "wje-accordion-item:close");
            }
        });
    }

    collapse = () => {
        this.input.checked = false;
        this.native.open = false;
    }

    onOpen = () => {
        this.native.open = true;
    }
}