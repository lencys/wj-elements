import { default as WJElement } from '../wje-element/element.js';
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
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes(): Array<string>;
    dragEl: Element;
    items: any[];
    originalIndex: number;
    isDragging: boolean;
    offsetX: number;
    offsetY: number;
    cloneEl: Node;
    /**
     * Draws the component after it is connected to the DOM.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    container: HTMLDivElement;
    /**
     * Adds event listeners after the component is drawn.
     */
    afterDraw(): void;
    /**
     * Sync ARIA attributes on host.
     */
    syncAria(): void;
    /**
     * Attaches event listeners to the element.
     * @param element
     */
    attachEventListeners(element: any): void;
    /**
     * Handles the mouse down event.
     * @param {object} e
     */
    mouseDown(e: object): void;
    /**
     * Handles the touch start event.
     * @param e
     */
    touchStart(e: any): void;
    /**
     * Initializes the dragging process for a reorderable item.
     * @param {number} clientX The x-coordinate of the mouse pointer when the drag starts.
     * @param {number} clientY The y-coordinate of the mouse pointer when the drag starts.
     * @param {HTMLElement} target The target element where the drag event originated.
     */
    startDragging(clientX: number, clientY: number, target: HTMLElement): void;
    originalParent: ParentNode;
    /**
     * Handles the mouse move event.
     * @param e
     */
    mouseMove(e: any): void;
    /**
     * Handles the `touchmove` event and updates the position of the dragged element.
     * @param {TouchEvent} e The touch event containing touch position data.
     */
    touchMove(e: TouchEvent): void;
    /**
     * Updates the position of the dragged element and handles reordering logic based on the mouse position.
     * @param {number} pageX The x-coordinate of the mouse pointer relative to the viewport during the move event.
     * @param {number} pageY The y-coordinate of the mouse pointer relative to the viewport during the move event.
     */
    moveElement(pageX: number, pageY: number): void;
    /**
     * Handles the mouse up event.
     */
    mouseUp(): void;
    /**
     * Handles the touch end event.
     */
    touchEnd(): void;
    /**
     * Stops dragging the element.
     */
    stopDragging(): void;
    /**
     * Prevents the default behavior of the `dragstart` event.
     * @param {DragEvent} e The drag event triggered when a drag operation starts.
     */
    dragStart(e: DragEvent): void;
    /**
     * Creates a clone of the element.
     */
    createClone(): void;
    /**
     * Checks if the dragged element is moving down.
     * @param droppedElement
     * @returns {boolean}
     */
    isMovingDown(droppedElement: any): boolean;
    /**
     * Dispatches a custom event to signal that a reordering operation has occurred.
     * @param {number} from The original index of the dragged item.
     * @param {number} to The new index of the dragged item after reordering.
     * @param {Array<number>} order The updated order of items after the reordering.
     * // @fires wje-reorder:change - Dispatched when the reordering is completed.
     * The event includes details about the initial position, the new position, and the new order.
     */
    dispatchChange(from: number, to: number, order: Array<number>, orderElements: any): void;
}
