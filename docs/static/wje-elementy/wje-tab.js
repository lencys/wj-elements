var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import WJElement from "./wje-element.js";
import { b as bindRouterLinks } from "./router-links-CJnOdbas.js";
import { event } from "./event.js";
const styles = `/*
[ WJ Tab ]
*/

:host(:not([slot="more"])) {
    display: block;
    position: relative;
    .native-tab {
        display: flex;
        align-items: center;
        white-space: nowrap;
        font-family: var(--wje-tab-font-family);
        font-size: var(--wje-tab-font-size);
        letter-spacing: var(--wje-tab-letter-spacing);
        text-transform: var(--wje-tab-text-transfrom);
        font-weight: var(--wje-tab-font-weight);
        text-decoration: none;
        padding-inline: var(--wje-tab-padding-inline);
        padding-top: var(--wje-tab-padding-top);
        padding-bottom: var(--wje-tab-padding-bottom);
        border-radius: var(--wje-tab-border-radius);
        color: var(--wje-color);
        line-height: var(--wje-tab-line-height);
        & > svg {
            inline-size: 1.5em;
            pointer-events: none;
        }

        &:hover {
            background: var(--wje-tab-color-hover);
            &:after {
                display: block;
            }
        }

        &:after {
            content: ' ';
            display: none;
            block-size: 0.15rem;
            writing-mode: var(--wje-tab-writing-mode);
            background: var(--wje-tab-color-active);
            position: absolute;
            bottom: var(--wje-tab-bottom);
            left: var(--wje-tab-start);
            right: var(--wje-tab-end);
            top: var(--wje-tab-top);
        }
    }
}

:host([slot="more"]) {
    --wje-menu-item-safe-triangle-cursor-x: 0;
    --wje-menu-item-safe-triangle-cursor-y: 0;
    --wje-menu-item-safe-triangle-submenu-start-x: 0;
    --wje-menu-item-safe-triangle-submenu-start-y: 0;
    --wje-menu-item-safe-triangle-submenu-end-x: 0;
    --wje-menu-item-safe-triangle-submenu-end-y: 0;

    display: block;
    .native-tab {
        background: var(--wje-menu-item-background);
        position: relative;
        display: block;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        color: var(--wje-menu-item-color);
        padding-top: var(--wje-menu-item-padding-top);
        padding-bottom: var(--wje-menu-item-padding-bottom);
        padding-inline: var(--wje-spacing-large);
        transition: var(--wje-transition-fast) fill;
        user-select: none;
        white-space: nowrap;
        cursor: pointer;
        text-decoration: none;

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
    }
}

:host([disabled]) a {
    opacity: 0.5;
    cursor: not-allowed;
    background: inherit;
    &:after {
        display: none;
    }
}

:host(:not([slot="more"]).active) a:after {
    display: block;
}
`;
class Tab extends WJElement {
  /**
   * Creates an instance of Tab.
   */
  constructor() {
    super();
    /**
     * The class name for the component.
     */
    __publicField(this, "className", "Tab");
    this.last = false;
    this._hasPanel = false;
  }
  /**
   * Sets the panel attribute to the specified value.
   * @param {string} value The value to set for the panel attribute.
   */
  set panel(value) {
    this.setAttribute("panel", value);
  }
  /**
   * Retrieves the value of the 'panel' attribute of the element.
   * @returns {string|null} Returns the 'panel' attribute value if it exists; otherwise, returns null.
   */
  get panel() {
    return this.getAttribute("panel") || null;
  }
  /**
   * Sets the value of the 'route' attribute for the current object.
   * @param {string} value The new value to set for the 'route' attribute.
   */
  set route(value) {
    this.setAttribute("route", value);
  }
  /**
   * Retrieves the value of the 'route' attribute.
   * If the 'route' attribute is not set, it returns null.
   * @returns {string|null} The value of the 'route' attribute or null if not set.
   */
  get route() {
    return this.getAttribute("route") || null;
  }
  /**
   * Returns the CSS styles for the component.
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
    this.setAttribute("active-class", "active");
    this.setAriaState({
      role: "tab",
      selected: false,
      disabled: this.hasAttribute("disabled")
    });
  }
  /**
   * Draws the component for the tab.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let slot = document.createElement("slot");
    let href = this.panel || this.route || "#";
    let a = document.createElement("a");
    a.setAttribute("href", (this.panel ? "#" : "") + href);
    a.setAttribute("part", "native");
    a.classList.add("native-tab");
    a.appendChild(slot);
    fragment.appendChild(a);
    this.slotEl = slot;
    return fragment;
  }
  /**
   * Sets up event listeners after the component is rendered.
   * // @fires wje-tab:change - Dispatched when the component is clicked, indicating a tab change.
   */
  afterDraw() {
    var _a;
    this.unbindRouterLinks = bindRouterLinks(this.parentElement, { selector: false });
    event.addListener(this, "click", "wje-tab:change");
    this.syncAriaLabel();
    (_a = this.slotEl) == null ? void 0 : _a.addEventListener("slotchange", () => this.syncAriaLabel());
  }
  /**
   * Sync aria-label on host based on slotted text when not provided.
   */
  syncAriaLabel() {
    var _a;
    if (this.hasAttribute("aria-label") || this.hasAttribute("aria-labelledby")) return;
    const text = (((_a = this.slotEl) == null ? void 0 : _a.assignedNodes({ flatten: true })) || []).map((node) => node.textContent || "").join("").trim();
    if (text) {
      this.setAttribute("aria-label", text);
    }
  }
  /**
   * Sets the roving tabindex on the internal focusable anchor.
   * @param {number} value
   */
  setRovingTabIndex(value) {
    var _a;
    const anchor = (_a = this.context) == null ? void 0 : _a.querySelector("a");
    if (!anchor) return;
    anchor.setAttribute("tabindex", String(value));
  }
  /**
   * Cleans up before the component is disconnected.
   */
  beforeDisconnect() {
    var _a;
    (_a = this.unbindRouterLinks) == null ? void 0 : _a.call(this);
  }
}
Tab.define("wje-tab", Tab);
export {
  Tab as default
};
//# sourceMappingURL=wje-tab.js.map
