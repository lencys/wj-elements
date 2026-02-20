import { default as WJElement } from '../wje-element/element.js';
/**
 * `ToolbarAction` is a custom web component that represents a toolbar action.
 * @summary This element represents a toolbar action.
 * @documentation https://elements.webjet.sk/components/toolbar-action
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native toolbar action wrapper.
 * @slot - The default slot for the toolbar action.
 * @tag wje-toolbar-action
 */
export default class ToolbarAction extends WJElement {
    /**
     * Returns the CSS stylesheet for the component.
     * @static
     * @returns {CSSStyleSheet} The CSS stylesheet
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Returns the list of observed attributes.
     * @static
     * @returns {Array} An empty array
     */
    static get observedAttributes(): any[];
    /**
     * Draws the component for the toolbar action.
     * @returns {object} Document fragment
     */
    draw(): object;
    /**
     * Returns the actions for the toolbar action.
     * @returns {Array} An array of wje-button elements
     */
    getActions(): any[];
}
