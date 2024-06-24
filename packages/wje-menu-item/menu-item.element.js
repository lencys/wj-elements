import { default as WJElement, WjElementUtils, event } from "../wje-element/element.js";
import { bindRouterLinks } from "../wje-router/plugins/slick-router/middlewares/router-links.js";
import styles from "./styles/styles.css?inline";

/**
 * `MenuItem` is a custom web component that represents a menu item.
 * @summary This element represents a menu item.
 * @documentation https://elements.webjet.sk/components/menu-item
 * @status stable
 *
 * @extends {WJElement}
 *
 * @csspart native - The native part of the menu item.
 * @csspart submenu - The submenu part of the menu item.
 *
 * @slot - The default slot for the menu item.
 * @slot start - The slot for the start of the menu item.
 * @slot end - The slot for the end of the menu item.
 * @slot submenu - The slot for the submenu of the menu item.
 *
 * @cssproperty [--wje-menu-item-color=var(--wje-color)] - The color of the menu item.
 * @cssproperty [--wje-menu-item-background=transparent] - The background of the menu item.
 * @cssproperty [--wje-menu-item-color-hover=var(--wje-color-contrast-8)] - The color of the menu item when hovered.
 * @cssproperty [--wje-menu-item-background-hover=var(--wje-border-color)] - The background of the menu item when hovered.
 * @cssproperty [--wje-menu-item-color-focus=var(--wje-color-contrast-8)] - The color of the menu item when focused.
 * @cssproperty [--wje-menu-item-background-focus=var(--wje-border-color)] - The background of the menu item when focused.
 * @cssproperty [--wje-menu-item-color-active=var(--wje-color-contrast-8)] - The color of the menu item when active.
 * @cssproperty [--wje-menu-item-background-active=var(--wje-border-color)] - The background of the menu item when active.
 * @cssproperty [--wje-menu-item-padding-top=.5rem] - The padding top of the menu item.
 * @cssproperty [--wje-menu-item-padding-bottom=.5rem] - The padding bottom of the menu item.
 * @cssproperty [--wje-menu-item-line-height=1.8rem] - The line height of the menu item.
 * @cssproperty [--wje-menu-submenu-offset=0] - The offset of the submenu.
 * @cssproperty [--wje-menu-item-icon-visibility=hidden] - The visibility of the icon.
 * @cssproperty [--wje-menu-item-safe-triangle-cursor-x] - The x-coordinate of the cursor for the safe triangle.
 * @cssproperty [--wje-menu-item-safe-triangle-cursor-y] - The y-coordinate of the cursor for the safe triangle.
 * @cssproperty [--wje-menu-item-safe-triangle-submenu-start-x] - The x-coordinate of the start of the submenu for the safe triangle.
 * @cssproperty [--wje-menu-item-safe-triangle-submenu-start-y] - The y-coordinate of the start of the submenu for the safe triangle.
 * @cssproperty [--wje-menu-item-safe-triangle-submenu-end-x] - The x-coordinate of the end of the submenu for the safe triangle.
 * @cssproperty [--wje-menu-item-safe-triangle-submenu-end-y] - The y-coordinate of the end of the submenu for the safe triangle.
 *
 * @tag wje-menu-item
 */
export default class MenuItem extends WJElement {
    /**
     * Constructor for MenuItem class.
     * @constructor
     */
    constructor() {
        super();

        bindRouterLinks(this, { selector: false })

        this._collapsible = false;
    }

    /**
     * Getter for placement attribute.
     * @returns {string} The placement attribute of the menu or "right-start" if it doesn't exist.
     */
    get placement() {
        let menu = this.querySelector("wje-menu");

        if (menu?.hasAttribute("placement")) {
            return menu.getAttribute("placement");
        }
        return "right-start";
    }

    /**
     * Getter for offset attribute.
     * @returns {string} The offset attribute of the menu or "0" if it doesn't exist.
     */
    get offset() {
        let menu = this.querySelector("wje-menu");

        if (menu?.hasAttribute("offset")) {
            return menu.getAttribute("offset");
        }
        return "0";
    }

    /**
     * Getter for variant attribute.
     * @returns {string} The variant attribute of the menu or "CONTEXT" if it doesn't exist.
     */
    get variant() {
        let menu = this.querySelector("wje-menu");

        if (menu?.hasAttribute("variant") && !this.collapse) {
            return menu.getAttribute("variant").toUpperCase();
        }

        return "CONTEXT";
    }

    /**
     * Getter for collapse attribute.
     * @returns {boolean} True if the closest parent has the collapse attribute, false otherwise.
     */
    get collapse() {
        if (this.closest('[collapse]'))
            return true;

        return false;
    }

    className = "MenuItem";

    /**
     * Getter for cssStyleSheet.
     * @returns {string} The styles imported from styles.css.
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for observedAttributes.
     * @returns {Array} An empty array as no attributes are being observed.
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Sets up the attributes for the MenuItem element.
     */
    setupAttributes() {
        super.setupAttributes();
        this.isShadowRoot = "open";
        this.setAttribute("active-class", "open");
    }

    /**
     * Removes the active attribute from the menu before drawing the MenuItem.
     */
    beforeDraw(context, store, params) {
        this.querySelector("wje-menu")?.removeAttribute("active");
    }

    /**
     * Draws the MenuItem element.
     *
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     * @returns {DocumentFragment} The fragment to be appended to the MenuItem.
     */
    draw(context, store, params) {
        this.hasSubmenu = WjElementUtils.hasSlot(this, "submenu");

        let fragment = document.createDocumentFragment();

        this.setAttribute("tabindex", "0");

        this.classList.forEach(className => {
            // Ak trieda začína na "wje-menu-variant-", odstráňte ju
            if (className.startsWith('wje-menu-variant-')) {
                this.classList.remove(className);
            }
        });

        this.classList.remove("collapse");
        this.classList.add("wje-menu-variant-" + this.variant.toLowerCase());

        if (!this.collapse) {
            this.querySelector("wje-menu")?.setAttribute("variant", this.variant.toLowerCase());
        } else if (this.parentElement?.hasAttribute("collapse")) {
            this.classList.add("collapse");
        }

        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.setAttribute("id", "anchor");
        native.classList.add("native-menu-item");

        // CHECKED - Icon
        let checkedIcon = document.createElement("span");
        checkedIcon.setAttribute("part", "check");
        checkedIcon.classList.add("check-icon");
        checkedIcon.innerHTML = `<wje-icon name="check"></wje-icon>`;

        (this.hasAttribute("checked")) ? checkedIcon.classList.add("checked") : checkedIcon.classList.remove("checked");

        // SLOT - Start
        let start = document.createElement("slot");
        start.name = "start";

        // SLOT
        let slot = document.createElement("slot");
        slot.classList.add("label");

        // SLOT - End
        let end = document.createElement("slot");
        end.setAttribute("part", "end");
        end.name = "end";

        // SLOT - Submenu
        let submenu = document.createElement("slot");
        submenu.setAttribute("part", "submenu")
        submenu.name = "submenu";

        // SUBMENU - Icon
        let submenuIconClass = (this.collapse) ? "collapse" : "expand";
        let submenuIcon = document.createElement("span");
        submenuIcon.setAttribute("part", "submenu-icon");
        submenuIcon.classList.add("submenu-icon", submenuIconClass);
        submenuIcon.innerHTML = (this.collapse) ? `<wje-icon name="chevron-down"></wje-icon>` : `<wje-icon name="chevron-right"></wje-icon>`;

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

            let popup = document.createElement("wje-popup");
            popup.setAttribute("anchor", "anchor");
            popup.setAttribute("placement", this.placement);
            popup.setAttribute("offset", this.offset);

            popup.appendChild(native);
            popup.appendChild(submenu);

            this.popup = popup;
            fragment.appendChild(popup);
            isAppend = true;
        }

        if (this.parentElement?.hasAttribute("collapse") && !this.hasSubmenu) {
            fragment.appendChild(this.collapseItem(native));
        } else if (!isAppend) {
            fragment.appendChild(native);
        }

        if (!this.collapse && this.variant === "NAV" || this.variant === "MEGAMENU" && this.hasSubmenu) {
            fragment.appendChild(submenu);
        }

        this.native = native;
        this.submenu = submenu;

        return fragment;
    }

    /**
     * Adds event listeners after drawing the MenuItem.
     */
    afterDraw() {
        this.addEventListener("mousemove", this.dispatchMove);
        this.addEventListener("wje-popup:reposition", this.dispatchReposition);


        // Event na zobrazenie submenu
        event.addListener(this, "mouseenter", null, (e) => {
            if (this.collapse || this.variant === "CONTEXT" && this.hasSubmenu) {
                if (this.hasAttribute("manual") || this.variant === "NAV" && this.collapse) return;

                this.activateSubmenu(e);

                e.stopPropagation();

                this.showSubmenu();
                // this.focus();
            }
        });

        // Event na zrusenie zobrazenia submenu ked sa klikne mimo
        event.addListener(this, "mouseleave", null, this.shouldHideSubmenu);

        // Event na zrusenie zobrazenia submenu ked sa klikne mimo
        event.addListener(this, "focusout", null, this.shouldHideSubmenu);

        event.addListener(this, "click", null, (e) => {
            if (!this.collapse && this.variant === "NAV" && this.hasSubmenu) {
                this.submenuToggle(e);
                this.hideSubmenu();
                e.stopPropagation();
            } else {
                event.dispatchCustomEvent(this, "wje-menu-item:click");
                event.dispatchCustomEvent(this, this.dialog, {
                    bubbles: true
                });
            }
        });
    }

    /**
     * Checks if the submenu should be hidden based on the event.
     *
     * @param {Event} e - The event object.
     */
    shouldHideSubmenu = (e) => {
        if (this.collapse || this.variant === "CONTEXT" && this.hasSubmenu) {
            if (e.relatedTarget && this.contains(e.relatedTarget) || this.variant === "NAV" && !this.collapse) {
                return;
            }

            this.deactivateSubmenu();
            this.hideSubmenu();
        }
    }


    /**
     * Creates a tooltip for the MenuItem when it is collapsed.
     * @param {HTMLElement} native - The native MenuItem element.
     * @returns {HTMLElement} The tooltip element.
     */
    collapseItem(native) {
        let tooltipStart = document.createElement("slot");
        tooltipStart.setAttribute("slot", "start");
        tooltipStart.setAttribute("name", "tooltip-start");

        let tooltipEnd = document.createElement("slot");
        tooltipEnd.setAttribute("slot", "end");
        tooltipEnd.setAttribute("name", "tooltip-end");

        let tooltip = document.createElement("wje-tooltip");
        tooltip.setAttribute("content", this.getTextFromElement(this));
        tooltip.setAttribute("placement", "right");
        tooltip.setAttribute("offset", this.offset || "0");

        tooltip.appendChild(tooltipStart);
        tooltip.appendChild(tooltipEnd);
        tooltip.appendChild(native);

        return tooltip;
    }

    /**
     * Dispatches a mousemove event.
     */
    dispatchMove = (e) => {
        this.style.setProperty("--wje-menu-item-safe-triangle-cursor-x", `${e.clientX}px`);
        this.style.setProperty("--wje-menu-item-safe-triangle-cursor-y", `${e.clientY}px`);
    }

    /**
     * Dispatches a reposition event.
     */
    dispatchReposition = (e) => {
        // ak nemame submenu tak to ukoncime
        if (this.submenu.assignedNodes().length === 0) return;

        let submenu = this.submenu.assignedNodes()[0];
        const { left, top, width, height } = submenu.getBoundingClientRect();

        this.style.setProperty('--wje-menu-item-safe-triangle-submenu-start-x', `${left}px`);
        this.style.setProperty('--wje-menu-item-safe-triangle-submenu-start-y', `${top}px`);
        this.style.setProperty('--wje-menu-item-safe-triangle-submenu-end-x', `${left}px`);
        this.style.setProperty('--wje-menu-item-safe-triangle-submenu-end-y', `${top + height}px`);
    }

    /**
     * Shows the submenu of the MenuItem.
     */
    showSubmenu() {
        this.tabIndex = -1;
        if (this.hasSubmenu) {
            this.popup.setAttribute("active", "");
            this.classList.add("expanded-submenu");
            this.native.classList.add("expanded-submenu");
        }
    }

    /**
     * Hides the submenu of the MenuItem.
     */
    hideSubmenu() {
        this.tabIndex = 0;
        if (this.hasSubmenu) {
            this.popup.removeAttribute("active");
            this.classList.remove("expanded-submenu");
            this.native.classList.remove("expanded-submenu");
        }
    }


    /**
     * Toggles the active state of the submenu element.
     * If the submenu is not active, it sets the "active" attribute.
     * If the submenu is already active, it removes the "active" attribute.
     * @param {Event} e - The event object.
     */
    submenuToggle(e) {
        if (this.hasSubmenu) {
            let submenuElements = this.submenu.assignedElements({ flatten: true })[0];
            if (!submenuElements.hasAttribute("active")) {
                submenuElements.setAttribute("active", "");
            } else {
                if (this === e.target)
                    submenuElements.removeAttribute("active");
            }
        }
    }

    /**
     * Deactivates the submenu by removing the "active" attribute.
     */
    deactivateSubmenu() {
        if (this.hasSubmenu) {
            let submenuElements = this.submenu.assignedElements({ flatten: true })[0];
            if (submenuElements.hasAttribute("active")) {
                submenuElements.removeAttribute("active");
            }
        }
    }

    /**
     * Activates the submenu of the menu item.
     */
    activateSubmenu() {
        if (this.hasSubmenu) {
            let submenuElements = this.submenu.assignedElements({ flatten: true })[0];
            if (!submenuElements.hasAttribute("active")) {
                submenuElements.setAttribute("active", "");
            }
        }
    }

    /**
     * Clears the innerHTML of the context before disconnecting the MenuItem.
     */
    beforeDisconnect() {
        this.context.innerHTML = "";
    }

    getTextFromElement(element) {
        let text = '';
        for (let node of element.childNodes) {
            if (node.nodeType === Node.TEXT_NODE) {
                text += node.textContent;
            }
        }
        return text.trim();
    }
}