import tinycolor from 'tinycolor2';
import { default as WJElement, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

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
    #init = false;
    /**
     * ColorPicker constructor method.
     */
    constructor() {
        super();

        /**
         * The position of the color marker.
         * @type {object}
         * @private
         */
        this._markerPosition = {
            markerX: '0',
            markerY: '0',
        };

        /**
         * The color swatches.
         * @type {Array}
         * @private
         */
        this._swatches = [
            '#264653',
            '#2a9d8f',
            '#e9c46a',
            'rgb(244,162,97)',
            '#e76f51',
            '#d62828',
            'navy',
            '#07b',
            '#0096c7',
            '#00b4d880',
            'rgba(0,119,182,0.8)',
        ];

        /**
         * Stores last raw value typed by user in editable input.
         * Used to avoid aggressive normalization while typing.
         * @type {string|null}
         * @private
         */
        this._manualInputValue = null;
    }

    /**
     * Sets the color attribute of the element.
     * @param {string} value The color value to be set. It should be a valid color string such as a named color, HEX, RGB, or HSL format.
     */
    set color(value) {
        this.setAttribute('color', value);
    }

    /**
     * Retrieves the color attribute of the element.
     * @returns {string | null} The current value of the 'color' attribute, or null if the attribute is not set.
     */
    get color() {
        return this.getAttribute('color') || '#000000';
    }

    /**
     * Setter for the marker position.
     * @param {object} value The new marker position.
     */
    set markerPosition(value) {
        this._markerPosition = value;
    }

    /**
     * Getter for the marker position.
     * @returns {object} The current marker position.
     */
    get markerPosition() {
        return this._markerPosition;
    }

    /**
     * Setter for the color swatches.
     * @param {string} value The new color swatches.
     */
    set swatches(value) {
        if (Array.isArray(value)) {
            this.setAttribute('swatches', value.join(','));
            return;
        }

        this.setAttribute('swatches', this.parseSwatches(value).join(','));
    }

    /**
     * Getter for the color swatches.
     * @returns {Array} The current color swatches.
     */
    get swatches() {
        this._swatches = this.getAttribute('swatches') ? this.parseSwatches(this.getAttribute('swatches')) : this._swatches;
        return this._swatches;
    }

    /**
     * Normalizes swatch colors from a string to an array.
     * Supports comma and semicolon separators.
     * @param {string} value
     * @returns {string[]}
     */
    parseSwatches(value = '') {
        if (typeof value !== 'string') return [];

        return value
            .split(/[;,]/)
            .map((item) => item.trim())
            .filter(Boolean);
    }

    /**
     * Sets or removes the 'no-color-area' attribute based on the provided value.
     * @param {boolean} value A boolean value indicating whether to set or remove the 'no-color-area' attribute. If true, the attribute is added; if false, the attribute is removed.
     */
    set noColorArea(value) {
        if (value) {
            this.setAttribute('no-color-area', '');
        } else {
            this.removeAttribute('no-color-area');
        }
    }

    /**
     * Getter method to check if the 'no-color-area' attribute is applied.
     * @returns {boolean} Returns true if the 'no-color-area' attribute is present; otherwise, false.
     */
    get noColorArea() {
        return this.hasAttribute('no-color-area');
    }

    /**
     * Sets or removes the "no-controls" attribute.
     * @param {boolean} value If true, sets the "no-controls" attribute. If false, removes the "no-controls" attribute.
     */
    set noControls(value) {
        if (value) {
            this.setAttribute('no-controls', '');
        } else {
            this.removeAttribute('no-controls');
        }
    }

    /**
     * Checks if the 'no-controls' attribute is present on the element.
     * @returns {boolean} Returns true if the 'no-controls' attribute is present; otherwise, false.
     */
    get noControls() {
        return this.hasAttribute('no-controls');
    }

    /**
     * Sets or removes the 'no-swatches' attribute on the element.
     * If the value is truthy, the 'no-swatches' attribute is added.
     * If the value is falsy, the 'no-swatches' attribute is removed.
     * @param {boolean} value Determines whether the 'no-swatches' attribute is set (true) or removed (false).
     */
    set noSwatches(value) {
        if (value) {
            this.setAttribute('no-swatches', '');
        } else {
            this.removeAttribute('no-swatches');
        }
    }

    /**
     * Checks if the 'no-swatches' attribute is present on the element.
     * @returns {boolean} Returns true if the 'no-swatches' attribute is present; otherwise, false.
     */
    get noSwatches() {
        return this.hasAttribute('no-swatches');
    }

    /**
     * Enables/disables manual typing in the input.
     * @param {boolean} value
     */
    set inputEditable(value) {
        if (value) {
            this.setAttribute('input-editable', '');
        } else {
            this.removeAttribute('input-editable');
        }
    }

    /**
     * Returns true when manual input typing is enabled.
     * @returns {boolean}
     */
    get inputEditable() {
        return this.hasAttribute('input-editable');
    }

    className = 'ColorPicker';

    /**
     * Getter for the CSS stylesheet.
     * @returns {object} The styles object.
     * @static
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for the observed attributes.
     * @returns {Array} An empty array.
     * @static
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Sets up the attributes for the ColorPicker.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Creates and returns a document fragment containing the structure and components of a custom color picker.
     * The method initializes DOM elements such as divs, sliders, and inputs, with specific classes and attributes,
     * and attaches various event listeners to handle user interactions.
     * @returns {DocumentFragment} A DocumentFragment containing the constructed and fully initialized DOM elements for the color picker.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.classList.add('native-color-picker');

        // ANCHOR
        let anchor = document.createElement('div');
        anchor.setAttribute('slot', 'anchor');
        anchor.setAttribute('part', 'anchor');
        anchor.classList.add('anchor');

        // PICKER
        let picker = document.createElement('div');
        picker.classList.add('picker');

        // MARKER
        let marker = document.createElement('div');
        marker.classList.add('marker');

        // COLOR AREA
        let colorArea = document.createElement('div');
        colorArea.classList.add('color-area');
        colorArea.addEventListener('click', this.moveMarker);

        colorArea.addEventListener('mousedown', (e) => {
            e.preventDefault();
            const stopMoving = () => {
                window.removeEventListener('mousemove', this.moveMarker);
                window.removeEventListener('mouseup', stopMoving);
            };
            window.addEventListener('mousemove', this.moveMarker);
            window.addEventListener('mouseup', stopMoving);
            this.moveMarker(e); // inicializuj prvý pohyb
        });

        let wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        let hueSlider = document.createElement('wje-slider');
        hueSlider.setAttribute('min', '0');
        hueSlider.setAttribute('max', '360');
        hueSlider.classList.add('hue');
        hueSlider.addEventListener('wje-slider:move', this.setHue);

        let alphaWrapper = document.createElement('div');
        alphaWrapper.classList.add('alpha-wrapper');

        let alphaSlider = document.createElement('wje-slider');
        alphaSlider.setAttribute('min', '0');
        alphaSlider.setAttribute('max', '100');
        alphaSlider.setAttribute('value', '50');
        alphaSlider.classList.add('alpha');
        alphaSlider.addEventListener('wje-slider:move', this.setAlpha);

        let inputWrapper = document.createElement('div');
        inputWrapper.classList.add('input-wrapper');

        let colorPreview = document.createElement('div');
        colorPreview.classList.add('color-preview');

        let input = document.createElement('wje-input');
        input.setAttribute('variant', 'standard');
        input.setAttribute('maxlength', '9');
        if ((!this.noColorArea || !this.noControls || !this.noSwatches) && !this.inputEditable)
            input.setAttribute('readonly', '');
        input.classList.add('input');
        input.addEventListener('wje-input:input', () => {
            let rawValue = (input.value || '').trim();

            // Guard against excessively long manual input (with/without # prefix).
            const hasHashPrefix = rawValue.startsWith('#');
            const maxLength = hasHashPrefix ? 9 : 8;
            if (rawValue.length > maxLength) {
                rawValue = rawValue.slice(0, maxLength);
                input.value = rawValue;
            }

            // For hex typing, update color only when user has at least 6 hex chars (RRGGBB).
            const hexCandidate = hasHashPrefix ? rawValue.slice(1) : rawValue;
            const isHex = /^[0-9a-fA-F]+$/.test(hexCandidate);
            if (isHex) {
                if (hexCandidate.length < 6) return;
                if (![6, 8].includes(hexCandidate.length)) return;
            }

            const parsedColor = tinycolor(isHex ? `#${hexCandidate}` : rawValue);
            if (!parsedColor.isValid()) return;

            // Keep hue/alpha controls in sync when color is typed manually.
            this._manualInputValue = rawValue;
            this.setSliders(parsedColor.toHex8String());
            this.setColor(parsedColor, 'input');
            this._manualInputValue = null;
        });

        // APPEND
        colorArea.append(marker);

        alphaWrapper.append(alphaSlider);

        inputWrapper.append(colorPreview, input);

        if(!this.noControls)
            wrapper.append(hueSlider, alphaWrapper)

        wrapper.append(inputWrapper);

        if(!this.noColorArea)
            picker.append(colorArea);

        picker.append(wrapper);

        if(!this.noSwatches)
            this.createSwatches(wrapper);

        native.append(picker);

        fragment.append(native);

        this.anchor = anchor;
        this.picker = picker;
        this.marker = marker;
        this.colorArea = colorArea;
        this.hueSlider = hueSlider;
        this.alphaSlider = alphaSlider;
        this.colorPreview = colorPreview;
        this.input = input;

        return fragment;
    }

    /**
     * Executes after the component is drawn. Initializes some configurations if not already initialized,
     * including updating slider values, setting marker positions, and applying initial color settings.
     * This method ensures that all necessary visual elements and configurations are properly set up.
     * @returns {void} Does not return a value.
     */
    afterDraw() {
        this.#init = false;

        if (!this.#init) {
            window.setTimeout(() => {
                if (this.color !== '') this.alphaSlider.value = 100;

                this.colorAreaDimension = this.dimension();
                this.markerPosition = this.setMarkerPositionByColor(this.color);
                this.setMarkerPosition(this.markerPosition.x, this.markerPosition.y);

                this.setSliders(this.color);
                this.setColor(tinycolor(this.color), 'init');
            }, 0);

            this.#init = true;
        }
    }

    /**
     * Sets the hue.
     * @param node
     */
    createSwatches(node) {
        if (this.swatches.length === 0) return;

        let swatches = document.createElement('div');
        swatches.classList.add('swatches');

        this.swatches.forEach((swatch) => {
            if (!tinycolor(swatch).isValid()) return;

            let button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.classList.add('swatch');
            button.style.setProperty('--wje-color-picker-swatch', swatch);
            button.addEventListener('click', () => {
                this.setSliders(swatch);
                this.setColor(tinycolor(swatch), 'swatch');
            });

            swatches.appendChild(button);
        });

        node.appendChild(swatches);
    }

    /**
     * Sets the sliders to the given color.
     * @param color
     */
    setSliders(color) {
        let hsva = tinycolor(color).toHsv();
        this.hueSlider.value = hsva.h;
        this.alphaSlider.value = hsva.a * 100;
    }

    /**
     * Retrieves the dimensions and position of the color area element relative to the viewport.
     * @returns {object} An object containing the following properties:
     * width: The width of the element in pixels.
     * height: The height of the element in pixels.
     * x: The x-coordinate of the element's left edge relative to the viewport.
     * y: The y-coordinate of the element's top edge relative to the viewport.
     */
    dimension() {
        const rect = this.colorArea.getBoundingClientRect();
        return {
            width: rect.width,
            height: rect.height,
            x: rect.left,   // viewport-relative
            y: rect.top,    // viewport-relative
        };
    }

    /**
     * Method executed before disconnecting. Resets the initialization state to false.
     * @returns {void} Does not return a value.
     */
    beforeDisconnect() {
        this.#init = true;
    }

    /**
     * Updates the position of the marker based on the pointer event.
     * This function calculates the position of the marker relative to the color area
     * dimensions based on the given event. It adjusts the marker position and updates
     * the color associated with the new position. It is intended to handle pointer movement
     * events such as mouse or touch interactions.
     * @param {Event} e The event triggering the marker movement, typically a mouse or touch event.
     */
    moveMarker = (e) => {
        this.colorAreaDimension = this.dimension();
        const pointer = this.getPointerPosition(e);

        const x = pointer.x - this.colorAreaDimension.x;
        const y = pointer.y - this.colorAreaDimension.y;
        const markerPosition = this.clampMarkerPosition(x, y);
        const alpha = Number(this.alphaSlider?.value || 100);

        this.setColor(this.setColorAtPosition(markerPosition.x, markerPosition.y, alpha), 'marker');
        this.setMarkerPosition(markerPosition.x, markerPosition.y);
    };

    /**
     * Gets the pointer position in client coordinates (viewport-relative).
     * @param e
     * @returns {{x: number, y: number}}
     */
    getPointerPosition(e) {
        const p = (e.touches && e.touches[0]) || (e.changedTouches && e.changedTouches[0]) || e;
        return {
            x: p.clientX,
            y: p.clientY,
        };
    }

    /**
     * Sets the position of the marker.
     * @param x
     * @param y
     */
    setMarkerPosition(x, y) {
        const markerPosition = this.clampMarkerPosition(x, y);

        this.markerPosition = {
            x: markerPosition.x,
            y: markerPosition.y,
        };

        // Set the position
        this.marker.style.left = `${markerPosition.x}px`;
        this.marker.style.top = `${markerPosition.y}px`;
    }

    /**
     * Clamps marker coordinates to the color area boundaries.
     * @param {number} x
     * @param {number} y
     * @returns {{x: number, y: number}}
     */
    clampMarkerPosition(x, y) {
        const width = this.colorAreaDimension?.width || 0;
        const height = this.colorAreaDimension?.height || 0;

        const safeX = Number.isFinite(x) ? x : 0;
        const safeY = Number.isFinite(y) ? y : 0;

        return {
            x: Math.min(Math.max(safeX, 0), width),
            y: Math.min(Math.max(safeY, 0), height),
        };
    }

    /**
     * Sets the color at the given position.
     * @param x
     * @param y
     * @param alpha
     * @returns {*|tinycolor}
     */
    setColorAtPosition(x, y, alpha = 100) {
        const markerPosition = this.clampMarkerPosition(x, y);
        const width = this.colorAreaDimension?.width || 0;
        const height = this.colorAreaDimension?.height || 0;
        const safeAlpha = Number.isFinite(Number(alpha)) ? Number(alpha) : 100;

        // In variants without color-area we keep current saturation/value.
        if (width <= 0 || height <= 0) {
            const fallbackHsv = tinycolor(this.input?.value || this.color).toHsv();

            return tinycolor({
                h: this.hueSlider.value * 1,
                s: fallbackHsv.s,
                v: fallbackHsv.v,
                a: Math.max(0, Math.min(100, safeAlpha)) / 100,
            });
        }

        const hsva = {
            h: this.hueSlider.value * 1,
            s: (markerPosition.x / width) * 100,
            v: 100 - (markerPosition.y / height) * 100,
            a: Math.max(0, Math.min(100, safeAlpha)) / 100,
        };

        return tinycolor(hsva);
    }

    /**
     * Sets the marker position by color.
     * @param color
     * @returns {{x: number, y: number}}
     */
    setMarkerPositionByColor = (color = 'red') => {
        let hsva = tinycolor(color).toHsv();
        const width = this.colorAreaDimension?.width || 0;
        const height = this.colorAreaDimension?.height || 0;
        const safeS = Number.isFinite(hsva.s) ? hsva.s : 0;
        const safeV = Number.isFinite(hsva.v) ? hsva.v : 0;

        return {
            x: width * safeS,
            y: height - height * safeV,
        };
    }

    /**
     * Updates the color picker's current color and its associated UI elements.
     * @param {tinycolor.Instance|null} [color] The color value to set. If null, the current value from the input field is used.
     * @param {string} [type] The type of action determining which UI element to update. Possible values: "marker", "hue", "alpha", "swatch", "input".
     */
    setColor = (color = null, type = '') => {
        let currentColor = color;

        if (currentColor === null && type === '') {
            currentColor = tinycolor(this.input.value);
            this.colorArea.style.setProperty('--wje-color-picker-area', currentColor.toHexString());
        }

        // SET: marker - HEX8
        if (type === 'marker') {
            this.alphaSlider.style.setProperty('--wje-color-picker-value', currentColor.toHexString());
            this.colorPreview.style.setProperty('--wje-color-picker-value', currentColor.toHex8String());
            this.picker.style.setProperty('--wje-color-picker-value', currentColor.toHexString());
            this.marker.style.setProperty('--wje-color-picker-value', currentColor.toHex8String());
        }

        // SET: hue - HEX
        if (type === 'hue') {
            let markerColorByPosition = this.setColorAtPosition(
                this.markerPosition.x,
                this.markerPosition.y,
                this.alphaSlider.value
            );

            const hueColor = this.getHueAreaColor(this.getHSVA(this.hueSlider.value, 100));

            this.colorPreview.style.setProperty('--wje-color-picker-value', markerColorByPosition.toHex8String());
            this.marker.style.setProperty('--wje-color-picker-value', markerColorByPosition.toHexString());
            this.alphaSlider.style.setProperty('--wje-color-picker-value', markerColorByPosition.toHexString());
            this.colorArea.style.setProperty('--wje-color-picker-area', hueColor);
            this.input.value = markerColorByPosition.toHex8String();
            currentColor = markerColorByPosition;
        }

        // SET: alpha - HEX8
        if (type === 'alpha') {
            currentColor = tinycolor(this.input.value);
            let hsv = currentColor.toHsv();
            hsv.a = this.alphaSlider.value / 100;
            currentColor = tinycolor(hsv);
            this.colorPreview.style.setProperty('--wje-color-picker-value', currentColor.toHex8String());
        }

        // SET: swatch - HEX
        if (type === 'swatch' || type === 'init' || type === 'input') {
            this.colorPreview.style.setProperty('--wje-color-picker-value', currentColor.toHex8String());
            this.marker.style.setProperty('--wje-color-picker-value', currentColor.toHexString());
            this.alphaSlider.style.setProperty('--wje-color-picker-value', currentColor.toHexString());
            this.colorArea.style.setProperty('--wje-color-picker-area', this.getHueAreaColor(currentColor.toHex8String()));

            this.markerPosition = this.setMarkerPositionByColor(currentColor.toHex8String());
            this.setMarkerPosition(this.markerPosition.x, this.markerPosition.y);
        }

        if (!currentColor?.isValid()) return;

        if(!this.noColorArea || !this.noControls || !this.noSwatches) {
            if (type === 'input' && this.inputEditable && typeof this._manualInputValue === 'string') {
                this.input.value = this._manualInputValue;
            } else {
                this.input.value = currentColor.toHex8String();
            }
        }

        this.anchor.style.setProperty('--wje-color-picker-value', currentColor.toHexString());
        this.value = {
            hex8: currentColor.toHex8String(),
            hex: currentColor.toHexString(),
            rgb: currentColor.toRgbString(),
            rgba: currentColor.toRgbString(),
            hsl: currentColor.toHslString(),
            hsla: currentColor.toHslString(),
            hsv: currentColor.toHsvString(),
            hsva: currentColor.toHsvString(),
            name: currentColor.toName(),
            format: currentColor.getFormat(),
        };
        this.color = currentColor.toHex8String();

        event.dispatchCustomEvent(this, 'wje-color-picker:select', {
            value: this.value,
        });
    }

    /**
     * Sets the hue.
     * @param {object} e The event object.
     */
    setHue = (e) => {
        this.hueSlider.value = e.detail.value;

        this.setColor(null, 'hue');
    }

    /**
     * Sets the alpha.
     * @param {object} e The event object.
     */
    setAlpha = (e) => {
        this.alphaSlider.value = e.detail.value;

        this.setColor(null, 'alpha');
    }

    /**
     * Converts hue and alpha values into an HSVA color string.
     * @param {number} hue The hue value, typically between 0 and 360.
     * @param {number} alpha The alpha value, typically between 0 and 100, representing the opacity percentage.
     * @returns {string} - The HSVA color string in the format `hsva(h, 100%, 100%, a)`.
     */
    getHSVA = (hue, alpha) => {
        return `hsva(${hue}, 100%, 100%, ${alpha / 100})`;
    }

    /**
     * Returns fully saturated and bright color for the current hue.
     * Used as base color for the SV area so neutral grays do not black out the palette.
     * @param {string} color
     * @returns {string}
     */
    getHueAreaColor(color = '#ff0000') {
        const hsv = tinycolor(color).toHsv();
        const hue = Number.isFinite(hsv.h) ? hsv.h : Number(this.hueSlider?.value || 0);

        return tinycolor({
            h: hue,
            s: 100,
            v: 100,
            a: 1,
        }).toHexString();
    }
}
