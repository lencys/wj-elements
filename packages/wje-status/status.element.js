import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This class represents Status element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/status
 * @status stable
 * @augments WJElement
 * @slot - The status main content.
 * @slot start - The status start content.
 * @slot end - The status end content.
 * @csspart native - The native part of the status.
 * @csspart bullet - The bullet part of the status.
 * @tag wje-status
 */
export default class Status extends WJElement {
    /**
     * Creates an instance of Status.
     */
    constructor() {
        super();
    }

    /**
     * The class name for the component.
     * @type {string}
     */
    className = 'Status';

    /**
     * Returns the CSS stylesheet for the component.
     * @static
     * @returns {CSSStyleSheet} The CSS stylesheet
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Draws the component for the status.
     * @returns {object} fragment - The document fragment
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.setAttribute('part', 'native');
        native.classList.add('native-status');

        let bullet = document.createElement('div');
        bullet.setAttribute('part', 'bullet');
        bullet.classList.add('bullet');

        let slot = document.createElement('slot');

        let start = document.createElement('slot');
        start.setAttribute('name', 'start');

        let end = document.createElement('slot');
        end.setAttribute('name', 'end');

        bullet.appendChild(slot);

        native.appendChild(start);
        native.appendChild(bullet);
        native.appendChild(end);

        fragment.appendChild(native);

        return fragment;
    }
}
