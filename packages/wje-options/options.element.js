import { default as WJElement, event } from "../wje-element/element.js";
import Option from "../wje-option/option.js";

/**
 * `Options` is a custom web component that represents a set of options.
 * It extends from `WJElement`.
 * @summary This element represents a set of options.
 * @documentation https://elements.webjet.sk/components/options
 * @status stable
 *
 * @extends {WJElement}
 *
 * @fires wje-options:load - Event fired when the options are loaded.
 *
 * @tag wje-options
 */
export default class Options extends WJElement {
    /**
     * Creates an instance of Options.
     *
     * @constructor
     */
    constructor() {
        super();
    }

    dependencies = {
        "wje-option": Option
    }

    className = "Options";

    /**
     * Returns the list of attributes to observe for changes.
     *
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Prepares the component before drawing.
     * Fetches the pages and creates the options elements.
     */
    async beforeDraw() {
        this.response = await this.getPages();

        let fragment = document.createDocumentFragment();

        this.response.forEach((item, index) => {
            let option = document.createElement("wje-option");
            option.setAttribute("value", item[this.itemValue] || item.value); // ak je itemValue, tak ho pouzije, inak sa pouzije standardne properties value
            option.innerText = item[this.itemText] || item.text; // ak je itemText, tak ho pouzije, inak sa pouzije standardne properties text
            fragment.appendChild(option);
        });

        this.parentElement.appendChild(fragment);

        event.dispatchCustomEvent(this, "wje-options:load", {}); // nepomohlo to, v ff stale je scroll hore
    }

    /**
     * Fetches the pages from the provided URL.
     *
     * @param {number} page - The page number to fetch.
     * @returns {Promise<Object>} The fetched data.
     * @throws Will throw an error if the response is not ok.
     */
    async getPages(page){
        const response = await fetch(this.url);
        if (!response.ok) {
            throw new Error(`An error occurred: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
}