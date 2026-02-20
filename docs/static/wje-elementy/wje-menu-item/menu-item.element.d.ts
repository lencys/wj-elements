import { default as WJElement } from '../wje-element/element.js';
/**
 * `MenuItem` is a custom web component that represents a menu item.
 * @summary This element represents a menu item.
 * @documentation https://elements.webjet.sk/components/menu-item
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native part of the menu item.
 * @csspart submenu - The submenu part of the menu item.
 * @slot - The default slot for the menu item.
 * @slot start - The slot for the start of the menu item.
 * @slot end - The slot for the end of the menu item.
 * @slot submenu - The slot for the submenu of the menu item.
 * @cssproperty [--wje-menu-item-color=var(--wje-color)] - Sets the text color of a menu item. Accepts any valid CSS color value.
 * @cssproperty [--wje-menu-item-background=transparent] - Defines the background color of a menu item. Default is `transparent`. Accepts any valid CSS color value.
 * @cssproperty [--wje-menu-item-color-hover=var(--wje-color-contrast-8)] - Specifies the text color of a menu item when hovered. Accepts any valid CSS color value.
 * @cssproperty [--wje-menu-item-background-hover=var(--wje-border-color)] - Sets the background color of a menu item when hovered. Accepts any valid CSS color value.
 * @cssproperty [--wje-menu-item-color-focus=var(--wje-color-contrast-8)] - Defines the text color of a menu item when focused. Accepts any valid CSS color value.
 * @cssproperty [--wje-menu-item-background-focus=var(--wje-border-color)] - Specifies the background color of a menu item when focused. Accepts any valid CSS color value.
 * @cssproperty [--wje-menu-item-color-active=var(--wje-color-contrast-8)] - Sets the text color of a menu item when active. Accepts any valid CSS color value.
 * @cssproperty [--wje-menu-item-background-active=var(--wje-border-color)] - Specifies the background color of a menu item when active. Accepts any valid CSS color value.
 * @cssproperty [--wje-menu-item-padding-top=.5rem] - Specifies the top padding inside a menu item. Accepts any valid CSS length value (e.g., `px`, `rem`).
 * @cssproperty [--wje-menu-item-padding-bottom=.5rem] - Specifies the bottom padding inside a menu item. Accepts any valid CSS length value (e.g., `px`, `rem`).
 * @cssproperty [--wje-menu-item-line-height=1.8rem] - Sets the line height for the text within a menu item. Accepts any valid CSS length value.
 * @cssproperty [--wje-menu-submenu-offset=0] - Determines the horizontal offset of a submenu relative to its parent. Accepts any valid CSS length value.
 * @cssproperty [--wje-menu-item-icon-visibility=hidden] - Controls the visibility of the icon in a menu item. Accepts `visible`, `hidden`, or `collapse`.
 * @cssproperty [--wje-menu-item-safe-triangle-cursor-x] - Specifies the x-coordinate of the cursor for the safe triangle area. Used for managing hover or focus transitions between menu items and submenus.
 * @cssproperty [--wje-menu-item-safe-triangle-cursor-y] - Specifies the y-coordinate of the cursor for the safe triangle area.
 * @cssproperty [--wje-menu-item-safe-triangle-submenu-start-x] - Defines the x-coordinate where the submenu's safe triangle starts. Helps prevent accidental submenu closing when navigating.
 * @cssproperty [--wje-menu-item-safe-triangle-submenu-start-y] - Defines the y-coordinate where the submenu's safe triangle starts.
 * @cssproperty [--wje-menu-item-safe-triangle-submenu-end-x] - Specifies the x-coordinate where the submenu's safe triangle ends.
 * @cssproperty [--wje-menu-item-safe-triangle-submenu-end-y] - Specifies the y-coordinate where the submenu's safe triangle ends.
 * @tag wje-menu-item
 */
export default class MenuItem extends WJElement {
    /**
     * Getter for cssStyleSheet.
     * @returns {string} The styles imported from styles.css.
     */
    static get cssStyleSheet(): string;
    /**
     * Getter for observedAttributes.
     * @returns {Array} An empty array as no attributes are being observed.
     */
    static get observedAttributes(): any[];
    _bind: boolean;
    /**
     * Getter for placement attribute.
     * @returns {string} The placement attribute of the menu or "right-start" if it doesn't exist.
     */
    get placement(): string;
    /**
     * Getter for offset attribute.
     * @returns {string} The offset attribute of the menu or "0" if it doesn't exist.
     */
    get offset(): string;
    /**
     * Getter for variant attribute.
     * @returns {string} The variant attribute of the menu or "CONTEXT" if it doesn't exist.
     */
    get variant(): string;
    /**
     * Getter for collapse attribute.
     * @returns {boolean} True if the closest parent has the collapse attribute, false otherwise.
     */
    get collapse(): boolean;
    /**
     * Sets the value of the custom event attribute.
     * @param {string} value The value to be assigned to the custom event attribute.
     */
    set customEvent(value: string);
    /**
     * Retrieves the value of the 'custom-event' attribute from the element.
     * @returns {string | null} The value of the 'custom-event' attribute, or null if the attribute is not set.
     */
    get customEvent(): string | null;
    /**
     * Retrieves a mapped object containing custom event parameters extracted from the element's attributes.
     * Attributes considered are those that begin with 'custom-event-'.
     * The mapped object's keys are derived by removing the 'custom-event-' prefix from the attribute names,
     * and the values are the corresponding attribute values.
     * @returns {object} An object containing key-value pairs of custom event parameters.
     */
    get customEventParameters(): object;
    /**
     * Removes the active attribute from the menu before drawing the MenuItem.
     */
    beforeDraw(): void;
    /**
     * Draws the MenuItem element and sets the variant and collapse attributes.
     * @returns {DocumentFragment} The fragment to be appended to the MenuItem.
     */
    draw(): DocumentFragment;
    hasSubmenu: boolean;
    popup: HTMLElement;
    native: HTMLDivElement;
    submenu: HTMLSlotElement;
    /**
     * Adds event listeners after drawing the MenuItem.
     */
    afterDraw(): void;
    unbindRouterLinks: any;
    /**
     * Syncs ARIA attributes based on menu item state.
     */
    syncAria(): void;
    mouseenterHandler: (e: any) => void;
    rebindRouterLinks: (e: any) => void;
    unbindPortalRouterLinks: any;
    /**
     * Handles the click event on the MenuItem.
     * @param {object} e
     */
    clickHandler: (e: object) => void;
    /**
     * Checks if the submenu should be hidden based on the event.
     * @param {Event} e The event object.
     */
    shouldHideSubmenu: (e: Event) => void;
    /**
     * Creates a tooltip for the MenuItem when it is collapsed.
     * @param {HTMLElement} native The native MenuItem element.
     * @returns {HTMLElement} The tooltip element.
     */
    collapseItem(native: HTMLElement): HTMLElement;
    /**
     * Dispatches a mousemove event.
     */
    dispatchMove: (e: any) => void;
    /**
     * Dispatches a reposition event.
     */
    dispatchReposition: (e: any) => void;
    /**
     * Shows the submenu of the MenuItem.
     */
    showSubmenu(): void;
    /**
     * Hides the submenu of the MenuItem.
     */
    hideSubmenu(): void;
    /**
     * Toggles the active state of the submenu element.
     * If the submenu is not active, it sets the "active" attribute.
     * If the submenu is already active, it removes the "active" attribute.
     * @param {Event} e The event object.
     */
    submenuToggle(e: Event): void;
    /**
     * Deactivates the submenu by removing the "active" attribute.
     */
    deactivateSubmenu(): void;
    /**
     * Activates the submenu of the menu item.
     */
    activateSubmenu(): void;
    /**
     * Extracts and returns the concatenated text content from all text nodes within the specified element.
     * @param {HTMLElement} element The HTML element from which to extract text content.
     * @returns {string} The concatenated and trimmed text content from the element's text nodes.
     */
    getTextFromElement(element: HTMLElement): string;
    handleActiveClick: (e: any) => void;
    #private;
}
