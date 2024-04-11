// Reorder.js

import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

export default class Reorder extends WJElement {
    constructor() {
        super();
    }

    className = "Reorder";

    draggableItem;
    items = [];


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

        container.appendChild(slot);

        fragment.appendChild(container);

        this.container = container;

        return fragment;
    }

    afterDraw() {
        const DnD = {
            dragEl: null,
        
            onDragStart(e) {
                DnD.dragEl = this;
            
                DnD.prevRect = DnD.dragEl.getBoundingClientRect();
            
                e.dataTransfer.effectAllowed = "move";
                e.dataTransfer.setData("text/html", DnD.dragEl.innerHTML);
            
                DnD.dragEl.style.opacity = '0.5';
            },
        
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
                    DnD.dragEl.style.transform = '';
                    document.querySelectorAll('.item').forEach(item => {
                        item.style.marginTop = '';
                        item.style.marginBottom = '';
                        item.classList.remove("drag--hover");
                    });
                }
            },
            
        
            onDragEnter(e) {
                this.classList.add("drag--hover");
            },
        
            onDragLeave(e) {
                this.classList.remove("drag--hover");
            },
        
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
                    DnD.dragEl.style.transform = ''; 
                    document.querySelectorAll('.item').forEach(item => {
                        item.style.marginTop = '';
                        item.style.marginBottom = '';
                        item.classList.remove("drag--hover");
                    });
                }
            },
        
            onDragEnd(e) {
                DnD.dragEl.classList.remove("drag--moving");
                DnD.dragEl.style.transform = ''; 
                document.querySelectorAll('.item').forEach(item => {
                    item.classList.remove("drag--hover");
                });
            
                DnD.dragEl.style.opacity = '1';
            },
        };
                    
        
        const slots = this.shadowRoot.querySelectorAll('slot');
        slots.forEach((slot) => {
            slot.classList.add("item");
            slot.assignedElements().forEach((e) => {
                e.classList.add("item")
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
