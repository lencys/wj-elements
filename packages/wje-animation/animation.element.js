import { fetchAndParseCSS } from '../utils/animations.js';
import { default as WJElement } from '../wje-element/element.js';
import styles from '../styles/styles.css?inline';
import animations from 'animate.css?inline';

/**
 * @summary This class represents an Animation element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/animation
 * @status stable
 * @augments WJElement
 * @attribute {string} name - The Animate.css animation name played on the slotted element.
 * @attribute {number} duration - The animation playback duration in milliseconds.
 * @attribute {number} delay - The delay before the animation starts.
 * @attribute {number} endDelay - The delay applied after the animation completes.
 * @attribute {string} fill - The fill mode used by the animation playback.
 * @attribute {string|number} iterations - The number of animation repetitions.
 * @attribute {number} iterationStart - The starting offset for the first animation iteration.
 * @attribute {string} direction - The playback direction of the animation.
 * @attribute {string} easing - The easing function used by the animation playback.
 * @slot - The animation main content.
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
     * Setter for the name attribute.
     * @param value
     */
    set name(value) {
        this.setAttribute('name', value);
    }

    /**
     * Getter for the name attribute.
     * @returns {string}
     */
    get name() {
        return this.getAttribute('name') || 'heartBeat';
    }

    /**
     * Setter for the name attribute.
     * @param value
     */
    set duration(value) {
        this.setAttribute('duration', value);
    }

    /**
     * Getter for the name attribute.
     * @returns {number}
     */
    get duration() {
        return +this.getAttribute('duration') || 1000;
    }

    /**
     * Setter for the name attribute.
     * @param value
     */
    set delay(value) {
        this.setAttribute('delay', value);
    }

    /**
     * Getter for the name attribute.
     * @returns {number}
     */
    get delay() {
        return +this.getAttribute('delay') || 0;
    }

    /**
     * Setter for the name attribute.
     * @param value
     */
    set endDelay(value) {
        this.setAttribute('endDelay', value);
    }

    /**
     * Getter for the name attribute.
     * @returns {number}
     */
    get endDelay() {
        return +this.getAttribute('endDelay') || 0;
    }

    /**
     * Setter for the name attribute.
     * @param value
     */
    set fill(value) {
        this.setAttribute('fill', value);
    }

    /**
     * Getter for the name attribute.
     * @returns {string}
     */
    get fill() {
        return this.getAttribute('fill') || 'auto';
    }

    /**
     * Setter for the name attribute.
     * @param value
     */
    set iterations(value) {
        this.setAttribute('iterations', value);
    }

    /**
     * Getter for the name attribute.
     * @returns {string|number}
     */
    get iterations() {
        return this.getAttribute('iterations') || Infinity;
    }

    /**
     * Setter for the name attribute.
     * @param value
     */
    set iterationStart(value) {
        this.setAttribute('iterationStart', value);
    }

    /**
     * Getter for the name attribute.
     * @returns {number}
     */
    get iterationStart() {
        return +this.getAttribute('iterationStart') || 0;
    }

    /**
     * Setter for the name attribute.
     * @param value
     */
    set direction(value) {
        this.setAttribute('direction', value);
    }

    /**
     * Getter for the name attribute.
     * @returns {string}
     */
    get direction() {
        return this.getAttribute('direction') || 'normal';
    }

    /**
     * Setter for the name attribute.
     * @param value
     */
    set easing(value) {
        this.setAttribute('easing', value);
    }

    /**
     * Getter for the name attribute.
     * @returns {string}
     */
    get easing() {
        return this.getAttribute('easing') || 'linear';
    }

    /**
     * Setter for the animations property.
     * @param {Array} value The new value for the animations property.
     */
    set animations(value) {
        this._animations = value;
    }

    /**
     * Getter for the animations' property.
     * @returns {Array} The current value of the animations' property.
     */
    get animations() {
        return this._animations;
    }

    /**
     * The class name for the Animation element.
     * @type {string}
     */
    className = 'Animation';

    /**
     * Getter for the CSS stylesheet.
     * @returns {object} The styles for the Animation element.
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for the observed attributes.
     * @returns {Array} An array containing the names of the observed attributes.
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Method to setup attributes for the Animation element.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
        this.setAriaState({ role: 'presentation' });
    }

    /**
     * Method to draw the Animation element.
     * @returns {object} The document fragment containing the drawn element.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let slot = document.createElement('slot');

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
        const selected = await this.animations.find((k) => k.name === this.name);

        this.animation = element?.animate(selected?.keyframes, {
            delay: +this.delay,
            endDelay: +this.endDelay,
            fill: this.fill,
            duration: +this.duration,
            iterationStart: +this.iterationStart,
            iterations: this.iterations,
            direction: this.direction,
            easing: this.easing,
        });

        if (this.animation && this.animation.playState === 'idle') this.animation.play();
    }

    /**
     * Method to fetch and parse the animations array from a CSS file.
     * @returns {Array} An array of animation definitions parsed from the CSS file.
     */
    async getAnimationsArray() {
        return await fetchAndParseCSS(animations);
    }

    /**
     * Terminates and cleans up the currently active animation if it exists.
     * Calls the `cancel` method to stop the animation process.
     * @returns {void} Does not return any value.
     */
    destroyAnimation() {
        if (this.animation) {
            this.cancel();
        }
    }

    /**
     * Plays the currently assigned animation, if available.
     * @returns {void} This method does not return any value.
     */
    play() {
        if (this.animation) {
            this.animation.play();
        }
    }

    /**
     * Cancels the current animation if it is initialized and has a cancel method.
     * Logs a warning if the animation is not initialized or the cancel method is unavailable.
     * @returns {void} Does not return a value.
     */
    cancel() {
        if (this.animation && typeof this.animation.cancel === 'function') {
            this.animation.cancel();
        } else {
            console.warn('Animation is not initialized or cancel is not available');
        }
    }
}
