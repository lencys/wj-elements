import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Breadcrumb extends WJElement {
    constructor() {
        super();

        this._showSeparator = true;
    }

    get showSeparator() {
        return this._showSeparator;
    }
    set showSeparator(value) {
        this._showSeparator = value;
    }

    className = "Breadcrumb";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return ["show-collapsed-indicator", "collapsed", "last"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "collapsed") {
            if(WjElementUtils.stringToBoolean(newValue))
                this.classList.add("collapsed");
        } else if (name === "show-collapsed-indicator") {
            if(WjElementUtils.stringToBoolean(newValue))
                this.showCollapsedIndicator = true;
        } else if (name === "last") {
            this.active = WjElementUtils.stringToBoolean(newValue);
            this.showSeparator = !WjElementUtils.stringToBoolean(newValue);
        }
        return  false;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("a");
        native.setAttribute("href", this.href);
        native.classList.add("native-breadcrumb");
        if(this.active)
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

        if(this.showCollapsedIndicator) {
            // pridame bbutton za native element
            fragment.appendChild(this.drawCollapsedIndicator());

            // removneme collapsed z host element
            this.classList.remove("collapsed");

            // skryjeme native element
            native.classList.add("hidden");
        }

        if(this.showSeparator) {
            let separator = document.createElement("span");
            separator.classList.add("separator");
            separator.setAttribute("part", "separator");


            if(WjElementUtils.hasSlot(this, "separator")) {
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

    drawCollapsedIndicator(){
        let collapsedIndicator = document.createElement("button");
        collapsedIndicator.setAttribute("aria-label", "Show more breadcrumbs");
        collapsedIndicator.setAttribute("part", "collapsed-indicator");
        collapsedIndicator.innerHTML = `<wj-icon name="ellipsis"></wj-icon>`;
        collapsedIndicator.addEventListener("click", (e) => {
            this.native.classList.remove("hidden");
            collapsedIndicator.remove();
            this.parentElement.querySelectorAll("wj-breadcrumb").forEach((e) => {
                e.classList.remove("collapsed");
            });
        });

        return collapsedIndicator;
    }
}

customElements.get("wj-breadcrumb") || window.customElements.define("wj-breadcrumb", Breadcrumb);