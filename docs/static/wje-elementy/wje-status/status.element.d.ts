import { default as WJElement } from '../wje-element/element.js';
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
     * Returns the CSS stylesheet for the component.
     * @static
     * @returns {CSSStyleSheet} The CSS stylesheet
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Draws the component for the status.
     * @returns {object} fragment - The document fragment
     */
    draw(): object;
}
