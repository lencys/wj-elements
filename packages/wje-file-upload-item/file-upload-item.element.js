import { Localizer } from '../utils/localize.js';
import Button from '../wje-button/button.js';
import { default as WJElement } from '../wje-element/element.js';
import FormatDigital from '../wje-format-digital/format-digital.js';
import Icon from '../wje-icon/icon.js';
import Slider from '../wje-slider/slider.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This element allows users to upload files.
 * `FileUploadItem` is a custom web component that represents a file upload item.
 * It extends from `WJElement` and uses the `Localizer` utility for localization.
 * @documentation https://elements.webjet.sk/components/file-upload
 * @status stable
 * @augments WJElement
 * @csspart button - The delete button part
 * @csspart image - The image part
 * @csspart name - The name part
 * @csspart size - The size part
 * @slot img - Slot for the image
 * @slot action - Slot for the action buttons
 * @cssproperty --primary-color - The primary color of the file upload item.
 * //@fires wje-button:click - Dispatches when the delete button is clicked
 * @tag wje-file-upload
 */
export default class FileUploadItem extends WJElement {
    /**
     * Creates an instance of FileUploadItem.
     * @class
     */
    constructor() {
        super();
        this.localizer = new Localizer(this);
    }

    set size(value) {
        this.setAttribute('size', value);
    }

    get size() {
        return this.getAttribute('size');
    }

    /**
     * Dependencies for the component.
     * @type {object}
     */
    dependencies = {
        'wje-format-digital': FormatDigital,
        'wje-button': Button,
        'wje-slider': Slider,
        'wje-icon': Icon,
    };

    className = 'FileUploadItem';

    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes() {
        return ['uploaded'];
    }

    /**
     * Handles updates to the attributes of a custom element whenever one of the observed attributes is changed.
     * Updates the related elements based on the changed attribute and its new value.
     * @param {string} name The name of the attribute being changed.
     * @param {string | null} oldValue The previous value of the attribute before the change, or null if the attribute was not previously set.
     * @param {string | null} newValue The new value of the attribute after the change, or null if the attribute is being removed.
     * @returns {void} Does not return a value.
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'uploaded' && oldValue !== newValue && this.uploadedEl) {
            this.uploadedEl.setAttribute('value', newValue);

            let progress = ((+newValue / +this.size) * 100) || 0;

            this.sliderEl.setAttribute("progress", Math.round(progress, 0));
        }
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Method to draw the component on the screen.
     * @returns {DocumentFragment} The fragment containing the component.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.classList.add('native-file-upload-item');

        let slot = document.createElement('slot');
        slot.setAttribute('name', 'img');

        let image = document.createElement('div');
        image.setAttribute('part', 'image');
        image.classList.add('image');

        let name = document.createElement('span');
        name.classList.add('name');
        name.innerText = this.name;

        let actions = document.createElement('slot');
        actions.classList.add('actions');
        actions.setAttribute('name', 'action');

        let button = document.createElement('wje-button');
        button.setAttribute('fill', 'link');
        button.setAttribute('size', 'small');
        button.innerHTML = `<wje-icon name="x" size="small"></wje-icon>`;

        let sizeWrapper = document.createElement('span');
        sizeWrapper.classList.add('size');

        let uploaded = document.createElement('wje-format-digital');
        uploaded.setAttribute('value', this.uploaded || 0);
        uploaded.innerHTML = `<span slot="start">${this.localizer.translate('wj.file.upload.uploaded')}</span>`;

        let size = document.createElement('wje-format-digital');
        size.setAttribute('value', this.size || 0);
        size.innerHTML = `<span slot="start">&nbsp;${this.localizer.translate('wj.file.upload.from')} </span>`;

        let slider = document.createElement('wje-progress-bar');
        slider.classList.add('file-progress');
        slider.setAttribute('id', 'id-' + this.lastModified);
        slider.setAttribute('progress', this.progress);
        slider.setAttribute('color', 'success');

        image.appendChild(slot);
        actions.appendChild(button);

        sizeWrapper.appendChild(uploaded);
        sizeWrapper.appendChild(size);

        native.appendChild(image);
        native.appendChild(name);
        native.appendChild(sizeWrapper);
        native.appendChild(actions);
        native.appendChild(slider);

        fragment.appendChild(native);

        this.button = button;
        this.uploadedEl = uploaded;
        this.sliderEl = slider;

        return fragment;
    }

    /**
     * Called after the component has been drawn.
     */
    afterDraw() {
        this.button.addEventListener('wje-button:click', this.onDelete);
    }

    /**
     * Handles the delete action.
     */
    onDelete = () => {
        this.remove();
    };
}
