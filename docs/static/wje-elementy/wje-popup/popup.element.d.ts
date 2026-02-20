import { default as WJElement } from '../wje-element/element.js';
/**
 * `Popup` is a custom web component that represents a popup.
 * @summary This element represents a popup.
 * @documentation https://elements.webjet.sk/components/popup
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native part of the popup.
 * @slot anchor - The slot for the anchor of the popup.
 * @slot arrow - The slot for the arrow of the popup.
 * @slot - The default slot for the popup.
 * // @fires wje-popup:reposition - Event fired when the popup is repositioned.
 * // @fires wje-popup:show - Event fired when the popup is shown.
 * // @fires wje-popup:hide - Event fired when the popup is hidden.
 * @tag wje-popup
 */
export default class Popup extends WJElement {
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet} The CSS styles for the component.
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes(): Array<string>;
    _manual: boolean;
    set loader(value: boolean);
    get loader(): boolean;
    /**
     * Sets the manual property of the popup.
     * @param {boolean} value The value to set.
     */
    set manual(value: boolean);
    /**
     * Gets the manual property of the popup.
     * @returns {boolean} The value of the manual property.
     */
    get manual(): boolean;
    /**
     * Sets or removes the 'portal' attribute on the element based on the provided value.
     * If the value is truthy, the 'portal' attribute will be added.
     * If the value is falsy, the 'portal' attribute will be removed.
     * @param {boolean} value Determines whether the 'portal' attribute should be added or removed.
     */
    set portal(value: boolean);
    /**
     * Returns whether the 'portal' attribute is present on the element.
     * @returns {boolean} True if the 'portal' attribute exists, otherwise false.
     */
    get portal(): boolean;
    get floatingEl(): HTMLDivElement;
    beforeDraw(context: any, store: any, params: any): void;
    /**
     * Draws the component for the popup.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    slotAnchor: HTMLSlotElement;
    slotArrow: HTMLSlotElement;
    native: HTMLDivElement;
    loaderEl: HTMLDivElement;
    /**
     * After Draws the component.
     */
    afterDraw(): void;
    /**
     * Sets the anchor for the popup.
     * Adds a click event listener to the anchor element.
     */
    setAnchor(): void;
    anchorEl: any;
    manualCallback: (e: any) => void;
    clickHandler: (e: any) => void;
    /**
     * Toggles the active attribute of the popup.
     */
    showHide(): void;
    /**
     * Repositions the popup.
     * Uses the floating-ui library to compute the position.
     */
    reposition(): void;
    offsetCalc: number;
    arrow: Element;
    /**
     * Mounts content to a portal container by creating or ensuring a portal root and mirroring
     * the host's classes, attributes, and slot contents onto the portal. This method manages the
     * movement of default and arrow slot content into the portal shadow DOM, while also setting
     * up necessary mutation observers to keep attributes in sync.
     * @returns {void} Does not return a value.
     */
    _mountContentToPortal(): void;
    _portalNative: HTMLDivElement;
    _portalSlot: HTMLSlotElement;
    _portalArrowSlot: HTMLSlotElement;
    _portalAttrObserver: MutationObserver;
    _defPlaceholders: any[];
    _arrowPlaceholders: any[];
    _floatingEl: HTMLDivElement;
    _portaled: boolean;
    /**
     * Restores the content previously moved to a portal back to its original location.
     * This method handles restoring default slot content, arrow placeholders, disconnecting
     * attribute mirroring observers, and cleaning up elements and containers related to the portal.
     * Ensures all placeholders and native portal elements are properly removed from the DOM.
     * @returns {void} Does not return a value.
     */
    _restoreContentFromPortal(): void;
    _portalContainer: HTMLDivElement;
    _portalShadow: ShadowRoot;
    /**
     * Ensures that a portal root is created and initialized properly with a shadow DOM and attached styles.
     * If the portal root already exists, the method exits early.
     * The method creates a `div` element in the document body and attaches a shadow DOM to it.
     * It also applies the required styles to the shadow DOM, either using constructable stylesheets
     * or by appending a `<style>` element. Additionally, it copies CSS custom properties from the
     * component's computed styles to the portal host to ensure proper style resolution.
     * @returns {void} This method does not return a value.
     */
    _ensurePortalRoot(): void;
    findDialog(el: any): any;
    /**
     * Displays the popup by portaling the content, managing the loader state, and attaching event handlers.
     * Optionally dispatches a custom event when the popup is shown.
     * @param {boolean} [dispatchEvent] Indicates whether to dispatch a custom event ('wje-popup:show') when the popup is shown.
     * @returns {void} Does not return any value.
     */
    show(dispatchEvent?: boolean): void;
    cleanup: any;
    /**
     * Hides the popup.
     * Removes the popup-active class from the floating element.
     * Cleans up the auto update for repositioning.
     */
    hide(dispatchEvent?: boolean): void;
    /**
     * Removes the active attribute when the popup is hidden.
     */
    handleHide: () => void;
    markContentReady(): void;
}
