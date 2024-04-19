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

        let slot = document.createElement("slot");
        slot.setAttribute("slot", "anchor");

        let arrow = document.createElement("div");
        arrow.classList.add("arrow");
        arrow.setAttribute("slot", "arrow");

        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.classList.add("native-tooltip");
        native.innerHTML = this.content;

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
        let anchorEl = this.mySlot.assignedElements()[0];
        if(!anchorEl)
            return;

        event.addListener(anchorEl, "mouseenter", null, this.onShow);
        event.addListener(anchorEl, "mouseleave", null, this.onHide);
    }

    dispatch(customEvent) {
        return new Promise(resolve => {
            event.dispatchCustomEvent(this, customEvent, {
                resolve: resolve
            });
        });
    }

    beforeShow() {}

    afterShow() {}

    /**
     * @summary Show tooltip
     */
    onShow = () => {
        Promise.resolve(this.beforeShow(this)).then((res) => {
            if (!res && typeof res !== "string") {
                throw new Error("beforeShow returned false");
            }

            this.native.innerHTML = res;

            this.popup.show(); // Show tooltip
            Promise.resolve(this.afterShow(this));
        }).catch((error) => {
            // ak je nejaka chyba tak to len zatvorime
            this.popup.hide();
        });
    }

    /**
     * @summary Hide tooltip
     */
    onHide = () => {
        this.popup.hide();
    }
}