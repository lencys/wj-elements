import { default as WJElement } from "../wje-element/element.js";
import { Localizer } from "../utils/localize.js";

/**
 * `RelativeTime` is a custom web component that represents a relative time component.
 * @summary This element represents a relative time component.
 * @documentation https://elements.webjet.sk/components/relative-time
 * @status stable
 *
 * @extends {WJElement}
 *
 * @part native - The native part of the relative time component.
 *
 * @tag wje-relative-time
 */
export default class RelativeTime extends WJElement {
    /**
     * Creates an instance of RelativeTime.
     *
     * @constructor
     */
    constructor() {
        super();
        this.localizer = new Localizer(this);
    }

    /**
     * Gets the ISO date of the relative time component.
     *
     * @returns {string} The ISO date.
     */
    get dateISO() {
        let date = new Date();
        let inputDate = this.getAttribute("date");

        if(this.hasAttribute("date")) {
            if(this.isISODate(inputDate)) {
                inputDate = inputDate;
            } else {
                inputDate = +inputDate * 1000;
            }

            date = new Date(inputDate);
        }
        return date.toISOString();
    }

    className = "RelativeTime";

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
     * Returns the list of attributes to observe for changes.
     *
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes() {
        return [""];
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

        let element = document.createElement("div");
        element.setAttribute("part", "native");
        element.classList.add("native-relative-time");
        element.innerText = this.getRelativeTimeString(this.dateISO);

        fragment.appendChild(element)

        return fragment;
    }

    /**
     * Returns the relative time string for the given date.
     *
     * @param {string} date - The date.
     * @param {string} lang - The language.
     * @returns {string} The relative time string.
     */
    getRelativeTimeString(date, lang = navigator.language) {
        let dateObj = new Date(date);
        const timeMs = dateObj.getTime();

        const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);

        const cutoffs = [
            60,
            3600,
            86400,
            86400 * 7,
            86400 * 30,
            86400 * 365,
            Infinity
        ];

        const units = ["second", "minute", "hour", "day", "week", "month", "year"];
        const unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(deltaSeconds));
        const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;

        return this.localizer.relativeTime(Math.floor(deltaSeconds / divisor), units[unitIndex],{ numeric: "auto" });
    }

    /**
     * Checks if the given string is an ISO date.
     *
     * @param {string} str - The string to check.
     * @returns {boolean} True if the string is an ISO date, false otherwise.
     */
    isISODate(str) {
        let regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\+\d{2}:\d{2}|Z)$/;
        return regex.test(str);
    }
}