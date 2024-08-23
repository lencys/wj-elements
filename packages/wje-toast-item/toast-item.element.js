import { default as WJElement, WjElementUtils } from "../wje-element/element.js";

import styles from "./styles/styles.css?inline";

/**
 * `Toast` is a custom web component that represents a toast notification.
 * @summary This element represents a toast notification.
 * @documentation https://elements.webjet.sk/components/toast
 * @status stable
 *
 * @extends {WJElement}
 *
 * @tag wje-toast
 */
export default class ToastItem extends WJElement {
    /**
     * Toast constructor
     * @constructor
     */
    constructor() {
        super();
    }

    set duration(value) {
        this.setAttribute("duration", value);
    }

    get duration() {
        return +this.getAttribute("duration");
    }

    set position(value) {
        this.setAttribute("position", value);
    }

    get position() {
        return this.getAttribute("position");
    }

    set type(value) {
        this.setAttribute("type", value);
    }

    get type() {
        return this.getAttribute("type");
    }
    /**
     * Class name
     * @type {string}
     */
    className = "ToastItem";

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
        return ["position", "type", "duration"];
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
        content.innerHTML = `<div class="title">${this.title}</div><div class="message"><slot></slot></div>`;

        let icon = document.createElement("wje-icon");
        icon.setAttribute("name", "x");

        let closeBtn = document.createElement("wje-button");
        closeBtn.setAttribute("fill", "link");
        closeBtn.setAttribute("color", this.type);
        closeBtn.setAttribute('size', 'small');
        closeBtn.classList.add("close");

        closeBtn.appendChild(icon);

        native.appendChild(avatarSlot);
        native.appendChild(content);

        if(this.hasAttribute('close'))
            native.appendChild(closeBtn);

        fragment.appendChild(native);

        this.closeBtn = closeBtn;

        return fragment;
    }

    afterDraw() {
        this.closeBtn.addEventListener('wje-button:click', this.removeToast);

        if (this.duration > 0) {
            this.timeout = setTimeout(() => {
                this.removeToast();
            }, this.duration);
        }
    }

    beforeDisconnect() {
        this.closeBtn.removeEventListener('wje-button:click', this.removeToast);

        clearTimeout(this.timeout);
    }

    removeToast = () => {
        clearTimeout(this.timeout);

        this.remove();
    }
}