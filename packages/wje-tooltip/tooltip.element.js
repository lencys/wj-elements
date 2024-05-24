import { default as WJElement, event, WjElementUtils } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `Tooltip` is a custom web component that represents a tooltip.
 * @summary This element represents a tooltip.
 * @documentation https://elements.webjet.sk/components/tooltip
 * @status stable
 *
 * @extends {WJElement}
 *
 * @csspart native - The native tooltip wrapper.
 *
 * @slot arrow - The arrow slot for the tooltip.
 * @slot anchor - The anchor slot for the tooltip.
 *
 * @cssproperty [--wje-tooltip=arror-color=var(--wje-color-contrast-11)] - The arrow color of the tooltip.
 *
 * @tag wje-tooltip
 */
export default class Tooltip extends WJElement {
    /**
     * @constructor
     * @summary Tooltip constructor
     */
    constructor() {
        super();
    }

    set content(value) {
        this.setAttribute("content", value);
    }

    get content() {
        if(this.hasAttribute('content'))
            return this.getAttribute('content');

        return "";
    }

    /**
     * @summary Class name
     * @type {string}
     */
    className = "Tooltip";

    /**
     * @summary Get CSS stylesheet
     * @static
     * @returns {Object} styles
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * @summary Get observed attributes
     * @static
     * @returns {Array} An array of observed attributes
     */
    static get observedAttributes() {
        return ["active"];
    }

    /**
     * @summary Setup attributes
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * @summary Draw method
     * @param {Object} context - The context
     * @param {Object} store - The store
     * @param {Object} params - The parameters
     * @returns {Object} Document fragment
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let popup = document.createElement("wje-popup");
        popup.setAttribute("placement", this.placement || "top");
        popup.setAttribute("offset", this.offset || "0");

        // SLOT - Anchor
        let slot = document.createElement("slot");
        slot.setAttribute("slot", "anchor");

        // let slot = this.querySelector("wje-button");

        let arrow = document.createElement("div");
        arrow.classList.add("arrow");
        arrow.setAttribute("slot", "arrow");

        // SLOT - Start
        let start = document.createElement("slot");
        start.setAttribute("name", "start");

        // SLOT - End
        let end = document.createElement("slot");
        end.setAttribute("name", "end");

        let content = document.createElement("div");
        content.innerHTML = this.content;

        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.classList.add("native-tooltip");

        native.appendChild(start);
        native.appendChild(content);
        native.appendChild(end);

        popup.appendChild(slot);
        popup.appendChild(arrow);
        popup.appendChild(native);

        this.mySlot = slot;
        this.popup = popup;
        this.native = native;

        fragment.appendChild(popup);

        return fragment;
    }

    /**
     * @summary After draw method
     */
    afterDraw() {

        console.log("Assigned",this.selector, this.mySlot.assignedElements()[0].querySelector(this.selector));

        let anchorEl = this.mySlot.assignedElements()[0];
        if(this.selector) {
            anchorEl = this.checkSelector(anchorEl);
        }

        if(!anchorEl)
            return;

        event.addListener(anchorEl, "mouseenter", null, this.onShow);
        event.addListener(anchorEl, "mouseleave", null, this.onHide);
        event.addListener(anchorEl, "click", null, this.onHide);
    }

    dispatch(customEvent) {
        return new Promise(resolve => {
            event.dispatchCustomEvent(this, customEvent, {
                resolve: resolve
            });
        });
    }

    beforeShow() {
        return this.native.innerHTML;
    }

    afterShow() {}

    /**
     * @summary Show tooltip
     */
    onShow = () => {
        this.classList.add("active");

        Promise.resolve(this.beforeShow(this)).then((res) => {
            if (!this.classList.contains("active") || (!res || typeof res !== "string")) {
                throw new Error("beforeShow method returned false or not string");
            }

            this.native.innerHTML = res;

            this.popup.show(); // Show tooltip
            Promise.resolve(this.afterShow(this));
        }).catch((error) => {
            // ak je nejaka chyba tak to len zatvorime
            this.classList.remove("active");
            this.popup.hide();
        });
    }

    /**
     * @summary Hide tooltip
     */
    onHide = () => {
        this.classList.remove("active");
        this.popup.hide();
    }

    checkSelector(anchorEl) {
        const newAnchorEl = anchorEl.querySelector(this.selector);
        if(newAnchorEl === null) {
            console.error("Selector not found:", this.selector, );
        }

        return newAnchorEl;
    }
}