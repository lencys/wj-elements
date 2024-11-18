import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `Reorder` is a custom web component that represents a reorder.
 * It extends from `WJElement`.
 * @summary This element represents a reorder.
 * @documentation https://elements.webjet.sk/components/reorder
 * @status stable
 * @augments WJElement
 * @csspart native - The native part of the reorder.
 * @slot - The default slot for the reorder.
 * // @fires wje-reorder:change - Event fired when the reorder is changed.
 * @tag wje-reorder
 */

export default class Reorder extends WJElement {

  /**
   * Creates an instance of Select.
   * @class
   */
  constructor() {
    super();
    this.dragEl = null;
    this.items = [];
    this.originalIndex = null;
    this.isDragging = false;
    this.offsetX = 0;
    this.offsetY = 0;
    this.cloneEl = null; 
  }

  /**
   * The class name for the component.
   * @type {string}
   */
  className = "Select";

  /**
   * Returns the CSS styles for the component.
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return styles;
  }

  /**
   * Returns the list of attributes to observe for changes.
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return [];
  }

  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }

  /**
   * Draws the component after it is connected to the DOM.
   * @returns {DocumentFragment}
   */
  draw() {
    const fragment = document.createDocumentFragment();

    const container = document.createElement("div");
    container.classList.add("container");
    container.setAttribute("part", "native");

    const slot = document.createElement("slot");
    slot.classList.add("reorder-items");

    container.appendChild(slot);

    fragment.appendChild(container);

    this.container = container;

    return fragment;
  }

  /**
   * Adds event listeners after the component is drawn.
   */
  afterDraw() {
    const items = this.querySelectorAll("wje-reorder-item");
    const dropZones = this.querySelectorAll("wje-reorder-dropzone");
    this.container.classList.add(this.hasAttribute('reverse') ? "reversed" : "basic");

    if (dropZones) {
      dropZones.forEach((dropZone) => {
        this.container.classList.remove("container");
        this.container.classList.add("container-w-dropzones");
      });
    }

    if (items) {
      items.forEach((item) => {
        const handles = item.querySelectorAll("[slot=handle]");
        const draggableElement = handles.length > 0 ? handles : [item];

        draggableElement.forEach((element) => {
          this.attachEventListeners(element);
        });
      });
    }
  }

  /**
   * Attaches event listeners to the element.
   * @param element
   */
  attachEventListeners(element) {
    element.addEventListener("mousedown", this.mouseDown.bind(this), false);
    element.addEventListener("touchstart", this.touchStart.bind(this), false);
    element.addEventListener("dragstart", this.dragStart.bind(this), false);
  }

  /**
   * Handles the mouse down event.
   * @param {object} e
   */
  mouseDown(e) {
    this.startDragging(e.clientX, e.clientY, e.currentTarget);
    document.addEventListener("mousemove", this.mouseMove.bind(this), false);
    document.addEventListener("mouseup", this.mouseUp.bind(this), false);
    document.body.style.userSelect = "none"; 
  }

  /**
   * Handles the touch start event.
   * @param e
   */
  touchStart(e) {
    const touch = e.touches[0];
    this.startDragging(touch.clientX, touch.clientY, e.currentTarget);
    document.addEventListener("touchmove", this.touchMove.bind(this), false);
    document.addEventListener("touchend", this.touchEnd.bind(this), false);
    document.body.style.userSelect = "none"; 
  }

  /**
   * Initializes the dragging process for a reorderable item.
   * @param {number} clientX The x-coordinate of the mouse pointer when the drag starts.
   * @param {number} clientY The y-coordinate of the mouse pointer when the drag starts.
   * @param {HTMLElement} target The target element where the drag event originated.
   */
  startDragging(clientX, clientY, target) {
    if (this.hasAttribute("disabled")) {
      return;
    }

    this.isDragging = true;
    this.dragEl = target.closest("wje-reorder-item");

    this.createClone();

    this.dragEl.style.opacity = "0.3";

    const rect = this.dragEl.getBoundingClientRect();
    this.offsetX = clientX - rect.left;
    this.offsetY = clientY - rect.top;

    this.dragEl.classList.add("dragging");

    this.originalIndex = [...this.dragEl.parentNode.children].indexOf(this.dragEl);
    this.originalParent = this.dragEl.parentNode;
  }

  /**
   * Handles the mouse move event.
   * @param e
   */
  mouseMove(e) {
    if (!this.isDragging) return;
    this.moveElement(e.pageX, e.pageY);

    if (this.cloneEl) {
      this.cloneEl.style.left = `${e.pageX - this.offsetX}px`;
      this.cloneEl.style.top = `${e.pageY -  this.offsetY}px`;
    }
  }

  /**
   * Handles the `touchmove` event and updates the position of the dragged element.
   * @param {TouchEvent} e The touch event containing touch position data.
   */
  touchMove(e) {
    if (!this.isDragging) return;
    const touch = e.touches[0];
    this.moveElement(touch.pageX, touch.pageY);
  }

  /**
   * Updates the position of the dragged element and handles reordering logic based on the mouse position.
   * @param {number} pageX The x-coordinate of the mouse pointer relative to the viewport during the move event.
   * @param {number} pageY The y-coordinate of the mouse pointer relative to the viewport during the move event.
   */
  moveElement(pageX, pageY) {
    const scrollX = window.scrollX || document.documentElement.scrollLeft;
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const adjustedPageX = pageX - scrollX;
    const adjustedPageY = pageY - scrollY;

    this.dragEl.style.left = `${adjustedPageX}px`;
    this.dragEl.style.top = `${adjustedPageY}px`;

    if (this.cloneEl) {
        this.cloneEl.style.left = `${adjustedPageX}px`;
        this.cloneEl.style.top = `${adjustedPageY}px`;
    }

    const items = this.querySelectorAll("wje-reorder-item");
    items.forEach(item => {
        if (item === this.dragEl) return;

        const boundingBox = item.getBoundingClientRect();
        const mouseY = adjustedPageY - boundingBox.top;
        const mouseYPercent = (mouseY / boundingBox.height) * 100;

        if (mouseYPercent > 30 && this.isMovingDown(item)) {
            item.parentNode.insertBefore(this.dragEl, item.nextSibling);
        } else if (mouseYPercent < 30 && !this.isMovingDown(item)) {
            item.parentNode.insertBefore(this.dragEl, item);
        }
    });
  }

  /**
   * Handles the mouse up event.
   */
  mouseUp() {
    this.stopDragging();
    document.removeEventListener("mousemove", this.mouseMove.bind(this), false);
    document.removeEventListener("mouseup", this.mouseUp.bind(this), false);

    if (this.cloneEl) {
      this.cloneEl.remove();
      this.cloneEl = null;
    }

    if (this.dragEl) {
      this.dragEl.style.opacity = "1";
    }
  }

  /**
   * Handles the touch end event.
   */
  touchEnd() {
    this.stopDragging();
    document.removeEventListener("touchmove", this.touchMove.bind(this), false);
    document.removeEventListener("touchend", this.touchEnd.bind(this), false);
  }

  /**
   * Stops dragging the element.
   */
  stopDragging() {
    if (!this.isDragging) return;

    this.isDragging = false;
    this.dragEl.classList.remove("dragging");
    this.dragEl.style.left = "";
    this.dragEl.style.top = "";

    const parent = this.dragEl.parentNode;
    const newIndex = Array.from(parent.children).indexOf(this.dragEl);

    const newOrder = Array.from(parent.children).map((el) => {
      const clonedNode = el.cloneNode(true);
      const handle = clonedNode.querySelector(".handle");
      if (handle) {
        handle.remove();
      }
      return clonedNode.innerText.trim();
    });

    this.dispatchChange(this.originalIndex, newIndex, newOrder);
    document.body.style.userSelect = ""; 
  }

  /**
   * Prevents the default behavior of the `dragstart` event.
   * @param {DragEvent} e The drag event triggered when a drag operation starts.
   */
  dragStart(e) {
    e.preventDefault();
  }

  /**
   * Creates a clone of the element.
   */
  createClone() {
    this.cloneEl = this.dragEl.cloneNode(true);
    this.cloneEl.style.position = "absolute";
    this.cloneEl.style.pointerEvents = "none";
    this.cloneEl.style.visibility = "visible";

    document.body.appendChild(this.cloneEl);
  }

  /**
   * Checks if the dragged element is moving down.
   * @param droppedElement
   * @returns {boolean}
   */
  isMovingDown(droppedElement) {
    const parent = droppedElement.parentNode;
    const dragIndex = Array.from(parent.children).indexOf(this.dragEl);
    const dropIndex = Array.from(parent.children).indexOf(droppedElement);

    return dragIndex < dropIndex;
  }

  /**
   * Dispatches a custom event to signal that a reordering operation has occurred.
   * @param {number} from The original index of the dragged item.
   * @param {number} to The new index of the dragged item after reordering.
   * @param {Array<number>} order The updated order of items after the reordering.
   * // @fires wje-reorder:change - Dispatched when the reordering is completed.
   * The event includes details about the initial position, the new position, and the new order.
   */
  dispatchChange(from, to, order) {
    this.dispatchEvent(
      new CustomEvent("wje-reorder:change", {
        detail: { from, to, order },
      })
    );
  }
}
