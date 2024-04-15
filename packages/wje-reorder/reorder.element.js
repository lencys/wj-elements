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
    const DnD = {
      dragEl: null,
      prevRect: null,

      /**
       * Handles the drag start event.
       * @param {DragEvent} e - The drag event.
       */
      onDragStart(e) {
        DnD.dragEl = this;
        DnD.prevRect = DnD.dragEl.getBoundingClientRect();
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", `${DnD.dragEl.innerHTML}`);
        DnD.dragEl.style.opacity = "0.5";
      },

      /**
       * Handles the drag over event.
       * @param {DragEvent} e - The drag event.
       */
      onDragOver(e) {
        e.preventDefault();
        const droppedElement = this;
        if (DnD.dragEl !== droppedElement) {
          const parent = droppedElement.parentNode;
          const dragIndex = Array.from(parent.children).indexOf(DnD.dragEl);
          const dropIndex = Array.from(parent.children).indexOf(droppedElement);

          if (dragIndex < dropIndex) {
            parent.insertBefore(DnD.dragEl, droppedElement.nextSibling);
          } else {
            parent.insertBefore(DnD.dragEl, droppedElement);
          }

          DnD.dragEl.classList.remove("drag--moving");
          DnD.dragEl.style.transform = "";
          document.querySelectorAll(".item").forEach((item) => {
            item.style.marginTop = "";
            item.style.marginBottom = "";
            item.classList.remove("drag--hover");
          });
        }
      },

      /**
       * Handles the drag enter event.
       * @param {DragEvent} e - The drag event.
       */
      onDragEnter(e) {
        this.classList.add("drag--hover");
      },

      /**
       * Handles the drag leave event.
       * @param {DragEvent} e - The drag event.
       */
      onDragLeave(e) {
        this.classList.remove("drag--hover");
      },

      /**
       * Handles the drop event.
       * @param {DragEvent} e - The drag event.
       */
      onDrop(e) {
        const droppedElement = this;

        if (DnD.dragEl !== droppedElement) {
          e.preventDefault();

          const parent = droppedElement.parentNode;
          const dragIndex = Array.from(parent.children).indexOf(DnD.dragEl);
          const dropIndex = Array.from(parent.children).indexOf(droppedElement);

          if (dragIndex < dropIndex) {
            parent.insertBefore(DnD.dragEl, droppedElement.nextSibling);
          } else {
            parent.insertBefore(DnD.dragEl, droppedElement);
          }

          DnD.dragEl.classList.remove("drag--moving");
          DnD.dragEl.style.transform = "";
          document.querySelectorAll(".item").forEach((item) => {
            item.style.marginTop = "";
            item.style.marginBottom = "";
            item.classList.remove("drag--hover");
          });
        }
      },

      /**
       * Handles the drag end event.
       * @param {DragEvent} e - The drag event.
       */
      onDragEnd(e) {
        DnD.dragEl.classList.remove("drag--moving");
        DnD.dragEl.style.transform = "";
        document.querySelectorAll(".item").forEach((item) => {
          item.classList.remove("drag--hover");
        });

        DnD.dragEl.style.opacity = "1";
      },
    };

    const slots = this.shadowRoot.querySelectorAll("slot");
    slots.forEach((slot) => {
      slot.classList.add("item");
      slot.assignedElements().forEach((e) => {
        e.classList.add("item");    
        e.draggable = true;
        e.addEventListener("dragstart", DnD.onDragStart, false);
        e.addEventListener("touchstart", DnD.onDragStart, false);
        e.addEventListener("dragenter", DnD.onDragEnter, false);
        e.addEventListener("dragover", DnD.onDragOver, false);
        e.addEventListener("dragleave", DnD.onDragLeave, false);
        e.addEventListener("drop", DnD.onDrop, false);
        e.addEventListener("dragend", DnD.onDragEnd, false);
        e.addEventListener("touchend", DnD.onDragEnd, false);
      });
    });
  }
}
