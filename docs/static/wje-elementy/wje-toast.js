var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
import { WjElementUtils } from "./element-utils.js";
import { event } from "./event.js";
const styles = "/*\n[ WJ Toast ]\n*/\n\n:host {\n    position: relative;\n    z-index: 9999;\n    width: 300px;\n    margin: 0.5rem 0;\n    display: none;\n}\n\n:host([open]) {\n    display: block;\n}\n\n.native-toast {\n    display: flex;\n    align-items: center;\n    padding: 1rem;\n    overflow: hidden;\n    margin: 0;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: var(--wje-border-radius-large);\n    position: relative;\n\n    &.has-media slot[name='media'] {\n        flex: 0 0 1.5rem;\n        width: 1.5rem;\n        display: flex;\n        margin-right: 0.5rem;\n        justify-content: center;\n    }\n\n    .content {\n        font-size: var(--wje-font-size-small);\n        .headline {\n            font-size: var(--wje-font-size);\n            font-weight: var(--wje-font-weight-bold);\n        }\n    }\n\n    wje-button {\n        --wje-button-margin-inline: auto 0;\n        margin-left: auto !important;\n    }\n\n    .countdown {\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        height: 4px;\n        .countdown-bar {\n            height: 100%;\n        }\n    }\n}\n\n:host([position='top']) {\n    animation: slideDown 0.3s ease-out forwards;\n    top: 1rem;\n    left: auto;\n    right: auto;\n}\n\n:host::part(icon) {\n    margin-right: 0.5rem;\n}\n\n@keyframes slideDown {\n    0% {\n        transform: translateY(-100%);\n    }\n    100% {\n        transform: translateY(0);\n    }\n}\n\n/*PRIMARY*/\n:host([color='primary']) .native-toast {\n    background-color: var(--wje-color-primary-1);\n    color: var(--wje-color-primary-9);\n    border-color: var(--wje-color-primary-3);\n}\n\n/*COMPLETE*/\n:host([color='complete']) .native-toast {\n    background-color: var(--wje-color-complete-1);\n    color: var(--wje-color-complete-9);\n    border-color: var(--wje-color-complete-3);\n}\n\n/*SUCCESS*/\n:host([color='success']) .native-toast {\n    background-color: var(--wje-color-success-1);\n    color: var(--wje-color-success-9);\n    border-color: var(--wje-color-success-3);\n}\n\n/*WARNING*/\n:host([color='warning']) .native-toast {\n    background-color: var(--wje-color-warning-1);\n    color: var(--wje-color-warning-11);\n    border-color: var(--wje-color-warning-3);\n}\n\n/*DANGER*/\n:host([color='danger']) .native-toast {\n    background-color: var(--wje-color-danger-1);\n    color: var(--wje-color-danger-9);\n    border-color: var(--wje-color-danger-3);\n}\n\n/*INFO*/\n:host([color='info']) .native-toast {\n    background-color: var(--wje-color-info-1);\n    color: var(--wje-color-info-11);\n    border-color: var(--wje-color-info-4);\n}\n\n/*CONTRAST*/\n:host([color='contrast']) .native-toast {\n    background-color: var(--wje-color-contrast-2);\n    color: var(--wje-color-contrast-9);\n    border-color: var(--wje-color-contrast-3);\n}\n\n/*PRIMARY*/\n:host([color='primary']) .countdown-bar {\n    background-color: var(--wje-color-primary-9);\n}\n\n/*COMPLETE*/\n:host([color='complete']) .countdown-bar {\n    background-color: var(--wje-color-complete-9);\n}\n\n/*SUCCESS*/\n:host([color='success']) .countdown-bar {\n    background-color: var(--wje-color-success-9);\n}\n\n/*WARNING*/\n:host([color='warning']) .countdown-bar {\n    background-color: var(--wje-color-warning-9);\n}\n\n/*DANGER*/\n:host([color='danger']) .countdown-bar {\n    background-color: var(--wje-color-danger-9);\n}\n\n/*INFO*/\n:host([color='info']) .countdown-bar {\n    background-color: var(--wje-color-info-9);\n}\n\n/*CONTRAST*/\n:host([color='contrast']) .countdown-bar {\n    background-color: var(--wje-color-contrast-9);\n}\n";
class Toast extends WJElement {
  /**
   * Creates an instance of Toast.
   */
  constructor() {
    super();
    /**
     * The class name for the component.
     * @type {string}
     */
    __publicField(this, "className", "Toast");
    /**
     * Asynchronously shows the toast notification.
     * This method sets the `open` property to `true` and dispatches the
     * `wje-toast:after-show` custom event. If the toast is already open,
     * the method returns `undefined`.
     */
    __publicField(this, "show", () => {
      if (this.open) {
        return;
      }
      this.open = true;
      event.dispatchCustomEvent(this, "wje-toast:after-show");
    });
    /**
     * Asynchronously hides the toast notification.
     * This method sets the `open` property to `false` and dispatches the
     * `wje-toast:after-hide` custom event. If the toast is already hidden,
     * the method returns `undefined`.
     */
    __publicField(this, "hide", () => {
      if (!this.open) {
        return;
      }
      this.open = false;
      event.dispatchCustomEvent(this, "wje-toast:after-hide");
    });
    /**
     * Pauses the countdown animation and stops the timer.
     */
    __publicField(this, "pause", () => {
      var _a;
      (_a = this.countdownAnimation) == null ? void 0 : _a.pause();
      this.stopTimer();
    });
    /**
     * Resumes the countdown animation and resumes the timer.
     */
    __publicField(this, "resume", () => {
      var _a;
      (_a = this.countdownAnimation) == null ? void 0 : _a.play();
      this.resumeTimer();
    });
    /**
     * Asynchronously starts the toast notification.
     * This method appends the toast notification to the document body and
     * shows the toast notification. The method returns a promise that
     * resolves when the toast notification is shown.
     * @returns {Promise<unknown>}
     */
    __publicField(this, "start", () => {
      return new Promise((resolve) => {
        let stack = document.body.querySelector(".wje-toast-stack");
        if (stack) {
          this.toastStack = stack;
        }
        if (this.toastStack.parentElement === null) {
          document.body.append(this.toastStack);
        }
        this.toastStack.append(this);
        this.show();
        this.addEventListener("wje-toast:after-hide", this.removeChildAndStack);
      });
    });
    this.toastStack = Object.assign(document.createElement("div"), { className: "wje-toast-stack" });
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
    if (WjElementUtils.stringToBoolean(value)) this.setAttribute("open", value);
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
    if (value) this.setAttribute("countdown", value);
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
    this.setAriaState({
      role: "status"
    });
  }
  /**
   * Draw method for the toast notification.
   * @returns {object} Document fragment
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-toast");
    let mediaSlot = document.createElement("slot");
    mediaSlot.setAttribute("name", "media");
    mediaSlot.classList.add("media");
    mediaSlot.addEventListener("slotchange", () => {
      if (WjElementUtils.hasSlotContent(this.context, "media")) {
        mediaSlot.parentElement.classList.add("has-media");
      } else {
        mediaSlot.parentElement.classList.remove("has-media");
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
    closeBtn.setAttribute("size", "small");
    closeBtn.classList.add("close");
    closeBtn.setAttribute("aria-label", "Close");
    let countdownEl = document.createElement("div");
    countdownEl.classList.add("countdown");
    let countdownBar = document.createElement("div");
    countdownBar.classList.add("countdown-bar");
    closeBtn.appendChild(iconX);
    countdownEl.appendChild(countdownBar);
    if (this.hasAttribute("icon") && this.icon) {
      let icon = document.createElement("wje-icon");
      icon.setAttribute("name", this.icon);
      icon.setAttribute("color", this.color);
      icon.setAttribute("slot", "media");
      icon.setAttribute("part", "icon");
      this.appendChild(icon);
    }
    native.appendChild(mediaSlot);
    native.appendChild(content);
    if (this.closable) native.appendChild(closeBtn);
    if (this.hasAttribute("countdown")) native.appendChild(countdownEl);
    fragment.appendChild(native);
    this.closeBtn = closeBtn;
    this.countdownBar = countdownBar;
    return fragment;
  }
  /**
   * After draw method for the toast notification.
   */
  afterDraw() {
    this.closeBtn.addEventListener("wje-button:click", this.hide);
    this.addEventListener("mouseenter", this.pause);
    this.addEventListener("mouseleave", this.resume);
    if (this.hasAttribute("countdown")) {
      const startWidth = "100%";
      const endWidth = "0";
      this.countdownAnimation = this.countdownBar.animate([{ width: startWidth }, { width: endWidth }], {
        duration: this.duration,
        easing: "linear"
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
    var _a;
    (_a = this.closeBtn) == null ? void 0 : _a.removeEventListener("wje-button:click", this.hide);
    this.removeEventListener("wje-toast:after-hide", this.removeChildAndStack);
    this.removeEventListener("mouseenter", this.pause);
    this.removeEventListener("mouseleave", this.resume);
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
   * Removes the toast notification and the toast stack.
   *
   * This method removes the toast notification from the toast stack and
   * removes the toast stack from the document body if the toast stack is
   * empty.
   */
  removeChildAndStack() {
    this.toastStack.removeChild(this);
    if (this.toastStack.querySelector("wje-toast") === null) {
      this.toastStack.remove();
    }
  }
}
Toast.define("wje-toast", Toast);
export {
  Toast as default
};
//# sourceMappingURL=wje-toast.js.map
