const routerLinksData = Symbol('routerLinksData');
const linkContainers = new Set();
let router;

const delegate = function (el, eventName, selector, listener, context) {
    const handler = function (e) {
        let node = e.target;
        for (; node && node !== el; node = node.parentNode) {
            if (node.matches && node.matches(selector)) {
                e.selectorTarget = node;
                listener.call(context, e);
            }
        }
    };

    handler.eventName = eventName;
    el.addEventListener(eventName, handler, false);
    return handler;
};

function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

const undelegate = function (el, handler) {
    const eventName = handler.eventName;
    el.removeEventListener(eventName, handler, false);
};

const camelize = (str) => {
    if (str.indexOf('-') === -1) return str;
    const words = str.split('-');
    let result = '';
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        result += i ? word.charAt(0).toUpperCase() + word.slice(1) : word;
    }
    return result;
};

function mutationHandler(mutations, observer) {
    mutations.forEach(function (mutation) {
        if (mutation.type === 'attributes') {
            const attr = mutation.attributeName;
            if (attr.indexOf('param-') === 0 || attr.indexOf('query-') === 0) {
                updateLink(mutation.target, observer.rootEl);
            }
        } else {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) {
                    if (node.getAttribute('route')) updateLink(node, observer.rootEl);
                    createLinks(observer.rootEl);
                }
            });
        }
    });
}

const elementsObserverConfig = { childList: true, subtree: true, attributes: true };

function getAttributeValues(el, prefix, result) {
    if (!el) return result;
    const attributes = el.attributes;

    for (let i = 0; i < attributes.length; i++) {
        const attr = attributes[i];
        if (attr.name.indexOf(prefix) === 0) {
            const paramName = camelize(attr.name.slice(prefix.length));
            result[paramName] = attr.value;
        }
    }
    return result;
}

function getDefaults(rootEl, routeName, propName, routeEl, options) {
    let result = options[propName];
    if (typeof result === 'function') result = result.call(rootEl, routeName, routeEl);
    return result || {};
}

function getRouteProp(rootEl, routeName, routeEl, propName, attrPrefix) {
    if (!rootEl || !routeEl || !rootEl[routerLinksData]) return {};
    const options = rootEl[routerLinksData].options;
    const defaults = getDefaults(rootEl, routeName, propName, routeEl, options);
    getAttributeValues(rootEl, attrPrefix, defaults);
    return getAttributeValues(routeEl, attrPrefix, defaults);
}

function updateActiveClass(el, routeName, params, query) {
    const activeClass = el.hasAttribute('active-class') ? el.getAttribute('active-class') : 'active';
    if (activeClass) {
        const isActive = router.isActive(routeName, params, query, el.hasAttribute('exact'));
        el.classList.toggle(activeClass, isActive);
    }
}

function updateLink(el, rootEl) {
    if (!el || !rootEl) return;
    const routeName = el.getAttribute('route');
    if (!routeName) return;
    const params = getRouteProp(rootEl, routeName, el, 'params', 'param-');
    const query = getRouteProp(rootEl, routeName, el, 'query', 'query-');
    try {
        const href = router.generate(routeName, params, query);
        const anchorEl = el.tagName === 'A' ? el : el.querySelector('a');
        if (anchorEl) anchorEl.setAttribute('href', href);
        if (!router.state.activeTransition) {
            updateActiveClass(el, routeName, params, query);
        }
    } catch (error) {
        console.warn(`Error generating link for "${routeName}": ${error}`);
    }
}

function createLinks(rootEl) {
    if (!rootEl) return;
    const routeEls = rootEl.querySelectorAll('[route]');

    routeEls.forEach((el) => {
        updateLink(el, rootEl);
    });
}

function linkClickHandler(e) {
    if (e.type === 'click' && (e.button !== 0 || isModifiedEvent(e))) return;
    e.preventDefault();
    const el = e.selectorTarget;
    if (!el) return;
    const routeName = el.getAttribute('route');
    if (!routeName) return;
    const params = getRouteProp(this, routeName, el, 'params', 'param-');
    const query = getRouteProp(this, routeName, el, 'query', 'query-');
    const method = el.hasAttribute('replace') ? 'replaceWith' : 'transitionTo';
    router[method](routeName, params, query);
}

export function bindRouterLinks(rootEl, options = {}) {
    if (!rootEl) return () => {};
    const observer = new MutationObserver(mutationHandler);

    observer.rootEl = rootEl;
    rootEl[routerLinksData] = { options, observer };

    const eventHandler = delegate(rootEl, options.event || 'click', '[route]', linkClickHandler, rootEl);
    createLinks(rootEl);
    observer.observe(rootEl, elementsObserverConfig);

    linkContainers.add(rootEl);

    return function () {
        linkContainers.delete(rootEl);
        observer.disconnect();
        undelegate(rootEl, eventHandler);
    };
}

function create(instance) {
    router = instance;
}

function done() {
    linkContainers.forEach((rootEl) => {
        if (!rootEl || typeof rootEl.querySelectorAll !== 'function' || !rootEl[routerLinksData]) {
            linkContainers.delete(rootEl);
            return;
        }
        rootEl.querySelectorAll('[route]').forEach((el) => {
            const routeName = el.getAttribute('route');
            if (!routeName) return;
            const params = getRouteProp(rootEl, routeName, el, 'params', 'param-');
            const query = getRouteProp(rootEl, routeName, el, 'query', 'query-');
            updateActiveClass(el, routeName, params, query);
        });
    });
}

export const routerLinks = {
    create,
    done,
};
