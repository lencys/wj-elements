/**
 * `wje-tree-item` is a custom web component used as a child of the `wje-tree`.
 * It represents a node within a tree structure, capable of nesting other items.
 * @summary Represents a single item in a tree structure.
 * @documentation https://elements.webjet.sk/components/tree-item
 * @status stable
 * @augments {HTMLElement}
 * @slot - Default slot for rendering the tree item's content (e.g., text or custom elements).
 * @csspart native - The native container of the tree item.
 * @cssproperty [--wje-tree-item-indent=var(--wje-spacing-large)] - Defines the indentation for nested tree items.
 * @cssproperty [--wje-tree-item-indent-guid-width=0px] - Specifies the width of the guide element shown next to a tree item.
 * @cssproperty [--wje-tree-item-border-radius=var(--wje-border-radius-medium)] - Sets the border radius of the tree item’s container.
 * @tag wje-tree-item
 */
export default class TreeItem extends HTMLElement {
    /**
     * Returns the CSS stylesheet for the component.
     * @static
     * @returns {CSSStyleSheet} The CSS stylesheet
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes(): Array<string>;
    _selection: string;
    /**
     * Sets the expanded state of the element. When set to a truthy value,
     * the 'expanded' attribute will be added to the element. When set to a falsy
     * value, the 'expanded' attribute will be removed.
     * @param {boolean} value A boolean value indicating whether the
     * element should be expanded (true) or collapsed (false).
     */
    set expanded(value: boolean);
    /**
     * Retrieves the value of the 'expanded' state for the current element.
     * This getter checks whether the 'expanded' attribute is present on the element.
     * If the attribute exists, it returns true, representing that the element is expanded.
     * Otherwise, it returns false, indicating that the element is not expanded.
     * @returns {boolean} True if the 'expanded' attribute is present, false otherwise.
     */
    get expanded(): boolean;
    /**
     * Sets the 'selected' attribute of the element. Removes the attribute if the provided value is falsy; otherwise, sets it.
     * @param {boolean} value The value indicating whether the element should have the 'selected' attribute.
     */
    set selected(value: boolean);
    /**
     * Getter method for determining if the 'selected' attribute is present on the element.
     * @returns {boolean} Returns true if the 'selected' attribute is present, otherwise false.
     */
    get selected(): boolean;
    /**
     * Sets the selection mode for the component.
     * @param {string} value The selection mode to apply. Defaults to 'single'
     * if no value is provided. Possible options may be
     * specific to the implementation of the component
     * (e.g., 'single', 'multiple').
     */
    set selection(value: string);
    /**
     * Retrieves the current selection.
     * @returns {*} The value of the current selection.
     */
    get selection(): any;
    /**
     * Sets or removes the 'indeterminate' attribute based on the provided value.
     * This can be used to visually indicate an indeterminate state for elements like checkboxes.
     * @param {boolean} value A boolean indicating whether to set the element to an indeterminate state.
     * If true, the 'indeterminate' attribute is added to the element; if false, the attribute is removed.
     */
    set indeterminate(value: boolean);
    /**
     * Retrieves the state of the indeterminate attribute.
     * @returns {boolean} True if the indeterminate attribute is present, otherwise false.
     */
    get indeterminate(): boolean;
    /**
     * Setup attributes for the Button element.
     */
    setupAttributes(): void;
    isShadowRoot: string;
    connectedCallback(): void;
    /**
     * Handles updates when observed attributes of the element are changed.
     * Updates the checkbox state based on changes to the "selected" or "indeterminate" attributes.
     * @param {string} name The name of the attribute that was changed.
     * @param {string|null} oldValue The previous value of the attribute before the change.
     * @param {string|null} newValue The new value of the attribute after the change.
     * @returns {void}
     */
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    /**
     * Custom logic executed before the draw process begins.
     * Determines and sets the appropriate slot if the current item is nested.
     * @returns {void} No return value.
     */
    beforeDraw(): void;
    /**
     * Creates and returns a document fragment representing the structure of a tree item component.
     * The method constructs the DOM elements including the native container, indentation, toggle button,
     * selection checkbox, label, and children container, along with their respective slots and attributes.
     * It dynamically handles the creation of expand and collapse icons, as well as appending slots for
     * child components.
     * @returns {DocumentFragment} A fragment containing the complete tree item structure to be rendered.
     */
    draw(): DocumentFragment;
    checkbox: HTMLElement;
    native: HTMLDivElement;
    button: HTMLDivElement;
    childrenElement: HTMLDivElement;
    childrenSlot: HTMLSlotElement;
    /**
     * Executes operations to be performed after the draw action is completed.
     * If the state indicates it is expanded, toggles its children.
     * Additionally, sets up an event listener on the button element to handle toggling children upon click.
     * @returns {void} Does not return a value.
     */
    afterDraw(): void;
    /**
     * Determines if the current item is a nested item within a tree structure.
     * Checks if the item's parent element exists and is also a tree item.
     * @returns {boolean} Returns true if the current item is a nested tree item; otherwise, false.
     */
    isNestedItem(): boolean;
    /**
     * Checks whether the given node is a tree item.
     * @param {object} node The node to check.
     * @returns {boolean} Returns true if the node is an Element and has a class name of 'TreeItem', otherwise false.
     */
    isTreeItem(node: object): boolean;
    /**
     * Toggles the visibility state of the children element and updates the class of the parent element.
     * The method toggles the 'open' class on the children elements and the 'expanded' class on the parent element,
     * effectively showing or hiding the children and indicating the expanded state.
     * @returns {void} Does not return a value.
     */
    toggleChildren(): void;
    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria(): void;
    /**
     * Retrieves the child items from the `childrenSlot` that match specific criteria.
     * @param {object} [options] Configuration options.
     * @param {boolean} [options.includeDisabled] Determines whether disabled items should be included in the result. Defaults to true.
     * @returns {Array} An array of child items that are valid tree items and meet the criteria specified in the options.
     */
    getChildrenItems(options?: {
        includeDisabled?: boolean;
    }): any[];
    /**
     * Retrieves all descendant children of the current object in a flattened array structure.
     * @param {object} [options] An optional object specifying filters or configurations for retrieving children.
     * @returns {Array} An array containing all children and their descendants in a flat structure.
     */
    getAllChildrenFlat(options?: object): any[];
}
