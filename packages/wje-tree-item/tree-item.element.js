import { default as WJElement, WjElementUtils, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

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

export default class TreeItem extends WJElement {
    /**
     * Creates an instance of Toast.
     */
    constructor() {
        super();

        this._selection = 'single';
    }

    /**
     * Sets the expanded state of the element. When set to a truthy value,
     * the 'expanded' attribute will be added to the element. When set to a falsy
     * value, the 'expanded' attribute will be removed.
     * @param {boolean} value A boolean value indicating whether the
     * element should be expanded (true) or collapsed (false).
     */
    set expanded(value) {
        if (value) {
            this.setAttribute('expanded', '');
        } else {
            this.removeAttribute('expanded');
        }
    }

    /**
     * Retrieves the value of the 'expanded' state for the current element.
     * This getter checks whether the 'expanded' attribute is present on the element.
     * If the attribute exists, it returns true, representing that the element is expanded.
     * Otherwise, it returns false, indicating that the element is not expanded.
     * @returns {boolean} True if the 'expanded' attribute is present, false otherwise.
     */
    get expanded() {
        return this.hasAttribute('expanded');
    }

    /**
     * Sets the 'selected' attribute of the element. Removes the attribute if the provided value is falsy; otherwise, sets it.
     * @param {boolean} value The value indicating whether the element should have the 'selected' attribute.
     */
    set selected(value) {
        this.removeAttribute('selected');

        if(value)
            this.setAttribute('selected', '');
    }

    /**
     * Getter method for determining if the 'selected' attribute is present on the element.
     * @returns {boolean} Returns true if the 'selected' attribute is present, otherwise false.
     */
    get selected() {
        return this.hasAttribute('selected');
    }

    /**
     * Sets the selection mode for the component.
     * @param {string} value The selection mode to apply. Defaults to 'single'
     * if no value is provided. Possible options may be
     * specific to the implementation of the component
     * (e.g., 'single', 'multiple').
     */
    set selection(value) {
        this._selection = value || 'single';
    }

    /**
     * Retrieves the current selection.
     * @returns {*} The value of the current selection.
     */
    get selection() {
        return this._selection;
    }

    /**
     * Sets or removes the 'indeterminate' attribute based on the provided value.
     * This can be used to visually indicate an indeterminate state for elements like checkboxes.
     * @param {boolean} value A boolean indicating whether to set the element to an indeterminate state.
     * If true, the 'indeterminate' attribute is added to the element; if false, the attribute is removed.
     */
    set indeterminate(value) {
        this.removeAttribute('indeterminate');

        if(value)
            this.setAttribute('indeterminate', '');
    }

    /**
     * Retrieves the state of the indeterminate attribute.
     * @returns {boolean} True if the indeterminate attribute is present, otherwise false.
     */
    get indeterminate() {
        return this.hasAttribute('indeterminate');
    }

    /**
     * The class name for the component.
     * @type {string}
     */
    className = 'TreeItem';

    /**
     * Returns the CSS stylesheet for the component.
     * @static
     * @returns {CSSStyleSheet} The CSS stylesheet
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Setup attributes for the Button element.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes() {
        return ['selected', 'indeterminate'];
    }

    /**
     * Handles updates when observed attributes of the element are changed.
     * Updates the checkbox state based on changes to the "selected" or "indeterminate" attributes.
     * @param {string} name The name of the attribute that was changed.
     * @param {string|null} oldValue The previous value of the attribute before the change.
     * @param {string|null} newValue The new value of the attribute after the change.
     * @returns {void}
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'selected') {
            this.checkbox.removeAttribute('indeterminate');
            if (this.selected) {
                this.checkbox.setAttribute('checked', '');
            } else {
                this.checkbox.removeAttribute('checked');
            }
        }

        if (name === 'indeterminate' && !this.selected) {
            this.checkbox.removeAttribute('indeterminate');
            this.checkbox.removeAttribute('checked');

            if (this.indeterminate)
                this.checkbox.setAttribute('indeterminate', '');
        }
    }

    /**
     * Custom logic executed before the draw process begins.
     * Determines and sets the appropriate slot if the current item is nested.
     * @returns {void} No return value.
     */
    beforeDraw() {
        if (this.isNestedItem())
            this.slot = 'children';
    }
    
    /**
     * Creates and returns a document fragment representing the structure of a tree item component.
     * The method constructs the DOM elements including the native container, indentation, toggle button,
     * selection checkbox, label, and children container, along with their respective slots and attributes.
     * It dynamically handles the creation of expand and collapse icons, as well as appending slots for
     * child components.
     * @returns {DocumentFragment} A fragment containing the complete tree item structure to be rendered.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.setAttribute('part', 'native');
        native.classList.add('native-tree-item', this.selection === 'multiple' ? 'multiple' : 'single');

        let item = document.createElement('div');
        item.classList.add('item');

        let indent = document.createElement('div');
        indent.classList.add('indent');

        let button = document.createElement('div');
        button.classList.add('toggle');

        let checkbox = document.createElement('wje-checkbox');
        if(this.selected)
            checkbox.setAttribute('checked', '');

        let label = document.createElement('div');
        label.classList.add('content');

        let slotElement = document.createElement('slot');

        let children = document.createElement('div');
        children.classList.add('children');

        let slot = document.createElement('slot');
        slot.setAttribute('name', 'children');
        children.appendChild(slot);

        item.appendChild(indent);

        if(this.querySelectorAll(':scope > wje-tree-item').length > 0) {
            if(this.querySelectorAll('[slot="expand"]').length < 1) {
                let expandIcon = document.createElement('wje-icon');
                expandIcon.setAttribute('name', 'chevron-right');
                expandIcon.setAttribute('slot', 'expand');

                this.appendChild(expandIcon);
            }

            if(this.querySelectorAll('[slot="collapse"]').length < 1) {
                let collapseIcon = document.createElement('wje-icon');
                collapseIcon.setAttribute('name', 'chevron-down');
                collapseIcon.setAttribute('slot', 'collapse');

                this.appendChild(collapseIcon);
            }

            let expandSlot = document.createElement('slot');
            expandSlot.setAttribute('name', 'expand');

            let collapseSlot = document.createElement('slot');
            collapseSlot.setAttribute('name', 'collapse');

            button.appendChild(expandSlot);
            button.appendChild(collapseSlot);
        }

        item.appendChild(button);

        if(this.selection === 'multiple')
            item.appendChild(checkbox);

        label.appendChild(slotElement);
        item.appendChild(label);

        native.appendChild(item);
        native.appendChild(children);

        fragment.appendChild(native);

        this.checkbox = checkbox;
        this.native = native;
        this.button = button;
        this.childrenElement = children;
        this.childrenSlot = slot;

        return fragment;
    }

    /**
     * Executes operations to be performed after the draw action is completed.
     * If the state indicates it is expanded, toggles its children.
     * Additionally, sets up an event listener on the button element to handle toggling children upon click.
     * @returns {void} Does not return a value.
     */
    afterDraw() {
        if(this.expanded)
            this.toggleChildren();

        this.button.addEventListener('click', this.toggleChildren.bind(this));
    }

    /**
     * Determines if the current item is a nested item within a tree structure.
     * Checks if the item's parent element exists and is also a tree item.
     * @returns {boolean} Returns true if the current item is a nested tree item; otherwise, false.
     */
    isNestedItem() {
        const parent = this.parentElement;
        return !!parent && this.isTreeItem(parent);
    }

    /**
     * Checks whether the given node is a tree item.
     * @param {object} node The node to check.
     * @returns {boolean} Returns true if the node is an Element and has a class name of 'TreeItem', otherwise false.
     */
    isTreeItem(node) {
        return node instanceof Element && node.className === 'TreeItem';
    }

    /**
     * Toggles the visibility state of the children element and updates the class of the parent element.
     * The method toggles the 'open' class on the children elements and the 'expanded' class on the parent element,
     * effectively showing or hiding the children and indicating the expanded state.
     * @returns {void} Does not return a value.
     */
    toggleChildren() {
        this.childrenElement.classList.toggle('open');
        this.native.classList.toggle('expanded');
    }

    /**
     * Retrieves the child items from the `childrenSlot` that match specific criteria.
     * @param {object} [options] Configuration options.
     * @param {boolean} [options.includeDisabled] Determines whether disabled items should be included in the result. Defaults to true.
     * @returns {Array} An array of child items that are valid tree items and meet the criteria specified in the options.
     */
    getChildrenItems(options = {}) {
        const includeDisabled = options.includeDisabled ?? true; // Ak nie je zadané, predvolená hodnota je true

        if (!this.childrenSlot) {
            return []; // Ak `childrenSlot` neexistuje, vráti prázdne pole
        }

        return [...this.childrenSlot.assignedElements({ flatten: true })]
          .filter(item => this.isTreeItem(item) && (includeDisabled || !item.disabled));
    }

    /**
     * Retrieves all descendant children of the current object in a flattened array structure.
     * @param {object} [options] An optional object specifying filters or configurations for retrieving children.
     * @returns {Array} An array containing all children and their descendants in a flat structure.
     */
    getAllChildrenFlat(options = {}) {
        const directChildren = this.getChildrenItems(options);
        return directChildren.flatMap(child =>
          [child, ...child.getAllChildrenFlat(options)]
        );
    }
}