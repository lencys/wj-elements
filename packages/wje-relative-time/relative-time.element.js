import { Localizer } from '../utils/localize.js';
import { default as WJElement } from '../wje-element/element.js';

/**
 * `RelativeTime` is a custom web component that represents a relative time component.
 * @summary This element represents a relative time component.
 * @documentation https://elements.webjet.sk/components/relative-time
 * @status stable
 * @augments WJElement
 * @csspart native - The native part of the relative time component.
 * @tag wje-relative-time
 */

export default class RelativeTime extends WJElement {
    /**
     * Creates an instance of RelativeTime.
     * @class
     */
    constructor() {
        super();
        this.localizer = new Localizer(this);
    }

    /**
     * Sets the date of the relative time component.
     * @param value
     */
    set date(value) {
        this.setAttribute('date', value);
    }

    /**
     * Gets the date of the relative time component.
     * @returns {string}
     */
    get date() {
        return this.getAttribute('date');
    }

    /**
     * Sets the object date of the relative time component.
     * @param value
     */
    set objectDate(value) {
        this.setAttribute('object-date', value);
    }

    /**
     * Gets the object date of the relative time component.
     * @returns {Date}
     */
    get objectDate() {
        let date = new Date();
        let inputDate = this.date;

        if (!!inputDate && inputDate !== '') {
            inputDate = this.isISODate(inputDate) ? inputDate : +inputDate * 1000;

            date = new Date(inputDate);
        }

        return date;
    }

    /**
     * Sets the lang of the relative time component.
     * @type {string}
     */
    className = 'RelativeTime';

    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes() {
        return ['date', 'lang'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback?.(name, oldValue, newValue);
        if (oldValue === newValue) return;
        if (this.native) {
            this.native.innerText = this.getRelativeTimeString();
            if (this.date) this.native.setAttribute('datetime', this.date);
            else this.native.removeAttribute('datetime');
        }
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
        this.setAriaState({ role: 'status' });
    }

    /**
     * Draws the component for the relative time.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement('div');
        element.setAttribute('part', 'native');
        element.classList.add('native-relative-time');
        element.innerText = this.getRelativeTimeString();
        if (this.date) element.setAttribute('datetime', this.date);

        fragment.appendChild(element);
        this.native = element;

        return fragment;
    }

    /**
     * Returns the relative time string for the given date.
     */
    getRelativeTimeString(lang = navigator.language) {
        if (this.objectDate.toString() === 'Invalid Date' || this.objectDate.toString() === 'NaN') {
            return '';
        }

        const timeMs = this.objectDate.getTime();

        const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);

        const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity];

        const units = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
        const unitIndex = cutoffs.findIndex((cutoff) => cutoff > Math.abs(deltaSeconds));
        const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;

        return this.localizer.relativeTime(
            this.getAttribute('lang'),
            Math.floor(deltaSeconds / divisor),
            units[unitIndex],
            { numeric: 'auto' }
        );
    }

    /**
     * Checks if the given string is an ISO date.
     * @param {string} str The string to check.
     * @returns {boolean} True if the string is an ISO date, false otherwise.
     */
    isISODate(str) {
        const date = new Date(str);
        return !isNaN(date.getTime());
    }
}
