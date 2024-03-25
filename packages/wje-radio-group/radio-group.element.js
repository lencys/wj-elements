import { default as WJElement, event } from "../wje-element/element.js";
import Radio from "../wje-radio/radio.js";
import styles from "./styles/styles.css?inline";

/**
 * `RadioGroup` is a custom web component that represents a group of radio buttons.
 * @summary This element represents a group of radio buttons.
 * @documentation https://elements.webjet.sk/components/radio-group
 * @status stable
 *
 * @extends {WJElement}
 *
 * @slot - The default slot for the radio group.
 *
 * @tag wje-radio-group
 */

export default class RadioGroup extends WJElement {
    /**
     * Creates an instance of RadioGroup.
     *
     * @constructor
     */
    constructor() {
        super();
    }

    className = "RadioGroup";

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
     * Returns the list of attributes to observe for changes.
     *
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes() {
        return [];
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
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.classList.add("native-radio-group", this.hasAttribute("inline") ? "wje-inline" : "ddd");

        let slot = document.createElement("slot");

        native.appendChild(slot);

        fragment.appendChild(native);

        return fragment;
    }

    /**
     * Adds event listeners after the component is drawn.
     * Handles the selection of radio buttons.
     */
    afterDraw() {
        if(this.value) {
            this.setRadioToChekced(this.getRadioByValue(this.value));
        }

        this.addEventListener("wje:radio:input", (e) => {
            this.removeCheck();
            this.setRadioToChekced(e.detail.context);
        });
    }

    /**
     * Returns the radio button with the given value.
     *
     * @param {string} value - The value of the radio button.
     * @returns {Radio} The radio button.
     */
    getRadioByValue(value) {
        return this.getAllElements().filter((el) => el instanceof Radio && el.value === value)[0];
    }

    /**
     * Removes the check from all radio buttons.
     */
    removeCheck() {
        this.getAllElements().forEach((el) => {
            if(el instanceof Radio)
                el.checked = false;
        });
    }

    /**
     * Sets the given radio button to checked.
     *
     * @param {Radio} radio - The radio button to check.
     */
    setRadioToChekced(radio) {
        if(radio instanceof Radio) {
            this.setAttribute("value", radio.value);
            radio.checked = true;
        }
    }

    /**
     * Returns all the elements in the radio group.
     *
     * @returns {Array<Element>} The elements.
     */
    getAllElements() {
        return Array.from(this.childNodes);
    }
}