import { default as WJElement } from "../wje-element/element.js";
import styles from "./scss/styles.scss?inline";

/**
 * `Slider` is a custom web component that represents a slider input.
 * @summary This element represents a slider input.
 * @documentation https://elements.webjet.sk/components/slider
 * @status stable
 *
 * @extends {WJElement}
 *
 * @slot label - Slot for the label of the slider.
 * @slot start - Slot for the start value of the slider.
 * @slot end - Slot for the end value of the slider.
 *
 * @csspart native - The native slider wrapper.
 * @csspart slider - The slider input.
 *
 * @cssproperty [--wje-slider-thumb-color=#000000] - The color of the slider thumb.
 * @cssproperty [--wje-slider-thumb-shadow=none] - The shadow of the slider thumb.
 * @cssproperty [--wje-slider-thumb-shadow-active=none] - The shadow of the active slider thumb.
 * @cssproperty [--wje-slider-track-color=#000000] - The color of the slider track.
 * @cssproperty [--wje-slider-track-height=.25rem] - The height of the slider track.
 *
 * @event wje:slider-init - Dispatched when the slider is initialized.
 * @event wje:slider-move - Dispatched when the slider value is changed.
 * @event wje:slider-change - Dispatched when the slider value is changed and the change is committed.
 *
 * @tag wje-slider
 */
export default class Slider extends WJElement {
    /**
     * Creates an instance of Slider.
     *
     * @constructor
     */
    constructor() {
        super()
    }

    /**
     * Sets the value of the slider.
     *
     * @param {number} value - The value to set.
     */
    set value(value) {
        this.setAttribute("value", value);

        if(this.input) {
            this.input.value = value;
            this.setHandlePosition();
        }
    }

    /**
     * Returns the value of the slider.
     *
     * @returns {number} The value of the slider.
     */
    get value() {
        return this.getAttribute("value") || 0;
    }

    /**
     * Sets the minimum value of the slider.
     *
     * @param {number} value - The minimum value to set.
     */
    set min(value) {
        this.setAttribute("min", value);
    }

    /**
     * Returns the minimum value of the slider.
     *
     * @returns {number} The minimum value of the slider.
     */
    get min() {
        return this.getAttribute("min") || 0;
    }

    /**
     * Sets the maximum value of the slider.
     *
     * @param {number} value - The maximum value to set.
     */
    set max(value) {
        this.setAttribute("max", value);
    }

    /**
     * Returns the maximum value of the slider.
     *
     * @returns {number} The maximum value of the slider.
     */
    get max() {
        return this.getAttribute("max") || 100;
    }

    /**
     * Sets the step value of the slider.
     *
     * @param {number} value - The step value to set.
     */
    set step(value) {
        this.setAttribute("step", value);
    }

    /**
     * Returns the step value of the slider.
     *
     * @returns {number} The step value of the slider.
     */
    get step() {
        return this.getAttribute("step") || 1;
    }

    className = "Slider";

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
    static get observedAttributes(){
        return ["max", "value"];
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
        element.className = "native-slider";
        element.setAttribute("part", "native")

        let slider = document.createElement("div");
        slider.className = "slider";

        let label = document.createElement("slot");
        label.name = "label";

        let start = document.createElement("slot");
        start.name = "start";

        let end = document.createElement("slot");
        end.name = "end";

        let output = document.createElement("output");
        output.setAttribute("for", "slider");
        output.id = "output";
        output.setAttribute("hidden", "");

        let input = document.createElement("input");
        input.type = "range";
        input.min = this.min;
        input.max = this.max;
        input.step = this.step;
        input.value = this.value;
        input.id = "slider";
        input.name = "slider";
        input.part = "slider";
        input.setAttribute("autocomplete", "off");
        input.setAttribute("color", this.color || "");
        input.addEventListener("input", (e) => {
            this.setHandlePosition(e.target);
        });


        slider.appendChild(input);
        if(this.hasAttribute("bubble")) {
          slider.appendChild(output);
        }
        element.appendChild(label);
        element.appendChild(start);
        element.appendChild(slider);
        element.appendChild(end);

        fragment.appendChild(element);

        this.input = input;
        this.output = output;

        return fragment;
    }

    /**
     * Sets up the event listeners after the component is drawn.
     */
    afterDraw() {
        this.setHandlePosition();

        if(this.hasAttribute("bubble")) {
            this.output.innerHTML = this.input.value;
            this.output.removeAttribute("hidden");

            setTimeout(this.setBubble, 50);
        }

        this.dispatchInit(this.input.value);

        this.input.addEventListener("input", (e) => {
            this.value = e.target.value;
            this.dispatchMove(this.value);
            if(this.hasAttribute("bubble")) {
                this.setBubble();
            }
        });

        this.input.addEventListener("change", (e) => {
            this.dispatchChange(e.target.value);
        });
    }

    /**
     * Dispatches the slider initialization event.
     *
     * @param {number} value - The value of the slider.
     */
    dispatchInit(value) {
        this.dispatchEvent(
            new CustomEvent("wje:slider-init", {
                bubbles: true,
                detail: {
                    value: value,
                    output: this.output
                },
            })
        );
    }

    /**
     * Dispatches the slider move event.
     *
     * @param {number} value - The value of the slider.
     */
    dispatchMove(value) {
        this.dispatchEvent(
            new CustomEvent("wje:slider-move", {
                bubbles: true,
                detail: {
                    value: value,
                    output: this.output
                },
            })
        );
    }

    /**
     * Dispatches the slider change event.
     *
     * @param {number} value - The value of the slider.
     */
    dispatchChange(value) {
        this.dispatchEvent(
            new CustomEvent("wje:slider-change", {
                bubbles: true,
                detail: {
                    value: value,
                    output: this.output
                },
            })
        );
    }

    /**
     * Sets the handle position of the slider.
     */
    setHandlePosition = () => {
        this.input.style.backgroundSize = this.getPercentage(this.input.value, this.input.min, this.input.max) + '% 100%';
    }

    /**
     * Sets the bubble of the slider.
     */
    setBubble = () => {
        let newValue = this.getPercentage(this.input.value, this.input.min, this.input.max);
        this.output.style.left = `calc(${newValue}% + (${8 - newValue * 0.15}px) - ${this.output.offsetWidth/2}px)`;
        this.output.innerHTML = this.input.value;
    }

    /**
     * Returns the percentage of the slider value.
     *
     * @param {number} value - The value of the slider.
     * @param {number} min - The minimum value of the slider.
     * @param {number} max - The maximum value of the slider.
     * @returns {number} The percentage of the slider value.
     */
    getPercentage(value = 0, min, max) {
        return Number((value - min) * 100 / (max - min)) || 0;
    }
}