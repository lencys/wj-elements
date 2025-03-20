import { default as WJElement } from '../../packages/wje-element/element.js';
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

    set maxWidth(value) {
        this.setAttribute('max-width', value);
    }

    get maxWidth() {
        return this.getAttribute('max-width') ?? 'auto';
    }

    set maxHeight(value) {
        this.setAttribute('max-height', value);
    }

    get maxHeight() {
        return this.getAttribute('max-height') ?? 'auto';
    }

    set trigger(value) {
        this.setAttribute('trigger', value);
    }

    get trigger() {
        return this.getAttribute('trigger') ?? 'sliding-container';
    }

    set direction(value) {
        this.setAttribute('direction', value);
    }

    get direction() {
        return this.getAttribute('direction') ?? 'right';
    }

    set removeChildAfterClose(value) {
        this.setAttribute('remove-child-after-close', value);
    }

    get removeChildAfterClose() {
        return this.hasAttribute('remove-child-after-close') ?? false;
    }

    set variant(value) {
        this.setAttribute('variant', value);
    }

    get variant() {
        return this.getAttribute('variant') ?? 'in-place';
    }

    get screenBreakPoint() {
        return this.getAttribute('screen-break-point');
    }

    set screenBreakPoint(value) {
        this.setAttribute('screen-break-point', value);
    }

    get animationDuration() {
        return this.getAttribute('animation-duration') ?? '500';
    }

    set animationDuration(value) {
        this.setAttribute('animation-duration', value);
    }

    get animationEasing() {
        return this.getAttribute('animation-easing') ?? 'linear';
    }

    set animationEasing(value) {
        this.setAttribute('animation-easing', value);
    }

    get hasOpacity() {
        return this.hasAttribute('has-opacity') ?? false;
    }

    get addToHeight() {
        return this.getAttribute('add-to-height') ?? '0';
    }

    set addToHeight(value) {
        this.setAttribute('add-to-height', value);
    }

    className = 'SlidingContainer';

    /**
     * Returns the observed attributes for the component.
     * @returns {string[]}
     */
    static get observedAttributes() {
        return [
            'max-width',
            'max-height',
            'trigger',
            'direction',
            'variant',
            'screen-break-point',
            'remove-child-after-close',
            'animation-duration',
            'animation-easing',
            'has-opacity',
        ];
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
     * Draws the component.
     * @param {object} context The context for drawing.
     * @param {object} store The store for drawing.
     * @param {object} params The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        this.style.position = 'relative';
        this.style.height = '100%';
        this.style.right = 'unset';
        this.style.left = 'unset';

        this.wrapperDiv = document.createElement('div');
        this.wrapperDiv.classList.add('sliding-container-wrapper');

        this.transparentDiv = document.createElement('div');
        this.transparentDiv.classList.add('sliding-container-transparent');
        if (this._isOpen) {
            this.transparentDiv.style.width = this.maxWidth;
        }

        let native = document.createElement('div');
        native.style.position = 'absolute';
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

        native.style.height = '100%';

        native.classList.add('native-sliding-container');
        native.setAttribute('part', 'sliding-container');

        if (this.direction === 'right') {
            native.style.right = 0;
        } else {
            native.style.left = 0;
        }

        let slot = document.createElement('slot');

        const nativeInner = document.createElement('div');
        nativeInner.classList.add('native-sliding-container-inner');
        nativeInner.style.height = '100%';
        nativeInner.style.position = 'absolute';
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
        let closeButton = document.createElement('wje-button');
        closeButton.setAttribute('part', 'close-button');
        closeButton.style.position = 'absolute';
        closeButton.style.top = '0';
        closeButton.style.right = '0';
        closeButton.style.zIndex = '1000';

        let icon = document.createElement('wje-icon');
        icon.setAttribute('slot', 'icon-only');
        icon.setAttribute('name', 'x');
        closeButton.appendChild(icon);

        closeButton.addEventListener('click', () => {
            this.close();
        });

        return closeButton;
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

    getParentElement() {
        let parentElement = this.parentElement;

        if (!parentElement) {
            parentElement = this.getRootNode().host;
        }

        return parentElement;
    }

    /**
     * Checks for a specific variant and applies corresponding styles.
     * @param {string} variant The variant to check for.
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
    beforeOpen(event) {
        // Hook for extending behavior before the dialog opens
    }

    /**
     * Callback function called after the element is opened.
     */
    afterOpen(event) {
        // Hook for extending behavior before the dialog opens
    }

    /**
     * Executes before closing the element.
     */
    beforeClose(event) {
        // Hook for extending behavior before the dialog opens
    }

    /**
     * Callback function that is called after the container is closed.
     */
    afterClose(event) {
        // Hook for extending behavior before the dialog opens
    }

    /**
     * Animates the transition of the element's width from 0 to the maximum width or vice versa.
     * @returns {Promise<void>} A promise that resolves when the animation is complete.
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
     * Opens the container with an animation.
     * @returns {Promise<void>} A promise that resolves when the container is opened.
     */
    async open(event) {
        await Promise.resolve(this.beforeOpen(event)).then(async () => {
            if (!this._isOpen) {
                this.dispatchEvent(
                    new CustomEvent('wje-sliding-container:beforeOpen', {
                        bubbles: true,
                        composed: true,
                    })
                );

                this.checkForVariant(this.variant);

                await this.doAnimateTransition();

                await Promise.resolve(this.afterOpen(event)).then(() => {
                    this.dispatchEvent(
                        new CustomEvent('wje-sliding-container:open', {
                            bubbles: true,
                            composed: true,
                        })
                    );
                });
            }
        });
    }

    /**
     * Closes the animation container.
     * @returns {Promise<void>} A promise that resolves when the container is closed.
     */
    async close(event) {
        await Promise.resolve(this.beforeClose(event)).then(async () => {
            if (this._isOpen) {
                this.dispatchEvent(
                    new CustomEvent('wje-sliding-container:beforeClose', {
                        bubbles: true,
                        composed: true,
                    })
                );

                await this.doAnimateTransition();

                await Promise.resolve(this.afterClose(event)).then(() => {
                    if (this.removeChildAfterClose) {
                        this.childNodes.forEach((child) => {
                            child.remove();
                        });
                    }

                    this.dispatchEvent(
                        new CustomEvent('wje-sliding-container:close', {
                            bubbles: true,
                            composed: true,
                        })
                    );
                });
            }
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

    componentCleanup() {
        this._resizeObserver?.disconnect();
        this._resizeObserver = null;
    }
}
