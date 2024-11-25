import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `Main` is a custom web component that represents a main section.
 * It extends from `WJElement`.
 * @summary This element represents a main section.
 * @documentation https://elements.webjet.sk/components/main
 * @status stable
 * @augments {WJElement}
 * @slot - The default slot for the main section.
 * @tag wje-main
 */

export default class Main extends WJElement {
    /**
     * Creates an instance of Main.
     * @class
     */
    constructor() {
        super();
    }

    className = 'Main';

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
        return [];
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Draws the component for the main section.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement('slot');
        fragment.appendChild(element);

        return fragment;
    }
}
