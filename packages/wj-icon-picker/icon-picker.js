import { default as WJElement } from "../wj-element/wj-element.js";
import { InfiniteScroll } from "../wj-infinite-scroll/infinite-scroll.js";

import styles from "./scss/styles.scss?inline";

export class IconPicker extends WJElement {
    constructor() {
        super();

        this.size = 120;
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

    className = "IconPicker";

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
        this.tags =  Object.values(await this.getTags());
        this.category = this.getCategory(this.tags);
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.classList.add("native-color-picker");

        // ANCHOR
        let anchor = document.createElement("div");
        anchor.setAttribute("slot", "anchor");
        anchor.classList.add("anchor");

        // PICKER
        let picker = document.createElement("div");
        picker.classList.add("picker");

        let input = document.createElement("wj-input");
        input.classList.add("input");
        input.setAttribute("variant", "standard");
        input.value = "#ff0000";

        let name = document.createElement("div");
        name.classList.add("name");
        name.innerText = "Name:";

        let nameSpan = document.createElement("span");
        nameSpan.classList.add("name-span");
        nameSpan.innerText = "123";

        let select = document.createElement("wj-select");
        select.setAttribute("placeholder", "Category");
        select.setAttribute("variant", "standard");
        select.setAttribute("max-options", "1");
        select.setAttribute("variant", "standard");
        select.setAttribute("max-height", "200px");
        select.setAttribute("clearable", "");
        this.createOptions(select);

        let infiniteScroll = new InfiniteScroll();

        infiniteScroll.setAttribute("url", "/demo/assets/data/tags.json");
        infiniteScroll.setAttribute("placement", ".icon-items");
        infiniteScroll.setAttribute("size", this.size);
        infiniteScroll.setAttribute("height", "280px");
        infiniteScroll.innerHTML = `<div class="icon-items">
            <div class="icon-item" iterate>
                <wj-icon name="{{name}}" size="large"></wj-icon>
            </div>
        </div>`;

        // APPEND
        name.appendChild(nameSpan);

        picker.appendChild(input);
        picker.appendChild(name);
        picker.appendChild(select);
        picker.appendChild(infiniteScroll);

        // POPUP
        let popup = document.createElement("wj-popup");
        popup.setAttribute("placement", this.placement || "bottom-start");
        popup.setAttribute("offset", this.offset);
        popup.setAttribute("manual", "");
        popup.appendChild(anchor);
        popup.appendChild(picker);

        native.appendChild(popup);

        fragment.appendChild(native);

        this.popup = popup;
        this.anchor = anchor;
        this.picker = picker;
        this.infiniteScroll = infiniteScroll;

        return fragment;
    }

    afterDraw() {
        this.addEventListener("wj:popup-show", (e) => {
            this.infiniteScroll.scrollEvent();
        });

        this.infiniteScroll.setCustomData = (page) => {
            let data = Object.values(this.tags);
            let result = {
                data: data.slice(page * this.size, page * this.size + this.size),
                page: page,
                size: this.size,
                totalPages: Math.round(data.length / this.size)
            }

            return result;
        };

        this.init = false;
    }

    createItems() {
        let items = document.createElement("div");
        items.classList.add("icon-items");

        Object.values(this.tags).slice(0,200).forEach(i => {
            items.appendChild(this.createIconItem(i));
        });

        return items;
    }

    createIconItem(i) {
        let item = document.createElement("div");
        item.classList.add("icon-item");
        // item.innerText = i.name;

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
    createOptions(select) {
        this.category.forEach(i => {
            select.appendChild(this.createOption(i));
        });
    }

    getCategory(tags) {
        let category = [...new Set(tags.map(obj => obj.category))];
        return category;
    }

    async getTags() {
        const response = await fetch(`/demo/assets/data/tags.json`);
        return response.json();
    }

    disconnectedCallback() {
        this.init = false;
    }
}

customElements.get("wj-icon-picker") || window.customElements.define("wj-icon-picker", IconPicker);