import { default as WJElement } from '../wje-element/element.js';
import { default as Input } from '../wje-input/input.js';
import { default as InfiniteScroll } from '../wje-infinite-scroll/infinite-scroll.js';
import { default as Tooltip } from '../wje-tooltip/tooltip.js';
/**
 * @summary This element allows users to pick an icon from a set of available options.
 * `IconPicker` is a custom web component that represents an interactive icon picker. It features
 * search functionality, infinite scrolling, and popup-based selection. The component is highly customizable
 * and integrates seamlessly with other `WJElement` components.
 * @documentation https://elements.webjet.sk/components/icon-picker
 * @status stable
 * @augments {WJElement}
 * @attribute {string} icon - The selected icon's name.
 * @attribute {number} size - The number of icons displayed per page in infinite scroll. Default is 60.
 * @csspart native - The native part of the component.
 * @csspart anchor - The part representing the anchor button displaying the selected icon.
 * @csspart picker - The picker part containing the search and icon selection interface.
 * @csspart input - The input part for searching icons.
 * @cssproperty [--wje-color-picker-value=#ff0000] - The default color value.
 * @cssproperty [--wje-color-picker-area=transparent] - The background color of the color picker area.
 * @cssproperty [--wje-color-picker-swatch=transparent] - The background color of the swatch picker.
 * @cssproperty [--wje-color-picker-size=1rem] - The size of the icons in the picker.
 * @cssproperty [--wje-color-picker-radius=4px] - The border radius of the picker.
 * @tag wje-icon-picker
 */
export default class IconPicker extends WJElement {
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
     * Dependencies of the IconPicker component.
     * @property {object} dependencies
     */
    dependencies: {
        'wje-input': typeof Input;
        'wje-infinite-scroll': typeof InfiniteScroll;
        'wje-tooltip': typeof Tooltip;
    };
    /**
     * Setter for the markerPosition property.
     * @param {any} value The value to set.
     */
    set size(value: any);
    /**
     * Getter for the markerPosition property.
     * @returns {any} size The value of the markerPosition property.
     */
    get size(): any;
    /**
     * Setter for the value property.
     * @param value
     */
    set icon(value: string);
    /**
     * Getter for the value property.
     * @returns {string}
     */
    get icon(): string;
    /**
     * Setter for the value property.
     * @param value
     */
    set type(value: string);
    /**
     * Getter for the value property.
     * @returns {string}
     */
    get type(): string;
    /**
     * Prepares data before the draw operation by fetching tags, transforming objects, and creating an index.
     * @returns {Promise<void>} Resolves when data preparation is complete.
     */
    beforeDraw(): Promise<void>;
    tags: any[];
    transformedObjects: any[];
    index: any[];
    /**
     * Draws and initializes the native color picker component on the DOM.
     * This method creates and appends the necessary elements, including input and infinite scroll components,
     * and sets their attributes and event listeners. It also provides custom data handling for infinite scrolling
     * and manages the way icons are displayed based on input.
     * @returns {DocumentFragment} A document fragment containing the fully constructed color picker component.
     */
    draw(): DocumentFragment;
    input: HTMLElement;
    picker: HTMLDivElement;
    infiniteScroll: InfiniteScroll;
    /**
     * Executes actions that occur after the component finishes its draw phase. Sets up event listeners for input clear
     * and infinite scroll item clicks, resets initialization state, and rebinds scroll-related events.
     * @returns {void} Does not return a value.
     */
    afterDraw(): void;
    init: boolean;
    /**
     * Sync ARIA attributes on host.
     */
    syncAria(): void;
    /**
     * Handles the selection of an icon from a given input element and updates the relevant properties and events.
     * @function selectIcon
     * @param {HTMLElement} icon The icon element that was selected. It must have a 'name' attribute and may optionally have a 'filled' attribute.
     * The function performs the following actions:
     * - Retrieves the name of the selected icon from its 'name' attribute.
     * - Determines the style type ('filled' or 'outline') based on the presence of the 'filled' attribute.
     * - Searches for a matching object in the `transformedObjects` array based on name and style.
     * - Creates a new `wje-icon` element and assigns its attributes based on the selected icon's properties.
     * - Updates the selected object's properties and assigns it to the `value`, `icon`, and `type` properties of the class.
     * - Dispatches a custom event (`wje-icon-picker:select`) to signal a change in the selected icon.
     */
    selectIcon: (icon: HTMLElement) => void;
    value: any;
    /**
     * Initializes the component.
     */
    initial(): void;
    /**
     * Converts an object of tags into a transformed array of objects, separating `filled` and `outline` styles.
     * The function processes an input object containing tags, extracts its values,
     * and for each tag that has both `filled` and `outline` styles, splits them into
     * two separate objects. Tags without `filled` styles remain unchanged.
     * @param {object} tags The input object containing tags as properties. Each property is an object with a `styles` key.
     * @param {object} tags[].styles The styles object containing `filled` and/or `outline` styles.
     * @param {object} [tags[].styles.outline] The outline style object, if present.
     * @param {object} [tags[].styles.filled] The filled style object, if present.
     * @returns {Array<object>} An array of transformed objects. Objects with both `filled` and `outline` styles are split into separate objects, each containing only one style.
     * @example
     * const tags = {
     *     hourglass: {
     *         styles: {
     *             outline: { ... },
     *             filled: { ... },
     *         }
     *     },
     *     clock: {
     *         styles: {
     *             outline: { ... },
     *         }
     *     }
     * };
     * const result = convertObject(tags);
     * console.log(result);
     * // [
     * //   { styles: { outline: { ... } } },
     * //   { styles: { filled: { ... } } },
     * //   { styles: { outline: { ... } } }
     * // ]
     */
    convertObject: (tags?: {
        styles: {
            outline?: object;
            filled?: object;
        };
    }) => Array<object>;
    /**
     * Converts an icon data object into an HTML element structure.
     * This function creates a styled HTML element that represents an icon with a tooltip.
     * The tooltip displays the name of the icon, and the icon itself is styled based on
     * whether it uses the `filled` style.
     * @param {object} data The icon data object.
     * @returns {HTMLElement} A `div` element containing the icon wrapped in a `wje-tooltip`. The tooltip displays the icon name, and the `wje-icon` element represents the icon with attributes set according to the data.
     * @example
     * const iconData = {
     *     name: "hourglass",
     *     styles: {
     *         filled: { ... }
     *     }
     * };
     * const htmlElement = dataToHtml(iconData);
     * document.body.appendChild(htmlElement);
     *
     * // The resulting structure:
     * // <div class="icon-item">
     * //   <wje-tooltip content="hourglass">
     * //     <wje-icon name="hourglass" size="large" filled></wje-icon></wje-icon>
     * //   </wje-tooltip>
     * // </div>
     */
    dataToHtml: (data: object) => HTMLElement;
    /**
     * Gets the tags.
     * @returns {Promise<Array>} The tags of the component.
     */
    getTags(): Promise<any[]>;
    /**
     * Searches icons based on user input.
     * This method handles the input event and filters the available icons based on the provided search string.
     * The filtering is performed on an index that combines icon names and their tags.
     * The results are then adjusted for infinite scrolling.
     * @param {Event} e The input event (e.g., `wje-input:input`) containing the search query details.
     */
    searchIcon: (e: Event) => void;
    /**
     * Clears the icons container.
     */
    clearIconsContainer(): void;
    /**
     * Creates a debounced version of the provided function that delays its execution
     * until after the specified delay has passed since the last time it was invoked.
     * @param {Function} fn The function to debounce.
     * @param {number} delay The delay duration in milliseconds.
     * @returns {Function} A new debounced function that delays the execution of the original function.
     */
    debounce(fn: Function, delay: number): Function;
}
