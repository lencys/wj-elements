import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

export default class Route extends WJElement {
    constructor() {
        super();
    }

    className = "Route";

    static get observedAttributes() {
        return [];
    }
}