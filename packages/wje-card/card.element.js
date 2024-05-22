import { default as WJElement, WjElementUtils } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary This class represents an Card element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/card
 * @status stable
 *
 * @extends WJElement
 *
 * @slot - The card main content.
 *
 * @cssproperty [--wje-card-margin-top=0] - Margin top of the component;
 * @cssproperty [--wje-card-margin-bottom=1rem] - Margin bottom of the component;
 * @cssproperty [--wje-card-margin-inline=0] - Margin inline of the component;
 * @cssproperty [--wje-card-border-color=transparent - Border color of the component;
 * @cssproperty [--wje-card-background=#fff] - Background of the component;
 */
export default class Card extends WJElement {
    /**
     * Card constructor
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Class name
     * @type {string}
     */
    className = "Card";

    /**
     * Get CSS stylesheet
     * @static
     * @returns {Object} styles - The CSS styles
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Setup attributes
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draw method
     * @param {Object} context - The context
     * @param {Object} store - The store
     * @param {Object} params - The parameters
     * @returns {Object} fragment - The document fragment
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.setAttribute('part', 'native');
        native.classList.add('native-card');

        let slot = document.createElement("slot");

        if(params.color)
            native.classList.add('wje-color-' + params.color);

        native.appendChild(slot);

        fragment.appendChild(native);

        return fragment;
    }
}