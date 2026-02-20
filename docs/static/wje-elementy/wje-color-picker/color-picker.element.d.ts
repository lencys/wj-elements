import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary ColorPicker is a custom web component that extends WJElement.
 * It provides a color picker functionality with a color area, hue slider, alpha slider, and color swatches.
 * The color picker allows users to select a color by moving a marker on the color area, adjusting the hue and alpha sliders, or clicking on a color swatch.
 * @documentation https://elements.webjet.sk/components/color-picker
 * @status stable
 * @augments WJElement
 * @slot - The card header main content.
 * @csspart anchor - The anchor part of the color picker.
 * @csspart picker - The main part of the color picker.
 * @csspart marker - The marker part of the color picker.
 * @csspart color-area - The color area part of the color picker.
 * @csspart hue - The hue slider part of the color picker.
 * @csspart alpha - The alpha slider part of the color picker.
 * @csspart color-preview - The color preview part of the color picker.
 * @csspart input - The input part of the color picker.
 * @attribute {boolean} input-editable - Enables manual color typing into the input field.
 * @cssproperty [--wje-color-picker-area] - The color of the color area background.
 * @cssproperty [--wje-color-picker-value] - The value of the color picker input.
 * @cssproperty [--wje-color-picker-swatch] - The color of the color swatch button.
 * @cssproperty [--wje-color-picker-size] - The color of the color marker.
 * @cssproperty [--wje-color-picker-radius] - The color of the color anchor.
 */
export default class ColorPicker extends WJElement {
    /**
     * Getter for the CSS stylesheet.
     * @returns {object} The styles object.
     * @static
     */
    static get cssStyleSheet(): object;
    /**
     * Getter for the observed attributes.
     * @returns {Array} An empty array.
     * @static
     */
    static get observedAttributes(): any[];
    /**
     * The position of the color marker.
     * @type {object}
     * @private
     */
    private _markerPosition;
    /**
     * The color swatches.
     * @type {Array}
     * @private
     */
    private _swatches;
    /**
     * Stores last raw value typed by user in editable input.
     * Used to avoid aggressive normalization while typing.
     * @type {string|null}
     * @private
     */
    private _manualInputValue;
    /**
     * Sets the color attribute of the element.
     * @param {string} value The color value to be set. It should be a valid color string such as a named color, HEX, RGB, or HSL format.
     */
    set color(value: string);
    /**
     * Retrieves the color attribute of the element.
     * @returns {string | null} The current value of the 'color' attribute, or null if the attribute is not set.
     */
    get color(): string | null;
    /**
     * Setter for the marker position.
     * @param {object} value The new marker position.
     */
    set markerPosition(value: object);
    /**
     * Getter for the marker position.
     * @returns {object} The current marker position.
     */
    get markerPosition(): object;
    /**
     * Setter for the color swatches.
     * @param {string} value The new color swatches.
     */
    set swatches(value: string);
    /**
     * Getter for the color swatches.
     * @returns {Array} The current color swatches.
     */
    get swatches(): any[];
    /**
     * Normalizes swatch colors from a string to an array.
     * Supports comma and semicolon separators.
     * @param {string} value
     * @returns {string[]}
     */
    parseSwatches(value?: string): string[];
    /**
     * Sets or removes the 'no-color-area' attribute based on the provided value.
     * @param {boolean} value A boolean value indicating whether to set or remove the 'no-color-area' attribute. If true, the attribute is added; if false, the attribute is removed.
     */
    set noColorArea(value: boolean);
    /**
     * Getter method to check if the 'no-color-area' attribute is applied.
     * @returns {boolean} Returns true if the 'no-color-area' attribute is present; otherwise, false.
     */
    get noColorArea(): boolean;
    /**
     * Sets or removes the "no-controls" attribute.
     * @param {boolean} value If true, sets the "no-controls" attribute. If false, removes the "no-controls" attribute.
     */
    set noControls(value: boolean);
    /**
     * Checks if the 'no-controls' attribute is present on the element.
     * @returns {boolean} Returns true if the 'no-controls' attribute is present; otherwise, false.
     */
    get noControls(): boolean;
    /**
     * Sets or removes the 'no-swatches' attribute on the element.
     * If the value is truthy, the 'no-swatches' attribute is added.
     * If the value is falsy, the 'no-swatches' attribute is removed.
     * @param {boolean} value Determines whether the 'no-swatches' attribute is set (true) or removed (false).
     */
    set noSwatches(value: boolean);
    /**
     * Checks if the 'no-swatches' attribute is present on the element.
     * @returns {boolean} Returns true if the 'no-swatches' attribute is present; otherwise, false.
     */
    get noSwatches(): boolean;
    /**
     * Enables/disables manual typing in the input.
     * @param {boolean} value
     */
    set inputEditable(value: boolean);
    /**
     * Returns true when manual input typing is enabled.
     * @returns {boolean}
     */
    get inputEditable(): boolean;
    /**
     * Creates and returns a document fragment containing the structure and components of a custom color picker.
     * The method initializes DOM elements such as divs, sliders, and inputs, with specific classes and attributes,
     * and attaches various event listeners to handle user interactions.
     * @returns {DocumentFragment} A DocumentFragment containing the constructed and fully initialized DOM elements for the color picker.
     */
    draw(): DocumentFragment;
    anchor: HTMLDivElement;
    picker: HTMLDivElement;
    marker: HTMLDivElement;
    colorArea: HTMLDivElement;
    hueSlider: HTMLElement;
    alphaSlider: HTMLElement;
    colorPreview: HTMLDivElement;
    input: HTMLElement;
    /**
     * Executes after the component is drawn. Initializes some configurations if not already initialized,
     * including updating slider values, setting marker positions, and applying initial color settings.
     * This method ensures that all necessary visual elements and configurations are properly set up.
     * @returns {void} Does not return a value.
     */
    afterDraw(): void;
    colorAreaDimension: any;
    /**
     * Sets the hue.
     * @param node
     */
    createSwatches(node: any): void;
    /**
     * Sets the sliders to the given color.
     * @param color
     */
    setSliders(color: any): void;
    /**
     * Retrieves the dimensions and position of the color area element relative to the viewport.
     * @returns {object} An object containing the following properties:
     * width: The width of the element in pixels.
     * height: The height of the element in pixels.
     * x: The x-coordinate of the element's left edge relative to the viewport.
     * y: The y-coordinate of the element's top edge relative to the viewport.
     */
    dimension(): object;
    /**
     * Updates the position of the marker based on the pointer event.
     * This function calculates the position of the marker relative to the color area
     * dimensions based on the given event. It adjusts the marker position and updates
     * the color associated with the new position. It is intended to handle pointer movement
     * events such as mouse or touch interactions.
     * @param {Event} e The event triggering the marker movement, typically a mouse or touch event.
     */
    moveMarker: (e: Event) => void;
    /**
     * Gets the pointer position in client coordinates (viewport-relative).
     * @param e
     * @returns {{x: number, y: number}}
     */
    getPointerPosition(e: any): {
        x: number;
        y: number;
    };
    /**
     * Sets the position of the marker.
     * @param x
     * @param y
     */
    setMarkerPosition(x: any, y: any): void;
    /**
     * Clamps marker coordinates to the color area boundaries.
     * @param {number} x
     * @param {number} y
     * @returns {{x: number, y: number}}
     */
    clampMarkerPosition(x: number, y: number): {
        x: number;
        y: number;
    };
    /**
     * Sets the color at the given position.
     * @param x
     * @param y
     * @param alpha
     * @returns {*|tinycolor}
     */
    setColorAtPosition(x: any, y: any, alpha?: number): any | tinycolor;
    /**
     * Sets the marker position by color.
     * @param color
     * @returns {{x: number, y: number}}
     */
    setMarkerPositionByColor: (color?: string) => {
        x: number;
        y: number;
    };
    /**
     * Updates the color picker's current color and its associated UI elements.
     * @param {tinycolor.Instance|null} [color] The color value to set. If null, the current value from the input field is used.
     * @param {string} [type] The type of action determining which UI element to update. Possible values: "marker", "hue", "alpha", "swatch", "input".
     */
    setColor: (color?: tinycolor.Instance | null, type?: string) => void;
    value: {
        hex8: any;
        hex: any;
        rgb: any;
        rgba: any;
        hsl: any;
        hsla: any;
        hsv: any;
        hsva: any;
        name: any;
        format: any;
    };
    /**
     * Sets the hue.
     * @param {object} e The event object.
     */
    setHue: (e: object) => void;
    /**
     * Sets the alpha.
     * @param {object} e The event object.
     */
    setAlpha: (e: object) => void;
    /**
     * Converts hue and alpha values into an HSVA color string.
     * @param {number} hue The hue value, typically between 0 and 360.
     * @param {number} alpha The alpha value, typically between 0 and 100, representing the opacity percentage.
     * @returns {string} - The HSVA color string in the format `hsva(h, 100%, 100%, a)`.
     */
    getHSVA: (hue: number, alpha: number) => string;
    /**
     * Returns fully saturated and bright color for the current hue.
     * Used as base color for the SV area so neutral grays do not black out the palette.
     * @param {string} color
     * @returns {string}
     */
    getHueAreaColor(color?: string): string;
    #private;
}
