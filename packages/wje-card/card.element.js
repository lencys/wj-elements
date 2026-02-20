import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This class represents Card element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/card
 * @status stable
 * @augments WJElement
 * @slot - The card main content.
 * @cssproperty [--wje-card-background=#fff] - Background of the component;
 * @cssproperty [--wje-card-color=#000] - Color of the component;
 * @cssproperty [--wje-card-border-color=transparent] - Border color of the component;
 * @cssproperty [--wje-card-border-style=solid] - Border style of the component;
 * @cssproperty [--wje-card-border-width=1px] - Border width of the component;
 * @cssproperty [--wje-card-border-radius=0.5rem] - Border radius of the component;
 * @cssproperty [--wje-card-shadow=var(--wje-shadow-x-large)] - Shadow of the component;
 */
export default class Card extends WJElement {
    /**
     * Card constructor method.
     * @class
     */
    constructor() {
        super();
    }

    /**
     * Class name for the Card element.
     * @type {string}
     */
    className = 'Card';

    /**
     * Get CSS stylesheet for the Card element.
     * @static
     * @returns {object} styles - The CSS styles
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Get observed attributes for the Card element.
     * @static
     * @returns {Array<string>} observedAttributes - The observed attributes array
     */
    static get observedAttributes() {
        return ['label', 'aria-label', 'aria-labelledby'];
    }

    /**
     * Setup attributes for the Card element.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
        this.syncAria();
    }

    /**
     * Handles attribute changes for ARIA sync.
     * @param {string} name
     * @param {string|null} oldValue
     * @param {string|null} newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (super.attributeChangedCallback) {
            super.attributeChangedCallback(name, oldValue, newValue);
        }

        if (oldValue !== newValue) {
            this.syncAria();
        }
    }

    /**
     * Sync ARIA attributes on host only when labeling is provided.
     */
    syncAria() {
        const ariaLabel = this.getAttribute('aria-label');
        const label = this.getAttribute('label');
        const labelledBy = this.getAttribute('aria-labelledby');

        if ((ariaLabel || label || labelledBy) && !this.hasAttribute('role')) {
            this.setAriaState({ role: 'region' });
        }

        if (!ariaLabel && label) {
            this.setAriaState({ label });
        }
    }

    /**
     * Draw method for the Card element.
     * @param {object} context The context object
     * @param {object} store The store object
     * @param {object} params The parameters
     * @returns {object} fragment - The document fragment
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.setAttribute('part', 'native');
        native.classList.add('native-card');

        let slot = document.createElement('slot');

        if (params.color) native.classList.add('wje-color-' + params.color);

        native.appendChild(slot);

        fragment.appendChild(native);

        return fragment;
    }
}
