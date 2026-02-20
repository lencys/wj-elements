import { default as WJElement } from '../wje-element/element.js';
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
     * Returns the CSS stylesheet for the component.
     * @static
     * @returns {CSSStyleSheet} The CSS stylesheet
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Draws the component for the timeline.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    /**
     * Sync ARIA attributes on host.
     */
    syncAria(): void;
}
