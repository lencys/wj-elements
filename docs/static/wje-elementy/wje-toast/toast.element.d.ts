import { default as WJElement } from '../wje-element/element.js';
/**
 * `Toast` is a custom web component that represents a toast notification.
 * @summary This element represents a toast notification.
 * @documentation https://elements.webjet.sk/components/toast
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native part
 * @cssproperty {string} headline - Specifies the headline text of the toast. Represents the main title or heading displayed in the toast.
 * @cssproperty {boolean} open - Indicates whether the toast is currently open (visible). A value of `true` shows the toast, while `false` hides it.
 * @cssproperty {number} duration - Determines the duration (in milliseconds) for which the toast is displayed. After this time, the toast will automatically close unless it is manually closed.
 * @cssproperty {boolean} closable - Specifies whether the toast can be manually closed by the user. If `true`, the toast will include a close button or mechanism.
 * @cssproperty {string} color - Defines the color of the toast. Accepts any valid CSS color value such as `hex`, `RGB`, or named colors.
 * @cssproperty {boolean} countdown - Indicates whether a countdown is displayed in the toast. When `true`, a visual countdown timer is shown to indicate the remaining time before the toast closes.
 * @slot - The content of the toast.
 * @slot media - The media of the toast.
 * // @fires wje-toast:after-show - Fired after the toast is shown.
 * // @fires wje-toast:after-hide - Fired after the toast is hidden.
 */
export default class Toast extends WJElement {
    /**
     * Returns the CSS stylesheet for the component.
     * @static
     * @returns {CSSStyleSheet} The CSS stylesheet
     */
    static get cssStyleSheet(): CSSStyleSheet;
    toastStack: HTMLDivElement & {
        className: string;
    };
    /**
     * Set headline value of the toast.
     * @param value
     */
    set headline(value: string);
    /**
     * Get headline value of the toast.
     * @returns {string}
     */
    get headline(): string;
    /**
     * Set open value of the toast.
     * @param value
     */
    set open(value: boolean);
    /**
     * Get open value of the toast.
     * @returns {boolean}
     */
    get open(): boolean;
    /**
     * Set duration value of the toast.
     * @param value
     */
    set duration(value: number);
    /**
     * Get duration value of the toast.
     * @returns {number}
     */
    get duration(): number;
    /**
     * Set closable value of the toast.
     * @param value
     */
    set closable(value: boolean);
    /**
     * Get closable value of the toast.
     * @returns {boolean}
     */
    get closable(): boolean;
    /**
     * Set color value of the toast.
     * @param value
     */
    set color(value: string);
    /**
     * Get color value of the toast.
     * @returns {string}
     */
    get color(): string;
    /**
     * Set countdown value of the toast.
     * @param value
     */
    set countdown(value: boolean);
    /**
     * Get countdown value of the toast.
     * @returns {boolean}
     */
    get countdown(): boolean;
    /**
     * Set icon value of the toast.
     * @param value
     */
    set icon(value: string);
    /**
     * Get icon value of the toast.
     * @returns {string}
     */
    get icon(): string;
    /**
     * Draw method for the toast notification.
     * @returns {object} Document fragment
     */
    draw(): object;
    closeBtn: HTMLElement;
    countdownBar: HTMLDivElement;
    /**
     * After draw method for the toast notification.
     */
    afterDraw(): void;
    countdownAnimation: Animation;
    remainingTime: number;
    /**
     * Starts the timer.
     * This method sets the `startTime` property to the current time and sets
     * the `timeoutID` property to the ID of the timeout. The method also
     * dispatches the `wje-toast:after-hide` custom event when the timeout
     * expires.
     */
    startTimer(): void;
    startTime: number;
    timeoutID: number;
    /**
     * Stops the timer.
     * This method clears the timeout and calculates the remaining time.
     * The method is called when the toast notification is paused.
     */
    stopTimer(): void;
    /**
     * Resumes the timer.
     * This method resumes the timer if the remaining time is greater
     * than zero. The method is called when the toast notification is resumed.
     */
    resumeTimer(): void;
    /**
     * Asynchronously shows the toast notification.
     * This method sets the `open` property to `true` and dispatches the
     * `wje-toast:after-show` custom event. If the toast is already open,
     * the method returns `undefined`.
     */
    show: () => void;
    /**
     * Asynchronously hides the toast notification.
     * This method sets the `open` property to `false` and dispatches the
     * `wje-toast:after-hide` custom event. If the toast is already hidden,
     * the method returns `undefined`.
     */
    hide: () => void;
    /**
     * Pauses the countdown animation and stops the timer.
     */
    pause: () => void;
    /**
     * Resumes the countdown animation and resumes the timer.
     */
    resume: () => void;
    /**
     * Removes the toast notification and the toast stack.
     *
     * This method removes the toast notification from the toast stack and
     * removes the toast stack from the document body if the toast stack is
     * empty.
     */
    removeChildAndStack(): void;
    /**
     * Asynchronously starts the toast notification.
     * This method appends the toast notification to the document body and
     * shows the toast notification. The method returns a promise that
     * resolves when the toast notification is shown.
     * @returns {Promise<unknown>}
     */
    start: () => Promise<unknown>;
}
