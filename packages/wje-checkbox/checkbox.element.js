import { default as WJElement, event } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary This method dispatches a custom event named "wje-checkbox:change".
 * It is triggered when the input event is fired, which happens when the state of the checkbox changes.
 * The event is dispatched on the current instance of the Checkbox class.
 *
 * @documentation https://elements.webjet.sk/components/checkbox
 * @status stable
 *
 * @extends WJElement
 *
 * @slot - The checkbox main content.
 *
 * @part native - The component's native wrapper.
 *
 * --wje-button-border-radius: var(--wje-border-radius-medium);
 *   --wje-button-border-width: 1px;
 *   --wje-button-border-style: solid;
 *   --wje-button-border-color: var(--wje-color-contrast-1);
 *   --wje-button-margin-inline: 0;
 *
 * @cssproperty [--wje-checkbox-border-radius=--wje-border-radius-medium] - Border radius of the component;
 * @cssproperty [--wje-checkbox-border-width=1px] - Border width of the component;
 * @cssproperty [--wje-checkbox-border-style=solid] - Border style of the component;
 * @cssproperty [--wje-checkbox-border-color=--wje-color-contrast-1] - Border color of the component;
 * @cssproperty [--wje-checkbox-margin-inline=0] - Margin inline of the component;
 *
 * @fires wje-checkbox:change - Dispatched when the checkbox state changes.
 */
export default class Checkbox extends WJElement {
    /**
     * Checkbox constructor.
     */
    constructor() {
        super();
    }

    /**
     * @summary Set checked attribute
     * @returns {boolean} true if the toggle is checked, false otherwise
     */
    set disabled(value) {
        if(value)
            this.setAttribute("disabled", "");
        else
            this.removeAttribute("disabled");
    }

    /**
     * @summary Get disabled attribute
     * @returns {boolean} true if the toggle is disabled, false otherwise
     */
    get disabled() {
        return this.hasAttribute("disabled");
    }

     /**
     * @summary Set checked attribute
     * @returns {boolean} true if the toggle is checked, false otherwise
     */
    set checked(value) {
        if(value)
            this.setAttribute("checked", "");
        else
            this.removeAttribute("checked");
    }

    /**
     * @summary Get checked attribute
     * @returns {boolean} true if the toggle is checked, false otherwise
     */
    get checked() {
        return this.hasAttribute("checked");
    }

    /**
     * The class name.
     */
    className = "Checkbox";

    /**
     * Getter for the CSS stylesheet.
     * @returns {string} The CSS stylesheet.
     */
    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return ["checked", "disabled"];
    }

    /**
     * Sets up the attributes for the checkbox.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draws the checkbox.
     * @param {object} context - The context.
     * @param {object} store - The store.
     * @param {object} params - The parameters.
     * @returns {DocumentFragment} The created fragment.
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.classList.add("native-checkbox");

        let input = document.createElement("input");
        input.type = "checkbox";
        input.id = "checkbox";
        input.name = this.name || "checkbox";
        input.checked = this.hasAttribute("checked");
        input.disabled = this.hasAttribute("disabled");
        input.indeterminate = this.hasAttribute("indeterminate");

        let label = document.createElement("label");
        label.htmlFor = "checkbox";
        label.innerHTML = "<slot></slot>";

        native.appendChild(input);
        native.appendChild(label);

        this.input = input;

        fragment.appendChild(native);

        return fragment;
    }

    /**
     * Adds an event listener after drawing the checkbox.
     */
    afterDraw() {
        if (!this.disabled) {
            this.input.addEventListener("input", (e) => {
                this.checked = e.target.checked;
                event.dispatchCustomEvent(this, "wje-toggle:input");
            });

            this.input.addEventListener("change", (e) => {
                this.checked = e.target.checked;
                event.dispatchCustomEvent(this, "wje-toggle:change");
            });
        }
    }

    /**
     * Handles the input event.
     * @param {Event} e - The event.
     */
    // inputEvent = (e) => {
    //     this.checked = this.input.checked;
    //     event.dispatchCustomEvent(this, "wje-checkbox:change");
    // }

    /**
     * Removes the event listener when the checkbox is disconnected.
     */
    disconnectedCallback() {
        event.removeElement(this.input);
    }
}