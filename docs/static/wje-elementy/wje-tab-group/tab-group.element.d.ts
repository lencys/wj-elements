import { default as WJElement } from '../wje-element/element.js';
/**
 * `TabGroup` is a custom web component that represents a group of tabs.
 * @summary This element represents a group of tabs.
 * @documentation https://elements.webjet.sk/components/tab-group
 * @status stable
 * @augments WJElement
 * @param {string} type The type of the tab group. Can be either 'panel' or 'route'.
 * @slot - The default slot for the tab group.
 * @slot nav - Slot for the navigation of the tab group.
 * @cssproperty [--wje-tab-group-padding=1rem] - Specifies the padding inside the tab group. This property defines the space between the content of the tab group and its outer boundary. Accepts any valid CSS length unit (e.g., `px`, `rem`, `em`, `%`).
 * @tag wje-tab-group
 */
export default class TabGroup extends WJElement {
    static _instanceId: number;
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    _instanceId: number;
    _lastNavWidth: any;
    _initialized: boolean;
    /**
     * Sets the value for the 'variant' attribute of the element.
     * @param {string} value The value to set for the 'variant' attribute.
     */
    set variant(value: string);
    /**
     * Gets the value of the 'variant' attribute.
     * If the attribute is not set, it defaults to 'top'.
     * @returns {string} The value of the 'variant' attribute or the default value 'top' if not set.
     */
    get variant(): string;
    /**
     * Sets the 'type' attribute of the element to the specified value.
     * @param {string} value The value to set for the 'type' attribute.
     */
    set type(value: string);
    /**
     * Retrieves the `type` attribute of the element.
     * If the `type` attribute is not set, it defaults to `'panel'`.
     * @returns {string} The value of the `type` attribute or the default value `'panel'`.
     */
    get type(): string;
    /**
     * Sets up the event listeners before the component is drawn.
     * This method is called before the component is drawn.
     * It is used to set up event listeners.
     */
    beforeDraw(): void;
    /**
     * Creates and returns a document fragment containing a structured layout for a tab group.
     * The tab group layout includes a `header` section with navigational elements,
     * a `section` element for tab panels, and slots for customization such as additional navigation items,
     * dropdowns, and more.
     * The structure comprises:
     * - A `div` container with relevant styling and part attributes.
     * - A `header` for tabs, including a slot for navigation (`nav`) and additional tabs in a dropdown (`moreDropdown`).
     * - A `section` for tab panels with a customizable `slot`.
     * This function also initializes the `nav` and `moreDropdown` properties for external use.
     * @returns {DocumentFragment} The completed document fragment containing the tab group layout.
     */
    draw(): DocumentFragment;
    nav: HTMLElement;
    moreDropdown: HTMLElement;
    /**
     * Executes necessary initializations and attaches event listeners after a drawing operation.
     * Handles active tab selection, 'wje-tab:change' event binding, and window resize event for overflow checking.
     * @returns {void} Does not return a value.
     */
    afterDraw(): void;
    _resizeObserver: ResizeObserver;
    /**
     * Removes the 'active' class from all panel and tab elements.
     * @returns {void} This method does not return a value.
     */
    removeActiveTab(): void;
    /**
     * Sets the active tab and panel.
     * @param {string} tab The name of the tab to set as active.
     */
    setActiveTab(tab: string): void;
    /**
     * Returns the currently active tab.
     * @returns {Element|null} The active tab, or null if no tab is active.
     */
    getActiveTab(): Element | null;
    /**
     * Returns all tabs.
     * @returns {Array<Element>} An array of all tabs.
     */
    getTabAll(): Array<Element>;
    /**
     * Returns all tabs, including those moved to "more".
     * @returns {Array<Element>} An array of all tabs.
     */
    getAllTabs(): Array<Element>;
    /**
     * Returns all panels.
     * @returns {Array<Element>} An array of all panels.
     */
    getPanelAll(): Array<Element>;
    /**
     * Returns the names of all tabs.
     * @returns {Array<string>} An array of all tab names.
     */
    getPanelAllName(): Array<string>;
    /**
     * Toggles the visibility of the "more" dropdown based on the presence of tabs in the "more" slot.
     * @returns {void} Does not return a value.
     */
    toggleMoreVisibility(): void;
    /**
     * Initializes metrics for tabs within the component. Assigns each tab to the navigation slot
     * and calculates their dimensions for further operations.
     * @returns {void} Does not return any value.
     */
    initTabMetrics(): void;
    _tabMetrics: {
        el: Element;
        width: number;
    }[];
    /**
     * Checks if the tabs within a navigation bar overflow the available space.
     * Moves overflowing tabs into a dropdown menu and updates their state accordingly.
     * @returns {void} This method does not return a value.
     */
    checkOverflow(): void;
    /**
     * Toggles the "dropdown-active" class on the element based on its "active" status
     * and the value of its "slot" attribute.
     * @param {HTMLElement} el The HTML element to evaluate and apply the toggle logic.
     * @returns {void} This method does not return any value.
     */
    dropdownActive(el: HTMLElement): void;
    /**
     * Syncs ARIA attributes on tabs and panels.
     */
    syncAria(): void;
}
