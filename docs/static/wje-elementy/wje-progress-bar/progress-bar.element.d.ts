import { default as WJElement } from '../wje-element/element.js';
/**
 * `ProgressBar` is a custom web component that represents a progress bar.
 * @summary This element represents a progress bar.
 * @documentation https://elements.webjet.sk/components/progress-bar
 * @status stable
 * @augments {WJElement}
 * @slot - The default slot for the progress bar.
 * @slot start - The start slot of the progress bar.
 * @slot end - The end slot of the progress bar.
 * @cssproperty [--wje-progress-bar-color=var(--wje-color-contrast-6)] - Sets the color of the progress bar. This property controls the fill color of the progress indicator. Accepts any valid CSS color value, such as named colors (`red`), hex values (`#ff0000`), or CSS variables.
 * @cssproperty [--wje-progress-bar-text-size=.75rem] - Defines the font size of the text displayed within the progress bar. Accepts any valid CSS length unit (e.g., `rem`, `px`, `em`) to control text size relative to the bar's design.
 * @cssproperty [--wje-progress-bar-text-color=var(--wje-color)] - Specifies the color of the text displayed within the progress bar. Accepts any valid CSS color value to ensure contrast and readability against the progress bar's background.
 * @tag wje-progress-bar
 */
export default class ProgressBar extends WJElement {
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
    /**
     * Sets the radius of the progress bar.
     * @param {number} value The value to set.
     */
    set radius(value: number);
    /**
     * Gets the radius of the progress bar.
     * @returns {number} The value of the radius.
     */
    get radius(): number;
    /**
     * Gets the diameter of the progress bar.
     * @returns {number} The value of the diameter.
     */
    get diameter(): number;
    /**
     * Gets the diameter of the progress bar.
     * @returns {number} The value of the diameter.
     */
    get containerSize(): number;
    /**
     * Sets the stroke of the progress bar.
     * @param {number} value The value to set.
     */
    set stroke(value: number);
    /**
     * Gets the stroke of the progress bar.
     * @returns {number} The value of the stroke.
     */
    get stroke(): number;
    /**
     * Gets the linecap of the progress bar.
     * @returns {string} The value of the linecap.
     */
    get linecap(): string;
    /**
     * Draws the component.
     * @param {object} context The context for drawing.
     * @param {object} store The store for drawing.
     * @param {object} params The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw(context: object, store: object, params: object): DocumentFragment;
    background: SVGCircleElement | SVGRectElement;
    bar: SVGCircleElement | SVGRectElement;
    /**
     * Handles attribute changes for ARIA sync.
     * @param {string} name
     * @param {string|null} oldValue
     * @param {string|null} newValue
     */
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    /**
     * Sync ARIA attributes on host.
     */
    syncAria(): void;
    /**
     * Adds event listeners after the component is drawn.
     */
    afterDraw(): void;
    /**
     * Returns the dasharray for a circle with the given radius.
     * @param {number} radius The radius of the circle in pixels.
     * @returns {number} The dasharray value.
     */
    getCircleDasharray(radius?: number): number;
    /**
     * Returns the dashoffset for a circle with the given progress and radius.
     * @param {number} progress The progress of the circle in percentage.
     * @param {number} radius The radius of the circle in pixels.
     * @returns {number} The dashoffset value.
     */
    getCircleDashoffset(progress?: number, radius?: number): number;
    /**
     * Sets the progress of the circle.
     * @param percent
     */
    setCircleProgress(percent: any): void;
}
