import { default as WJElement, WjElementUtils, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `Toast` is a custom web component that represents a toast notification.
 * @summary This element represents a toast notification.
 * @documentation https://elements.webjet.sk/components/toast
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native part
 * @cssproperty {string} headline - Specifies the headline text of the toast. Represents the main title or heading displayed in the toast.
 * @cssproperty {boolean} open - Indicates whether the toast is currently open (visible). A value of `true` shows the toast, while `false` hides it.
 * @cssproperty {number} duration - Determines the duration (in milliseconds) for which the toast is displayed. After this time, the toast will automatically close unless it is manually closed.
 * @cssproperty {boolean} closable - Specifies whether the toast can be manually closed by the user. If `true`, the toast will include a close button or mechanism.
 * @cssproperty {string} color - Defines the color of the toast. Accepts any valid CSS color value such as `hex`, `RGB`, or named colors.
 * @cssproperty {boolean} countdown - Indicates whether a countdown is displayed in the toast. When `true`, a visual countdown timer is shown to indicate the remaining time before the toast closes.
 * @slot - The content of the toast.
 * @slot media - The media of the toast.
 * // @fires wje-toast:after-show - Fired after the toast is shown.
 * // @fires wje-toast:after-hide - Fired after the toast is hidden.
 */

export default class TreeItem extends WJElement {
    /**
     * Creates an instance of Toast.
     */
    constructor() {
        super();

        this._selection = 'single';
    }

    set selected(value) {
        this.removeAttribute('selected');

        if(value)
            this.setAttribute('selected', '');
    }

    get selected() {
        return this.hasAttribute('selected');
    }

    set selection(value) {
        this._selection = value || 'single';
    }

    get selection() {
        return this._selection;
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

    beforeDraw(context, appStoreObj, params) {
        if (this.isNestedItem())
            this.slot = 'children';
    }

    /**
     * Draw method for the toast notification.
     * @returns {object} Document fragment
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.setAttribute('part', 'native');
        native.classList.add('native-tree-item');

        let item = document.createElement('div');
        item.classList.add('item');

        let indent = document.createElement('div');
        indent.classList.add('indent');

        let button = document.createElement('div');
        button.classList.add('toggle');

        let checkbox = document.createElement('wje-checkbox');
        if(this.selected)
            checkbox.setAttribute('checked', '');

        let label = document.createElement('slot');

        let children = document.createElement('div');
        children.classList.add('children');

        let slot = document.createElement('slot');
        slot.setAttribute('name', 'children');
        children.appendChild(slot);

        // item.appendChild(indent);
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

    afterDraw() {
        this.button.addEventListener('click', this.toggleChildren.bind(this));
        this.checkbox.addEventListener('wje-toggle:change', (e) => {

            console.log("CHECKBOX CHANGED", e);
            this.selected = e.detail.checked;
            // e.stopPropagation();
        });
    }

    isNestedItem() {
        const parent = this.parentElement;
        return !!parent && this.isTreeItem(parent);
    }

    isTreeItem(node) {
        console.log(node, node instanceof Element, node.className === 'TreeItem');
        // return true;
        return node instanceof Element && node.className === 'TreeItem';
    }

    toggleChildren() {
        console.log("SOM TU 1");
        this.childrenElement.classList.toggle('open');
        this.native.classList.toggle('expanded');
        console.log("SOM TU 2");
    }

    getChildrenItems(options = {}) {
        const includeDisabled = options.includeDisabled ?? true; // Ak nie je zadané, predvolená hodnota je true

        if (!this.childrenSlot) {
            return []; // Ak `childrenSlot` neexistuje, vráti prázdne pole
        }

        return [...this.childrenSlot.assignedElements({ flatten: true })]
          .filter(item => item.tagName === 'WJE-TREE-ITEM' && (includeDisabled || !item.disabled));
    }
}