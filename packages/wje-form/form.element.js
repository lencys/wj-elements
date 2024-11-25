import { default as WJElement, WjElementUtils } from '../wje-element/element.js';

import styles from './scss/styles.scss?inline';

/**
 * @summary The Form class is a custom
 * web component that extends WJElement. It is a simple form that can hold other elements or components.
 * It provides a slot for adding child elements or components.
 * @documentation https://elements.webjet.sk/components/form
 * @status stable
 * @augments WJElement
 * @slot - The slot for adding child elements or components.
 * @tag wje-form
 */
export default class Form extends WJElement {
    /**
     * Constructor for the Form class.
     */
    constructor() {
        super();
    }

    /**
     * The class name for the Form class.
     * @type {string}
     */
    className = 'Form';

    /**
     * Getter for the CSS stylesheet.
     * @returns {*}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for the observed attributes.
     * @returns {*[]}
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Sets up the attributes for the Form.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Draws the Form.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement('slot');

        fragment.appendChild(element);

        return fragment;
    }
}
