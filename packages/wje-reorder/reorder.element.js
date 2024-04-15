import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * The `Reorder` class is a subclass of the `WJElement` class. It provides functionality for reordering items using drag and drop.
 */
export default class Reorder extends WJElement {
  /**
   * Creates a new instance of the `Reorder` class.
   */
  constructor() {
    super();
    this.className = "Reorder";
    this.draggableItem = null;
    this.items = [];
  }

  /**
   * Returns the CSS styles for the `Reorder` component.
   * @returns {string} - The CSS styles.
   */
  static get cssStyleSheet() {
    return styles;
  }

  /**
   * Sets up the attributes of the `Reorder` component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }

  /**
   * Overrides the `draw` method of the `WJElement` class to create a container with draggable items.
   * @param {CanvasRenderingContext2D} context - The rendering context.
   * @param {Object} store - The store object.
   * @param {Object} params - The parameters object.
   * @returns {DocumentFragment} - The document fragment containing the container.
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
   * Overrides the `afterDraw` method of the `WJElement` class to handle the drag and drop events.
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
   * Handles the drag start event.
   * @param {DragEvent} e - The drag event.
   */
  onDragStart(e) {
    this.dragEl = e.currentTarget;
    this.prevRect = this.dragEl.getBoundingClientRect();
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", `${this.dragEl.innerHTML}`);
    this.dragEl.style.opacity = "0.5";
    this.originalIndex = Array.from(this.dragEl.parentNode.children).indexOf(this.dragEl);
  }

  /**
   * Handles the drag over event.
   * @param {DragEvent} e - The drag event.
   */
  onDragOver(e) {
    e.preventDefault();
    const droppedElement = e.currentTarget;
    if (this.dragEl !== droppedElement) {
      const parent = droppedElement.parentNode;
      const dragIndex = Array.from(parent.children).indexOf(this.dragEl);
      const dropIndex = Array.from(parent.children).indexOf(droppedElement);

      if (dragIndex < dropIndex) {
        parent.insertBefore(this.dragEl, droppedElement.nextSibling);
      } else {
        parent.insertBefore(this.dragEl, droppedElement);
      }

      this.dragEl.classList.remove("drag--moving");
      this.dragEl.style.transform = "";
      document.querySelectorAll(".item").forEach((item) => {
        item.style.marginTop = "";
        item.style.marginBottom = "";
        item.classList.remove("drag--hover");
      });
    }
  }

  /**
   * Handles the drag enter event.
   * @param {DragEvent} e - The drag event.
   */
  onDragEnter(e) {
    e.currentTarget.classList.add("drag--hover");
  }

  /**
   * Handles the drag leave event.
   * @param {DragEvent} e - The drag event.
   */
  onDragLeave(e) {
    e.currentTarget.classList.remove("drag--hover");
  }

  /**
   * Handles the drop event.
   * @param {DragEvent} e - The drag event.
   */
  onDrop(e) {
    const droppedElement = e.currentTarget;

    if (this.dragEl !== droppedElement) {
      e.preventDefault();

      const parent = droppedElement.parentNode;
      const dragIndex = Array.from(parent.children).indexOf(this.dragEl);
      const dropIndex = Array.from(parent.children).indexOf(droppedElement);

      if (dragIndex < dropIndex) {
        parent.insertBefore(this.dragEl, droppedElement.nextSibling);
      } else {
        parent.insertBefore(this.dragEl, droppedElement);
      }

      this.dragEl.classList.remove("drag--moving");
      this.dragEl.style.transform = "";
      document.querySelectorAll(".item").forEach((item) => {
        item.style.marginTop = "";
        item.style.marginBottom = "";
        item.classList.remove("drag--hover");
      });
    }
  }

  /**
   * Handles the drag end event.
   * @param {DragEvent} e - The drag event.
   */
  onDragEnd(e) {
    this.dragEl.classList.remove("drag--moving");
    this.dragEl.style.transform = "";
    document.querySelectorAll(".item").forEach((item) => {
      item.classList.remove("drag--hover");
    });

    const newIndex = Array.from(this.dragEl.parentNode.children).indexOf(this.dragEl);
    const newOrder = Array.from(this.dragEl.parentNode.children).map(el => el.textContent || el.innerText);

    this.dispatchChange(this.originalIndex, newIndex, newOrder);

    this.dragEl.style.opacity = "1";
  }

  dispatchChange(from, to, order) {
    console.log("FROM:", from);
    console.log("TO:", to);
    console.log("ORDER:", order);
    this.dispatchEvent(
        new CustomEvent("wje-reorder:change", {
            from: from,
            to: to,
            order: order
        })
    );
  }  
}
