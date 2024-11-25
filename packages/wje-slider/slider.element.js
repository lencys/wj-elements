import { default as WJElement, event } from '../wje-element/element.js';
import styles from './scss/styles.scss?inline';

/**
 * `Slider` is a custom web component that represents a slider input.
 * @summary This element represents a slider input.
 * @documentation https://elements.webjet.sk/components/slider
 * @status stable
 * @augments WJElement
 * @slot label - Slot for the label of the slider.
 * @slot start - Slot for the start value of the slider.
 * @slot end - Slot for the end value of the slider.
 * @csspart native - The native slider wrapper.
 * @csspart slider - The slider input.
 * @cssproperty [--wje-slider-thumb-color=#000000] - Defines the color of the slider thumb. Accepts any valid CSS color value, such as hex, RGB, or named colors.
 * @cssproperty [--wje-slider-thumb-shadow=none] - Specifies the box shadow of the slider thumb in its default state. Accepts any valid CSS box-shadow value.
 * @cssproperty [--wje-slider-thumb-shadow-active=none] - Sets the box shadow of the slider thumb when it is active (e.g., during dragging). Accepts any valid CSS box-shadow value.
 * @cssproperty [--wje-slider-track-color=#000000] - Specifies the color of the slider track. Accepts any valid CSS color value.
 * @cssproperty [--wje-slider-track-height=.25rem] - Defines the height of the slider track. Accepts any valid CSS length unit, such as `px`, `rem`, or `em`.
 * // @fires wje-slider:init - Dispatched when the slider is initialized.
 * // @fires wje-slider:move - Dispatched when the slider value is changed.
 * // @fires wje-slider:change - Dispatched when the slider value is changed and the change is committed.
 * @tag wje-slider
 */

export default class Slider extends WJElement {
    /**
     * Creates an instance of Slider.
     * @class
     */
    constructor() {
        super();
    }

    /**
     * Sets the value of the slider.
     * @param {number} value The value to set.
     */
    set value(value) {
        this.setAttribute('value', value);

        if (this.input) {
            this.input.value = value;
            this.setHandlePosition();
        }
    }

    /**
     * Returns the value of the slider.
     * @returns {number} The value of the slider input.
     */
    get value() {
        return this.getAttribute('value') || 0;
    }

    /**
     * Sets the minimum value of the slider.
     * @param {number} value The minimum value to set.
     */
    set min(value) {
        this.setAttribute('min', value);
    }

    /**
     * Returns the minimum value of the slider.
     * @returns {number} The minimum value of the slider.
     */
    get min() {
        return this.getAttribute('min') || 0;
    }

    /**
     * Sets the maximum value of the slider.
     * @param {number} value The maximum value to set.
     */
    set max(value) {
        this.setAttribute('max', value);
    }

    /**
     * Returns the maximum value of the slider.
     * @returns {number} The maximum value of the slider.
     */
    get max() {
        return this.getAttribute('max') || 100;
    }

    /**
     * Sets the step value of the slider.
     * @param {number} value The step value to set.
     */
    set step(value) {
        this.setAttribute('step', value);
    }

    /**
     * Returns the step value of the slider.
     * @returns {number} The step value of the slider.
     */
    get step() {
        return this.getAttribute('step') || 1;
    }

    className = 'Slider';

    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes() {
        return ['max'];
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Draws the component for the slider.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement('div');
        element.className = 'native-slider';
        element.setAttribute('part', 'native');

        let slider = document.createElement('div');
        slider.className = 'slider';

        let label = document.createElement('slot');
        label.name = 'label';

        let start = document.createElement('slot');
        start.name = 'start';

        let end = document.createElement('slot');
        end.name = 'end';

        let output = document.createElement('output');
        output.setAttribute('for', 'slider');
        output.id = 'output';
        output.setAttribute('hidden', '');

        let input = document.createElement('input');
        input.type = 'range';
        input.min = this.min;
        input.max = this.max;
        input.step = this.step;
        input.value = this.value;
        input.id = 'slider';
        input.name = 'slider';
        input.part = 'slider';
        input.setAttribute('autocomplete', 'off');
        input.setAttribute('color', this.color || '');

        input.addEventListener('input', null, (e) => {
            this.setHandlePosition(e.target);
        });

        slider.appendChild(input);
        if (this.hasAttribute('bubble')) {
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

        if (this.hasAttribute('bubble')) {
            this.output.innerHTML = this.input.value;
            this.output.removeAttribute('hidden');

            setTimeout(this.setBubble, 50);
        }

        event.dispatchCustomEvent(this.input, 'wje-slider:init', {
            value: this.input.value,
            output: this.output,
        });

        event.addListener(this.input, 'input', null, (e) => {
            this.value = e.target.value;

            event.dispatchCustomEvent(this.input, 'wje-slider:move', {
                value: e.target.value,
                output: this.output,
            });

            if (this.hasAttribute('bubble')) {
                this.setBubble();
            }
        });

        event.addListener(this.input, 'change', null, (e) => {
            event.dispatchCustomEvent(this.input, 'wje-slider:change', {
                value: e.target.value,
                output: this.output,
            });
        });
    }

    /**
     * Sets the handle position of the slider.
     */
    setHandlePosition = () => {
        this.input.style.backgroundSize =
            this.getPercentage(this.input.min, this.input.max, this.input.value) + '% 100%';
    };

    /**
     * Sets the bubble of the slider.
     */
    setBubble = () => {
        let newValue = this.getPercentage(this.input.min, this.input.max, this.input.value);
        this.output.style.left = `calc(${newValue}% + (${8 - newValue * 0.15}px) - ${this.output.offsetWidth / 2}px)`;
        this.output.innerHTML = this.input.value;
    };

    /**
     * Calculates the percentage of a value within a given range.
     * @param {number} min The minimum value of the range.
     * @param {number} max The maximum value of the range.
     * @param {number} [value] The current value within the range. Defaults to 0 if not provided.
     * @returns {number} The calculated percentage as a number between 0 and 100. Returns 0 if the range is invalid.
     */
    getPercentage(min, max, value = 0) {
        return Number(((value - min) * 100) / (max - min)) || 0;
    }
}
