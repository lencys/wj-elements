import { default as WJElement, event } from "../wje-element/element.js";
import Icon from "../wje-icon/icon.js";
import styles from "./styles/styles.css?inline";

/**
 * `Option` is a custom web component that represents an option.
 * @summary This element represents an option.
 * @documentation https://elements.webjet.sk/components/option
 * @status stable
 *
 * @extends {WJElement}
 *
 * @csspart native - The native part of the option.
 *
 * @slot start - The slot for the start of the option.
 * @slot - The default slot for the option.
 * @slot end - The slot for the end of the option.
 *
 * @fires wje:option-change - Event fired when the option is clicked.
 *
 * @tag wje-option
 */
export default class Option extends WJElement {
    /**
     * Creates an instance of Option.
     *
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Dependencies of the Option component.
     */
    depandencies = {
        "wje-icon": Icon
    }

    /**
     * Sets the selected attribute of the option.
     *
     * @param {boolean} value - The value to set.
     */
    set selected(value) {
        return value ? this.setAttribute("selected", "") : this.removeAttribute("selected");
    }

    /**
     * Sets the value attribute of the option.
     *
     * @param {string} value - The value to set.
     */
    set value(value) {
        this.setAttribute("value", value);
    }

    /**
     * Sets the text content of the option.
     *
     * @param {string} value - The text to set.
     */
    set text(value) {
        this.innerText = value;
    }

    className = "Option";

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

        let element = document.createElement("div");
        element.classList.add("native-option");
        element.setAttribute("part", "native");

        let icon = document.createElement("wje-icon");
        icon.setAttribute("name", "check");

        let start = document.createElement("slot");
        start.setAttribute("name", "start");

        let slot = document.createElement("slot");

        let end = document.createElement("slot");
        end.setAttribute("name", "end");

        element.appendChild(icon);
        element.appendChild(start);
        element.appendChild(slot);
        element.appendChild(end);

        fragment.appendChild(element);

        return fragment;
    }

    /**
     * Adds event listeners after the component is drawn.
     */
    afterDraw() {
        event.addListener(this, "click", "wje:option-change");
    }
}