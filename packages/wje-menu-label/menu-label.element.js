import { default as WJElement, WjElementUtils } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `MenuLabel` is a custom web component that represents a menu label.
 * @summary This element represents a menu label.
 * @documentation https://elements.webjet.sk/components/menu-label
 * @status stable
 *
 * @extends {WJElement}
 *
 * @csspart native - The native part of the menu label.
 *
 * @slot - The default slot for the menu label.
 *
 * @cssprop [--wje-menu-label-font-size=.75rem] - The font size of the menu label.
 * @cssprop [--wje-menu-label-weight=600] - The font weight of the menu label.
 * @cssprop [--wje-letter-spacing=.025rem] - The letter spacing of the menu label.
 * @cssprop [--wje-menu-label-color=var(--wje-color-contrast-6)] - The color of the menu label.
 * @cssprop [--wje-padding-top=0] - The top padding of the menu label.
 * @cssprop [--wje-padding-bottom=0] - The bottom padding of the menu label.
 * @cssprop [--wje-padding-start=1.5rem] - The start padding of the menu label.
 * @cssprop [--wje-padding-end=1.5rem] - The end padding of the menu label.
 *
 * @tag wje-menu-label
 */

export default class MenuLabel extends WJElement {
    /**
     * Creates an instance of MenuLabel.
     *
     * @constructor
     */
    constructor() {
        super();

        this.hasSubmenu =  WjElementUtils.hasSlot(this, "submenu");
    }

    className = "MenuLabel";

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
        return [];
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

        // SLOT
        let slot = document.createElement("slot");
        slot.setAttribute("part", "native");
        slot.classList.add("native-menu-label");

        fragment.appendChild(slot);

        return fragment;
    }
}