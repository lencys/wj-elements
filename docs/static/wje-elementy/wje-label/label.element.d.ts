import { default as WJElement } from '../wje-element/element.js';
/**
 * `Label` is a custom web component that represents a label.
 * It extends from `WJElement`.
 * @summary This element represents a label.
 * @documentation https://elements.webjet.sk/components/label
 * @status stable
 * @augments {WJElement}
 * @csspart label - The label part of the component.
 * @slot - The default slot for the label.
 * @cssproperty [--wje-label-color=black] - Defines the text color of the label. This property determines the color of the label's text. Accepts any valid CSS color value (e.g., named colors like `black`, `red`, or values like `#000000`, `rgb(0, 0, 0)`).
 * @cssproperty [--wje-label-font-size=16px] - Specifies the font size of the label. This property sets the size of the label's text. Accepts any valid CSS length unit (e.g., `px`, `em`, `rem`). The default value is `16px`, which provides optimal readability in most designs.
 * // @fires wje-label:change - Event fired when the label is changed.
 * @tag wje-label
 */
export default class Label extends WJElement {
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
     * Draws the component.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
}
