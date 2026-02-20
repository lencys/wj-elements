import { default as WJElement, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * Represents a slider component that extends the WJElement class.
 * This slider supports features such as min, max, step values, bubble display, and event handling.
 * It offers both getter and setter methods for its attributes and dynamically handles rendering and updates.
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
        if (this.output && this.hasAttribute('bubble')) {
            this.output.innerHTML = value;
            setTimeout(this.setBubble, 0);
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
        return ['max', 'min', 'step', 'value', 'disabled', 'bubble'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;

        // Avoid full re-render for slider updates; update DOM in place.
        if (['max', 'min', 'step', 'value', 'disabled', 'bubble'].includes(name)) {
            if (this.input) {
                if (name === 'min') this.input.min = this.min;
                if (name === 'max') this.input.max = this.max;
                if (name === 'step') this.input.step = this.step;
                if (name === 'value') this.input.value = this.value;
                if (name === 'disabled') this.input.disabled = this.hasAttribute('disabled');
            }

            if (name === 'bubble' && this.output) {
                if (this.hasAttribute('bubble')) {
                    this.output.removeAttribute('hidden');
                    this.output.innerHTML = this.input?.value ?? this.value;
                    setTimeout(this.setBubble, 0);
                } else {
                    this.output.setAttribute('hidden', '');
                }
            }

            if (['min', 'max', 'value', 'disabled'].includes(name) && this.input) {
                this.setHandlePosition?.();
                this.syncAria();
            }

            return;
        }

        super.attributeChangedCallback?.(name, oldValue, newValue);
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
        this.syncAria();
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
        if (this.hasAttribute('disabled')) input.disabled = true;

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

        this.syncAria();
        return fragment;
    }

    /**
     * Handles the post-rendering logic for a custom slider component. This method performs the following tasks:
     * - Sets the position of the handle.
     * - Displays a bubble indicator with the current value, if the slider has a "bubble" attribute.
     * - Dispatches initialization, movement, and change custom events for the slider input element.
     * - Updates the bubble position and value dynamically on input changes.
     * @returns {void} This method does not return a value.
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

        this.syncAria();
    }

    /**
     * Sets the handle position of the slider.
     */
    setHandlePosition = () => {
        if (!this.input) return;
        this.input.style.backgroundSize =
            this.getPercentage(this.input.min, this.input.max, this.input.value) + '% 100%';
        this.syncAria();
    };

    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria() {
        this.setAriaState({
            role: 'slider',
            valuemin: this.min,
            valuemax: this.max,
            valuenow: this.value,
            disabled: this.hasAttribute('disabled'),
        });
    }

    /**
     * Updates the position and content of a bubble element based on the input value.
     *
     * This function calculates the position of the bubble using the percentage representation
     * of the input's current value relative to its minimum and maximum bounds. It then adjusts
     * the bubble's left position dynamically for aesthetic purposes and updates its displayed
     * content to reflect the current input value.
     *
     * The function relies on the following elements:
     * - `this.input`: Represents the input element with properties `min`, `max`, and `value`.
     * - `this.output`: Represents the bubble element to be positioned and updated.
     *
     * The left positioning of the bubble ensures precise alignment with the input value indicator.
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
