import WJElement from '../wje-element/element.js';
import styles from './styles/styles.css?inline';
import QRious from 'qrious';

const QR_ATTRIBUTE_ALIASES = {
    value: ['value'],
    background: ['background'],
    backgroundAlpha: ['background-alpha', 'backgroundalpha', 'backgroundAlpha'],
    foreground: ['foreground'],
    foregroundAlpha: ['foreground-alpha', 'foregroundalpha', 'foregroundAlpha'],
    level: ['level'],
    padding: ['padding'],
    size: ['size'],
};

const NUMERIC_OPTIONS = new Set(['backgroundAlpha', 'foregroundAlpha', 'padding', 'size']);

/**
 * `QrCode` is a custom web component that generates a QR code.
 * @summary This element represents a QR code generator.
 * @documentation https://elements.webjet.sk/components/qr-code
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native part of the QR code.
 * @slot top - The slot for the top content of the QR code.
 * @slot bottom - The slot for the bottom content of the QR code.
 * @tag wje-qr-code
 */

export default class QrCode extends WJElement {
    /**
     * Creates an instance of QrCode.
     */
    constructor() {
        super();
    }

    /**
     * Content encoded into the QR code.
     * @type {string}
     */
    set value(value) {
        this.setAliasedAttribute('value', value);
    }

    get value() {
        return this.getAttributeFromAliases(QR_ATTRIBUTE_ALIASES.value) || 'empty value';
    }

    /**
     * Background color of the QR code.
     * @type {string|null}
     */
    set background(value) {
        this.setAliasedAttribute('background', value);
    }

    get background() {
        return this.getAttributeFromAliases(QR_ATTRIBUTE_ALIASES.background);
    }

    /**
     * Background alpha channel in range 0-1.
     * Supports aliases: background-alpha, backgroundalpha, backgroundAlpha.
     * @type {number|null}
     */
    set backgroundAlpha(value) {
        this.setAliasedAttribute('backgroundAlpha', value);
    }

    get backgroundAlpha() {
        const value = this.getAttributeFromAliases(QR_ATTRIBUTE_ALIASES.backgroundAlpha);
        if (value === null) return null;

        const numericValue = Number(value);
        return Number.isFinite(numericValue) ? numericValue : null;
    }

    /**
     * Foreground color of the QR code.
     * @type {string|null}
     */
    set foreground(value) {
        this.setAliasedAttribute('foreground', value);
    }

    get foreground() {
        return this.getAttributeFromAliases(QR_ATTRIBUTE_ALIASES.foreground);
    }

    /**
     * Foreground alpha channel in range 0-1.
     * Supports aliases: foreground-alpha, foregroundalpha, foregroundAlpha.
     * @type {number|null}
     */
    set foregroundAlpha(value) {
        this.setAliasedAttribute('foregroundAlpha', value);
    }

    get foregroundAlpha() {
        const value = this.getAttributeFromAliases(QR_ATTRIBUTE_ALIASES.foregroundAlpha);
        if (value === null) return null;

        const numericValue = Number(value);
        return Number.isFinite(numericValue) ? numericValue : null;
    }

    /**
     * Error correction level. Accepted values: L, M, Q, H.
     * @type {string|null}
     */
    set level(value) {
        if (value === null || value === undefined || value === '') {
            this.removeAttribute('level');
            return;
        }

        this.setAttribute('level', String(value).trim().toUpperCase());
    }

    get level() {
        const value = this.getAttributeFromAliases(QR_ATTRIBUTE_ALIASES.level);
        return value ? String(value).trim().toUpperCase() : null;
    }

    /**
     * Padding around the QR code in pixels.
     * @type {number|null}
     */
    set padding(value) {
        this.setAliasedAttribute('padding', value);
    }

    get padding() {
        const value = this.getAttributeFromAliases(QR_ATTRIBUTE_ALIASES.padding);
        if (value === null) return null;

        const numericValue = Number(value);
        return Number.isFinite(numericValue) ? numericValue : null;
    }

    /**
     * Output QR code size in pixels.
     * @type {number|null}
     */
    set size(value) {
        this.setAliasedAttribute('size', value);
    }

    get size() {
        const value = this.getAttributeFromAliases(QR_ATTRIBUTE_ALIASES.size);
        if (value === null) return null;

        const numericValue = Number(value);
        return Number.isFinite(numericValue) ? numericValue : null;
    }

    /**
     * The class name for the component.
     * @type {string}
     */
    className = 'QrCode';

    /**
     * Returns the CSS stylesheet for the component.
     * @returns {CSSStyleSheet} The CSS stylesheet.
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
     * Returns the list of observed attributes.
     * @returns {string[]} The list of observed attributes.
     */
    static get observedAttributes() {
        return Object.values(QR_ATTRIBUTE_ALIASES).flat();
    }

    /**
     * Draws the QR code component.
     * @returns {DocumentFragment} The document fragment containing the QR code component.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let wrapper = document.createElement('div');
        wrapper.classList.add('container');

        let qrCode = document.createElement('canvas');
        qrCode.classList.add('qr');
        qrCode.setAttribute('part', 'native');

        let slotTop = document.createElement('slot');
        slotTop.setAttribute('name', 'top');

        let slotBottom = document.createElement('slot');
        slotBottom.setAttribute('name', 'bottom');

        wrapper.appendChild(slotTop);
        wrapper.appendChild(qrCode);
        wrapper.appendChild(slotBottom);

        fragment.appendChild(wrapper);

        return fragment;
    }

    /**
     * Called after the component is drawn to generate the QR code.
     */
    afterDraw() {
        const canvas = this.shadowRoot.querySelector('canvas');
        if (!canvas) return;

        const qrOptions = {};

        Object.entries(QR_ATTRIBUTE_ALIASES).forEach(([optionName, aliases]) => {
            const value = this.getAttributeFromAliases(aliases);
            if (value === null) return;

            if (optionName === 'level') {
                const level = String(value).trim().toUpperCase();
                if (['L', 'M', 'Q', 'H'].includes(level)) {
                    qrOptions.level = level;
                }
                return;
            }

            if (NUMERIC_OPTIONS.has(optionName)) {
                const numericValue = Number(value);
                if (Number.isFinite(numericValue)) {
                    qrOptions[optionName] = numericValue;
                }
                return;
            }

            qrOptions[optionName] = value;
        });

        if (!Object.prototype.hasOwnProperty.call(qrOptions, 'value')) {
            qrOptions.value = 'empty value';
        }

        this.qr = new QRious({
            element: canvas,
            ...qrOptions,
        });
    }

    /**
     * Returns first defined attribute value from alias list.
     * @param {string[]} aliases
     * @returns {string|null}
     */
    getAttributeFromAliases(aliases = []) {
        for (const alias of aliases) {
            const value = this.getAttribute(alias);
            if (value !== null) return value;
        }

        return null;
    }

    /**
     * Writes value to the canonical attribute and clears alternate aliases.
     * @param {string} optionName
     * @param {string|number|null|undefined} value
     */
    setAliasedAttribute(optionName, value) {
        const aliases = QR_ATTRIBUTE_ALIASES[optionName] || [];
        const [primaryAlias, ...secondaryAliases] = aliases;

        secondaryAliases.forEach((alias) => this.removeAttribute(alias));

        if (!primaryAlias) return;

        if (value === null || value === undefined || value === '') {
            this.removeAttribute(primaryAlias);
            return;
        }

        this.setAttribute(primaryAlias, String(value));
    }
}
