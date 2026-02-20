import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary This class represents Card element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/card
 * @status stable
 * @augments WJElement
 * @slot - The card main content.
 * @cssproperty [--wje-card-background=#fff] - Background of the component;
 * @cssproperty [--wje-card-color=#000] - Color of the component;
 * @cssproperty [--wje-card-border-color=transparent] - Border color of the component;
 * @cssproperty [--wje-card-border-style=solid] - Border style of the component;
 * @cssproperty [--wje-card-border-width=1px] - Border width of the component;
 * @cssproperty [--wje-card-border-radius=0.5rem] - Border radius of the component;
 * @cssproperty [--wje-card-shadow=var(--wje-shadow-x-large)] - Shadow of the component;
 */
export default class Card extends WJElement {
    /**
     * Get CSS stylesheet for the Card element.
     * @static
     * @returns {object} styles - The CSS styles
     */
    static get cssStyleSheet(): object;
    /**
     * Get observed attributes for the Card element.
     * @static
     * @returns {Array<string>} observedAttributes - The observed attributes array
     */
    static get observedAttributes(): Array<string>;
    /**
     * Handles attribute changes for ARIA sync.
     * @param {string} name
     * @param {string|null} oldValue
     * @param {string|null} newValue
     */
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    /**
     * Sync ARIA attributes on host only when labeling is provided.
     */
    syncAria(): void;
}
