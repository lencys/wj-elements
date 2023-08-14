import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";
import { getName, getUrl, getSvgContent, iconContent } from "./service/service.js";

import styles from "./scss/styles.scss?inline";

const template = document.createElement('template');

template.innerHTML = `<style>
	${styles}
</style>`;
export class Icon extends WJElement {
    constructor() {
        super(template);
    }

    set color(value) {
        this.setAttribute("color", value);
    }

    get color() {
        return this.getAttribute("color");
    }

    set name(value) {
        this.setAttribute("name", value);
    }

    get name() {
        return this.getAttribute("name");
    }

    set size(value) {
        this.setAttribute("size", "");
    }

    get size() {
        return this.getAttribute("size");
    }

    className = "Icon";
    static get observedAttributes() {
        return [];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    beforeDraw(context, store, params) {
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let element = document.createElement("div");
        element.classList.add("icon-inner");
        let url = getUrl(this);
        getSvgContent(url).then((svgContent) => {
            element.innerHTML = iconContent.get(url);
        });

        if(this.color)
            this.classList.add("wj-color-" + this.color, "wj-color");

        // if(this.name)

        if(this.size)
            this.classList.add("wj-size", "wj-size-" + this.size);

        fragment.appendChild(element);

        return fragment;
    }

    afterDraw(context, store, params) {
        // let req = fetch("../../assets/img/icons/svgs/brands/yelp.svg").then((rsp) => {
        //     if (rsp.ok) {
        //         return rsp.text().then((svgContent) => {
        //             console.log("SVG", svgContent);
        //             // if (svgContent && sanitize !== false) {
        //             //     svgContent = validateContent(svgContent);
        //             // }
        //         });
        //     }
        // });
    }
}

customElements.get("wj-icon") || window.customElements.define("wj-icon", Icon);