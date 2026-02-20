import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `Toolbar` is a custom web component that represents a toolbar.
 * @summary This element represents a toolbar.
 * @documentation https://elements.webjet.sk/components/toolbar
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native toolbar wrapper.
 * @slot start - The start slot for the toolbar.
 * @slot end - The end slot for the toolbar.
 * @cssproperty [--wje-toolbar-background=var(--wje-background)] - Specifies the background color of the toolbar. Accepts any valid CSS color value, such as `hex`, `rgb`, or `CSS variable`.
 * @cssproperty [--wje-toolbar-height=auto] - Defines the height of the toolbar. If set to `auto`, the height adjusts based on the content.
 * @cssproperty [--wje-toolbar-min-height=70px] - Sets the minimum height of the toolbar. Ensures the toolbar maintains a consistent minimum size.
 * @cssproperty [--wje-toolbar-padding-top=1rem] - Specifies the padding at the top of the toolbar. Accepts any valid CSS length unit.
 * @cssproperty [--wje-toolbar-padding-bottom=1rem] - Specifies the padding at the bottom of the toolbar. Helps create spacing between the content and the bottom edge.
 * @cssproperty [--wje-toolbar-padding-inline=1.5rem] - Defines the horizontal padding (left and right) of the toolbar. Creates consistent spacing on both sides.
 * @cssproperty [--wje-toolbar-border-color=var(--wje-border-color)] - Sets the color of the toolbar's border. Accepts any valid CSS color value.
 * @cssproperty [--wje-toolbar-top=0] - Specifies the vertical position of the toolbar relative to its container. Useful for fixed or sticky toolbars.
 * @tag wje-toolbar
 */

export default class Toolbar extends WJElement {
    /**
     * Creates an instance of Toolbar.
     */
    constructor() {
        super();
    }

    /**
     * The class name for the component.
     * @type {string}
     */
    className = 'Toolbar';

    /**
     * Returns the CSS stylesheet for the component.
     * @static
     * @returns {CSSStyleSheet} The CSS stylesheet
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Returns the list of observed attributes.
     * @static
     * @returns {Array} An empty array
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
        this.syncAria();
    }

    /**
     * Draws the component for the toolbar.
     * @returns {object} Document fragment
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.setAttribute('part', 'native');
        native.classList.add('native-toolbar');

        let start = document.createElement('slot');
        start.setAttribute('name', 'start');

        let end = document.createElement('slot');
        end.setAttribute('name', 'end');

        native.appendChild(start);
        native.appendChild(end);
        fragment.appendChild(native);

        return fragment;
    }

    /**
     * Sync ARIA attributes on host.
     */
    syncAria() {
        if (!this.hasAttribute('role')) {
            this.setAriaState({ role: 'toolbar' });
        }

        const ariaLabel = this.getAttribute('aria-label');
        const label = this.getAttribute('label');
        if (!ariaLabel && label) {
            this.setAriaState({ label });
        }
    }
}
