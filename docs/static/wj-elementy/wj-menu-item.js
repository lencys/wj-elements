var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { WjElementUtils, event } from "./wj-element.js";
import { b as bindRouterLinks } from "./router-links-F7MJWhZi.js";
const styles = '/*\n[ WJ Menu Item ]\n*/\n:host {\n  --wj-menu-item-color: var(--wj-color);\n  --wj-menu-item-background: transparent;\n  --wj-menu-item-color-hover: var(--wj-color-contrast-8);\n  --wj-menu-item-background-hover: var(--wj-border-color);\n  --wj-menu-item-color-focus: var(--wj-color-contrast-8);\n  --wj-menu-item-background-focus: var(--wj-border-color);\n  --wj-menu-item-color-active: var(--wj-color-contrast-8);\n  --wj-menu-item-background-active: var(--wj-border-color);\n  --wj-menu-item-padding-top: .5rem;\n  --wj-menu-item-padding-bottom: .5rem;\n  --wj-menu-item-line-height: 1.8rem;\n  --wj-menu-item-safe-triangle-cursor-x: 0;\n  --wj-menu-item-safe-triangle-cursor-y: 0;\n  --wj-menu-item-safe-triangle-submenu-start-x: 0;\n  --wj-menu-item-safe-triangle-submenu-start-y: 0;\n  --wj-menu-item-safe-triangle-submenu-end-x: 0;\n  --wj-menu-item-safe-triangle-submenu-end-y: 0;\n  --wj-menu-submenu-offset: 0;\n  --wj-menu-item-icon-visibility: hidden;\n  display: block;\n}\n:host .native-menu-item {\n  background: var(--wj-menu-item-background);\n  position: relative;\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: center;\n  color: var(--wj-menu-item-color);\n  padding-top: var(--wj-menu-item-padding-top);\n  padding-bottom: var(--wj-menu-item-padding-bottom);\n  transition: var(--wj-transition-fast) fill;\n  user-select: none;\n  white-space: nowrap;\n  cursor: pointer;\n  width: 100%;\n}\n:host .native-menu-item:hover {\n  color: var(--wj-menu-item-color-hover);\n  background: var(--wj-menu-item-background-hover);\n}\n:host .native-menu-item:focus {\n  color: var(--wj-menu-item-color-focus);\n  background: var(--wj-menu-item-background-focus);\n}\n:host .native-menu-item:active {\n  color: var(--wj-menu-item-color-active);\n  background: var(--wj-menu-item-background-active);\n}\n:host .native-menu-item .label {\n  flex: 1 1 auto;\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  line-height: normal;\n}\n:host .native-menu-item .check-icon {\n  flex: 0 0 auto;\n  display: var(--wj-menu-item-check-icon-display, flex);\n  align-items: center;\n  justify-content: center;\n  width: var(--wj-menu-check-icon-width, 1.5rem);\n  visibility: hidden;\n}\n:host .native-menu-item .check-icon.checked {\n  visibility: visible;\n}\n:host .native-menu-item.expanded-submenu {\n  color: var(--wj-menu-item-color-active);\n  background: var(--wj-menu-item-background-active);\n}\n:host .native-menu-item.expanded-submenu:hover {\n  color: var(--wj-menu-item-color-hover);\n  background: var(--wj-menu-item-background-hover);\n}\n:host .native-menu-item.expanded-submenu::after {\n  content: "";\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  clip-path: polygon(var(--wj-menu-item-safe-triangle-cursor-x) var(--wj-menu-item-safe-triangle-cursor-y), var(--wj-menu-item-safe-triangle-submenu-start-x) var(--wj-menu-item-safe-triangle-submenu-start-y), var(--wj-menu-item-safe-triangle-submenu-end-x) var(--wj-menu-item-safe-triangle-submenu-end-y));\n}\n\n:host(.collapse) ::slotted([slot=start]) {\n  margin: 0;\n  width: auto;\n  display: contents;\n}\n:host(.collapse) ::slotted([slot=end]) {\n  display: none;\n}\n:host(.collapse) .label,\n:host(.collapse) .check-icon,\n:host(.collapse) .submenu-icon {\n  display: none;\n}\n\n.submenu-icon {\n  --wj-icon-size: 14px !important;\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.5rem;\n  visibility: var(--wj-menu-item-icon-visibility);\n}\n\n.has-submenu .submenu-icon {\n  --wj-menu-item-icon-visibility: visible;\n}\n\n.submenu-icon.collapse {\n  flex: none;\n  right: 10px;\n  position: relative;\n}\n\n:host(:focus-visible) {\n  outline: none;\n}\n\n::slotted([slot=start]) {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  margin-inline-end: 0.5rem;\n}\n\n::slotted([slot=end]) {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  margin-inline-start: 0.5rem;\n}\n\n:host(.wj-menu-variant-nav) ::slotted([slot=submenu]) {\n  --wj-menu-border-width: 0 !important;\n  --wj-menu-margin-inline: 2rem 0 !important;\n}\n\n:host ::slotted([slot=start]) {\n  width: 1.5rem;\n}\n\n:host(.wj-menu-variant-context) {\n  display: block;\n}\n\n:host(.active) {\n  color: var(--wj-menu-item-color-active);\n  background: var(--wj-menu-item-background-active);\n}\n\n:host(.open) {\n  color: var(--wj-menu-item-color-active);\n  background: var(--wj-menu-item-background-active);\n}';
class MenuItem extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "MenuItem");
    __publicField(this, "dispatchMove", (e) => {
      this.style.setProperty("--wj-menu-item-safe-triangle-cursor-x", `${e.clientX}px`);
      this.style.setProperty("--wj-menu-item-safe-triangle-cursor-y", `${e.clientY}px`);
    });
    __publicField(this, "dispatchReposition", (e) => {
      if (this.submenu.assignedNodes().length === 0)
        return;
      let submenu = this.submenu.assignedNodes()[0];
      const { left, top, width, height } = submenu.getBoundingClientRect();
      this.style.setProperty("--wj-menu-item-safe-triangle-submenu-start-x", `${left}px`);
      this.style.setProperty("--wj-menu-item-safe-triangle-submenu-start-y", `${top}px`);
      this.style.setProperty("--wj-menu-item-safe-triangle-submenu-end-x", `${left}px`);
      this.style.setProperty("--wj-menu-item-safe-triangle-submenu-end-y", `${top + height}px`);
    });
    bindRouterLinks(this, { selector: false });
    this.hasSubmenu = WjElementUtils.hasSlot(this, "submenu");
    this._collapsible = false;
  }
  get placement() {
    let menu = this.querySelector("wj-menu");
    if (menu == null ? void 0 : menu.hasAttribute("placement")) {
      return menu.getAttribute("placement");
    }
    return "right-start";
  }
  get offset() {
    let menu = this.querySelector("wj-menu");
    if (menu == null ? void 0 : menu.hasAttribute("offset")) {
      return menu.getAttribute("offset");
    }
    return "0";
  }
  get variant() {
    let menu = this.querySelector("wj-menu");
    if ((menu == null ? void 0 : menu.hasAttribute("variant")) && !this.collapse) {
      return menu.getAttribute("variant").toUpperCase();
    }
    return "CONTEXT";
  }
  get collapse() {
    if (this.closest("[collapse]"))
      return true;
    return false;
  }
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
    var _a;
    (_a = this.querySelector("wj-menu")) == null ? void 0 : _a.removeAttribute("active");
  }
  draw(context, store, params) {
    var _a, _b, _c;
    let fragment = document.createDocumentFragment();
    this.setAttribute("tabindex", "0");
    console.log("DRAW", this.variant, this.collapse);
    this.classList.forEach((className) => {
      if (className.startsWith("wj-menu-variant-")) {
        this.classList.remove(className);
      }
    });
    this.classList.remove("collapse");
    this.classList.add("wj-menu-variant-" + this.variant.toLowerCase());
    if (!this.collapse) {
      (_a = this.querySelector("wj-menu")) == null ? void 0 : _a.setAttribute("variant", this.variant.toLowerCase());
    } else if ((_b = this.parentElement) == null ? void 0 : _b.hasAttribute("collapse")) {
      this.classList.add("collapse");
    }
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.setAttribute("id", "anchor");
    native.classList.add("native-menu-item");
    let checkedIcon = document.createElement("span");
    checkedIcon.classList.add("check-icon");
    checkedIcon.innerHTML = `<wj-icon name="check"></wj-icon>`;
    this.hasAttribute("checked") ? checkedIcon.classList.add("checked") : checkedIcon.classList.remove("checked");
    let start = document.createElement("slot");
    start.name = "start";
    let slot = document.createElement("slot");
    slot.classList.add("label");
    let end = document.createElement("slot");
    end.name = "end";
    let submenu = document.createElement("slot");
    submenu.setAttribute("part", "submenu");
    submenu.name = "submenu";
    let submenuIconClass = this.collapse ? "collapse" : "expand";
    let submenuIcon = document.createElement("span");
    submenuIcon.classList.add("submenu-icon", submenuIconClass);
    submenuIcon.innerHTML = this.collapse ? `<wj-icon name="chevron-down"></wj-icon>` : `<wj-icon name="chevron-right"></wj-icon>`;
    this.hasSubmenu ? native.classList.add("has-submenu") : native.classList.remove("has-submenu");
    native.appendChild(checkedIcon);
    native.appendChild(start);
    native.appendChild(slot);
    native.appendChild(end);
    native.appendChild(submenuIcon);
    let isAppend = false;
    if (
      /*(this.collapse && this.variant === "NAV" && this.hasSubmenu) || */
      this.variant === "CONTEXT" && this.hasSubmenu
    ) {
      native.setAttribute("slot", "anchor");
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
    return fragment;
  }
  afterDraw() {
    this.addEventListener("mousemove", this.dispatchMove);
    this.addEventListener("wj-popup:reposition", this.dispatchReposition);
    event.addListener(this, "mouseover", null, (e) => {
      if (this.collapse || this.variant === "CONTEXT" && this.hasSubmenu) {
        if (this.hasAttribute("manual") || this.variant === "NAV" && this.collapse)
          return;
        this.submenuActivated(e);
        e.stopPropagation();
        this.showSubmenu();
        this.focus();
      }
    });
    event.addListener(this, "focusout", null, (e) => {
      if (this.collapse || this.variant === "CONTEXT" && this.hasSubmenu) {
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
  showSubmenu() {
    console.log("SHOW SUBMENU", this.hasSubmenu);
    this.tabIndex = -1;
    if (this.hasSubmenu) {
      this.popup.setAttribute("active", "");
      this.classList.add("expanded-submenu");
      this.native.classList.add("expanded-submenu");
    }
  }
  hideSubmenu() {
    console.log("HIDE SUBMENU", this);
    this.tabIndex = 0;
    if (this.hasSubmenu) {
      this.popup.removeAttribute("active");
      this.classList.remove("expanded-submenu");
      this.native.classList.remove("expanded-submenu");
    }
  }
  submenuActivated(e) {
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
  beforeDisconnect() {
    this.context.innerHTML = "";
  }
}
WJElement.define("wj-menu-item", MenuItem);
export {
  MenuItem as default
};
