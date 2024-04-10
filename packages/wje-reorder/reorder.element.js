import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * The `Reorder` class is a subclass of the `WJElement` class. It represents a custom element that allows users to reorder items by dragging and dropping them within a container.
 */
export default class Reorder extends WJElement {
  /**
   * Creates a new instance of the `Reorder` class.
   */
  constructor() {
    super();
    this.sortableList = null;
  }

  /**
   * The CSS class name for the `Reorder` element.
   */
  className = "Reorder";

  /**
   * The CSS style sheet for the `Reorder` element.
   */
  static get cssStyleSheet() {
    return styles;
  }

  /**
   * Sets up the attributes for the `Reorder` element.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }

  /**
   * Creates and returns a document fragment containing the container element and slot for items.
   * @param {any} context - The context of the `Reorder` element.
   * @param {any} store - The store of the `Reorder` element.
   * @param {any} params - The parameters of the `Reorder` element.
   * @returns {DocumentFragment} The created document fragment.
   */
  draw(context, store, params) {
    const fragment = document.createDocumentFragment();

    const container = document.createElement("div");
    container.classList.add("container");
    container.setAttribute("part", "native");

    const slot = document.createElement("slot");
    slot.classList.add("item");

    container.appendChild(slot);

    fragment.appendChild(container);

    this.container = container;

    return fragment;
  }

  /**
   * Adds event listeners for mouse events to enable drag and drop functionality.
   */
  afterDraw() {
    let isDragging = false;
    let currentItem = null;
    let containerOffsetY = 0;
    let initY = 0;
    let oldIndex;

    const container = document.querySelector("wje-reorder");

    const handleMouseDown = (e) => {
      const item = e.target.closest("wje-reorder-item");

      if (item) {
        isDragging = true;
        currentItem = item;
        containerOffsetY = e.clientY - currentItem.getBoundingClientRect().top;
        currentItem.classList.add("dragging");
        document.body.style.userSelect = "none";
        initY = e.clientY;
      }

      if (currentItem) {
        oldIndex = [...document.querySelectorAll("wje-reorder-item")].indexOf(currentItem);
      }
    };

    const handleMouseMove = (e) => {
      if (isDragging && currentItem) {
        const containerRect = container.getBoundingClientRect();
        const currentItemRect = currentItem.getBoundingClientRect();
        const newTop = e.clientY - containerRect.top - initY + currentItemRect.height / 2;

        if (newTop < 0) {
          currentItem.style.transform = `translateY(0px)`;
        } else if (newTop > containerRect.height - currentItemRect.height) {
          currentItem.style.transform = `translateY(${containerRect.height - currentItemRect.height}px)`;
        } else {
          currentItem.style.transform = `translateY(${newTop}px)`;
        }

        const itemSiblings = [...document.querySelectorAll("wje-reorder-item:not(.dragging)")];
        const nextItem = itemSiblings.find((sibling) => {
          return (
            e.clientY <=
            sibling.getBoundingClientRect().top + sibling.getBoundingClientRect().height / 2
          );
        });

        itemSiblings.forEach((sibling) => {
          sibling.style.marginTop = "10px";
        });

        if (nextItem) {
          nextItem.style.marginTop = `${currentItemRect.height}px`;
        }
        container.insertBefore(currentItem, nextItem);
      }
    };

    const handleMouseUp = () => {
      if (currentItem) {
        currentItem.classList.remove("dragging");
        currentItem.style.top = "auto";
        const newIndex = [...document.querySelectorAll("wje-reorder-item")].indexOf(currentItem);
        currentItem = null;
        isDragging = false;

        const itemSiblings = [...document.querySelectorAll("wje-reorder-item:not(.dragging)")];

        itemSiblings.forEach((sibling) => {
          sibling.style.marginTop = "10px";
        });

        const itemOrder = itemSiblings.map((sibling) => sibling.textContent);
        this.dispatchChange(oldIndex, newIndex, itemOrder);
      }
    };

    this.addEventListener("mousedown", handleMouseDown);
    this.addEventListener("mousemove", handleMouseMove);
    this.addEventListener("mouseup", handleMouseUp);
  }

  /**
   * Dispatches a custom event with the updated order of items.
   * @param {number} from - The index of the item before the change.
   * @param {number} to - The index of the item after the change.
   * @param {string[]} order - The updated order of items.
   */
  dispatchChange(from, to, order) {
    console.log("FROM:", from);
    console.log("TO:", to);
    console.log("ORDER:", order);
    this.dispatchEvent(
      new CustomEvent("wje-reorder:change", {
        detail: {
          from: from,
          to: to,
          order: order
        }
      })
    );
  }
}