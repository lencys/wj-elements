import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

export class Route extends WJElement {
    constructor() {
        super();
    }

    className = "Route";

    static get observedAttributes() {
        return [];
    }
}

customElements.get("wj-route") || window.customElements.define("wj-route", Route);