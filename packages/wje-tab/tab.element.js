import { default as WJElement, event } from '../wje-element/element.js';
import { bindRouterLinks } from 'slick-router/middlewares/router-links.js';
import styles from './styles/styles.css?inline';

/**
 * `Tab` is a custom web component that represents a tab.
 * @summary This element represents a tab.
 * @documentation https://elements.webjet.sk/components/tab
 * @status stable
 * @augments {WJElement}
 * @param {string} panel The name of the tab panel. This is used to identify the corresponding tab panel.
 * @param {string} route The route to navigate to when the tab is clicked.
 * @cssproperty [--wje-tab-text-transform=uppercase] - The text transformation for the tab (e.g., uppercase, lowercase).
 * @cssproperty [--wje-tab-font-weight=500] - The font weight of the tab text.
 * @cssproperty [--wje-tab-letter-spacing=0.06em] - The letter spacing of the tab text.
 * @cssproperty [--wje-tab-padding-inline=1rem] - The horizontal padding of the tab.
 * @cssproperty [--wje-tab-padding-top=.75rem] - The top padding of the tab text.
 * @cssproperty [--wje-tab-padding-bottom=.75rem] - The bottom padding of the tab text.
 * @cssproperty [--wje-tab-color-active=var(--wje-color-primary-11)] - The text color of the active tab.
 * @cssproperty [--wje-tab-color-hover=var(--wje-color-primary-1)] - The text color of the tab when hovered.
 * //@fires wje-tab:change - Dispatched when the tab is changed.
 * @tag wje-tab
 */
export default class Tab extends WJElement {
    /**
     * Creates an instance of Tab.
     */
    constructor() {
        super();

        /**
         * Indicates whether this is the last tab.
         * @type {boolean}
         */
        this.last = false;
        this._hasPanel = false;
    }

    /**
     * Sets the panel attribute to the specified value.
     * @param {string} value The value to set for the panel attribute.
     */
    set panel(value) {
        this.setAttribute('panel', value);
    }

    /**
     * Retrieves the value of the 'panel' attribute of the element.
     * @returns {string|null} Returns the 'panel' attribute value if it exists; otherwise, returns null.
     */
    get panel() {
        return this.getAttribute('panel') || null;
    }

    /**
     * Sets the value of the 'route' attribute for the current object.
     * @param {string} value The new value to set for the 'route' attribute.
     */
    set route(value) {
        this.setAttribute('route', value);
    }

    /**
     * Retrieves the value of the 'route' attribute.
     * If the 'route' attribute is not set, it returns null.
     * @returns {string|null} The value of the 'route' attribute or null if not set.
     */
    get route() {
        return this.getAttribute('route') || null;
    }

    /**
     * The class name for the component.
     */
    className = 'Tab';

    /**
     * Returns the CSS styles for the component.
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
        this.isShadowRoot = 'open';
        this.setAttribute('active-class', 'active');

        this.setAriaState({
            role: 'tab',
            selected: false,
            disabled: this.hasAttribute('disabled'),
        });
    }


    /**
     * Draws the component for the tab.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let slot = document.createElement('slot');

        let href = this.panel || this.route || "#";

        let a = document.createElement('a');
        a.setAttribute('href', (this.panel ? "#" : "") + href);
        a.setAttribute('part', 'native');
        a.classList.add('native-tab');
        a.appendChild(slot);

        fragment.appendChild(a);

        this.slotEl = slot;

        return fragment;
    }

    /**
     * Sets up event listeners after the component is rendered.
     * // @fires wje-tab:change - Dispatched when the component is clicked, indicating a tab change.
     */
    afterDraw() {
        this.unbindRouterLinks = bindRouterLinks(this.parentElement, { selector: false });
        event.addListener(this, 'click', 'wje-tab:change');
        this.syncAriaLabel();
        this.slotEl?.addEventListener('slotchange', () => this.syncAriaLabel());
    }

    /**
     * Sync aria-label on host based on slotted text when not provided.
     */
    syncAriaLabel() {
        if (this.hasAttribute('aria-label') || this.hasAttribute('aria-labelledby')) return;
        const text = (this.slotEl?.assignedNodes({ flatten: true }) || [])
            .map((node) => node.textContent || '')
            .join('')
            .trim();
        if (text) {
            this.setAttribute('aria-label', text);
        }
    }

    /**
     * Sets the roving tabindex on the internal focusable anchor.
     * @param {number} value
     */
    setRovingTabIndex(value) {
        const anchor = this.context?.querySelector('a');
        if (!anchor) return;
        anchor.setAttribute('tabindex', String(value));
    }

    /**
     * Cleans up before the component is disconnected.
     */
    beforeDisconnect() {
        this.unbindRouterLinks?.();
    }
}
