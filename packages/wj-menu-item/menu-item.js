import { default as WJElement, WjElementUtils, event } from "../wj-element/wj-element.js";
import { bindRouterLinks } from "../wj-router/plugins/slick-router/middlewares/router-links.js";

import styles from "./scss/styles.scss?inline";

export class MenuItem extends WJElement {
    constructor() {
        super();

        bindRouterLinks(this, { selector: false })

        this.hasSubmenu =  WjElementUtils.hasSlot(this, "submenu");
        this._collapsible = false;
    }

    get placement() {
        let menu = this.querySelector("wj-menu");

        if(menu?.hasAttribute("placement")) {
            return menu.getAttribute("placement");
        }
        return "right-start";
    }

    get offset() {
        let menu = this.querySelector("wj-menu");

        if(menu?.hasAttribute("offset")) {
            return menu.getAttribute("offset");
        }
        return "0";
    }

    get variant() {
        let menu = this.querySelector("wj-menu");

        if(menu?.hasAttribute("variant") && !this.collapse) {
            return menu.getAttribute("variant").toUpperCase();
        }

        return "CONTEXT";
    }

    get collapse() {
        if (this.closest('[collapse]'))
            return true;

        return false;
        // return this.parentElement?.hasAttribute("collapse");
    }

    className = "MenuItem";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return [];
    }

    setupAttributes() {
        super.setupAttributes();
        this.isShadowRoot = "open";
        this.setAttribute("active-class", "open");
    }

    beforeDraw(context, store, params) {
        this.querySelector("wj-menu")?.removeAttribute("active");
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        this.setAttribute("tabindex", "0");
        console.log("DRAW", this.variant, this.collapse);
        this.classList.forEach(className => {
          // Ak trieda začína na "wj-menu-variant-", odstráňte ju
          if (className.startsWith('wj-menu-variant-')) {
            this.classList.remove(className);
          }
        });

        this.classList.remove("collapse");
        this.classList.add("wj-menu-variant-" + this.variant.toLowerCase());

        if(!this.collapse) {
            this.querySelector("wj-menu")?.setAttribute("variant", this.variant.toLowerCase());
        } else if (this.parentElement?.hasAttribute("collapse")) {
            this.classList.add("collapse");
        }

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
        submenu.setAttribute("part", "submenu")
        submenu.name = "submenu";

        // SUBMENU - Icon
        let submenuIconClass = (this.collapse) ? "collapse" : "expand";
        let submenuIcon = document.createElement("span");
        submenuIcon.classList.add("submenu-icon", submenuIconClass);
        submenuIcon.innerHTML = (this.collapse) ? `<wj-icon name="chevron-down"></wj-icon>` : `<wj-icon name="chevron-right"></wj-icon>`;

        this.hasSubmenu ? native.classList.add("has-submenu") : native.classList.remove("has-submenu");

        native.appendChild(checkedIcon);
        native.appendChild(start);
        native.appendChild(slot);
        native.appendChild(end);
        native.appendChild(submenuIcon);

        let isAppend = false;
        // ak je variant typu CONTEXT zobrazime submenu ako popup
        if (/*(this.collapse && this.variant === "NAV" && this.hasSubmenu) || */(this.variant === "CONTEXT" && this.hasSubmenu)) {
            native.setAttribute("slot", "anchor"); // pridame slot anchor pre popup

            let popup = document.createElement("wj-popup");
            popup.setAttribute("anchor", "anchor");
            popup.setAttribute("placement", this.placement);
            popup.setAttribute("offset", this.offset);

            popup.appendChild(native);
            popup.appendChild(submenu);

            this.popup = popup;
            fragment.appendChild(popup);
            isAppend = true;
        }

        if (this.parentElement?.hasAttribute("collapse") && !this.hasSubmenu ) {
            fragment.appendChild(this.collapseItem(native));
        } else if(!isAppend) {
            fragment.appendChild(native);
        }

        if(!this.collapse && this.variant === "NAV" || this.variant === "MEGAMENU" && this.hasSubmenu) {
            fragment.appendChild(submenu);
        }

        this.native = native;
        this.submenu = submenu;

        return fragment;
    }

    afterDraw() {
        this.addEventListener("mousemove", this.dispatchMove);
        this.addEventListener("wj-popup:reposition", this.dispatchReposition);


        // Event na zobrazenie submenu
        event.addListener(this, "mouseover", null, (e) => {
            if(this.collapse || this.variant === "CONTEXT" && this.hasSubmenu) {
                if (this.hasAttribute("manual") || this.variant === "NAV" && this.collapse) return;

                this.submenuActivated(e);

                e.stopPropagation();

                this.showSubmenu();
                this.focus();
            }
        });

        // Event na zrusenie zobrazenia submenu ked sa klikne mimo
        event.addListener(this, "focusout", null, (e) => {
            if(this.collapse || this.variant === "CONTEXT" && this.hasSubmenu) {
              console.log("SOM TU:");
                if (e.relatedTarget && this.contains(e.relatedTarget) || this.variant === "NAV" && !this.collapse) {
                    return;
                }

                this.submenuActivated(e);
                this.hideSubmenu();
            }
        });

        event.addListener(this, "click", null, (e) => {
            if (!this.collapse && this.variant === "NAV" && this.hasSubmenu) {
                this.submenuActivated(e);
                this.hideSubmenu();
                e.stopPropagation();
            }
        });
    }

    collapseItem(native) {
        let tooltip = document.createElement("wj-tooltip");
        tooltip.setAttribute("content", this.textContent);
        tooltip.setAttribute("placement", "right");
        tooltip.setAttribute("offset", this.offset || "0");

        tooltip.appendChild(native);

        return tooltip;
    }

    dispatchMove = (e) => {
        this.style.setProperty("--wj-menu-item-safe-triangle-cursor-x", `${e.clientX}px`);
        this.style.setProperty("--wj-menu-item-safe-triangle-cursor-y", `${e.clientY}px`);
    }

    dispatchReposition = (e) => {
        // ak neemame submenu tak to ukoncime
        if(this.submenu.assignedNodes().length === 0) return;

        let submenu = this.submenu.assignedNodes()[0];
        const { left, top, width, height } = submenu.getBoundingClientRect();

        this.style.setProperty('--wj-menu-item-safe-triangle-submenu-start-x', `${left}px`);
        this.style.setProperty('--wj-menu-item-safe-triangle-submenu-start-y', `${top}px`);
        this.style.setProperty('--wj-menu-item-safe-triangle-submenu-end-x', `${left}px`);
        this.style.setProperty('--wj-menu-item-safe-triangle-submenu-end-y', `${top + height}px`);
    }

    showSubmenu() {
        console.log("SHOW SUBMENU", this.hasSubmenu);
        this.tabIndex = -1;
        if(this.hasSubmenu) {
            this.popup.setAttribute("active", "");
            this.classList.add("expanded-submenu");
            this.native.classList.add("expanded-submenu");
        }
    }

    hideSubmenu() {
        console.log("HIDE SUBMENU", this);
        this.tabIndex = 0;
        if(this.hasSubmenu) {
            this.popup.removeAttribute("active");
            this.classList.remove("expanded-submenu");
            this.native.classList.remove("expanded-submenu");
        }
    }

    submenuActivated(e) {
      if(this.hasSubmenu) {
        let submenuElements = this.submenu.assignedElements({ flatten: true })[0];
        if (!submenuElements.hasAttribute("active")) {
            submenuElements.setAttribute("active", "");
        } else {
            if (this === e.target)
                submenuElements.removeAttribute("active");
        }
      }
    }

    beforeDisconnect() {
        this.context.innerHTML = "";
    }
}

customElements.get("wj-menu-item") || window.customElements.define("wj-menu-item", MenuItem);