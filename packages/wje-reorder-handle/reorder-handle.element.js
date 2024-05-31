import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

export default class ReorderHandle extends WJElement {
    constructor() {
        super();
        this.addEventListener('mousedown', this.startDrag.bind(this));
        this.addEventListener('touchstart', this.startTouchDrag.bind(this));
    }

    className = "ReorderHandle";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return ['dropzone', 'parent'];
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
        if (this.hasAttribute('disabled') || this.hasAttribute('locked')) return; 
        this.startDragAction(event.clientX, event.clientY);
    }

    startTouchDrag(event) {
        if (this.hasAttribute('disabled') || this.hasAttribute('locked')) return; 
        const touch = event.touches[0];
        this.startDragAction(touch.clientX, touch.clientY);
    }

    startDragAction(clientX, clientY) {
        let draggable;
        if (this.hasAttribute('parent')) {
            const parentSelector = this.getAttribute('parent');
            draggable = this.closest(parentSelector);
        } else {
            draggable = this.parentElement;
        }

        const initialContainer = this.getDropzone(draggable);

        if (!this.getAttribute("dropzone")) {
            this.setAttribute("dropzone", initialContainer.localName);
        }

        const rect = draggable.getBoundingClientRect();
        const offsetX = clientX - rect.left;
        const offsetY = clientY - rect.top;

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

        moveAt(clientX, clientY);

        const onMouseMove = (event) => {
            moveAt(event.pageX, event.pageY);

            const dropzone = this.getClosestDropzone(event.clientX, event.clientY);
            if (!dropzone) return;

            const siblings = Array.from(dropzone.children).filter(child => child !== draggable && child !== placeholder);
            for (const sibling of siblings) {
                if (sibling.children[0]?.hasAttribute("locked")) continue;

                const siblingRect = sibling.getBoundingClientRect();
                if (event.clientY > siblingRect.top && event.clientY < siblingRect.bottom) {
                    if (event.clientY < siblingRect.top + siblingRect.height / 2) {
                        dropzone.insertBefore(placeholder, sibling);
                    } else {
                        dropzone.insertBefore(placeholder, sibling.nextSibling);
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

            const finalContainer = placeholder.parentElement;
            finalContainer.insertBefore(draggable, placeholder);
            finalContainer.removeChild(placeholder);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        initialContainer.insertBefore(placeholder, draggable);
    }

    getDropzone(element) {
        const dropzoneAttr = this.getAttribute('dropzone');
        if (dropzoneAttr) {
            let dropzone = element.closest(dropzoneAttr);
            if (dropzone) return dropzone;
        }
        return element.parentElement;
    }

    getClosestDropzone(clientX, clientY) {
        const elements = document.elementsFromPoint(clientX, clientY);
        for (const element of elements) {
            if (element.matches(this.getAttribute('dropzone'))) {
                return element;
            }
        }
        return null;
    }
}
