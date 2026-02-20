import { default as WJElement } from '../wje-element/element.js';
import { getSvgContent, getUrl, iconContent } from './service/service.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This element represents an icon. `IconElement` is a custom web component that represents an icon.
 * @documentation https://elements.webjet.sk/components/icon
 * @status stable
 * @augments WJElement
 * @csspart svg - The SVG part of the icon
 * @cssproperty [--wje-icon-size=1rem] - The size of the icon element
 * @cssproperty [--wje-icon-width=var(--wje-icon-size, 100%)] - The width of the icon element
 * @cssproperty [--wje-icon-height=var(--wje-icon-size, 100%)] - The height of the icon element
 * @tag wje-icon
 */
export default class Icon extends WJElement {
    /**
     * Creates an instance of IconElement.
     * @class
     */
    constructor() {
        super();
    }

    /**
     * Sets the name of the icon.
     * @type {string}
     */
    className = 'Icon';

    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes() {
        return ['name', 'filled', 'label'];
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
        this.syncAria();
    }

    /**
     * Draws the component.
     * @param {object} context The context for drawing.
     * @param {object} store The store for drawing.
     * @param {object} params The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        this.classList.add('lazy-loaded-image', 'lazy');

        let native = document.createElement('div');
        native.setAttribute('part', 'native');
        native.classList.add('native-icon');

        this.url = getUrl(this);

        fragment.appendChild(native);

        this.native = native;

        return fragment;
    }

    /**
     * Called after the component has been drawn.
     */
    afterDraw() {
        this.syncAria();
        let lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    getSvgContent(this.url).then((svgContent) => {
                        this.native.innerHTML = iconContent?.get(this.url);
                        this.native.querySelector('svg')?.setAttribute('part', 'svg');
                    });

                    this.classList.remove('lazy');
                    lazyImageObserver.unobserve(entry.target);
                }
            });
        });

        lazyImageObserver.observe(this.native);
    }

    /**
     * Sync ARIA attributes on host.
     */
    syncAria() {
        const ariaLabel = this.getAttribute('aria-label');
        const label = this.getAttribute('label');

        if (ariaLabel || label) {
            if (!this.hasAttribute('role')) {
                this.setAttribute('role', 'img');
            }
            if (!ariaLabel && label) {
                this.setAriaState({ label });
            }
            this.removeAttribute('aria-hidden');
        } else {
            this.setAttribute('aria-hidden', 'true');
        }
    }

    /**
     * Handles attribute changes for ARIA sync.
     * @param {string} name
     * @param {string|null} oldValue
     * @param {string|null} newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (super.attributeChangedCallback) {
            super.attributeChangedCallback(name, oldValue, newValue);
        }

        if (name === 'label' && oldValue !== newValue) {
            this.syncAria();
        }
    }
}
