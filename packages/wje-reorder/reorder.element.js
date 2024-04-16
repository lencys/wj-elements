import WJElement from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * The `Reorder` class is a subclass of the `WJElement` class. It provides functionality for reordering items in a list by dragging and dropping.
 */
export default class Reorder extends WJElement {
  /**
   * Constructs a new instance of the `Reorder` class.
   */
  constructor() {
    super();
    this.className = "Reorder";
    this.dragEl = null;
    this.items = [];
    this.prevRect = null;
    this.originalIndex = null;
  }

  /**
   * Gets the CSS style sheet for the `Reorder` class.
   * @returns {string} The CSS style sheet.
   */
  static get cssStyleSheet() {
    return styles;
  }

  /**
   * Sets up the attributes for the `Reorder` class.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }

  /**
   * Creates and returns a document fragment containing the container element and slot for items.
   * @param {any} context - The context.
   * @param {any} store - The store.
   * @param {any} params - The parameters.
   * @returns {DocumentFragment} The document fragment.
   */
  draw(context, store, params) {
    const fragment = document.createDocumentFragment();
    const container = document.createElement("div");
    container.classList.add("container");
    container.setAttribute("part", "native");
    const slot = document.createElement("slot");
    container.appendChild(slot);
    fragment.appendChild(container);
    this.container = container;
    return fragment;
  }

  /**
   * Adds drag and drop functionality to the items after they have been rendered.
   */
  afterDraw() {
    const slots = this.shadowRoot.querySelectorAll("slot");
    slots.forEach((slot) => {
      slot.classList.add("item");
      slot.assignedElements().forEach((e) => {
        e.classList.add("item");
        e.draggable = true;
        e.addEventListener("dragstart", this.onDragStart.bind(this), false);
        e.addEventListener("touchstart", this.onDragStart.bind(this), false);
        e.addEventListener("dragenter", this.onDragEnter.bind(this), false);
        e.addEventListener("dragover", this.onDragOver.bind(this), false);
        e.addEventListener("dragleave", this.onDragLeave.bind(this), false);
        e.addEventListener("drop", this.onDrop.bind(this), false);
        e.addEventListener("dragend", this.onDragEnd.bind(this), false);
        e.addEventListener("touchend", this.onDragEnd.bind(this), false);
      });
    });
  }

  /**
   * Handles the drag start event and sets the necessary data for the drag operation.
   * @param {DragEvent} e - The drag start event.
   */
  onDragStart(e) {
    this.dragEl = e.currentTarget;
    this.prevRect = this.dragEl.getBoundingClientRect();
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", `${this.dragEl.innerHTML}`);
    this.dragEl.style.opacity = "0.5";
    this.originalIndex = [...this.dragEl.parentNode.children].indexOf(
      this.dragEl
    );
  }

  /**
   * Handles the drag over event and reorders the items based on the drag position.
   * @param {DragEvent} e - The drag over event.
   */
  onDragOver(e) {
    e.preventDefault();
    const droppedElement = e.currentTarget;
    if (this.dragEl !== droppedElement) {
      const parent = droppedElement.parentNode;
      const dragIndex = Array.from(parent.children).indexOf(this.dragEl);
      const dropIndex = Array.from(parent.children).indexOf(droppedElement);
      const moveDirection = dragIndex < dropIndex ? 1 : -1; // 1 for moving down, -1 for moving up
      droppedElement.style.transform = `translateY(${
        moveDirection === 1 ? "-15px" : "15px"
      })`;
      droppedElement.style.transition = "transform .3s";
      if (dragIndex < dropIndex) {
        parent.insertBefore(this.dragEl, droppedElement.nextSibling);
      } else {
        parent.insertBefore(this.dragEl, droppedElement);
      }

      this.dragEl.classList.remove("drag--moving");
      document.querySelectorAll(".item").forEach((item) => {
        item.classList.remove("drag--hover");
      });
    }
  }

  /**
   * Handles the drag enter event and adds a visual indication of the drop target.
   * @param {DragEvent} e - The drag enter event.
   */
  onDragEnter(e) {
    e.currentTarget.classList.add("drag--hover");
  }

  /**
   * Handles the drag leave event and removes the visual indication of the drop target.
   * @param {DragEvent} e - The drag leave event.
   */
  onDragLeave(e) {
    e.currentTarget.classList.remove("drag--hover");
  }

  /**
   * Handles the drop event and reorders the items based on the drop position.
   * @param {DragEvent} e - The drop event.
   */
  onDrop(e) {
    const droppedElement = e.currentTarget;
    if (this.dragEl !== droppedElement) {
      e.preventDefault();
      droppedElement.style.transform = "";
      droppedElement.style.transition = "";
      const parent = droppedElement.parentNode;
      const dragIndex = Array.from(parent.children).indexOf(this.dragEl);
      const dropIndex = Array.from(parent.children).indexOf(droppedElement);
      if (dragIndex < dropIndex) {
        parent.insertBefore(this.dragEl, droppedElement.nextSibling);
      } else {
        parent.insertBefore(this.dragEl, droppedElement);
      }
    }
  }

  /**
   * Handles the drag end event and dispatches a custom event with the new order of the items.
   * @param {DragEvent} e - The drag end event.
   */
  onDragEnd(e) {
    this.dragEl.classList.remove("drag--moving");
    this.dragEl.style.transform = "";
    this.dragEl.style.transition = "";

    const parent = this.dragEl.parentNode;
    const newIndex = Array.from(parent.children).indexOf(this.dragEl);
    parent.childNodes.forEach((item) => {
      if (item.nodeType === 1) {
        item.style.transform = "";
      }
    });
    const newOrder = Array.from(parent.children).map(
      (el) => el.textContent || el.innerText
    );
    this.dispatchChange(this.originalIndex, newIndex, newOrder);

    this.dragEl.style.opacity = "1";
  }

  /**
   * Dispatches a custom event with the original and new indexes of the dragged item and the new order of the items.
   * @param {number} from - The original index of the dragged item.
   * @param {number} to - The new index of the dragged item.
   * @param {string[]} order - The new order of the items.
   */
  dispatchChange(from, to, order) {
    console.log("FROM:", from);
    console.log("TO:", to);
    console.log("ORDER:", order);
    this.dispatchEvent(
      new CustomEvent("wje-reorder:change", {
        detail: { from, to, order },
      })
    );
  }
}
