import { default as WJElement } from '../wje-element/element.js';
import { getHsl, getInitials, getAvatarColors } from './service/service.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This class represents an Avatar element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/avatar
 * @status stable
 * @augments WJElement
 * @attribute {boolean} initials - Renders generated initials from `label` instead of the default slotted content.
 * @attribute {string} label - Provides the source text for generated initials and the accessible label of the avatar.
 * @attribute {string} size - Selects a predefined avatar size such as `small`, `medium`, `normal`, `large`, or larger variants.
 * @attribute {string} status-placement - Positions the `status` slot on one of the avatar corners.
 * @slot default - Slot for the main avatar content, typically an image.
 * @slot icon - Slot for an icon rendered inside the avatar.
 * @slot status - Slot for a status badge or indicator positioned on the avatar edge.
 * @slot secondary - Slot for additional secondary content rendered with the avatar.
 * @csspart native - The component's native wrapper.
 * @csspart status - The positioned slot container for status content.
 * @csspart secondary - The slot container for secondary avatar content.
 * @cssproperty [--wje-avatar-size] - Controls the overall rendered size of the avatar shell.
 * @cssproperty [--wje-avatar-font-size] - Controls the font size used for initials and text content.
 * @cssproperty [--wje-avatar-font-weight] - Controls the font weight used for initials and text content.
 * @cssproperty [--wje-avatar-color] - Controls the text color inside the avatar.
 * @cssproperty [--wje-avatar-background-color] - Controls the background color of the avatar surface.
 * @cssproperty [--wje-avatar-border-radius] - Controls the avatar border radius.
 * @cssproperty [--wje-avatar-border-color] - Controls the avatar border color when a border is applied.
 * @cssproperty [--wje-avatar-border-width] - Controls the avatar border width when a border is applied.
 * @cssproperty [--wje-avatar-border-style] - Controls the avatar border style when a border is applied.
 * @tag wje-avatar
 */
export default class Avatar extends WJElement {
    /**
     * Avatar class constructor.
     */
    constructor() {
        super();
    }

    /**
     * Sets the value of the 'label' attribute for the element.
     * @param {string} value The new value to be set for the 'label' attribute.
     */
    set label(value) {
        this.setAttribute('label', value);
    }

    /**
     * Retrieves the value of the 'label' attribute for the element.
     * If the attribute is not set, it defaults to an empty string.
     * @returns {string} The value of the 'label' attribute or an empty string if not defined.
     */
    get label() {
        return this.getAttribute('label') || '';
    }

    /**
     * Sets the value of initials for the element by updating
     * the 'initials' attribute with the provided value.
     * @param {string} value The value to be set as the initials.
     */
    set initials(value) {
        this.setAttribute('initials', '');
    }

    /**
     * Retrieves the value of the 'initials' attribute if it exists.
     * @returns {boolean} Returns true if the 'initials' attribute is present, otherwise false.
     */
    get initials() {
        return this.hasAttribute('initials') || false;
    }

    /**
     * Sets the size attribute for the element.
     * @param {string | number} value The value to set for the size attribute.
     */
    set size(value) {
        this.setAttribute('size', value);
    }

    /**
     * Retrieves the size attribute of the element. If the size attribute
     * is not defined, it returns the default value 'medium'.
     * @returns {string} The size value of the element or 'medium' if not specified.
     */
    get size() {
        return this.getAttribute('size') || 'medium';
    }

    /**
     * Class name for the Avatar element.
     */
    className = 'Avatar';

    /**
     * Getter for cssStyleSheet.
     * @returns {string} styles
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
        return ['initials', 'label'];
    }

    /**
     * Method to setup attributes.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
        this.syncAria();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback?.(name, oldValue, newValue);
        if (name === 'label' || name === 'initials') {
            this.syncAria();
        }
    }

    /**
     * Method to draw the avatar element and return a document fragment.
     * @returns {object} fragment - The document fragment
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement('div');
        element.setAttribute('part', 'native');
        element.classList.add('native-avatar');

        let slot = document.createElement('slot');

        element.appendChild(slot);

        if (this.initials) {
            let initials = getInitials(this.label);
            const { background, color } = getAvatarColors(initials);

            this.style.setProperty('--wje-avatar-background-color', background);
            this.style.setProperty('--wje-avatar-color', color);

            element.innerText = initials;
        } else {
            let slotIcon = document.createElement('slot');
            slotIcon.setAttribute('name', 'icon');

            element.appendChild(slotIcon);
        }

        let status = document.createElement('slot');
        status.setAttribute('name', 'status');
        status.setAttribute('part', 'status');

        let secondary = document.createElement('slot');
        secondary.setAttribute('name', 'secondary');
        secondary.setAttribute('part', 'secondary');

        element.appendChild(status);
        element.appendChild(secondary);

        fragment.appendChild(element);

        return fragment;
    }

    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria() {
        const label = this.label?.trim();
        if (label) {
            this.setAriaState({ label });
        }
    }

    /**
     * Method to check if the avatar is an image.
     * @returns {boolean} - True if the avatar is an image, false otherwise
     */
    isImage() {
        return this.getElementsByTagName('wje-img').length > 0;
    }
}
