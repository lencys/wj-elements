import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";
import { interceptLinks, Router } from './plugins/slick-router/slick-router.js';
import { paramValue, wc } from './plugins/slick-router/middlewares/wc.js';
import { routerLinks } from './plugins/slick-router/middlewares/router-links.js';
import { events } from './plugins/slick-router/middlewares/events.js';
// import "../../assets/components/demo-badge.js";
// import { RouterOutlet } from  "../wj-router-outlet/router-outlet.js";

export class Routerx extends WJElement {
    constructor() {
        super();
    }

    className = "Routerx";

    static get observedAttributes() {
        return [];
    }

    setupAttributes() {
        this.isShadowRoot = "open";
    }

    afterDraw() {
        const htmlString = this.outerHTML;

        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(htmlString, 'text/html');
        const rootElement = htmlDocument.querySelector("wj-router");

        const routes = this.parseElement(rootElement).root;
        const router = new Router({
            outlet: this.outlet || "wj-router-outlet",
            log: true,
            logError: true,
            root: "/",
            pushState: true,
        });
        router.map(routes);
        router.use(wc);
        router.use(routerLinks);
        router.use(events);
        router.listen();

        interceptLinks(router);
        // let b = document.createElement("demo-badge")
        // console.log("router", b.shadowRoot);

    }

    parseElement(element) {
        const obj = {};

        const attributes = element.attributes;
        for (let i = 0; i < attributes.length; i++) {
            const attributeName = attributes[i].name;
            if (attributeName !== 'shadow') {
                obj[attributeName] = attributes[i].value;
            }
        }

        const children = [];
        const childElements = Array.from(element.children);

        childElements.forEach(childElement => {
            children.push(this.parseElement(childElement));
        });

        if (children.length > 0 && element.tagName === "WJ-ROUTE") {
            obj.children = children;
        } else {
            obj.root = children;
        }

        return obj;
    }
}

customElements.get("wj-router") || window.customElements.define("wj-router", Routerx);