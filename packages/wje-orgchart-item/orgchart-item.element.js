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

            let slot = document.createElement("slot");

            native.appendChild(slot);
    
            fragment.appendChild(native);
    
            return fragment;
        }
    }
    