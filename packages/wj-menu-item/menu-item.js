import { default as WJElement, WjElementUtils, event } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class MenuItem extends WJElement {
    constructor() {
        super();

        this.hasSubmenu =  WjElementUtils.hasSlot(this, "submenu");
        this._collapsible = false;
    }

    set isCollapsible(value) {
        this._collapsible = value;
    }

    get isCollapsible() {
        if(this.closest("[collapsible]"))
            this._collapsible = true;

        return this._collapsible;
    }

    get variant() {
        let menu = this.querySelector("wj-menu");

        if(menu?.hasAttribute("variant")) {
            return menu.getAttribute("variant").toUpperCase();
        }

        return "CONTEXT";
    }

    get collapse() {
        return this.parentElement?.hasAttribute("collapse");
    }

    className = "MenuItem";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return [];
    }

    setupAttributes() {
        super.setupAttributes()
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        this.classList.add("wj-menu-variant-" + this.variant.toLowerCase());
        this.querySelector("wj-menu")?.setAttribute("variant", this.variant.toLowerCase());
        this.style.setProperty("--wj-menu-submenu-offset", (parseFloat(this.offset) || 0)  + "px");

        if (this.collapse)
            this.classList.add("wj-menu-collapse");

        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.setAttribute("id", "anchor");
        native.classList.add("native-menu-item");

        // CHECKED - Icon
        let checkedIcon = document.createElement("span");
        checkedIcon.classList.add("check-icon");
        checkedIcon.innerHTML = `<wj-icon name="check"></wj-icon>`;

        (this.hasAttribute("checked")) ? checkedIcon.classList.add("checked") : checkedIcon.classList.remove("checked");

        // SLOT - Start
        let start = document.createElement("slot");
        start.name = "start";

        // SLOT - Start
        let slot = document.createElement("slot");
        slot.classList.add("label");

        // SLOT - End
        let end = document.createElement("slot");
        end.name = "end";

        // SLOT - Submenu
        let submenu = document.createElement("slot");
        submenu.name = "submenu";

        // SUBMENU - Icon
        let submenutIcon = document.createElement("span");
        submenutIcon.classList.add("submenu-icon");
        submenutIcon.innerHTML = (this.collapse) ? `<wj-icon name="chevron-down"></wj-icon>` : `<wj-icon name="chevron-right"></wj-icon>`;

        this.hasSubmenu ? native.classList.add("has-submenu") : native.classList.remove("has-submenu");

        // ak je variant typu CONTEXT zobrazime submenu ako popup
        if ((this.collapse && this.variant === "NAV" && this.hasSubmenu) || (this.variant === "CONTEXT" && this.hasSubmenu)) {
            let popup = document.createElement("wj-popup");
            popup.setAttribute("anchor", "anchor");
            popup.setAttribute("manual", "");
            popup.setAttribute("placement", "right-start");

            popup.appendChild(submenu);
            native.appendChild(popup);
        }

        native.appendChild(checkedIcon);
        native.appendChild(start);
        native.appendChild(slot);
        native.appendChild(end);
        native.appendChild(submenutIcon);

        this.native = native;
        this.submenu = submenu;

        if (this.collapse && !this.hasSubmenu) {
            let tooltip = document.createElement("wj-tooltip");
            tooltip.setAttribute("content", this.textContent);
            tooltip.setAttribute("placement", "right");
            tooltip.setAttribute("offset", this.offset || "0");

            tooltip.appendChild(native);

            fragment.appendChild(tooltip);
        } else {
            fragment.appendChild(native);
        }

        if(!this.collapse && this.variant === "NAV" && this.hasSubmenu) {
            fragment.appendChild(submenu);
        }

        return fragment;
    }

    afterDraw() {
        if ((this.collapse && this.variant === "NAV" && this.hasSubmenu) || (this.variant === "CONTEXT" && this.hasSubmenu)) {
            event.addListener(this, "mouseover", null, (e) => {
                this.tabIndex = "-1";
                this.focus();
                this.native.querySelector("wj-popup").setAttribute("active", "true");
                this.native.classList.add("expanded-submenu");
            });

            event.addListener(this, "mouseout", null, (e) => {
                this.tabIndex = 0;
                this.native.querySelector("wj-popup").removeAttribute("active");
                this.native.classList.remove("expanded-submenu");
            });
        } else if (!this.collapse && this.variant === "NAV" && this.hasSubmenu) {
            event.addListener(this, "click", null, (e) => {
                let submenutElements = this.submenu.assignedElements({ flatten: true })[0];

                if(!submenutElements.hasAttribute("active")) {
                    submenutElements.setAttribute("active", "");
                } else {
                    if(this === e.target)
                        submenutElements.removeAttribute("active");
                }
                e.stopPropagation();
            });
        } else {
            event.addListener(this, "click", null, (e) => {
                console.log("CLICK", this);
            });
        }
    }
}

customElements.get("wj-menu-item") || window.customElements.define("wj-menu-item", MenuItem);