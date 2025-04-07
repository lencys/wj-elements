import { default as WJElement, event, WjElementUtils } from '../wje-element/element.js';
import Input from '../wje-input/input.js';
import { copyNode, copyText } from './service/service.js';
import styles from './styles/styles.css?inline';

/**
 * @summary CopyButton is a custom web component that extends WJElement.
 * It provides a button that, when clicked, copies a specified text to the clipboard.
 * The text to be copied can be specified through the `value` attribute.
 * The CopyButton also supports keyboard interaction, copying the text when the space or enter key is pressed.
 * @documentation https://elements.webjet.sk/components/copy-button
 * @status stable
 * @augments WJElement
 * @attribute {string} for - The id of the element to copy content from.
 * @attribute {string} value - The text to be copied.
 * @slot - This is a default/unnamed slot.
 * @csspart button - Styles the button element.
 * @cssproperty --text-color - Controls the color of the text.
 * @cssproperty --background-color - Controls the background color of the button.
 * //@fires wje:copy-button - Dispatched when the button is clicked and the text is copied.
 * @tag wje-copy-button
 */
export default class CopyButton extends WJElement {
    /**
     * Constructor for the CopyButton class.
     * Initializes the timeout property.
     */
    constructor() {
        super();

        this.timeout = 1000;
    }

    /**
     * Setter for the value property.
     * @param {string} value The value to be set.
     */
    set value(value) {
        this.setAttribute('value', value);
    }

    /**
     * Getter for the value property.
     * @returns {string} The value of the value property.
     */
    get value() {
        return this.getAttribute('value') || '';
    }

    className = 'CopyButton';

    /**
     * Getter for the cssStyleSheet property.
     * @returns {string} The CSS styles.
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for the observedAttributes property.
     * @returns {Array} An empty array.
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Sets up the attributes for the CopyButton.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Draws the ColorPicker element.
     * @returns {DocumentFragment} The created document fragment.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let tooltip = document.createElement('wje-tooltip');
        tooltip.setAttribute('offset', '5');
        tooltip.setAttribute('content', this.label || 'Copy');

        if (WjElementUtils.hasSlot(this)) {
            let slot = document.createElement('slot');
            tooltip.appendChild(slot);
        } else {
            let icon = document.createElement('wje-icon');
            icon.setAttribute('name', 'clipboard');

            tooltip.appendChild(icon);
            this.icon = icon;
        }

        fragment.appendChild(tooltip);

        this.tooltip = tooltip;

        return fragment;
    }

    /**
     * Adds event listeners for the click, focus, and blur events.
     */
    afterDraw() {
        event.addListener(this, 'click', null, this.clicked);
        event.addListener(this, 'focus', null, this.focused);
        event.addListener(this, 'blur', null, this.blurred);

        event.addListener(this, 'wje-copy-button:click', null, this.copied);
    }

    /**
     * Handles the click event.
     * @param {Event} e The event object.
     */
    clicked = (e) => {
        const button = e.currentTarget;
        if (button instanceof HTMLElement) {
            this.copy(button);
        }
    };

    /**
     * Handles the keydown event.
     * @param {Event} e The event object.
     */
    keydown = (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
            const button = e.currentTarget;
            if (button instanceof HTMLElement) {
                this.copy(button);
            }
        }
    };

    /**
     * Handles the focus event.
     * @param {Event} e The event object.
     */
    focused = (e) => {
        e.currentTarget.addEventListener('keydown', this.keydown);
    };

    /**
     * Handles the blur event.
     * @param {Event} e The event object.
     */
    blurred = (e) => {
        e.currentTarget.removeEventListener('keydown', this.keydown);
    };

    /**
     * Handles the copied event.
     * You can override this method to customize the behavior when the text is copied.
     * @param {Event} e The event object.
     */
    copied = (e) => {
        if (this.hasOwnProperty('icon')) {
            this.icon.setAttribute('color', 'success');
            this.icon.setAttribute('name', 'check');
        }
        this.tooltip.setAttribute('content', this.labelSuccess || 'Copied');

        setTimeout(() => {
            if (this.hasOwnProperty('icon')) {
                this.icon.removeAttribute('color');
                this.icon.setAttribute('name', 'clipboard');
            }
            this.tooltip.setAttribute('content', this.label || 'Copy');
        }, this.timeout);
    };

    /**
     * Copies the specified text or node.
     * @param {HTMLElement} button The button element.
     */
    async copy(button) {
        const id = this.getAttribute('for');
        const text = this.getAttribute('value');

        if (button.getAttribute('aria-disabled') === 'true') {
            return;
        }

        if (text) {
            await copyText(text);
            event.dispatchCustomEvent(this, 'wje-copy-button:click');
        } else if (id) {
            const root = 'getRootNode' in Element.prototype ? button.getRootNode() : button.ownerDocument;
            if (!(root instanceof Document || ('ShadowRoot' in window && root instanceof ShadowRoot))) return;

            const node = root.getElementById(id);
            if (node) {
                await this.copyTarget(node);
                event.dispatchCustomEvent(this, 'wje-copy-button:click');
            }
        }
    }

    /**
     * Copies the target content.
     * @param {HTMLElement} content The content to be copied.
     * @returns {Promise} A promise that resolves when the content is copied.
     */
    copyTarget(content) {
        if (content instanceof HTMLInputElement || content instanceof HTMLTextAreaElement || content instanceof Input) {
            return copyText(content.value);
        } else if (content instanceof HTMLAnchorElement && content.hasAttribute('href')) {
            return copyText(content.href);
        } else {
            return copyNode(content);
        }
    }
}
