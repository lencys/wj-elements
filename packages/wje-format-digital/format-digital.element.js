import { Localizer } from '../utils/localize.js';
import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This element formats and displays digital values such as file sizes or data transfer rates.
 * `FormatDigital` is a custom web component that represents a formatted digital value with units like
 * bytes or bits. It extends from `WJElement` and utilizes the `Localizer` class for locale-aware formatting.
 * @documentation https://elements.webjet.sk/components/format-digital
 * @status stable
 * @augments {WJElement}
 * @attribute {number} value - The numeric value to format (e.g., 1024 for 1 KB).
 * @attribute {string} unit - The unit of the value (`byte` or `bit`). Defaults to `byte`.
 * @attribute {string} unitDisplay - The display style of the unit (`short`, `long`, or `narrow`). Defaults to `short`.
 * @csspart native - The native part of the component.
 * @csspart formatted - The part representing the formatted value.
 * @csspart start - Slot for content before the formatted value.
 * @csspart end - Slot for content after the formatted value.
 * @cssproperty [--wje-format-digital-font-size=1rem] - The font size of the formatted digital value.
 * @cssproperty [--wje-format-digital-color=var(--wje-text-color)] - The color of the formatted text.
 * @cssproperty [--wje-format-digital-padding=.5rem] - The padding around the component.
 * @cssproperty [--wje-format-digital-border-radius=var(--wje-border-radius-small)] - The border radius of the component.
 * @tag wje-format-digital
 */

export default class FormatDigital extends WJElement {
    /**
     * Creates an instance of FormatDigital.
     * Initializes the `Localizer` for locale-specific formatting.
     */
    constructor() {
        super();
        this.localizer = new Localizer(this);
    }

    /**
     * Sets the value of the digital format.
     * This value determines the size in bytes or bits to be displayed.
     * @param {number} value The value to set.
     */
    set value(value) {
        this.setAttribute('value', value);
    }

    /**
     * Returns the value of the digital format.
     * @returns {number} The current value of the component.
     */
    get value() {
        return +this.getAttribute('value');
    }

    /**
     * Sets the unit of the digital format.
     * Valid values are `bit` or `byte`.
     * @param {string} value The unit to set.
     */
    set unit(value) {
        this.removeAttribute('unit');
        if (value) {
            this.setAttribute('unit', value);
        }
    }

    /**
     * Returns the unit of the digital format.
     * Defaults to `byte` if no unit is set.
     * @returns {string} The current unit (`bit` or `byte`).
     */
    get unit() {
        return this.hasAttribute('unit') ? this.getAttribute('unit') : 'byte';
    }

    /**
     * Sets the unit display style for the digital format.
     * Valid values are `short`, `long`, or `narrow`.
     * @param {string} value The unit display style to set.
     */
    set unitDisplay(value) {
        this.removeAttribute('unit-display');
        if (value) {
            this.setAttribute('unit-display', value);
        }
    }

    /**
     * Returns the unit display style for the digital format.
     * Defaults to `short` if not set.
     * @returns {string} - The current unit display style.
     */
    get unitDisplay() {
        return this.hasAttribute('unit-display') ? this.getAttribute('unit-display') : 'short';
    }

    /**
     * The class name identifier for this component.
     * @type {string}
     */
    className = 'FormatDigital';

    /**
     * Returns the CSS styles for the component.
     * Encapsulated using shadow DOM.
     * @static
     * @returns {CSSStyleSheet} - The CSS styles for the component.
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Returns the list of attributes to observe for changes.
     * Observes `value` and `unit-display` for re-rendering.
     * @static
     * @returns {Array<string>} - The attributes to observe.
     */
    static get observedAttributes() {
        return ['value', 'unit-display'];
    }

    /**
     * Sets up the attributes for the component.
     * Initializes the shadow DOM.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Prepares the component before rendering.
     * Computes the formatted value based on the input value and unit.
     */
    beforeDraw() {
        if (this.value < 0) return;
        const bitPrefixes = ['', 'kilo', 'mega', 'giga', 'tera'];
        const bytePrefixes = ['', 'kilo', 'mega', 'giga', 'tera', 'peta'];
        const prefix = this.unit === 'bit' ? bitPrefixes : bytePrefixes;
        const index = Math.max(0, Math.min(Math.floor(Math.log10(this.value) / 3), prefix.length - 1)) || 0;
        const unit = prefix[index] + this.unit;
        const value = parseFloat((this.value / Math.pow(1000, index)).toPrecision(3));

        this.formattedValue = this.localizer.formatNumber(value, {
            style: 'unit',
            unit: unit,
            unitDisplay: this.unitDisplay || 'short',
        });
    }

    /**
     * Renders the component and returns a document fragment.
     * The rendered structure includes a formatted value wrapped in a container
     * with slots for additional customization.
     * @returns {DocumentFragment} - The DOM structure for the component.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement('div');
        element.setAttribute('part', 'native');
        element.classList.add('native-format-digital');

        let formatted = document.createElement('span');
        formatted.setAttribute('part', 'formatted');
        formatted.innerText = this.formattedValue;

        let start = document.createElement('slot');
        start.setAttribute('name', 'start');

        let end = document.createElement('slot');
        end.setAttribute('name', 'end');

        element.appendChild(start);
        element.appendChild(formatted);
        element.appendChild(end);

        fragment.appendChild(element);

        return fragment;
    }
}
