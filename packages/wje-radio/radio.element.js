import { default as WJElement, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This class represents a Radio button element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/radio
 * @status stable
 * @augments WJElement
 * @slot - Default slot for the radio button label content.
 * @csspart native-radio - The native wrapper for the radio button.
 * @cssproperty [--wje-radio-margin-inline=0] - Specifies the horizontal (left and right) margin for the radio button. Accepts any valid CSS length unit (e.g., `px`, `rem`, `%`) to control spacing on both sides of the component.
 * @cssproperty [--wje-radio-margin-top=0] - Defines the top margin for the radio button. Accepts any valid CSS length value to adjust vertical spacing above the component.
 * @cssproperty [--wje-radio-margin-bottom=0] - Sets the bottom margin for the radio button. Accepts any valid CSS length value to adjust vertical spacing below the component.
 * // @fires wje-radio:change - Dispatched when the radio button's state changes.
 * // @fires wje-radio:input - Dispatched when the radio button is interacted with.
 */

export default class Radio extends WJElement {
    /**
     * Creates an instance of Radio.
     */
    constructor() {
        super();

    }

    set value(value) {
        this.setAttribute('value', value);
    }

    get value() {
        return this.getAttribute('value');
    }

    /**
     * Sets the name of the radio button.
     * @param value
     */
    set checked(value) {
        if (value) {
            this.setAttribute('checked', '');
        } else {
            this.removeAttribute('checked');
        }
    }

    /**
     * Gets the checked property of the radio button.
     * @returns {boolean}
     */
    get checked() {
        return this.hasAttribute('checked');
    }

    /**
     * Set checked attribute.
     * @param {boolean} value true if the toggle is checked, false otherwise
     */
    set disabled(value) {
        if (value) {
            this.setAttribute('disabled', '');
        } else {
            this.removeAttribute('disabled');
        }
    }

    /**
     * Get disabled attribute value.
     * @returns {boolean} true if the toggle is disabled, false otherwise
     */
    get disabled() {
        return this.hasAttribute('disabled');
    }

    /**
     * Sets the color of the radio button.
     * @type {string}
     */
    className = 'Radio';

    /**
     * Returns the CSS styles for the component.
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
        return ['checked'];
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Draws the radio button.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.classList.add('native-radio');

        if (this.color) native.classList.add(this.color);

        this.input = document.createElement('input');
        this.input.type = 'radio';
        this.input.id = this.value + '-radio';
        this.input.name = this.value + '-radio';
        this.input.checked = this.checked;
        this.input.disabled = this.disabled;

        let label = document.createElement('label');
        label.htmlFor = this.value + '-radio';
        label.innerHTML = '<slot></slot>';

        native.appendChild(this.input);
        native.appendChild(label);

        fragment.appendChild(native);

        return fragment;
    }

    /**
     * Sets up the event listeners for the component.
     */
    afterDraw() {
        if (!this.hasAttribute('disabled')) {
            event.addListener(this.input, 'input', 'wje-radio:change');
            // event.addListener(this, 'click', 'wje-radio:input');
        }
    }

    /**
     * Called when an attribute changes.
     * @param {object} e
     */
    inputEvent = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Radio input event", e.target.checked);
        this.checked = e.target.checked;
    };

    /**
     * Toggles the radio button.
     */
    beforeDisconnect() {
        event.removeElement(this);
    }
}
