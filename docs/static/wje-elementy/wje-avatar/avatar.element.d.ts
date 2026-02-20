import { default as WJElement } from '../wje-element/element.js';
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
     * Getter for cssStyleSheet.
     * @returns {string} styles
     */
    static get cssStyleSheet(): string;
    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes(): Array<string>;
    /**
     * Sets the value of the 'label' attribute for the element.
     * @param {string} value The new value to be set for the 'label' attribute.
     */
    set label(value: string);
    /**
     * Retrieves the value of the 'label' attribute for the element.
     * If the attribute is not set, it defaults to an empty string.
     * @returns {string} The value of the 'label' attribute or an empty string if not defined.
     */
    get label(): string;
    /**
     * Sets the value of initials for the element by updating
     * the 'initials' attribute with the provided value.
     * @param {string} value The value to be set as the initials.
     */
    set initials(value: string);
    /**
     * Retrieves the value of the 'initials' attribute if it exists.
     * @returns {boolean} Returns true if the 'initials' attribute is present, otherwise false.
     */
    get initials(): boolean;
    /**
     * Sets the size attribute for the element.
     * @param {string | number} value The value to set for the size attribute.
     */
    set size(value: string | number);
    /**
     * Retrieves the size attribute of the element. If the size attribute
     * is not defined, it returns the default value 'medium'.
     * @returns {string} The size value of the element or 'medium' if not specified.
     */
    get size(): string;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    /**
     * Method to draw the avatar element and return a document fragment.
     * @returns {object} fragment - The document fragment
     */
    draw(): object;
    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria(): void;
    /**
     * Method to check if the avatar is an image.
     * @returns {boolean} - True if the avatar is an image, false otherwise
     */
    isImage(): boolean;
}
