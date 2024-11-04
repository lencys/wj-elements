import { default as WJElement, WjElementUtils } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary ButtonGroup class
 * @class
 * @extends WJElement
 *
 * @csspart native - The component's native wrapper.
 *
 * @slot - The button group main content.
 *
 * @part native - The component's native wrapper.
 */

export default class ButtonGroup extends WJElement {
    /**
     * ButtonGroup constructor
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Class name
     * @type {string}
     */
    className = "ButtonGroup";

    /**
     * Get CSS stylesheet
     * @static
     * @returns {Object} styles - The CSS styles
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Get observed attributes
     * @static
     * @returns {Array<string>} observedAttributes - The observed attributes
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Setup attributes
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draw method
     * @param {Object} context - The context
     * @param {Object} store - The store
     * @param {Object} params - The parameters
     * @returns {Object} fragment - The document fragment
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("div");
        element.classList.add("native-button-group");
        element.setAttribute("part", "native");

        this.slotElement = document.createElement("slot");

        element.appendChild(this.slotElement);

        fragment.appendChild(element);

        return fragment;
    }

    /**
     * After draw method
     * @param {Object} context - The context
     * @param {Object} store - The store
     * @param {Object} params - The parameters
     */
    afterDraw() {
        const slottedElements = [...this.slotElement.assignedElements({ flatten: true })];

        slottedElements.forEach(el => {
            let index = slottedElements.indexOf(el);
            let button = this.findButton(el);
            if (button) {
                button.classList.add('wje-button-group-button');
                button.classList.toggle('wje-button-group-first', index === 0);
                button.classList.toggle('wje-button-group-inner', index > 0 && index < slottedElements.length - 1);
                button.classList.toggle('wje-button-group-last', index === slottedElements.length - 1);
            }
        });
    }

    /**
     * Find button method
     * @param {Object} el - The element
     * @returns {Object} button - The button
     */
    findButton(el) {
        const selector = 'wje-button';

        return el.closest(selector) ?? el.querySelector(selector);
    }
}