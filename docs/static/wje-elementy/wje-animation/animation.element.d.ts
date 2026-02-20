import { default as WJElement } from '../wje-element/element.js';
/**
 * @summary This class represents an Animation element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/animation
 * @status stable
 * @augments WJElement
 * @slot - The animation main content.
 * @cssproperty --size - The size of the avatar.
 * @tag wje-animation
 */
export default class Animation extends WJElement {
    /**
     * Getter for the CSS stylesheet.
     * @returns {object} The styles for the Animation element.
     */
    static get cssStyleSheet(): object;
    /**
     * Getter for the observed attributes.
     * @returns {Array} An array containing the name of the observed attribute.
     */
    static get observedAttributes(): any[];
    _animations: any[];
    /**
     * Setter for the name attribute.
     * @param value
     */
    set name(value: string);
    /**
     * Getter for the name attribute.
     * @returns {string}
     */
    get name(): string;
    /**
     * Setter for the name attribute.
     * @param value
     */
    set duration(value: number);
    /**
     * Getter for the name attribute.
     * @returns {number}
     */
    get duration(): number;
    /**
     * Setter for the name attribute.
     * @param value
     */
    set delay(value: number);
    /**
     * Getter for the name attribute.
     * @returns {number}
     */
    get delay(): number;
    /**
     * Setter for the name attribute.
     * @param value
     */
    set endDelay(value: number);
    /**
     * Getter for the name attribute.
     * @returns {number}
     */
    get endDelay(): number;
    /**
     * Setter for the name attribute.
     * @param value
     */
    set fill(value: string);
    /**
     * Getter for the name attribute.
     * @returns {string}
     */
    get fill(): string;
    /**
     * Setter for the name attribute.
     * @param value
     */
    set iterations(value: string | number);
    /**
     * Getter for the name attribute.
     * @returns {string|number}
     */
    get iterations(): string | number;
    /**
     * Setter for the name attribute.
     * @param value
     */
    set iterationStart(value: number);
    /**
     * Getter for the name attribute.
     * @returns {number}
     */
    get iterationStart(): number;
    /**
     * Setter for the name attribute.
     * @param value
     */
    set direction(value: string);
    /**
     * Getter for the name attribute.
     * @returns {string}
     */
    get direction(): string;
    /**
     * Setter for the name attribute.
     * @param value
     */
    set easing(value: string);
    /**
     * Getter for the name attribute.
     * @returns {string}
     */
    get easing(): string;
    /**
     * Setter for the animations property.
     * @param {Array} value The new value for the animations property.
     */
    set animations(value: any[]);
    /**
     * Getter for the animations' property.
     * @returns {Array} The current value of the animations' property.
     */
    get animations(): any[];
    /**
     * Method to draw the Animation element.
     * @returns {object} The document fragment containing the drawn element.
     */
    draw(): object;
    slotEl: HTMLSlotElement;
    /**
     * Method to perform actions after the Animation element is drawn.
     * This method destroys any existing animation, fetches a new animations array,
     * selects the appropriate animation, and applies it to the element.
     */
    afterDraw(): Promise<void>;
    animation: Animation;
    /**
     * Method to fetch and parse the animations array from a CSS file.
     * @returns {Array} An array of animation definitions parsed from the CSS file.
     */
    getAnimationsArray(): any[];
    /**
     * Terminates and cleans up the currently active animation if it exists.
     * Calls the `cancel` method to stop the animation process.
     * @returns {void} Does not return any value.
     */
    destroyAnimation(): void;
    /**
     * Plays the currently assigned animation, if available.
     * @returns {void} This method does not return any value.
     */
    play(): void;
    /**
     * Cancels the current animation if it is initialized and has a cancel method.
     * Logs a warning if the animation is not initialized or the cancel method is unavailable.
     * @returns {void} Does not return a value.
     */
    cancel(): void;
}
