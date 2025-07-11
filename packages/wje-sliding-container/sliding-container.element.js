import { default as WJElement, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary SlidingContainer is a custom web component that extends WJElement.
 * @documentation https://elements.webjet.sk/components/SlidingContainer
 * @status stable
 * @augments WJElement
 * @csspart - Styles the element.
 * @slot - The default slot for the SlidingContainer.
 * @property {string} maxWidth - The maximum width of the SlidingContainer.
 * @property {string} maxHeight - The maximum height of the SlidingContainer.
 * @property {string} trigger - The trigger for the SlidingContainer.
 * @property {string} direction - Specifies the sliding direction of the container (e.g., 'left' or 'right').
 * @property {string} variant - Determines how the SlidingContainer behaves, such as 'over' or 'in-place'.
 * @property {string} screenBreakPoint - The width (in pixels) at which the SlidingContainer switches to the "over" variant for smaller screens.
 * @property {boolean} removeChildAfterClose - Removes the child after the SlidingContainer is closed.
 * @property {string} animationDuration - Specifies the duration (in milliseconds) of the sliding animation.
 * @property {string} animationEasing - Specifies the easing function used for the sliding animation (e.g., 'linear', 'ease-in', 'ease-out').
 * @property {boolean} hasOpacity - Sets the opacity of the SlidingContainer.
 * @tag wje-sliding-container
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
 */
export default class SlidingContainer extends WJElement {
    /**
     * Creates an instance of SlidingContainer.
     * @class
     */
    constructor() {
        super();

        this._isOpen = false;
        this._lastCaller = null;

        this._resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                if (entry.contentBoxSize) {
                    if (this.drawingStatus < 3) return;

                    if (this.screenBreakPoint && window.innerWidth <= this.screenBreakPoint) {
                        if (this.variant !== 'over') {
                            this.variant = 'over';
                        } else {
                            this.checkForVariant(this.variant);
                        }
                    } else {
                        if (this.variant !== 'in-place') {
                            this.variant = 'in-place';
                        } else {
                            this.checkForVariant(this.variant);
                        }
                    }
                }
            }
        });

        this._resizeObserver.observe(document.documentElement);
    }

    /**
     * Sets the maximum width of an element by updating the 'max-width' attribute.
     * @param {string} value The maximum width value to be set (e.g., '100px', '50%', etc.).
     */
    set maxWidth(value) {
        this.setAttribute('max-width', value);
    }

    /**
     * Gets the maximum width value of the element.
     * Retrieves the value of the 'max-width' attribute. If the attribute is not set, it defaults to 'auto'.
     * @returns {string} The maximum width value of the element or 'auto' if the attribute is not defined.
     */
    get maxWidth() {
        return this.getAttribute('max-width') ?? 'auto';
    }

    /**
     * Sets the maximum height for the element.
     * @param {string} value The maximum height value to be applied to the element. This can include units such as "px", "em", "%", etc.
     */
    set maxHeight(value) {
        this.setAttribute('max-height', value);
    }

    /**
     * Retrieves the maximum height value of the element, or returns 'auto' if not set.
     * @returns {string} The maximum height value or 'auto' if the attribute is not specified.
     */
    get maxHeight() {
        return this.getAttribute('max-height') ?? 'auto';
    }

    /**
     * Sets the 'trigger' attribute for the element.
     * @param {string} value The value to set for the 'trigger' attribute.
     */
    set trigger(value) {
        this.setAttribute('trigger', value);
    }

    /**
     * Retrieves the value of the 'trigger' attribute. If the attribute is not set, it defaults to 'sliding-container'.
     * @returns {string} The value of the 'trigger' attribute or the default value 'sliding-container' if not defined.
     */
    get trigger() {
        return this.getAttribute('trigger') ?? 'sliding-container';
    }

    /**
     * Sets the direction attribute for the element.
     * @param {string} value The direction value to be assigned. Possible values are typically 'ltr' (left-to-right), 'rtl' (right-to-left), or 'auto'.
     */
    set direction(value) {
        this.setAttribute('direction', value);
    }

    /**
     * Retrieves the direction attribute of the instance.
     * If the direction attribute is not set, it defaults to 'right'.
     * @returns {string} The value of the direction attribute or 'right' if not set.
     */
    get direction() {
        return this.getAttribute('direction') ?? 'right';
    }

    /**
     * Sets the value of the `remove-child-after-close` attribute.
     * This attribute determines if a child element should be removed after a close operation.
     * @param {boolean|string} value The value to set for the `remove-child-after-close` attribute. The value can be a boolean or a string representation of a boolean.
     */
    set removeChildAfterClose(value) {
        this.setAttribute('remove-child-after-close', value);
    }

    /**
     * Gets the value indicating whether the child element should be removed after closing.
     *
     * This property checks the presence of the 'remove-child-after-close' attribute on the element.
     * Returns `false` if the attribute does not exist.
     * @returns {boolean} True if the 'remove-child-after-close' attribute is present, otherwise false.
     */
    get removeChildAfterClose() {
        return this.hasAttribute('remove-child-after-close') ?? false;
    }

    /**
     * Sets the 'variant' attribute to the specified value.
     * @param {string} value The value to set for the 'variant' attribute.
     */
    set variant(value) {
        this.setAttribute('variant', value);
    }

    /**
     * Retrieves the value of the "variant" attribute. If the attribute is not set,
     * it returns the default value 'in-place'.
     * @returns {string} The variant value or the default value 'in-place'.
     */
    get variant() {
        return this.getAttribute('variant') ?? 'in-place';
    }

    /**
     * Retrieves the value of the 'screen-break-point' attribute.
     * @returns {string} The value of the 'screen-break-point' attribute.
     */
    get screenBreakPoint() {
        return this.getAttribute('screen-break-point');
    }

    /**
     * Sets the screen break point value to determine responsive behavior.
     * @param {string} value The value to set as the screen break point.
     */
    set screenBreakPoint(value) {
        this.setAttribute('screen-break-point', value);
    }

    /**
     * Sets the duration of the animation by updating the `animation-duration` attribute.
     * @param {string} value The duration value for the animation, specified in a format
     * such as seconds (e.g., "2s") or milliseconds (e.g., "200ms").
     */
    set animationDuration(value) {
        this.setAttribute('animation-duration', value);
    }

    /**
     * Gets the animation duration for an element.
     * It retrieves the value of the 'animation-duration' attribute if present; otherwise, it defaults to '500'.
     * @returns {string} The value of the animation duration, either from the attribute or the default '500'.
     */
    get animationDuration() {
        return this.getAttribute('animation-duration') ?? '500';
    }

    /**
     * Sets the easing function for the animation.
     * @param {string} value The easing function to use for the animation. This can be any valid CSS timing function such as "ease", "linear", "ease-in", "ease-out", etc.
     */
    set animationEasing(value) {
        this.setAttribute('animation-easing', value);
    }

    /**
     * Retrieves the easing function for the animation.
     * @returns {string} The value of the 'animation-easing' attribute if set, otherwise defaults to 'linear'.
     */
    get animationEasing() {
        return this.getAttribute('animation-easing') ?? 'linear';
    }

    /**
     * Determines if the element has an 'has-opacity' attribute.
     * @returns {boolean} True if the element has the 'has-opacity' attribute, otherwise false.
     */
    get hasOpacity() {
        return this.hasAttribute('has-opacity') ?? false;
    }

    /**
     * Sets the value of the 'add-to-height' attribute.
     * This attribute is used to modify or adjust the height dynamically.
     * @param {string} value The value to be assigned to the 'add-to-height' attribute.
     */
    set addToHeight(value) {
        this.setAttribute('add-to-height', value);
    }

    /**
     * Retrieves the value of the 'add-to-height' attribute from the element.
     * If the attribute is not set, it defaults to '0'.
     * @returns {string} The value of the 'add-to-height' attribute or '0' if the attribute is not present.
     */
    get addToHeight() {
        return this.getAttribute('add-to-height') ?? '0';
    }

    /**
     * Determines whether the current state is open.
     * @returns {boolean} True if the state is open, otherwise false.
     */
    get isOpen() {
        return this._isOpen;
    }

    className = 'SlidingContainer';

    /**
     * Returns the observed attributes for the component.
     * @returns {string[]}
     */
    static get observedAttributes() {
        return ['max-width', 'max-height', 'trigger', 'direction', 'variant', 'screen-break-point', 'remove-child-after-close', 'animation-duration', 'animation-easing', 'has-opacity'];
    }

    /**
     * Returns the CSS styles for the component.
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
        this.isShadowRoot = 'open';
    }

    /**
     * Executes before drawing the element.
     */
    beforeDraw() {
        this.animation?.cancel();
        this.nativeAnimation?.cancel();

        document.removeEventListener(this.trigger, this.triggerEvent);
    }

    /**
     * Draws the component.
     * @param {object} context The context for drawing.
     * @param {object} store The store for drawing.
     * @param {object} params The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let wrapperDiv = document.createElement('div');
        wrapperDiv.classList.add('sliding-container-wrapper');

        let transparentDiv = document.createElement('div');
        transparentDiv.classList.add('sliding-container-transparent');

        if (this._isOpen) {
            transparentDiv.style.width = this.maxWidth;
        }

        let native = document.createElement('div');
        native.setAttribute('part', 'sliding-container');
        native.classList.add('native-sliding-container');
        native.style.width = 0;
        if (this.hasOpacity) {
            native.style.opacity = 0;
        }

        if (this._isOpen) {
            native.style.width = this.maxWidth;
            if (this.hasOpacity) {
                native.style.opacity = 1;
            }
        }

        if (this.direction === 'right') {
            native.style.right = 0;
        } else {
            native.style.left = 0;
        }

        let slot = document.createElement('slot');

        const nativeInner = document.createElement('div');
        nativeInner.classList.add('native-sliding-container-inner');
        nativeInner.style.width = this.maxWidth;

        // APPEND
        nativeInner.append(slot);
        nativeInner.append(this.htmlCloseButton());

        native.append(nativeInner);

        wrapperDiv.append(transparentDiv);
        wrapperDiv.append(native);

        fragment.append(wrapperDiv);

        this.transparentDiv = transparentDiv;
        this.wrapperDiv = wrapperDiv
        this.nativeElement = native;

        return fragment;
    }

    /**
     * Performs actions after the element is drawn on the screen.
     * Attaches an event listener to the document based on the specified trigger.
     * Sets the variant to "over" if the document width is smaller than the screen break point.
     * Calls the checkForVariant method with the current variant.
     */
    afterDraw() {
        document.addEventListener(this.trigger, this.triggerEvent);

        // if document width is on small screen set variant to over
        if (this.screenBreakPoint && window.innerWidth <= this.screenBreakPoint) {
            this.variant = 'over';
        }

        this.checkForVariant(this.variant);
    }

    /**
     * Creates and returns a styled close button element with an icon,
     * including an event listener to trigger the close method.
     * @returns {HTMLElement} The close button element configured with styles, an icon, and event listener.
     */
    htmlCloseButton() {
        let closeButton = document.createElement('wje-button');
        closeButton.setAttribute('part', 'close-button');
        closeButton.classList.add('close-button');

        let icon = document.createElement('wje-icon');
        icon.setAttribute('slot', 'icon-only');
        icon.setAttribute('name', 'x');

        closeButton.append(icon);

        event.addListener(closeButton, 'wje-button:click', null,(e) => {
            this.close();
        });

        return closeButton;
    }

    /**
     * Retrieves the parent element of the current element.
     * If the parent element is not found, it attempts to find the root host element.
     * @returns {Element|null} The parent element or the root host element if no parent exists. Returns null if neither is found.
     */
    getParentElement() {
        let parentElement = this.parentElement;

        if (!parentElement) {
            parentElement = this.getRootNode().host;
        }

        return parentElement;
    }

    /**
     * Adjusts the position and dimensions of the current element based on the specified variant.
     *
     * The method handles modifications to the element's positioning style, aligns it relative to its parent,
     * and manages alignment to its siblings based on the specified direction.
     * @param {string} variant The variant to determine how the element should be updated. For example, when set to 'over', specific adjustments to the position and size are performed.
     * @returns {void} No value is returned, the method modifies the element's style properties directly.
     */
    checkForVariant(variant) {
        if (variant === 'over') {
            this.style.position = 'fixed';
            let computentStyleOfParent = window.getComputedStyle(this.getParentElement());
            let parentElementBoundingbox = this.getParentElement().getBoundingClientRect();
            let heightOfParrentElement = parseFloat(computentStyleOfParent.height);

            let topOfParrentElement = parseFloat(computentStyleOfParent.top);

            this.style.height = heightOfParrentElement + +this.addToHeight + 'px';
            this.wrapperDiv.style.height = heightOfParrentElement + +this.addToHeight + 'px';
            this.style.top = topOfParrentElement + 'px';

            const leftSibling = this.previousElementSibling;
            const rightSibling = this.nextElementSibling;
            const leftSiblingBoundingbox = leftSibling?.getBoundingClientRect();
            const rightSiblingBoundingbox = rightSibling?.getBoundingClientRect();

            if (this.direction === 'right') {
                // attach to left sibling
                if (leftSiblingBoundingbox) {
                    this.style.left = leftSiblingBoundingbox.left + leftSiblingBoundingbox.width + 'px';
                } else {
                    this.style.left = parentElementBoundingbox.left + 'px';
                }
            } else {
                // attach to right sibling
                if (rightSiblingBoundingbox) {
                    this.style.right = window.innerWidth - rightSiblingBoundingbox.left + 'px';
                } else {
                    this.style.right =
                        window.innerWidth - (parentElementBoundingbox.left + parentElementBoundingbox.width) + 'px';
                }
            }
        }
    }

    /**
     * Triggers the event based on the target element.
     * If the target element is different from the last caller, it refreshes the children by calling the `open` method.
     * If the target element is the same as the last caller, it toggles the state by calling the `toggle` method.
     * @param {Event} e The event object.
     */
    triggerEvent = async (e) => {
        if (this._lastCaller && this._lastCaller !== e.composedPath()[0]) {
            // same oppener event but different caller so just refresh inner content
            await this.open(e);
        } else {
            // came caller so toggle
            await this.toggle(e);
        }

        this._lastCaller = e.composedPath()[0];
    };

    /**
     * Executes before the element is opened.
     */
    beforeOpen(e) {
        // Hook for extending behavior before the dialog opens
    }

    /**
     * Callback function called after the element is opened.
     */
    afterOpen(e) {
        // Hook for extending behavior before the dialog opens
    }

    /**
     * Executes before closing the element.
     */
    beforeClose(e) {
        // Hook for extending behavior before the dialog opens
    }

    /**
     * Callback function that is called after the container is closed.
     */
    afterClose(e) {
        // Hook for extending behavior before the dialog opens
    }

    /**
     * Animates the transition of elements with specified options, toggling the visibility and/or dimensions
     * of the associated elements based on their current state.
     *
     * This method handles both forward and reverse animations for two elements (`transparentDiv` and `nativeElement`)
     * with optional opacity changes. It ensures smooth transitioning by canceling any previous animations on the provided
     * elements before initiating a new animation sequence.
     * @returns {Promise<void>} A promise that resolves when the transition animation is completed.
     */
    doAnimateTransition() {
        const options = {
            delay: 0,
            endDelay: 0,
            fill: 'forwards',
            duration: +this.animationDuration,
            iterationStart: 0,
            iterations: 1,
            direction: 'normal',
            easing: this.animationEasing,
        };

        if (this.animation && this.animation?.effect?.target !== this.transparentDiv) {
            this.animation.cancel();
            this.animation = null;
        }

        if (this.nativeAnimation && this.nativeAnimation?.effect?.target !== this.nativeElement) {
            this.nativeAnimation.cancel();
            this.nativeAnimation = null;
        }

        if (!this._isOpen) {
            if (this.animation && this.nativeAnimation) {
                this.animation.reverse();
                this.nativeAnimation.reverse();
            } else {
                this.animation = this.transparentDiv.animate(
                    [
                        {
                            width: 0,
                        },
                        {
                            width: this.maxWidth,
                        },
                    ],
                    options
                );

                this.nativeAnimation = this.nativeElement.animate(
                    [
                        {
                            ...(this.hasOpacity ? { opacity: 0 } : {}),
                            width: 0,
                        },
                        {
                            ...(this.hasOpacity ? { opacity: 1 } : {}),
                            width: this.maxWidth,
                        },
                    ],
                    options
                );
            }
        } else {
            if (this.animation && this.nativeAnimation) {
                this.animation.reverse();
                this.nativeAnimation.reverse();
            } else {
                this.animation = this.transparentDiv.animate(
                    [
                        {
                            width: this.maxWidth,
                        },
                        {
                            width: 0,
                        },
                    ],
                    options
                );

                this.nativeAnimation = this.nativeElement.animate(
                    [
                        {
                            ...(this.hasOpacity ? { opacity: 1 } : {}),
                            width: this.maxWidth,
                        },
                        {
                            ...(this.hasOpacity ? { opacity: 0 } : {}),
                            width: 0,
                        },
                    ],
                    options
                );
            }
        }

        return new Promise((resolve, reject) => {
            this.animation.onfinish = () => {
                this._isOpen = !this._isOpen;
                resolve();
            };
        });
    }

    /**
     * Opens the sliding container by performing necessary preparatory and transitional operations.
     * @param {Event} e The event that triggered the open operation.
     * @returns {Promise<void>} A promise that resolves when the open operation, including animations and subsequent handlers, is complete.
     */
    async open(e) {
        await Promise.resolve(this.beforeOpen(e)).then(async () => {
            if (!this._isOpen) {
                this.classList.add('open');

                event.dispatchCustomEvent(this, 'wje-sliding-container:beforeOpen')

                this.checkForVariant(this.variant);

                await this.doAnimateTransition();

                await Promise.resolve(this.afterOpen(e)).then(() => {
                    event.dispatchCustomEvent(this, 'wje-sliding-container:open')
                });
            }
        });
    }

    /**
     * Closes the sliding container and performs associated operations such as animations and event dispatches.
     * @param {Event} e The event object associated with the close action.
     * @returns {Promise<void>} A promise that resolves when the closing operation, including animations and child element removal, is completed.
     */
    async close(e) {
        await Promise.resolve(this.beforeClose(e)).then(async () => {
            if (this._isOpen) {
                this.classList.remove('open');

                event.dispatchCustomEvent(this, 'wje-sliding-container:beforeClose');

                await this.doAnimateTransition();

                await Promise.resolve(this.afterClose(e)).then(() => {
                    if (this.removeChildAfterClose) {
                        this.childNodes.forEach((child) => {
                            child.remove();
                        });
                    }

                    event.dispatchCustomEvent(this, 'wje-sliding-container:afterClose');
                });
            }
        });
    }

    /**
     * Toggles the state between open and closed.
     * @param {Event} e The event object triggering the toggle.
     * @returns {Promise<void>} A promise that resolves once the toggle operation (open or close) is complete.
     */
    async toggle(e) {
        if (this._isOpen) {
            await this.close(event);
        } else {
            await this.open(event);
        }
    }

    /**
     * Cleans up resources associated with the component by disconnecting
     * the resize observer and setting it to null.
     * @returns {void} Does not return a value.
     */
    componentCleanup() {
        this._resizeObserver?.disconnect();
        this._resizeObserver = null;
    }
}
