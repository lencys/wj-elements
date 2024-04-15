import { default as WJElement, event } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `Toggle` is a custom web component that represents a toggle input.
 * @summary This element represents a toggle input.
 * @documentation https://elements.webjet.sk/components/toggle
 * @status stable
 *
 * @extends {WJElement}
 *
 * @csspart native - The native toggle wrapper.
 * @csspart input - The toggle input.
 * @csspart toggle - The toggle part.
 *
 * @slot - The default slot for the toggle.
 *
 * @cssproperty [--wje-toggle-color-base=var(--wje-color-contrast-3)] - The base color of the toggle.
 * @cssproperty [--wje-toggle-width=30px] - The width of the toggle.
 * @cssproperty [--wje-toggle-height=18px] - The height of the toggle.
 * @cssproperty [--wje-toggle-border-radius=50px] - The border radius of the toggle.
 * @cssproperty [--wje-toggle-handle-width=14px] - The width of the toggle handle.
 * @cssproperty [--wje-toggle-handle-height=14px] - The height of the toggle handle.
 * @cssproperty [--wje-toggle-handle-border-radius=9px] - The border radius of the toggle handle.
 * @cssproperty [--wje-toggle-handle-color=#fff] - The color of the toggle handle.
 * @cssproperty [--wje-toggle-handle-shadow=1px 0 1px 0.5px rgba(0,0,0,0.12), 2px 4px 6px rgba(0,0,0,0.2)] - The shadow of the toggle handle.
 * @cssproperty [--wje-toggle-handle-shadow-checked=1px 1px 0 rgba(0,0,0,0.08), -3px 3px 6px rgba(0,0,0,0.3)] - The shadow of the toggle handle when checked.
 * @cssproperty [--wje-toggle-duration=250ms] - The duration of the toggle animation.
 * @cssproperty [--wje-toggle-curve=cubic-bezier(.4,0,.2,1)] - The curve of the toggle animation.
 *
 * @tag wje-toggle
 */
export default class Toggle extends WJElement {
    /**
     * @constructor
     * @summary Toggle constructor
     */
    constructor() {
        super();

        this._checked = false;
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
        this._checked = value;

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
     * @summary Class name
     * @type {string}
     */
    className = "Toggle";

    /**
     * @summary Get CSS stylesheet
     * @static
     * @returns {Object} styles
     */
    static get cssStyleSheet() {
        return styles;
    }

    // static get observedAttributes() {
    //     return ["checked"];
    // }

    /**
     * @summary Setup attributes
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * @summary Draw method
     * @param {Object} context - The context
     * @param {Object} store - The store
     * @param {Object} params - The parameters
     * @returns {Object} Document fragment
     */
    draw(context, store, params) {
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
        // input.checked = this.checked;

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

        if(this.disabled)
            input.disabled = this.disabled;

        element.appendChild(input);
        element.appendChild(label);
        label.appendChild(labelWrapper);
        label.appendChild(text);

        fragment.appendChild(element);

        this.input = input;

        return fragment;
    }

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