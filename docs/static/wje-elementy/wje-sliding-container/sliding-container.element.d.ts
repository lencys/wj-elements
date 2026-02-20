import { default as WJElement } from '../wje-element/element.js';
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
     * Returns the observed attributes for the component.
     * @returns {string[]}
     */
    static get observedAttributes(): string[];
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    _isOpen: boolean;
    _lastCaller: EventTarget;
    _resizeObserver: ResizeObserver;
    /**
     * Sets the 'variant' attribute to the specified value.
     * @param {string} value The value to set for the 'variant' attribute.
     */
    set variant(value: string);
    /**
     * Retrieves the value of the "variant" attribute. If the attribute is not set,
     * it returns the default value 'in-place'.
     * @returns {string} The variant value or the default value 'in-place'.
     */
    get variant(): string;
    /**
     * Sets the maximum width of an element by updating the 'max-width' attribute.
     * @param {string} value The maximum width value to be set (e.g., '100px', '50%', etc.).
     */
    set maxWidth(value: string);
    /**
     * Gets the maximum width value of the element.
     * Retrieves the value of the 'max-width' attribute. If the attribute is not set, it defaults to 'auto'.
     * @returns {string} The maximum width value of the element or 'auto' if the attribute is not defined.
     */
    get maxWidth(): string;
    /**
     * Sets the maximum height for the element.
     * @param {string} value The maximum height value to be applied to the element. This can include units such as "px", "em", "%", etc.
     */
    set maxHeight(value: string);
    /**
     * Retrieves the maximum height value of the element, or returns 'auto' if not set.
     * @returns {string} The maximum height value or 'auto' if the attribute is not specified.
     */
    get maxHeight(): string;
    /**
     * Sets the 'trigger' attribute for the element.
     * @param {string} value The value to set for the 'trigger' attribute.
     */
    set trigger(value: string);
    /**
     * Retrieves the value of the 'trigger' attribute. If the attribute is not set, it defaults to 'sliding-container'.
     * @returns {string} The value of the 'trigger' attribute or the default value 'sliding-container' if not defined.
     */
    get trigger(): string;
    /**
     * Sets the direction attribute for the element.
     * @param {string} value The direction value to be assigned. Possible values are typically 'ltr' (left-to-right), 'rtl' (right-to-left), or 'auto'.
     */
    set direction(value: string);
    /**
     * Retrieves the direction attribute of the instance.
     * If the direction attribute is not set, it defaults to 'right'.
     * @returns {string} The value of the direction attribute or 'right' if not set.
     */
    get direction(): string;
    /**
     * Sets the value of the `remove-child-after-close` attribute.
     * This attribute determines if a child element should be removed after a close operation.
     * @param {boolean|string} value The value to set for the `remove-child-after-close` attribute. The value can be a boolean or a string representation of a boolean.
     */
    set removeChildAfterClose(value: boolean | string);
    /**
     * Gets the value indicating whether the child element should be removed after closing.
     *
     * This property checks the presence of the 'remove-child-after-close' attribute on the element.
     * Returns `false` if the attribute does not exist.
     * @returns {boolean} True if the 'remove-child-after-close' attribute is present, otherwise false.
     */
    get removeChildAfterClose(): boolean;
    /**
     * Sets the screen break point value to determine responsive behavior.
     * @param {string} value The value to set as the screen break point.
     */
    set screenBreakPoint(value: string);
    /**
     * Retrieves the value of the 'screen-break-point' attribute.
     * @returns {string} The value of the 'screen-break-point' attribute.
     */
    get screenBreakPoint(): string;
    /**
     * Sets the duration of the animation by updating the `animation-duration` attribute.
     * @param {string} value The duration value for the animation, specified in a format
     * such as seconds (e.g., "2s") or milliseconds (e.g., "200ms").
     */
    set animationDuration(value: string);
    /**
     * Gets the animation duration for an element.
     * It retrieves the value of the 'animation-duration' attribute if present; otherwise, it defaults to '500'.
     * @returns {string} The value of the animation duration, either from the attribute or the default '500'.
     */
    get animationDuration(): string;
    /**
     * Sets the easing function for the animation.
     * @param {string} value The easing function to use for the animation. This can be any valid CSS timing function such as "ease", "linear", "ease-in", "ease-out", etc.
     */
    set animationEasing(value: string);
    /**
     * Retrieves the easing function for the animation.
     * @returns {string} The value of the 'animation-easing' attribute if set, otherwise defaults to 'linear'.
     */
    get animationEasing(): string;
    /**
     * Determines if the element has an 'has-opacity' attribute.
     * @returns {boolean} True if the element has the 'has-opacity' attribute, otherwise false.
     */
    get hasOpacity(): boolean;
    /**
     * Sets the value of the 'add-to-height' attribute.
     * This attribute is used to modify or adjust the height dynamically.
     * @param {string} value The value to be assigned to the 'add-to-height' attribute.
     */
    set addToHeight(value: string);
    /**
     * Retrieves the value of the 'add-to-height' attribute from the element.
     * If the attribute is not set, it defaults to '0'.
     * @returns {string} The value of the 'add-to-height' attribute or '0' if the attribute is not present.
     */
    get addToHeight(): string;
    /**
     * Determines whether the current state is open.
     * @returns {boolean} True if the state is open, otherwise false.
     */
    get isOpen(): boolean;
    /**
     * Executes before drawing the element.
     */
    beforeDraw(): void;
    /**
     * Draws the component.
     * @param {object} context The context for drawing.
     * @param {object} store The store for drawing.
     * @param {object} params The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw(context: object, store: object, params: object): DocumentFragment;
    transparentDiv: HTMLDivElement;
    wrapperDiv: HTMLDivElement;
    nativeElement: HTMLDivElement;
    /**
     * Performs actions after the element is drawn on the screen.
     * Attaches an event listener to the document based on the specified trigger.
     * Sets the variant to "over" if the document width is smaller than the screen break point.
     * Calls the checkForVariant method with the current variant.
     */
    afterDraw(): void;
    /**
     * Sync ARIA attributes on host.
     */
    syncAria(): void;
    /**
     * Creates and returns a styled close button element with an icon,
     * including an event listener to trigger the close method.
     * @returns {HTMLElement} The close button element configured with styles, an icon, and event listener.
     */
    htmlCloseButton(): HTMLElement;
    /**
     * Retrieves the parent element of the current element.
     * If the parent element is not found, it attempts to find the root host element.
     * @returns {Element|null} The parent element or the root host element if no parent exists. Returns null if neither is found.
     */
    getParentElement(): Element | null;
    /**
     * Adjusts the position and dimensions of the current element based on the specified variant.
     *
     * The method handles modifications to the element's positioning style, aligns it relative to its parent,
     * and manages alignment to its siblings based on the specified direction.
     * @param {string} variant The variant to determine how the element should be updated. For example, when set to 'over', specific adjustments to the position and size are performed.
     * @returns {void} No value is returned, the method modifies the element's style properties directly.
     */
    checkForVariant(variant: string): void;
    /**
     * Triggers the event based on the target element.
     * If the target element is different from the last caller, it refreshes the children by calling the `open` method.
     * If the target element is the same as the last caller, it toggles the state by calling the `toggle` method.
     * @param {Event} e The event object.
     */
    triggerEvent: (e: Event) => Promise<void>;
    /**
     * Executes before the element is opened.
     */
    beforeOpen(e: any): void;
    /**
     * Callback function called after the element is opened.
     */
    afterOpen(e: any): void;
    /**
     * Executes before closing the element.
     */
    beforeClose(e: any): void;
    /**
     * Callback function that is called after the container is closed.
     */
    afterClose(e: any): void;
    /**
     * Animates the transition of elements with specified options, toggling the visibility and/or dimensions
     * of the associated elements based on their current state.
     *
     * This method handles both forward and reverse animations for two elements (`transparentDiv` and `nativeElement`)
     * with optional opacity changes. It ensures smooth transitioning by canceling any previous animations on the provided
     * elements before initiating a new animation sequence.
     * @returns {Promise<void>} A promise that resolves when the transition animation is completed.
     */
    doAnimateTransition(): Promise<void>;
    animation: any;
    nativeAnimation: any;
    /**
     * Opens the sliding container by performing necessary preparatory and transitional operations.
     * @param {Event} e The event that triggered the open operation.
     * @returns {Promise<void>} A promise that resolves when the open operation, including animations and subsequent handlers, is complete.
     */
    open(e: Event): Promise<void>;
    /**
     * Closes the sliding container and performs associated operations such as animations and event dispatches.
     * @param {Event} e The event object associated with the close action.
     * @returns {Promise<void>} A promise that resolves when the closing operation, including animations and child element removal, is completed.
     */
    close(e: Event): Promise<void>;
    /**
     * Toggles the state between open and closed.
     * @param {Event} e The event object triggering the toggle.
     * @returns {Promise<void>} A promise that resolves once the toggle operation (open or close) is complete.
     */
    toggle(e: Event): Promise<void>;
}
