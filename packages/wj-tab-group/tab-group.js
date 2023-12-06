import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class TabGroup extends WJElement {
    constructor() {
        super();
    }

    className = "TabGroup";

    static get cssStyleSheet() {
        return styles;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.classList.add("native-tab-group");

        let header = document.createElement("header");
        header.classList.add("scroll-snap-x");

        let nav = document.createElement("nav");

        let section = document.createElement("section");

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

    afterDraw() {
        console.log(this.context.querySelectorAll('[active]'));
        let activeTab = this.getActiveTab();
        let activeTabName = (activeTab) ? activeTab[0].name : this.getTabAll()[0].panel;
        console.log("NAME:", activeTab, activeTabName, this.getTabAll());
        this.setActiveTab(activeTabName);

        this.addEventListener("wj:tab-change", (e) => {
            console.log("TAB CHANGE", e.detail.context.hasAttribute("disabled"));
            if(e.detail.context.hasAttribute("disabled"))
                return false;

            this.setActiveTab(e.detail.context.panel);
        });
    }

    removeActiveTab() {
        this.getPanelAll().forEach((el) => {
            el.removeAttribute("active");
        });

        this.getTabAll().forEach((el) => {
            el.removeAttribute("active");
        });
    }

    setActiveTab(tab) {
        this.removeActiveTab();
        this.querySelector(`[panel="${tab}"]`).setAttribute("active", "");
        this.querySelector(`[name="${tab}"]`).setAttribute("active", "");
    }

    getActiveTab() {
        let activeTabs = Array.from(this.context.querySelectorAll('[active]'));
        return activeTabs.length > 0 ? activeTabs[0] : null;
    }

    getTabAll() {
        return this.context.querySelector('[name="nav"]').assignedElements();
    }

    getPanelAll() {
        return Array.from(this.querySelectorAll("wj-tab-panel"));
    }
}

customElements.get("wj-tab-group") || window.customElements.define("wj-tab-group", TabGroup);