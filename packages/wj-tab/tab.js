import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export class Tab extends WJElement {
    constructor() {
        super();

        this.last = false;
    }

    className = "Tab";

    static get cssStyleSheet() {
        return styles;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let a = document.createElement("a");
        a.setAttribute("href", "#" + this.panel);
        a.innerHTML = this.innerHTML;
        a.addEventListener("click", (e) => {
// e.stopPropagation();
e.preventDefault()
            // tabnav
            //   .querySelector(':scope a[active]')
            //   .removeAttribute('active')
            console.log(this);
            // console.log(this.parent.querySelectorAll("wj-tab"));
            // this.parent.querySelectorAll("wj-tab").forEach((el) => {
            //     el.removeAttribute("active");
            // });
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