import { default as WJElement } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

export default class Breadcrumbs extends WJElement {
    constructor() {
        super();

        this.last = false;
    }

    className = "Breadcrumbs";

    static get cssStyleSheet() {
        return styles;
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    draw(context, store, params) {
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
        // ak je praznde pole tak to ukoncime
        if(breadcrumbs.length === 0)
            return;

        let breadcrumb = breadcrumbs.findLast(e => e);

        breadcrumb.setAttribute("last", true);

        const shouldCollapse = maxItems !== undefined && breadcrumbs.length > maxItems && itemsBeforeCollapse + itemsAfterCollapse <= maxItems;

        if (shouldCollapse) {
            breadcrumbs.forEach((breadcrumb, index) => {
                if (index === itemsBeforeCollapse) {
                    breadcrumb.setAttribute("show-collapsed-indicator", true);
                }

                if (index >= itemsBeforeCollapse && index < breadcrumbs.length - itemsAfterCollapse) {
                    breadcrumb.setAttribute("collapsed", true);
                }
            });
        }
    }

    getBreadcrumbs() {
        return Array.from(this.querySelectorAll('wj-breadcrumb')) || [];
    }
}