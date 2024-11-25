import { default as WJElement } from '../wje-element/element.js';
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

        this.slotElement = document.createElement('slot');

        element.appendChild(this.slotElement);

        fragment.appendChild(element);

        return fragment;
    }

    /**
     * After draw method for the ButtonGroup element.
     */
    afterDraw() {
        const slottedElements = [...this.slotElement.assignedElements({ flatten: true })];

        slottedElements.forEach((el) => {
            let index = slottedElements.indexOf(el);
            let button = this.findButton(el);
            if (button) {
                button.classList.add('wje-button-group-button');
                button.classList.toggle('wje-button-group-first', index === 0);
                button.classList.toggle('wje-button-group-inner', index > 0 && index < slottedElements.length - 1);
                button.classList.toggle('wje-button-group-last', index === slottedElements.length - 1);
            }
        });
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
}
