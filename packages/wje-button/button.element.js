import { default as WJElement, WjElementUtils, event } from "../wje-element/element.js";
import { bool } from "../utils/utils.js";
import Icon from "../wje-icon/icon.js";

import styles from "./styles/styles.css?inline";

/**
 * @summary This class represents an Button element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/button
 * @status stable
 *
 * @extends WJElement
 *
 * @dependency wje-icon
 *
 * @slot - The button main content.
 * @slot icon - The button icon.
 * @slot caret - The button caret.
 * @slot start - The button start slot.
 * @slot end - The button end slot.
 * @slot toggle - The button toggle slot.
 *
 * @part native - The component's native wrapper.
 *
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
     * Button constructor
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Dependencies
     * @type {Object}
     */
    depandencies = {
        "wje-icon": Icon
    }

    /**
     * Set active state
     * @param {boolean} value - The value to set
     */
    set active(value) {
        this.setAttribute("active", "");
    }

    /**
     * Get active state
     * @returns {boolean} active - The active state
     */
    get active() {
        return this.hasAttribute("active");
    }

    /**
     * Set disabled state
     * @param {boolean} value - The value to set
     */
    set disabled(value) {
        if(value)
            this.setAttribute("disabled", "");
        else
            this.removeAttribute("disabled");
    }

    /**
     * Get disabled state
     * @returns {boolean} disabled - The disabled state
     */
    get disabled() {
        return this.hasAttribute("disabled");
    }

    /**
     * Set fill
     * @param {string} value - The value to set
     */
    set fill(value) {
        this.setAttribute("fill", value);
    }

    /**
     * Get fill
     * @returns {string} fill - The fill
     */
    get fill() {
        return this.getAttribute("fill") || "solid";
    }

    /**
     * Set outline
     * @param {boolean} value - The value to set
     */
    set outline(value) {
        this.setAttribute("outline", "");
    }

    /**
     * Get outline
     * @returns {boolean} outline - The outline
     */
    get outline() {
        return this.hasAttribute("outline");
    }

    /**
     * Set stop propagation
     * @param {boolean} value - The value to set
     */
    set stopPropagation(value) {
        this.setAttribute("stop-propagation", bool(value));
    }

    /**
     * Get stop propagation
     * @returns {boolean} stopPropagation - The stop propagation
     */
    get stopPropagation() {
        return bool(this.getAttribute("stop-propagation"));
    }

    /**
     * Class name
     * @type {string}
     */
    className = "Button";

    /**
     * Get CSS stylesheet
     * @static
     * @returns {Object} styles - The CSS styles
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Get observed attributes
     * @static
     * @returns {Array<string>} observedAttributes - The observed attributes
     */
    static get observedAttributes() {
        return ['disabled'];
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
     * @returns {Object} fragment - The document fragment
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let native = document.createElement(this.hasAttribute('href') ? 'a': 'button');
        native.classList.add("native-button");
        native.setAttribute("part", "native");

        this.classList.remove("wje-button-disabled");

        if(this.disabled)
            native.classList.add("wje-button-disabled");

        if(this.variant)
            native.classList.add("wje-button-" + this.variant);

        if(this.hasAttribute("round"))
            native.classList.add("wje-button-round")

        if(this.hasAttribute("circle"))
            native.classList.add("wje-button-circle")

        if(this.outline)
            native.classList.add("wje-outline");

        if(this.fill)
            native.classList.add("wje-button-" + this.fill);

        if(this.size)
            native.classList.add("wje-button-" + this.size);

        if(this.hasAttribute("color"))
            native.classList.add("wje-color-" + this.color, "wje-color");
        else
            native.classList.add("wje-color-default", "wje-color");

        if(this.querySelectorAll('[slot=caret]').length < 1 && this.hasAttribute("caret") || this.hasAttribute("only-caret")) {
            let i = document.createElement("wje-icon");
            i.style.setProperty("--wje-icon-size", "14px");
            i.setAttribute("slot", "caret");
            i.setAttribute("name", "chevron-down");

            this.appendChild(i);
        }

        if(this.active) {
            this.classList.add("wje-active");
            let i = document.createElement("wje-icon");
            i.setAttribute("name", "check");

            this.appendChild(i);
        }

        let  span = document.createElement("span");
        span.classList.add("button-inner");

        let slot = document.createElement("slot");
        slot.setAttribute("name", "icon-only");
        span.appendChild(slot);

        slot = document.createElement("slot");
        slot.setAttribute("name", "start");
        span.appendChild(slot);

        slot = document.createElement("slot");
        span.appendChild(slot);

        slot = document.createElement("slot");
        slot.setAttribute("name", "end");
        span.appendChild(slot);

        slot = document.createElement("slot");
        slot.setAttribute("name", "caret");
        span.appendChild(slot);

        this.hasToggle = WjElementUtils.hasSlot(this, "toggle");

        if(this.hasToggle) {
            this.slotToggle = document.createElement("slot");
            this.slotToggle.setAttribute("name", "toggle");

            span.appendChild(this.slotToggle);
        }

        native.appendChild(span);
        fragment.appendChild(native);

        return fragment;
    }

    /**
     * After draw method
     */
    afterDraw() {
        // nastavenie toggle podla atributu, ak nie je nastaveny, tak sa zobrazi vzdy prvy element
        if(this.hasToggle) {
            if (this.toggle === "off") {
                this.slotToggle.assignedNodes()[1].classList.add("show");
            } else {
                this.slotToggle.assignedNodes()[0].classList.add("show");
            }
        }

        if(this.hasAttribute("dialog")) {
            event.addListener(this, "click", null, this.eventDialogOpen);
        } else {
            event.addListener(this, "click", "wje-button:click", null); // { stopPropagation: this.stopPropagation } - zrusene kvoli dropdown kde som nevedel odchytit event click
        }

        if(this.hasToggle)
            event.addListener(this, "click", "wje-button:toggle", this.toggleStates, { stopPropagation: this.stopPropagation });
    }

    /**
     * Before disconnect method
     */
    beforeDisconnect() {
        this.removeEventListener("click", this.eventDialogOpen);
    }

    /**
     * Event dialog open method
     * @param {Event} e - The event
     */
    eventDialogOpen = (e) => {
        event.dispatchCustomEvent(this, this.dialog, {
            bubbles: true
        });
    }

    /**
     * Toggle states method
     */
    toggleStates = () => {
        const nodes = this.slotToggle.assignedNodes().filter(node => node.nodeType === Node.ELEMENT_NODE);

        nodes.forEach(node => {
            if (node.classList.contains('show')) {
                node.classList.remove('show');
            } else {
                node.classList.add('show');
            }
        });
    }
}