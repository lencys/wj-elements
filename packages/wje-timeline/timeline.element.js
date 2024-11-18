import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `Timeline` is a custom web component that represents a timeline.
 * @summary This element represents a timeline.
 * @documentation https://elements.webjet.sk/components/timeline
 * @status stable
 * @augments WJElement
 * @slot - Slot for the timeline items.
 * @csspart native - The native part of the rating component.
 * @csspart vertical-line - The vertical line part of the rating component.
 * @tag wje-timeline
 */
export default class Timeline extends WJElement {

    /**
     * Creates an instance of Timeline.
     */
    constructor() {
        super();
    }

    /**
     * The class name for the component.
     */
    className = "Timeline";

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
        this.isShadowRoot = "open";
    }

    /**
     * Draws the component for the timeline.
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
