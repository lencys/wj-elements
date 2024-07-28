import { default as WJElement, event } from "../wje-element/element.js";
    import styles from "./styles/styles.css?inline";
    import * as service from "./service/service.js";
    
    /**
     * @summary OrgchartItem is a custom web component that extends WJElement.
     * @documentation https://elements.webjet.sk/components/OrgchartItem
     * @status stable
     *  
     * @extends WJElement
     * 
     * @csspart - Styles the element.
     *  
     * @tag wje-orgchart-item
     * 
     * @example
     * <wje-orgchart-item></wje-orgchart-item>
     */
    export default class OrgchartItem extends WJElement {
        /**
         * Creates an instance of OrgchartItem.
         *
         * @constructor
         */
        constructor() {
            super();
        }
        
        className = "OrgchartItem";
    
        
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
         * Sets up the attributes for the component.
         */
        setupAttributes() {
            this.isShadowRoot = "open";
        }

        beforeDraw() {
            if (this.parentElement && this.parentElement.tagName === 'WJE-ORGCHART-GROUP') {
                this.classList.add('parent-group');
            }
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
            native.setAttribute("part", "native");
            native.classList.add("orgchart-item");

            let card = document.createElement("wje-card");

            let slot = document.createElement("slot");

            let child = document.createElement("slot");
            child.setAttribute("name", "child");

            card.appendChild(slot);

            native.appendChild(card);
            native.appendChild(child);
    
            fragment.appendChild(native);
    
            return fragment;
        }
    }
    