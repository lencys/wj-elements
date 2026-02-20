import { default as WJElement } from '../wje-element/element.js';
/**
 * `Item` is a custom web component that represents an item.
 * @summary This element represents an item.
 * @documentation https://elements.webjet.sk/components/item
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native part
 * @csspart inner - The inner part
 * @slot start - The start slot
 * @slot end - The end slot
 * @slot error - The error slot
 * @slot helper - The helper slot
 * @cssproperty [--wje-item-background=var(--wje-background)] - Sets the background color of the item. Accepts any valid CSS color value.
 * @cssproperty [--wje-item-color=var(--wje-color)] - Defines the text color for the item. Accepts any valid CSS color value.
 * @cssproperty [--wje-item-padding-start=var(--wje-padding)] - Specifies the left padding of the item. Accepts any valid CSS length.
 * @cssproperty [--wje-item-padding-end=var(--wje-padding)] - Specifies the right padding of the item. Accepts any valid CSS length.
 * @cssproperty [--wje-item-padding-top=var(--wje-padding)] - Specifies the top padding of the item. Accepts any valid CSS length.
 * @cssproperty [--wje-item-padding-bottom=var(--wje-padding)] - Specifies the bottom padding of the item. Accepts any valid CSS length.
 * @cssproperty [--wje-item-inner-padding-start=var(--wje-padding)] - Specifies the left inner padding of the item. Accepts any valid CSS length.
 * @cssproperty [--wje-item-inner-padding-end=var(--wje-padding)] - Specifies the right inner padding of the item. Accepts any valid CSS length.
 * @cssproperty [--wje-item-inner-padding-top=var(--wje-padding)] - Specifies the top inner padding of the item. Accepts any valid CSS length.
 * @cssproperty [--wje-item-inner-padding-bottom=var(--wje-padding)] - Specifies the bottom inner padding of the item. Accepts any valid CSS length.
 * @cssproperty [--wje-item-border-radius=var(--wje-border-radius)] - Defines the border radius, providing rounded corners for the item.
 * @cssproperty [--wje-item-border-width=var(--wje-border-width)] - Sets the border width of the item. Accepts any valid CSS length.
 * @cssproperty [--wje-item-border-style=var(--wje-border-style)] - Specifies the style of the border, such as `solid`, `dashed`, or `dotted`.
 * @cssproperty [--wje-item-border-color=var(--wje-border-color)] - Defines the color of the item's border. Accepts any valid CSS color value.
 * @cssproperty [--wje-item-min-height=var(--wje-min-height)] - Sets the minimum height of the item to ensure consistent layout.
 * @cssproperty [--wje-item-transition=var(--wje-transition)] - Specifies the transition effects for the item, such as for hover or focus states.
 * @cssproperty [--wje-item-inner-box-shadow=var(--wje-box-shadow)] - Adds a shadow effect inside the item for a 3D appearance.
 * @tag wje-item
 */
export default class Item extends WJElement {
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {object} styles
     */
    static get cssStyleSheet(): object;
    labelColorStyles: {};
    itemStyles: Map<any, any>;
    inheritedAriaAttributes: {};
    multipleInputs: boolean;
    focusable: boolean;
    button: boolean;
    detailIcon: string;
    disabled: boolean;
    counter: boolean;
    routerDirection: string;
    type: string;
    /**
     * Returns the CSS styles for the component.
     * @returns {boolean}
     */
    isClickable(): boolean;
    /**
     * Draws the component for the item.
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
    /**
     * Determines if the given element or any of its ancestors matches the specified selector.
     * @param {string} selector The CSS selector to match against the element's ancestors.
     * @param {HTMLElement} el The element from which to start the search.
     * @returns {boolean} - Returns `true` if the element or one of its ancestors matches the selector; otherwise, `false`.
     */
    hostContext: (selector: string, el: HTMLElement) => boolean;
}
