import { default as WJElement, WjElementUtils } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `TabGroup` is a custom web component that represents a group of tabs.
 * @summary This element represents a group of tabs.
 * @documentation https://elements.webjet.sk/components/tab-group
 * @status stable
 *
 * @extends {WJElement}
 *
 * @slot - The default slot for the tab group.
 * @slot nav - Slot for the navigation of the tab group.
 *
 * @cssproperty [--wje-tab-group-padding=1rem] - The padding of the tab group.
 *
 * @tag wje-tab-group
 */

export default class TabGroup extends WJElement {
    /**
     * Creates an instance of TabGroup.
     *
     * @constructor
     */
    constructor() {
        super();
    }

    className = "TabGroup";

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
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Sets up the event listeners before the component is drawn.
     * This method is called before the component is drawn.
     * It is used to set up event listeners.
     */
    beforeDraw() {
        let activeTabName = location.hash.replace("#", "");

        // skontrolujeme ci sa nachadza v paneloch
        if(this.getPanelAllName().includes(activeTabName)) {
            // window.addEventListener('hashchange', (e) => {
            //     this.setActiveTab(activeTabName);
            // });

            window.addEventListener('load', (e) => {
                this.setActiveTab(activeTabName);
            });
        }
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

        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.classList.add("native-tab-group");

        let header = document.createElement("header");
        header.setAttribute("part", "tabs");
        header.classList.add("scroll-snap-x");

        let nav = document.createElement("nav");

        let section = document.createElement("section");
        section.setAttribute("part", "panels");

        let slot = document.createElement("slot");

        let slotNav = document.createElement("slot");
        slotNav.setAttribute("name", "nav");

        header.appendChild(nav);
        nav.appendChild(slotNav);
        section.appendChild(slot);

        native.appendChild(header);
        native.appendChild(section);

        fragment.appendChild(native);

        return fragment;
    }

    /**
     * Sets up the event listeners after the component is drawn.
     */
    afterDraw() {
        let activeTab = this.getActiveTab();
        let activeTabName = (activeTab) ? activeTab[0].name : this.getTabAll()[0].panel;

        this.setActiveTab(activeTabName);

        this.addEventListener("wje-tab:change", (e) => {
            if(e.detail.context.hasAttribute("disabled"))
                return false;

            this.setActiveTab(e.detail.context.panel);
        });
    }

    /**
     * Removes the active attribute from all tabs and panels.
     */
    removeActiveTab() {
        this.getPanelAll().forEach((el) => {
            el.removeAttribute("active");
        });

        this.getTabAll().forEach((el) => {
            el.removeAttribute("active");
        });
    }

    /**
     * Sets the active tab and panel.
     *
     * @param {string} tab - The name of the tab to set as active.
     */
    setActiveTab(tab) {
        this.removeActiveTab();
        this.querySelector(`[panel="${tab}"]`).setAttribute("active", "");
        this.querySelector(`[name="${tab}"]`).setAttribute("active", "");
    }

    /**
     * Returns the currently active tab.
     *
     * @returns {Element|null} The active tab, or null if no tab is active.
     */
    getActiveTab() {
        let activeTabs = Array.from(this.context.querySelectorAll('[active]'));
        return activeTabs.length > 0 ? activeTabs[0] : null;
    }

    /**
     * Returns all tabs.
     *
     * @returns {Array<Element>} An array of all tabs.
     */
    getTabAll() {
        return this.context.querySelector('[name="nav"]').assignedElements();
    }

    /**
     * Returns all panels.
     *
     * @returns {Array<Element>} An array of all panels.
     */
    getPanelAll() {
        return Array.from(this.querySelectorAll("wje-tab-panel"));
    }

    /**
     * Returns the names of all tabs.
     *
     * @returns {Array<string>} An array of all tab names.
     */
    getPanelAllName() {
        return this.getPanelAll().map((el) => el.getAttribute("name"));
    }
}