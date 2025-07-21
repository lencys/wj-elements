import { default as WJElement, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `ReorderHandle` is a custom web component that represents a reorder handle.
 * @summary This element represents a reorder handle.
 * @documentation https://elements.webjet.sk/components/reorder-handle
 * @status stable
 * @augments WJElement
 * @csspart native - The native part of the reorder handle.
 * @slot - The default slot for the reorder handle.
 * @tag wje-reorder-handle
 */
export default class ReorderHandle extends WJElement {
    /**
     * Creates an instance of ReorderHandle.
     */
    constructor() {
        super();
        this.addEventListener('mousedown', this.startDrag.bind(this));
        this.addEventListener('touchstart', this.startTouchDrag.bind(this));
    }

    /**
     * The class name for the component.
     * @type {string}
     */
    className = 'ReorderHandle';

    /**
     * Returns the CSS styles for the component.
     * @returns {*}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Returns the list of attributes to observe for changes.
     * @returns {string[]}
     */
    static get observedAttributes() {
        return ['dropzone', 'parent'];
    }

    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Draws the component.
     * @returns {DocumentFragment}
     */
    draw() {
        const fragment = document.createDocumentFragment();

        const container = document.createElement('div');
        container.classList.add('container');
        container.setAttribute('part', 'native');

        const slot = document.createElement('slot');

        container.appendChild(slot);

        fragment.appendChild(container);

        return fragment;
    }

    /**
     * Draws the component after it is connected to the DOM.
     */
    afterDraw() {
        if (this.hasAttribute('disabled')) {
            this.style.opacity = '.3';
        }
    }

    /**
     * Handles the attribute changes.
     * @param {DragEvent} e
     */
    startDrag(e) {
        if (this.hasAttribute('disabled') || this.hasAttribute('locked')) return;
        this.startDragAction(e.clientX, e.clientY);
        event.dispatchCustomEvent(this, 'wje-reorder-handle:start', {draggable: this.getDraggable()});
    }

    /**
     * Handles the touch start event.
     * @param {TouchEvent} e
     */
    startTouchDrag(e) {
        if (this.hasAttribute('disabled') || this.hasAttribute('locked')) return;
        const touch = e.touches[0];
        this.startDragAction(touch.clientX, touch.clientY);
    }

    /**
     * Initiates the drag-and-drop action for a sortable element.
     * @param {number} clientX The x-coordinate of the mouse pointer at the start of the drag action.
     * @param {number} clientY The y-coordinate of the mouse pointer at the start of the drag action.
     */
    startDragAction(clientX, clientY) {
        let draggable = this.getDraggable();

        const initialContainer = this.getDropzone(draggable);

        if (!this.getAttribute('dropzone')) {
            this.setAttribute('dropzone', initialContainer.localName);
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

        const onMouseMove = (e) => {
            moveAt(e.pageX, e.pageY);

            const dropzone = this.getClosestDropzone(e.clientX, e.clientY);
            if (!dropzone) return;

            const siblings = Array.from(dropzone.children).filter(
                (child) => child !== draggable && child !== placeholder
            );

            for (const sibling of siblings) {
                const siblingRect = sibling.getBoundingClientRect();

                if (sibling.children[0]?.hasAttribute('locked')) continue;

                if (e.clientY > siblingRect.top && e.clientY < siblingRect.bottom) {
                    if (e.clientY < siblingRect.top + siblingRect.height / 2) {
                        dropzone.insertBefore(placeholder, sibling);
                    } else {
                        dropzone.insertBefore(placeholder, sibling.nextSibling);
                    }
                    break;
                }
            }
        }

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

            this.reIndexItems(finalContainer);

            event.dispatchCustomEvent(this, 'wje-reorder-handle:change', {finalContainer: finalContainer, draggable: draggable});
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        initialContainer.insertBefore(placeholder, draggable);
    }

    /**
     * Retrieves the closest draggable element based on attribute conditions.
     * If the element has a "parent" attribute, the method attempts to find the closest ancestor
     * matching the CSS selector specified in the attribute. If no such ancestor exists,
     * the method defaults to returning the immediate parent element.
     * @returns {Element|null} The closest matching ancestor or the immediate parent element if no match is found, or null if the element has no parent.
     */
    getDraggable() {
        if (this.hasAttribute('parent')) {
            let parent = this.closest(this.getAttribute('parent'));
            if(parent) return parent;
        }
        return this.parentElement;
    }

    /**
     * Retrieves the nearest dropzone element based on the element's attributes or its parent element.
     * @param {HTMLElement} element The HTML element for which the dropzone is being determined.
     * @returns {HTMLElement|null} The nearest dropzone element if found; otherwise, the parent element or null.
     */
    getDropzone(element) {
        const dropzoneAttr = this.getAttribute('dropzone');
        if (this.hasAttribute('dropzone')) {
            let dropzone = element.closest(this.getAttribute('dropzone'));
            if (dropzone) return dropzone;
        }
        return element.parentElement;
    }

    /**
     * Retrieves the closest dropzone element at the specified coordinates.
     * @param {number} clientX The x-coordinate relative to the viewport.
     * @param {number} clientY The y-coordinate relative to the viewport.
     * @returns {HTMLElement|null} - The closest dropzone element matching the `dropzone` attribute, or `null` if none is found.
     */
    getClosestDropzone(clientX, clientY) {
        const elements = this.getElementsFromPointAll(clientX, clientY);
        for (const element of elements) {
            if (element.matches(this.getAttribute('dropzone'))) {
                return element;
            }
        }
        return null;
    }

    /**
     * Retrieves all elements at the specified coordinates, including those within shadow DOMs.
     * @param {number} x The x-coordinate relative to the viewport.
     * @param {number} y The y-coordinate relative to the viewport.
     * @param {Document|ShadowRoot} [root] The root context in which to search. Defaults to the main document.
     * @param {Set<Node>} [visited] A set of already visited nodes to avoid infinite recursion in nested shadow DOMs.
     * @returns {HTMLElement[]} An array of all elements found at the specified coordinates, including shadow DOM elements.
     */
    getElementsFromPointAll(x, y, root = document, visited = new Set()) {
        if (visited.has(root)) return [];
        visited.add(root);

        const elements = root.elementsFromPoint(x, y);
        let allElements = [...elements];

        for (const element of elements) {
            if (element.shadowRoot && !visited.has(element.shadowRoot)) {
                allElements = allElements.concat(this.getElementsFromPointAll(x, y, element.shadowRoot, visited));
            }
        }

        return allElements;
    }

    /**
     * Re-indexes child elements of the given container by setting their dataset index.
     * @param {HTMLElement} container The container element whose children are to be re-indexed.
     * @returns {void}
     */
    reIndexItems(container) {
        const items = Array.from(container.children);
        let index = 0;

        items.forEach((child) => {
            if (child.children[0]?.hasAttribute('locked')) {
                child.dataset.index = index;
            } else {
                child.dataset.index = index;
            }
            index++;
        });
    }
}
