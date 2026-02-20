import { default as WJElement, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary ButtonGroup class
 * @class
 * @augments WJElement
 * @csspart native - The component's native wrapper.
 * @slot - The button group main content.
 * @csspart native - The component's native wrapper.
 */

export default class ButtonGroup extends WJElement {
    /**
     * ButtonGroup constructor method.
     * @class
     */
    constructor() {
        super();
    }

    /**
     * Sets the "active" attribute to indicate the active state.
     * @param {boolean|string|number} value The value to set for the "active" attribute, indicating the active state.
     */
    set active(value) {
        this.setAttribute('active', value);
    }

    /**
     * Retrieves the value of the 'active' attribute.
     * If the attribute is not set, it returns false.
     * @returns {string|boolean} The value of the 'active' attribute or false if it is not set.
     */
    get active() {
        return +this.getAttribute('active') || false;
    }

    /**
     * Sets the color attribute of the element.
     * @param {string} value The value to set for the color attribute.
     */
    set color(value) {
        this.setAttribute('color', value);
    }

    /**
     * Retrieves the current value of the 'color' attribute.
     * If the 'color' attribute is not set, it defaults to 'primary'.
     * @returns {string} The value of the 'color' attribute or the default value 'primary'.
     */
    get color() {
        return this.getAttribute('color') || 'primary';
    }

    /**
     * Sets the round attribute for the element.
     * @param {string} value The value to set for the round attribute.
     */
    set round(value) {
        this.setAttribute('round', value);
    }

    /**
     * Returns whether the element has the 'round' attribute.
     * @returns {boolean} True if the 'round' attribute is present, otherwise false.
     */
    get round() {
        return this.hasAttribute('round');
    }

    /**
     * Sets the 'fill' attribute of the element.
     * @param {string} value The value to assign to the 'fill' attribute.
     */
    set fill(value) {
        this.setAttribute('fill', value);
    }

    /**
     * Retrieves the 'fill' attribute of the element. If the 'fill' attribute is not set,
     * it returns the default value 'link'.
     * @returns {string} The value of the 'fill' attribute, or 'link' if the attribute is not present.
     */
    get fill() {
        return this.getAttribute('fill') || 'link';
    }

    /**
     * Class name for the ButtonGroup element
     * @type {string}
     */
    className = 'ButtonGroup';

    /**
     * Get CSS stylesheet for the ButtonGroup element.
     * @static
     * @returns {object} styles - The CSS styles
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Get observed attributes for the ButtonGroup element.
     * @static
     * @returns {Array<string>} observedAttributes - The observed attributes array
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Setup attributes for the ButtonGroup element.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
        this.syncAria();
    }

    /**
     * Draw method for the ButtonGroup element.
     * @returns {object} fragment - The document fragment
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement('div');
        element.classList.add('native-button-group');
        element.setAttribute('part', 'native');

        let content = document.createElement('div');
        content.classList.add('wje-button-group-content');

        let border = document.createElement('div');
        border.classList.add('wje-button-group-border');

        let slot = document.createElement('slot');

        content.append(slot);

        element.append(border);
        element.append(content);

        fragment.append(element);

        this.slotElement = slot;

        return fragment;
    }

    /**
     * After draw method for the ButtonGroup element.
     */
    afterDraw() {
        this.syncAria();
        const slottedElements = [...this.slotElement.assignedElements({ flatten: true })];

        slottedElements.forEach((el) => {
            let index = slottedElements.indexOf(el);
            let button = this.findButton(el);
            if (button) {
                button.setAttribute('fill', this.fill);
                if(this.round) {
                    button.round = true;
                }

                event.addListener(button, 'wje-button:click', null,(e) => {
                    this.toggle(e.target, slottedElements, index);
                });

                if(this.active && this.active === index + 1) {
                    this.updateButtonState(button, 'fill')
                }
            }
        });
    }

    /**
     * Sync ARIA attributes on host.
     */
    syncAria() {
        if (!this.hasAttribute('role')) {
            this.setAriaState({ role: 'group' });
        }
    }

    /**
     * Find button method to find the button element.
     * @param {object} el The element
     * @returns {object} button - The button element
     */
    findButton(el) {
        const selector = 'wje-button';

        return el.closest(selector) ?? el.querySelector(selector);
    }

    /**
     * Toggles the state of a group of buttons based on the active button.
     * @param {object} activeButton The button that is currently active.
     * @param {Array<object>} buttons An array of button objects to be toggled.
     * @returns {void} This method does not return a value.
     */
    toggle(activeButton, buttons, index) {
        this.active = index + 1;
        buttons.forEach(button => {
            const mode = button === activeButton ? 'fill' : 'color';
            this.updateButtonState(button, mode);
        });
    }

    /**
     * Updates the state of a button by removing one mode attribute and setting another mode attribute.
     * @param {HTMLElement} button The button element whose state is to be updated.
     * @param {string} modeToRemove The mode attribute to be removed from the button. Expected values are 'color' or 'fill'.
     * @returns {void}
     */
    updateButtonState(button, modeToRemove) {
        button.removeAttribute(modeToRemove);

        const modeToSet = modeToRemove === 'color' ? 'fill' : 'color';
        button.setAttribute(modeToSet, this[modeToSet]);
    }
}
