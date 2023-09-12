import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Breadcrumb extends WJElement {
    constructor() {
        super();

        this._showSeparator = true;
        this._collapsedVariant = this.parentElement?.collapsedVariant || "BUTTON";
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
        // native.setAttribute("route", this.route);
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
            // pridame button za native element
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
        let collapsedIndicator = null;

        if(this.collapsedVariant === "DROPDOWN") {
            collapsedIndicator = this.collapseDropdown();
        } else {
            collapsedIndicator = this.collapseButton();
        }

        return collapsedIndicator;
    }

    collapseDropdown(){
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

    collapseButton(){
        console.log("BUTTON");
        let button = document.createElement("button");
        button.setAttribute("aria-label", "Show more breadcrumbs");
        button.setAttribute("part", "collapsed-indicator");
        button.innerHTML = `<wj-icon name="ellipsis"></wj-icon>`;
        button.addEventListener("click", (e) => {
            this.native.classList.remove("hidden");
            button.remove();
            this.parentElement.querySelectorAll("wj-breadcrumb").forEach((e) => {
                e.classList.remove("collapsed");
            });
        });
        return button;
    }
}

customElements.get("wj-breadcrumb") || window.customElements.define("wj-breadcrumb", Breadcrumb);