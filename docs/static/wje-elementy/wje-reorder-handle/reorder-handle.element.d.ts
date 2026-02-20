import { default as WJElement } from '../wje-element/element.js';
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
     * Returns the CSS styles for the component.
     * @returns {*}
     */
    static get cssStyleSheet(): any;
    /**
     * Returns the list of attributes to observe for changes.
     * @returns {string[]}
     */
    static get observedAttributes(): string[];
    /**
     * Draws the component.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    /**
     * Draws the component after it is connected to the DOM.
     */
    afterDraw(): void;
    /**
     * Sync ARIA attributes on host.
     */
    syncAria(): void;
    /**
     * Handles the attribute changes.
     * @param {DragEvent} e
     */
    startDrag(e: DragEvent): void;
    /**
     * Handles the touch start event.
     * @param {TouchEvent} e
     */
    startTouchDrag(e: TouchEvent): void;
    /**
     * Initiates the drag-and-drop action for a sortable element.
     * @param {number} clientX The x-coordinate of the mouse pointer at the start of the drag action.
     * @param {number} clientY The y-coordinate of the mouse pointer at the start of the drag action.
     */
    startDragAction(clientX: number, clientY: number): void;
    /**
     * Retrieves the closest draggable element based on attribute conditions.
     * If the element has a "parent" attribute, the method attempts to find the closest ancestor
     * matching the CSS selector specified in the attribute. If no such ancestor exists,
     * the method defaults to returning the immediate parent element.
     * @returns {Element|null} The closest matching ancestor or the immediate parent element if no match is found, or null if the element has no parent.
     */
    getDraggable(): Element | null;
    /**
     * Retrieves the nearest dropzone element based on the element's attributes or its parent element.
     * @param {HTMLElement} element The HTML element for which the dropzone is being determined.
     * @returns {HTMLElement|null} The nearest dropzone element if found; otherwise, the parent element or null.
     */
    getDropzone(element: HTMLElement): HTMLElement | null;
    /**
     * Retrieves the closest dropzone element at the specified coordinates.
     * @param {number} clientX The x-coordinate relative to the viewport.
     * @param {number} clientY The y-coordinate relative to the viewport.
     * @returns {HTMLElement|null} - The closest dropzone element matching the `dropzone` attribute, or `null` if none is found.
     */
    getClosestDropzone(clientX: number, clientY: number): HTMLElement | null;
    /**
     * Retrieves all elements at the specified coordinates, including those within shadow DOMs.
     * @param {number} x The x-coordinate relative to the viewport.
     * @param {number} y The y-coordinate relative to the viewport.
     * @param {Document|ShadowRoot} [root] The root context in which to search. Defaults to the main document.
     * @param {Set<Node>} [visited] A set of already visited nodes to avoid infinite recursion in nested shadow DOMs.
     * @returns {HTMLElement[]} An array of all elements found at the specified coordinates, including shadow DOM elements.
     */
    getElementsFromPointAll(x: number, y: number, root?: Document | ShadowRoot, visited?: Set<Node>): HTMLElement[];
    /**
     * Re-indexes child elements of the given container by setting their dataset index.
     * @param {HTMLElement} container The container element whose children are to be re-indexed.
     * @returns {void}
     */
    reIndexItems(container: HTMLElement): void;
}
