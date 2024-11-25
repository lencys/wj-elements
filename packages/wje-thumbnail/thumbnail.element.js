import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary Thumbnail class
 * @documentation https://elements.webjet.sk/components/thumbnail
 * @status stable
 * @augments WJElement
 * @slot thumbnail-slot - The slot for the thumbnail content.
 * @cssproperty [--wje-thumbnail-width=48px] - Defines the width of the thumbnail. Accepts any valid CSS length unit such as `px`, `rem`, or `%`.
 * @cssproperty [--wje-thumbnail-height=48px] - Specifies the height of the thumbnail. Accepts any valid CSS length unit.
 * @cssproperty [--wje-thumbnail-border-radius=var(--wje-border-radius-medium)] - Sets the border radius of the thumbnail, determining how rounded its corners appear. Accepts any valid CSS length unit or CSS variable.
 * @tag thumbnail-element
 */

export default class Thumbnail extends WJElement {
    /**
     * Creates an instance of Thumbnail.
     */
    constructor() {
        super();
    }

    /**
     * The class name for the component
     */
    className = 'Thumbnail';

    /**
     * Returns the CSS stylesheet for the component.
     * @static
     * @returns {CSSStyleSheet} The CSS stylesheet
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Returns the list of observed attributes.
     * @static
     * @returns {Array} An empty array
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Draws the component for the thumbnail.
     * @returns {object} Document fragment
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement('slot');

        fragment.appendChild(element);

        return fragment;
    }
}
