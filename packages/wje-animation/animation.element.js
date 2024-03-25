import { default as WJElement } from "../wje-element/element.js";
import { fetchAndParseCSS } from "../utils/animations.js";
import styles from "../wje-avatar/styles/styles.css?inline";
import animations from 'animate.css?inline';

/**
 * @summary This class represents an Animation element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/animation
 * @status stable
 *
 * @extends WJElement
 *
 * @slot - The animation main content.
 *
 * @cssproperty --size - The size of the avatar.
 *
 * @tag wje-animation
 */
export default class Animation extends WJElement {
    /**
     * Constructor for the Animation class.
     */
    constructor() {
        super();
        this._animations = [];
    }

    /**
     * Setter for the animations property.
     * @param {Array} value - The new value for the animations property.
     */
    set animations(value) {
        this._animations = value;
    }

    /**
     * Getter for the animations property.
     * @return {Array} The current value of the animations property.
     */
    get animations() {
        return this._animations;
    }

    /**
     * The class name for the Animation element.
     * @type {string}
     */
    className = "Animation";

    /**
     * Getter for the CSS stylesheet.
     * @return {Object} The styles for the Animation element.
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for the observed attributes.
     * @return {Array} An array containing the name of the observed attribute.
     */
    static get observedAttributes() {
        return ["name"];
    }

    /**
     * Method to setup attributes for the Animation element.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Method to draw the Animation element.
     * @param {Object} context - The context in which the element is drawn.
     * @param {Object} store - The store containing the state of the element.
     * @param {Object} params - The parameters for drawing the element.
     * @return {Object} The document fragment containing the drawn element.
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let slot = document.createElement("slot");

        fragment.appendChild(slot);

        this.slotEl = slot;

        return fragment;
    }

    /**
     * Method to perform actions after the Animation element is drawn.
     * This method destroys any existing animation, fetches a new animations array,
     * selects the appropriate animation, and applies it to the element.
     */
    async afterDraw() {
        this.destroyAnimation();

        const element = this.slotEl.assignedElements()[0];

        this.animations = await this.getAnimationsArray();

        const selected = this.animations.find(k => k.name === this.name);

        this.animation = element?.animate(selected.keyframes , {
            delay: +this.delay || 0,
            endDelay: +this.endDelay || 0,
            fill: this.fill || 'auto',
            duration: +this.duration || 1000,
            iterationStart: +this.iterationStart || 0,
            iterations: this.iterations || Infinity,
            direction: this.direction || 'normal',
            easing: this.easing || 'linear'
        });

        if (this.animation)
            this.animation.play();
    }

    /**
     * Method to fetch and parse the animations array from a CSS file.
     * @return {Array} The animations array.
     */
    async getAnimationsArray() {
        return fetchAndParseCSS(animations);
    }

    /**
     * Method to destroy the current animation.
     */
    destroyAnimation() {
        if (this.animation) {
            this.cancel();
        }
    }

    /**
     * Method to play the current animation.
     */
    play() {
        if (this.animation) {
            this.animation.play();
        }
    }

    /**
     * Method to cancel the current animation.
     */
    cancel() {
        if (this.animation) {
            this.animation.cancel();
        }
    }
}