import { bindRouterLinks } from '../utils/router-links.js';

import { bool } from '../utils/utils.js';
import { default as WJElement, event, WjElementUtils } from '../wje-element/element.js';
import Icon from '../wje-icon/icon.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This class represents Button element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/button
 * @status stable
 * @augments WJElement
 * @dependency wje-icon
 * @slot - The button main content.
 * @slot icon - The button icon.
 * @slot caret - The button caret.
 * @slot start - The button start slot.
 * @slot end - The button end slot.
 * @slot toggle - The button toggle slot.
 * @csspart native - The component's native wrapper.
 * @cssproperty [--wje-button-background-color=transparent] - Background color of the component;
 * @cssproperty [--wje-button-border-color=--wje-color-contrast-4] - Border color of the component;
 * @cssproperty [--wje-button-color=--wje-color-contrast-11] - Color of the component;
 * @cssproperty [--wje-button-border-radius=--wje-border-radius-medium] - Border radius of the component;
 * @cssproperty [--wje-button-border-width=1px] - Border width of the component;
 * @cssproperty [--wje-button-border-style=solid] - Border style of the component;
 * @cssproperty [--wje-button-border-color=--wje-color-contrast-1] - Border color of the component;
 * @cssproperty [--wje-button-margin-inline=0] - Margin inline of the component;
 */

export default class Button extends WJElement {
    /**
     * Button constructor method.
     * @class
     */
    constructor() {
        super();
    }

    /**
     * Dependencies of the Button element.
     * @type {object}
     */
    dependencies = {
        'wje-icon': Icon,
    };

    /**
     * Properties of the element Button.
     * @param value
     */
    set color(value) {
        this.setAttribute('color', value || 'default');
    }

    /**
     * Get color of the Button element.
     * @returns {string|string}
     */
    get color() {
        return this.getAttribute('color') || 'default';
    }

    /**
     * Set variant of the Button element.
     * @param value
     */
    set caret(value) {
        this.setAttribute('caret', value);
    }

    /**
     * Get variant of the Button element.
     * @returns {boolean}
     */
    get caret() {
        return this.hasAttribute('caret');
    }

    /**
     * Sets the 'round' attribute on the element. If the value is true, the attribute is added;
     * otherwise, it is removed from the element.
     * @param {boolean} value A boolean indicating whether to set or remove the 'round' attribute.
     */
    set round(value) {
        if (value) {
            this.setAttribute('round', '');
        } else {
            this.removeAttribute('round');
        }
    }

    /**
     * Retrieves the value of the 'round' attribute as a boolean.
     * Checks if the 'round' attribute is present on the element.
     * @returns {boolean} True if the 'round' attribute exists, otherwise false.
     */
    get round() {
        return this.hasAttribute('round');
    }

    /**
     * Set variant of the Button element.
     * @param value
     */
    set tooltip(value) {
        this.setAttribute('tooltip', value);
    }

    /**
     * Get variant of the Button element.
     * @returns {boolean}
     */
    get tooltip() {
        return this.hasAttribute('tooltip');
    }

    /**
     * Set variant of the Button element.
     * @param value
     */
    set dialog(value) {
        this.setAttribute('dialog', value);
    }

    /**
     * Get variant of the Button element.
     * @returns {string|object}
     */
    get dialog() {
        return this.getAttribute('dialog');
    }

    /**
     * Set active state of the Button element.
     * @param {boolean} value The value to set
     */
    set active(value) {
        this.setAttribute('active', '');
    }

    /**
     * Get active state of the Button element.
     * @returns {boolean} active - The active state
     */
    get active() {
        return this.hasAttribute('active');
    }

    /**
     * Set disabled state of the Button element.
     * @param {boolean} value The value to set
     */
    set disabled(value) {
        this.removeAttribute('disabled');

        if (value) {
            this.setAttribute('disabled', '');
        }
    }

    /**
     * Get disabled state of the Button element.
     * @returns {boolean} disabled - The disabled state
     */
    get disabled() {
        return this.hasAttribute('disabled');
    }

    /**
     * Set fill of the Button element.
     * @param {string} value The value to set
     */
    set fill(value) {
        this.setAttribute('fill', value);
    }

    /**
     * Get fill of the Button element.
     * @returns {string} fill - The fill value
     */
    get fill() {
        return this.getAttribute('fill') || 'solid';
    }

    /**
     * Set outline state of the Button element.
     * @param {boolean} value The value to set
     */
    set outline(value) {
        this.setAttribute('outline', '');
    }

    /**
     * Get outline state of the Button element.
     * @returns {boolean} outline - The outline state
     */
    get outline() {
        return this.hasAttribute('outline');
    }

    /**
     * Set stop propagation state of the Button element.
     * @param {boolean} value The value to set
     */
    set stopPropagation(value) {
        this.setAttribute('stop-propagation', bool(value));
    }

    /**
     * Get stop propagation state of the Button element.
     * @returns {boolean} stopPropagation - The stop propagation state
     */
    get stopPropagation() {
        return bool(this.getAttribute('stop-propagation'));
    }

    /**
     * Sets the value of the custom event attribute.
     * @param {string} value The value to be assigned to the custom event attribute.
     */
    set customEvent(value) {
        this.setAttribute('custom-event', value);
    }

    /**
     * Retrieves the value of the 'custom-event' attribute from the element.
     * @returns {string | null} The value of the 'custom-event' attribute, or null if the attribute is not set.
     */
    get customEvent() {
        return this.getAttribute('custom-event');
    }

    /**
     * Retrieves a mapped object containing custom event parameters extracted from the element's attributes.
     * Attributes considered are those that begin with 'custom-event-'.
     * The mapped object's keys are derived by removing the 'custom-event-' prefix from the attribute names,
     * and the values are the corresponding attribute values.
     * @returns {object} An object containing key-value pairs of custom event parameters.
     */
    get customEventParameters() {
        const attributes = Array.from(this.attributes).filter((attr) => attr.name.startsWith('custom-event-'));

        return attributes.reduce((acc, attr) => {
            const key = attr.name.replace('custom-event-', '');
            acc[key] = attr.value;

            return acc;
        }, {});
    }

    /**
     * Class name for the Button element
     * @type {string}
     */
    className = 'Button';

    /**
     * Get CSS stylesheet for the Button element.
     * @static
     * @returns {CSSStyleSheet} styles - The CSS stylesheet for the Button element.
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Get observed attributes for the Button element.
     * @static
     * @returns {Array<string>} observedAttributes - The observed attributes array for the Button element.
     */
    static get observedAttributes() {
        return ['disabled', 'color', 'value', 'active', 'href'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback?.(name, oldValue, newValue);
        if (['disabled', 'value', 'active', 'href'].includes(name)) {
            this.syncAria?.();
        }
    }

    /**
     * @summary A static property that indicates whether the custom element is form-associated or not.
     * Form-associated custom elements are elements that can participate in form submission.
     * @type {boolean}
     */
    static formAssociated = true;

    /**
     * @summary Callback function that is called when the custom element is associated with a form.
     * This function sets the internal `_form` property to the associated form.
     * @param {HTMLFormElement} form The form the custom element is associated with.
     */
    formAssociatedCallback(form) {
        this._form = form;
    }

    /**
     * @summary Callback function that is called when the form-associated state of the custom element changes.
     * This function updates the 'disabled' attribute of the element based on the new state.
     * @param {boolean} disabled The new form-associated state.
     */
    formDisabledCallback(disabled) {
        if (disabled) {
            this.setAttribute('disabled', '');
        } else {
            this.removeAttribute('disabled');
        }
    }

    /**
     * Setup attributes for the Button element.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
        this.syncAria();
    }

    /**
     * Draw method for the Button element.
     * @returns {object} fragment - The document fragment containing the drawn element.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement(this.hasAttribute('href') ? 'a' : 'button');
        if (this.hasAttribute('href')) {
            native.setAttribute('href', this.getAttribute('href'));
        } else {
            if (this.type === 'submit') {
                native.setAttribute('type', 'submit');
            }
        }

        native.classList.add('native-button');
        native.setAttribute('part', 'native');

        this.classList.remove('wje-button-disabled');

        if (this.disabled) native.classList.add('wje-button-disabled');

        if (this.variant) native.classList.add('wje-button-' + this.variant);

        if (this.hasAttribute('round')) native.classList.add('wje-button-round');

        if (this.hasAttribute('circle')) native.classList.add('wje-button-circle');

        if (this.outline) native.classList.add('wje-outline');

        if (this.fill) native.classList.add('wje-button-' + this.fill);

        if (this.size) native.classList.add('wje-button-' + this.size);

        if (
            (this.querySelectorAll('[slot=caret]').length < 1 && this.hasAttribute('caret')) ||
            this.hasAttribute('only-caret')
        ) {
            let i = document.createElement('wje-icon');
            i.style.setProperty('--wje-icon-size', '14px');
            i.setAttribute('slot', 'caret');
            i.setAttribute('name', 'chevron-down');
            i.setAttribute('part', 'caret');

            this.appendChild(i);
        }

        if (this.active) {
            this.classList.add('wje-active');
            let i = document.createElement('wje-icon');
            i.setAttribute('name', 'check');

            this.appendChild(i);
        }

        native.classList.add('wje-color-' + this.color, 'wje-color');

        let span = document.createElement('span');
        span.setAttribute('part', 'inner');
        span.classList.add('button-inner');

        let slot = document.createElement('slot');
        slot.setAttribute('name', 'icon-only');
        span.appendChild(slot);

        slot = document.createElement('slot');
        slot.setAttribute('name', 'start');
        span.appendChild(slot);

        slot = document.createElement('slot');
        span.appendChild(slot);

        slot = document.createElement('slot');
        slot.setAttribute('name', 'end');
        span.appendChild(slot);

        slot = document.createElement('slot');
        slot.setAttribute('name', 'caret');
        span.appendChild(slot);

        this.hasToggle = WjElementUtils.hasSlot(this, 'toggle');

        if (this.hasToggle) {
            this.slotToggle = document.createElement('slot');
            this.slotToggle.setAttribute('name', 'toggle');

            span.appendChild(this.slotToggle);
        }

        native.appendChild(span);

        if (this.tooltip) {
            let tooltip = document.createElement('wje-tooltip');
            tooltip.setAttribute('content', this.getAttribute('tooltip'));
            tooltip.setAttribute('placement', this.getAttribute('tooltip-placement') || 'top');
            tooltip.appendChild(native);

            fragment.appendChild(tooltip);
        } else {
            fragment.appendChild(native);
        }

        return fragment;
    }

    /**
     * After draw method for the Button element.
     */
    afterDraw() {
        if (this.hasAttribute('route')) {
            this.bindRouterLinks();
            if (!this.unbindRouterLinks) {
                queueMicrotask(() => this.bindRouterLinks());
            }
        }

        // nastavenie toggle podla atributu, ak nie je nastaveny, tak sa zobrazi vzdy prvy element
        if (this.hasToggle) {
            const initialToggleValue = this.getAttribute('value') || (this.toggle === 'off' ? 'off' : 'on');
            this.setToggleState(initialToggleValue);
        }

        if (this.hasAttribute('custom-event')) {
            event.addListener(this, 'click', null, this.#populateCustomEvent);
        }

        if (this.hasAttribute('dialog')) {
            event.addListener(this, 'click', null, this.eventDialogOpen);
        } else {
            event.addListener(this, 'click', 'wje-button:click', null); // { stopPropagation: this.stopPropagation } - zrusene kvoli dropdown kde som nevedel odchytit event click
        }

        if (this.hasToggle)
            event.addListener(this, 'click', 'wje-button:toggle', this.toggleStates, {
                stopPropagation: this.stopPropagation,
            });

        if (this.type === 'submit') {
            event.addListener(this, 'click', 'wje-button:submit', () => {
                event.dispatchCustomEvent(this.internals?.form, 'submit', {});
            });
        }

        if (this.type === 'reset') {
            event.addListener(this, 'click', 'wje-button:reset', () => {
                this.internals?.form.reset();
            });
        }

        this.syncAria();
    }

    bindRouterLinks() {
        const parent = this.parentElement;
        if (!parent) return;

        this.unbindRouterLinks?.();
        this.unbindRouterLinks = bindRouterLinks(parent, { selector: false });
    }

    /**
     * Before disconnect method for the Button element.
     */
    beforeDisconnect() {
        // remove all events from the button
        event.removeListener(this, 'click', null, this.eventDialogOpen);
        event.removeListener(this, 'click', 'wje-button:click', null);
        event.removeListener(this, 'click', 'wje-button:toggle', this.toggleStates);
        event.removeListener(this, 'click', null, this.#populateCustomEvent);
        event.removeListener(this, 'click', 'wje-button:submit', null);
        event.removeListener(this, 'click', 'wje-button:reset', null);

        this.removeEventListener('click', this.eventDialogOpen);
        this.unbindRouterLinks?.();
    }

    /**
     * Event dialog open method for the Button element.
     * @param {Event} e The event object
     */
    eventDialogOpen = (e) => {
        event.dispatchCustomEvent(this, this.dialog);
    };

    /**
     * Toggle states method for the Button element.
     */
    toggleStates = () => {
        const nextValue = this.getAttribute('value') === 'off' ? 'on' : 'off';
        this.setToggleState(nextValue);

        this.syncAria();
    }

    /**
     * Returns assigned toggle elements.
     * @returns {HTMLElement[]}
     */
    getToggleNodes() {
        if (!this.slotToggle) return [];
        if (typeof this.slotToggle.assignedElements === 'function') {
            return this.slotToggle.assignedElements({ flatten: true });
        }

        return this.slotToggle.assignedNodes().filter((node) => node.nodeType === Node.ELEMENT_NODE);
    }

    /**
     * Sets toggle state and updates slotted toggle visibility.
     * @param {'on'|'off'|string} value
     */
    setToggleState(value) {
        const nodes = this.getToggleNodes();
        if (!nodes.length) return;

        nodes.forEach((node) => node.classList.remove('show'));

        const expectedState = value === 'off' ? 'off' : 'on';
        const targetNode = expectedState === 'off' ? (nodes[1] ?? nodes[0]) : nodes[0];
        targetNode?.classList.add('show');

        const normalizedValue = expectedState === 'off' && nodes[1] ? 'off' : 'on';
        if (this.getAttribute('value') !== normalizedValue) {
            this.setAttribute('value', normalizedValue);
        }
    }

    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria() {
        const isLink = this.hasAttribute('href');
        const isToggle = !!this.hasToggle;
        const pressed = isToggle && !isLink ? this.getAttribute('value') === 'on' : undefined;

        this.setAriaState({
            role: isLink ? 'link' : 'button',
            disabled: this.disabled,
            pressed,
        });
    }

    /**
     * Dispatches a custom event with specified parameters.
     * This method uses the `customEvent` and `customEventParameters` properties
     * to create and dispatch a `CustomEvent`. The event is configured to be
     * composed and bubbles up through the DOM.
     * @returns {void} This method does not return a value.
     */
    #populateCustomEvent() {
        this.dispatchEvent(
          new CustomEvent(this.customEvent, { detail: this.customEventParameters, composed: true, bubbles: true })
        );
    }
}
