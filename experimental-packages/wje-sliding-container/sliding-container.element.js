import { default as WJElement } from "../../packages/wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary SlidingContainer is a custom web component that extends WJElement.
 * @documentation https://elements.webjet.sk/components/SlidingContainer
 * @status stable
 *  
 * @extends WJElement
 * 
 * @csspart - Styles the element.
 * 
 * @slot - The default slot for the SlidingContainer.
 * 
 * @tag wje-sliding-container
 * 
 * @example
 * <wje-sliding-container></wje-sliding-container>
 */
export default class SlidingContainer extends WJElement {
    /**
     * Creates an instance of SlidingContainer.
     *
     * @constructor
     */
    constructor() {
        super();

        this._isOpen = false;
        this._lastCaller = null;
    }

    set maxWidth(value) {
        this.setAttribute("max-width", value);
    }

    get maxWidth() {
        return this.getAttribute("max-width") ?? "auto";
    }

    set maxHeight(value) {
        this.setAttribute("max-height", value);
    }

    get maxHeight() {
        return this.getAttribute("max-height") ?? "auto";
    }

    set trigger(value) {
        this.setAttribute("trigger", value);
    }

    get trigger() {
        return this.getAttribute("trigger") ?? "sliding-container";
    }

    set direction(value) {
        this.setAttribute("direction", value);
    }

    get direction() {
        return this.getAttribute("direction") ?? "right";
    }

    set removeChildAfterClose(value) {
        this.setAttribute("remove-child-after-close", value);
    }

    get removeChildAfterClose() {
        return this.hasAttribute("remove-child-after-close") ?? false;
    }

    set variant(value) {
        this.setAttribute("variant", value);
    }

    get variant() {
        return this.getAttribute("variant") ?? "in-place";
    }

    get screenBreakPoint() {
        return this.getAttribute("screen-break-point") ?? 768;
    }

    set screenBreakPoint(value) {
        this.setAttribute("screen-break-point", value);
    }

    className = "SlidingContainer";

    static get observedAttributes() {
        return ["max-width", "max-height", "trigger", "direction", "variant", "screen-break-point", "remove-child-after-close"];
    }

    /**
     * Returns the CSS styles for the component.
     *
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draws the component.
     *
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let closeButton = document.createElement("wje-button");
        closeButton.setAttribute("part", "close-button");
        closeButton.style.position = "absolute";
        closeButton.style.top = "0";
        closeButton.style.right = "0";
        closeButton.style.zIndex = "1000";

        let icon = document.createElement("wje-icon");
        icon.setAttribute("slot", "icon-only");
        icon.setAttribute("name", "x");
        closeButton.appendChild(icon);

        closeButton.addEventListener("click", () => {
            this.close();
        });

        this.style.position = "relative";
        this.style.height = "100%";

        this.transparentDiv = document.createElement("div");
        this.transparentDiv.classList.add("sliding-container-transparent");

        let native = document.createElement("div");
        native.style.position = "absolute";
        native.style.width = this.maxWidth;
        native.style.height = "100%"
        native.appendChild(closeButton);

        native.classList.add("native-sliding-container");
        native.setAttribute("part", "sliding-container");

        if (this.direction === "right") {
            native.style.right = 0;
        } else {
            native.style.left = 0;
        }

        let slot = document.createElement("slot");

        native.appendChild(slot);
        fragment.appendChild(this.transparentDiv);
        fragment.appendChild(native);

        return fragment;
    }

    /**
     * Executes before drawing the element.
     */
    beforeDraw() {
        document.removeEventListener(this.trigger, this.triggerEvent);
    }

    /**
     * Performs actions after the element is drawn on the screen.
     * Attaches an event listener to the document based on the specified trigger.
     * Sets the variant to "over" if the document width is smaller than the screen break point.
     * Calls the checkForVariant method with the current variant.
     * @returns {Promise<void>} A promise that resolves after the actions are completed.
     */
    async afterDraw() {
        document.addEventListener(this.trigger, this.triggerEvent);

        // if document width is on small screen set variant to over
        if (window.innerWidth < this.screenBreakPoint) {
            this.variant = "over";
        }

        this.checkForVariant(this.variant);
    }

    /**
     * Checks for a specific variant and applies corresponding styles.
     *
     * @param {string} variant - The variant to check for.
     */
    checkForVariant(variant) {
        if (variant === "over") {
            this.style.position = "fixed";
            let computentStyleOfParent = window.getComputedStyle(this.parentElement);
            let parentElementBoundingbox = this.parentElement.getBoundingClientRect();
            let heightOfParrentElement = parseFloat(computentStyleOfParent.height);
            let widthOfParrentElement = parseFloat(computentStyleOfParent.width);
            let topOfParrentElement = parseFloat(computentStyleOfParent.top);

            this.style.height = heightOfParrentElement + "px";
            this.style.top = topOfParrentElement + "px";
            let isFirstChildInContainer = this.parentElement.firstElementChild === this;
            let isLastChildInContainer = this.parentElement.lastElementChild === this;

            if (isFirstChildInContainer) {
                if (this.direction === "right") {
                    this.style.left = parentElementBoundingbox.left + "px";
                } else {
                    this.style.right = window.innerWidth - (parentElementBoundingbox.left + parentElementBoundingbox.width) + widthOfParrentElement + "px";
                }
            }

            if (isLastChildInContainer) {
                this.style.right = window.innerWidth - (parentElementBoundingbox.left + parentElementBoundingbox.width) + "px";
            }
        }
    }

    /**
     * Triggers the event based on the target element.
     * If the target element is different from the last caller, it refreshes the children by calling the `open` method.
     * If the target element is the same as the last caller, it toggles the state by calling the `toggle` method.
     * @param {Event} e - The event object.
     */
    triggerEvent = (e) => {
        if (this._lastCaller && this._lastCaller !== e.target) {
            // same oppener event but different caller so just refresh inner content
            this.open()

        } else {
            // came caller so toggle 
            this.toggle();
        }

        this._lastCaller = e.target;
    }

    /**
     * Executes before the element is opened.
     */
    beforeOpen() { }

    /**
     * Callback function called after the element is opened.
     */
    afterOpen() { }

    /**
     * Executes before closing the element.
     */
    beforeClose() { }

    /**
     * Callback function that is called after the container is closed.
     */
    afterClose() { }

    /**
     * Animates the transition of the element's width from 0 to the maximum width or vice versa.
     * @returns {Promise<void>} A promise that resolves when the animation finishes.
     */
    doAnimateTransition() {
        const options = {
            delay: 0,
            endDelay: 0,
            fill: "both",
            duration: 500,
            iterationStart: 0,
            iterations: 1,
            direction: "normal",
            easing: "linear"
        }

        if (!this._isOpen) {
            if (this.animation) {
                this.animation.reverse();
                return;
            }
            this.animation = this.transparentDiv.animate([
                {
                    width: 0,
                },
                {
                    width: this.maxWidth,
                }

            ], options);
        } else {
            this.animation.reverse();
        }

        return new Promise((resolve, reject) => {
            this.animation.onfinish = () => {
                resolve();
            }
        })
    }

    /**
     * Opens the container with an animation.
     * @returns {Promise<void>} A promise that resolves when the container is opened.
     */
    async open() {
        await Promise.resolve(this.beforeOpen()).then(() => {
            Promise.resolve(!this._isOpen ? this.doAnimateTransition() : () => { }).then(() => {
                Promise.resolve(this.afterOpen()).then(() => {
                    this._isOpen = true;
                });
            })
        });
    }

    /**
     * Closes the animation container.
     * 
     * @returns {Promise<void>} A promise that resolves when the container is closed.
     */
    async close() {
        await Promise.resolve(this.beforeClose()).then(() => {
            Promise.resolve(this._isOpen ? this.doAnimateTransition() : () => { }).then(() => {
                Promise.resolve(this.afterClose()).then(() => {

                    if(this.removeChildAfterClose){
                        this.childNodes.forEach(child => {
                            child.remove();
                        })
                    }

                    this._isOpen = false;
                });
            })
        });
    }

    /**
     * Toggles the state of the element.
     * If the element is open, it will be closed. If it is closed, it will be opened.
     * @returns {Promise<void>} A promise that resolves when the toggle operation is complete.
     */
    async toggle() {
        if (this._isOpen) {
            await this.close();
        } else {
            await this.open();
        }
    }
}

customElements.define("wje-sliding-container", SlidingContainer);
