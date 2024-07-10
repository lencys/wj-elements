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
 * @property {string} maxWidth - The maximum width of the SlidingContainer.
 * @property {string} maxHeight - The maximum height of the SlidingContainer.
 * @property {string} trigger - The trigger for the SlidingContainer.
 * @property {string} direction - The direction of the SlidingContainer.
 * @property {string} variant - The variant of the SlidingContainer.
 * @property {string} screenBreakPoint - The screen break point of the SlidingContainer.
 * @property {boolean} removeChildAfterClose - Removes the child after the SlidingContainer is closed.
 * @property {string} animationDuration - The duration of the animation.
 * @property {string} animationEasing - The easing of the animation.
 * @property {boolean} hasOpacity - Sets the opacity of the SlidingContainer.
 * 
 * @tag wje-sliding-container
 * 
 * @example
 * <wje-sliding-container trigger="test-resize-container-event-right" id="left-in-place" direction="left" max-width="100px" max-height="100%">
 *    <wje-card>
 *       <wje-card-header>
 *        <wje-card-subtitle>CONTENT Subtitle</wje-card-subtitle>
 *       <wje-card-title>CONTENT Title</wje-card-title>
 *      </wje-card-header>
 *     <wje-card-content>
 *        CONTENT Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 *    </wje-card-content>
 * </wje-card>
 * </wje-sliding-container>
 * 
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
        return this.getAttribute("screen-break-point");
    }

    set screenBreakPoint(value) {
        this.setAttribute("screen-break-point", value);
    }

    get animationDuration() {
        return this.getAttribute("animation-duration") ?? "500";
    }

    set animationDuration(value) {
        this.setAttribute("animation-duration", value);
    }

    get animationEasing() {
        return this.getAttribute("animation-easing") ?? "linear";
    }

    set animationEasing(value) {
        this.setAttribute("animation-easing", value);
    }

    get hasOpacity() {
        return this.hasAttribute("has-opacity") ?? false;
    }

    get addToHeight() {
        return this.getAttribute("add-to-height") ?? "0";
    }

    set addToHeight(value) {
        this.setAttribute("add-to-height", value);
    }

    className = "SlidingContainer";

    /**
     * Returns the observed attributes for the component.
     * @returns {string[]}
     */
    static get observedAttributes() {
        return ["max-width", "max-height", "trigger", "direction", "variant", "screen-break-point", "remove-child-after-close", "animation-duration", "animation-easing", "has-opacity"];
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

        this.style.position = "relative";
        this.style.height = "100%";

        this.wrapperDiv = document.createElement("div");
        this.wrapperDiv.classList.add("sliding-container-wrapper");

        this.transparentDiv = document.createElement("div");
        this.transparentDiv.classList.add("sliding-container-transparent");

        let native = document.createElement("div");
        native.style.position = "absolute";
        native.style.width = 0;
        if(this.hasOpacity){
            native.style.opacity = 0;
        }
        
        native.style.height = "100%"

        native.classList.add("native-sliding-container");
        native.setAttribute("part", "sliding-container");

        if (this.direction === "right") {
            native.style.right = 0;
        } else {
            native.style.left = 0;
        }

        let slot = document.createElement("slot");


        const nativeInner = document.createElement("div");
        nativeInner.classList.add("native-sliding-container-inner");
        nativeInner.style.height = "100%";
        nativeInner.style.position = "absolute";
        nativeInner.style.width = this.maxWidth;

        nativeInner.appendChild(slot);
        nativeInner.appendChild(this.getCloseButton());


        native.appendChild(nativeInner);
        this.wrapperDiv.appendChild(this.transparentDiv);
        this.wrapperDiv.appendChild(native);
        fragment.appendChild(this.wrapperDiv);

        this.nativeElement = native;

        return fragment;
    }

    /**
     * Creates and returns a close button element.
     * @returns {HTMLElement} The close button element.
     */
    getCloseButton() {
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

        return closeButton;
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
        if (this.screenBreakPoint && (window.innerWidth < this.screenBreakPoint)) {
            this.variant = "over";
        }

        this.checkForVariant(this.variant);
    }

    getParentElement() {
        let parentElement = this.parentElement;

        if (!parentElement) {
            parentElement = this.getRootNode().host;
        }

        return parentElement;
    }

    /**
     * Checks for a specific variant and applies corresponding styles.
     *
     * @param {string} variant - The variant to check for.
     */
    checkForVariant(variant) {
        if (variant === "over") {
            this.style.position = "fixed";
            let computentStyleOfParent = window.getComputedStyle(this.getParentElement());
            let parentElementBoundingbox = this.getParentElement().getBoundingClientRect();
            let heightOfParrentElement = parseFloat(computentStyleOfParent.height);
            let widthOfParrentElement = parseFloat(computentStyleOfParent.width);
            let topOfParrentElement = parseFloat(computentStyleOfParent.top);

            this.style.height = heightOfParrentElement + +this.addToHeight + "px";
            this.wrapperDiv.style.height = heightOfParrentElement + +this.addToHeight + "px";
            this.style.top = topOfParrentElement + "px";
            let isFirstChildInContainer = (this.getParentElement().firstElementChild === this || this.getParentElement().shadowRoot?.firstElementChild === this);
            let isLastChildInContainer = (this.getParentElement().lastElementChild === this || this.getParentElement().shadowRoot?.lastElementChild === this);

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
        if (this._lastCaller && this._lastCaller !== e.composedPath()[0]) {
            // same oppener event but different caller so just refresh inner content
            this.open(e)

        } else {
            // came caller so toggle 
            this.toggle(e);
        }

        this._lastCaller = e.composedPath()[0];
    }

    /**
     * Executes before the element is opened.
     */
    beforeOpen(event) { }

    /**
     * Callback function called after the element is opened.
     */
    afterOpen(event) { }

    /**
     * Executes before closing the element.
     */
    beforeClose(event) { }

    /**
     * Callback function that is called after the container is closed.
     */
    afterClose(event) { }

    /**
     * Animates the transition of the element's width from 0 to the maximum width or vice versa.
     * @returns {Promise<void>} A promise that resolves when the animation finishes.
     */
    doAnimateTransition() {
        const options = {
            delay: 0,
            endDelay: 0,
            fill: "both",
            duration: +this.animationDuration,
            iterationStart: 0,
            iterations: 1,
            direction: "normal",
            easing: this.animationEasing
        }

        if (!this._isOpen) {
            if (this.animation) {
                this.animation.reverse();
                this.nativeAnimation.reverse();

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

            this.nativeAnimation = this.nativeElement.animate([
                {
                    ...(this.hasOpacity? {opacity: 0} : {}),
                    width: 0
                },
                {
                    ...(this.hasOpacity? {opacity: 1} : {}),
                    width: this.maxWidth
                }
            ], options);
        } else {
            this.animation.reverse();
            this.nativeAnimation.reverse();
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
    async open(event) {
        await Promise.resolve(this.beforeOpen(event)).then(() => {
            Promise.resolve(!this._isOpen ? this.doAnimateTransition() : () => { }).then(() => {
                Promise.resolve(this.afterOpen(event)).then(() => {
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
    async close(event) {
        await Promise.resolve(this.beforeClose(event)).then(() => {
            Promise.resolve(this._isOpen ? this.doAnimateTransition() : () => { }).then(() => {
                Promise.resolve(this.afterClose(event)).then(() => {

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
    async toggle(event) {
        if (this._isOpen) {
            await this.close(event);
        } else {
            await this.open(event);
        }
    }
}