import { default as WJElement } from '../wje-element/element.js';
/**
 * `SplitView` is a custom web component that represents a split view.
 * @summary This element represents a split view.
 * @documentation https://elements.webjet.sk/components/split-view
 * @status stable
 * @augments WJElement
 * @slot start - Slot for the start view.
 * @slot end - Slot for the end view.
 * @slot divider - Slot for the divider.
 * @csspart wje-divider - The divider of the split view.
 * @cssproperty [--wje-split-view-divider-area=12px] - Defines the interactive area (hitbox) of the divider for resizing. Accepts any valid CSS length unit (e.g., `px`, `rem`, `%`).
 * @cssproperty [--wje-split-view-divider-width=4px] - Specifies the visual width of the divider. Controls how thick the divider appears.
 * @cssproperty [--wje-split-view-min=0%] - Sets the minimum size limit for the split views. Ensures that a view cannot be resized below this value.
 * @cssproperty [--wje-split-view-max=100%] - Sets the maximum size limit for the split views. Ensures that a view cannot be resized beyond this value.
 * @cssproperty [--wje-split-view-calc-a=50%] - Represents the calculated size of the first view. This is used to dynamically set the size of the first view.
 * @cssproperty [--wje-split-view-calc-b=50%] - Represents the calculated size of the second view. This is used to dynamically set the size of the second view.
 * @cssproperty [--wje-split-view-clamp-a=clamp(var(--wje-split-view-min), var(--wje-split-view-calc-a), var(--wje-split-view-max))] - Clamps the size of the first view between minimum and maximum limits. Ensures the calculated size stays within the defined range.
 * @cssproperty [--wje-split-view-clamp-b=clamp(var(--wje-split-view-min), var(--wje-split-view-calc-b), var(--wje-split-view-max))] - Clamps the size of the second view between minimum and maximum limits. Ensures the calculated size stays within the defined range.
 * @cssproperty [--wje-split-view-divider-background=var(--wje-border-color)] - Sets the background color of the divider. Accepts any valid CSS color value (e.g., hex, RGB, or CSS variable).
 * @cssproperty [--wje-split-view-divider-size=4px] - Defines the overall size of the divider, affecting both its visual and interactive dimensions. Accepts any valid CSS length unit.
 * @tag wje-split-view
 */
export default class SplitView extends WJElement {
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
    set initial(value: number);
    get initial(): number;
    /**
     * Draws the component for the split view.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    dividerElement: HTMLDivElement;
    /**
     * Sets up the event listeners after the component is drawn.
     */
    afterDraw(): void;
    resizeObserver: ResizeObserver;
    /**
     * Handles the drag event.
     * @param {Event} e The event object.
     */
    handleDrag: (e: Event) => void;
    /**
     * Detects the size of the split view.
     */
    detectSize(): void;
    size: number;
    /**
     * Converts pixels to a percentage.
     * @param {number} value The pixel value.
     * @returns {number} The percentage value.
     */
    pixelsToPercentage(value: number): number;
}
