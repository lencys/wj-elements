import { default as WJElement } from '../wje-element/element.js';
/**
 * `TabPanel` is a custom web component that represents a tab panel.
 * @summary This element represents a tab panel.
 * @documentation https://elements.webjet.sk/components/tab-panel
 * @status stable
 * @augments {WJElement}
 * @slot - The default slot for the tab panel.
 * @tag wje-tab-panel
 */
export default class TabPanel extends WJElement {
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Draws the component for the tab panel.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
}
