import { default as WJElement, WjElementUtils, event } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

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
     * Creates an instance of Toast.
     */
    constructor() {
        super();

        this.toastStack = Object.assign(document.createElement('div'), { className: 'wje-toast-stack' });
    }

    /**
     * Set headline value of the toast.
     * @param value
     */
    set headline(value) {
        this.setAttribute("headline", value);
    }

    /**
     * Get headline value of the toast.
     * @returns {string}
     */
    get headline() {
        return this.getAttribute("headline");
    }

    /**
     * Set open value of the toast.
     * @param value
     */
    set open(value) {
        this.removeAttribute("open");

        if(WjElementUtils.stringToBoolean(value))
            this.setAttribute("open", value);
    }

    /**
     * Get open value of the toast.
     * @returns {boolean}
     */
    get open() {
        return this.hasAttribute("open");
    }

    /**
     * Set duration value of the toast.
     * @param value
     */
    set duration(value) {
        this.setAttribute("duration", value);
    }

    /**
     * Get duration value of the toast.
     * @returns {number}
     */
    get duration() {
        return +this.getAttribute("duration");
    }

    /**
     * Set closable value of the toast.
     * @param value
     */
    set closable(value) {
        this.setAttribute("closable", value || "");
    }

    /**
     * Get closable value of the toast.
     * @returns {boolean}
     */
    get closable() {
        return this.hasAttribute("closable");
    }

    /**
     * Set color value of the toast.
     * @param value
     */
    set color(value) {
        this.setAttribute("color", value);
    }

    /**
     * Get color value of the toast.
     * @returns {string}
     */
    get color() {
        return this.getAttribute("color");
    }

    /**
     * Set countdown value of the toast.
     * @param value
     */
    set countdown(value) {
        if(value)
            this.setAttribute("countdown", value);
    }

    /**
     * Get countdown value of the toast.
     * @returns {boolean}
     */
    get countdown() {
        return this.hasAttribute("countdown");
    }

    /**
     * Set icon value of the toast.
     * @param value
     */
    set icon(value) {
        this.setAttribute("icon", value);
    }

    /**
     * Get icon value of the toast.
     * @returns {string}
     */
    get icon() {
        return this.getAttribute("icon");
    }

    /**
     * The class name for the component.
     * @type {string}
     */
    className = "Toast";

    /**
     * Returns the CSS stylesheet for the component.
     * @static
     * @returns {CSSStyleSheet} The CSS stylesheet
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Setup attributes for the Button element.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draw method for the toast notification.
     * @returns {object} Document fragment
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.setAttribute('part', 'native');
        native.classList.add("native-toast");

        let mediaSlot = document.createElement("slot");
        mediaSlot.setAttribute('name', 'media');
        mediaSlot.classList.add("media");
        mediaSlot.addEventListener('slotchange', () => {
            if (WjElementUtils.hasSlotContent(this.context, 'media')) {
                mediaSlot.parentElement.classList.add('has-media');
            } else {
                mediaSlot.parentElement.classList.remove('has-media');
            }
        });

        let content = document.createElement("div");
        content.classList.add("content");
        content.innerHTML = `<div class="headline">${this.headline}</div><div class="message"><slot></slot></div>`;

        let iconX = document.createElement("wje-icon");
        iconX.setAttribute("name", "x");

        let closeBtn = document.createElement("wje-button");
        closeBtn.setAttribute("fill", "link");
        closeBtn.setAttribute("color", this.color);
        closeBtn.setAttribute('size', 'small');
        closeBtn.classList.add("close");

        let countdownEl = document.createElement("div");
        countdownEl.classList.add("countdown");

        let countdownBar = document.createElement("div");
        countdownBar.classList.add("countdown-bar");

        closeBtn.appendChild(iconX);
        countdownEl.appendChild(countdownBar);

        if(this.hasAttribute('icon') && this.icon) {
            let icon = document.createElement("wje-icon");
            icon.setAttribute("name", this.icon);
            icon.setAttribute('color', this.color);
            icon.setAttribute('slot', 'media');
            icon.setAttribute('part', 'icon');

            this.appendChild(icon);
        }

        native.appendChild(mediaSlot);
        native.appendChild(content);

        if(this.closable)
            native.appendChild(closeBtn);

        if(this.hasAttribute('countdown'))
            native.appendChild(countdownEl);

        fragment.appendChild(native);

        this.closeBtn = closeBtn;
        this.countdownBar = countdownBar;

        return fragment;
    }

    /**
     * After draw method for the toast notification.
     */
    afterDraw() {
        this.closeBtn.addEventListener('wje-button:click', this.hide);
        this.addEventListener('mouseenter', this.pause);
        this.addEventListener('mouseleave', this.resume);

        if(this.hasAttribute('countdown')) {
            const startWidth = '100%';
            const endWidth = '0';

            this.countdownAnimation = this.countdownBar.animate([{ width: startWidth }, { width: endWidth }], {
                duration: this.duration,
                easing: 'linear'
            });
        }

        if (this.duration > 0) {
            this.remainingTime = this.duration;
            this.startTimer();
        }
    }

    /**
     * Before disconnect method
     * This method is called before the element is disconnected from the document.
     */
    beforeDisconnect() {
        this.closeBtn.removeEventListener('wje-button:click', this.hide);
        this.removeEventListener('wje-toast:after-hide', this.removeChildAndStack);
        this.removeEventListener('mouseenter', this.pause);
        this.removeEventListener('mouseleave', this.resume);

        clearTimeout(this.timeoutID);
    }

    /**
     * Starts the timer.
     * This method sets the `startTime` property to the current time and sets
     * the `timeoutID` property to the ID of the timeout. The method also
     * dispatches the `wje-toast:after-hide` custom event when the timeout
     * expires.
     */
    startTimer() {
        this.startTime = Date.now();
        if (this.timeoutID) {
            clearTimeout(this.timeoutID);
        }
        this.timeoutID = window.setTimeout(() => {
            this.hide();
        }, this.remainingTime);
    }

    /**
     * Stops the timer.
     * This method clears the timeout and calculates the remaining time.
     * The method is called when the toast notification is paused.
     */
    stopTimer() {
        if (this.timeoutID) {
            window.clearTimeout(this.timeoutID);
        }
        const elapsedTime = Date.now() - this.startTime;
        this.remainingTime -= elapsedTime;
    }

    /**
     * Resumes the timer.
     * This method resumes the timer if the remaining time is greater
     * than zero. The method is called when the toast notification is resumed.
     */
    resumeTimer() {
        if (this.remainingTime > 0) {
            this.startTimer();
        }
    }

    /**
     * Asynchronously shows the toast notification.
     * This method sets the `open` property to `true` and dispatches the
     * `wje-toast:after-show` custom event. If the toast is already open,
     * the method returns `undefined`.
     */
    show = () => {
        if (this.open) {
            return;
        }

        this.open = true;
        event.dispatchCustomEvent(this, 'wje-toast:after-show');
    }

    /**
     * Asynchronously hides the toast notification.
     * This method sets the `open` property to `false` and dispatches the
     * `wje-toast:after-hide` custom event. If the toast is already hidden,
     * the method returns `undefined`.
     */
    hide = () => {
        if (!this.open) {
            return;
        }

        this.open = false;
        event.dispatchCustomEvent(this, 'wje-toast:after-hide');
    }

    /**
     * Pauses the countdown animation and stops the timer.
     */
    pause = () => {
        this.countdownAnimation?.pause();
        this.stopTimer();
    }

    /**
     * Resumes the countdown animation and resumes the timer.
     */
    resume = () => {
        this.countdownAnimation?.play();
        this.resumeTimer();
    }

    /**
     * Removes the toast notification and the toast stack.
     *
     * This method removes the toast notification from the toast stack and
     * removes the toast stack from the document body if the toast stack is
     * empty.
     */
    removeChildAndStack() {
        this.toastStack.removeChild(this);

        if (this.toastStack.querySelector('wje-toast') === null) {
            this.toastStack.remove();
        }
    }

    /**
     * Asynchronously starts the toast notification.
     * This method appends the toast notification to the document body and
     * shows the toast notification. The method returns a promise that
     * resolves when the toast notification is shown.
     * @returns {Promise<unknown>}
     */
    start = () => {
        return new Promise(resolve => {

            let stack = document.body.querySelector('.wje-toast-stack');
            if (stack) {
                this.toastStack = stack;
            }

            if (this.toastStack.parentElement === null) {
                document.body.append(this.toastStack);
            }

            this.toastStack.append(this);

            this.show();

            this.addEventListener('wje-toast:after-hide', this.removeChildAndStack);
        });
    }
}