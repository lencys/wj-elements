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

    return fragment;
  }

  afterDraw() {
    const slots = this.shadowRoot.querySelectorAll('slot');
    
    for (const slot of slots) {
      for (let e of slot.assignedElements()) {
        if (!e.classList.contains("item")) e.classList.add("item");

        // TODO fix to wje-icon "baseline-density-medium" -- doesn't work right now
        // let handle = document.createElement("span");
        // handle.classList.add("handle");
        // handle.setAttribute("part", "handle");

        // if(WjElementUtils.hasSlot(this, "handle")) {
        //   let slotHandle = document.createElement("slot");
        //   slotHandle.setAttribute("name", "handle");

        //   handle.appendChild(slotHandle);
        // } else {
        //   handle.innerHTML = `<wje-icon name="baseline-density-medium"></wje-icon>`;
        // }

        const handle = document.createElement("span");
        this.handle = handle;
        handle.classList.add("handle");
        handle.textContent = "☰"; 
        e.insertBefore(handle, e.firstChild);

        handle.style.cursor= "grab";
        
        if (this.hasAttribute('disabled')) {
          handle.style.cursor= "not-allowed";
        }

        handle.draggable = true;
        this.attachEventListeners(e);
      }
    }
  }

  onDragStart(e) {
    const dragImage = new Image();
    dragImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAEElEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII=";
    e.dataTransfer.setDragImage(dragImage, 0, 0);

    if (this.hasAttribute('disabled') || e.target.closest('[disabled]') || !this.handle) {
      e.preventDefault();
      return;
    }


    this.dragEl = e.currentTarget;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", `${this.dragEl.innerHTML}`);

    this.originalIndex = [...this.dragEl.parentNode.children].indexOf(
      this.dragEl
    );
  }

  onDragOver(e) {
    e.preventDefault();

    const droppedElement = e.currentTarget;
    const parent = droppedElement.parentNode;

    if (this.dragEl !== droppedElement) {
      this.updateDropStyles(droppedElement, this.isMovingDown(e));
      this.updateItemsPosition(parent, droppedElement, this.isMovingDown(e));
    } else {
      droppedElement.shadowRoot.querySelector("div").classList.add("moving");
    }
  }

  onDragEnter(e) { }

  onDragLeave(e) { }

  onDrop(e) {
    const droppedElement = e.currentTarget;
    droppedElement.shadowRoot.querySelector("div").classList.remove("moving");

    if (!droppedElement.parentNode) return;
    const parent = droppedElement.parentNode;

    if (this.dragEl !== droppedElement) {
      e.preventDefault();
      this.updateItemsPosition(parent, droppedElement, this.isMovingDown(e));
    }
  }

  onDragEnd(e) {
    const parent = this.dragEl.parentNode;
    const newIndex = Array.from(parent.children).indexOf(this.dragEl);

    parent.childNodes.forEach((item) => {
      if (item.nodeType === 1) {
        ["drag--up", "drag--down", "moving"].forEach((cls) =>
          item.shadowRoot.querySelector("div").classList.remove(cls)
        );
      }
    });

    const newOrder = Array.from(parent.children)
      .map((el) => {
        const clonedNode = el.cloneNode(true);
        const handle = clonedNode.querySelector('.handle');
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

    elementStyles.toggle("drag--down", isMovingDown);
    elementStyles.toggle("drag--up", !isMovingDown);
  }

  updateItemsPosition(parent, droppedElement, isMovingDown) {
    parent.insertBefore(this.dragEl, isMovingDown ? droppedElement.nextSibling : droppedElement);
  }

  isMovingDown(target) {
    const parent = target.currentTarget.parentNode;
    const dragIndex = Array.from(parent.children).indexOf(this.dragEl);
    const dropIndex = Array.from(parent.children).indexOf(target.currentTarget);

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
