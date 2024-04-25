import { default as WJElement, WjElementUtils, event } from "../wje-element/element.js";
import styles from "./styles/styles.css?inline";

/**
 * `InfiniteScroll` is a custom web component that represents an infinite scroll.
 * It extends from `WJElement`.
 * @summary This element allows users to scroll through a potentially infinite amount of content.
 * @documentation https://elements.webjet.sk/components/infinite-scroll
 * @status stable
 *
 * @extends {WJElement}
 *
 * @csspart loader - The loader part of the infinite scroll.
 *
 * @slot - The default slot for the infinite scroll.
 *
 * @cssproperty [--wje-infinite-scroll-width=100%] - The width of the infinite scroll.
 * @cssproperty [--wje-infinite-scroll-height=300px] - The height of the infinite scroll.
 *
 * @fires wje-infinite-scroll:click-item - Event fired when an item is clicked.
 *
 * @tag wje-infinite-scroll
 */

export default class InfiniteScroll extends WJElement {
    /**
     * Creates an instance of InfiniteScroll.
     *
     * @constructor
     * @param {Object} options - The options for the InfiniteScroll.
     */
    constructor(options = {}) {
        super();

        this.totalPages = 0;
        this.isLoading = [];
        this._response = {};
        this.iterate = null;
        this._infiniteScrollTemplate = null;

        /**
         * Interpolates a string with the given parameters.
         *
         * @param {Object} params - The parameters for interpolation.
         * @returns {string} The interpolated string.
         */
        String.prototype.interpolate = function(params) {
            let template = this;
            let keys = template.match(/\{{.*?\}}/g);

            if(keys) {
                for (let key of keys) {
                    let cleanKey = key.replace('{{', '').replace('}}', '');
                    let val = '';
                    cleanKey.split('.').forEach(k => {
                        val = (val == '') ?  params[k] : val[k];
                    });

                    template = template.replace(key, val);
                }
            }
            return template;
        };
    }

    set infiniteScrollTemplate(value) {
        this._infiniteScrollTemplate = value;
    }

    get infiniteScrollTemplate() {
        return this._infiniteScrollTemplate;
    }

    set response(value) {
        this._response = value;
    }

    get response() {
        return this._response;
    }

    set objectName(value) {
        this.setAttribute("object-name", value);
    }

    get objectName() {
        return this.getAttribute("object-name") || "data";
    }

    className = "InfiniteScroll";

    /**
     * Returns the CSS styles for the component.
     *
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

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
     *
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     */
    beforeDraw(context, store, params) {
        this.iterate = this.querySelector("[iterate]");
        this.infiniteScrollTemplate = this.iterate?.outerHTML;
        this.iterate?.remove(); // remove template

        this.setAttribute("style", "height: " + this.height);
    }

    /**
     * Draws the component.
     *
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.classList.add("native");
        native.setAttribute("part", "native-infinite-scroll");

        let slot = document.createElement("slot");

        let ending = document.createElement("slot");
        ending.setAttribute("name", "ending");

        if(WjElementUtils.hasSlot(this, "loader")) {
            let loading = document.createElement("div");
            loading.classList.add("loading");

            let loader = document.createElement("slot");
            loader.setAttribute("name", "loader");

            loading.appendChild(loader);

            this.loadingEl = loading;

            fragment.appendChild(loading);
        }


        native.appendChild(slot);
        native.appendChild(ending);

        fragment.appendChild(native);


        this.endingEl = ending;

        return fragment;
    }

    /**
     * Called after the component has been drawn.
     */
    async afterDraw() {
        this.queryParams = this.queryParams || '';
        this.size = +this.size || 10;
        this.currentPage = 0;

        this.scrollEvent();
        await this.loadPages(this.currentPage);
    }

    /**
     * Adds the scroll event listener.
     */
    scrollEvent = () => {
        this.addEventListener("scroll", this.onScroll);
    }

    /**
     * Removes the scroll event listener.
     */
    unScrollEvent = () => {
        this.removeEventListener("scroll", this.onScroll);
    }

    /**
     * Handles the scroll event.
     *
     * @param {Event} e - The event.
     */
    onScroll = (e)=> {
        const { scrollTop, scrollHeight, clientHeight } = e.target;

        if (scrollTop + clientHeight >= scrollHeight - 300 && this.currentPage <= this.totalPages && this.isLoading.includes(this.currentPage)) {
            this.currentPage++;
            this.loadPages(this.currentPage);
        }
    }

    /**
     * Fetches the pages from the server.
     *
     * @param {number} page - The page number.
     * @returns {Promise<Object>} The response from the server.
     */
    async getPages(page){
        let hasParams = this.url.includes('?');
        const response = await fetch(`${this.url}${hasParams ? '&' : '?'}page=${page}&size=${this.size}${this?.queryParams}`);
        if (!response.ok) {
            throw new Error(`An error occurred: ${response.status}`);
        }
        return await response.json();
    }

    /**
     * Hides the loader.
     */
    hideLoader(){
        this?.loadingEl?.classList.remove('show');
    }

    /**
     * Shows the loader.
     */
    showLoader(){
        this?.loadingEl?.classList.add('show');
    }

    /**
     * Checks if there are more pages to load.
     *
     * @param {number} page - The page number.
     * @returns {boolean} Whether there are more pages to load.
     */
    hasMorePages(page){
        return this.totalPages === 0 || page < this.totalPages;
    }

    /**
     * Loads the pages.
     *
     * @param {number} page - The page number.
     */
    async loadPages (page){
        this.showLoader();
        try {
            if (this.hasMorePages(page) || typeof this.setCustomData === "function") {
                let response;

                if (typeof this.setCustomData === "function") {
                    response = await this.setCustomData(page);
                } else {
                    response = await this.getPages(page);
                }

                this.totalPages = response.totalPages;
                this.currentPage = page;

                const parser = new DOMParser();

                let placement = this;

                // if there is a "container" attribute, find the element
                if(this.hasAttribute("placement"))
                    placement = this.querySelector(this.placement);

                this.response = response;
                response[this.objectName].forEach((item) => {
                    const interpolateItem = this.infiniteScrollTemplate.interpolate(item);
                    const doc = parser.parseFromString(interpolateItem, 'text/html');
                    const element = doc.querySelector(doc.firstChild.nodeName.toLowerCase());

                    event.addListener(element, "click", "wje-infinite-scroll:click-item", null);

                    placement.insertAdjacentElement("beforeend", element);
                });

                this.isLoading.push(page);
            } else {
                event.dispatchCustomEvent(this, "wje-infinite-scroll:complete");
                this.endingEl.classList.add("show");
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            this.hideLoader();
        }
    };
}