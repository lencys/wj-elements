import { default as WJElement, WjElementUtils } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary This class represents an Status element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/status
 * @status stable
 *
 * @extends WJElement
 *
 * @slot - The status main content.
 */
export default class Status extends WJElement {
    /**
     * Badge constructor
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Class name
     * @type {string}
     */
    className = "Status";

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
        native.classList.add('native-status');

        let bullet = document.createElement('div');
        bullet.setAttribute('part', 'bullet');
        bullet.classList.add('bullet');

        let slot = document.createElement("slot");

        let start = document.createElement("slot");
        start.setAttribute("name", "start");

        let end = document.createElement("slot");
        end.setAttribute("name", "end");

        bullet.appendChild(slot);

        native.appendChild(start);
        native.appendChild(bullet);
        native.appendChild(end);

        fragment.appendChild(native);

        return fragment;
    }
}