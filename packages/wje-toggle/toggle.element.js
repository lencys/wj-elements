import { default as WJElement, event } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `Toggle` is a custom web component that represents a toggle input.
 * @summary This element represents a toggle input.
 * @documentation https://elements.webjet.sk/components/toggle
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native toggle wrapper.
 * @csspart input - The toggle input.
 * @csspart toggle - The toggle part.
 * @slot - The default slot for the toggle.
 * @cssproperty [--wje-toggle-color-base=var(--wje-color-contrast-3)] - The base background color of the toggle. Defines the default background color when the toggle is in an unselected state.
 * @cssproperty [--wje-toggle-width=30px] - The overall width of the toggle switch. Determines how wide the toggle component appears.
 * @cssproperty [--wje-toggle-height=18px] - The overall height of the toggle switch. Specifies how tall the toggle component appears.
 * @cssproperty [--wje-toggle-border-radius=50px] - The border radius of the toggle. Controls how rounded the corners of the toggle are.
 * @cssproperty [--wje-toggle-handle-width=14px] - The width of the toggle handle (knob). Determines the size of the handle for user interaction.
 * @cssproperty [--wje-toggle-handle-height=14px] - The height of the toggle handle (knob). Specifies the vertical size of the handle.
 * @cssproperty [--wje-toggle-handle-border-radius=9px] - The border radius of the toggle handle. Controls how rounded the handle is.
 * @cssproperty [--wje-toggle-handle-color=#fff] - The color of the toggle handle. Accepts any valid CSS color, such as `hex`, `rgb`, or `css variable`.
 * @cssproperty [--wje-toggle-handle-shadow=1px 0 1px 0.5px rgba(0,0,0,0.12), 2px 4px 6px rgba(0,0,0,0.2)] - The shadow applied to the toggle handle. Adds a subtle shadow effect for better visual clarity.
 * @cssproperty [--wje-toggle-handle-shadow-checked=1px 1px 0 rgba(0,0,0,0.08), -3px 3px 6px rgba(0,0,0,0.3)] - The shadow applied to the toggle handle when it is in the checked (on) state. Provides visual feedback to indicate the toggle state.
 * @cssproperty [--wje-toggle-duration=250ms] - The duration of the toggle animation in milliseconds. Controls how long the toggle animation lasts during state changes.
 * @cssproperty [--wje-toggle-curve=cubic-bezier(.4,0,.2,1)] - The easing curve used for the toggle animation. Defines the speed curve for the animation, enhancing the user experience with smooth transitions.
 * @tag wje-toggle
 */

export default class Toggle extends WJElement {

    /**
     * Creates an instance of Toggle.
     */
    constructor() {
        super();
    }

    /**
     * Set checked attribute for the toggle element.
     */
    set disabled(value) {
        if(value)
            this.setAttribute("disabled", "");
        else
            this.removeAttribute("disabled");
    }

    /**
     * Get checked attribute for the toggle element.
     * @returns {boolean} true if the toggle is disabled, false otherwise
     */
    get disabled() {
        return this.hasAttribute("disabled");
    }

    /**
     * Set checked attribute for the toggle element.
     */
    set checked(value) {
        if(value)
            this.setAttribute("checked", "");
        else
            this.removeAttribute("checked");
    }

    /**
     * Get checked attribute for the toggle element.
     * @returns {boolean} true if the toggle is checked, false otherwise
     */
    get checked() {
        return this.hasAttribute("checked");
    }

    /**
     * Set color attribute for the toggle element.
     * @type {string}
     */
    className = "Toggle";

    /**
     * Get CSS stylesheet for the Button element.
     * @static
     * @returns {CSSStyleSheet} styles - The CSS stylesheet for the Button element.
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Get observed attributes for the toggle element.
     * @returns {string[]}
     */
    static get observedAttributes() {
        return ["checked", "disabled"];
    }

    /**
     * Set up the attributes for the toggle element.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draw the toggle element for the component.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("div")
        element.setAttribute("part", "native");
        element.classList.add("native-toggle");

        let input = document.createElement("input");
        input.setAttribute("part", "input")
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", this.name);
        input.setAttribute("id", "input");
        input.checked = this.hasAttribute("checked");
        input.disabled = this.hasAttribute("disabled");

        let label = document.createElement("label");
        label.setAttribute("for", "input");

        let labelWrapper = document.createElement("div");
        labelWrapper.setAttribute("part", "toggle");
        labelWrapper.classList.add("label-wrapper");

        let text = document.createElement("div");
        text.classList.add("text");
        text.innerHTML = "<slot></slot>";

        if(this.color)
            this.classList.add("wje-color-" + this.color, "wje-color");

        element.appendChild(input);
        element.appendChild(label);

        if(this.placement === "end") {
            element.classList.add("end");
            label.appendChild(text);
            label.appendChild(labelWrapper);
        } else {
            label.appendChild(labelWrapper);
            label.appendChild(text);
        }

        fragment.appendChild(element);

        this.input = input;

        return fragment;
    }

    /**
     * After draw method for the toggle element to add event listeners for the input element after the element is drawn.
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
}