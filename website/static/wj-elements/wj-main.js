var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { WjElementUtils } from "./wj-element.js";
import { defaultStoreActions, store } from "./wj-store.js";
import { w as withRouterLinks } from "./router-05bc6a4a.js";
import { R, b } from "./router-05bc6a4a.js";
import { Avatar } from "./wj-avatar.js";
import { Badge } from "./wj-badge.js";
import { Button } from "./wj-button.js";
import { Card } from "./wj-card.js";
import { CardContent } from "./wj-card-content.js";
import { CardControls } from "./wj-card-controls.js";
import { CardHeader } from "./wj-card-header.js";
import { CardSubtitle } from "./wj-card-subtitle.js";
import { CardTitle } from "./wj-card-title.js";
import { Col } from "./wj-col.js";
import { Dialog } from "./wj-dialog.js";
import { Divider } from "./wj-divider.js";
import { Dropdown } from "./wj-dropdown.js";
import "./wj-form.js";
import { Grid } from "./wj-grid.js";
import { Chip } from "./wj-chip.js";
import { Icon } from "./wj-icon.js";
import { Img } from "./wj-img.js";
import { InfiniteScroll } from "./wj-infinite-scroll.js";
import { Input } from "./wj-input.js";
import { Item } from "./wj-item.js";
import { Label } from "./wj-label.js";
import { List } from "./wj-list.js";
import { Menu } from "./wj-menu.js";
import { MenuItem } from "./wj-menu-item.js";
import { Popup } from "./wj-popup.js";
import { ProgressBar } from "./wj-progress-bar.js";
import { Route } from "./wj-route.js";
import { RouterLink } from "./wj-router-link.js";
import "./wj-router-outlet.js";
import { Row } from "./wj-row.js";
import { Slider } from "./wj-slider.js";
import { Thumbnail } from "./wj-thumbnail.js";
import { Toast } from "./wj-toast.js";
import { Toggle } from "./wj-toggle.js";
const global = "";
const styles$7 = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Breadcrumbs ]\n*/\n:host {\n  --wj-breadcrumb-a: rgba(33, 33, 33, 0.81);\n  --wj-breadcrumb-a-hover: rgba(33, 33, 33, 0.62);\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  line-height: 1.5;\n}\n:host(.collapsed) {\n  display: none;\n}\n.native-breadcrumb {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  outline: none;\n  background: inherit;\n  padding: 0.25rem 0.75rem;\n  color: var(--wj-breadcrumb-a);\n  text-decoration: none;\n}\n.native-breadcrumb.hidden {\n  display: none;\n}\n.native-breadcrumb.active {\n  font-weight: bold;\n}\n.native-breadcrumb:hover {\n  color: var(--wj-breadcrumb-a-hover);\n}\nbutton {\n  margin-inline: 0.75rem;\n  border: 0 solid transparent;\n  border-radius: 3px;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.separator {\n  display: inline-flex;\n  align-items: center;\n}\n::slotted([slot=start]) {\n  margin-inline: 0 0.5rem;\n}\n::slotted([slot=end]) {\n  margin-inline: 0.5rem 0;\n}";
class Breadcrumb extends WJElement {
  constructor() {
    var _a;
    super();
    __publicField(this, "className", "Breadcrumb");
    this._showSeparator = true;
    this._collapsedVariant = ((_a = this.parentElement) == null ? void 0 : _a.collapsedVariant) || "BUTTON";
  }
  get showSeparator() {
    return this._showSeparator;
  }
  set showSeparator(value) {
    this._showSeparator = value;
  }
  get collapsedVariant() {
    return this._collapsedVariant.toUpperCase();
  }
  set collapsedVariant(value) {
    this._collapsedVariant = value || this.parentElement.collapsedVariant;
  }
  static get cssStyleSheet() {
    return styles$7;
  }
  static get observedAttributes() {
    return ["show-collapsed-indicator", "collapsed", "last"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "collapsed") {
      if (WjElementUtils.stringToBoolean(newValue))
        this.classList.add("collapsed");
    } else if (name === "show-collapsed-indicator") {
      if (WjElementUtils.stringToBoolean(newValue))
        this.showCollapsedIndicator = true;
    } else if (name === "last") {
      this.active = WjElementUtils.stringToBoolean(newValue);
      this.showSeparator = !WjElementUtils.stringToBoolean(newValue);
    }
    return false;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store2, params) {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("a");
    native.classList.add("native-breadcrumb");
    if (this.active)
      native.classList.add("active");
    let slot = document.createElement("slot");
    let start = document.createElement("slot");
    start.setAttribute("name", "start");
    let end = document.createElement("slot");
    end.setAttribute("name", "end");
    native.appendChild(start);
    native.appendChild(slot);
    native.appendChild(end);
    fragment.appendChild(native);
    if (this.showCollapsedIndicator) {
      fragment.appendChild(this.drawCollapsedIndicator());
      this.classList.remove("collapsed");
      native.classList.add("hidden");
    }
    if (this.showSeparator) {
      let separator = document.createElement("span");
      separator.classList.add("separator");
      separator.setAttribute("part", "separator");
      if (WjElementUtils.hasSlot(this, "separator")) {
        let slotSeparator = document.createElement("slot");
        slotSeparator.setAttribute("name", "separator");
        separator.appendChild(slotSeparator);
      } else {
        separator.innerHTML = `<wj-icon name=${this.separator || "angle-right"}></wj-icon>`;
      }
      fragment.appendChild(separator);
    }
    this.native = native;
    return fragment;
  }
  drawCollapsedIndicator() {
    let collapsedIndicator = null;
    if (this.collapsedVariant === "DROPDOWN") {
      collapsedIndicator = this.collapseDropdown();
    } else {
      collapsedIndicator = this.collapseButton();
    }
    return collapsedIndicator;
  }
  collapseDropdown() {
    console.log("DROPDOWN");
    let dropdown = document.createElement("wj-dropdown");
    dropdown.setAttribute("placement", "bottom");
    dropdown.setAttribute("offset", "10");
    dropdown.innerHTML = `<wj-button slot="trigger">
            <wj-icon name="ellipsis"></wj-icon>
        </wj-button>
        <wj-menu>
            <wj-menu-item>Tralala</wj-menu-item>
            <wj-button>Test 1</wj-button>
            <wj-button>Test 2</wj-button>
        </wj-menu>`;
    return dropdown;
  }
  collapseButton() {
    console.log("BUTTON");
    let button = document.createElement("button");
    button.setAttribute("aria-label", "Show more breadcrumbs");
    button.setAttribute("part", "collapsed-indicator");
    button.innerHTML = `<wj-icon name="ellipsis"></wj-icon>`;
    button.addEventListener("click", (e) => {
      this.native.classList.remove("hidden");
      button.remove();
      this.parentElement.querySelectorAll("wj-breadcrumb").forEach((e2) => {
        e2.classList.remove("collapsed");
      });
    });
    return button;
  }
}
customElements.get("wj-breadcrumb") || window.customElements.define("wj-breadcrumb", Breadcrumb);
const styles$6 = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Breadcrumbs ]\n*/\n:host {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}";
class Breadcrumbs extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Breadcrumbs");
    this.last = false;
  }
  static get cssStyleSheet() {
    return styles$6;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store2, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
  afterDraw() {
    let maxItems = +this.maxItems || 0;
    let itemsBeforeCollapse = +this.itemsBeforeCollapse || 1;
    let itemsAfterCollapse = +this.itemsAfterCollapse || 1;
    let breadcrumbs = this.getBreadcrumbs();
    let breadcrumb = breadcrumbs.findLast((e) => e);
    breadcrumb.setAttribute("last", true);
    const shouldCollapse = maxItems !== void 0 && breadcrumbs.length > maxItems && itemsBeforeCollapse + itemsAfterCollapse <= maxItems;
    if (shouldCollapse) {
      breadcrumbs.forEach((breadcrumb2, index) => {
        if (index === itemsBeforeCollapse) {
          breadcrumb2.setAttribute("show-collapsed-indicator", true);
        }
        if (index >= itemsBeforeCollapse && index < breadcrumbs.length - itemsAfterCollapse) {
          breadcrumb2.setAttribute("collapsed", true);
        }
      });
    }
  }
  getBreadcrumbs() {
    return Array.from(this.querySelectorAll("wj-breadcrumb"));
  }
}
customElements.get("wj-breadcrumbs") || window.customElements.define("wj-breadcrumbs", Breadcrumbs);
const styles$5 = ":host {\n  color: red;\n}";
const template = document.createElement("template");
template.innerHTML = `<style>
	${styles$5}
</style>`;
class ExampleElement extends WJElement {
  constructor() {
    super(template);
    __publicField(this, "className", "ExampleElement");
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
    WjElementUtils.setAttributesToElement(this, {
      "test": "test"
    });
  }
  beforeDraw(context, store2, params) {
  }
  draw(context, store2, params) {
    console.log(context, store2, params);
    let fragment = document.createDocumentFragment();
    let element = document.createElement("div");
    element.innerHTML = params.text;
    fragment.appendChild(element);
    return fragment;
  }
  afterDraw(context, store2, params) {
    console.log("afterDraw", this.params);
  }
}
customElements.get("wj-example-element") || window.customElements.define("wj-example-element", ExampleElement);
const styles$4 = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Tab ]\n*/\n:host {\n  display: block;\n}\n:host a {\n  scroll-snap-align: start;\n  display: inline-flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 0.8rem;\n  color: var(--text-color);\n  font-weight: bold;\n  text-decoration: none;\n  padding: var(--space-2) var(--space-3);\n}\n:host a > svg {\n  inline-size: 1.5em;\n  pointer-events: none;\n}\n:host a:hover {\n  background: hsl(var(--accent)/5%);\n}\n:host a:focus {\n  outline-offset: -0.5ch;\n}\n@media (prefers-reduced-motion: reduce) {\n  /*\n    - swap to border-bottom styles\n    - transition colors\n    - hide the animated .indicator\n  */\n  a {\n    border-block-end: var(--indicator-size) solid hsl(var(--accent)/0%);\n    transition: color 0.7s ease, border-color 0.5s ease;\n  }\n  a:matches(:target, :active, [active]) {\n    color: var(--text-active-color);\n    border-block-end-color: hsl(var(--accent));\n  }\n  .snap-indicator {\n    visibility: hidden;\n  }\n}";
class Tab extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Tab");
    this.last = false;
  }
  static get cssStyleSheet() {
    return styles$4;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store2, params) {
    let fragment = document.createDocumentFragment();
    let a = document.createElement("a");
    a.setAttribute("href", "#" + this.panel);
    a.innerHTML = this.innerHTML;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(this);
      this.dispatchEvent(
        new CustomEvent("wj-tab:change", {
          detail: { tab: this }
        })
      );
      this.setAttribute("active", "");
      e.target.scrollIntoView();
    });
    fragment.appendChild(a);
    return fragment;
  }
}
customElements.get("wj-tab") || window.customElements.define("wj-tab", Tab);
const styles$3 = ".native-tab-group {\n  --hue: 328deg;\n  --accent: var(--hue) 100% 54%;\n  --indicator-size: 2px;\n  --space-1: .5rem;\n  --space-2: 1rem;\n  --space-3: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n}\n.native-tab-group :matches(header, nav, section, article, a) {\n  outline-color: hsl(var(--accent));\n  outline-offset: -5px;\n}\n\n.scroll-snap-x {\n  overflow: auto hidden;\n  overscroll-behavior-x: contain;\n  scroll-snap-type: x mandatory;\n}\n@media (prefers-reduced-motion: no-preference) {\n  .scroll-snap-x {\n    scroll-behavior: smooth;\n  }\n}\n@media (hover: none) {\n  .scroll-snap-x {\n    scrollbar-width: none;\n  }\n  .scroll-snap-x::-webkit-scrollbar {\n    width: 0;\n    height: 0;\n  }\n}\n\n.native-tab-group > header {\n  --text-color: hsl(var(--hue) 5% 40%);\n  --text-active-color: hsl(var(--hue) 20% 10%);\n  flex-shrink: 0;\n  min-block-size: fit-content;\n  display: flex;\n  flex-direction: column;\n}\n.native-tab-group > header > nav {\n  display: flex;\n}\n.native-tab-group > header > .snap-indicator {\n  inline-size: 0;\n  block-size: var(--indicator-size);\n  border-radius: var(--indicator-size);\n  background: hsl(var(--accent));\n}\n\n.native-tab-group > section {\n  block-size: 100%;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 100%;\n}\n.native-tab-group > section > article {\n  scroll-snap-align: start;\n  overflow-y: auto;\n  overscroll-behavior-y: contain;\n  padding: var(--space-2) var(--space-3);\n}";
class TabGroup extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "TabGroup");
  }
  static get cssStyleSheet() {
    return styles$3;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store2, params) {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-tab-group");
    let header = document.createElement("header");
    header.classList.add("scroll-snap-x");
    let nav = document.createElement("nav");
    nav.addEventListener("wj-tab:change", (e) => {
      console.log(e);
      alert(1);
    });
    let snap = document.createElement("span");
    snap.classList.add("snap-indicator");
    let section = document.createElement("section");
    section.classList.add("scroll-snap-x");
    let slot = document.createElement("slot");
    let slotNav = document.createElement("slot");
    slotNav.setAttribute("name", "nav");
    header.appendChild(nav);
    header.appendChild(snap);
    nav.appendChild(slotNav);
    section.appendChild(slot);
    native.appendChild(header);
    native.appendChild(section);
    fragment.appendChild(native);
    return fragment;
  }
  afterDraw() {
    console.log(this.getNavAll());
  }
  getNavAll() {
    return this.context.querySelector('[name="nav"]').assignedElements();
  }
  getPanelAll() {
    return this.context.querySelector("slot").assignedElements();
  }
}
customElements.get("wj-tab-group") || window.customElements.define("wj-tab-group", TabGroup);
const styles$2 = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Breadcrumbs ]\n*/\n:host {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}";
class TabPanel extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "TabPanel");
  }
  static get cssStyleSheet() {
    return styles$2;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store2, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("slot");
    fragment.appendChild(element);
    return fragment;
  }
}
customElements.get("wj-tab-panel") || window.customElements.define("wj-tab-panel", TabPanel);
const styles$1 = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Toolbar ]\n*/\n:host {\n  --wj-toolbar-backcolor: #fff;\n  --wj-toolbar-min-height: 70px;\n  --wj-toolbar-padding-top: 1rem;\n  --wj-toolbar-padding-bottom: 1rem;\n  --wj-toolbar-padding-inline: 1.5rem;\n  --wj-toolbar-border-color: rgba(33, 33, 33, 0.14);\n  width: 100%;\n  height: var(--wj-toolbar-height);\n}\n.native-toolbar {\n  background-color: var(--wj-toolbar-backcolor);\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  border-bottom: 1px solid var(--wj-toolbar-border-color);\n  padding-inline: var(--wj-toolbar-padding-inline);\n  padding-top: var(--wj-toolbar-padding-top);\n  padding-bottom: var(--wj-toolbar-padding-bottom);\n  box-shadow: 0 10px 30px 0 rgba(82, 63, 105, 0.05);\n}\n::slotted {\n  grid-column: span 4;\n}\n::slotted([slot=start]) {\n  margin-right: auto;\n}";
class Toolbar extends withRouterLinks(WJElement) {
  constructor() {
    super();
    __publicField(this, "className", "Toolbar");
  }
  static get cssStyleSheet() {
    return styles$1;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store2, params) {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-toolbar");
    let start = document.createElement("slot");
    start.setAttribute("name", "start");
    let end = document.createElement("slot");
    end.setAttribute("name", "end");
    native.appendChild(start);
    native.appendChild(end);
    fragment.appendChild(native);
    return fragment;
  }
}
customElements.get("wj-toolbar") || window.customElements.define("wj-toolbar", Toolbar);
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Toolbar ]\n*/\n:host {\n  display: flex;\n}";
class ToolbarAction extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "ToolbarAction");
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store2, params) {
    let fragment = document.createDocumentFragment();
    let maxItems = +this.maxItems || 0;
    let actions = this.getActions();
    let slot = document.createElement("slot");
    let element = document.createElement("div");
    const shouldCollapse = maxItems !== 0 && actions.length > maxItems;
    if (shouldCollapse) {
      element = document.createElement("wj-dropdown");
    }
    element.appendChild(slot);
    fragment.appendChild(element);
    return fragment;
  }
  getActions() {
    return Array.from(this.querySelectorAll("wj-button"));
  }
}
customElements.get("wj-toolbar-action") || window.customElements.define("wj-toolbar-action", ToolbarAction);
export {
  Avatar,
  Badge,
  Breadcrumb,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardControls,
  CardHeader,
  CardSubtitle,
  CardTitle,
  Chip,
  Col,
  Dialog,
  Divider,
  Dropdown,
  ExampleElement,
  Grid,
  Icon,
  Img,
  InfiniteScroll,
  Input,
  Item,
  Label,
  List,
  Menu,
  MenuItem,
  Popup,
  ProgressBar,
  Route,
  RouterLink,
  R as Routerx,
  Row,
  Slider,
  Tab,
  TabGroup,
  TabPanel,
  Thumbnail,
  Toast,
  Toggle,
  Toolbar,
  ToolbarAction,
  WJElement,
  b as bindRouterLinks,
  defaultStoreActions,
  store,
  withRouterLinks
};
