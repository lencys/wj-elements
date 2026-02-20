import { default as WJElement } from '../wje-element/element.js';
/**
 * `Tree` is a custom web component that represents a hierarchical tree structure.
 * It extends from `WJElement`.
 * @summary This element visually represents a tree structure, supporting single or multiple selection modes and hierarchy management.
 * @documentation https://elements.webjet.sk/components/tree
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native container part of the tree.
 * @slot - The default slot to place `wje-tree-item` child components.
 * @tag wje-tree
 */
export default class Tree extends WJElement {
    /**
     * Returns the CSS stylesheet for the component.
     * @static
     * @returns {CSSStyleSheet} The CSS stylesheet
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Sets the selection attribute for the element.
     * @param {string} value The value to set as the selection attribute.
     */
    set selection(value: string);
    /**
     * Gets the current selection mode for the element.
     * If no selection is explicitly set, it defaults to 'single'.
     * @returns {string} The current selection mode, either set by the element's attribute or the default value 'single'.
     */
    get selection(): string;
    /**
     * A method called before the drawing or rendering process of tree items.
     * It iterates through all `wje-tree-item` elements, updating their selection state
     * and managing their expand/collapse icons accordingly.
     * @returns {void} This method does not return a value.
     */
    beforeDraw(): void;
    /**
     * Draw method for the toast notification.
     * @returns {object} Document fragment
     */
    draw(): object;
    /**
     * Called after the draw process of the component is completed.
     * Typically used to add event listeners or perform operations
     * that are dependent on the component's drawn state.
     * @returns {void} This method does not return a value.
     */
    afterDraw(): void;
    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria(): void;
    /**
     * Handles the click event triggered by the user interaction.
     * Identifies the closest tree item element to the event target and sets it
     * as the selected item. Ensures that only one item is selected at a time, resetting
     * the selection state for all other items.
     * @param {Event} e The click event object.
     */
    handleClick: (e: Event) => void;
    /**
     * Retrieves all items that match the selector 'wje-tree-item' within the current context.
     * @returns {Array<Element>} An array of all matching DOM elements.
     */
    getAllItems(): Array<Element>;
    /**
     * Retrieves and appends an expand/collapse icon to a given item based on the provided status.
     * @param {HTMLElement} item The DOM element to which the icon will be appended.
     * @param {string} status The status indicating which icon to retrieve (e.g., "expand" or "collapse").
     * @returns {void} This method does not return a value. If the icon matching the given status is not found, a warning is logged.
     */
    getExpandCollapseIcon(item: HTMLElement, status: string): void;
    getSlots(item: any, slotName: any): void;
    /**
     * Updates the state of a checkbox, syncing the state both upwards to parent elements
     * and downwards to child elements as necessary.
     * @param {object} changedItem The specific item whose checkbox state has changed.
     * @param {boolean} [isInitialSync] Indicates whether the state update is part of the initial synchronization process.
     * @returns {void} This method does not return a value.
     */
    updateCheckboxState(changedItem: object, isInitialSync?: boolean): void;
    isInitialSync: boolean;
    /**
     * Updates the state of the parent item based on the state of its child items.
     * Recursively propagates changes up to all parent items to reflect the selection
     * or indeterminate state accurately.
     * @param {object} item The current tree item whose parent state needs to be updated.
     * It is expected to have properties `selected`, `indeterminate`,
     * and a method `getChildrenItems({ includeDisabled: boolean })`.
     * @returns {void} This method does not return a value.
     */
    updateParentState(item: object): void;
    /**
     * Propagates the state changes of an item upwards through its ancestors in the hierarchy.
     * Calls the `updateParentState` method for each parent element until no parent exists.
     * @param {HTMLElement} item The current item whose state to propagate to its parent.
     * @returns {void} This method does not return a value.
     */
    propagateStateUpwards(item: HTMLElement): void;
    /**
     * Propagates the selected state of an item to its children recursively. Depending on the `isInitialSync` flag,
     * it also determines how the state should be applied to the child items and updates the parent state if needed.
     * @param {object} item The item whose state is being propagated to its child items. The item must have properties
     * such as `selected` and methods like `getChildrenItems` to retrieve its child elements.
     * @returns {void} This method does not return a value.
     */
    propagateStateDownwards(item: object): void;
}
