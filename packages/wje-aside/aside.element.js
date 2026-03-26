import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This class represents an Aside element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/aside
 * @status stable
 * @augments WJElement
 * @attribute {string} width - Sets the width of the aside column, typically through a CSS length or design token.
 * @attribute {string} top - Sets the top offset used together with the `fixed` layout mode.
 * @attribute {boolean} fixed - Pins the aside in a fixed desktop position instead of keeping it in normal flow.
 * @attribute {string} variant - Selects an alternate layout variant such as the mobile `top-start` drawer style.
 * @slot default - Slot for the aside content.
 * @cssproperty [--wje-aside-width] - Controls the width of the aside column.
 * @cssproperty [--wje-aside-top] - Controls the top offset of a fixed aside.
 * @cssproperty [--wje-aside-border-color=var(--wje-border-color)] - Controls the border color of the aside.
 * @cssproperty [--wje-aside-border-width] - Controls the border width of the aside.
 * @cssproperty [--wje-aside-border-style] - Controls the border style of the aside.
 * @tag wje-aside
 */
export default class Aside extends WJElement {
    /**
     * Constructor for the Aside class.
     */
    constructor() {
        super();
    }

    /**
     * The class name for the Aside element.
     * @type {string}
     */
    className = 'Aside';

    /**
     * Getter for the CSS stylesheet.
     * @returns {object} The styles for the Aside element.
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for the observed attributes.
     * @returns {Array} An empty array as there are no observed attributes.
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Method to setup attributes for the Aside element.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Method to draw the Aside element.
     * @returns {object} The document fragment containing the drawn element.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        if (this.width) this.style.setProperty('--wje-aside-width', this.width);

        if (this.top && this.hasAttribute('fixed')) this.style.setProperty('--wje-aside-top', this.top);

        let element = document.createElement('slot');

        fragment.appendChild(element);

        return fragment;
    }
}
