import { default as WJElement, WjElementUtils } from "../wje-element/element.js";
import { interceptLinks, Router } from './plugins/slick-router/slick-router.js';
import { paramValue, wc } from './plugins/slick-router/middlewares/wc.js';
import { routerLinks } from './plugins/slick-router/middlewares/router-links.js';
import { events } from './plugins/slick-router/middlewares/events.js';

/**
 * `Routerx` is a custom web component that represents a router in a routing system.
 * @summary This element represents a router in a routing system.
 * @documentation https://elements.webjet.sk/components/router
 * @status stable
 *
 * @extends {WJElement}
 *
 * @tag wje-router
 */
export default class Routerx extends WJElement {
    /**
     * Creates an instance of Routerx.
     *
     * @constructor
     */
    constructor() {
        super();
    }

    className = "Routerx";

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
     * Sets up the router after the component is drawn.
     */
    afterDraw() {
        const htmlString = this.outerHTML;

        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(htmlString, 'text/html');
        const rootElement = htmlDocument.querySelector("wje-router");

        const routes = this.parseElement(rootElement).root;

        this.router = new Router({
            outlet: this.outlet || "wje-router-outlet",
            log: false,
            logError: false,
            root: this.root || "/",
            pushState: true,
        });

        this.router.map(routes);
        this.router.use(this.setBreadcrumb);
        this.router.use(wc);
        this.router.use(routerLinks);
        this.router.use(events);
        this.router.use(this.resetScrollPosition);
        this.router.listen();

        this.unbindIntercept = interceptLinks(this.router);
    }

    /**
     * Parses an element and returns an object representation.
     *
     * @param {Element} element - The element to parse.
     * @returns {Object} The object representation of the element.
     */
    parseElement(element) {
        const obj = {};
        const attributes = element.attributes;

        for (let i = 0; i < attributes.length; i++) {
            const attributeName = attributes[i].name;
            const attributeValue = attributes[i].value;

            if (attributeName === 'component' && attributeValue.indexOf(".js") > -1) {
                obj.component = () => import(attributeValue); // lazy loading component
            } else {
                if (attributeName !== 'shadow') {
                    const camelCase = attributeName.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                    obj[camelCase] = attributeValue;
                }
            }
        }

        const children = [];
        const childElements = Array.from(element.children);

        childElements.forEach(childElement => {
            children.push(this.parseElement(childElement));
        });

        if (children.length > 0 && element.tagName === "WJE-ROUTE") {
            obj.children = children;
        } else {
            obj.root = children;
        }

        return obj;
    }

    /**
     * Sets the breadcrumb for the transition.
     *
     * @param {Object} transition - The transition.
     */
    setBreadcrumb = (transition) => {
        let breadcrumb = [
            ...transition.routes
                .filter((obj) => "breadcrumb" in obj.options)
                .map((b, i) => {
                    return {
                        name: b.options.breadcrumbPath || b.name,
                        text: b.options.breadcrumb instanceof Function ? b.options.breadcrumb?.(transition) : b.options.breadcrumb,
                        params: { ...b.params, ...transition.params },
                        path: this.router.generate(b.name, { ...b.params, ...transition.params }),
                    }
                }),
        ];

        transition.breadcrumbs = breadcrumb;
    }

    setRouteParamsToStore(transition) {
        this.store.dispatch(this.defaultStoreActions.addAction('params')(transition.params));
    };

    /**
     * Resets the scroll position.
     *
     * @param {Object} transition - The transition.
     */
    resetScrollPosition = (transition) => {
        window.scrollTo(0, 0);
    }

    /**
     * Cleans up before the component is disconnected.
     */
    beforeDisconnect() {
        this.unbindIntercept();
        this.router.destroy();
    }
}