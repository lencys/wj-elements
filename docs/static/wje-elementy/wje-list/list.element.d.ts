import { default as WJElement } from '../wje-element/element.js';
/**
 * `List` is a custom web component that represents a list.
 * It extends from `WJElement`.
 * @summary This element represents a list.
 * @documentation https://elements.webjet.sk/components/list
 * @status stable
 * @augments {WJElement}
 * @slot - The default slot for the list.
 * @cssproperty [--wje-list-inset-padding=1rem] - The padding of the list when it is inset.
 * @cssproperty [--wje-list-border-radius=8px] - The border radius of the list. Accepts any valid CSS length.
 * @cssproperty [--wje-list-background=var(--wje-background)] - The background of the list. Accepts any valid CSS color value.
 * @tag wje-list
 */
export default class List extends WJElement {
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Returns the list of attributes to observe for changes.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    /**
     * Called after the component has been drawn.
     */
    afterDraw(): void;
    /**
     * Sync ARIA attributes on host.
     */
    syncAria(): void;
}
