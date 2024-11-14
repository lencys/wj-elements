import { default as WJElement, event } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `InputFile` is a custom web component that represents a file input.
 * @summary This element represents a file input.
 * @documentation https://elements.webjet.sk/components/input-file
 * @status stable
 *
 * @extends {WJElement}
 *
 * @csspart native - The native file input wrapper.
 * @csspart input - The text input.
 * @csspart file-input - The file input.
 *
 * @fires wje-input-file:change - Event fired when the file input changes.
 *
 * @tag wje-input-file
 */
export default class InputFile extends WJElement {
    /**
     * @constructor
     * @summary InputFile constructor
     * @param {Object} options - The options
     */
    constructor(options = {}) {
        super();
        this._value = "";
    }

    set value(value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    /**
     * @summary Class name
     * @type {string}
     */
    className = "Input";

    /**
     * @summary Get CSS stylesheet
     * @static
     * @returns {Object} styles
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * @summary Get observed attributes
     * @static
     * @returns {Array} An empty array
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * @summary Setup attributes
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * @summary Draw method
     * @param {Object} context - The context
     * @param {Object} store - The store
     * @param {Object} params - The parameters
     * @returns {Object} Document fragment
     */
    draw() {
        let fragment = document.createDocumentFragment();

        // Wrapper
        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.classList.add("native-input-file", this.variant || "default");

        // File Input
        let fileInput = document.createElement("input");
        fileInput.setAttribute("type", "file");
        fileInput.setAttribute("multiple", "");
        fileInput.setAttribute("hidden", "");

        // Input
        let input = document.createElement("wje-input");
        input.setAttribute("variant", "standard");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Click to upload");
        input.setAttribute("readonly", "");

        let span = document.createElement("span");
        span.setAttribute("slot", "start");

        let icon = document.createElement("wje-icon");
        icon.setAttribute("slot", "icon-only");
        icon.setAttribute("name", "cloud-upload");

        span.appendChild(icon);
        input.appendChild(span);

        native.appendChild(input);
        native.appendChild(fileInput);
        fragment.appendChild(native);

        this.native = native;
        this.input = input;
        this.fileInput = fileInput;

        return fragment;
    }

    /**
     * @summary After draw method
     * @params {Object} context - The context
     * @params {Object} store - The store
     * @params {Object} params - The parameters
     */
    afterDraw() {
        this.input.addEventListener('click', () => {
            this.fileInput.click();
        });

        this.fileInput.addEventListener('change', (e) => {
            let files = e.target.files;
            let fileNames = [];

            for (let i = 0; i < files.length; i++) {
                fileNames.push(files[i].name);
            }

            this.input.value = fileNames.join(', ');
            this.value = files;
            event.dispatchCustomEvent(this, "wje-input-file:change", { files: files });
        });
    }
}