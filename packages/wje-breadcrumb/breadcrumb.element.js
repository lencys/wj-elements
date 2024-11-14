import { default as WJElement, event,WjElementUtils } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * @summary This class represents an Breadcrumb element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/breadcrumb
 * @status stable
 *
 * @extends WJElement
 *
 * @slot - The breadcrumb main content.
 *
 * @csspart native - The component's native wrapper.
 */
export default class Breadcrumb extends WJElement {
    /**
     * Breadcrumb constructor
     */
    constructor() {
        super();

        this._showSeparator = true;
        this._collapsedVariant = this.parentElement?.collapsedVariant || "BUTTON";
        this.showCollapsedIndicator = false;
    }

    // set showCollapsedIndicator(value) {
    //     // this.removeAttribute("show-collapsed-indicator");
    //
    //     if(WjElementUtils.stringToBoolean(value))
    //         this.setAttribute("show-collapsed-indicator", value);
    // }
    //
    // get showCollapsedIndicator() {
    //     return this.hasAttribute("show-collapsed-indicator");
    // }

    /**
     * Get show separator flag
     * @returns {boolean} showSeparator - The show separator flag
     */
    get showSeparator() {
        return this._showSeparator;
    }

    /**
     * Set show separator flag
     * @param {boolean} value - The value to set
     */
    set showSeparator(value) {
        this._showSeparator = value;
    }

    /**
     * Get collapsed variant
     * @returns {string} collapsedVariant - The collapsed variant
     */
    get collapsedVariant() {
        return this._collapsedVariant.toUpperCase();
    }

    /**
     * Set collapsed variant
     * @param {string} value - The value to set
     */
    set collapsedVariant(value) {
        this._collapsedVariant = value || this.parentElement.collapsedVariant;
    }

    /**
     * Class name
     * @type {string}
     */
    className = "Breadcrumb";

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
        return ["show-collapsed-indicator", "collapsed", "last"];
    }

    /**
     * Attribute changed callback
     * @param {string} name - The attribute name
     * @param {string} oldValue - The old value
     * @param {string} newValue - The new value
     * @returns {boolean} false - Always returns false
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "collapsed") {
            if(WjElementUtils.stringToBoolean(newValue) && !this.hasAttribute('show-collapsed-indicator'))
                this.classList.add("collapsed");
        } else if (name === "show-collapsed-indicator") {
            if(WjElementUtils.stringToBoolean(newValue)){
                this.showCollapsedIndicator = true;
                this.refresh();
            }
        } else if (name === "last") {
            this.active = WjElementUtils.stringToBoolean(newValue);
            this.showSeparator = !WjElementUtils.stringToBoolean(newValue);
            this.refresh();
        }

        return false;
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
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("a");
        native.classList.add("native-breadcrumb");
        native.setAttribute("part", "native");

        if(this.active)
            native.classList.add("active");

        let slot = document.createElement("slot");

        let start = document.createElement("slot");
        start.setAttribute("name", "start");

        let end = document.createElement("slot");
        end.setAttribute("name", "end");

        native.appendChild(start);
        native.appendChild(slot);
        native.appendChild(end);

        fragment.appendChild(native);

        if(WjElementUtils.stringToBoolean(this.showCollapsedIndicator)) {
            // pridame button za native element
            fragment.appendChild(this.drawCollapsedIndicator());

            // skryjeme native element
            native.classList.add("hidden");
        }

        if(this.showSeparator) {
            let separator = document.createElement("span");
            separator.classList.add("separator");
            separator.setAttribute("part", "separator");

            if(WjElementUtils.hasSlot(this, "separator")) {
                let slotSeparator = document.createElement("slot");
                slotSeparator.setAttribute("name", "separator");

                separator.appendChild(slotSeparator);
            } else {
                separator.innerHTML = `<wje-icon name=${this.separator || "chevron-right"}></wje-icon>`;
            }

            fragment.appendChild(separator);
        }

        this.native = native;

        return fragment;
    }

    /**
     * Draw collapsed indicator
     * @returns {Object} collapsedIndicator - The collapsed indicator
     */
    drawCollapsedIndicator(){
        let collapsedIndicator = null;

        if(this.collapsedVariant === "DROPDOWN") {
            collapsedIndicator = this.collapseDropdown();
        } else {
            collapsedIndicator = this.collapseButton();
        }

        return collapsedIndicator;
    }

    /**
     * Collapse dropdown
     * @returns {Object} dropdown - The dropdown
     */
    collapseDropdown(){
        let dropdown = document.createElement("wje-dropdown");
        dropdown.setAttribute("placement", "bottom");
        dropdown.setAttribute("offset", "10");

        let button = document.createElement("wje-button");
        button.setAttribute("slot", "trigger");
        button.setAttribute("fill", "link");
        button.innerHTML = `<wje-icon name="dots"></wje-icon>`;

        let menu = document.createElement("wje-menu");
        menu.setAttribute("variant", "context");

        dropdown.appendChild(button);
        dropdown.appendChild(menu);

        dropdown.innerHTML = `<wje-button slot="trigger" fill="link">
            <wje-icon name="dots"></wje-icon>
        </wje-button>
        <wje-menu variant="context">
            <wje-menu-item>Test 0</wje-menu-item>
            <wje-menu-item>Test 1</wje-menu-item>
            <wje-menu-item>Test 2</wje-menu-item>
        </wje-menu>`;

        this.parentElement.querySelectorAll("wje-breadcrumb").forEach((el) => {
            // console.log(el);
        });

        return dropdown;
    }

    /**
     * Collapse button
     * @returns {Object} button - The button
     */
    collapseButton(){
        let button = document.createElement("button");
        button.setAttribute("aria-label", "Show more breadcrumbs");
        button.setAttribute("part", "collapsed-indicator");
        button.innerHTML = `<wje-icon name="dots"></wje-icon>`;

        event.addListener( button,"click", null, (e) => {
            this.native.classList.remove("hidden");
            button.remove();
            this.parentElement.querySelectorAll("wje-breadcrumb").forEach((el) => {
                el.classList.remove("collapsed");
            });
            e.stopPropagation();
        });

        return button;
    }
}