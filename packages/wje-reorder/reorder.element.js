import WJElement from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

export default class Reorder extends WJElement {
  constructor() {
    super();
    this.className = "Reorder";
    this.dragEl = null;
    this.items = [];
    this.originalIndex = null;
  }

  static get cssStyleSheet() {
    return styles;
  }

  setupAttributes() {
    this.isShadowRoot = "open";
  }

  draw(context, store, params) {
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

  afterDraw(context, store, params) {
    const items = this.querySelectorAll("wje-reorder-item");
    const dropZones = this.querySelectorAll("wje-reorder-dropzone");

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
          element.setAttribute("draggable", "true");
          this.attachEventListeners(element);
        });
      });
    }

    this.container.classList.add(this.hasAttribute('reverse') ? "reversed" : "basic");
  }

  onDragStart(e) {
    if (this.hasAttribute("disabled")) {
      e.preventDefault();
      return;
    }

    const dragImage = new Image();
    dragImage.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAEElEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII=";
    e.dataTransfer.setDragImage(dragImage, 0, 0);

    this.dragEl = e.currentTarget.closest("wje-reorder-item");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("text/html", `${this.dragEl.innerHTML}`);

    this.originalIndex = [...this.dragEl.parentNode.children].indexOf(
      this.dragEl
    );
    this.originalParent = this.dragEl.parentNode;
  }

  onDragOver(e) {
    console.log(e.target.parentElement.shadowRoot);
    e.preventDefault();

    const droppedElement = e.currentTarget.closest("wje-reorder-item");
    const parent = droppedElement.parentNode;

    if (this.dragEl !== droppedElement) {
      this.updateDropStyles(droppedElement, this.isMovingDown(e));
      this.updateItemsPosition(parent, droppedElement, this.isMovingDown(e));
    } else {
      droppedElement.shadowRoot.querySelector("div").classList.add("moving");
    }
  }

  onDragEnter(e) {}

  onDragLeave(e) {}

  onDrop(e) {
    e.preventDefault();

    const droppedElement = e.currentTarget.closest("wje-reorder-item");
    droppedElement.shadowRoot.querySelector("div").classList.remove("moving");

    if (!droppedElement.parentNode) return;
    const parent = droppedElement.parentNode;
    parent.insertBefore(this.dragEl, droppedElement);
  }

  onDragEnd(e) {
    const parent = this.dragEl.parentNode;
    const newIndex = Array.from(parent.children).indexOf(this.dragEl);

    [parent, this.originalParent].forEach((container) => {
      container.childNodes.forEach((item) => {
        if (item.nodeType === 1) {
          const div = item.shadowRoot.querySelector("div");
          if (div) {
            ["drag--up", "drag--down", "moving"].forEach((cls) =>
              div.classList.remove(cls)
            );
          }
        }
      });
    });

    const newOrder = Array.from(parent.children).map((el) => {
      const clonedNode = el.cloneNode(true);
      const handle = clonedNode.querySelector(".handle");
      if (handle) {
        handle.remove();
      }
      return clonedNode.innerText.trim();
    });

    this.dispatchChange(this.originalIndex, newIndex, newOrder);
  }

  attachEventListeners(element) {
    element.addEventListener("dragstart", this.onDragStart.bind(this), false);
    element.addEventListener("touchstart", this.onDragStart.bind(this), false);
    element.addEventListener("dragenter", this.onDragEnter.bind(this), false);
    element.addEventListener("dragover", this.onDragOver.bind(this), false);
    element.addEventListener("dragleave", this.onDragLeave.bind(this), false);
    element.addEventListener("drop", this.onDrop.bind(this), false);
    element.addEventListener("dragend", this.onDragEnd.bind(this), false);
    element.addEventListener("touchend", this.onDragEnd.bind(this), false);
  }

  updateDropStyles(element, isMovingDown) {
    const elementStyles = element.shadowRoot.querySelector("div").classList;

    const reverse = this.hasAttribute('reverse');
    elementStyles.toggle("drag--down", reverse ^ isMovingDown);
    elementStyles.toggle("drag--up", reverse ^ !isMovingDown);
  }

  updateItemsPosition(parent, droppedElement, isMovingDown) {
    parent.insertBefore(
      this.dragEl,
      isMovingDown ? droppedElement.nextSibling : droppedElement
    );
  }

  isMovingDown(target) {
    const parent = target.currentTarget.closest("wje-reorder-item").parentNode;
    const dragIndex = Array.from(parent.children).indexOf(this.dragEl);
    const dropIndex = Array.from(parent.children).indexOf(
      target.currentTarget.closest("wje-reorder-item")
    );

    return dragIndex < dropIndex;
  }

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
