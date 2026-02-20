import { default as WJElement } from '../wje-element/element.js';
/**
 * `Toolbar` is a custom web component that represents a toolbar.
 * @summary This element represents a toolbar.
 * @documentation https://elements.webjet.sk/components/toolbar
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native toolbar wrapper.
 * @slot start - The start slot for the toolbar.
 * @slot end - The end slot for the toolbar.
 * @cssproperty [--wje-toolbar-background=var(--wje-background)] - Specifies the background color of the toolbar. Accepts any valid CSS color value, such as `hex`, `rgb`, or `CSS variable`.
 * @cssproperty [--wje-toolbar-height=auto] - Defines the height of the toolbar. If set to `auto`, the height adjusts based on the content.
 * @cssproperty [--wje-toolbar-min-height=70px] - Sets the minimum height of the toolbar. Ensures the toolbar maintains a consistent minimum size.
 * @cssproperty [--wje-toolbar-padding-top=1rem] - Specifies the padding at the top of the toolbar. Accepts any valid CSS length unit.
 * @cssproperty [--wje-toolbar-padding-bottom=1rem] - Specifies the padding at the bottom of the toolbar. Helps create spacing between the content and the bottom edge.
 * @cssproperty [--wje-toolbar-padding-inline=1.5rem] - Defines the horizontal padding (left and right) of the toolbar. Creates consistent spacing on both sides.
 * @cssproperty [--wje-toolbar-border-color=var(--wje-border-color)] - Sets the color of the toolbar's border. Accepts any valid CSS color value.
 * @cssproperty [--wje-toolbar-top=0] - Specifies the vertical position of the toolbar relative to its container. Useful for fixed or sticky toolbars.
 * @tag wje-toolbar
 */
export default class Toolbar extends WJElement {
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
     * Draws the component for the toolbar.
     * @returns {object} Document fragment
     */
    draw(): object;
    /**
     * Sync ARIA attributes on host.
     */
    syncAria(): void;
}
