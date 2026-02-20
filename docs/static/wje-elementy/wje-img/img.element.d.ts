import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary This element represents an image. `Img` is a custom web component that represents an image. It extends from `WJElement`.
 * @documentation https://elements.webjet.sk/components/img
 * @status stable
 * @augments {WJElement}
 * @cssproperty --img-width - The width of the image
 * @cssproperty --img-height - The height of the image
 * @property {string} src - The source URL of the image.
 * @property {string} alt - The alternative text for the image.
 * @property {string} fallout - The action to perform when an error occurs while loading the image. The value can be a function or a predefined action like 'delete'.
 * @property {string} loader - The URL of the image loader to display while the image is loading.
 * @tag wje-img
 */
export default class Img extends WJElement {
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes(): Array<string>;
    _fallout: boolean;
    actions: {
        delete: () => void;
        log: () => void;
    };
    /**
     * Sets the value of the `src` attribute for the element.
     * @param {string} value The value to set for the `src` attribute.
     */
    set src(value: string);
    /**
     * Retrieves the value of the 'src' attribute from the element.
     * @returns {string} The value of the 'src' attribute.
     */
    get src(): string;
    /**
     * Sets the value of the 'alt' attribute for the element.
     * @param {string} value The new value to set for the 'alt' attribute.
     */
    set alt(value: string);
    /**
     * Retrieves the value of the 'alt' attribute for the current element.
     * @returns {string|null} The value of the 'alt' attribute, or null if the attribute is not set.
     */
    get alt(): string | null;
    /**
     * Sets the fallout property. Updates the `fallout` attribute if the value is a string;
     * otherwise, assigns the value to the `_fallout` property.
     * @param {string|*} value The value to set for the fallout property. If a string, it will update the `fallout` attribute; for other types, it will assign it to the `_fallout` property.
     */
    set fallout(value: string | any);
    /**
     * Retrieves the value of the 'fallout' attribute if it exists, otherwise returns the internal `_fallout` property.
     * @returns {string|null} The value of the 'fallout' attribute or the `_fallout` property if the attribute is not present. Returns null if no value is found.
     */
    get fallout(): string | null;
    /**
     * Sets the value of the loader attribute.
     * @param {string} value The value to set for the loader attribute.
     */
    set loader(value: string);
    /**
     * Retrieves the value of the 'loader' attribute from the element.
     * @returns {string|null} The value of the 'loader' attribute if set, otherwise null.
     */
    get loader(): string | null;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    /**
     * Creates and assembles a lazy-loaded image element within a document fragment.
     * @returns {DocumentFragment} A document fragment containing the image element.
     */
    draw(): DocumentFragment;
    native: HTMLImageElement;
    /**
     * Handles post-draw operations, such as setting up a lazy image loader using an IntersectionObserver.
     * Observes when the target element becomes visible in the viewport and updates its source with the provided image source.
     * Removes the `lazy` class once the image source is updated and unobserves the element.
     * It also invokes the `onerrorFunc` method at the beginning to handle potential error scenarios.
     * @returns {void} Does not return a value.
     */
    afterDraw(): void;
    setAvatarInitials: (value?: boolean) => void;
    /**
     * Deletes the current image by calling the remove method.
     * This function is typically used to trigger the removal of an image element
     * or perform cleanup operations related to the image.
     */
    deleteImage: () => void;
    /**
     * Adds a new action to the internal actions object.
     * @param {string} name The name of the action to be added.
     * @param {Function} func The function representing the action logic.
     * @returns {void} This method does not return a value.
     */
    addAction(name: string, func: Function): void;
    /**
     * Removes an action from the actions list if it exists.
     * @param {string} name The name of the action to remove.
     * @returns {void} Does not return a value.
     */
    removeAction(name: string): void;
    /**
     * Handles error scenarios by checking the `fallout` property and performing
     * corresponding actions. If `fallout` is not defined, the function terminates
     * early. Logs the active actions and attempts to assign an error handler
     * based on the `fallout` value. If the `fallout` value does not correspond to
     * a recognized action, it logs an error message.
     * @function onerrorFunc
     * @memberof Img
     */
    onerrorFunc: (img: any) => void;
}
