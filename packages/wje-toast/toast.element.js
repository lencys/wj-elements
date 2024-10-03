import { default as WJElement, event } from "../wje-element/element.js";

import styles from "./styles/styles.css?inline";

/**
 * `Toast` is a custom web component that represents a toast notification.
 * @summary This element represents a toast notification.
 * @documentation https://elements.webjet.sk/components/toast
 * @status stable
 *
 * @extends {WJElement}
 *
 * @csspart native - The native part
 *
 * @prop {string} headline - The headline of the toast.
 * @prop {boolean} open - The open state of the toast.
 * @prop {number} duration - The duration of the toast.
 * @prop {boolean} closable - The closable state of the toast.
 * @prop {string} color - The color of the toast.
 * @prop {boolean} countdown - The countdown state of the toast.
 *
 * @slot - The content of the toast.
 * @slot avatar - The avatar of the toast.
 *
 * @fires wje-toast:after-show - Fired after the toast is shown.
 * @fires wje-toast:after-hide - Fired after the toast is hidden.
 */
export default class Toast extends WJElement {
    /**
     * Toast constructor
     * @constructor
     */
    constructor() {
        super();

        this.toastStack = Object.assign(document.createElement('div'), { className: 'wje-toast-stack' });
    }

    set headline(value) {
        this.setAttribute("headline", value);
    }

    get headline() {
        return this.getAttribute("headline");
    }

    set open(value) {
        this.setAttribute("open", value);
    }

    get open() {
        return this.getAttribute("open");
    }

    set duration(value) {
        this.setAttribute("duration", value);
    }

    get duration() {
        return +this.getAttribute("duration");
    }

    set closable(value) {
        if(value)
            this.setAttribute("closable", value);
    }

    get closable() {
        return this.getAttribute("closable");
    }

    set color(value) {
        this.setAttribute("color", value);
    }

    get color() {
        return this.getAttribute("color");
    }

    set countdown(value) {
        if(value)
            this.setAttribute("countdown", value);
    }

    get countdown() {
        return this.hasAttribute("countdown");
    }

    /**
     * Class name
     * @type {string}
     */
    className = "Toast";

    /**
     * Get CSS stylesheet
     * @static
     * @returns {Object} styles
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Returns the list of attributes to observe for changes.
     *
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes() {
        return ["open", "color", "duration"];
    }

    /**
     * Called when an attribute changes.
     *
     * @param {string} name - The name of the attribute.
     * @param {string} old - The old value of the attribute.
     * @param {string} newName - The new value of the attribute.
     */
    attributeChangedCallback(name, old, newName) {
        // if(this.open) {
        //     this.show();
        // } else {
        //     this.hide();
        // }
    }

    /**
     * Setup attributes
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draw method
     * @param {Object} context - The context
     * @param {Object} store - The store
     * @param {Object} params - The parameters
     * @returns {Object} Document fragment
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.setAttribute('part', 'native');
        native.classList.add("native-toast");

        let avatarSlot = document.createElement("slot");
        avatarSlot.setAttribute('name', 'avatar');
        avatarSlot.classList.add("avatar");

        let content = document.createElement("div");
        content.classList.add("content");
        content.innerHTML = `<div class="headline">${this.headline}</div><div class="message"><slot></slot></div>`;

        let icon = document.createElement("wje-icon");
        icon.setAttribute("name", "x");

        let closeBtn = document.createElement("wje-button");
        closeBtn.setAttribute("fill", "link");
        closeBtn.setAttribute("color", this.color);
        closeBtn.setAttribute('size', 'small');
        closeBtn.classList.add("close");

        let countdownEl = document.createElement("div");
        countdownEl.classList.add("countdown");

        let countdownBar = document.createElement("div");
        countdownBar.classList.add("countdown-bar");

        closeBtn.appendChild(icon);
        countdownEl.appendChild(countdownBar);

        native.appendChild(avatarSlot);
        native.appendChild(content);

        if(this.hasAttribute('closable'))
            native.appendChild(closeBtn);

        if(this.hasAttribute('countdown'))
            native.appendChild(countdownEl);

        fragment.appendChild(native);

        this.closeBtn = closeBtn;
        this.countdownBar = countdownBar;

        return fragment;
    }

    /**
     * After draw method
     * @param {Object} context - The context
     * @param {Object} store - The store
     * @param {Object} params - The parameters
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
     *
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
     *
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
     *
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
     *
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
     *
     * This method sets the `open` property to `true` and dispatches the
     * `wje-toast:after-show` custom event. If the toast is already open,
     * the method returns `undefined`.
     */
    show = () => {
        if (this.open) {
            return undefined;
        }

        this.open = true;
        event.dispatchCustomEvent(this, 'wje-toast:after-show');
    }

    /**
     * Asynchronously hides the toast notification.
     *
     * This method sets the `open` property to `false` and dispatches the
     * `wje-toast:after-hide` custom event. If the toast is already hidden,
     * the method returns `undefined`.
     */
    hide = () => {
        if (!this.open) {
            return undefined;
        }

        this.open = false;
        event.dispatchCustomEvent(this, 'wje-toast:after-hide');
    }

    /**
     * Pauses the countdown animation and stops the timer.
     */
    pause = async () => {
        this.countdownAnimation?.pause();
        this.stopTimer();
    }

    /**
     * Resumes the countdown animation and resumes the timer.
     */
    resume = async () => {
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
     *
     * This method appends the toast notification to the document body and
     * shows the toast notification. The method returns a promise that
     * resolves when the toast notification is shown.
     *
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

            this.toastStack.appendChild(this);

            this.show();

            this.addEventListener('wje-toast:after-hide', this.removeChildAndStack);
        });
    }


}