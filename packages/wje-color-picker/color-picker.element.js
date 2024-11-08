import { default as WJElement, event } from "../wje-element/element.js";
import tinycolor from "tinycolor2";

import styles from "./styles/styles.css?inline";

/**
 * @summary ColorPicker is a custom web component that extends WJElement.
 * It provides a color picker functionality with a color area, hue slider, alpha slider, and color swatches.
 * The color picker allows users to select a color by moving a marker on the color area, adjusting the hue and alpha sliders, or clicking on a color swatch.
 * @documentation https://elements.webjet.sk/components/color-picker
 * @status stable
 *
 * @extends WJElement
 *
 * @slot - The card header main content.
 *
 * @part anchor - The anchor part of the color picker.
 * @part picker - The main part of the color picker.
 * @part marker - The marker part of the color picker.
 * @part color-area - The color area part of the color picker.
 * @part hue - The hue slider part of the color picker.
 * @part alpha - The alpha slider part of the color picker.
 * @part color-preview - The color preview part of the color picker.
 * @part input - The input part of the color picker.
 *
 * @cssproperty [--wje-color-picker-area] - The color of the color area.
 * @cssproperty [--wje-color-picker-value] - The value of the color picker.
 */

export default class ColorPicker extends WJElement {
    /**
     * ColorPicker constructor.
     */
    constructor() {
        super();

        /**
         * The position of the color marker.
         * @type {Object}
         * @private
         */
        this._markerPosition = {
            markerX: "0",
            markerY: "0"
        }

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
            'rgba(0,119,182,0.8)'
        ];
    }

    /**
     * Setter for the marker position.
     * @param {Object} value - The new marker position.
     */
    set markerPosition(value) {
        this._markerPosition = value;
    }

    /**
     * Getter for the marker position.
     * @returns {Object} The current marker position.
     */
    get markerPosition() {
        return this._markerPosition;
    }

    /**
     * Setter for the color swatches.
     * @param {string} value - The new color swatches.
     */
    set swatches(value) {
        this.setAttribute("swatches", value.split(","));
    }

    /**
     * Getter for the color swatches.
     * @returns {Array} The current color swatches.
     */
    get swatches() {
        return this._swatches;
    }

    className = "ColorPicker";

    /**
     * Getter for the CSS stylesheet.
     * @returns {Object} The styles object.
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
        this.isShadowRoot = "open";
    }

    /**
     * Draws the ColorPicker.
     * @param {Object} context - The context to draw in.
     * @param {Object} store - The store to use.
     * @param {Object} params - The parameters to use.
     * @returns {DocumentFragment} The created document fragment.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.classList.add("native-color-picker");

        // ANCHOR
        let anchor = document.createElement("div");
        anchor.setAttribute("slot", "anchor");
        anchor.setAttribute("part", "anchor");
        anchor.classList.add("anchor");

        // PICKER
        let picker = document.createElement("div");
        picker.classList.add("picker");

        // MARKER
        let marker = document.createElement("div");
        marker.classList.add("marker");

        // COLOR AREA
        let colorArea = document.createElement("div");
        colorArea.classList.add("color-area");
        colorArea.addEventListener("click", this.moveMarker);

        let wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");

        let hueSlider = document.createElement("wje-slider");
        hueSlider.setAttribute("min", "0");
        hueSlider.setAttribute("max", "360");
        hueSlider.classList.add("hue");
        hueSlider.addEventListener("wje:slider-move", this.setHue);

        let alphaWrapper = document.createElement("div");
        alphaWrapper.classList.add("alpha-wrapper");

        let alphaSlider = document.createElement("wje-slider");
        alphaSlider.setAttribute("min", "0");
        alphaSlider.setAttribute("max", "100");
        alphaSlider.setAttribute("value", "50");
        alphaSlider.classList.add("alpha");
        alphaSlider.addEventListener("wje:slider-move", this.setAlpha);

        let inputWrapper = document.createElement("div");
        inputWrapper.classList.add("input-wrapper");

        let colorPreview = document.createElement("div");
        colorPreview.classList.add("color-preview");

        let input = document.createElement("wje-input");
        input.classList.add("input");
        input.setAttribute("variant", "standard");
        input.value = "#ff0000";

        // APPEND

        colorArea.appendChild(marker);

        alphaWrapper.appendChild(alphaSlider);

        inputWrapper.appendChild(colorPreview);
        inputWrapper.appendChild(input);

        wrapper.appendChild(hueSlider);
        wrapper.appendChild(alphaWrapper);
        wrapper.appendChild(inputWrapper);

        picker.appendChild(colorArea);
        picker.appendChild(wrapper);

        this.createSwatches(wrapper);

        // POPUP
        let popup = document.createElement("wje-popup");
        popup.setAttribute("placement", this.placement || "bottom-start");
        popup.setAttribute("offset", this.offset);
        popup.setAttribute("manual", "");
        popup.appendChild(anchor);
        popup.appendChild(picker);

        native.appendChild(popup);

        fragment.appendChild(native);

        this.popup = popup;
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
     * Sets the hue.
     * @param node
     */
    createSwatches(node) {
        if (this.swatches.length === 0) return;

        let swatches = document.createElement("div");
        swatches.classList.add("swatches");

        this.swatches.forEach((swatch) => {
            let button = document.createElement("button");
            button.classList.add("swatch");
            button.style.setProperty("--wje-color-picker-swatch", swatch);
            button.addEventListener("click", (e) => {
                this.setSliders(swatch);
                this.setColor(tinycolor(swatch), "swatch");
            });

            swatches.appendChild(button);
        });

        node.appendChild(swatches);
    }

    /**
     * Sets up the event listeners for the ColorPicker.
     * @param {Object} context - The context to use.
     * @param {Object} store - The store to use.
     * @param {Object} params - The parameters to use.
     */
    afterDraw() {
        this.init = false;
        // ak sa otvori popup tak si odchytime event a nastavime potrebne parametre
        this.addEventListener("wje-popup:show", (e) => {
            if (!this.init) {
                window.setTimeout(() => {

                    this.colorAreaDimension = this.dimension();
                    this.markerPosition = this.setMarkerPositionByColor(this.input.value);
                    this.setMarkerPosition(this.markerPosition.x, this.markerPosition.y);

                    if (this.input.value !== "")
                        this.alphaSlider.value = 100;

                    this.setColor();
                }, 0);

                this.init = true;
            }
        });
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
     * Gets the dimensions of the color area.
     * @returns {{width: *, x: *, y: *, height: *}}
     */
    dimension() {
        return {
            width: this.colorArea.offsetWidth,
            height: this.colorArea.offsetHeight,
            x: this.colorArea.offsetLeft,
            y: this.colorArea.offsetTop,
        }
    }

    /**
     * Disconnects the ColorPicker.
     */
    beforeDisconnect() {
        this.init = false;
    }

    /**
     * Moves the marker to the given position.
     * @param e
     */
    moveMarker = (e) => {
        this.colorAreaDimension = this.dimension();
        const pointer = this.getPointerPosition(e);

        let x = pointer.pageX - this.colorAreaDimension.x;
        let y = pointer.pageY - this.colorAreaDimension.y;

        this.setColor(this.setColorAtPosition(x, y), "marker");
        this.setMarkerPosition(x, y);
    }

    /**
     * Sets the hue.
     * @param e
     * @returns {{pageY: (*|number), pageX: (*|number)}}
     */
    getPointerPosition(e) {
        return {
            pageX: e.changedTouches ? e.changedTouches[0].pageX : e.clientX,
            pageY: e.changedTouches ? e.changedTouches[0].pageY : e.clientY
        };
    }

    /**
     * Sets the position of the marker.
     * @param x
     * @param y
     */
    setMarkerPosition(x, y) {
        // Make sure the marker doesn't go out of bounds
        x = (x < 0) ? 0 : (x > this.colorAreaDimension.width) ? this.colorAreaDimension.width : x;
        y = (y < 0) ? 0 : (y > this.colorAreaDimension.height) ? this.colorAreaDimension.height : y;

        this.markerPosition = {
            x: x,
            y: y
        };

        // Set the position
        this.marker.style.left = `${x}px`;
        this.marker.style.top = `${y}px`;
    }

    /**
     * Sets the color at the given position.
     * @param x
     * @param y
     * @param alpha
     * @returns {*|tinycolor}
     */
    setColorAtPosition(x, y, alpha = 100) {
        const hsva = {
            h: this.hueSlider.value * 1,
            s: x / this.colorAreaDimension.width * 100,
            v: 100 - (y / this.colorAreaDimension.height * 100),
            a: alpha / 100
        };

        return tinycolor(hsva);
    }

    /**
     * Sets the marker position by color.
     * @param color
     * @returns {{x: number, y: number}}
     */
    setMarkerPositionByColor = (color = "red") => {
        let hsva = tinycolor(color).toHsv();
        return {
            x: this.colorAreaDimension.width * hsva.s,
            y: this.colorAreaDimension.height - (this.colorAreaDimension.height * hsva.v)
        };
    }

    /**
     * Sets the color.
     * @param color
     * @param type
     */
    setColor = (color = null, type = "") => {
        let currentColor = color;

        if (currentColor === null && type === "") {
            currentColor = tinycolor(this.input.value);
            this.colorArea.style.setProperty("--wje-color-picker-area", currentColor.toHexString());
        }

        // SET: marker - HEX8
        if (type === "marker") {
            this.alphaSlider.value = 100;
            this.alphaSlider.style.setProperty("--wje-color-picker-value", currentColor.toHexString());
            this.colorPreview.style.setProperty("--wje-color-picker-value", currentColor.toHex8String());
            this.picker.style.setProperty("--wje-color-picker-value", currentColor.toHexString());
            this.marker.style.setProperty("--wje-color-picker-value", currentColor.toHex8String());
        }

        // SET: hue - HEX
        if (type === "hue") {
            let markerColorByPosition = this.setColorAtPosition(this.markerPosition.x, this.markerPosition.y, this.alphaSlider.value);

            currentColor = tinycolor(this.getHSVA(this.hueSlider.value, this.alphaSlider.value));

            this.colorPreview.style.setProperty("--wje-color-picker-value", markerColorByPosition.toHex8String());
            this.marker.style.setProperty("--wje-color-picker-value", markerColorByPosition.toHexString());
            this.alphaSlider.style.setProperty("--wje-color-picker-value", currentColor.toHexString());
            this.colorArea.style.setProperty("--wje-color-picker-area", currentColor.toHexString());
            this.input.value = markerColorByPosition.toHex8String();
        }

        // SET: alpha - HEX8
        if (type === "alpha") {
            currentColor = tinycolor(this.input.value);
            let hsv = currentColor.toHsv();
            hsv.a = this.alphaSlider.value / 100;
            currentColor = tinycolor(hsv);
            this.colorPreview.style.setProperty("--wje-color-picker-value", currentColor.toHex8String());
        }

        // SET: swatch - HEX
        if (type === "swatch") {
            this.colorPreview.style.setProperty("--wje-color-picker-value", currentColor.toHex8String());
            this.marker.style.setProperty("--wje-color-picker-value", currentColor.toHexString());
            this.alphaSlider.style.setProperty("--wje-color-picker-value", currentColor.toHexString());
            this.colorArea.style.setProperty("--wje-color-picker-area", currentColor.toHex8String());

            this.markerPosition = this.setMarkerPositionByColor(currentColor.toHex8String());
            this.setMarkerPosition(this.markerPosition.x, this.markerPosition.y);
        }

        this.input.value = currentColor.toHex8String();
        this.anchor.style.setProperty("--wje-color-picker-value", currentColor.toHexString());

        this.value = {
            "hex8": currentColor.toHex8String(),
            "hex": currentColor.toHexString(),
            "rgb": currentColor.toRgbString(),
            "rgba": currentColor.toRgbString(),
            "hsl": currentColor.toHslString(),
            "hsla": currentColor.toHslString(),
            "hsv": currentColor.toHsvString(),
            "hsva": currentColor.toHsvString(),
            "name": currentColor.toName(),
            "format": currentColor.getFormat(),
        };
        event.dispatchCustomEvent(this, "wje-color-picker:select", this.value);
    }

    /**
     * Sets the hue.
     * @param e
     */
    setAlpha = (e) => {
        this.alphaSlider.value = e.detail.value;

        this.setColor(null, "alpha");
    }

    /**
     * Sets the hue.
     * @param hue
     * @param alpha
     * @returns {`hsva(${string}, 100%, 100%, ${number})`}
     */
    getHSVA = (hue, alpha) => {
        return `hsva(${hue}, 100%, 100%, ${alpha / 100})`;
    }
}