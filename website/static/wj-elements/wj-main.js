var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { WjElementUtils, event } from "./wj-element.js";
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
import { MenuLabel } from "./wj-menu-label.js";
import { Popup } from "./wj-popup.js";
import { ProgressBar } from "./wj-progress-bar.js";
import { Route } from "./wj-route.js";
import { RouterLink } from "./wj-router-link.js";
import "./wj-router-outlet.js";
import { Row } from "./wj-row.js";
import { Slider } from "./wj-slider.js";
import { Table } from "./wj-table.js";
import { Thumbnail } from "./wj-thumbnail.js";
import { Toast } from "./wj-toast.js";
import { Toggle } from "./wj-toggle.js";
import "https://moment.github.io/luxon/es6/luxon.min.js?v=@@version@@";
import "https://oss.sheetjs.com/sheetjs/xlsx.full.min.js?v=@@version@@";
import "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js?v=@@version@@";
import "https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.20/jspdf.plugin.autotable.min.js?v=@@version@@";
const global = "";
const styles$b = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Breadcrumbs ]\n*/\n:host {\n  --wj-breadcrumb-a: rgba(33, 33, 33, 0.81);\n  --wj-breadcrumb-a-hover: rgba(33, 33, 33, 0.62);\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  line-height: 1.5;\n}\n:host(.collapsed) {\n  display: none;\n}\n.native-breadcrumb {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  outline: none;\n  background: inherit;\n  padding: 0.25rem 0.75rem;\n  color: var(--wj-breadcrumb-a);\n  text-decoration: none;\n}\n.native-breadcrumb.hidden {\n  display: none;\n}\n.native-breadcrumb.active {\n  font-weight: bold;\n}\n.native-breadcrumb:hover {\n  color: var(--wj-breadcrumb-a-hover);\n}\nbutton {\n  margin-inline: 0.75rem;\n  border: 0 solid transparent;\n  border-radius: 3px;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.separator {\n  display: inline-flex;\n  align-items: center;\n}\n::slotted([slot=start]) {\n  margin-inline: 0 0.5rem;\n}\n::slotted([slot=end]) {\n  margin-inline: 0.5rem 0;\n}";
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
    return styles$b;
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
const styles$a = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Breadcrumbs ]\n*/\n:host {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}";
class Breadcrumbs extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Breadcrumbs");
    this.last = false;
  }
  static get cssStyleSheet() {
    return styles$a;
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
const styles$9 = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Button Group ]\n*/\n:host {\n  display: inline-block;\n}\n:host .native-button-group {\n  display: flex;\n  flex-wrap: nowrap;\n  line-height: 1;\n}\n:host slot {\n  display: contents;\n}\n::slotted(wj-button) {\n  margin: 0;\n}";
const template$1 = document.createElement("template");
template$1.innerHTML = `<style>
	${styles$9}
</style>`;
class ButtonGroup extends WJElement {
  constructor() {
    super(template$1);
    __publicField(this, "className", "Chip");
  }
  set active(value) {
    this.setAttribute("active", "");
  }
  get active() {
    return this.hasAttribute("active");
  }
  set disabled(value) {
    this.setAttribute("disabled", "");
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  set fill(value) {
    this.setAttribute("fill", value);
  }
  get fill() {
    return this.getAttribute("fill") || "solid";
  }
  set outline(value) {
    this.setAttribute("outline", "");
  }
  get outline() {
    return this.hasAttribute("outline");
  }
  set size(value) {
    this.setAttribute("size", value);
  }
  get size() {
    return this.getAttribute("size");
  }
  set round(value) {
    this.setAttribute("round", "");
  }
  get round() {
    return this.hasAttribute("round");
  }
  set dialog(value) {
    this.setAttribute("dialog", value);
  }
  get dialog() {
    return this.getAttribute("dialog");
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store2, params) {
    let fragment = document.createDocumentFragment();
    let element = document.createElement("div");
    element.classList.add("native-button-group");
    element.setAttribute("part", "native");
    this.slotElement = document.createElement("slot");
    console.log("SLOT:", this.slotElement);
    element.appendChild(this.slotElement);
    fragment.appendChild(element);
    return fragment;
  }
  afterDraw(context, store2, params) {
    console.log(this.slotElement);
    const slottedElements = [...this.slotElement.assignedElements({ flatten: true })];
    console.log("SLOTTED ELEMENTS:", slottedElements);
    slottedElements.forEach((el) => {
      let index = slottedElements.indexOf(el);
      let button = this.findButton(el);
      console.log("BUTTON:", button);
      if (button) {
        button.classList.add("wj-button-group-button");
        button.classList.toggle("wj-button-group-first", index === 0);
        button.classList.toggle("wj-button-group-inner", index > 0 && index < slottedElements.length - 1);
        button.classList.toggle("wj-button-group-last", index === slottedElements.length - 1);
      }
    });
  }
  findButton(el) {
    const selector = "wj-button";
    return el.closest(selector) ?? el.querySelector(selector);
  }
}
customElements.get("wj-button-group") || window.customElements.define("wj-button-group", ButtonGroup);
const styles$8 = ":host {\n  color: red;\n}";
const template = document.createElement("template");
template.innerHTML = `<style>
	${styles$8}
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
const styles$7 = '/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Checkbox ]\n*/\n:host {\n  --wj-checkbox-margin-top: 0;\n  --wj-checkbox-margin-bottom: .5rem;\n  --wj-checkbox-margin-inline: 0;\n  display: block;\n  margin-top: var(--wj-checkbox-margin-top);\n  margin-bottom: var(--wj-checkbox-margin-bottom);\n  margin-inline: var(--wj-checkbox-margin-inline);\n  line-height: 100%;\n  padding-left: 0px;\n}\n:host label {\n  display: inline-block;\n  cursor: pointer;\n  position: relative;\n  padding-left: 25px;\n  min-width: 16px;\n  min-height: 16px;\n  margin-bottom: 0;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Old versions of Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */\n}\n:host label:before {\n  content: "";\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  left: 0;\n  -webkit-box-sizing: inherit;\n  box-sizing: border-box;\n  background-color: #fff;\n  border: 1px solid #c9c9c9;\n}\n.native-checkbox label {\n  transition: border 140ms linear 0s, color 140ms linear 0s, background-color 140ms linear 0s;\n}\n.native-checkbox label:hover {\n  color: #212121;\n}\n.native-checkbox label:before {\n  border-radius: 3px;\n  transition: border 140ms linear 0s, color 140ms linear 0s, background-color 140ms linear 0s;\n}\n.native-checkbox input[type=checkbox] {\n  position: absolute;\n  margin: 0;\n  z-index: -1;\n  width: 16px;\n  height: 16px;\n  opacity: 0;\n  display: none;\n}\n.native-checkbox input[type=checkbox] + label::after {\n  content: "";\n  position: absolute;\n  left: 0px;\n  border-right: 0 solid transparent;\n  border-bottom: 0 solid transparent;\n  width: 16px;\n  height: 16px;\n  overflow: hidden;\n}\n.native-checkbox.checkbox-circle label:after {\n  border-radius: 99px;\n}\n.native-checkbox.checkbox-circle label:before {\n  border-radius: 99px;\n}\n.native-checkbox input[type=checkbox]:checked + label::after {\n  content: "";\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAQAgMAAADsa5zLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTHBwcG9vb3BwcBFjhIYAAAAEdFJOUwBG9tQE3MceAAAAVUlEQVQoz2NgGLKA0QGIDwDxBSCeAMEYgAWI2YCK2CagYgwgDcRSDhgYbAkKzsSKGdgakCyY6ADES7BiiCkgJ4PYyybgxAhQAsRZDrgxCpDEg4cAAAAp2ibhZRGLHgAAAABJRU5ErkJggg==") left center;\n  background-size: 160px 16px;\n  background-repeat: no-repeat;\n  animation-name: checkbox-check;\n  animation-duration: 320ms;\n  animation-timing-function: steps(9);\n  animation-fill-mode: forwards;\n  animation-iteration-count: 1;\n}\n.native-checkbox input[type=checkbox]:hover:active:not(:checked) + label:before {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n.native-checkbox input[type=checkbox]:focus + label {\n  color: #212121;\n}\n.native-checkbox input[type=checkbox]:focus + label:before {\n  outline: none !important;\n  box-shadow: 0 0 0 0px #78c8fe;\n}\n.native-checkbox input[type=checkbox][disabled] + label {\n  cursor: not-allowed !important;\n  color: #4b4b4b;\n  opacity: 0.58;\n}\n.native-checkbox input[type=checkbox][disabled] + label:before {\n  cursor: not-allowed !important;\n  background: #ececec;\n}\n.native-checkbox input[type=checkbox]:indeterminate + label:after {\n  background: none;\n  background-color: #4b4b4b;\n  width: 10px;\n  height: 2px;\n  top: 6px;\n  margin: 3px;\n  border-radius: 2px;\n}\n.native-checkbox.right label {\n  padding-left: 0px;\n  padding-right: 26px;\n}\n.native-checkbox.right label:before {\n  right: 0px;\n  left: auto;\n}\n.native-checkbox.right input[type=checkbox]:checked + label {\n  position: relative;\n}\n.native-checkbox.right input[type=checkbox]:checked + label::after {\n  position: absolute;\n  right: 0px;\n  left: auto;\n}\n.success input[type=checkbox]:checked + label:before, .success input[type=checkbox]:indeterminate + label:before {\n  border-color: #19AD79;\n  background-color: #19AD79;\n}\n.primary input[type=checkbox]:checked + label:before, .primary input[type=checkbox]:indeterminate + label:before {\n  border-color: #7252D3;\n  background-color: #7252D3;\n}\n.complete input[type=checkbox]:checked + label:before, .complete input[type=checkbox]:indeterminate + label:before {\n  border-color: #0072EC;\n  background-color: #0072EC;\n}\n.warning input[type=checkbox]:checked + label:before, .warning input[type=checkbox]:indeterminate + label:before {\n  border-color: #FFd945;\n  background-color: #FFd945;\n}\n.danger input[type=checkbox]:checked + label:before, .danger input[type=checkbox]:indeterminate + label:before {\n  border-color: #D83C31;\n  background-color: #D83C31;\n}\n.info input[type=checkbox]:checked + label:before, .info input[type=checkbox]:indeterminate + label:before {\n  border-color: #3B4752;\n  background-color: #3B4752;\n}\n.info input[type=checkbox]:checked + label::after, .danger input[type=checkbox]:checked + label::after, .complete input[type=checkbox]:checked + label::after, .primary input[type=checkbox]:checked + label::after, .success input[type=checkbox]:checked + label::after {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAQAgMAAADsa5zLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUdwTP///////////waf0AoAAAAEdFJOUwBG9tQE3MceAAAAVUlEQVQoz2NgGLKA0QGIDwDxBSCeAMEYgAWI2YCK2CagYgwgDcRSDhgYbAkKzsSKGdgakCyY6ADES7BiiCkgJ4PYyybgxAhQAsRZDrgxCpDEg4cAAAAp2ibhZRGLHgAAAABJRU5ErkJggg==") left center;\n}\n.info input[type=checkbox]:indeterminate + label::after, .danger input[type=checkbox]:indeterminate + label::after, .complete input[type=checkbox]:indeterminate + label::after, .primary input[type=checkbox]:indeterminate + label::after, .success input[type=checkbox]:indeterminate + label::after {\n  background-color: #fff;\n}\n@keyframes shrink-bounce {\n  0% {\n    transform: scale(1);\n  }\n  33% {\n    transform: scale(0.85);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes checkbox-check {\n  0% {\n    background-position: 0px;\n  }\n  100% {\n    background-position: -144px;\n  }\n}\n/* hide focus style if not from keyboard navigation */\n.js-focus-visible .native-checkbox input[type=checkbox]:focus:not(.focus-visible) + label:before {\n  box-shadow: none;\n}\ninput[type=checkbox] {\n  accent-color: #7252D3 !important;\n  font-size: 50px;\n}';
class Checkbox extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Checkbox");
    __publicField(this, "inputEvent", (e) => {
      this.checked = e.target.checked;
    });
    this._checked = false;
  }
  set checked(value) {
    this._checked = value;
    if (value)
      this.setAttribute("checked", "");
    else
      this.removeAttribute("checked");
  }
  get checked() {
    return this._checked;
  }
  static get cssStyleSheet() {
    return styles$7;
  }
  static get observedAttributes() {
    return ["checked"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store2, params) {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-checkbox");
    if (this.variant === "circle")
      native.classList.add("checkbox-circle");
    if (this.color)
      native.classList.add(this.color);
    this.input = document.createElement("input");
    this.input.type = "checkbox";
    this.input.id = "checkbox";
    this.input.name = this.name = "checkbox";
    this.input.checked = this.hasAttribute("checked");
    this.input.disabled = this.hasAttribute("disabled");
    this.input.indeterminate = this.hasAttribute("indeterminate");
    let label = document.createElement("label");
    label.htmlFor = "checkbox";
    label.innerHTML = "<slot></slot>";
    native.appendChild(this.input);
    native.appendChild(label);
    fragment.appendChild(native);
    return fragment;
  }
  afterDraw() {
    event.addListener(this, "click", "wj:checkbox:change");
    event.addListener(this, "click", "wj:checkbox:input");
  }
  disconnectedCallback() {
    event.removeElement(this);
  }
}
customElements.get("wj-checkbox") || window.customElements.define("wj-checkbox", Checkbox);
const styles$6 = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Tab ]\n*/\n:host {\n  display: block;\n}\n:host a {\n  scroll-snap-align: start;\n  display: inline-flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 0.8rem;\n  color: var(--text-color);\n  font-weight: bold;\n  text-decoration: none;\n  padding: var(--space-2) var(--space-3);\n}\n:host a > svg {\n  inline-size: 1.5em;\n  pointer-events: none;\n}\n:host a:hover {\n  background: hsl(var(--accent)/5%);\n}\n:host a:focus {\n  outline-offset: -0.5ch;\n}\n@media (prefers-reduced-motion: reduce) {\n  /*\n    - swap to border-bottom styles\n    - transition colors\n    - hide the animated .indicator\n  */\n  a {\n    border-block-end: var(--indicator-size) solid hsl(var(--accent)/0%);\n    transition: color 0.7s ease, border-color 0.5s ease;\n  }\n  a:matches(:target, :active, [active]) {\n    color: var(--text-active-color);\n    border-block-end-color: hsl(var(--accent));\n  }\n  .snap-indicator {\n    visibility: hidden;\n  }\n}";
class Tab extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Tab");
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
const styles$5 = ".native-tab-group {\n  --hue: 328deg;\n  --accent: var(--hue) 100% 54%;\n  --indicator-size: 2px;\n  --space-1: .5rem;\n  --space-2: 1rem;\n  --space-3: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n}\n.native-tab-group :matches(header, nav, section, article, a) {\n  outline-color: hsl(var(--accent));\n  outline-offset: -5px;\n}\n\n.scroll-snap-x {\n  overflow: auto hidden;\n  overscroll-behavior-x: contain;\n  scroll-snap-type: x mandatory;\n}\n@media (prefers-reduced-motion: no-preference) {\n  .scroll-snap-x {\n    scroll-behavior: smooth;\n  }\n}\n@media (hover: none) {\n  .scroll-snap-x {\n    scrollbar-width: none;\n  }\n  .scroll-snap-x::-webkit-scrollbar {\n    width: 0;\n    height: 0;\n  }\n}\n\n.native-tab-group > header {\n  --text-color: hsl(var(--hue) 5% 40%);\n  --text-active-color: hsl(var(--hue) 20% 10%);\n  flex-shrink: 0;\n  min-block-size: fit-content;\n  display: flex;\n  flex-direction: column;\n}\n.native-tab-group > header > nav {\n  display: flex;\n}\n.native-tab-group > header > .snap-indicator {\n  inline-size: 0;\n  block-size: var(--indicator-size);\n  border-radius: var(--indicator-size);\n  background: hsl(var(--accent));\n}\n\n.native-tab-group > section {\n  block-size: 100%;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 100%;\n}\n.native-tab-group > section > article {\n  scroll-snap-align: start;\n  overflow-y: auto;\n  overscroll-behavior-y: contain;\n  padding: var(--space-2) var(--space-3);\n}";
class TabGroup extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "TabGroup");
  }
  static get cssStyleSheet() {
    return styles$5;
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
const styles$4 = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Breadcrumbs ]\n*/\n:host {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}";
class TabPanel extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "TabPanel");
  }
  static get cssStyleSheet() {
    return styles$4;
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
const styles$3 = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Toolbar ]\n*/\n:host {\n  --wj-toolbar-backcolor: #fff;\n  --wj-toolbar-min-height: 70px;\n  --wj-toolbar-padding-top: 1rem;\n  --wj-toolbar-padding-bottom: 1rem;\n  --wj-toolbar-padding-inline: 1.5rem;\n  --wj-toolbar-border-color: rgba(33, 33, 33, 0.14);\n  width: 100%;\n  height: var(--wj-toolbar-height);\n}\n.native-toolbar {\n  background-color: var(--wj-toolbar-backcolor);\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  border-bottom: 1px solid var(--wj-toolbar-border-color);\n  padding-inline: var(--wj-toolbar-padding-inline);\n  padding-top: var(--wj-toolbar-padding-top);\n  padding-bottom: var(--wj-toolbar-padding-bottom);\n  box-shadow: 0 10px 30px 0 rgba(82, 63, 105, 0.05);\n}\n::slotted {\n  grid-column: span 4;\n}\n::slotted([slot=start]) {\n  margin-right: auto;\n}";
class Toolbar extends withRouterLinks(WJElement) {
  constructor() {
    super();
    __publicField(this, "className", "Toolbar");
  }
  static get cssStyleSheet() {
    return styles$3;
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
const styles$2 = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Toolbar ]\n*/\n:host {\n  display: flex;\n}";
class ToolbarAction extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "ToolbarAction");
  }
  static get cssStyleSheet() {
    return styles$2;
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
const styles$1 = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ Tooltip ]\n*/\n:host {\n  --arrow-size: 7px;\n  --arrow-color: #000000;\n}\n.native-tooltip {\n  display: block;\n  padding: 5px 0.5rem;\n  color: #FFFFFF;\n  background-color: var(--arrow-color);\n  font-weight: normal;\n  font-size: 0.75rem !important;\n  border-radius: 4px;\n  line-height: 1;\n  box-sizing: border-box;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);\n}\n.arrow {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: black;\n  transform: rotate(45deg);\n}";
class Tooltip extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Tooltip");
  }
  static get cssStyleSheet() {
    return styles$1;
  }
  static get observedAttributes() {
    return ["active"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store2, params) {
    let fragment = document.createDocumentFragment();
    let popup = document.createElement("wj-popup");
    popup.setAttribute("placement", this.placement || "top");
    popup.setAttribute("offset", this.offset || "0");
    let slot = document.createElement("slot");
    slot.setAttribute("slot", "anchor");
    let arrow = document.createElement("div");
    arrow.classList.add("arrow");
    arrow.setAttribute("slot", "arrow");
    let native = document.createElement("div");
    native.classList.add("native-tooltip");
    native.innerHTML = this.content;
    popup.appendChild(slot);
    popup.appendChild(arrow);
    popup.appendChild(native);
    fragment.appendChild(popup);
    return fragment;
  }
}
customElements.get("wj-tooltip") || window.customElements.define("wj-tooltip", Tooltip);
const styles = "/*!\n* direction.scss\n*/\n/* Skeleton Variables */\n/*\n[ VisuallyHidden ]\n*/\n:host(:not(:focus-within)) {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  clip: rect(0 0 0 0) !important;\n  clip-path: inset(50%) !important;\n  border: none !important;\n  overflow: hidden !important;\n  white-space: nowrap !important;\n  padding: 0 !important;\n}";
class VisuallyHidden extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "VisuallyHidden");
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
    let slot = document.createElement("slot");
    fragment.appendChild(slot);
    return fragment;
  }
}
customElements.get("wj-visually-hidden") || window.customElements.define("wj-visually-hidden", VisuallyHidden);
export {
  Avatar,
  Badge,
  Breadcrumb,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardControls,
  CardHeader,
  CardSubtitle,
  CardTitle,
  Checkbox,
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
  MenuLabel,
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
  Table,
  Thumbnail,
  Toast,
  Toggle,
  Toolbar,
  ToolbarAction,
  Tooltip,
  VisuallyHidden,
  WJElement,
  b as bindRouterLinks,
  defaultStoreActions,
  store,
  withRouterLinks
};
