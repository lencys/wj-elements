import { default as WJElement, WjElementUtils } from "../wje-element/element.js";
import { withRouterLinks } from '../wje-router/plugins/slick-router/middlewares/router-links.js';
import styles from "./styles/styles.css?inline";

/**
 * `Toolbar` is a custom web component that represents a toolbar.
 * @summary This element represents a toolbar.
 * @documentation https://elements.webjet.sk/components/toolbar
 * @status stable
 *
 * @extends {WJElement}
 *
 * @csspart native - The native toolbar wrapper.
 *
 * @slot start - The start slot for the toolbar.
 * @slot end - The end slot for the toolbar.
 *
 * @cssproperty [--wje-toolbar-background=var(--wje-background)] - The background of the toolbar.
 * @cssproperty [--wje-toolbar-height=auto] - The height of the toolbar.
 * @cssproperty [--wje-toolbar-min-height=70px] - The min height of the toolbar.
 * @cssproperty [--wje-toolbar-padding-top=1rem] - The padding top of the toolbar.
 * @cssproperty [--wje-toolbar-padding-bottom=1rem] - The padding bottom of the toolbar.
 * @cssproperty [--wje-toolbar-padding-inline=1.5rem] - The padding inline of the toolbar.
 * @cssproperty [--wje-toolbar-border-color=var(--wje-border-color)] - The border color of the toolbar.
 * @cssproperty [--wje-toolbar-top=0] - The top of the toolbar.
 *
 * @tag wje-toolbar
 */
export default class Toolbar extends withRouterLinks( WJElement) {
    /**
     * @constructor
     * @summary Toolbar constructor
     */
    constructor() {
        super();
    }

    /**
     * @summary Class name
     * @type {string}
     */
    className = "Toolbar";

    /**
     * @summary Get CSS stylesheet
     * @static
     * @returns {Object} styles
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * @summary Get observed attributes
     * @static
     * @returns {Array} An empty array
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * @summary Setup attributes
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * @summary Draw method
     * @param {Object} context - The context
     * @param {Object} store - The store
     * @param {Object} params - The parameters
     * @returns {Object} Document fragment
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.classList.add("native-toolbar");

        let start = document.createElement("slot");
        start.setAttribute("name", "start");


        let end = document.createElement("slot");
        end.setAttribute("name", "end");

        native.appendChild(start);
        native.appendChild(end);
        fragment.appendChild(native);

        return fragment;
    }
}