import { default as WJElement, event } from "../wj-element/wj-element.js";
import tinycolor from "tinycolor2";

import styles from "./scss/styles.scss?inline";

export class ColorPicker extends WJElement {
    constructor() {
        super();

        this._markerPosition = {
            markerX: "0",
            markerY: "0"
        }

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

    set markerPosition(value) {
        this._markerPosition = value;
    }

    get markerPosition() {
        return this._markerPosition;
    }

    set swatches(value) {
        this.setAttribute("swatches", value.split(","));
    }

    get swatches() {

        return this._swatches;
    }

    className = "ColorPicker";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return [];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
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

        let hueSlider = document.createElement("wj-slider");
        hueSlider.setAttribute("min", "0");
        hueSlider.setAttribute("max", "360");
        hueSlider.classList.add("hue");
        hueSlider.addEventListener("wj:slider-move", this.setHue);

        let alphaWrapper = document.createElement("div");
        alphaWrapper.classList.add("alpha-wrapper");

        let alphaSlider = document.createElement("wj-slider");
        alphaSlider.setAttribute("min", "0");
        alphaSlider.setAttribute("max", "100");
        alphaSlider.setAttribute("value", "50");
        alphaSlider.classList.add("alpha");
        alphaSlider.addEventListener("wj:slider-move", this.setAlpha);

        let inputWrapper = document.createElement("div");
        inputWrapper.classList.add("input-wrapper");

        let colorPreview = document.createElement("div");
        colorPreview.classList.add("color-preview");

        let input = document.createElement("wj-input");
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
        let popup = document.createElement("wj-popup");
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

    createSwatches(node) {
        if(this.swatches.length === 0) return;

        let swatches = document.createElement("div");
        swatches.classList.add("swatches");

        this.swatches.forEach((swatch) => {
            let button = document.createElement("button");
            button.classList.add("swatch");
            button.style.setProperty("--wj-color-picker-swatch", swatch);
            button.addEventListener("click", (e) => {
                this.setSliders(swatch);
                this.setColor(tinycolor(swatch), "swatch");
            });

            swatches.appendChild(button);
        });

        node.appendChild(swatches);
    }

    setSliders(color) {
        let hsva = tinycolor(color).toHsv();
        this.hueSlider.value = hsva.h;
        this.alphaSlider.value = hsva.a * 100;
    }

    afterDraw() {
        this.init = false;
        // ak sa otvori popup tak si odchytime event a nastavime potrebne parametre
        this.addEventListener("wj-popup:show", (e) => {
            if(!this.init) {
                window.setTimeout(() => {

                    this.colorAreaDimension = this.dimension();
                    this.markerPosition = this.setMarkerPositionByColor(this.input.value);
                    this.setMarkerPosition(this.markerPosition.x, this.markerPosition.y);

                    if(this.input.value != "")
                        this.alphaSlider.value = 100;

                    this.setColor();
                }, 0);

                this.init = true;
            }
        });
    }

    dimension() {
        return {
            width: this.colorArea.offsetWidth,
            height: this.colorArea.offsetHeight,
            x: this.colorArea.offsetLeft,
            y: this.colorArea.offsetTop,
        }
    }

    disconnectedCallback() {
        this.init = false;
    }

    moveMarker = (event) => {
        this.colorAreaDimension = this.dimension();
        const pointer = this.getPointerPosition(event);

        let x = pointer.pageX - this.colorAreaDimension.x;
        let y = pointer.pageY - this.colorAreaDimension.y;

        this.setColor(this.setColorAtPosition(x, y), "marker");
        this.setMarkerPosition(x, y);
    }

    getPointerPosition(event) {
        return {
            pageX: event.changedTouches ? event.changedTouches[0].pageX : event.clientX,
            pageY: event.changedTouches ? event.changedTouches[0].pageY : event.clientY
        };
    }

    /*
    * Nastavi poziu markera
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

    /*
    * nastavenie farby podla pozicie markera
    * @param x
    * @param y
    * @returns {tinycolor}
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

    /*
    * @desc nanstavenie pozicie markera podla farby
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

    /*
    * Set css variable color value
    */
    setColor = (color = null, type = "") => {
        let currentColor = color;

        if(currentColor === null && type === "") {
            currentColor = tinycolor(this.input.value);
            this.colorArea.style.setProperty("--wj-color-picker-area", currentColor.toHexString());
        }

        // SET: marker - HEX8
        if(type === "marker") {
            this.alphaSlider.value = 100;
            this.alphaSlider.style.setProperty("--wj-color-picker-value", currentColor.toHexString());
            this.colorPreview.style.setProperty("--wj-color-picker-value", currentColor.toHex8String());
            this.picker.style.setProperty("--wj-color-picker-value", currentColor.toHexString());
            this.marker.style.setProperty("--wj-color-picker-value", currentColor.toHex8String());
        }

        // SET: hue - HEX
        if(type === "hue") {
            let markerColorByPosition = this.setColorAtPosition(this.markerPosition.x, this.markerPosition.y, this.alphaSlider.value);

            currentColor = tinycolor(this.getHSVA(this.hueSlider.value, this.alphaSlider.value));

            this.colorPreview.style.setProperty("--wj-color-picker-value", markerColorByPosition.toHex8String());
            this.marker.style.setProperty("--wj-color-picker-value", markerColorByPosition.toHexString());
            this.alphaSlider.style.setProperty("--wj-color-picker-value", currentColor.toHexString());
            this.colorArea.style.setProperty("--wj-color-picker-area", currentColor.toHexString());
            this.input.value = markerColorByPosition.toHex8String();
        }

        // SET: alpha - HEX8
        if(type === "alpha") {
            currentColor = tinycolor(this.input.value);
            let hsv = currentColor.toHsv();
            hsv.a = this.alphaSlider.value / 100;
            currentColor = tinycolor(hsv);
            this.colorPreview.style.setProperty("--wj-color-picker-value", currentColor.toHex8String());

            // this.input.value = currentColor.toHex8String();
        }

        // SET: swatch - HEX
        if(type === "swatch") {
            this.colorPreview.style.setProperty("--wj-color-picker-value", currentColor.toHex8String());
            this.marker.style.setProperty("--wj-color-picker-value", currentColor.toHexString());
            this.alphaSlider.style.setProperty("--wj-color-picker-value", currentColor.toHexString());
            this.colorArea.style.setProperty("--wj-color-picker-area", currentColor.toHex8String());

            this.markerPosition = this.setMarkerPositionByColor(currentColor.toHex8String());
            this.setMarkerPosition(this.markerPosition.x, this.markerPosition.y);
        }

        this.input.value = currentColor.toHex8String();
        this.anchor.style.setProperty("--wj-color-picker-value", currentColor.toHexString());

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
        event.dispatchCustomEvent(this, "wj-color-picker:select", this.value);
    }

    /*
    * Set hue sliders
     */
    setHue = (e) => {
        this.hueSlider.value = e.detail.value;

        this.setColor(null, "hue");
    }

    /*
    * Set alpha sliders
     */
    setAlpha = (e) => {
        this.alphaSlider.value = e.detail.value;

        this.setColor(null, "alpha");
    }

    /*
    * Get HSVA color order by hue and alpha
     */
    getHSVA = (hue, alpha) => {
        return `hsva(${hue}, 100%, 100%, ${alpha / 100})`;
    }
}

customElements.get("wj-color-picker") || window.customElements.define("wj-color-picker", ColorPicker);