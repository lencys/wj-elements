var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
const styles = "/*\n[ WJ Tree Item ]\n*/\n\n:host {\n    .native-tree-item {\n        position: relative;\n        display: flex;\n        align-items: stretch;\n        flex-direction: column;\n        &.multiple {\n            .item {\n                border-radius: 0 !important;\n            }\n        }\n        .item {\n            display: flex;\n            align-items: center;\n            padding-inline: var(--wje-tree-item-padding-inline);\n            padding-block: var(--wje-tree-item-padding-block);\n            border-radius: var(--wje-tree-item-border-radius);\n            background-color: var(--wje-tree-item-background);\n            color: var(--wje-tree-item-color);\n\n            &:hover {\n                background-color: var(--wje-tree-item-background-hover);\n                color: var(--wje-tree-item-color-hover);\n            }\n\n            .indent {\n                display: block;\n                width: 1em;\n                flex-shrink: 0;\n            }\n\n            .toggle {\n                font-size: var(--wje-tree-item-font-size);\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                box-sizing: content-box;\n                width: var(--wje-tree-item-indent);\n                height: var(--wje-tree-item-indent);\n                flex-shrink: 0;\n            }\n\n            wje-checkbox {\n                font-size: var(--wje-tree-item-font-size);\n                margin: 0;\n            }\n\n            .content {\n                font-size: var(--wje-tree-item-font-size);\n            }\n\n            slot {\n                display: flex;\n                align-items: center;\n            }\n\n            slot:not([name])::slotted(wje-icon) {\n                margin-right: var(--wje-spacing-2x-small);\n            }\n\n            slot[name='end'] {\n                margin-inline-start: auto;\n            }\n        }\n        .children {\n            font-size: calc(1rem + var(--wje-tree-item-indent, var(--wje-spacing-medium)));\n            padding-inline-start: var(--wje-tree-item-indent, var(--wje-spacing-medium));\n            display: none;\n            &.open {\n                font-size: var(--wje-tree-item-font-size);\n                display: block;\n\n                ::before {\n                    content: '';\n                    position: absolute;\n                    top: var(--wje-tree-item-indent);\n                    bottom: 5px;\n                    left: calc(1em - (var(--wje-spacing-3x-small) * 2) - (var(--wje-tree-item-indent-guid-width) / 2));\n                    border-inline-end: var(--wje-tree-item-indent-guid-width) solid var(--wje-border-color);\n                    z-index: 1;\n                }\n            }\n        }\n    }\n\n    .native-tree-item.expanded .item slot[name='expand'],\n    .native-tree-item:not(.expanded) slot[name='collapse'] {\n        display: none;\n    }\n}\n\n:host([selected]) {\n    .item {\n        background-color: var(--wje-tree-item-background-selected);\n        color: var(--wje-tree-item-color-selected);\n    }\n}\n:host([slot-hover-visible]) {\n    .item {\n        &:hover {\n            slot[name='start'], slot[name='end'] {\n                visibility: visible;\n            }\n        }\n        slot[name='start'], slot[name='end'] {\n            visibility: hidden;\n        }\n    }\n}\n";
class TreeItem extends WJElement {
  /**
   * Creates an instance of Toast.
   */
  constructor() {
    super();
    /**
     * The class name for the component.
     * @type {string}
     */
    __publicField(this, "className", "TreeItem");
    this._selection = "single";
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
      this.setAttribute("expanded", "");
    } else {
      this.removeAttribute("expanded");
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
    return this.hasAttribute("expanded");
  }
  /**
   * Sets the 'selected' attribute of the element. Removes the attribute if the provided value is falsy; otherwise, sets it.
   * @param {boolean} value The value indicating whether the element should have the 'selected' attribute.
   */
  set selected(value) {
    this.removeAttribute("selected");
    if (value) this.setAttribute("selected", "");
  }
  /**
   * Getter method for determining if the 'selected' attribute is present on the element.
   * @returns {boolean} Returns true if the 'selected' attribute is present, otherwise false.
   */
  get selected() {
    return this.hasAttribute("selected");
  }
  /**
   * Sets the selection mode for the component.
   * @param {string} value The selection mode to apply. Defaults to 'single'
   * if no value is provided. Possible options may be
   * specific to the implementation of the component
   * (e.g., 'single', 'multiple').
   */
  set selection(value) {
    this._selection = value || "single";
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
    this.removeAttribute("indeterminate");
    if (value) this.setAttribute("indeterminate", "");
  }
  /**
   * Retrieves the state of the indeterminate attribute.
   * @returns {boolean} True if the indeterminate attribute is present, otherwise false.
   */
  get indeterminate() {
    return this.hasAttribute("indeterminate");
  }
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
    this.isShadowRoot = "open";
    this.syncAria();
  }
  connectedCallback() {
    var _a;
    (_a = super.connectedCallback) == null ? void 0 : _a.call(this);
    if (this.isNestedItem()) this.slot = "children";
  }
  /**
   * Returns the list of attributes to observe for changes.
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return ["selected", "indeterminate"];
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
    if (!this.checkbox) {
      this.syncAria();
      return;
    }
    if (name === "selected") {
      if (this.selected) {
        this.checkbox.checked = true;
      } else {
        this.checkbox.checked = false;
      }
    }
    if (name === "indeterminate" && !this.selected) {
      this.checkbox.removeAttribute("indeterminate");
      this.checkbox.removeAttribute("checked");
      if (this.indeterminate) this.checkbox.setAttribute("indeterminate", "");
    }
    this.syncAria();
  }
  /**
   * Custom logic executed before the draw process begins.
   * Determines and sets the appropriate slot if the current item is nested.
   * @returns {void} No return value.
   */
  beforeDraw() {
    var _a;
    if (this.isNestedItem()) this.slot = "children";
    if ((_a = this.closest("wje-tree")) == null ? void 0 : _a.hasAttribute("slot-hover-visible"))
      this.setAttribute("slot-hover-visible", "");
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
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-tree-item", this.selection === "multiple" ? "multiple" : "single");
    let slotStart = document.createElement("slot");
    slotStart.setAttribute("name", "start");
    let item = document.createElement("div");
    item.setAttribute("part", "item");
    item.classList.add("item");
    let indent = document.createElement("div");
    indent.classList.add("indent");
    let button = document.createElement("div");
    button.classList.add("toggle");
    let checkbox = document.createElement("wje-checkbox");
    if (this.selected) checkbox.setAttribute("checked", "");
    let label = document.createElement("div");
    label.setAttribute("part", "label");
    label.classList.add("content");
    let slotElement = document.createElement("slot");
    let children = document.createElement("div");
    children.classList.add("children");
    let slot = document.createElement("slot");
    slot.setAttribute("name", "children");
    children.appendChild(slot);
    let slotEnd = document.createElement("slot");
    slotEnd.setAttribute("name", "end");
    item.appendChild(slotStart);
    item.appendChild(indent);
    if (this.querySelectorAll(":scope > wje-tree-item").length > 0) {
      if (this.querySelectorAll('[slot="expand"]').length < 1) {
        let expandIcon = document.createElement("wje-icon");
        expandIcon.setAttribute("name", "chevron-right");
        expandIcon.setAttribute("slot", "expand");
        this.appendChild(expandIcon);
      }
      if (this.querySelectorAll('[slot="collapse"]').length < 1) {
        let collapseIcon = document.createElement("wje-icon");
        collapseIcon.setAttribute("name", "chevron-down");
        collapseIcon.setAttribute("slot", "collapse");
        this.appendChild(collapseIcon);
      }
      let expandSlot = document.createElement("slot");
      expandSlot.setAttribute("name", "expand");
      let collapseSlot = document.createElement("slot");
      collapseSlot.setAttribute("name", "collapse");
      button.appendChild(expandSlot);
      button.appendChild(collapseSlot);
    }
    item.appendChild(button);
    if (this.selection === "multiple") item.appendChild(checkbox);
    label.appendChild(slotElement);
    item.appendChild(label);
    item.appendChild(slotEnd);
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
    if (this.expanded) this.toggleChildren();
    this.button.addEventListener("click", this.toggleChildren.bind(this));
    this.setAttribute("tabindex", "0");
    this.syncAria();
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
    return node instanceof Element && node.className === "TreeItem";
  }
  /**
   * Toggles the visibility state of the children element and updates the class of the parent element.
   * The method toggles the 'open' class on the children elements and the 'expanded' class on the parent element,
   * effectively showing or hiding the children and indicating the expanded state.
   * @returns {void} Does not return a value.
   */
  toggleChildren() {
    this.childrenElement.classList.toggle("open");
    this.native.classList.toggle("expanded");
    this.syncAria();
  }
  /**
   * Syncs ARIA attributes on the host element.
   */
  syncAria() {
    var _a, _b;
    const hasChildren = this.querySelectorAll(":scope > wje-tree-item").length > 0;
    const expanded = hasChildren ? (_b = (_a = this.native) == null ? void 0 : _a.classList) == null ? void 0 : _b.contains("expanded") : void 0;
    if (this.selection === "multiple") {
      const checked = this.indeterminate ? "mixed" : this.selected ? "true" : "false";
      this.setAriaState({
        role: "treeitem",
        checked,
        expanded
      });
    } else {
      this.setAriaState({
        role: "treeitem",
        selected: this.selected,
        expanded
      });
    }
  }
  /**
   * Retrieves the child items from the `childrenSlot` that match specific criteria.
   * @param {object} [options] Configuration options.
   * @param {boolean} [options.includeDisabled] Determines whether disabled items should be included in the result. Defaults to true.
   * @returns {Array} An array of child items that are valid tree items and meet the criteria specified in the options.
   */
  getChildrenItems(options = {}) {
    const includeDisabled = options.includeDisabled ?? true;
    const assigned = this.childrenSlot ? this.childrenSlot.assignedElements({ flatten: true }) : [];
    const direct = assigned.length ? assigned : Array.from(this.querySelectorAll(":scope > wje-tree-item"));
    return direct.filter(
      (item) => this.isTreeItem(item) && (includeDisabled || !item.disabled)
    );
  }
  /**
   * Retrieves all descendant children of the current object in a flattened array structure.
   * @param {object} [options] An optional object specifying filters or configurations for retrieving children.
   * @returns {Array} An array containing all children and their descendants in a flat structure.
   */
  getAllChildrenFlat(options = {}) {
    const directChildren = this.getChildrenItems(options);
    return directChildren.flatMap((child) => [child, ...child.getAllChildrenFlat(options)]);
  }
}
TreeItem.define("wje-tree-item", TreeItem);
export {
  TreeItem as default
};
//# sourceMappingURL=wje-tree-item.js.map
