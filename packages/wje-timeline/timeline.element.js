import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * Timeline component.
 * @summary This element represents a timeline.
 * @documentation https://elements.webjet.sk/components/timeline
 * @status stable
 *
 * @extends {WJElement}
 *
 * @part native - The native part of the rating component.
 *
 * @slot - Slot for the timeline items.
 *
 * @tag wje-timeline
 */
export default class Timeline extends WJElement {
    constructor() {
        super();
    }

    /**
     * Returns the class name of the tab.
     *
     * @returns {string} The class name of the tab.
     */
    className = "Timeline";

    /**
     * Returns the CSS styles for the component.
     *
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draws the component.
     *
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        const native = document.createElement('div');
        native.setAttribute('part', 'native');
        native.classList.add('native-timeline');

        const verticalLine = document.createElement('div');
        verticalLine.setAttribute('part', 'vertical-line');
        verticalLine.classList.add('vertical-line');

        const slot = document.createElement('slot');

        native.appendChild(verticalLine);
        native.appendChild(slot);

        fragment.appendChild(native);

        return fragment;
    }
}
