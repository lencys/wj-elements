import { default as WJElement, WjElementUtils } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * The TimelineItem component.
 * @summary This element represents a timeline item.
 * @documentation https://elements.webjet.sk/components/timeline-item
 * @status stable
 *
 * @extends {WJElement}
 *
 * @part native - The native part of the timeline item.
 *
 * @slot - Slot for the content of the timeline item.
 * @slot status - Slot for the status of the timeline item.
 *
 * @tag wje-timeline-item
 */
export default class TimelineItem extends WJElement {
    constructor() {
        super();
    }

    /**
     * Returns the class name of the tab.
     *
     * @returns {string} The class name of the tab.
     */
    className = "TimelineItem";

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
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.setAttribute("part", "native");
        native.classList.add("native-timeline-item");

        let contentContainer = document.createElement('div');
        contentContainer.classList.add('content-container');

        let relativeTime = document.createElement('wje-relative-time');
        relativeTime.setAttribute('date', this.getAttribute('datetime') || '');

        let event = document.createElement('h3');
        event.classList.add('event');
        event.textContent = this.getAttribute('event') || '';

        // additional text content
        let slot = document.createElement('slot');

        // status slot
        let slotStatus = document.createElement('wje-icon')
        slotStatus.setAttribute('name', 'circle-dot');
        slotStatus.setAttribute('filled', '');
        slotStatus.setAttribute('part', 'default-icon');

        // if status slot is present
        if(this.querySelector('[slot="status"]')) {
            slotStatus = document.createElement('slot');
            slotStatus.setAttribute('name', 'status');
        }

        contentContainer.appendChild(relativeTime);
        contentContainer.appendChild(event);

        contentContainer.appendChild(slot);

        native.appendChild(slotStatus);
        native.appendChild(contentContainer);

        fragment.appendChild(native);

        return fragment;
    }
}
