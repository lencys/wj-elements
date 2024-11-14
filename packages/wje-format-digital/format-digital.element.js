import { default as WJElement } from "../wje-element/element.js";
import { Localizer } from "../utils/localize.js";
import styles from "./styles/styles.css?inline";

export default class FormatDigital extends WJElement {
    /**
     * Creates an instance of FormatDigital.
     *
     * @constructor
     */
    constructor() {
        super();
        this.localizer = new Localizer(this);
    }

    /**
     * Returns the unit of the digital format.
     *
     * @returns {string}
     */
    get unit() {
        return this.hasAttribute("unit") ? this.getAttribute("unit") : "byte";
    }

    className = "FormatDigital";

    /**
     * Returns the CSS styles for the component.
     *
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Returns the list of attributes to observe for changes.
     *
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes() {
        return ["value"];
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Prepares the component before drawing.
     */
    beforeDraw() {
        if(this.value < 0) return;
        const bitPrefixes = ['', 'kilo', 'mega', 'giga', 'tera'];
        const bytePrefixes = ['', 'kilo', 'mega', 'giga', 'tera', 'peta'];
        const prefix = this.unit === 'bit' ? bitPrefixes : bytePrefixes;
        const index = Math.max(0, Math.min(Math.floor(Math.log10(this.value) / 3), prefix.length - 1));
        const unit = prefix[index] + this.unit;
        const value = parseFloat((this.value / Math.pow(1000, index)).toPrecision(3));

        this.formattedValue = this.localizer.formatNumber(value, {
            style: "unit",
            unit: unit,
            unitDisplay: this.unitDisplay || "short"
        });
    }

    /**
     * Draws the component.
     *
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("div");
        element.setAttribute("part", "native");
        element.classList.add("native-format-digital");

        let formatted = document.createElement("span");
        formatted.setAttribute("part", "formatted");
        formatted.innerText = this.formattedValue;

        let start = document.createElement("slot");
        start.setAttribute("name", "start");

        let end = document.createElement("slot");
        end.setAttribute("name", "end");

        element.appendChild(start);
        element.appendChild(formatted);
        element.appendChild(end);

        fragment.appendChild(element);

        return fragment;
    }
}