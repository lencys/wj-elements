import { default as WJElement, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `MenuButton` is a custom web component that represents a menu button.
 * @summary This element represents a menu button.
 * @documentation https://elements.webjet.sk/components/menu-button
 * @status stable
 * @augments {WJElement}
 * @slot - The default slot for the menu button.
 * // @fires click - Event fired when the menu button is clicked.
 * @tag wje-menu-button
 */

export default class MenuButton extends WJElement {
    /**
     * Creates an instance of MenuButton.
     * @class
     */
    constructor() {
        super();
    }

    className = 'MenuButton';

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
        this.setAriaState({ role: 'button' });
    }

    /**
     * Draws the component for the menu button.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let slot = document.createElement('slot');

        fragment.appendChild(slot);

        return fragment;
    }

    /**
     * Refreshes the component after drawing. Adds a click event listener that toggles the "open" class on the content element.
     */
    afterDraw() {
        event.addListener(this, 'click', null, (e) => {
            document.querySelector(`#${this.contentId}`).classList.toggle('open');
        });
    }
}
