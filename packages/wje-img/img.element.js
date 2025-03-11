import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

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
     * Creates an instance of Img.
     * @class
     */
    constructor() {
        super();

        this._fallout = false;

        this.actions = {
            delete: () => this.deleteImage(),
            log: () => console.error('Error log pre obrázok:', this.src),
        }
    }

    /**
     * Sets the value of the `src` attribute for the element.
     * @param {string} value The value to set for the `src` attribute.
     */
    set src(value) {
        this.setAttribute('src', value);
    }

    /**
     * Retrieves the value of the 'src' attribute from the element.
     * @returns {string} The value of the 'src' attribute.
     */
    get src() {
        return this.getAttribute('src');
    }

    /**
     * Sets the fallout property. Updates the `fallout` attribute if the value is a string;
     * otherwise, assigns the value to the `_fallout` property.
     * @param {string|*} value The value to set for the fallout property. If a string, it will update the `fallout` attribute; for other types, it will assign it to the `_fallout` property.
     */
    set fallout(value) {
        if (typeof value === 'string') {
            this.setAttribute('fallout', value);
        } else {
            this._fallout = value;
        }
    }

    /**
     * Retrieves the value of the 'fallout' attribute if it exists, otherwise returns the internal `_fallout` property.
     * @returns {string|null} The value of the 'fallout' attribute or the `_fallout` property if the attribute is not present. Returns null if no value is found.
     */
    get fallout() {
        return this.hasAttribute('fallout') ? this.getAttribute('fallout') : this._fallout;
    }

    /**
     * Sets the value of the loader attribute.
     * @param {string} value The value to set for the loader attribute.
     */
    set loader(value) {
        if (value) {
            this.setAttribute('loader', value);
        }
    }

    /**
     * Retrieves the value of the 'loader' attribute from the element.
     * @returns {string|null} The value of the 'loader' attribute if set, otherwise null.
     */
    get loader() {
        return this.getAttribute('loader');
    }

    /**
     * The class name for the component.
     * @type {string}
     */
    className = 'Img';

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
        return ['src'];
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Creates and assembles a lazy-loaded image element within a document fragment.
     * @returns {DocumentFragment} A document fragment containing the image element.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('img');
        native.setAttribute('part', 'native');
        native.setAttribute('src', this.loader || './assets/img/image-loader.gif');
        native.setAttribute('alt', this.alt || '');
        native.classList.add('lazy-loaded-image', 'lazy');

        this.native = native;
        fragment.appendChild(native);

        return fragment;
    }

    /**
     * Handles post-draw operations, such as setting up a lazy image loader using an IntersectionObserver.
     * Observes when the target element becomes visible in the viewport and updates its source with the provided image source.
     * Removes the `lazy` class once the image source is updated and unobserves the element.
     * It also invokes the `onerrorFunc` method at the beginning to handle potential error scenarios.
     * @returns {void} Does not return a value.
     */
    afterDraw() {
        this.onerrorFunc();

        let lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.src = this.src;
                    this.classList.remove('lazy');
                    lazyImageObserver.unobserve(entry.target);
                }
            });
        });

        lazyImageObserver.observe(this.native);
    }

    /**
     * Deletes the current image by calling the remove method.
     * This function is typically used to trigger the removal of an image element
     * or perform cleanup operations related to the image.
     */
    deleteImage = () => {
        this.remove();
    }

    /**
     * Adds a new action to the internal actions object.
     * @param {string} name The name of the action to be added.
     * @param {Function} func The function representing the action logic.
     * @returns {void} This method does not return a value.
     */
    addAction(name, func) {
        if (typeof func === 'function') {
            this.actions[name] = func;
        } else {
            console.error('The action must be a function.');
        }
    }

    /**
     * Removes an action from the actions list if it exists.
     * @param {string} name The name of the action to remove.
     * @returns {void} Does not return a value.
     */
    removeAction(name) {
        if (this.actions[name]) {
            delete this.actions[name];
        } else {
            console.error(`Action "${name}" does not exist.`);
        }
    }


    /**
     * Handles error scenarios by checking the `fallout` property and performing
     * corresponding actions. If `fallout` is not defined, the function terminates
     * early. Logs the active actions and attempts to assign an error handler
     * based on the `fallout` value. If the `fallout` value does not correspond to
     * a recognized action, it logs an error message.
     * @function onerrorFunc
     * @memberof Img
     */
    onerrorFunc = () => {
        if (!this.fallout) return;
        if (this.actions[this.fallout]) {
            this.native.onerror = this.actions[this.fallout];
        } else {
            console.error('Unsupported value:', this.fallout);
        }
    }
}
