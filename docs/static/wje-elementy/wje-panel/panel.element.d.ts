import { default as WJElement } from '../wje-element/element.js';
/**
 * `Panel` is a custom web component that represents a panel.
 * @summary This element represents a panel.
 * @documentation https://elements.webjet.sk/components/panel
 * @status stable
 * @augments {WJElement}
 * @slot - The default slot for the panel.
 * @tag wje-panel
 */
export default class Panel extends WJElement {
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    last: boolean;
    /**
     * Draws the component for the panel.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    /**
     * Adds event listeners after the component is drawn.
     * Handles the collapsing of breadcrumbs.
     */
    afterDraw(): void;
    /**
     * Returns all the breadcrumb elements in the panel.
     * @returns {Array<Element>} The breadcrumb elements.
     */
    getBreadcrumbs(): Array<Element>;
}
