import { default as WJElement } from '../wje-element/element.js';
import { getHsl, getInitials } from './service/service.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This class represents an Avatar element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/avatar
 * @status stable
 * @augments WJElement
 * @slot - The avatar main content.
 * @csspart native - The component's native wrapper.
 * @cssproperty --wje-avatar-width;
 * @cssproperty --wje-avatar-height;
 * @cssproperty --wje-avatar-font-size;
 * @cssproperty --wje-avatar-font-weight;
 * @cssproperty --wje-avatar-color;
 * @cssproperty --wje-avatar-background-color;
 * @cssproperty --wje-avatar-border-radius;
 * @cssproperty --wje-avatar-border-color;
 * @cssproperty --wje-avatar-border-width;
 * @cssproperty --wje-avatar-border-style;
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
     * Method to setup attributes.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
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

            this.setAttribute('style', `--wje-avatar-background-color: ${getHsl(initials)}`);
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
     * Method to check if the avatar is an image.
     * @returns {boolean} - True if the avatar is an image, false otherwise
     */
    isImage() {
        return this.getElementsByTagName('wje-img').length > 0;
    }
}
