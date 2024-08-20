import { default as WJElement, WjElementUtils } from "../wje-element/element.js";
import { simple, bar, flip, circle } from "./service/service.js";

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
export default class Toast extends WJElement {
    /**
     * Toast constructor
     * @constructor
     */
    constructor() {
        super();
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

        let options = {
            message: "Záznam bol úspešne uložený.",
            position: this.position,
            showClose: true,
            style: this.design || "simple",
            timeout: this.duration || 4000,
            type: this.type || "success",
            title: this.title || "John Doe",
        }

        this.container = document.querySelector("body");

        this.notification = document.createElement("div");
        this.notification.classList.add("pgn", "push-on-sidebar-open");

        this.classList.add("pgn-wrapper");
        this.setAttribute("data-position", options.position);

        this.alert = document.createElement("div");
        this.alert.classList.add("alert");
        this.alert.classList.add("alert-" + options.type);

        if (options.style == 'bar') {
            bar(this.notification, this.alert, options);
        } else if (options.style == 'flip') {
            flip(this.notification, this.alert, options);
        } else if (options.style == 'circle') {
            circle(this.notification, this.alert, options);
        } else if (options.style == 'simple') {
            simple(this.notification, this.alert, options);
        } else {
            simple(this.notification, this.alert, options);
        }

        this.notification.appendChild(this.alert);

        fragment.appendChild(this.notification);

        return fragment;
    }
}