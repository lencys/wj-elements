import { default as WJElement, event, WjElementUtils } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This method dispatches a custom event named "wje-chip:remove".
 * It is triggered when the remove button is clicked, which happens when the chip is removed.
 * The event is dispatched on the current instance of the Chip class.
 * @documentation https://elements.webjet.sk/components/chip
 * @status stable
 * @augments WJElement
 * @slot - The chip main content.
 * @csspart native - The component's native wrapper.
 * //@fires wje-chip:remove - Dispatched when the chip is removed;
 */
export default class Chip extends WJElement {
    /**
     * Chip constructor method.
     */
    constructor() {
        super();
    }

    /**
     * Sets or removes the "round" attribute on the element based on the provided value.
     * @param {boolean} value Determines whether the "round" attribute should be set or removed.
     * If true, the "round" attribute is added. If false, the "round"
     * attribute is removed.
     */
    set round(value) {
        if (value) {
            this.setAttribute('round', '');
        } else {
            this.removeAttribute('round');
        }
    }

    /**
     * Checks if the 'round' attribute is present on the element.
     * @returns {boolean} Returns true if the 'round' attribute exists, otherwise false.
     */
    get round() {
        return this.hasAttribute('round');
    }

    /**
     * Sets the size attribute of the element.
     * @param {string} value The value to set for the size attribute.
     */
    set size(value) {
        this.setAttribute('size', value);
    }

    /**
     * Retrieves the 'size' attribute of the current element.
     * @returns {string | null} The value of the 'size' attribute, or null if the attribute is not set.
     */
    get size() {
        return this.getAttribute('size');
    }

    /**
     * Sets or removes the "removable" attribute on the element.
     * @param {boolean} value A boolean indicating whether the element should have the "removable" attribute.
     * If true, the "removable" attribute is added;
     * if false, the "removable" attribute is removed.
     */
    set removable(value) {
        if (value) {
            this.setAttribute('removable', '');
        } else {
            this.removeAttribute('removable');
        }
    }

    /**
     * Determines if the element has the 'removable' attribute.
     * @returns {boolean} True if the element has the 'removable' attribute, otherwise false.
     */
    get removable() {
        return this.hasAttribute('removable');
    }

    /**
     * Sets the disabled state of the element.
     * If true, the 'disabled' attribute is added to the element.
     * If false, the 'disabled' attribute is removed from the element.
     * @param {boolean} value Specifies whether the element should be disabled.
     */
    set disabled(value) {
        if (value) {
            this.setAttribute('disabled', '');
        } else {
            this.removeAttribute('disabled');
        }
    }

    /**
     * Determines if the element has the 'disabled' attribute.
     * @returns {boolean} True if the element has the 'disabled' attribute, otherwise false.
     */
    get disabled() {
        return this.hasAttribute('disabled');
    }

    /**
     * Class name for the Chip element.
     * @type {string}
     */
    className = 'Chip';

    /**
     * Getter for the CSS stylesheet.
     * @returns {*}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for the observed attributes.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
        this.syncAria();
    }

    static get observedAttributes() {
        return ['removable', 'disabled', 'label'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback?.(name, oldValue, newValue);
        if (name === 'removable' || name === 'disabled' || name === 'label') {
            this.syncAria();
        }
    }

    /**
     * Draws the Chip element.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.setAttribute('part', 'native');
        native.classList.add('native-chip');

        let slot = document.createElement('slot');

        let slotEnd = document.createElement('slot');
        slotEnd.setAttribute('name', 'end');

        let remove = document.createElement('wje-button');
        remove.setAttribute('part', 'remove');
        remove.setAttribute('fill', 'link');
        remove.setAttribute('color', this.color || 'default');
        remove.setAttribute('aria-label', 'Remove');
        remove.round = !this.round;

        if(this.hasAttribute('size')) {
            if(this.size === 'small') {
                remove.innerHTML = `<wje-icon name="x" size="small"></wje-icon>`;
            } else if (this.size === 'large') {
                remove.innerHTML = `<wje-icon name="x"></wje-icon>`;
            }
        } else {
            remove.innerHTML = `<wje-icon name="x"></wje-icon>`;
        }

        let active = document.createElement('wje-icon');
        active.setAttribute('name', 'check');
        active.classList.add('check');

        // Add color
        if (this.hasAttribute('color')) native.classList.add('wje-color-' + this.color, 'wje-color');
        else native.classList.add('wje-color-default', 'wje-color');

        if (this.disabled) this.classList.add('wje-disabled');

        if (this.outline) this.classList.add('wje-outline');

        native.appendChild(slot);
        native.appendChild(slotEnd);
        native.appendChild(active);

        if (this.removable) native.appendChild(remove);

        fragment.appendChild(native);

        this.removeElement = remove;
        this.slotEnd = slotEnd;

        return fragment;
    }

    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria() {
        const label = this.getAttribute('label')?.trim();
        if (label) this.setAriaState({ label });
        if (this.removable) this.setAriaState({ role: 'button', disabled: this.disabled });
        else this.setAriaState({ role: 'status' });
    }

    /**
     * Getter for the observed attributes.
     */
    afterDraw() {
        if (WjElementUtils.hasSlotContent(this.context, 'end')) this.slotEnd.classList.add('has-content');

        event.addListener(this.removeElement, 'click', 'wje:chip-remove', null, { stopPropagation: true });
    }

    /**
     * Before disconnect event for the Chip element.
     */
    beforeDisconnect() {
        event.removeListener(this.removeElement, 'click', 'wje:chip-remove');
    }
}
