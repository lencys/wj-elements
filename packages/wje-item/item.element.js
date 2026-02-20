import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `Item` is a custom web component that represents an item.
 * @summary This element represents an item.
 * @documentation https://elements.webjet.sk/components/item
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native part
 * @csspart inner - The inner part
 * @slot start - The start slot
 * @slot end - The end slot
 * @slot error - The error slot
 * @slot helper - The helper slot
 * @cssproperty [--wje-item-background=var(--wje-background)] - Sets the background color of the item. Accepts any valid CSS color value.
 * @cssproperty [--wje-item-color=var(--wje-color)] - Defines the text color for the item. Accepts any valid CSS color value.
 * @cssproperty [--wje-item-padding-start=var(--wje-padding)] - Specifies the left padding of the item. Accepts any valid CSS length.
 * @cssproperty [--wje-item-padding-end=var(--wje-padding)] - Specifies the right padding of the item. Accepts any valid CSS length.
 * @cssproperty [--wje-item-padding-top=var(--wje-padding)] - Specifies the top padding of the item. Accepts any valid CSS length.
 * @cssproperty [--wje-item-padding-bottom=var(--wje-padding)] - Specifies the bottom padding of the item. Accepts any valid CSS length.
 * @cssproperty [--wje-item-inner-padding-start=var(--wje-padding)] - Specifies the left inner padding of the item. Accepts any valid CSS length.
 * @cssproperty [--wje-item-inner-padding-end=var(--wje-padding)] - Specifies the right inner padding of the item. Accepts any valid CSS length.
 * @cssproperty [--wje-item-inner-padding-top=var(--wje-padding)] - Specifies the top inner padding of the item. Accepts any valid CSS length.
 * @cssproperty [--wje-item-inner-padding-bottom=var(--wje-padding)] - Specifies the bottom inner padding of the item. Accepts any valid CSS length.
 * @cssproperty [--wje-item-border-radius=var(--wje-border-radius)] - Defines the border radius, providing rounded corners for the item.
 * @cssproperty [--wje-item-border-width=var(--wje-border-width)] - Sets the border width of the item. Accepts any valid CSS length.
 * @cssproperty [--wje-item-border-style=var(--wje-border-style)] - Specifies the style of the border, such as `solid`, `dashed`, or `dotted`.
 * @cssproperty [--wje-item-border-color=var(--wje-border-color)] - Defines the color of the item's border. Accepts any valid CSS color value.
 * @cssproperty [--wje-item-min-height=var(--wje-min-height)] - Sets the minimum height of the item to ensure consistent layout.
 * @cssproperty [--wje-item-transition=var(--wje-transition)] - Specifies the transition effects for the item, such as for hover or focus states.
 * @cssproperty [--wje-item-inner-box-shadow=var(--wje-box-shadow)] - Adds a shadow effect inside the item for a 3D appearance.
 * @tag wje-item
 */
export default class Item extends WJElement {
    /**
     * Item constructor for the class.
     */
    constructor() {
        super();

        this.labelColorStyles = {};
        this.itemStyles = new Map();
        this.inheritedAriaAttributes = {};
        this.multipleInputs = false;
        this.focusable = true;
        this.button = false;
        this.detailIcon = ``; // TODO icon
        this.disabled = false;
        this.counter = false;
        this.routerDirection = 'forward';
        this.type = 'button';
    }

    /**
     * Returns the CSS styles for the component.
     * @returns {boolean}
     */
    isClickable() {
        return this.hasAttribute('href') || this.button;
    }

    /**
     * Returns the CSS styles for the component.
     * @type {string}
     */
    className = 'Item';

    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {object} styles
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Draws the component for the item.
     * @returns {DocumentFragment}
     */
    draw() {
        const TagType = this.isClickable() ? (this.hasAttribute('href') === undefined ? 'button' : 'a') : 'div';

        if (this.hostContext('wje-list', this)) {
            this.classList.add('wje-item-list');
        }

        return `<${TagType} class="item-native" part="native">
			<slot name="start"></slot>
			<div class="item-inner">
					<div class="input-wrapper" part="inner">
							<slot></slot>
					</div>
					<slot name="end"></slot>
			</div>
			<div class="item-highlight"></div>
    </${TagType}>
		<div class="item-bottom">
				<slot name="error"></slot>
				<slot name="helper"></slot>
		</div>`;
    }

    /**
     * Called after the component has been drawn.
     */
    afterDraw() {
        this.syncAria();
    }

    /**
     * Sync ARIA attributes on host.
     */
    syncAria() {
        if (this.hostContext('wje-list', this) && !this.hasAttribute('role')) {
            this.setAriaState({ role: 'listitem' });
        }
    }

    /**
     * Determines if the given element or any of its ancestors matches the specified selector.
     * @param {string} selector The CSS selector to match against the element's ancestors.
     * @param {HTMLElement} el The element from which to start the search.
     * @returns {boolean} - Returns `true` if the element or one of its ancestors matches the selector; otherwise, `false`.
     */
    hostContext = (selector, el) => {
        return el.closest(selector) !== null;
    };
}
