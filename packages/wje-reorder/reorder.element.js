import { default as WJElement, event } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

export default class Reorder extends WJElement {
  constructor() {
    super();
    this.sortableList = null;
  }

  className = "Reorder";

  static get cssStyleSheet() {
    return styles;
  }

  setupAttributes() {
    this.isShadowRoot = "open";
  }

  draw(context, store, params) {
    const fragment = document.createDocumentFragment();

    const element = document.createElement("div");
    element.classList.add("container");
    element.setAttribute("part", "native");

    const slot = document.createElement("slot");
    slot.classList.add("item");

    element.appendChild(slot);

    fragment.appendChild(element);

    this.container = element;

    return fragment;
  }

  afterDraw() {
    let isDragging = false;
    let currentItem = null;
    let containerOffsetY = 0;
    let initY = 0;

    let oldIndex;

    const container = document.querySelector("wje-reorder");

    document.addEventListener("mousedown", (e) => {
        const item = e.target.closest("wje-reorder-item");

        if(item) {
            isDragging = true;
            currentItem = item;
            containerOffsetY = currentItem.offsetTop;
            currentItem.classList.add("dragging");
            document.body.style.userSelect = "none";
            currentItem.style.top = containerOffsetY + "px";
            initY = e.clientY;
        }

        if(currentItem) {
            oldIndex = [...document.querySelectorAll("wje-reorder-item")].indexOf(currentItem);
        }
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging && currentItem) {
            let newTop = containerOffsetY - (initY - e.clientY);
            if (newTop > container.offsetHeight - 30) {
                newTop = container.offsetHeight - 30;
            }
            currentItem.style.top = newTop + "px";

            let itemSibilings = [
                ...document.querySelectorAll("wje-reorder-item:not(.dragging)"),
            ];
            let nextItem = itemSibilings.find((sibiling) => {
                return (
                e.clientY - container.getBoundingClientRect().top <=
                sibiling.offsetTop + sibiling.offsetHeight / 2
                );
            });

            itemSibilings.forEach((sibiling) => {
                sibiling.style.marginTop = "10px";
            });

            if (nextItem) {
                nextItem.style.marginTop = currentItem.offsetHeight;
            }
            container.insertBefore(currentItem, nextItem);
        }
    });

    document.addEventListener("mouseup", () => {
        if (currentItem) {
            currentItem.classList.remove("dragging");
            currentItem.style.top = "auto";
            const newIndex = [...document.querySelectorAll("wje-reorder-item")].indexOf(currentItem);
            currentItem = null;
            isDragging = false;
    
            let itemSiblings = [
                ...document.querySelectorAll("wje-reorder-item:not(.dragging)"),
            ];
    
            itemSiblings.forEach((sibling) => {
                sibling.style.marginTop = "10px";
            });
    
            const itemOrder = itemSiblings.map((sibling) => sibling.textContent); 
            this.dispatchChange(oldIndex, newIndex, itemOrder);
        }
    });
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