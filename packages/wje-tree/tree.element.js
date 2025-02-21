import { default as WJElement, WjElementUtils, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';


/**
 * Represents a custom Tree component that extends the functionality of WJElement.
 * This component is used to create a hierarchical tree structure with selectable items.
 */

export default class Tree extends WJElement {
    /**
     * Creates an instance of Toast.
     */
    constructor() {
        super();
    }

    set selection(value) {
        this.setAttribute('selection', value);
    }

    get selection() {
        return this.getAttribute('selection') || 'single';
    }

    /**
     * The class name for the component.
     * @type {string}
     */
    className = 'Tree';

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

    beforeDraw(context, appStoreObj, params) {
        const items = this.querySelectorAll('wje-tree-item');
        items?.forEach(item => {
            item.selection = this.selection;

            this.getExpandCollapseIcon(item,'expand');
            this.getExpandCollapseIcon(item,'collapse');

        });
    }

    /**
     * Draw method for the toast notification.
     * @returns {object} Document fragment
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.setAttribute('part', 'native');
        native.classList.add('native-tree');

        let slot = document.createElement('slot');

        native.appendChild(slot);

        fragment.appendChild(native);

        return fragment;
    }

    /**
     * Called after the draw process of the component is completed.
     * Typically used to add event listeners or perform operations
     * that are dependent on the component's drawn state.
     * @returns {void} This method does not return a value.
     */
    afterDraw() {
        this.addEventListener('click', this.handleClick);
    }

    /**
     * Handles the click event triggered by the user interaction.
     * Identifies the closest tree item element to the event target and sets it
     * as the selected item. Ensures that only one item is selected at a time, resetting
     * the selection state for all other items.
     * @param {Event} e The click event object.
     */
    handleClick = (e) => {
        let selectedItem = e.target.closest('wje-tree-item');
        let isClickButton = e.composedPath().some((el) => el?.classList?.contains('toggle'));
        if(isClickButton)
            return;

        if (this.selection === 'single') {
            if (selectedItem) {
                for (let item of this.getAllItems()) {
                    item.selected = item === selectedItem;
                }
            }
        } else if (this.selection === 'multiple') {
            let children = selectedItem.getAllChildrenFlat();
            let selectedItemStatus = !selectedItem.selected;
            selectedItem.selected = selectedItemStatus;

            this.updateCheckboxState(selectedItem);

            // for(let item of children) {
            //     item.selected = selectedItemStatus;
            // }
        }
    }

    /**
     * Retrieves all items that match the selector 'wje-tree-item' within the current context.
     * @returns {Array<Element>} An array of all matching DOM elements.
     */
    getAllItems() {
        return [...this.querySelectorAll('wje-tree-item')];
    }

    /**
     * Retrieves and appends an expand/collapse icon to a given item based on the provided status.
     * @param {HTMLElement} item The DOM element to which the icon will be appended.
     * @param {string} status The status indicating which icon to retrieve (e.g., "expand" or "collapse").
     * @returns {void} This method does not return a value. If the icon matching the given status is not found, a warning is logged.
     */
    getExpandCollapseIcon(item, status) {
        let icon = this.querySelector(`[slot="${status}"]`);
        if (!icon) {
            console.warn(`Icon with slot "${status}" was not found.`);
            return;
        }

        let iconClone = icon.cloneNode(true);
        item.appendChild(iconClone);
    }









    updateCheckboxState(changedItem, isInitialSync = false) {
        this.isInitialSync = isInitialSync;
        this.propagateStateDownwards(changedItem);
        this.propagateStateUpwards(changedItem);
    }

    updateParentState(item) {
        const children = item.getChildrenItems({ includeDisabled: false });

        if (children.length) {
            const areAllChildrenChecked = children.every(child => child.selected);
            const areAllChildrenUnchecked = children.every(child => !child.selected && !child.indeterminate);

            item.selected = areAllChildrenChecked;
            item.indeterminate = !areAllChildrenChecked && !areAllChildrenUnchecked;
        }
    }

    propagateStateUpwards(item) {
        const parent = item.parentElement?.closest('wje-tree-item');

        if (parent) {
            this.updateParentState(parent);
            this.propagateStateUpwards(parent);
        }
    }

    propagateStateDownwards(item) {
        const isChecked = item.selected;

        item.getChildrenItems().forEach(child => {
            child.selected = this.isInitialSync ? (isChecked || child.selected) : (!child.disabled && isChecked);
            this.propagateStateDownwards(child);
        });

        if (this.isInitialSync) {
            this.updateParentState(item);
        }
    }
}