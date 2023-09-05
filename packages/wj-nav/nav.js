import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";

class Nav extends WJElement {
    constructor() {
        super(template);

        this.store.define('nav', [], null);
        this.active = 0;

        this.store.subscribe("nav", (key, state, oldState) => {
            this.data = state;
            this.refresh();
        });
    }

    className = "Breadcrumb";

    static get cssStyleSheet() {
        return styles;
    }

    static get observedAttributes() {
        return ["show-collapsed-indicator", "collapsed", "last"];
    }

    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    beforeDraw( context, store, params ) {
        // this.store.dispatch(this.defaultStoreActions.loadAction('nav')(this.data));
        this.store.dispatch(this.defaultStoreActions.loadAction('itemActions')(this.actions));
        this.store.makeEveryArrayEntryAsStoreState('item', this.data, 'id');
    }

    draw( context, store, params ) {
        let fragment = document.createDocumentFragment();

        let div = document.createElement('div');
        div.classList.add('nav', 'nav-tabs', 'nav-tabs-simple', 'mb-3');

        this.store.getState().nav.forEach((item) => {
            let element = new NavItem({
                data: item,
                actions: this.jsonActions,
                nav: this,
            });

            div.appendChild(element);
        });

        fragment.appendChild(div);

        return fragment;
    }

    afterDraw( context, store, params ) {
        this.shadowRoot.addEventListener('wj-nav-change', ( e ) => {
            let nav = store.getState().nav.map(i => {
                i.id == e.detail.data.id ? i.active = true : i.active = false;
                return i
            });
            store.dispatch(this.defaultStoreActions.loadAction('nav')(nav));
        });
    }
}

window.customElements.define('wj-nav', Nav);