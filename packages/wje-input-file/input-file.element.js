import { default as WJElement, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `InputFile` is a custom web component that represents a file input.
 * @summary This element represents a file input.
 * @documentation https://elements.webjet.sk/components/input-file
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native file input wrapper.
 * @csspart input - The text input.
 * @csspart file-input - The file input element.
 * // @fires wje-input-file:change - Event fired when the file input changes.
 * @tag wje-input-file
 */
export default class InputFile extends WJElement {
    /**
     * Constructor for the InputFile class.
     */
    constructor() {
        super();
        this._value = '';
    }

    /**
     * @summary Sets the value of the input file.
     * @param {string} value The value to set for the input file.
     */
    set value(value) {
        this._value = value;
    }

    /**
     * Gets the value of the input file.
     * @returns {string}
     */
    get value() {
        return this._value;
    }

    /**
     * The class name for the InputFile class.
     * @type {string}
     */
    className = 'Input';

    /**
     * Returns the CSS stylesheet.
     * @static
     * @returns {object} styles
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Returns the observed attributes.
     * @static
     * @returns {Array} An empty array
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
        this.setAriaState({ role: 'group' });
    }

    /**
     * Draws the component.
     * @returns {object} Document fragment
     */
    draw() {
        let fragment = document.createDocumentFragment();

        // Wrapper
        let native = document.createElement('div');
        native.setAttribute('part', 'native');
        native.classList.add('native-input-file', this.variant || 'default');

        // File Input
        let fileInput = document.createElement('input');
        fileInput.setAttribute('type', 'file');
        fileInput.setAttribute('multiple', '');
        fileInput.setAttribute('hidden', '');
        fileInput.setAttribute('aria-hidden', 'true');

        // Input
        let input = document.createElement('wje-input');
        input.setAttribute('variant', 'standard');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'Click to upload');
        input.setAttribute('readonly', '');

        let span = document.createElement('span');
        span.setAttribute('slot', 'start');

        let icon = document.createElement('wje-icon');
        icon.setAttribute('slot', 'icon-only');
        icon.setAttribute('name', 'cloud-upload');

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
     * After draw method for the InputFile class.
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
            event.dispatchCustomEvent(this, 'wje-input-file:change', { files: files });
        });
    }
}
