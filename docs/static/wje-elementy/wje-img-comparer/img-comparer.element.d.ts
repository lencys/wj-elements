import { default as WJElement } from '../wje-element/element.js';
import { default as Icon } from '../wje-icon/icon.js';
/**
 * @summary This element allows users to compare two images. `ImgComparer` is a custom web component that represents an image comparer.
 * It extends from `WJElement` and uses the `Icon` component.
 * @documentation https://elements.webjet.sk/components/img-comparer
 * @status stable
 * @augments {WJElement}
 * @slot before - The before image slot.
 * @slot after - The after image slot.
 * @csspart divider - The divider part.
 * @cssproperty [--wje-img-compare-divider-area=12px] - The area of the divider. This is the size of the divider. Accepts any valid CSS size.
 * @cssproperty [--wje-img-compare-divider-background=white] - Sets the background color of the divider in the image comparison component. Accepts any valid CSS color value (e.g., `red`, `#ff0000`, `rgba(255, 255, 255, 0.5)`). The default value is `white`, which ensures high contrast in most designs.
 * @cssproperty [--wje-img-compare-divider-size=2px] - The size of the divider. This is the thickness of the divider. Accepts any valid CSS size.
 * @cssproperty [--wje-img-compare-divider-left=50%] - The left position of the divider. This is the initial position of the divider.
 * @cssproperty [--wje-img-compare-position=50%] - The position of the divider. This is the position of the divider.
 * @cssproperty [--wje-img-compare-clip-path=inset(0 calc(100% - var(--wje-img-compare-position)) 0 0)] - The clip path of the divider. This is the clip path of the divider.
 * @tag wje-img-comparer
 */
export default class ImgComparer extends WJElement {
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
     * Dependencies of the ImgComparer component.
     * @property {object} dependencies
     */
    dependencies: {
        'wje-icon': typeof Icon;
    };
    /**
     * Draws the component.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    native: HTMLDivElement;
    /**
     * Handles the drag event.
     * @param {Event} e The event.
     */
    handleDrag: (e: Event) => void;
    position: number;
    /**
     * Clamps a number between a minimum and maximum value.
     * @param {number} num The number to clamp.
     * @param {number} min The minimum value.
     * @param {number} max The maximum value.
     * @returns {number} The clamped number.
     */
    clamp: (num: number, min: number, max: number) => number;
}
