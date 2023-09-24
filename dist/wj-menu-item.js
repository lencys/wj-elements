var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { WjElementUtils } from "./wj-element.js";
import "./wj-store.js";
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Menu Item ]\n*/\n:host {\n  --submenu-offset: -2px;\n  --wj-menu-item-padding-top: .5rem;\n  --wj-menu-item-padding-bottom: .5rem;\n  display: block;\n}\n:host .native-menu-item {\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: var(--wj-color-neutral-700);\n  padding-top: var(--wj-menu-item-padding-top);\n  padding-bottom: var(--wj-menu-item-padding-bottom);\n  transition: var(--wj-transition-fast) fill;\n  user-select: none;\n  white-space: nowrap;\n  cursor: pointer;\n}\n:host .native-menu-item:hover, :host .native-menu-item:focus {\n  color: #4b4b4b;\n  background-color: #f4f4f4 !important;\n}\n:host .native-menu-item:active {\n  color: #4b4b4b;\n  background-color: #f4f4f4 !important;\n}\n:host .native-menu-item .label {\n  flex: 1 1 auto;\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n:host .native-menu-item .check-icon {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.5rem;\n  visibility: hidden;\n}\n:host .native-menu-item .check-icon.checked {\n  visibility: visible;\n}\n:host .native-menu-item .submenu-icon {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.5rem;\n  visibility: hidden;\n}\n:host .native-menu-item.has-submenu .submenu-icon {\n  visibility: visible;\n}\n:host .native-menu-item.expanded-submenu {\n  color: #4b4b4b;\n  background-color: #f4f4f4 !important;\n}\n:host .native-menu-item.expanded-submenu:hover {\n  color: #4b4b4b;\n  background-color: #f4f4f4 !important;\n}\n:host(:focus-visible) {\n  outline: none;\n}\n::slotted([slot=start]) {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  margin-inline-end: 0.5rem;\n}\n::slotted([slot=end]) {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  margin-inline-start: 0.5rem;\n}\n::slotted([slot=submenu]) {\n  background: white;\n}\n.menu-item--submenu-expanded {\n  background-color: var(--sl-color-neutral-100);\n  color: var(--sl-color-neutral-1000);\n}";
class MenuItem extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "MenuItem");
    this.hasSubmenu = WjElementUtils.hasSlot(this, "submenu");
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
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-menu-item");
    native.setAttribute("id", "anchor");
    if (this.hasSubmenu)
      native.innerHTML = `<wj-popup anchor="anchor" manual placement="right-start"><slot name="submenu"></slot></wj-popup>`;
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
    let submenutIcon = document.createElement("span");
    submenutIcon.classList.add("submenu-icon");
    submenutIcon.innerHTML = `<wj-icon name="chevron-right"></wj-icon>`;
    this.hasSubmenu ? native.classList.add("has-submenu") : native.classList.remove("has-submenu");
    native.appendChild(checkedIcon);
    native.appendChild(start);
    native.appendChild(slot);
    native.appendChild(end);
    native.appendChild(submenutIcon);
    this.native = native;
    fragment.appendChild(native);
    return fragment;
  }
  afterDraw() {
    if (this.hasSubmenu) {
      this.addEventListener("mouseover", (e) => {
        this.tabIndex = "-1";
        this.focus();
        this.native.querySelector("wj-popup").setAttribute("active", "true");
        this.native.classList.add("expanded-submenu");
      });
      this.addEventListener("mouseout", (e) => {
        this.tabIndex = "0";
        this.native.querySelector("wj-popup").removeAttribute("active");
        this.native.classList.remove("expanded-submenu");
      });
    }
  }
}
customElements.get("wj-menu-item") || window.customElements.define("wj-menu-item", MenuItem);
export {
  MenuItem
};
