var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement, { event } from "./wj-element.js";
import { InfiniteScroll } from "./wj-infinite-scroll.js";
import "./wj-tooltip.js";
const styles = "/*\n[ Wj Icon Picker ]\n*/\n:host {\n  --wj-icon-picker-radius: var(--wj-border-radius-small);\n  --wj-icon-picker-icon-size: 1.5rem;\n  --wj-icon-picker-border-width: 1px;\n  --wj-icon-picker-border-style: solid;\n  --wj-icon-picker-border-color: var(--wj-border-color);\n  --wj-icon-picker-padding: .25rem;\n  padding: 0 1rem;\n}\n\n.anchor {\n  width: var(--wj-icon-picker-icon-size);\n  height: var(--wj-icon-picker-icon-size);\n  padding: var(--wj-icon-picker-padding);\n  border-width: var(--wj-icon-picker-border-width);\n  border-style: var(--wj-icon-picker-border-style);\n  border-color: var(--wj-icon-picker-border-color);\n  box-sizing: border-box;\n  border-radius: var(--wj-icon-picker-radius);\n}\n\n.picker {\n  width: 320px;\n  height: 271px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05), 0 5px 20px rgba(0, 0, 0, 0.1);\n  border-radius: var(--wj-icon-picker-radius);\n  border-width: var(--wj-icon-picker-border-width);\n  border-style: var(--wj-icon-picker-border-style);\n  border-color: var(--wj-icon-picker-border-color);\n  overflow: auto;\n  padding: 1rem;\n  background: var(--wj-background);\n}\n\n.icon-items {\n  --icon-min-width: 2rem;\n  display: grid;\n  grid-gap: 0.5rem;\n  grid-template-columns: repeat(auto-fit, minmax(var(--icon-min-width), 1fr));\n}\n\n.icon-item {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: inherit;\n  padding: 0.25rem;\n  min-height: var(--wj-icon-picker-icon-size);\n  min-width: var(--wj-icon-picker-icon-size);\n  text-decoration: none;\n}\n.icon-item:hover {\n  border-radius: 0.25rem;\n  background: var(--wj-border-color);\n}\n\n.wj-size {\n  --wj-icon-size: 24px !important;\n}\n\nicon-item svg {\n  width: var(--wj-icon-picker-icon-size);\n  height: var(--wj-icon-picker-icon-size);\n}\n\nwj-input {\n  --wj-input-border-radius: 4px;\n  --wj-input-margin-bottom: 0;\n}\n\nwj-infinite-scroll {\n  margin-top: 1rem;\n}\n\nwj-select {\n  --wj-select-border-width: 0 0 1px 0 !important;\n  --wj-select-border-radius: 0 !important;\n  margin-bottom: 1rem;\n}\n\n.anchor wj-icon {\n  --wj-icon-size: 100% !important;\n}";
class IconPicker extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "IconPicker");
    /*
    * @description event handler pre vyhladavanie ikon
    * @param e
     */
    __publicField(this, "searchIcon", (e) => {
      this.infiniteScroll.unScrollEvent();
      this.infiniteScroll.setCustomData = (page = 0) => {
        let data = this.tags.filter((i) => i.tags.includes(e.detail.value));
        let result = {
          data,
          page,
          size: this.size,
          totalPages: Math.round(data.length / this.size)
        };
        return result;
      };
      this.clearIconsContainer();
      this.infiniteScroll.loadPages();
    });
    __publicField(this, "onClose", () => {
      this.popup.onHide();
    });
    this.size = 48;
  }
  set markerPosition(value) {
    this._markerPosition = value;
  }
  get markerPosition() {
    return this._markerPosition;
  }
  set swatches(value) {
    this.setAttribute("swatches", value.split(","));
  }
  get swatches() {
    return this._swatches;
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
  async beforeDraw() {

    this.tags = Object.values(await this.getTags());
    debugger;

    this.category = this.getCategory(this.tags);
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-color-picker");
    let anchor = document.createElement("div");
    anchor.setAttribute("slot", "anchor");
    anchor.classList.add("anchor");
    let picker = document.createElement("div");
    picker.classList.add("picker");
    let input = document.createElement("wj-input");
    input.classList.add("input");
    input.setAttribute("variant", "standard");
    input.setAttribute("placeholder", "type to filter...");
    input.setAttribute("clearable", "");
    input.addEventListener("wj-input:input", this.searchIcon);
    let infiniteScroll = new InfiniteScroll();
    infiniteScroll.setAttribute("url", "/demo/assets/data/tags.json");
    infiniteScroll.setAttribute("placement", ".icon-items");
    infiniteScroll.setAttribute("size", this.size);
    infiniteScroll.setAttribute("height", "223px");
    infiniteScroll.innerHTML = `<div class="icon-items">
            <div class="icon-item" iterate>
                <wj-tooltip content="{{name}}">
                    <wj-icon name="{{name}}" size="large"></wj-icon>
                </wj-tooltip>
            </div>
        </div>`;
    picker.appendChild(input);
    picker.appendChild(infiniteScroll);
    let popup = document.createElement("wj-popup");
    popup.setAttribute("placement", this.placement || "bottom-start");
    popup.setAttribute("offset", this.offset);
    popup.setAttribute("manual", "");
    popup.appendChild(anchor);
    popup.appendChild(picker);
    native.appendChild(popup);
    fragment.appendChild(native);
    this.popup = popup;
    this.input = input;
    this.anchor = anchor;
    this.picker = picker;
    this.infiniteScroll = infiniteScroll;
    return fragment;
  }
  afterDraw() {
    this.setupInfiniteScroll();
    this.addEventListener("wj-popup:show", (e) => {
      this.initial();
    });
    this.addEventListener("wj-input:clear", (e) => {
      this.setupInfiniteScroll();
      this.clearIconsContainer();
      this.infiniteScroll.scrollEvent();
      this.infiniteScroll.loadPages(0);
    });
    this.addEventListener("wj-infinite-scroll:click-item", (e) => {
      const icon = e.detail.context.querySelector("wj-icon");
      const name = icon.getAttribute("name");
      const object = this.tags.find((i) => i.name === name);
      const iconElement = document.createElement("wj-icon");
      iconElement.setAttribute("name", name);
      object.icon = iconElement;
      this.value = object;
      this.anchor.innerHTML = "";
      this.anchor.appendChild(iconElement);
      event.dispatchCustomEvent(this, "wj-icon-picker:select", object);
    });
    this.init = false;
  }
  initial() {
    this.infiniteScroll.scrollEvent();
  }
  setupInfiniteScroll() {
    this.infiniteScroll.setCustomData = (page = 0) => {
      let data = Object.values(this.tags);
      let result = {
        data: data.slice(page * this.size, page * this.size + this.size),
        page,
        size: this.size,
        totalPages: Math.round(data.length / this.size)
      };
      return result;
    };
  }
  createIconItem(i) {
    let item = document.createElement("div");
    item.classList.add("icon-item");
    let icon = document.createElement("wj-icon");
    icon.setAttribute("name", i.name);
    icon.classList.add("lazy-loaded-image", "lazy");
    item.appendChild(icon);
    return item;
  }
  createOption(item) {
    let option = document.createElement("wj-option");
    option.setAttribute("value", item);
    option.innerText = item;
    return option;
  }
  getCategory(tags) {
    let category = [...new Set(tags.map((obj) => obj.category))];
    return category;
  }
  async getTags() {
    const response = await fetch(`/data/tags.json`);
    return response.json();
  }
  disconnectedCallback() {
    this.init = false;
  }
  /*
  * @description vymazanie ikon z kontajnera
   */
  clearIconsContainer() {
    this.context.querySelector(".icon-items").innerHTML = "";
  }
}
customElements.get("wj-icon-picker") || window.customElements.define("wj-icon-picker", IconPicker);
export {
  IconPicker
};
