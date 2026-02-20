import { default as WJElement } from '../wje-element/element.js';
/**
 * The TimelineItem component.
 * @summary This element represents a timeline item.
 * @documentation https://elements.webjet.sk/components/timeline-item
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native part of the timeline item.
 * @csspart content-container - The content container part of the timeline item.
 * @csspart default-icon - The default icon part of the timeline item.
 * @slot - Slot for the content of the timeline item.
 * @slot status - Slot for the status of the timeline item.
 * @tag wje-timeline-item
 */
export default class TimelineItem extends WJElement {
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Draws the component for the timeline item.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
}
