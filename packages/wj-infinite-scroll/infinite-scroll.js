import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

const template = document.createElement('template');

template.innerHTML = `<style>
	${styles}
</style>`;
export class InfiniteScroll extends WJElement {
    constructor(options = {}) {
        super(template);

        this.infiniteScrollTemplate = this.querySelector("[iterate]").outerHTML;
        this.querySelector("[iterate]").remove(); // remove template
        this.totalPages = 0;
        this.isLoading = [];

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

    className = "InfiniteScroll";

    static get observedAttributes() {
        return [];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    beforeDraw(context, store, params) {
        this.setAttribute("style", "height: " + this.height);
    }

    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let slot = document.createElement("slot");

        let loader = document.createElement("div");
        loader.classList.add("loader");

        fragment.appendChild(loader);
        fragment.appendChild(slot);

        this.loaderEl = loader;

        return fragment;
    }

    async afterDraw() {
        this.queryParams = this.queryParams || '';
        this.size = +this.size || 10;
        this.currentPage = 0;

        this.addEventListener('scroll', this.onScroll);
        await this.loadPages(this.currentPage);
    }

    onScroll = (e)=> {
        const { scrollTop, scrollHeight, clientHeight } = e.target;

        if (scrollTop + clientHeight >= scrollHeight - 300 && this.currentPage <= this.totalPages && this.isLoading.includes(this.currentPage)) {
            this.currentPage++;
            this.loadPages(this.currentPage);
        }
    }

    /** @function getPages
     * @description nacitanie dalsej stranky
     * @return response json
     */

    async getPages(page){
        let hasParams = this.url.includes('?');
        const response = await fetch(`${this.url}${hasParams ? '&' : '?'}page=${page}&size=${this.size}${this?.queryParams}`);
        if (!response.ok) {
            throw new Error(`An error occurred: ${response.status}`);
        }
        return await response.json();
    }

    hideLoader(){
        this.loaderEl.classList.remove('show');
    }

    showLoader(){
        this.loaderEl.classList.add('show');
    }

    hasMorePages(page){
        return this.totalPages === 0 || page <= this.totalPages;
    }

    /** @function getPages
     * @description methoda zavola getPages a nasledne sa vykona callback funkcia draw. Ako a kde sa nieco vykresli sa deje v inicializacii lib-ky
     * @return response json
     */

    async loadPages (page){
        this.showLoader();
        try {
            if (this.hasMorePages(page)) {

                const response = await this.getPages(page);
                this.totalPages = response.totalPages;
                this.currentPage = page;
                let result = response.data.map((item) => {
                    return this.infiniteScrollTemplate.interpolate(item);
                });

                let placement = this;

                // ak existuje attribut "container" tak sa vyhlada element
                if(this.hasAttribute("placement"))
                    placement = this.querySelector(this.placement);

                placement.insertAdjacentHTML("beforeend", result.join(""));

                this.isLoading.push(page);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            this.hideLoader();
        }
    };
}

customElements.get("wj-infinite-scroll") || window.customElements.define("wj-infinite-scroll", InfiniteScroll);