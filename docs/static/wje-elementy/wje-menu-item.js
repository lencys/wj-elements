var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _MenuItem_instances, populateCustomEvent_fn;
import { b as bindRouterLinks } from "./router-links-CJnOdbas.js";
import WJElement from "./wje-element.js";
import { WjElementUtils } from "./element-utils.js";
import { event } from "./event.js";
const styles = `/*
[ WJ Menu Item ]
*/

:host {
    --wje-menu-item-safe-triangle-cursor-x: 0;
    --wje-menu-item-safe-triangle-cursor-y: 0;
    --wje-menu-item-safe-triangle-submenu-start-x: 0;
    --wje-menu-item-safe-triangle-submenu-start-y: 0;
    --wje-menu-item-safe-triangle-submenu-end-x: 0;
    --wje-menu-item-safe-triangle-submenu-end-y: 0;

    display: block;
    .native-menu-item {
        font-size: var(--wje-menu-item-font-size);
        background: var(--wje-menu-item-background);
        position: relative;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        color: var(--wje-menu-item-color);
        padding-top: var(--wje-menu-item-padding-top);
        padding-bottom: var(--wje-menu-item-padding-bottom);
        transition: var(--wje-transition-fast) fill;
        user-select: none;
        white-space: nowrap;
        cursor: pointer;
        width: 100%;

        &:hover {
            color: var(--wje-menu-item-color-hover);
            background: var(--wje-menu-item-background-hover);
        }

        &:focus {
            color: var(--wje-menu-item-color-focus);
            background: var(--wje-menu-item-background-focus);
        }

        &:active {
            color: var(--wje-menu-item-color-active);
            background: var(--wje-menu-item-background-active);
        }

        .label {
            flex: 1 1 auto;
            display: inline-block;
            text-overflow: ellipsis;
            overflow: hidden;
            line-height: normal;
        }

        .check-icon {
            flex: 0 0 auto;
            display: var(--wje-menu-item-check-icon-display, flex);
            align-items: center;
            justify-content: center;
            width: var(--wje-menu-item-check-icon-width, 1.5rem);
            visibility: hidden;

            &.checked {
                visibility: visible;
            }
        }

        &.expanded-submenu {
            color: var(--wje-menu-item-color-active);
            background: var(--wje-menu-item-background-active);

            &:hover {
                color: var(--wje-menu-item-color-hover);
                background: var(--wje-menu-item-background-hover);
            }

            &::after {
                content: '';
                position: fixed;
                z-index: 1;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                clip-path: polygon(
                    var(--wje-menu-item-safe-triangle-cursor-x) var(--wje-menu-item-safe-triangle-cursor-y),
                    var(--wje-menu-item-safe-triangle-submenu-start-x)
                        var(--wje-menu-item-safe-triangle-submenu-start-y),
                    var(--wje-menu-item-safe-triangle-submenu-end-x) var(--wje-menu-item-safe-triangle-submenu-end-y)
                );
            }
        }
    }
}

:host(.collapse) {
    ::slotted([slot='start']) {
        margin: 0;
        /*width: auto;*/
        /*display: contents;*/
    }

    ::slotted([slot='end']) {
        display: none;
    }

    .label,
    .check-icon,
    .submenu-icon {
        display: none;
    }
}
.submenu-icon {
    --wje-icon-size: 14px !important;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    visibility: var(--wje-menu-item-icon-visibility);
}

.has-submenu {
    .submenu-icon {
        --wje-menu-item-icon-visibility: visible;
    }
}

.submenu-icon.collapse {
    flex: none;
    /*right: 10px;*/
    position: relative;
}

:host(:focus-visible) {
    outline: none;
}

::slotted([slot='start']) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    margin-inline-end: 0.5rem;
}

::slotted([slot='end']) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    margin-inline-start: 0.5rem;
}

:host(.wje-menu-variant-nav) {
    /*posun 2 a x urovne o 1 rem*/
    ::slotted([slot='submenu']) {
        --wje-menu-border-width: 0 !important;
        --wje-menu-margin-inline: 2rem 0 !important;
    }
}

/*:host {*/
/*  ::slotted([slot="start"]) {*/
/*    width: 1.5rem;*/
/*  }*/
/*}*/

:host(.wje-menu-variant-context) {
    display: block;
}

:host(.active) {
    color: var(--wje-menu-item-color-active);
    background: var(--wje-menu-item-background-active);
}

:host(.open) {
    color: var(--wje-menu-item-color-active);
    background: var(--wje-menu-item-background-active);
}
`;
class MenuItem extends WJElement {
  /**
   * Constructor for MenuItem class.
   * @class
   */
  constructor() {
    super();
    __privateAdd(this, _MenuItem_instances);
    __publicField(this, "className", "MenuItem");
    __publicField(this, "mouseenterHandler", (e) => {
      if (this.collapse || this.variant === "CONTEXT" && this.hasSubmenu) {
        if (this.hasAttribute("manual") || this.variant === "NAV" && this.collapse) return;
        this.activateSubmenu(e);
        e.stopPropagation();
        this.showSubmenu();
      }
    });
    __publicField(this, "rebindRouterLinks", (e) => {
      this.unbindPortalRouterLinks = bindRouterLinks(e.detail.container, { selector: "[route]" });
    });
    /**
     * Handles the click event on the MenuItem.
     * @param {object} e
     */
    __publicField(this, "clickHandler", (e) => {
      if (this.hasAttribute("disabled")) return;
      switch (this.variant) {
        case "NAV":
          if (!this.collapse && this.hasSubmenu) {
            this.submenuToggle(e);
            this.hideSubmenu();
            e.stopPropagation();
          } else {
            event.dispatchCustomEvent(this, "wje-menu-item:click");
            event.dispatchCustomEvent(this, this.dialog);
          }
          break;
        case "CONTEXT":
          if (!this.collapse && this.hasSubmenu) {
            let submenuElements = this.submenu.assignedElements({ flatten: true })[0];
            if (submenuElements == null ? void 0 : submenuElements.hasAttribute("active")) {
              this.shouldHideSubmenu(e);
            } else {
              this.activateSubmenu(e);
              this.showSubmenu(e);
            }
          } else {
            event.dispatchCustomEvent(this, "wje-menu-item:click");
            event.dispatchCustomEvent(this, this.dialog);
          }
          break;
      }
    });
    /**
     * Checks if the submenu should be hidden based on the event.
     * @param {Event} e The event object.
     */
    __publicField(this, "shouldHideSubmenu", (e) => {
      if (this.collapse || this.variant === "CONTEXT" && this.hasSubmenu) {
        if (e.relatedTarget && this.contains(e.relatedTarget) || this.variant === "NAV" && !this.collapse) {
          return;
        }
        this.deactivateSubmenu();
        this.hideSubmenu();
      }
    });
    /**
     * Dispatches a mousemove event.
     */
    __publicField(this, "dispatchMove", (e) => {
      this.style.setProperty("--wje-menu-item-safe-triangle-cursor-x", `${e.clientX}px`);
      this.style.setProperty("--wje-menu-item-safe-triangle-cursor-y", `${e.clientY}px`);
    });
    /**
     * Dispatches a reposition event.
     */
    __publicField(this, "dispatchReposition", (e) => {
      if (this.submenu.assignedNodes().length === 0) return;
      let submenu = this.submenu.assignedNodes()[0];
      const { left, top, width, height } = submenu.getBoundingClientRect();
      this.style.setProperty("--wje-menu-item-safe-triangle-submenu-start-x", `${left}px`);
      this.style.setProperty("--wje-menu-item-safe-triangle-submenu-start-y", `${top}px`);
      this.style.setProperty("--wje-menu-item-safe-triangle-submenu-end-x", `${left}px`);
      this.style.setProperty("--wje-menu-item-safe-triangle-submenu-end-y", `${top + height}px`);
    });
    __publicField(this, "handleActiveClick", (e) => {
      var _a, _b, _c, _d;
      const target = e.target.closest("wje-menu-item");
      if (!target) return;
      let rootMenu = target.closest("wje-menu");
      let currentMenu = rootMenu;
      while (currentMenu == null ? void 0 : currentMenu.parentElement) {
        const parent = (_b = (_a = currentMenu.parentElement).closest) == null ? void 0 : _b.call(_a, "wje-menu");
        if (!parent) break;
        rootMenu = parent;
        currentMenu = parent;
      }
      if (!rootMenu) {
        const path = typeof e.composedPath === "function" ? e.composedPath() : [];
        let firstMenuInPath = path.find((n) => n && n.tagName === "WJE-MENU");
        if (firstMenuInPath) {
          let top = firstMenuInPath;
          while (top && top.parentElement) {
            const parent = (_d = (_c = top.parentElement).closest) == null ? void 0 : _d.call(_c, "wje-menu");
            if (!parent) break;
            top = parent;
          }
          rootMenu = top;
        }
      }
      if (!rootMenu) return;
      rootMenu.querySelectorAll("wje-menu-item").forEach((item) => {
        const activeClass = item.getAttribute("active-class");
        if (activeClass) item.classList.remove(activeClass);
      });
      let current = target;
      while (current && current.tagName === "WJE-MENU-ITEM") {
        const activeClass = current.getAttribute("active-class");
        if (activeClass) current.classList.add(activeClass);
        const parentMenu = current.closest("wje-menu");
        if (!parentMenu) break;
        const candidate = parentMenu.closest("wje-menu-item");
        if (!candidate) break;
        current = candidate;
      }
    });
    this._bind = false;
  }
  /**
   * Getter for placement attribute.
   * @returns {string} The placement attribute of the menu or "right-start" if it doesn't exist.
   */
  get placement() {
    let menu = this.querySelector("wje-menu");
    if (menu == null ? void 0 : menu.hasAttribute("placement")) {
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
    if (menu == null ? void 0 : menu.hasAttribute("offset")) {
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
    if ((menu == null ? void 0 : menu.hasAttribute("variant")) && !this.collapse) {
      return menu.getAttribute("variant").toUpperCase();
    }
    return "CONTEXT";
  }
  /**
   * Getter for collapse attribute.
   * @returns {boolean} True if the closest parent has the collapse attribute, false otherwise.
   */
  get collapse() {
    if (this.closest("[collapse]")) return true;
    return false;
  }
  /**
   * Sets the value of the custom event attribute.
   * @param {string} value The value to be assigned to the custom event attribute.
   */
  set customEvent(value) {
    this.setAttribute("custom-event", value);
  }
  /**
   * Retrieves the value of the 'custom-event' attribute from the element.
   * @returns {string | null} The value of the 'custom-event' attribute, or null if the attribute is not set.
   */
  get customEvent() {
    return this.getAttribute("custom-event");
  }
  /**
   * Retrieves a mapped object containing custom event parameters extracted from the element's attributes.
   * Attributes considered are those that begin with 'custom-event-'.
   * The mapped object's keys are derived by removing the 'custom-event-' prefix from the attribute names,
   * and the values are the corresponding attribute values.
   * @returns {object} An object containing key-value pairs of custom event parameters.
   */
  get customEventParameters() {
    const attributes = Array.from(this.attributes).filter((attr) => attr.name.startsWith("custom-event-"));
    return attributes.reduce((acc, attr) => {
      const key = attr.name.replace("custom-event-", "");
      acc[key] = attr.value;
      return acc;
    }, {});
  }
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
    this.syncAria();
  }
  /**
   * Removes the active attribute from the menu before drawing the MenuItem.
   */
  beforeDraw() {
    var _a;
    (_a = this.querySelector("wje-menu")) == null ? void 0 : _a.removeAttribute("active");
  }
  /**
   * Draws the MenuItem element and sets the variant and collapse attributes.
   * @returns {DocumentFragment} The fragment to be appended to the MenuItem.
   */
  draw() {
    var _a, _b, _c;
    this.hasSubmenu = WjElementUtils.hasSlot(this, "submenu");
    let fragment = document.createDocumentFragment();
    this.setAttribute("tabindex", "0");
    this.classList.forEach((className) => {
      if (className.startsWith("wje-menu-variant-")) {
        this.classList.remove(className);
      }
    });
    this.classList.remove("collapse");
    this.classList.add("wje-menu-variant-" + this.variant.toLowerCase());
    if (!this.collapse) {
      (_a = this.querySelector("wje-menu")) == null ? void 0 : _a.setAttribute("variant", this.variant.toLowerCase());
    } else if ((_b = this.parentElement) == null ? void 0 : _b.hasAttribute("collapse")) {
      this.classList.add("collapse");
    }
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.setAttribute("id", "anchor");
    native.classList.add("native-menu-item");
    let checkedIcon = document.createElement("span");
    checkedIcon.setAttribute("part", "check");
    checkedIcon.classList.add("check-icon");
    checkedIcon.innerHTML = `<wje-icon name="check"></wje-icon>`;
    if (this.hasAttribute("checked")) checkedIcon.classList.add("checked");
    else checkedIcon.classList.remove("checked");
    let start = document.createElement("slot");
    start.name = "start";
    let slot = document.createElement("slot");
    slot.classList.add("label");
    let end = document.createElement("slot");
    end.setAttribute("part", "end");
    end.name = "end";
    let submenu = document.createElement("slot");
    submenu.setAttribute("part", "submenu");
    submenu.name = "submenu";
    let submenuIconClass = this.collapse ? "collapse" : "expand";
    let submenuIcon = document.createElement("span");
    submenuIcon.setAttribute("part", "submenu-icon");
    submenuIcon.classList.add("submenu-icon", submenuIconClass);
    submenuIcon.innerHTML = this.collapse ? `<wje-icon name="chevron-down"></wje-icon>` : `<wje-icon name="chevron-right"></wje-icon>`;
    if (this.hasSubmenu) native.classList.add("has-submenu");
    else native.classList.remove("has-submenu");
    native.appendChild(checkedIcon);
    native.appendChild(start);
    native.appendChild(slot);
    native.appendChild(end);
    native.appendChild(submenuIcon);
    let isAppend = false;
    if (this.variant === "CONTEXT" && this.hasSubmenu) {
      native.setAttribute("slot", "anchor");
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
    if (((_c = this.parentElement) == null ? void 0 : _c.hasAttribute("collapse")) && !this.hasSubmenu) {
      fragment.appendChild(this.collapseItem(native));
    } else if (!isAppend) {
      fragment.appendChild(native);
    }
    if (!this.collapse && this.variant === "NAV" || this.variant === "MEGAMENU" && this.hasSubmenu) {
      fragment.appendChild(submenu);
    }
    this.native = native;
    this.submenu = submenu;
    this.syncAria();
    return fragment;
  }
  /**
   * Adds event listeners after drawing the MenuItem.
   */
  afterDraw() {
    this.unbindRouterLinks = bindRouterLinks(this.parentElement, { selector: "[route]" });
    document.addEventListener("wje-router:rebind", this.rebindRouterLinks);
    this.addEventListener("mousemove", this.dispatchMove);
    this.addEventListener("wje-popup:reposition", this.dispatchReposition);
    event.addListener(this, "mouseenter", null, this.mouseenterHandler);
    event.addListener(this, "mouseleave", null, this.shouldHideSubmenu);
    event.addListener(this, "focusout", null, this.shouldHideSubmenu);
    event.addListener(this, "click", null, this.clickHandler);
    if (this.hasAttribute("custom-event")) {
      event.addListener(this, "click", null, __privateMethod(this, _MenuItem_instances, populateCustomEvent_fn));
    }
    if (this.hasAttribute("active-class")) {
      this.addEventListener("click", this.handleActiveClick);
    }
  }
  /**
   * Syncs ARIA attributes based on menu item state.
   */
  syncAria() {
    var _a, _b;
    const hasSubmenu = !!this.hasSubmenu;
    const expanded = this.classList.contains("expanded-submenu") || ((_b = (_a = this.native) == null ? void 0 : _a.classList) == null ? void 0 : _b.contains("expanded-submenu"));
    const disabled = this.hasAttribute("disabled");
    this.setAriaState({
      role: "menuitem",
      disabled,
      haspopup: hasSubmenu ? "menu" : void 0,
      expanded: hasSubmenu ? expanded : void 0
    });
  }
  /**
   * Creates a tooltip for the MenuItem when it is collapsed.
   * @param {HTMLElement} native The native MenuItem element.
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
   * Shows the submenu of the MenuItem.
   */
  showSubmenu() {
    var _a;
    this.tabIndex = -1;
    if (this.hasSubmenu) {
      (_a = this.popup) == null ? void 0 : _a.show();
      this.classList.add("expanded-submenu");
      this.native.classList.add("expanded-submenu");
      this.syncAria();
    }
  }
  /**
   * Hides the submenu of the MenuItem.
   */
  hideSubmenu() {
    var _a;
    this.tabIndex = 0;
    if (this.hasSubmenu) {
      (_a = this.popup) == null ? void 0 : _a.hide();
      this.classList.remove("expanded-submenu");
      this.native.classList.remove("expanded-submenu");
      this.syncAria();
    }
  }
  /**
   * Toggles the active state of the submenu element.
   * If the submenu is not active, it sets the "active" attribute.
   * If the submenu is already active, it removes the "active" attribute.
   * @param {Event} e The event object.
   */
  submenuToggle(e) {
    if (this.hasSubmenu) {
      let submenuElements = this.submenu.assignedElements({ flatten: true })[0];
      if (!submenuElements.hasAttribute("active")) {
        submenuElements.setAttribute("active", "");
        this.syncAria();
      } else {
        if (this === e.target) submenuElements.removeAttribute("active");
        this.syncAria();
      }
    }
  }
  /**
   * Deactivates the submenu by removing the "active" attribute.
   */
  deactivateSubmenu() {
    if (this.hasSubmenu) {
      let submenuElements = this.submenu.assignedElements({ flatten: true })[0];
      if (submenuElements == null ? void 0 : submenuElements.hasAttribute("active")) {
        submenuElements == null ? void 0 : submenuElements.removeAttribute("active");
        this.syncAria();
      }
    }
  }
  /**
   * Activates the submenu of the menu item.
   */
  activateSubmenu() {
    if (this.hasSubmenu) {
      let submenuElements = this.submenu.assignedElements({ flatten: true })[0];
      if (!(submenuElements == null ? void 0 : submenuElements.hasAttribute("active"))) {
        submenuElements == null ? void 0 : submenuElements.setAttribute("active", "");
        this.syncAria();
      }
    }
  }
  /**
   * Gets the text from the element and returns it.
   */
  beforeDisconnect() {
    var _a, _b;
    document.removeEventListener("wje-router:rebind", this.rebindRouterLinks);
    this.removeEventListener("mousemove", this.dispatchMove);
    this.removeEventListener("wje-popup:reposition", this.dispatchReposition);
    event.removeListener(this, "mouseenter", null, this.mouseenterHandler);
    event.removeListener(this, "mouseleave", null, this.shouldHideSubmenu);
    event.removeListener(this, "focusout", null, this.shouldHideSubmenu);
    event.removeListener(this, "click", null, this.clickHandler);
    (_a = this.unbindRouterLinks) == null ? void 0 : _a.call(this);
    (_b = this.unbindPortalRouterLinks) == null ? void 0 : _b.call(this);
  }
  /**
   * Extracts and returns the concatenated text content from all text nodes within the specified element.
   * @param {HTMLElement} element The HTML element from which to extract text content.
   * @returns {string} The concatenated and trimmed text content from the element's text nodes.
   */
  getTextFromElement(element) {
    let text = "";
    for (let node of element.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent;
      }
    }
    return text.trim();
  }
}
_MenuItem_instances = new WeakSet();
/**
 * Dispatches a custom event with specified parameters.
 * This method uses the `customEvent` and `customEventParameters` properties
 * to create and dispatch a `CustomEvent`. The event is configured to be
 * composed and bubbles up through the DOM.
 * @returns {void} This method does not return a value.
 */
populateCustomEvent_fn = function() {
  this.dispatchEvent(
    new CustomEvent(this.customEvent, { detail: this.customEventParameters, composed: true, bubbles: true })
  );
};
MenuItem.define("wje-menu-item", MenuItem);
export {
  MenuItem as default
};
//# sourceMappingURL=wje-menu-item.js.map
