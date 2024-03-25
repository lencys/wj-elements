import { default as WJElement } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `Menu` is a custom web component that represents a menu.
 * It extends from `WJElement`.
 * @summary This element represents a menu.
 * @documentation https://elements.webjet.sk/components/menu
 * @status stable
 *
 * @extends {WJElement}
 *
 * @csspart native - The native part of the menu.
 *
 * @slot - The default slot for the menu.
 *
 * @cssproperty [--wje-menu-background=var(--wje-background)] - The background of the menu.
 * @cssproperty [--wje-menu-border-width=1px] - The border width of the menu.
 * @cssproperty [--wje-menu-border-style=solid] - The border style of the menu.
 * @cssproperty [--wje-menu-border-color=var(--wje-border-color)] - The border color of the menu.
 * @cssproperty [--wje-menu-border-radius=var(--wje-border-radius-small)] - The border radius of the menu.
 * @cssproperty [--wje-menu-padding-top=.5rem] - The padding top of the menu.
 * @cssproperty [--wje-menu-padding-bottom=.5rem] - The padding bottom of the menu.
 * @cssproperty [--wje-menu-padding-inline=0] - The padding inline of the menu.
 * @cssproperty [--wje-menu-margin-top=0] - The margin top of the menu.
 * @cssproperty [--wje-menu-margin-bottom=0] - The margin bottom of the menu.
 * @cssproperty [--wje-menu-margin-inline=0] - The margin inline of the menu.
 * @cssproperty [--wje-menu-collapse-width=65px] - The width of the menu when it is collapsed.
 *
 * @tag wje-menu
 */
export default class Menu extends WJElement {
    /**
     * Creates an instance of Menu.
     *
     * @constructor
     */
    constructor() {
        super();
    }

    className = "Menu";

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
        return ["active", "collapse"];
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

        this.classList.remove("wje-menu-collapse");

        if(this.hasAttribute("collapse"))
            this.classList.add("wje-menu-collapse");

        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.classList.add("native-menu");

        let slot = document.createElement("slot");

        native.appendChild(slot);
        fragment.appendChild(native);

        return fragment;
    }

    /**
     * Refreshes the component after drawing.
     */
    afterDraw() {
        Array.from(this.children).forEach((child) => {
            child.refresh();
        });
    }

    /**
     * Cleans up the component before disconnecting.
     */
    beforeDisconnect() {
        this.context.innerHTML = "";
    }
}