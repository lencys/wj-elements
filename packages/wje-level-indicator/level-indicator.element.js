import { default as WJElement, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary LevelIndicator is a custom web component that extends WJElement.
 * @documentation https://elements.webjet.sk/components/LevelIndicator
 * @status stable
 * @augments WJElement
 * @csspart - Styles the element.
 * @tag wje-level-indicator
 * @example
 * <wje-level-indicator></wje-level-indicator>
 */
export default class LevelIndicator extends WJElement {
    /**
     * Creates an instance of LevelIndicator.
     * @class
     */
    constructor() {
        super();
    }

    /**
     * Sets the level attribute for an instance.
     * @param {string} value The value to set for the 'level' attribute.
     */
    set level(value) {
        this.setAttribute('level', value);
    }

    /**
     * Retrieves the level attribute of an element, with validation to ensure
     * it is within the range of 0 to 3. If the level attribute is not present,
     * the default value is 1. The result is parsed as an integer and constrained
     * to the valid range.
     * @returns {number} The normalized level value, which is an integer between 0 and 3.
     */
    get level() {
        return Math.min(this.bars, Math.max(0, parseInt(this.getAttribute('level') || '1', 10)));
    }

    /**
     * Sets the value of the "bars" attribute.
     * @param {string} value The value to set for the "bars" attribute.
     */
    set bars(value) {
        this.setAttribute('bars', value);
    }

    /**
     * Retrieves the value of the "bars" attribute, parses it as an integer,
     * and ensures it is at least 1. If the attribute is not set, defaults to 3.
     * @returns {number} The parsed integer value of the "bars" attribute or the default value of 3, constrained to a minimum of 1.
     */
    get bars() {
        return Math.max(1, parseInt(this.getAttribute('bars') || '3', 10));
    }

    /**
     * Sets the 'colorize' attribute on the element. If the provided value is truthy,
     * the attribute will be set. If the value is falsy, the attribute will be removed.
     * @param {boolean} value A boolean determining whether to set or remove the 'colorize' attribute.
     */
    set colorize(value) {
        this.removeAttribute('colorize');

        if (value) this.setAttribute('colorize', '');
    }

    /**
     * Determines whether the element has the "colorize" attribute set.
     * @returns {boolean} Returns true if the "colorize" attribute is present, otherwise false.
     */
    get colorize() {
        return this.hasAttribute('colorize');
    }

    /**
     * Sets the 'reverse' attribute on the element. If the provided value is truthy, the attribute is added;
     * otherwise, the attribute is removed.
     * @param {boolean} value The value determining whether to set or remove the 'reverse' attribute.
     */
    set reverse(value) {
        this.removeAttribute('reverse');

        if (value) this.setAttribute('reverse', '');
    }

    /**
     * Getter method to check if the "reverse" attribute is present on the element.
     * @returns {boolean} Returns true if the "reverse" attribute is set; otherwise, returns false.
     */
    get reverse() {
        return this.hasAttribute('reverse');
    }

    className = 'LevelIndicator';

    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Creates a document fragment, appends a new slot element to it, and returns the fragment.
     * @returns {DocumentFragment} A document fragment containing a slot element.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.classList.add('native-level-indicator');
        if (this.reverse) native.classList.add('reverse');

        let defaultBar = document.createElement('div');
        defaultBar.classList.add('bar');

        this.barsArray = [];

        for (let i = 0; i < this.bars; i++) {
            const width = ((i + 1) / this.bars) * 100;

            let bar = defaultBar.cloneNode(true);
            bar.style.setProperty('width', width + '%');

            native.appendChild(bar);
            this.barsArray.push(bar);
        }

        fragment.appendChild(native);

        this.native = native;

        return fragment;
    }

    /**
     * Executes any additional operations or updates required after the drawing process is completed.
     * @returns {void} This method does not return any value.
     */
    afterDraw() {
        this.updateBars(this.level, this.barsArray);

        if (this.colorize)
            this.native.style.setProperty(
                '--wje-level-indicator-color-active',
                `var(${this.getColor(this.level, this.barsArray.length)})`
            );
    }

    /**
     * Updates the class of each bar element based on the specified level.
     * @param {number} level The threshold level determining how many bars should be active.
     * @param {Array} bars An array of bar elements to be updated.
     * @returns {void} This method does not return a value.
     */
    updateBars(level, bars) {
        bars.forEach((bar, index) => {
            bar.classList.toggle('active', index < level);
        });
    }

    /**
     * Determines the color indicator based on the given level and bars.
     * @param {number} level The current value level used to calculate the ratio.
     * @param {number} bars The maximum value that level can reach.
     * @returns {string | undefined} A string representing the color code based on the ratio, or undefined if colorize is disabled.
     */

    getColor(level, bars) {
        const thresholds = [
            '--wje-level-indicator-color-low',
            '--wje-level-indicator-color-medium',
            '--wje-level-indicator-color-high', // 67% - 100% (tretia tretina)
        ];

        const index = Math.min(2, Math.floor((level - 1) / (bars / 3)));
        return thresholds[index];
    }
}
