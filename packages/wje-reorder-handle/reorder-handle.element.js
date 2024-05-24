import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

export default class ReorderHandle extends WJElement {
    constructor() {
        super();
        this.addEventListener('mousedown', this.startDrag.bind(this));
    }

    className = "ReorderHandle";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return [];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw() {
        const fragment = document.createDocumentFragment();
    
        const container = document.createElement("div");
        container.classList.add("container");
        container.setAttribute("part", "native");

        const slot = document.createElement("slot");

        container.appendChild(slot);

        fragment.appendChild(container);
    
        return fragment;
    }

    afterDraw() {
        if (this.hasAttribute('disabled')) {
            this.style.opacity = ".3";
        }
    }

    startDrag(event) {
        if (this.hasAttribute('disabled')) return;

        const handle = this;
        const draggable = this.parentElement;
        const container = this.getDropzone(draggable);

        const rect = draggable.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        let placeholder = document.createElement('div');
        placeholder.classList.add('sortable-item');
        placeholder.style.visibility = 'hidden';
        placeholder.style.height = `${rect.height}px`;

        draggable.classList.add('dragging');

        draggable.style.position = 'fixed';
        draggable.style.zIndex = '1000';
        draggable.style.width = `${rect.width}px`;

        const moveAt = (pageX, pageY) => {
            draggable.style.left = `${pageX - offsetX - document.documentElement.scrollLeft}px`;
            draggable.style.top = `${pageY - offsetY - document.documentElement.scrollTop}px`;
        };

        moveAt(event.pageX, event.pageY);

        const onMouseMove = (event) => {
            moveAt(event.pageX, event.pageY);

            const siblings = Array.from(container.children).filter(child => child !== draggable && child !== placeholder);
            for (const sibling of siblings) {
                const siblingRect = sibling.getBoundingClientRect();
                if (event.clientY > siblingRect.top && event.clientY < siblingRect.bottom) {
                    if (event.clientY < siblingRect.top + siblingRect.height / 2) {
                        container.insertBefore(placeholder, sibling);
                    } else {
                        container.insertBefore(placeholder, sibling.nextSibling);
                    }
                    break;
                }
            }
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);

            draggable.classList.remove('dragging');

            draggable.style.position = '';
            draggable.style.zIndex = '';
            draggable.style.left = '';
            draggable.style.top = '';
            draggable.style.width = '';

            container.insertBefore(draggable, placeholder);
            container.removeChild(placeholder);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        container.insertBefore(placeholder, draggable);
    }

    getDropzone(element) {
        const dropzoneAttr = this.getAttribute('dropzone');
        if (dropzoneAttr) {
            let dropzone = element.closest(dropzoneAttr);
            if (dropzone) return dropzone;
        }
        return element.parentElement;
    }
}
